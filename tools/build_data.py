#!/usr/bin/env python3
"""Extract Q&A pairs from Bitmain_Interview_Prep_Chinese.docx and emit app/data.js.

Walks the document.xml paragraph tree, detects question boundaries (Q1, Q2, ..., Q22.1, ..., Q66),
collects each question's title + answer body, assigns each card to one of 9 modules and one of
5 question types, then writes app/data.js with QTYPE + modules.

Run from project root:
  python3 tools/build_data.py /absolute/path/to/Bitmain_Interview_Prep_Chinese.docx
"""

import json
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

W_NS = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'

QUESTION_RE = re.compile(r'^Q(?:(\d+\.\d+)|(\d+)\.)\s+(.*)$')
CHAPTER_RE = re.compile(r'^(第[一二三四五六七八九十]+(?:章|部分)|附录\s*[A-Z])')

# ---- Module assignment by Q-number (string form) -----------------------------------------
QNUM_TO_MODULE = {}
def _assign(qnums, mod_id):
    for q in qnums:
        QNUM_TO_MODULE[str(q)] = mod_id

_assign(['1','2','3','4','5'], 'mod1')
_assign(['6','7','8','9','10'], 'mod2')
_assign(['11','12','13','14','15'], 'mod3')
_assign(['16','17'], 'mod4')
_assign(['18','19','20','21','22','22.1','23'], 'mod5')
_assign([str(i) for i in range(24, 39)], 'mod6')           # Q24..Q38
_assign([str(i) for i in range(39, 48)], 'mod7')           # Q39..Q47
_assign([str(i) for i in range(48, 54)], 'mod8')           # Q48..Q53
_assign([str(i) for i in range(54, 61)] + [str(i) for i in range(62, 67)], 'mod9')  # Q54..Q60, Q62..Q66

# ---- Q-type assignment -------------------------------------------------------------------
QNUM_TO_TYPE = {}
def _typ(qnums, t):
    for q in qnums:
        QNUM_TO_TYPE[str(q)] = t

_typ(['1','2','4','5','21','23','48','50','51','52','53'], 'B')
_typ(['11','12','13','14','15','16','17','19','20','22','22.1'], 'P')
_typ(['3','6','7','8','9','10','24','25','26','27','28','29','30','49'], 'T')
_typ(['18','31','32','33','34','35','36','37','38'] + [str(i) for i in range(54,61)] + [str(i) for i in range(62,67)], 'S')
_typ([str(i) for i in range(39,48)], 'R')

# ---- Module metadata ---------------------------------------------------------------------
MODULES_META = [
    ('mod1', '开场必答', '🎬', '#B71C1C', '自我介绍·跳槽动机·薪资·入职时间·矿业兴趣'),
    ('mod2', '公司 & 行业认知', '🏢', '#1565C0', 'Bitmain认知·矿业经济学·减半周期·北美竞争优势'),
    ('mod3', 'Foxx经历深挖', '🛒', '#E65100', '北美分销·Walmart/Target/Best Buy·T-Mobile/ACP·CES展会'),
    ('mod4', 'PayPal经历', '💳', '#00838F', '数据驱动销售·Amazon/eBay解决方案·跨境团队'),
    ('mod5', '销售能力', '📈', '#6A1B9A', 'GTM策略·新客开发·大客户维护·最难挑战·最大成就'),
    ('mod6', 'Bitmain特定场景', '⚡', '#2E7D32', '产品矩阵·J/TH·水冷TCO·竞品·矿企·AI转型·美国工厂'),
    ('mod7', '反问环节', '🔄', '#4527A0', '团队/quota/汇报/目标客户/托管/工厂/合规/AI/30-60-90'),
    ('mod8', '行为STAR补充', '🗣️', '#BF360C', 'mining-native对比·90天补差·失败deal·内部冲突·错过目标'),
    ('mod9', '商业战略补充', '🧠', '#37474F', '客户分层·公私采购·对冲基金·F1000·100K RFQ·BTC质押·政治风险'),
]

# ------------------------------------------------------------------------------------------
def extract_paragraphs(docx_path: Path):
    """Return list of paragraph strings from docx."""
    with zipfile.ZipFile(docx_path) as z:
        xml = z.read('word/document.xml').decode('utf-8')
    root = ET.fromstring(xml)
    paragraphs = []
    for p in root.iter(W_NS + 'p'):
        text = ''.join(t.text or '' for t in p.iter(W_NS + 't'))
        paragraphs.append(text)
    return paragraphs

