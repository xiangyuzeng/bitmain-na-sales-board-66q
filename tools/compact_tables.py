#!/usr/bin/env python3
"""Convert flat-cell runs in app/data.js into Markdown table syntax.

The docx extractor flattens Word tables (one cell per paragraph), producing
hard-to-read line-by-line answers. This script replaces those flat runs with
| col1 | col2 | ... | rows that the renderer's table rule turns into a real
<table>.

Each table is described by a hint tuple:
    (q_num, anchor_substring, n_cols, n_rows)

After locating the anchor line, the script takes the next n_cols * (1 + n_rows)
non-empty short lines as cells (header + body), reconstructs them as Markdown
table rows, and replaces the in-place answer slice. Long body cells are allowed.

Idempotent: skips a table if the slice immediately after the anchor already
contains markdown rows.
"""

import json
import re
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / 'app' / 'data.js'

# Hand-curated hints. Each entry: (q_num, anchor, n_cols, n_rows).
# Anchors are matched to the FIRST occurrence after the previously-converted slice.
HINTS = [
    # Q7 - 全球 ASIC 三大厂商
    (7,    '全球ASIC三大厂商',          5, 3),

    # Q8 - 完整产品矩阵 / 场景 + 推荐产品
    (8,    '第四，完整的产品矩阵',         2, 5),

    # Q12 - 分销商类型 + 合作层级
    (12,   '将潜在分销商分为三类',         3, 3),
    (12,   '谈判中设计灵活的合作模式',      3, 3),

    # Q14 - 价值主张
    (14,   '突出四个价值点',              2, 4),

    # Q15 - 预算占比 / 展后跟进 / CES 2024 结果
    (15,   '然后制定预算',                2, 7),
    (15,   '80%的展会价值来自展后跟进',     2, 4),
    (15,   '结果案例：CES 2024',         3, 5),

    # Q16 - PayPal 商户分类
    (16,   '把商户分成四类',                3, 4),

    # Q17 - 平台 / 核心需求 / 定制化方案
    (17,   '不同平台的需求不同',           3, 2),

    # Q18 - 客户分层 + 第一年目标
    (18,   'Bitmain的北美客户群体分四层',  3, 4),
    (18,   '五、第一年目标',              2, 6),

    # Q19 - 第二步精准跟进时间表
    (19,   '展会后跟进是关键',             2, 4),

    # Q20 - 4 sub-tables: PayPal / Foxx / Bitmain / 激励机制
    (20,   '在PayPal时（200+商户）',     4, 4),
    (20,   '在Foxx时（6个主要分销商）',    3, 3),
    (20,   '对Bitmain的应用',            3, 4),
    (20,   '对系统集成商和托管伙伴',         2, 4),

    # Q23 - TikTok 结果对比表
    (23,   '实施这些流程改进3个月内',       4, 6),
]


def load_modules():
    src = DATA.read_text(encoding='utf-8')
    m = re.search(r'export const modules = (\[)', src)
    start = m.start(1)
    depth = 0; i = start
    while i < len(src):
        c = src[i]
        if c == '[': depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
        i += 1
    modules = json.loads(src[start:end])
    return src, start, end, modules


def find_card(modules, q_num):
    for mod in modules:
        for c in mod['cards']:
            if c['num'] == q_num:
                return c
    return None


def convert_card(card, hints_for_card):
    """Apply all hints for a single card to its answer text."""
    lines = card['answer'].split('\n')
    cursor = 0   # search position in lines list

    for (anchor, n_cols, n_rows) in hints_for_card:
        # Find the anchor line at or after cursor
        anchor_idx = None
        for j in range(cursor, len(lines)):
            if anchor in lines[j]:
                anchor_idx = j
                break
        if anchor_idx is None:
            print(f'  [warn] Q{card["num"]} anchor not found: {anchor!r}')
            continue

        # Idempotency: if the next non-empty line already starts with '|', skip
        peek = anchor_idx + 1
        while peek < len(lines) and not lines[peek].strip():
            peek += 1
        if peek < len(lines) and lines[peek].lstrip().startswith('|'):
            cursor = peek
            print(f'  [skip] Q{card["num"]} {anchor!r} already converted')
            continue

        # Collect the next n_cols * (1+n_rows) non-empty lines as cells
        need = n_cols * (1 + n_rows)
        cells = []
        slice_start = None
        slice_end = None
        k = anchor_idx + 1
        while k < len(lines) and len(cells) < need:
            t = lines[k].strip()
            if t:
                if slice_start is None:
                    slice_start = k
                cells.append(t)
                slice_end = k
            k += 1
        if len(cells) < need:
            print(f'  [warn] Q{card["num"]} {anchor!r} expected {need} cells, got {len(cells)}')
            continue

        # Build markdown table rows
        header_cells = cells[:n_cols]
        body_cells = cells[n_cols:]
        md_rows = []
        md_rows.append('| ' + ' | '.join(header_cells) + ' |')
        md_rows.append('| ' + ' | '.join(['---'] * n_cols) + ' |')
        for r in range(n_rows):
            row = body_cells[r * n_cols:(r + 1) * n_cols]
            md_rows.append('| ' + ' | '.join(row) + ' |')

        # Replace lines[slice_start..slice_end] (inclusive) with the markdown rows
        new_lines = lines[:slice_start] + md_rows + lines[slice_end + 1:]
        # Update cursor to point past the inserted block
        cursor = slice_start + len(md_rows)
        lines = new_lines
        print(f'  [ok]   Q{card["num"]} {anchor!r}: {n_cols}×{n_rows} table')

    new_answer = '\n'.join(lines)
    if new_answer != card['answer']:
        card['answer'] = new_answer
        card['charCount'] = len(new_answer)
        return True
    return False


def main():
    src, start, end, modules = load_modules()

    # Group hints by q_num, preserving order
    by_q = {}
    for q, anchor, c, r in HINTS:
        by_q.setdefault(q, []).append((anchor, c, r))

    changed = 0
    for q in by_q:
        card = find_card(modules, q)
        if card is None:
            print(f'[error] Q{q} not found')
            continue
        if convert_card(card, by_q[q]):
            changed += 1

    new_arr = json.dumps(modules, ensure_ascii=False, indent=2)
    new_src = src[:start] + new_arr + src[end:]
    DATA.write_text(new_src, encoding='utf-8')
    print(f'\n[summary] {changed} cards updated')

    # Audit: count |-row tables across all answers
    table_count = 0
    cards_with_table = 0
    for mod in modules:
        for c in mod['cards']:
            if '| ---' in c['answer']:
                cards_with_table += 1
                table_count += c['answer'].count('| ---')
    print(f'[audit] {cards_with_table} cards contain markdown tables ({table_count} tables total)')


if __name__ == '__main__':
    main()
