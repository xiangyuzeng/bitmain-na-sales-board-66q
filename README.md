# Bitmain北美机构销售 · 面试答题板

57题 · 9模块的面试答题板, 内容覆盖开场必答、公司行业认知、Foxx/PayPal经历深挖、销售能力、Bitmain特定场景、反问环节、行为STAR补充、商业战略补充。

基于 Next.js 14 + React 18, 客户端 localStorage 记录复习进度。

## 本地开发

```bash
npm install
npm run dev
# http://localhost:3000
```

## 部署到 Vercel

1. Push 此仓库到 GitHub
2. 在 [vercel.com/new](https://vercel.com/new) 导入此仓库
3. Vercel 自动识别 Next.js, 默认配置即可, 直接点击 **Deploy**

无需环境变量, 无外部依赖。

## 数据来源

题库内容来自 `Bitmain_Interview_Prep_Chinese.docx`。如需根据更新后的 docx 重新生成 `app/data.js`：

```bash
python3 tools/build_data.py /path/to/Bitmain_Interview_Prep_Chinese.docx
```

## 模块构成

| 模块 | 题数 |
|------|------|
| 开场必答 | 3 |
| 公司 & 行业认知 | 5 |
| Foxx经历深挖 | 5 |
| PayPal经历 | 2 |
| 销售能力 | 7 |
| Bitmain特定场景 | 13 |
| 反问环节 | 9 |
| 行为STAR补充 | 6 |
| 商业战略补充 | 7 |
| **合计** | **57** |