def parse_questions(paragraphs):
    """Walk paragraphs in order; emit list of {qnum, title, answer_paragraphs}."""
    questions = []
    current = None

    def flush():
        if current is not None:
            answer = '\n\n'.join(p.strip() for p in current['answer'] if p.strip())
            questions.append({
                'qnum': current['qnum'],
                'title': current['title'].strip(),
                'answer': answer,
            })

    for para in paragraphs:
        s = para.strip()
        if not s:
            continue
        m = QUESTION_RE.match(s)
        if m:
            flush()
            qnum = m.group(1) or m.group(2)
            title = m.group(3).strip()
            current = {'qnum': qnum, 'title': title, 'answer': []}
            continue
        # New chapter resets the current question (its answer ends at the chapter break).
        if CHAPTER_RE.match(s):
            flush()
            current = None
            continue
        if current is not None:
            current['answer'].append(s)
    flush()
    return questions

def build_modules(questions):
    by_mod = {mid: [] for (mid, *_rest) in MODULES_META}
    skipped = []
    for q in questions:
        qnum = q['qnum']
        mod_id = QNUM_TO_MODULE.get(qnum)
        qtype = QNUM_TO_TYPE.get(qnum, 'B')
        if mod_id is None:
            skipped.append(qnum)
            continue
        by_mod[mod_id].append({
            'qnum': qnum,
            'qnum_int': int(float(qnum) * 10) if '.' in qnum else int(qnum) * 10,  # for sort
            'title': q['title'],
            'answer': q['answer'],
            'qtype': qtype,
        })

    if skipped:
        print(f"[warn] questions skipped (no module mapping): {skipped}", file=sys.stderr)

    modules = []
    for (mid, name, icon, color, desc) in MODULES_META:
        cards_raw = sorted(by_mod[mid], key=lambda c: c['qnum_int'])
        cards = []
        for i, c in enumerate(cards_raw, start=1):
            num_field = float(c['qnum']) if '.' in c['qnum'] else int(c['qnum'])
            cards.append({
                'id': f"{mid.replace('mod','m')}-{i}",
                'num': num_field,
                'title': c['title'],
                'answer': c['answer'],
                'qtype': c['qtype'],
                'charCount': len(c['answer']),
            })
        modules.append({
            'id': mid,
            'name': name,
            'color': color,
            'icon': icon,
            'description': desc,
            'cards': cards,
        })
    return modules

QTYPE_JS = '''export const QTYPE = {
  B: { label: "Behavioral", icon: "\\ud83d\\udde3\\ufe0f", bg: "#FFF3E0", color: "#E65100", desc: "\\u884c\\u4e3a\\u9762\\u8bd5" },
  P: { label: "Project",    icon: "\\ud83d\\udd0d",         bg: "#E3F2FD", color: "#1565C0", desc: "\\u9879\\u76ee\\u6df1\\u6316" },
  T: { label: "Technical",  icon: "\\u2699\\ufe0f",         bg: "#F3E5F5", color: "#6A1B9A", desc: "\\u884c\\u4e1a\\u6280\\u672f" },
  S: { label: "Sales",      icon: "\\ud83d\\udcc8",         bg: "#E8F5E9", color: "#2E7D32", desc: "\\u9500\\u552e\\u7b56\\u7565" },
  R: { label: "Reverse",    icon: "\\ud83d\\udd04",         bg: "#EDE7F6", color: "#4527A0", desc: "\\u53cd\\u95ee\\u73af\\u8282" },
};
'''

def emit_data_js(modules):
    total = sum(len(m['cards']) for m in modules)
    header = (
        f"// Bitmain北美机构销售 · 面试答题板 · {total}题\n"
        f"// {len(modules)}模块 · 行为STAR · 项目深挖 · 行业技术 · 销售策略 · 反问环节\n\n"
    )
    body = "export const modules = " + json.dumps(modules, ensure_ascii=False, indent=2) + ";\n"
    return header + QTYPE_JS + "\n" + body

def main():
    if len(sys.argv) < 2:
        print("Usage: build_data.py <path-to-docx>", file=sys.stderr)
        sys.exit(1)
    docx_path = Path(sys.argv[1])
    paragraphs = extract_paragraphs(docx_path)
    questions = parse_questions(paragraphs)
    print(f"[info] parsed {len(questions)} questions from {docx_path.name}", file=sys.stderr)
    modules = build_modules(questions)
    out_path = Path(__file__).parent.parent / 'app' / 'data.js'
    out_path.write_text(emit_data_js(modules), encoding='utf-8')
    print(f"[info] wrote {out_path}", file=sys.stderr)
    for m in modules:
        nums = ','.join(str(c['num']) for c in m['cards'])
        print(f"  {m['id']}  {len(m['cards']):3d} cards  Qs: [{nums}]", file=sys.stderr)
    print(f"[info] total cards: {sum(len(m['cards']) for m in modules)}", file=sys.stderr)

if __name__ == '__main__':
    main()
