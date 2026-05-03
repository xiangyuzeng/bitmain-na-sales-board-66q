// Bitmain北美机构销售 · 面试答题板 · 65题
// 9模块 · 行为STAR · 项目深挖 · 行业技术 · 销售策略 · 反问环节

export const QTYPE = {
  B: { label: "Behavioral", icon: "\ud83d\udde3\ufe0f", bg: "#FFF3E0", color: "#E65100", desc: "\u884c\u4e3a\u9762\u8bd5" },
  P: { label: "Project",    icon: "\ud83d\udd0d",         bg: "#E3F2FD", color: "#1565C0", desc: "\u9879\u76ee\u6df1\u6316" },
  T: { label: "Technical",  icon: "\u2699\ufe0f",         bg: "#F3E5F5", color: "#6A1B9A", desc: "\u884c\u4e1a\u6280\u672f" },
  S: { label: "Sales",      icon: "\ud83d\udcc8",         bg: "#E8F5E9", color: "#2E7D32", desc: "\u9500\u552e\u7b56\u7565" },
  R: { label: "Reverse",    icon: "\ud83d\udd04",         bg: "#EDE7F6", color: "#4527A0", desc: "\u53cd\u95ee\u73af\u8282" },
};

export const modules = [
  {
    "id": "mod0",
    "name": "市场背景速查",
    "color": "#0F172A",
    "icon": "📌",
    "description": "面试前必背：标杆deal·关键人物·活动·2026年4月市场·产品矩阵·美国工厂",
    "cards": [
      {
        "id": "m0-1",
        "num": 0.1,
        "title": "速查·近期标杆Deal·关键人物·行业活动",
        "answer": "【值得引用的最近交易】\n\n- CleanSpark — $1.677亿，26,000台 S21 XP Immersion服务器 (2024年8月协议，2025年交付)。增加7.8 EH/s。$21.5/TH。这是大型公众矿企交易的标杆。\n- CleanSpark — 890 MW Texas扩张 (2026年1月)。Brazoria County的AI + BTC混合建设。\n- IREN — $97亿微软HPC协议 (2025年末)。AI转型交易标杆。\n- MARA — 15%裁员 (2026年初)。公众矿企承压的标杆。\n- Bitdeer、RIOT — 2025年末增加12 EH/s。继续扩张的反向趋势。\n\n【关键行业活动】\n\n- WDMS (World Digital Mining Summit) — Bitmain的旗舰活动。2025年版发布了S23 Hydro。\n- Bitcoin 2026 — 拉斯维加斯，通常在4月底/5月。大型行业聚会。\n- Mining Disrupt — 迈阿密，通常在5月/6月。挖矿专题。\n- Bitcoin MENA — 阿布扎比，通常在12月。MicroBT在此发布M79S。\n\n【关键人物】\n\n- Irene Gao (高轶然) — Bitmain全球业务总监。对外发声的核心人物。\n- Jihan Wu (吴忌寒)、Micree Zhan (詹克团) — Bitmain联合创始人。\n- Fred Thiel — MARA CEO。媒体活跃。\n- Matt Schultz / Zach Bradford — CleanSpark董事长 / CEO。\n- Zuoxing Yang (杨作兴) — MicroBT创始人兼CEO。前Bitmain工程师。\n- Jaran Mellerud、Ethan Vera、Nick Hansen — 矿业分析师，值得关注。\n\n【要嵌入每个主要答案的一句市场背景】\n\n\"这是一个非常特殊的入场时刻——客户需求正在两极分化：一边是需要最高效率才能活下来的幸存者，另一边是在把电力重新部署到AI的转型者。销售对话的方式必须因人而异。\"",
        "qtype": "T",
        "charCount": 912
      },
      {
        "id": "m0-2",
        "num": 0.2,
        "title": "速查·2026年4月市场简报+产品矩阵+美国工厂",
        "answer": "【比特币挖矿行业现状】\n\nBTC目前在高$60K到中$70K区间震荡，远低于2025年10月峰值$115-120K。全网算力约 1 zettahash/秒 (1,000+ EH/s)，难度创历史新高约135万亿。Hashprice约$36/PH/day，较10月峰值下跌约三分之二。\n\n摩根大通2026年1月估算行业平均生产成本 $77,000/BTC。最高效矿工（低于$0.05/kWh电费+最新一代ASIC）生产成本$34-43K。其余的都在亏损。这就是为什么公众矿企Q1 2026出售了创纪录的32,000+ BTC，MARA执行了15%裁员。\n\n战略现实：挖矿正在整合，AI/HPC转型加速。\n\n摩根大通预测，到2026年底，大型公众矿企最多70%的收入来自AI/HPC合约。IREN签了微软$97亿，Core Scientific通过CoreWeave深度转型，CleanSpark宣布890 MW Texas扩张。Bitmain销售的买家不再在扩张BTC算力 — 他们要么升级效率求生存，要么把电力重新部署到AI。\n\n【Bitmain产品矩阵】\n\n| 产品 | 算力 | 功耗 | 效率 | 冷却 | 发布 |\n| --- | --- | --- | --- | --- | --- |\n| S23 Hydro 3U (旗舰) | 1.16 PH/s | 11,020 W | 9.5 J/TH | 水冷 | 2026年1月 |\n| S23 (风冷旗舰) | 318 TH/s | 3,498 W | 11 J/TH | 风冷 | 2026年1月 |\n| S21 XP Hydro | 473 TH/s | 6,010 W | 12.7 J/TH | 水冷 | 2024 |\n| S21 XP Immersion | 300 TH/s | 4,050 W | 13.5 J/TH | 浸没 | 2024年10月 |\n| S21 XP (风冷) | 270 TH/s | 3,645 W | 13.5 J/TH | 风冷 | 2024 |\n| S21 Pro | 234 TH/s | 3,510 W | 15 J/TH | 风冷 | 2024年7月 |\n| S21 | 200 TH/s | 3,500 W | 17.5 J/TH | 风冷 | 2024 |\n| S19 XP / j Pro+ | 140 / 122 TH/s | — | 21.5 / 27.5 J/TH | 风冷 | 2022-23 |\n\n关键点：当被问到Bitmain产品时，首先提S23和S23 Hydro，不要提S21。S23是目前对MicroBT M79S的答案，也是当前销售重点。\n\n【MicroBT的对抗产品】\n\nMicroBT在Bitcoin MENA 2025推出 Whatsminer M79S Hydro：1.35 PH/s，14.81 J/TH，20 kW。原始算力比S23 Hydro 3U (1.16 PH/s) 高，但效率明显差（14.81 vs 9.5 J/TH）。这个效率差距是S23 Hydro销售的核心。M70S+风冷244 TH/s、12.5 J/TH是MicroBT对标S23的风冷产品 — 接近但仍落后。\n\n【美国工厂 — Bitmain最大的新卖点】\n\nBitmain于2025年7月宣布将在Texas或Florida开设首个美国工厂，Q3 2025选址，2026年初首批芯片生产，2026年底全面投产。全球业务总监Irene Gao将其定位为缩短美国客户的交货和维修时间，同时规避特朗普Liberation Day关税（10%基础+20%中国商品附加，2025年4月生效）。MicroBT和Canaan也在做同样的事 — 所以这是竞争平价，不是领先 — 但是美国工厂是你向美国机构买家最好的新话题，尤其是担心关税、供应链韧性、政治风险的客户。\n\n记住Irene Gao的名字。\n\n她是2025-26年美国工厂战略的官方代言人。提到她的名字说明你真的读过行业媒体。",
        "qtype": "T",
        "charCount": 1696
      }
    ]
  },
  {
    "id": "mod1",
    "name": "开场必答",
    "color": "#B71C1C",
    "icon": "🎬",
    "description": "自我介绍·跳槽动机·薪资·入职时间·矿业兴趣",
    "cards": [
      {
        "id": "m1-1",
        "num": 1,
        "title": "完整自我介绍",
        "answer": "中文完整自我介绍（约2分钟）\n\n您好，我叫郑翔宇，英文名Alex，目前29岁，居住在纽约。我在卡内基梅隆大学获得电子信息硕士学位，本科在威斯康星大学麦迪逊分校攻读应用统计学。我持有美国绿卡，中英文双语流利，可全球出差无身份限制。\n\n我的职业背景涵盖B2B销售、跨境渠道开发和数字营销三大领域，在北美ICT和支付行业有接近五年的深耕经验。\n\n第一份工作：PayPal商务拓展经理（2021年4月至2023年3月）\n\n我是PayPal亚太区商务拓展经理，管理200+核心商户账户——Amazon、eBay、跨境电商平台。PayPal产品线丰富——Checkout、Credit、跨境支付、商户金融——但我做的不是推销单一产品，而是根据客户业务场景配出最契合的整体方案：跨境电商客户配跨境支付+多币种结算，大型电商平台做定制化API集成+风控规则配置，对高潜力客户主动介绍新功能帮他们打开国际市场。最终Amazon、eBay等90%以上集成项目按期交付。背后是数据驱动的客户分层（留存+15%、收入+10%）、4小时响应+主动预警的服务机制（200+商户零流失），以及向美国总部汇报亚太业务的跨时区协作（效率+30%）。\n\n当前工作：Foxx Development销售经理（2023年4月至今）\n\nFoxx是一家北美ICT硬件分销商，总部在加州尔湾。我主导了三大核心项目：\n\n第一，从零搭建$8000万美元分销网络。 通过CES、Computex等全球科技展会战略对接，年度成功签约12家区域核心经销商，并攻克Walmart、Target、Best Buy等主流零售渠道。\n\n第二，创造$1500万美元营收增长。 主导T-Mobile运营商投标项目和ACP/Lifeline政府补贴项目的经销商合作，为公司带来标杆性收入增长。\n\n第三，开创跨境直播营销。 建立TikTok直播ToB和ToC矩阵，品牌销售额位列TikTok美区品类Top 2；同时领导CES/NALA展会战略与执行。\n\n为什么对Bitmain这个岗位感兴趣，有三个原因：\n\n第一，行业吸引力。 全球ASIC挖矿硬件是高集中度市场，Bitmain是全球龙头，单笔RFQ动辄数千万到数亿美元。这与我熟悉的ICT分销业务在结构上一致，但交易规模和战略重要性完全不同。我希望进入更有门槛、单笔价值更大的行业。\n\n第二，能力迁移度高。 Bitmain的业务结构——硬件+托管+运维+矿池+融资捆绑销售给上市矿企、数据中心、对冲基金、《财富》1000强——正好是我在PayPal每天做的事。三类客户、三套bundle，方案销售思维完全同构。\n\n第三，时机关键。 2026年是Bitmain的战略转折点——美国工厂投产、S23新产品刚上市、北美矿企进入S19到S23的大规模替换周期。此时加入，既能承接存量客户的升级需求，也能抓住新客户的建立机会。这是我希望参与塑造的品牌旅程。\n\n===\n\nEnglish Full Self-Introduction (~2 minutes)\n\nHello, I'm Xiangyu Zheng — English name Alex. I'm 29, based in New York. I hold a Master's in Information Networking from Carnegie Mellon, and a Bachelor's in Applied Statistics from the University of Wisconsin–Madison. I'm a US Green Card holder, fluent in both Chinese and English, and able to travel globally with no visa restrictions.\n\nMy background spans three areas — B2B sales, cross-border channel development, and digital marketing — with close to five years of focused experience in the North American ICT and payments industries.\n\nFirst job: PayPal Business Development Manager (April 2021 – March 2023)\n\nI was PayPal's APAC Business Development Manager, managing 200-plus core merchant accounts — Amazon, eBay, and cross-border e-commerce platforms. PayPal had a rich product line — Checkout, Credit, cross-border payments, merchant financing — but my job wasn't pitching individual products. It was configuring the right combination for each customer's business scenario: cross-border merchants got cross-border payments plus multi-currency settlement, large platforms got custom API integration plus risk-rule configuration, and high-potential accounts got proactive feature introductions to help them open international markets. The result: 90 percent plus of integration projects, including Amazon and eBay, delivered on schedule. Behind that — a data-driven A/B/C/D customer segmentation system (+15% retention, +10% revenue), a 4-hour-response and proactive early-warning service mechanism (zero churn across 200-plus merchants), and reporting APAC business to US headquarters across time zones (+30% cross-regional collaboration efficiency).\n\nCurrent role: Foxx Development Sales Manager (April 2023 – present)\n\nFoxx is a North American ICT hardware distributor headquartered in Irvine, California. I led three core initiatives:\n\nFirst, built an $80 million distribution network from zero. Through strategic engagement at global tech expos like CES and Computex, I signed 12 regional core distributors annually and broke into mainstream retail channels including Walmart, Target, and Best Buy.\n\nSecond, generated $15 million in revenue growth. I led the T-Mobile carrier RFP and the ACP/Lifeline government-subsidy distributor partnerships, delivering benchmark revenue growth for the company.\n\nThird, launched cross-border live commerce. I built out our TikTok live B2B and B2C matrix, taking brand sales to the top two in our US category — and also led CES/NALA expo strategy and execution.\n\nThree reasons I'm interested in this role at Bitmain:\n\nFirst, industry appeal. Global ASIC mining hardware is a highly concentrated market, Bitmain is the global leader, and individual RFQs routinely run from tens to hundreds of millions of dollars. The structure mirrors the ICT distribution business I already know, but the deal scale and strategic importance are on a completely different level. I want to move into an industry with higher barriers and higher per-deal value.\n\nSecond, high transferability of capability. Bitmain's business model — hardware + hosting + O&M + mining pool + financing, bundled and sold to public miners, data centers, hedge funds, and Fortune 1000 — is exactly what I did every day at PayPal. Three customer types, three bundles, the same solution-selling thinking — structurally identical.\n\nThird, timing is critical. 2026 is Bitmain's strategic inflection point — the US factory is coming online, the S23 has just launched, and North American miners are entering a large-scale S19-to-S23 replacement cycle. Joining now means both capturing the upgrade demand from the existing customer base and seizing the window to establish new accounts. This is the brand journey I want to help shape.",
        "qtype": "B",
        "charCount": 5002
      },
      {
        "id": "m1-2",
        "num": 3,
        "title": "你对比特币和挖矿行业了解多少？你自己有持币或挖矿吗？",
        "answer": "我从2017年开始关注加密货币行业，自2017年起个人持有BTC和ETH。我不是日内交易者，是长期持有者——经历过2018和2022两次熊市没有恐慌卖出，这种定力对我思考挖矿行业很重要。\n\n对挖矿行业的深度关注从2023年开始，有两个触发点。第一是Foxx开始收到一些零散的小矿场定制冷却设备的RFQ，让我接触到矿场基础设施的需求。第二是减半叙事的推进，促使我系统性研究CoinShares和Luxor Hashrate Index的行业报告。\n\n过去18个月我投入时间研究的具体内容：\n\n挖矿经济学。 Hashprice从2025年10月峰值崩塌到现在的$36/PH/day，这背后的供需关系、难度调整机制、电费-算力-BTC价格的三角博弈。\n\nASIC效率曲线。 从2016年S9的100+ J/TH到S23 Hydro的9.5 J/TH——这是十年90倍的效率提升，决定了整个行业的替换周期。\n\n公众矿企的财务结构。 过去四个季度的MARA、RIOT、CLSK、CIFR、IREN的10-Q，机队构成、capex指引、hashrate目标、BTC库存变化。\n\n北美能源市场。 ERCOT demand response机制，RIOT 2023年夏天单月$3000万DR收入，stranded gas和可再生能源曲线，都是矿场选址的核心变量。\n\n行业政策。 特朗普Liberation Day关税对中国原产挖矿设备的25-35%实际税负，Bitmain/MicroBT/Canaan的美国建厂应对，Elizabeth Warren对中国矿机的政治施压。\n\nAI转型剧本。 Core Scientific的CoreWeave协议、IREN的微软$97亿HPC、CleanSpark的890 MW Texas混合建设——这些都是当前行业最重要的战略信号。\n\n我不会自称有在Foundry或Luxor工作过三年的人那种深度。但差距是以月计的沉浸式学习，不是以年计的能力鸿沟。",
        "qtype": "T",
        "charCount": 836
      },
      {
        "id": "m1-3",
        "num": 54,
        "title": "你为什么要离开 Foxx？",
        "answer": "Foxx 是一段非常宝贵的经历。三年时间里我从零搭建了 $80M 的 ICT 分销网络、开了 Walmart/Target/Best Buy 三家头部零售、跑了 $15M 的 T-Mobile 运营商项目、还配合 CEO 完成了 NASDAQ IPO 准备。我对在那里做出的成绩很 proud。\n\n但我现在到了一个想要 take on a new challenge 的阶段。原因有三个：\n\n【一、Deal size 的量级】\n\nFoxx 我现在的平均单子是几十万到一两百万美金。Bitmain 一个 public miner 的 RFQ 是几万台机器、$30–150M per order。这不是同一个量级的销售对话 — 不同的 buyer (CFO 层面而不是 procurement)、不同的 cycle (3–6 个月 vs 几周)、不同的合同结构 (BTC pledging、LD clause、phased delivery)。我想把销售肌肉推到下一个 caliber。\n\n【二、行业 concentration】\n\nICT 分销是一个 fragmented、成熟的市场 — 我们和无数 distributor 在同质化竞争。比特币矿机是一个 concentrated 行业 — 三家厂商控制全球绝大部分供应，Bitmain 是 #1。在 fragmented 行业你赢的是 execution，在 concentrated 行业你赢的是 strategic positioning。后者对我更有挑战。\n\n【三、时机】\n\nPost-halving 的 replacement cycle 加上 Bitmain 美国工厂 (2026 年首批芯片量产)、加上 AI/BTC 算力融合 — 这是一个十年一遇的窗口。我在 Foxx 卖 H100/H200/B200 系统给 AI infrastructure 客户的时候，已经看到这个 convergence 在发生。Bitmain 这个 role 让我从一个 outside observer 变成 inside actor。\n\n【最后】\n\n我离开 Foxx 不是因为对 Foxx 不满，而是因为我对自己的 trajectory 有了更清晰的判断。Foxx 教会了我从零搭一个 distribution 业务，Bitmain 让我把这个能力放到一个更大的 stage 上。\n\n===\n\nFoxx has been a great platform. In three years I built an $80M ICT distribution business from zero, opened Walmart, Target, and Best Buy, ran the $15M T-Mobile carrier program, and supported the NASDAQ IPO preparation. I'm proud of what I've done there.\n\nBut I'm at the point where I'm ready to take on a new challenge. Three reasons.\n\nScale of the ticket. My current average deal at Foxx is low hundreds of thousands to low millions. A single Bitmain public-miner RFQ is tens of thousands of machines — $30M to $150M per order. Different buyer (CFO-level, not procurement), different cycle (three to six months versus weeks), different contract structure (BTC pledging, LD clauses, phased delivery). I want to push my selling muscle to that next caliber.\n\nIndustry concentration. ICT distribution is a fragmented, mature market — we compete on execution against an undifferentiated field. Bitcoin mining hardware is a concentrated industry where three manufacturers control nearly all global supply, and Bitmain is number one. In fragmented markets you win on execution; in concentrated markets you win on strategic positioning. The latter is the bigger challenge for me.\n\nMoment. Post-halving replacement cycle, plus Bitmain's US factory coming online in 2026, plus the AI/BTC compute convergence — this is a once-in-a-decade window. Selling HGX H100, H200, and B200 systems to AI infrastructure customers at Foxx, I watched that convergence happening in real time. This role moves me from outside observer to inside actor.\n\nI'm not leaving because I'm unhappy at Foxx. I'm leaving because I have a clearer view of my trajectory, and Foxx taught me to build a distribution business from zero — Bitmain lets me apply that on a much bigger stage.\n\nStrategy note: Opens with genuine respect for Foxx (never badmouth your current employer — interviewers are always evaluating how you'll talk about them later). Names three concrete, structural reasons that all point forward, not backward. The H100/H200/B200 reference builds technical credibility for the next question they'll ask.",
        "qtype": "B",
        "charCount": 3101
      },
      {
        "id": "m1-4",
        "num": 55,
        "title": "PayPal 是大厂，很多人想进都进不去 — 你当时为什么要离开？",
        "answer": "您说得对，PayPal 是一家非常好的公司。我在那里两年学到的东西到现在都在用 — 怎么管理 200+ enterprise merchant、怎么用交易数据驱动销售决策、怎么向美国总部 report APAC 进展、怎么在合规要求很高的金融环境下做 cross-border BD。这是 PayPal 给我打下的基础。\n\n但是经过两年我也清楚看到一个 limitation：PayPal 是一个 platform 公司，我做的是支付集成销售 — 客户用我的产品集成 payment，但是产品本身的 roadmap、定价、go-to-market 战略，都是几层之上决定的。我更像是一个 channel executor，不是一个 P&L owner。\n\n我当时已经很清楚自己想要的下一步是什么 — 一个能让我端到端 own 整个销售业务的机会：从渠道开发、客户签约、产品配置，到合同谈判、交付管理、回款。这种 ownership 在 PayPal 这种 platform 公司、我那个层级是拿不到的。\n\nFoxx 给了我这个机会。团队小意味着我直接管 P&L — 我在那里从零搭了 $80M 的分销网络、开了三家头部零售、跑了 T-Mobile 项目、还参与了 IPO。这个级别的 ownership 在 PayPal 当时的我是不可能拿到的。\n\n【底层逻辑】\n\n我离开 PayPal 不是因为 PayPal 不好，而是因为我对自己的职业方向 — 做硬件销售、做 cross-border B2B、最终做 institutional sales — 有了更清晰的判断。PayPal 给了我大厂的方法论，Foxx 给了我端到端的 ownership，Bitmain 让我把这两段经验放到一个 institutional sales 的舞台上。三段经历不是 lateral move，是有意识的递进。\n\n===\n\nYou're right — PayPal is an excellent company. I learned a tremendous amount there over two years, and I still use it: managing 200+ enterprise merchants, using transaction data to drive sales decisions, reporting APAC progress to US headquarters, doing cross-border BD in a highly regulated financial environment. PayPal gave me the foundation.\n\nBut after two years I saw a structural limitation. PayPal is a platform company. I sold payment integration — customers used my product to integrate payments, but the product roadmap, pricing, and go-to-market strategy were all decided several layers above me. I was more of a channel executor than a P&L owner.\n\nBy that point I knew what I wanted next: an opportunity to own the entire sales motion end-to-end — from channel development to customer signing, product configuration, contract negotiation, delivery management, and collection. That level of ownership wasn't available to me at my level inside PayPal.\n\nFoxx gave me that. Smaller team meant I directly owned the P&L. I built the $80M distribution business from zero, opened three major retailers, ran the T-Mobile carrier program, and supported the NASDAQ IPO. That level of ownership simply wouldn't have been accessible to me at PayPal at the time.\n\nThe underlying logic: I didn't leave PayPal because PayPal was bad. I left because I had a clearer view of my direction — hardware sales, cross-border B2B, ultimately institutional sales — and the next role had to give me end-to-end ownership. PayPal gave me big-company methodology, Foxx gave me end-to-end ownership, and Bitmain puts both onto an institutional sales stage. The three steps aren't lateral moves — they're a deliberate progression.\n\nStrategy note: This question is a stability red flag — interviewers worry you'll leave Bitmain too. The defense is showing the deliberate logic behind every move. Borrowed pattern from the Temu HRBP playbook: open with respect, name structural (not personal) limitation, pivot to what you were running toward, end with the through-line. The \"three steps as deliberate progression\" closer is the key — it reframes the resume as a ladder, not a series of escapes.",
        "qtype": "B",
        "charCount": 2979
      },
      {
        "id": "m1-5",
        "num": 56,
        "title": "你 CMU MISM 毕业 — 为什么选择做销售而不是技术岗？",
        "answer": "这是一个我自己也思考过很久的问题，给您一个 honest 的答案。\n\n【我的背景不是 non-technical】\n\n本科 Wisconsin 应用统计学 — 量化和数据分析；CMU MISM — 系统、数据库、云计算、分布式架构。在 PayPal 我开始的 title 是 BD，但实际工作里要做交易数据 mining、商户画像系统、用 SQL 做 segment analysis。在 Foxx 我每天和工程团队、工厂团队打交道 — Supermicro SYS-A22GA-NBRT 的整个 BOM 我能从 Xeon CPU、HBM3e GPU memory、ConnectX-7 NIC、BlueField DPU 一直讲到 PSU 冗余配置、CDU 冷却回路。我会写 SQL、会读 schema、会评估架构。\n\n【我的 comparative advantage 不在写代码】\n\n坐在 IDE 里写代码不是我最擅长、也不是我最有成就感的工作。我最 alive 的时刻是 — 把 H200 cluster 卖给 AI infrastructure 客户、配合他们建数据中心、跑 5 年 TCO model、闭环到合同签字和交付。这是 cross-functional execution 加 strategic deal construction，需要技术深度 + 商务能力 + 跨文化沟通三者结合。\n\n【这个 combination 在市场上稀缺】\n\n中国 HQ 的硬件公司在美国卖 institutional 产品时缺的不是工程师 — Anthropic、NVIDIA、Bitmain 都不缺工程人才。缺的是能和 CFO 谈 5 年 NPV、能和工程师讨论 cooling architecture、能在中国总部和美国客户之间翻译技术细节的销售人才。MISM 的训练让我成为这种 hybrid。\n\n【职业弧线】\n\nPayPal BD → Foxx Sales Manager → Bitmain North American Sales — 每一步都在 institutional selling 的复杂度和 ticket size 上往上走。MISM degree 不是浪费，是我能跟客户工程师在白板上画 cooling loop、跟 CFO 讨论 TCO 的底气。\n\n【最后一句】\n\n我不是因为做不了技术才做销售。我是因为发现自己在\"把复杂的硬件产品卖给做 strategic decision 的 institutional 买家\"这个 niche 里能创造最大的 value。\n\n===\n\nThis is a question I've thought through carefully myself, so let me give you the honest answer.\n\nMy background isn't non-technical. Wisconsin Applied Statistics undergraduate — quantitative and data analytics. CMU MISM — systems, databases, cloud computing, distributed architecture. At PayPal my title was BD but my actual work involved transaction data mining, merchant segmentation systems, and SQL-based analysis. At Foxx I work with engineering and factory teams every day — I can walk a Supermicro SYS-A22GA-NBRT BOM from Xeon CPU through HBM3e GPU memory, ConnectX-7 NIC, BlueField DPU, all the way down to PSU redundancy and CDU cooling loop topology. I can write SQL, read a schema, evaluate an architecture.\n\nMy comparative advantage isn't writing code. Sitting in an IDE writing code isn't where I'm strongest or most fulfilled. Where I'm most alive — selling an H200 cluster to an AI infrastructure customer, helping them architect the data center, running the five-year TCO model, closing through contract and delivery. That's cross-functional execution plus strategic deal construction. It needs technical depth, commercial skill, and cross-cultural communication all at once.\n\nThis combination is scarce in the market. Chinese HQ hardware companies selling institutional products in the US aren't short on engineers — Anthropic, NVIDIA, Bitmain all have engineering talent. What they're short on is sales people who can run a five-year NPV with a CFO, debate cooling architecture with an engineer, and translate technical detail between Chinese headquarters and American customers. MISM training is what makes me that hybrid.\n\nCareer arc. PayPal BD → Foxx Sales Manager → Bitmain North American Sales. Every step climbs in institutional selling complexity and deal size. The MISM degree isn't wasted — it's what lets me whiteboard a cooling loop with the customer's engineering team and discuss TCO with their CFO in the same meeting.\n\nThe honest closer: I'm not in sales because I couldn't do tech. I'm in sales because I found the niche where I create the most value — moving complex hardware products into the hands of institutional buyers making strategic decisions.\n\nStrategy note: The interviewer is testing for two things: (1) whether you settled into sales because you couldn't hack tech, and (2) whether you'll stay in sales or jump back to tech. The answer addresses both. The \"BOM walkthrough\" sentence is the credibility killer-move — most candidates can't actually demonstrate technical literacy in 15 seconds, and this one does. The closer (\"not because I couldn't, but because this is where I create most value\") reframes the question from defensive to confident.",
        "qtype": "B",
        "charCount": 3798
      }
    ]
  },
  {
    "id": "mod2",
    "name": "公司 & 行业认知",
    "color": "#1565C0",
    "icon": "🏢",
    "description": "Bitmain认知·矿业经济学·减半周期·北美竞争优势",
    "cards": [
      {
        "id": "m2-1",
        "num": 6,
        "title": "你对Bitmain了解多少？为什么想加入Bitmain？",
        "answer": "我对Bitmain做了比较深入的研究，从公司背景、业务结构、市场地位、发展历程、最新战略五个维度分享我的了解：\n\n一、公司背景\n\nBitmain成立于2013年，由吴忌寒（Jihan Wu）和詹克团（Micree Zhan）联合创立，总部在北京，是全球最大的加密货币挖矿服务器制造商。ANTMINER是其旗舰品牌，长期在BTC挖矿硬件市场占据主导地位——2017年峰值时市场份额达75%，目前仍然是全球第一。公司服务100+国家和地区的客户，在美国、新加坡、马来西亚、哈萨克斯坦、中东、东南亚都有分支机构和售后网络。\n\n二、业务结构\n\nBitmain的核心业务矩阵围绕”算力产业价值链”展开：\n\n矿机研发和生产 — ANTMINER系列，包括最新的S23（风冷，318 TH/s, 11 J/TH）和S23 Hydro 3U（水冷旗舰，1.16 PH/s, 9.5 J/TH），2026年1月刚发布\n\n矿机销售 — 灵活销售模式对接全球客户\n\n矿机托管 — 全球寻找优质低价电力资源\n\n矿机运维 — 标准化、智能化的端到端O&M流程，现场技术支持和O&M培训\n\n挖矿新能源 — 开发新能源以扩展数字世界\n\n生态伙伴上，Bitmain还运营ANTPOOL（全球领先的挖矿矿池，已独立运作）、BTC.com（已独立）、SOPHON AI品牌（已独立）。\n\n三、市场地位与竞争格局\n\n全球ASIC挖矿是三家厂商主导的集中市场：Bitmain第一，MicroBT第二（创始人杨作兴是前Bitmain工程师），Canaan第三。新进入的Auradine（美国公司）是值得关注的变量。Bitmain的S23 Hydro 3U（9.5 J/TH）相对MicroBT最新旗舰M79S（14.81 J/TH）有56%的效率优势——这是目前市场上最清晰的领导地位信号。\n\n四、最近的战略动向\n\n美国工厂投产。 2025年7月宣布在Texas或Florida建厂，2026年初首批芯片生产，2026年底全面投产。首期250名美国员工。这是全球业务总监Irene Gao主导的战略动作，响应特朗普Liberation Day关税（25-35%有效税负）和美国本土化供应链压力。\n\nS23产品线发布。 2026年1月在WDMS（World Digital Mining Summit）发布S23和S23 Hydro 3U，重新夺回效率领先。\n\n灵活商务条款。 在当前买方市场中，Bitmain推出BTC质押（BTC pledging）和折扣定价工具，与客户利益绑定。\n\n应对政治压力。 Elizabeth Warren等政界人物公开点名Bitmain；美国工厂是关键的政治应对。\n\n五、为什么想加入Bitmain，三个原因：\n\n第一，行业地位真实。 Bitmain不是一家有愿景的初创公司——它是十多年市场领导者，S23代际的技术代表了整个行业的前沿。我可以自信地向任何CFO做产品价值主张，不需要绕开竞争对手的优点。\n\n第二，我的经验与需求完全匹配。 Bitmain北美机构销售需要的所有能力——渠道开发、公众矿企的复杂采购流程、中美跨文化协调、硬件+服务捆绑的解决方案销售——都是我在Foxx和PayPal五年来每天在做的事。\n\n第三，时机关键。 2026年是Bitmain的战略拐点——美国工厂投产、S23刚发布、AI转型带来的客户分化、S19到S23的替换周期启动。此时加入比18个月后加入价值大得多。",
        "qtype": "T",
        "charCount": 1442
      },
      {
        "id": "m2-2",
        "num": 7,
        "title": "你对比特币挖矿/区块链硬件行业有什么了解？",
        "answer": "我从行业展会、持续跟踪的研究报告、公众矿企财报、以及为准备这个岗位做的深度研究中，对这个行业有系统性的了解。从六个维度分享：\n\n一、市场规模与当前周期\n\n全网算力约1 ZH/s (1,000+ EH/s)，难度135T创历史新高，BTC在$68-75K区间，hashprice约$36/PH/day——远低于2025年10月$115K BTC峰值时的水平。\n\n摩根大通2026年1月估算：行业平均生产成本$77K/BTC。 最高效的（sub-$0.05 kWh + 新一代ASIC）$34-43K。其他人都在亏损。这是挖矿行业近几年最严峻的利润压力时期。\n\n二、增长驱动因素\n\n2024年4月减半的长尾效应。 区块奖励从6.25 BTC降到3.125 BTC。减半本身是一次性事件，但引发的淘汰与替换周期持续2-3年。\n\nAI/HPC的分流。 摩根大通预测2026年底大型公众矿企最多70%收入来自AI。这既是威胁（算力需求分流）也是机会（资金回流支持下一代ASIC采购）。\n\n能源地理转移。 美国从中国2021禁挖后接过主导地位，目前约41%全球算力在美国。Texas stranded gas和ERCOT demand response是关键变量。\n\n政策和关税变化。 Liberation Day关税25-35%推动本土化生产；政治压力推动矿企公开透明化。\n\n三、竞争格局\n\n全球ASIC三大厂商：\n\n| 厂商 | 当前旗舰 | 算力 | 效率 | 定位 |\n| --- | --- | --- | --- | --- |\n| Bitmain | S23 Hydro 3U | 1.16 PH/s | 9.5 J/TH | 效率领先 |\n| MicroBT | M79S Hydro | 1.35 PH/s | 14.81 J/TH | 高算力、价格激进 |\n| Canaan | Avalon A16 XP | 300 TH/s | 12.8 J/TH | 性价比 |\n\n新进入者：Auradine（美国Palo Alto，VC支持，AT2860系列约14 J/TH，美国本土化优势）\n\n四、产品趋势\n\n水冷/浸没式制冷成为主流。 在高温、高密度、大规模场景下，水冷的TCO明显优于风冷。Bitmain、MicroBT、Canaan三家的最新旗舰都是水冷。\n\n效率竞赛进入10 J/TH以下时代。 S23 Hydro 9.5 J/TH是一个历史分水岭。\n\n捆绑销售深化。 硬件+托管+运维+矿池接入+融资，Bitmain通过生态锁定客户。\n\n管理软件成熟。 远程监控、固件升级、自动化DR参与、AI故障预测。\n\n五、北美市场渠道结构\n\n三层渠道：\n\n直接销售给公众矿企 — MARA、RIOT、CLSK、CIFR、CORZ、HUT、WULF、BITF、IREN、BTDR。单笔$30M-$300M。这是Bitmain北美收入的主力。\n\n私营矿企和数据中心运营商 — PE支持的私矿、混合AI/BTC运营商、第三方托管商。单笔$5M-$50M。\n\n机构资本和F1000 — 对冲基金投矿企，F1000 BTC treasury（MSTR模式），能源巨头flare gas挖矿。很少直接买机器。\n\n六、北美市场特点\n\n微软生态主导的IT环境——虽然这对ASIC本身影响小，但对客户的运维系统和财务系统有影响。\n\n严格的合规和审计要求——供应商合规、关税、出口管制、董事会审计。\n\nAV集成商和数据中心解决方案商是重要辅助渠道——尤其对数据中心类客户。\n\n价格不是唯一因素。 TCO、售后、品牌、合规——北美买家看重整体价值。",
        "qtype": "T",
        "charCount": 1514
      },
      {
        "id": "m2-3",
        "num": 8,
        "title": "你认为Bitmain在北美市场有哪些竞争优势？",
        "answer": "我认为Bitmain在北美市场有六大竞争优势：\n\n第一，世代效率领先。\n\nS23 Hydro 3U的9.5 J/TH是目前全球最高效的比特币挖矿设备，对MicroBT M79S（14.81 J/TH）有56%的效率优势。在当前hashprice $36/PH/day的环境下，效率就是生存线。一个100 MW矿场从25 J/TH（S19）升级到9.5 J/TH（S23 Hydro）每年节省的电费在数百万美元级别——这是每个CFO都在算的账。\n\n第二，十年行业领导地位积累的生态护城河。\n\n固件成熟度：ANTMINER固件经过10+年的迭代，拥有行业最大的遥测数据积累\n\nANTPOOL集成：全球领先的挖矿矿池，对客户是即插即用的网络接入\n\n管理软件：针对大型矿场的机队管理、远程监控、固件升级、DR自动化\n\n全球售后网络：美国、哈萨克斯坦、中东、东南亚的HUB备件仓库和现场工程师团队。当10万台机器出问题时，Bitmain能调动区域级的备件和人员——这是MicroBT和Canaan短期内追不上的。\n\n第三，2026年投产的美国工厂。\n\nBitmain 2025年7月宣布在Texas或Florida建厂，2026年初首批芯片生产，年底全面投产。这带来四重价值：\n\n关税减免——规避25-35%的Liberation Day关税。$30M订单能节省$6-9M。\n\n交货提速——从60-90天海运缩短到国内物流数天。\n\n售后加速——RMA周转从数周到数天。\n\n政治合规——为客户采购委员会提供面对审计委员会的答辩依据。\n\n第四，完整的产品矩阵覆盖所有细分。\n\n| 场景 | 推荐产品 |\n| --- | --- |\n| 低电费风冷小场 | S21 / S21 Pro |\n| 高电费风冷大场 | S21 XP / S23 |\n| 高效浸没式 | S21 XP Immersion |\n| 大型水冷数据中心 | S21 XP Hydro / S23 Hydro 3U |\n| 替换S19机队 | S23 (air) / S23 Hydro (greenfield) |\n\n客户的任何规模、任何场景都能在Bitmain的产品矩阵里找到最优解。\n\n第五，灵活的商务工具组合。\n\nBitmain在当前买方市场中推出的工具： - BTC质押（BTC pledging）——客户用BTC作抵押换取机器折扣，利益绑定 - 阶梯折扣定价——大批量和战略账户的差异化 - 分期付款——30/60/10是标准，灵活到50/40/10或进一步调整 - 以旧换新——S19/S19 XP的折抵换购S23 - 融资伙伴——Galaxy Digital、NYDIG等设备融资集成\n\n这是竞争对手短期内难以匹配的商业工具箱。\n\n第六，中国本部的研发和供应链规模。\n\nBitmain是世界最大的ASIC设计厂商之一。台积电5nm节点的早期访问、完整的芯片设计-流片-封装-测试体系、每年数千万片ASIC的出货量——这个规模优势转化为产品迭代速度和成本优势。\n\n在销售过程中如何使用：\n\n对技术导向的客户（CTO/首席挖矿官）——强调世代效率领先和固件成熟度\n\n对财务导向的客户（CFO）——强调TCO、BTC质押等商务灵活度\n\n对合规导向的客户（上市矿企、F1000）——强调美国工厂和售后网络\n\n对规模化运营商（CleanSpark、CIFR）——强调完整产品矩阵和生态集成\n\n对初次采购的新买家——强调行业领导地位和标杆案例（CleanSpark $1.677亿）",
        "qtype": "T",
        "charCount": 1469
      },
      {
        "id": "m2-4",
        "num": 9,
        "title": "走一遍比特币挖矿的经济学 — hashrate、difficulty、block reward、hashprice",
        "answer": "比特币网络大约每十分钟出一个块。当前区块奖励是3.125 BTC，2024年4月第四次减半后从6.25降下来的。矿工总体赚取区块奖励加上交易手续费。\n\nHashrate（算力）是网络投入的总计算力。目前约1 zettahash/秒（1000+ exahash/秒），过去五年翻了10倍以上。\n\nDifficulty（难度）是自动调节机制，保持10分钟区块时间。每2016个块调整一次，大约两周。目前约135T，历史新高。\n\nHashprice是把这些指标对矿工经济学的综合表达——每terahash每天的美元收入。目前约$36/PH/day，比2025年10月峰值下跌约三分之二。\n\n为什么这对Bitmain销售至关重要：\n\nHashprice是公众矿企CFO在决定是否买机器时建模的那个数字。摩根大通估算行业平均生产成本$77K/BTC，效率最高的$34-43K。其他人都在亏损。\n\n这就是为什么新订单正在从”扩张容量”转向”升级效率”——幸存者需要S23级效率才能守在水线以上。这是整个Bitmain销售叙事的核心。",
        "qtype": "T",
        "charCount": 460
      },
      {
        "id": "m2-5",
        "num": 10,
        "title": "2024年减半之后发生了什么？对Bitmain北美销售意味着什么？",
        "answer": "四个阶段，不是三个：\n\n阶段一，2024年4月-8月。Capex冻结。 区块奖励减半，公众矿企暂停扩张，专注效率。二手ASIC价格崩溃——S19 XP跌破$5/TH。\n\n阶段二，2024年末-2025年。整合与资本化。 较弱运营商卖场地或下线。CleanSpark、IREN、Cipher低价收购算力。Core Scientific走出破产，通过CoreWeave深度转向AI托管。\n\n阶段三，2025年。幸存者的替换周期。 S19代在25-30 J/TH变得不经济。幸存者换成S21 Pro、S21 XP、S21 XP Immersion，年底换S23。CleanSpark的$1.677亿S21 XP Immersion协议是标杆。\n\n阶段四，2026年Q1起——我们现在正处的阶段。“衰退+AI转型”。 BTC从10月$115K跌到$68K-70K。Hashprice崩塌。公众矿企Q1 2026出售32,000+ BTC创纪录。MARA裁员15%。IREN签微软$97亿HPC。摩根大通预测2026年底公众矿企最多70%收入来自AI/HPC。\n\n对Bitmain销售意味着什么？两个截然不同的销售动作：\n\n动作一：为幸存者做效率升级。 把S23和S21 XP卖给那些必须降低BTC生产成本才能维持盈利的运营商。这是价格敏感、TCO驱动、NPV建模的销售。\n\n动作二：为转型者做混合容量。 那些把部分电力转向AI但保留一部分BTC敞口的运营商。他们想要Bitmain作为同时懂两种业务的伙伴——Sophon AI + ANTMINER + 托管。不同的pitch，更长的周期，更大的战略回报。\n\n在这个环境下胜出的销售代表，是能读懂每个客户在哪个动作上，并带来合适对话的那个人。",
        "qtype": "T",
        "charCount": 742
      },
      {
        "id": "m2-6",
        "num": 203,
        "title": "锚定·市场观 (90 秒, 把数字砸出来)",
        "answer": "【锚定回答 · 市场观 · 90 秒】\n\n为什么重做：这是二面交付最大的短板。整场提到 BTC \"现在六七万中间震荡\"但没接 hashprice、生产成本、客户分化的战略判断。\n\n【脚本】\n\nBTC 在高 $60K 到中 $70K，远低于 10 月峰值的 $115-120K。全网算力约 1 zettahash 每秒——大概 1,000 EH/s——难度创历史新高约 135 万亿。Hashprice 约 $36/PH/day，比 10 月峰值跌了大约三分之二。\n\n摩根大通 1 月估算行业平均生产成本 $77,000/BTC。最高效的矿工——sub-$0.05/kWh 加新一代 ASIC——成本 $34-43K。中间的所有人都在亏损。这就是为什么公众矿企 Q1 抛售了创纪录的 32,000+ BTC，MARA 执行了 15% 裁员。\n\n市场分化成两类客户。幸存者需要 S23 级别的效率才能盈亏平衡——这是升级周期的销售机会，量更大。转型者把电力部分重新部署到 AI 计算，其中一部分容量留在 Bitmain，因为他们要懂两边的合作伙伴。IREN 的 97 亿微软协议、Core Scientific 通过 CoreWeave——这些是信号，不是整个市场。\n\nBitmain 北美收入的大头还是幸存者升级和不转型矿工的新 logo wins。我会把 70% 以上的时间放在这里。\n\n【收尾对齐】\n\n明确呼应了直属经理告诉你 \"AI 只是客户的一小部分\"。在确认听懂了他。",
        "qtype": "T",
        "charCount": 638
      },
      {
        "id": "m2-7",
        "num": 204,
        "title": "锚定·为什么 Bitmain 赢 (60 秒)",
        "answer": "【锚定回答 · 为什么 Bitmain 赢 · 60 秒】\n\n【三层】\n\n效率——S23 Hydro 9.5 J/TH 是行业最低。100 MW 的矿场，从 S19 fleet 的 25 J/TH 升级到 9.5，每年电费节省数百万美元。这是 CFO 关心的对话。\n\n生态——10 多年的固件迭代，ANTPOOL 集成，最大的装机基数遥测数据库，美国、哈萨克斯坦、中东、东南亚的区域售后枢纽。10 万台机器出问题时，我们有备件、有现场工程师。MicroBT 在追赶但还没到平价。\n\n美国工厂——Texas 或 Florida 的产线，年底满产。这是关税减免、交期加速、RMA 提速、给上市公司合规团队的政治掩护。竞争对手没有一家在同等准备阶段。\n\n【收尾原则】\n\n每个竞争性 deal 都锚定在效率加生态，绝不让对话坍缩到纯粹价格战。",
        "qtype": "T",
        "charCount": 367
      }
    ]
  },
  {
    "id": "mod3",
    "name": "Foxx经历深挖",
    "color": "#E65100",
    "icon": "🛒",
    "description": "北美分销·Walmart/Target/Best Buy·T-Mobile/ACP·CES展会",
    "cards": [
      {
        "id": "m3-1",
        "num": 11,
        "title": "请详细介绍你在Foxx的主要工作内容和业绩",
        "answer": "我在Foxx Development从2023年4月至今，担任销售经理，负责北美市场的销售战略和渠道开发。Foxx总部在加州尔湾，主要业务是ICT硬件产品的北美分销。\n\n我的工作分为四大板块：\n\n第一板块：从零搭建北美分销网络\n\n加入Foxx时公司在北美基本没有成熟分销体系。我的任务是从零建立系统化的分销网络。\n\n具体做法： - 展会获客 — 主导参加CES、Computex等全球顶级科技展会。展前研究参展商名单，通过LinkedIn联系关键决策人，预约展会期间会面；展会期间为不同类型分销商准备差异化的pitch - 分销商三类分层 — 全国性IT分销商（Ingram Micro、TD SYNNEX、D&H）、区域性专业分销商、垂直行业分销商 - 评估体系 — 年销售额、客户覆盖、现有品牌组合、仓储物流能力、技术支持、付款信用 - 差异化合作模式 — 核心分销商：区域独家+更高返点+MDF支持；普通分销商：非独家+标准返点\n\n成果：一年内签约12家区域核心经销商，覆盖北美主要区域市场，建立了完整的分销网络，年贡献收入$8000万。\n\n第二板块：主流零售渠道突破\n\n攻克Walmart、Target、Best Buy等主流零售渠道。这些零售巨头对供应商有极高的门槛。\n\n挑战分析： - 产品认证——UL、FCC、能源之星等必须齐全 - 产品责任险——通常要求$100-200万保额 - IT系统对接——必须具备EDI系统对接能力 - 物流能力——需要本地仓储和配送能力 - 售后服务——需要建立本地售后服务网络\n\n解决方案： - 首先深入研究每家零售商的Vendor Guide，列出所有必须满足的条件清单 - 协调公司内部跨部门资源，推动工厂完成UL/FCC必要认证 - 购买足额产品责任险、对接EDI系统 - 建立本地仓储合作、解决物流配送问题 - 策略上选择先找区域买手（Regional Buyer）而非总部采购，从小品类/小区域试点开始，用数据证明产品市场潜力，逐步扩大合作\n\n成果：成功将公司产品纳入Walmart、Target、Best Buy的商业采购清单，年贡献收入超$300万。\n\n第三板块：大客户开发与营收增长\n\n我主导了两个重要大客户项目：\n\nT-Mobile运营商合作项目： - 通过行业展会认识T-Mobile采购经理，了解他们在寻找新的硬件供应商 - 深入挖掘需求：产品规格、年度采购量、质量标准、物流、售后 - 针对需求定制产品配置，与工厂确认产能和交期，准备详细报价方案 - 经历多轮商务谈判，在价格、账期、售后响应时间上达成平衡 - 邀请客户参观我们的供应商工厂，增强信任\n\nACP/Lifeline政府补贴项目： ACP（Affordable Connectivity Program）和Lifeline是美国联邦通信补贴项目，为低收入家庭提供设备和服务补贴。我开拓了多个参与这些项目的经销商伙伴关系。\n\n成果：这些项目合计为公司带来年度收入增长$1500万。\n\n第四板块：数字营销创新 - TikTok直播电商\n\nTikTok直播ToB和ToC矩阵： - 从零搭建公司在TikTok Shop美区的整个运营体系 - ToB端向北美系统集成商展示制造实力，获得大量RFQ询盘 - ToC端直接面向消费者销售 - 组建并培训直播主播团队，建立分级培养体系 - 制定标准化运营文档：内容制作流程、达人建联策略、产品卖点分析、销售话术\n\n成果：品牌销售额位列TikTok Shop美区品类Top 2。\n\n展会营销： - 领导CES/NALA展会战略与执行，全程负责预算规划、供应商选择、展位设计、现场商务谈判 - 展会后及时跟进意向客户，转化为实际订单",
        "qtype": "P",
        "charCount": 1548
      },
      {
        "id": "m3-2",
        "num": 12,
        "title": "在Foxx你从零搭建北美分销网络，签约12家区域核心分销商。请详细介绍你的渠道开发方法论",
        "answer": "我采用了“战略规划 → 精准触达 → 价值转化”的三阶段方法论。\n\n第一阶段：市场调研与渠道规划（第1-2个月）\n\n首先对北美ICT分销市场做全面调研，将潜在分销商分为三类：\n\n| 分销商类型 | 代表公司 | 特点 |\n| --- | --- | --- |\n| 全国性分销商 | Ingram Micro、TD SYNNEX、D&H | 覆盖面广但门槛高 |\n| 区域性分销商 | 东海岸、西海岸、德州中型商 | 灵活度高，决策快 |\n| 垂直行业分销商 | 教育、政府采购、运营商 | 专精领域，合作深 |\n\n基于Foxx产品特点（消费电子、IoT设备）和公司资源，我制定了“先区域、后全国，先垂直、后综合”的渠道策略。\n\n第二阶段：展会获客与精准触达（第3-6个月）\n\n我把CES和Computex作为主要获客阵地：\n\n展会前：\n\n研究参展商名单，筛选出50-80家目标分销商\n\n通过LinkedIn提前联系关键决策人，预约展会期间的15分钟会面\n\n为不同类型分销商准备差异化的Pitch Deck\n\n展会期间：展位不仅展示产品，更展示供应链能力和市场支持体系——分销商最关心的两个点。用数据说话：工厂产能、交期保障、质量良率、MDF支持\n\n第三阶段：谈判签约与关系深化（第7-12个月）\n\n展会后严格的线索跟进机制： - 48小时内发送个性化跟进邮件，附定制化合作方案 - 一周内安排视频会议深入洽谈 - 两周内完成首批意向分销商的实地拜访\n\n谈判中设计灵活的合作模式：\n\n| 合作层级 | 合作条款 | 适用对象 |\n| --- | --- | --- |\n| 核心合作 | 区域独家 + 3-5%返点 + 年度MOQ | 实力强分销商 |\n| 标准合作 | 非独家 + 2%返点 + 无MOQ | 新合作分销商 |\n| 战略合作 | 独家 + 5%返点 + MDF + 联合营销 | 战略级伙伴 |\n\n成果：12个月签约12家，覆盖北美80%+主要市场，当年贡献渠道销售$800万+。\n\n与Bitmain的关联：\n\n这段经验直接适用于Bitmain的北美渠道拓展。Bitmain虽然大客户主要是直销，但中型私营矿企和数据中心运营商通过系统集成商和数据中心解决方案商触达是很大的一部分。我的分销商分层方法和展会获客体系可以直接复用，只需把分销商换成矿业系统集成商（如Luxor Mining）、数据中心运营商、托管商合作伙伴，就是Bitmain的渠道拓展蓝图。",
        "qtype": "P",
        "charCount": 1036
      },
      {
        "id": "m3-3",
        "num": 13,
        "title": "你是如何成功将产品打入Walmart、Target和Best Buy的？准入门槛极高，你是如何克服的？",
        "answer": "打入主流零售渠道是我在Foxx最困难也最有成就感的项目之一。我采用了“合规先行、关系突破、试点验证”的策略。\n\n挑战分析：\n\nWalmart、Target、Best Buy对供应商有多维度要求：\n\n类别\n\n具体要求\n\n产品认证\n\nUL、FCC、能源之星\n\n商务条款\n\n$100-200万产品责任险、EDI对接、UPC条码\n\n供应链\n\n能送货到指定DC、处理退货\n\n业绩证明\n\n需要展示市场需求和动销能力\n\n组织关系\n\n决策链长（6-12个月），多个stakeholder\n\n我的五步解决方案：\n\n步骤一：合规性补齐（3个月）\n\n我牵头梳理每家零售商《供应商手册》（Vendor Guide），列出所有合规要求，逐一攻克： - 与工厂协调完成UL/FCC认证，周期约8-12周 - 购买$200万产品责任险 - 推动IT部门完成EDI系统对接 - 与3PL合作建立本地仓储\n\n步骤二：关系突破（2个月）\n\n没有直接联系总部采购，采用”区域切入”策略： - 通过CES结识Walmart区域品类买手 - 通过LinkedIn挖掘Target采购团队二度人脉 - 利用现有分销商零售关系获得Best Buy引荐\n\n沟通中重点强调三个价值点： 1. 我们的产品填补了XX价格段的市场空白 2. 成熟的供应链，能保证稳定供货 3. 愿意配合零售商的促销活动，提供灵活支持\n\n步骤三：试点验证（3个月）\n\n提出先从一个区域、一个品类开始试点，降低零售商决策风险： - 在Walmart德州区域试销3款SKU - 每周主动提供销售数据和市场反馈 - 配合零售商促销活动，确保动销表现\n\n步骤四：数据证明价值（持续）\n\n试点开始后密切跟踪数据，定期向采购汇报： - 销售数据（vs. 预期、vs. 同品类竞品） - 退货率（证明产品质量） - 消费者反馈 - 下一步建议（扩大SKU、扩大区域）\n\n步骤五：扩大合作（6-12个月）\n\n用试点数据为基础，分阶段扩大： - Walmart：5 SKU → 12 SKU；3州 → 全国 - Target：3 SKU 线上 → 5 SKU 线上+线下 - Best Buy：2 SKU → 纳入商用采购清单\n\n结果：成功将产品纳入三家零售商正式供应商名录，首年零售渠道贡献收入超$300万。\n\n经验总结：进入大型零售渠道的核心是”降低对方的风险感知”——通过合规性证明你是专业供应商，通过试点数据证明产品有市场，通过灵活配合证明你是好合作伙伴。\n\n与Bitmain的关联：\n\n公众矿企（MARA、RIOT、CLSK）的采购流程与大型零售商惊人地相似——都有供应商合规手册、采购委员会、法务审核、EDI对接、财务审计。Walmart和Target的供应商准入方法论——合规先行、区域切入、试点验证、数据证明——可以完全迁移到公众矿企的采购体系。",
        "qtype": "P",
        "charCount": 1185
      },
      {
        "id": "m3-4",
        "num": 14,
        "title": "T-Mobile和ACP/Lifeline项目给公司带来$1500万收入。你的策略是什么？",
        "answer": "T-Mobile/ACP项目是我职业生涯最大的单笔B2B交易，也是我复杂销售项目管理的代表作。\n\n项目背景：\n\n2023年，美国政府的ACP（Affordable Connectivity Program）为低收入家庭提供宽带和设备补贴。T-Mobile、AT&T、Verizon等运营商需要采购大量符合要求的智能设备分发给用户。这是一个政策驱动的确定性市场机会。\n\n我的四阶段策略与执行：\n\n阶段一：机会识别与资源整合（第1-2周）\n\n通过行业渠道了解到T-Mobile在寻找ACP项目的设备供应商。快速做了几件事： - 研究ACP项目的设备技术要求和认证标准 - 评估现有产品与要求的匹配度 - 联系一家有政府补贴项目经验的分销商伙伴（他们熟悉流程和关系）—— 这是关键决策\n\n阶段二：方案准备与投标（第3-6周）\n\n协调内部团队准备投标方案，重点突出四个价值点：\n\n| 维度 | 价值主张 |\n| --- | --- |\n| 产品合规性 | 设备完全符合FCC和ACP技术要求 |\n| 成本优势 | 基于供应链能力，报价比竞品低10-15% |\n| 交付能力 | 工厂可在60天内完成首批10万台生产交付 |\n| 售后保障 | 在美国本地建立了售后服务网络 |\n\n同时，与分销商伙伴联合投标，他们负责最后一公里配送和客户服务，我们负责产品和供应链。\n\n阶段三：关系维护与谈判（第7-10周）\n\n投标后保持与T-Mobile采购团队的高频沟通： - 每周主动发送项目进展更新 - 对方提出的任何技术问题，24小时内给出详细回复 - 邀请他们参观我们的供应商工厂（视频形式），增强信任\n\n价格谈判环节：T-Mobile试图再压价8%。我的应对策略： - 不直接降价，而是提出”阶梯式采购量返点”方案 - 如果年度采购量达到50万台，额外返还3% - 这样既保护了我们的利润，也给了对方激励\n\n阶段四：合同签署与履约（第11-12周）\n\n最终签署为期2年的框架协议，首年采购承诺80万台设备。\n\n结果： - 项目首年贡献收入$1500万 - 成为公司在运营商渠道的标杆案例 - 后续T-Mobile主动找我们洽谈其他产品线合作\n\n四点关键经验：\n\n借势政策红利： ACP是政府项目，需求有保障，关键是快速响应\n\n借力合作伙伴： 找到有经验的分销商伙伴，弥补我们的短板\n\n顾问式销售： 不是卖产品，而是帮客户解决问题\n\n谈判灵活性： 不在价格上死磕，而是创造性地设计双赢方案\n\n与Bitmain的关联：\n\n这套复杂B2B大项目销售方法同样适用于Bitmain的公众矿企大单。 10万台机器的RFQ对Bitmain就像T-Mobile对Foxx。相似度包括： - 政策驱动的确定性（挖矿的是S19替换周期和AI转型周期，类似ACP的政策窗口） - 多层决策链（采购、财务、工程、法务、高管） - 谈判杠杆不只在价格（交期、售后、融资、BTC质押等多维度） - 后续的合作拓展（T-Mobile其他产品线 ≈ 扩展矿场容量订单）",
        "qtype": "P",
        "charCount": 1261
      },
      {
        "id": "m3-5",
        "num": 15,
        "title": "你主导了CES、NALA等重要展会。如何确保展会投资回报率最大化？",
        "answer": "展会是B2B获客的重要渠道，但投入不小（一次CES展位+差旅可能$5-10万）。我把展会当作一个完整的销售项目来管理，确保每一分钱都有回报。\n\n我的展会管理四阶段方法论：\n\n阶段一：目标设定与预算规划（展前3个月）\n\n先明确可量化的参展目标： - 合格销售线索数量（如100条） - 与目标客户的会议数（如20场） - 现场意向签约（如3家） - 品牌曝光量（如500+展位访问）\n\n然后制定预算：\n\n| 项目 | 预算占比 |\n| --- | --- |\n| 展位租赁 | 25% |\n| 展位搭建 | 20% |\n| 样品和演示设备 | 15% |\n| 差旅和酒店 | 25% |\n| 宣传物料 | 10% |\n| 应急 | 5% |\n| 阶段二：展前准备（展前2个月） | 目标客户名单：从参展商名单、LinkedIn、行业数据库筛选50-100家目标客户 |\n\n预约会议：通过邮件和LinkedIn提前预约展会期间会面，目标约20-30场\n\n展位设计：设计互动式展位，让访客可以亲自体验产品\n\n物料准备：产品手册、名片、演示视频、报价单\n\n团队培训：确保每个参展人员都能清晰介绍产品卖点、回答常见问题\n\n阶段三：展会执行（展会期间）\n\n人员分工：主讲人负责产品演示，辅助人员负责登记信息、发放物料\n\n线索收集：使用电子名片扫描或表格记录每个访客的联系方式和需求\n\nVIP接待：为预约的重要客户提供单独的会议室和深入洽谈\n\n实时汇报：每天晚上总结当天线索，调整第二天策略\n\n阶段四：展后跟进（展后1个月）\n\n这是最关键的环节——80%的展会价值来自展后跟进。\n\n| 时间点 | 动作 |\n| --- | --- |\n| 48小时内 | 对所有线索发送个性化感谢邮件 |\n| 1周内 | 对A类线索电话跟进，安排视频会议 |\n| 2周内 | 发送定制化方案或报价 |\n| 1个月内 | 完成首批意向客户的签约 |\n\n结果案例：CES 2024\n\n| 指标 | 目标 | 实际 |\n| --- | --- | --- |\n| 展位访客 | 500 | 650+ |\n| 合格线索 | 100 | 120+ |\n| 现场预约会议 | 20 | 25 |\n| 展后3个月内签约 | 3家 | 5家（其中2家成为核心分销商） |\n| 投资回报率 | 3x | 5x+ |\n\n四点关键经验： 1. 目标导向： 没有明确目标的参展就是烧钱 2. 展前比展中重要： 70%的工作在展前完成 3. 展后比展中重要： 不跟进的线索毫无价值 4. 团队协作： 一个人搞不定，需要销售、市场、技术的配合\n\n与Bitmain的关联：\n\nBitmain的核心行业展会是WDMS（World Digital Mining Summit）、Bitcoin 2026 Vegas、Mining Disrupt Miami、Bitcoin MENA Abu Dhabi。同样的方法论完全适用——只是目标客户从分销商换成矿企、机构资本、数据中心运营商。我会把Bitmain的展会投入按同样的四阶段管理，确保每次出展都产生可量化的pipeline。",
        "qtype": "P",
        "charCount": 1307
      }
    ]
  },
  {
    "id": "mod4",
    "name": "PayPal经历",
    "color": "#00838F",
    "icon": "💳",
    "description": "数据驱动销售·Amazon/eBay解决方案·跨境团队",
    "cards": [
      {
        "id": "m4-1",
        "num": 16,
        "title": "你在PayPal的工作给你带来了什么收获？",
        "answer": "我在PayPal从2021年4月到2023年3月担任商务拓展经理，工作地点在洛杉矶。PayPal是全球领先的在线支付平台，纳斯达克上市公司。\n\n这段经历让我积累了四方面核心能力，都与Bitmain的销售工作高度适用：\n\n第一，数据驱动的销售思维\n\n在PayPal我负责商户拓展和运营，核心方法就是数据驱动。\n\n具体做法： - 商户画像系统——通过分析商户的交易数据（交易量、频率、客单价、退款率），识别高价值客户和潜力客户 - 分层运营策略——把商户分成四类：\n\n| 分类 | 标准 | 策略 |\n| --- | --- | --- |\n| A类-明星客户 | 高交易量+高增长 | 每周主动联系，专属客户经理 |\n| B类-现金牛客户 | 高交易量+低增长 | 重点监控异常，防止流失 |\n| C类-潜力客户 | 低交易量+高增长 | 重点培育，未来的A类 |\n| D类-普通客户 | 低交易量+低增长 | 标准化服务，效率优先 |\n\n精准营销——根据商户画像进行精准营销，为亚太区渠道拓展制定销售策略\n\n成果：客户留存率提升15%，带动年度收入增长10%。\n\n对Bitmain的适用：公众矿企的Capex在10-Q中公开披露。 我会建立一个每个目标账户的”shadow模型”，并行于Salesforce，追踪可寻址的钱包份额和增长潜力。这比仅仅看opportunity stage数学靠谱得多。\n\n第二，大客户管理能力\n\n我在PayPal管理200+核心商户账户，涵盖电商平台、零售商、跨境贸易商。\n\n具体做法： - 快速响应机制——建立4小时内响应客户问题的承诺 - 主动服务——定期主动拜访，了解客户业务变化，提前发现潜在问题 - 专属服务方案——针对不同客户的业务特点，提供定制化解决方案 - 预警机制——监控异常数据，比如交易量连续下降、投诉增加等信号，一旦发现立即跟进\n\n成果：200+核心商户实现零流失。\n\n对Bitmain的适用：公众矿企的采购周期是3-9个月，私营矿企是4-6周。无论哪种，大客户关系的维护都是未来订单的基础。分层+快速响应+主动+预警——这套机制可以直接应用。\n\n第三，解决方案销售能力\n\nPayPal产品线丰富：PayPal Checkout、PayPal Credit、跨境支付、商户金融。我的工作不是简单推销单一产品，而是根据客户业务需求推荐整体解决方案。\n\n具体案例： - 跨境电商客户：综合考虑目标市场、交易币种、结算需求，推荐跨境支付+多币种结算的组合 - 大型电商平台：推荐定制化的支付集成方案，包括API对接、风控规则配置 - 主动发现增长机会：向客户介绍新上线的支付功能，帮助他们拓展国际市场\n\n成果：成功签约并交付90%以上的集成项目，包括Amazon和eBay等主要电商平台。\n\n对Bitmain的适用：Bitmain的业务就是方案销售——硬件+托管+运维+矿池+融资的组合。不同客户场景对应不同的捆绑方案。公众矿企需要的是大规模+多年+融资辅助的全方案；私矿需要的是灵活+分期+trade-in的定制组合；F1000需要的是合规+美国工厂+风险控制的加强版。这套方案销售思维完全迁移。\n\n第四，跨境业务和国际团队协作经验\n\nPayPal是全球化企业，我的角色涉及跨区域协作： - 负责向美国总部汇报亚太区销售进展，定期参加与总部的业务回顾会议 - 协调全球销售团队资源 - 处理跨时区沟通，与中国、东南亚、美国等不同时区同事和客户保持高效沟通\n\n成果：提升了跨区域销售协作效率30%。\n\n对Bitmain的适用：Bitmain是中国总部、全球销售，这正是PayPal经验直接映射的场景。微信作为工作工具、邮件作为留痕、视频会议作为主要沟通、季度出差作为关系维护——这一整套我在PayPal就已经在用，完全可以直接应用到Bitmain的中美协作上。",
        "qtype": "P",
        "charCount": 1604
      },
      {
        "id": "m4-2",
        "num": 17,
        "title": "在PayPal，你主导了Amazon和eBay等电商平台的支付解决方案销售。请详细介绍这个过程",
        "answer": "这是我在PayPal最有挑战性也最成就感的项目类型——与大型电商平台的战略合作。\n\n项目背景：\n\nPayPal的业务模式是通过支付集成扩大交易量。大型电商平台（Amazon第三方卖家、eBay）是重要战略客户。我负责与这些平台洽谈支付解决方案的集成合作。\n\n我的四阶段方法论：\n\n阶段一：价值定位与利益相关方识别\n\n首先明确我们能为平台带来什么价值： - 提升转化率：数据显示，提供PayPal支付选项可将结账转化率提升5-10% - 降低欺诈风险：PayPal的风控系统可以帮助平台减少欺诈损失 - 拓展国际市场：PayPal的多币种支持可以帮助平台服务全球买家\n\n识别并接触关键决策人： - 支付合作伙伴关系负责人 - 产品经理（负责结账流程） - 技术团队负责人\n\n阶段二：定制化方案设计\n\n不同平台的需求不同，针对性设计方案：\n\n| 平台 | 核心需求 | 定制化方案 |\n| --- | --- | --- |\n| eBay | 欺诈保护、买家信任 | 强调PayPal的卖家保护政策和争议解决机制 |\n| Amazon（第三方） | 国际化、多币种 | 强调PayPal的190+国家覆盖和25种货币支持 |\n\n阶段三：项目管理与跨部门协调\n\n支付集成是技术项目，我需要扮演”项目经理”角色： - 与平台技术团队对接API文档和技术要求 - 协调PayPal内部的技术、产品、法务团队 - 制定详细的项目计划和里程碑 - 每周召开项目进展会议，及时解决问题\n\n阶段四：持续优化与关系深化\n\n集成上线后： - 监控关键指标（交易量、转化率、欺诈率） - 定期与平台方回顾业务数据 - 提出优化建议（如推广PayPal信用支付以提升客单价）\n\n结果：成功签约并交付90%以上的集成项目。\n\n四点关键经验：\n\n价值导向： 不是卖产品，而是帮客户实现业务目标\n\n技术理解： 即使是销售岗位，也需要理解技术细节才能有效沟通\n\n项目管理： 大型合作需要系统化的项目管理，不是一次销售而是持续的伙伴关系\n\n数据驱动： 用数据证明价值，用数据推动优化\n\n与Bitmain的关联：\n\nBitmain的大型公众矿企部署本质上是”技术+商务”的复杂项目。10万台机器的RFQ需要： - 工程团队对接（规格、现场部署、ERCOT接入） - 财务团队对接（账期、BTC质押、融资） - 法务对接（合规、关税、合同） - 运维对接（O&M SLA、固件、升级路径）\n\n和我在PayPal做Amazon集成的项目管理方式完全一致——跨部门、多里程碑、持续沟通、数据驱动优化。",
        "qtype": "P",
        "charCount": 1078
      }
    ]
  },
  {
    "id": "mod5",
    "name": "销售能力",
    "color": "#6A1B9A",
    "icon": "📈",
    "description": "GTM策略·新客开发·大客户维护·最难挑战·最大成就",
    "cards": [
      {
        "id": "m5-1",
        "num": 18,
        "title": "基于你的经验，你计划如何在美国市场销售Bitmain的产品？",
        "answer": "基于我对Bitmain产品线和美国挖矿市场的理解，我制定了以下Go-to-Market策略。\n\n一、市场分析\n\nBitmain的北美客户群体分四层：\n\n| 层级 | 代表客户 | 占时间 |\n| --- | --- | --- |\n| 公众矿企 | MARA、RIOT、CLSK、CIFR、CORZ、HUT、WULF、BITF、IREN、BTDR | 70% |\n| 大型私营矿企与数据中心运营商 | PE支持私矿、混合AI/BTC运营商、托管商 | 20% |\n| 对冲基金和机构资本 | 通过投资矿企间接接触 | 5% |\n| 《财富》1000强 | BTC treasury公司、能源巨头、HPC买家 | 5% |\n\n二、主要销售渠道\n\n直销给公众矿企 — 这是Bitmain北美收入的主力\n\n通过矿业系统集成商 — Luxor、Compass Mining、独立咨询顾问\n\n数据中心运营商合作 — 托管伙伴\n\n金融/融资伙伴 — Galaxy Digital、NYDIG等，作为共同方案的一部分\n\n三、我的五层Go-to-Market策略\n\n策略一：公众矿企的直接关系深化\n\n目标：第一年与每家Top 10公众矿企建立COO/CFO/Chief Mining Officer级别的关系。\n\n方法： - 利用Bitmain现有客户关系（如CleanSpark $1.677亿deal的延续） - 每家公众矿企的10-Q深度研读，建立每账户的shadow capex模型 - 每季度的生意回顾（QBR）+ 临时访谈节奏 - 行业展会（WDMS、Bitcoin 2026 Vegas）的高层邀约\n\n策略二：S19替换周期 + S23升级的销售叙事\n\n背景：北美S19安装基数巨大。hashprice $36/PH/day下S19 XP生产成本$80K+/BTC；S23 Hydro把这个数字降到$45K左右。这是每个CFO都在算的账。\n\n核心卖点： - 不是”多买算力”，而是”降低生产成本” - 以旧换新：S19折抵换S23 - TCO 5年NPV模型 - BTC质押（BTC pledging）作为现金流辅助\n\n策略三：矿业系统集成商和托管伙伴赋能\n\n签约3-5家战略级系统集成商合作伙伴\n\n提供产品培训、演示设备、联合销售支持\n\nMDF市场基金支持集成商的客户活动\n\n建立集成商绩效仪表盘，识别增长机会\n\n策略四：美国工厂的差异化定位\n\n这是Bitmain最大的新卖点： - 关税减免（规避25-35% Liberation Day关税） - 交货加速（从海运60-90天到国内物流） - RMA加速（从数周到数天） - 政治合规（给客户审计委员会答辩依据）\n\n策略五：AI转型客户的混合捆绑\n\n对IREN、Core Scientific、Hut 8这类混合业务客户： - 不抵抗他们的AI转型 - Sophon作为AI工作负载选项（尤其适合推理） - 保留BTC关系：为残余BTC容量供应S23 Hydro - 案例化：成功的BTC-到-AI混合转型是下一个5个对话的参考\n\n四、系统化线索管理\n\n所有线索进入CRM系统，按以下流程：\n\n线索获取 → 初筛（24小时内） → 分级（A/B/C） → A类立即跟进 → B类进入培育序列 → C类长期nurture\n\nA类（高意向高价值）：销售团队直接跟进，7天内proposal\n\nB类（有兴趣未成熟）：自动化邮件培育+月度触点\n\nC类（了解阶段）：定期内容推送，保持品牌认知\n\n五、第一年目标\n\n| 指标 | 目标 |\n| --- | --- |\n| Top 10公众矿企深度关系 | 8家（至少COO/CFO级） |\n| 战略系统集成商合作伙伴 | 3家 |\n| 标杆客户案例 | 2个已落地，可对外引用 |\n| 新Logo（非已有客户） | 5-8家 |\n| 销售收入 | $XXXM（入职两周内与经理对齐） |\n| Pipeline覆盖倍数 | 3x年度目标 |",
        "qtype": "S",
        "charCount": 1665
      },
      {
        "id": "m5-2",
        "num": 19,
        "title": "你如何开发新客户？请举一个成功的例子",
        "answer": "我的新客户开发策略是“展会获客 + 精准跟进 + 价值证明”三步法。\n\n案例：开发Walmart零售渠道\n\n背景： 2023年下半年，Walmart是全球最大零售商，对供应商有极高门槛。很多中国品牌被挡在门外。\n\n第一步：展会获客\n\n在CES 2023与Walmart的Consumer Electronics部门采购经理建立初步联系。\n\n展前准备：通过LinkedIn找到对方，发送简短自我介绍，请求展会期间会面。准备针对零售渠道的pitch材料\n\n展会期间：约到15分钟会面。没有直接推销产品，而是先了解Walmart在品类的采购计划和痛点。了解到他们对现有供应商的不满：交期不稳定、售后响应慢、产品同质化严重\n\n第二步：精准跟进\n\n展会后跟进是关键。很多销售在展会后石沉大海。\n\n| 时间 | 动作 |\n| --- | --- |\n| 第1周 | 发送感谢邮件+会议纪要，总结他们的痛点 |\n| 第2周 | 深入研究Walmart Supplier Standards和Vendor Guide，评估我们的差距 |\n| 第3周 | 发送定制化合作方案，针对他们的痛点逐一说明 |\n| 第4周 | 安排产品演示，申请寄送样品 |\n\n第三步：价值证明\n\n仅展示产品不够，关键是证明我们能为Walmart创造价值。\n\n市场数据支撑： - 品类在北美市场的增长数据 - 消费者调研数据（产品特性的消费者需求排名） - 竞品在其他零售商的销售数据\n\n试点方案： - 部分门店或部分区域先试点 - 承诺对试点销售数据追踪和分析 - 设定清晰的成功标准\n\n风险消除： - 完成所有必要的产品认证 - 购买$200万产品责任险 - 完成EDI系统对接测试 - 与3PL合作确保能送货到Walmart DC\n\n结果： 大约6个月努力后，产品成功进入Walmart商业采购清单。虽然一开始只是部分门店的部分SKU，但这是重要突破。\n\n经验总结：\n\n不是推销产品，而是解决问题 — 围绕客户痛点构建价值主张\n\n做足功课 — 深入研究客户具体要求，主动补齐短板\n\n持续跟进但不骚扰 — 每次跟进都提供新价值，而不是”考虑得怎么样了”\n\n用数据说话 — 市场、竞品、消费者数据\n\n降低客户风险 — 试点方案让客户小规模尝试\n\n与Bitmain的关联：\n\n同一套方法论在Bitmain开发新矿企客户完全适用：\n\n展会获客 → WDMS、Bitcoin 2026 Vegas的目标客户预约\n\n精准跟进 → 10-Q分析发现他们的capex信号和fleet efficiency痛点，提供定制TCO模型\n\n价值证明 → 用行业数据、S23对MicroBT的效率对比、CleanSpark的case study做支撑\n\n试点方案 → 对新客户可以先5000机器的小批量开始，降低决策风险",
        "qtype": "P",
        "charCount": 1179
      },
      {
        "id": "m5-3",
        "num": 20,
        "title": "你如何维护大客户关系？",
        "answer": "我的大客户维护策略是“分层管理 + 快速响应 + 价值共创”。\n\n一、分层管理体系\n\n不是所有客户都应该投入同样的精力。\n\n在PayPal时（200+商户）：\n\n| 分类 | 标准 | 数量 | 策略 |\n| --- | --- | --- | --- |\n| A类-明星 | 月交易>$100万+增长>20% | ~20家 | 每周主动联系，专属客户经理 |\n| B类-现金牛 | 月交易>$100万+增长<20% | ~40家 | 每两周联系，防止流失 |\n| C类-潜力 | 月交易<$100万+增长>20% | ~50家 | 重点培育，未来的A类 |\n| D类-普通 | 月交易<$100万+增长<20% | ~100家 | 标准化服务 |\n\n在Foxx时（6个主要分销商）：\n\n| 分类 | 标准 | 管理策略 |\n| --- | --- | --- |\n| 战略级 | 年采购>$200万 | 每周电话+每月拜访+季度QBR |\n| 重点级 | 年采购$50-200万 | 每两周电话+每季度拜访 |\n| 普通级 | 年采购<$50万 | 每月电话+半年拜访 |\n\n对Bitmain的应用：\n\n| 分类 | 标准 | 管理策略 |\n| --- | --- | --- |\n| 战略级公众矿企 | MARA/RIOT/CLSK级别，年capex>$50M | 每周联系+每月拜访+季度QBR+执行团队定期访谈 |\n| 核心公众矿企 | CIFR/HUT/WULF级别，年capex $10-50M | 每两周联系+每季度现场 |\n| 私营矿企 | 500-5000台机器级别 | 每月电话+半年拜访 |\n| 系统集成商 | 战略伙伴级 | 每月电话+季度联合营销活动 |\n\n二、快速响应机制\n\n4小时内响应的标准：\n\n紧急（设备故障、交货危机）：1小时内响应\n\n重要（技术咨询、合同问题）：4小时内响应\n\n一般（信息查询、建议）：24小时内响应\n\n响应不等于解决 — 即使不能立即解决，也要先响应，给出预期时间，定期更新进展。\n\n在PayPal成果： 200+核心商户管理1年多实现零流失。\n\n三、主动服务而非被动响应\n\n大客户维护不能只是”等客户来找我”。主动创造接触点：\n\n定期业务回顾（QBR）： - 对战略客户每季度一次正式QBR - 内容：过去一季度合作回顾、数据分析、问题总结、下一季度计划 - 了解客户业务变化、发现新机会的重要时机\n\n预警机制： - 监控客户关键数据（采购量、活跃度、付款情况） - 设置预警阈值：采购量连续下降3周，自动触发跟进 - 在客户自己意识到问题之前主动联系\n\n定期拜访： - 不是等有事才见面，而是定期主动拜访 - 了解客户业务动态、组织变化、未来计划 - 建立的是关系，不仅仅是交易\n\n四、价值共创\n\n最高层次的客户关系是”价值共创”——不仅仅是卖东西，而是帮助客户成功。\n\n在PayPal： - 帮助客户发现增长机会（分析交易数据，提示国际订单增长趋势） - 推荐新功能/新产品（针对性而非群发） - 连接PayPal内部资源（营销、技术支持） - 帮助客户之间建立连接\n\n在Foxx： - 联合市场活动（与核心分销商共同参展） - 销售赋能（为分销商销售团队提供产品培训、话术、Demo） - 大单支持（有大单机会亲自参与） - 市场信息共享（与分销商分享市场趋势、竞品动态）\n\n对Bitmain的应用：\n\n帮助客户发现增长机会 — 基于行业数据告诉CleanSpark何时是Texas扩张的最佳capex时机\n\nBitmain资源链接 — 把客户连接到Galaxy/NYDIG的融资、ANTPOOL的矿池接入、Sophon的AI选项\n\n案例共创 — 和客户一起产出case study，对双方品牌都有利\n\n行业情报共享 — 把竞争信息、政策变化、市场趋势主动分享给客户\n\n五、激励机制设计\n\n对系统集成商和托管伙伴类型的客户：\n\n| 激励类型 | 具体内容 |\n| --- | --- |\n| 销量返点 | 达到基础目标2%，超额20%给3%，超额50%给4% |\n| 新品激励 | 新品首发30天独家+首批订单5%折扣 |\n| 年度奖励 | 完成年度目标的伙伴获得额外现金返点 |\n| MDF支持 | 根据市场活动计划，提供采购额2-5%的市场费用 |\n\n总结：\n\n大客户关系维护的核心是让客户感受到价值——不仅产品价值，还包括： 1. 响应的及时性 2. 对客户业务的理解 3. 主动提供的建议和资源 4. 帮助客户成功的意愿",
        "qtype": "P",
        "charCount": 1896
      },
      {
        "id": "m5-4",
        "num": 21,
        "title": "你遇到过最困难的销售挑战是什么？你是如何解决的？",
        "answer": "最困难的挑战是在Foxx攻克Walmart、Target、Best Buy主流零售渠道。这个挑战困难在于它涉及多维度的系统性问题，而不是单纯的销售技巧问题。\n\n挑战分析：\n\n这些零售巨头有一套严格的准入标准，不是”产品好+价格低”就能进入。挑战分几层：\n\n产品合规层面 — UL、FCC、能源之星认证，包装符合零售要求\n\n商务合规层面 — $200万+产品责任险、EDI系统对接、UPC条码、Net 60-90账期\n\n供应链能力层面 — 送货到指定DC、库存补货、退货处理\n\n售后服务层面 — 本地化服务网络、消费者投诉处理、退换货政策\n\n组织层面 — 决策人难找、采购流程6-12个月、多个stakeholder需要说服\n\n我的五步解决方案：\n\n第一步：全面诊断差距（1个月）\n\n花一个月深入研究每家零售商的供应商手册和准入要求，列出完整条件清单，逐一评估公司现状。\n\n诊断结果： - 产品认证：UL已有，FCC缺失，能源之星缺失 - 商务合规：产品责任险只有$50万，EDI能力为零 - 供应链：无美国本地仓储 - 售后：无本地售后团队\n\n第二步：跨部门协作推动补齐（3个月）\n\n这些问题大部分不是销售部门能独立解决的，需要跨部门协作。\n\n我的做法： - 向CEO汇报零售渠道的战略价值和当前差距 - 获得公司层面的支持和资源承诺 - 组建跨部门项目组： - 产品部：推进FCC/能源之星认证 - 法务/财务：购买足额产品责任险 - IT部：EDI系统对接 - 供应链部：建立本地仓储合作 - 客服部：建立本地售后方案\n\n关键点：我不是仅仅提出问题，而是提出解决方案和时间表，让每个部门知道做什么、什么时候做完。\n\n第三步：找对人、建立关系（同步进行）\n\n外部关系同步推进： - 利用CES、InfoComm等展会机会，与零售商采购团队建立初步联系 - 不是找总部高层采购总监，而是先找区域买手（Regional Buyer）——他们更容易接触，决策门槛更低 - 通过LinkedIn持续跟进，保持关系 - 每次跟进提供价值（市场数据、产品更新），而不是简单问”考虑得怎么样”\n\n第四步：从试点开始（3个月）\n\n没有一开始就追求全国铺货，而是提出试点方案： - 先在部分区域或部分门店试销 - 只上架1-2个SKU - 承诺提供试点期间的销售数据追踪和分析 - 设定清晰的成功标准（销量、退货率、客户反馈）\n\n这种方式降低了零售商的风险，让他们更容易说”yes”。\n\n第五步：用数据证明价值（持续）\n\n试点开始后密切跟踪数据，定期向采购汇报。\n\n结果： 经过6个月系统性努力，产品成功进入Walmart、Target、Best Buy商业采购清单。首年零售渠道贡献收入超$300万。\n\n五点经验总结：\n\n复杂问题需要系统性解决 — 不能只靠销售技巧，需要跨部门协作、资源投入、时间积累\n\n销售要有”产品经理思维” — 要能识别和推动产品/流程改进，而不是只抱怨”产品不行”\n\n找对人比找高层更重要 — 区域买手虽级别低，但更容易接触、更愿意尝试\n\n试点是打开大门的钥匙 — 降低客户风险，让他们更容易说yes\n\n数据是最好的销售工具 — 用数据证明价值，比任何话术都有说服力\n\n与Bitmain的关联：\n\n这套系统性攻坚方法论完全适用于Bitmain打开一个全新的大客户。比如开发一个之前100%用MicroBT的新公众矿企：\n\n第一步诊断差距：他们为什么选MicroBT？价格？关系？交期？哪些维度我们强，哪些我们弱？\n\n第二步跨部门补齐：BD工程团队做custom演示，财务团队设计BTC质押方案，美国工厂团队推动本地交付\n\n第三步找对人：不找COO找operations manager或fleet manager，更容易接触\n\n第四步试点：先1000台S23做试点，对比他们现有机群数据\n\n第五步数据证明：3个月后用效率、uptime、O&M数据汇报，支撑扩大部署",
        "qtype": "B",
        "charCount": 1638
      },
      {
        "id": "m5-5",
        "num": 22,
        "title": "请讲一个你做过的最大的B2B项目，从接触到成交的完整过程",
        "answer": "项目：T-Mobile ACP框架协议，2023年下半年至2024年，总金额$1500万年度收入，2年框架协议\n\n阶段1：线索获取（第1-2周）\n\n通过CES 2023认识T-Mobile采购经理\n\n了解他们在为ACP项目寻找硬件供应商\n\n痛点：现有供应商交期不稳定、售后响应慢\n\n阶段2：需求挖掘（第3-4周）\n\n申请正式会议，带技术团队一起\n\n深入了解T-Mobile具体需求：产品规格、年度采购量、质量标准、物流配送、售后期望\n\n阶段3：方案制作（第5-6周）\n\n针对需求定制产品配置\n\n与工厂确认产能和交期\n\n准备详细报价方案和服务承诺\n\n准备公司资质文件和案例参考\n\n阶段4：商务谈判（第7-10周）\n\n经历3轮谈判\n\n主要谈判点：价格、账期、售后响应时间、年度返点\n\n我的策略：在价格上适度让步，但在账期和返点上坚持底线\n\n邀请他们参观供应商工厂（视频），增强信任\n\n阶段5：合同签署和履约（第11-12周）\n\n法务审核合同条款\n\n签署2年框架协议\n\n首单交付，建立稳定业务节奏\n\n结果： 项目首年贡献收入$1500万，成为公司在运营商渠道的标杆案例。",
        "qtype": "P",
        "charCount": 482
      },
      {
        "id": "m5-6",
        "num": 22.1,
        "title": "这个项目中最难的部分是什么？你怎么解决的？",
        "answer": "最大挑战是价格谈判。T-Mobile有强大议价能力，拿着竞争对手报价来压我们，要求的价格比我们底价低15%。\n\n我的四点解决策略：\n\n策略1：价值重构，不只谈价格\n\n做了TCO（总拥有成本）分析，把售后成本、故障率、更换周期都算进去\n\n证明我们的产品虽然单价略高，但3年总成本更低\n\n策略2：打包谈判\n\n不单独谈产品价格，而是把产品+配件+延保+技术支持打包\n\n整体方案对比竞争对手有优势\n\n策略3：引入非价格因素\n\n强调交期稳定性（竞争对手交期经常延误）\n\n强调本地化售后团队（竞争对手售后响应慢）\n\n承诺专属客户经理和优先技术支持\n\n策略4：创造性的让步\n\n在价格上做了5%的让步（而不是15%）\n\n作为交换，获得了更长的合同期限（2年而非1年）\n\n同时获得了联合市场推广的机会\n\n结果： 最终以比底价低5%的价格成交，利润率保住了，客户也觉得赢了。\n\n与Bitmain的关联：\n\n在Bitmain的公众矿企大单谈判中，价格往往是MicroBT的武器。我会用完全一样的四层策略： - TCO重构 — S23的5年NPV vs M79S看似便宜实则贵 - 打包谈判 — 硬件+托管+O&M+融资+BTC质押一起谈 - 非价格因素 — 美国工厂、效率、ANTPOOL、固件成熟度 - 创造性让步 — 不在单价上让步，而是多年合约锁定、trade-in credit、扩大返点",
        "qtype": "P",
        "charCount": 587
      },
      {
        "id": "m5-7",
        "num": 23,
        "title": "你最大的成就是什么？",
        "answer": "我最大的成就是在Foxx从零搭建了TikTok Shop美区直播电商体系，在6个月内从0到品牌销售额美区类目Top 2。\n\n背景：\n\n2023年，公司决定大力发展TikTok直播电商，看到这个渠道在美国市场的巨大潜力。但有两个挑战： 1. 我们之前没有任何直播经验 2. 产品是技术硬件（手机、平板、耳机、充电宝），不像服装美妆那么容易在直播中展示\n\n公司让我负责建立这个直播业务。\n\n最初的混乱：\n\n我们雇了几个主播，让他们即兴发挥，没有明确脚本，没有标准化流程。结果每场直播效果差异巨大： - 有时候一场能卖$2,000，有时候只有$200 - 观众留存率很低 - 主播之间没有知识分享\n\n我意识到如果要扩大业务，需要系统化一切。\n\n我的五步优化方法论：\n\n第一步：数据收集和分析\n\n我录制了所有直播，花时间分析什么有效、什么无效。发现几个规律：\n\n主播使用具体使用场景介绍产品时（“这个充电宝可以给苹果手机充电3次，适合长途飞行”），观众参与度明显提高\n\n设置限时闪购时，转化率激增\n\n主播通过评论与观众互动、回答问题时，观众停留时间更长\n\n产品演示非常重要——人们需要看到产品实际操作\n\n第二步：建立标准化流程\n\n为每个产品类别创建详细的脚本和操作手册。脚本不是要主播逐字读，而是提供结构和关键谈话要点。\n\n比如充电宝脚本包括： - 开场（30秒介绍和问候） - 产品规格（容量、充电速度、尺寸） - 演示（实际连接手机测试） - 使用场景（旅行者、户外爱好者、学生） - 当前促销 - 行动号召\n\n每个主播可以加入自己的个性，但核心信息保持一致。\n\n第三步：建立培训计划\n\n系统化培训： - 产品知识培训 — 每个主播必须了解所有产品的规格、功能、优势 - 镜头技巧培训 — 如何面对镜头，如何使用手势，如何控制声音 - 互动培训 — 如何阅读和回应评论，如何处理负面评论，如何创造紧迫感 - 销售技巧培训 — 如何增销，如何克服异议，如何达成交易\n\n第四步：内容规划流程\n\n从临时播改成结构化日历： - 周一、周三、周五晚上7-9点 - 周一：新产品发布 - 周三：畅销品展示 - 周五：闪购之夜\n\n观众知道什么时候收看，我们也可以更好地准备。\n\n第五步：KPI追踪系统\n\n追踪的指标： - 观众数量（峰值和平均值） - 观看时间 - 参与率（每观众评论数） - 转化率（观众到购买者） - 平均订单价值 - 总收入\n\n每周与团队审查这些指标，识别趋势，设定改进目标。\n\n结果：\n\n实施这些流程改进3个月内：\n\n| 指标 | 实施前 | 实施后 | 增长 |\n| --- | --- | --- | --- |\n| 每场平均收入 | $500-1000 | $3000-5000 | 4-5倍 |\n| 顶级主播单场最佳 | $2000 | $15,000 | 7.5倍 |\n| 观众留存 | 15分钟 | 35分钟 | 2.3倍 |\n| TikTok粉丝数 | 5,000 | 250,000（6个月） | 50倍 |\n| 美区类目排名 | 未入榜 | Top 2 | — |\n| 五点经验教训： | 不能依赖个人才能，需要建立可扩展的系统和流程 | 数据驱动的决策制定是关键，你需要了解你的数字 | 标准化和一致性产生可靠性和质量 |\n\n持续改进是一种文化，不是一次性项目\n\n培训和发展是投资而不是成本\n\n与Bitmain的关联：\n\n这个成就反映了我从零到一建立系统化运营的能力。在Bitmain的应用：\n\n北美销售团队的playbook构建 — 如果我入职时发现团队没有标准化的销售流程，我可以快速搭建：客户分层体系、标准pitch deck、TCO计算模板、异议处理手册、CRM使用规范\n\n新销售的培训体系 — 产品知识、矿业经济学基础、客户场景演练\n\n内容营销体系 — 类似TikTok直播的数字营销思路，可以用到LinkedIn企业内容矩阵\n\nKPI和数据驱动文化 — 建立每周pipeline review机制",
        "qtype": "B",
        "charCount": 1667
      }
    ]
  },
  {
    "id": "mod6",
    "name": "Bitmain特定场景",
    "color": "#2E7D32",
    "icon": "⚡",
    "description": "产品矩阵·J/TH·水冷TCO·竞品·矿企·AI转型·美国工厂",
    "cards": [
      {
        "id": "m6-1",
        "num": 24,
        "title": "走一遍Bitmain的产品矩阵 — 从S19到S23",
        "answer": "从老到新：\n\nS19j Pro+. 122 TH/s at 27.5 J/TH。S19代的主力。北美装机基数巨大。今天主要作为低电费site的replacement或trade-in目标。\n\nS19 XP. 140 TH/s at 21.5 J/TH。S19线顶配。仍在销售，定位为中端。\n\nS21. 200 TH/s at 17.5 J/TH。2024-25年大部分北美部署的风冷基准款。\n\nS21 Pro. 234 TH/s at 15 J/TH。高级风冷 — 不承诺水冷基建的最高效率。\n\nS21 XP. 270 TH/s at 13.5 J/TH。风冷再升一级。推效率但不能水冷的运营商的选择。\n\nS21 XP Immersion. 300 TH/s at 13.5 J/TH。浸没式下可超频。CleanSpark的$1.677亿交易就是这款。\n\nS21 XP Hydro. 473 TH/s at 12.7 J/TH per unit。大型水冷数据中心部署。\n\nS23. 318 TH/s at 11 J/TH。2026年1月发布的风冷新旗舰。2026年新风冷部署的主力产品。\n\nS23 Hydro 3U. 1.16 PH/s at 9.5 J/TH。2026年1月发布的水冷旗舰。行业最高效。直接对抗MicroBT M79S。\n\n客户如何选择：\n\n电费成本和site设计决定一切。$0.05+/kWh效率占主导 — S23或S21 XP Hydro。$0.04以下capex per TH更重要 — S21或S21 Pro更常胜出。Greenfield site五年NPV几乎都是S23 Hydro。Retrofit进existing风冷halls — S21/S23风冷线。\n\n销售对话很少是”这是我们的spec sheet”。而是”让我用你的电费、hashprice假设、hold时长给你建个五年NPV模型”。数据挑选SKU。",
        "qtype": "T",
        "charCount": 821
      },
      {
        "id": "m6-2",
        "num": 25,
        "title": "为什么J/TH重要？Bitmain各产品的数字是什么？",
        "answer": "【定义】\n\nJ/TH = 每TH的焦耳 = 机器每生产1 TH/s消耗多少电。这是矿机最重要的单一指标。越低越好。\n\n【Bitmain主力产品速查】\n\nS23 Hydro 3U：9.5 J/TH（水冷旗舰，1.16 PH/s）\n\nS23 风冷：11 J/TH（318 TH/s）\n\nS21 XP Hydro：12.7 J/TH（473 TH/s）\n\nS21 XP：13.5 J/TH（270 TH/s）\n\nS21 Pro：15 J/TH（234 TH/s）\n\nS21 基准：17.5 J/TH（200 TH/s）\n\nS19 XP（老一代顶配）：21.5 J/TH\n\nS19j Pro+（老一代主力）：27.5 J/TH\n\n十年进步约10倍——S9（2016）的~110 J/TH到S23 Hydro的9.5 J/TH。\n\n【商业上为什么这一个数字最重要】\n\n电费成本占工业规模挖矿运营成本的70-85%。一个具体的换算：\n\n100 MW site从25 J/TH换到10 J/TH → 算力提升约2.5倍但电费不变\n\n每BTC生产成本下降约60%\n\n在当前hashprice $36/PH/day和BTC $68-75K的环境下，这是亏损vs盈利的分水岭——字面意义上是继续运营和关机的差别\n\n【在销售对话中怎么用】\n\n面对CFO时，我把对话锁定在两个变量：J/TH和电价（$/kWh）。其他都是次要噪音。\n\n标准动作：拿出客户的电价，套用Bitmain产品矩阵，算出三种配置（S21 Pro / S23风冷 / S23 Hydro）的5年NPV，让数据自己说话——不是\"我们的产品好\"，而是\"在你$0.045/kWh的电费下，S23 Hydro的5年现值比S21 Pro多$X百万\"。\n\n竞品对比：MicroBT M79S Hydro是14.81 J/TH。S23 Hydro的9.5 J/TH意味着同样电力下多产出约56%的算力——这是关键deal的杀手数字。",
        "qtype": "T",
        "charCount": 832
      },
      {
        "id": "m6-3",
        "num": 26,
        "title": "为什么要选水冷？TCO怎么算？",
        "answer": "【一句话总结】\n\n水冷前期capex高、需要不同的site基建，但在三种场景下赢lifetime TCO，是大型greenfield的默认选择。\n\n【水冷赢的三个场景】\n\n高温/高密度环境：风冷机在35°C环境温度以上开始降频。Texas夏天连续高温周期，风冷机throttle甚至宕机；水冷通过液体把热量直接带走，不受环境温度影响——全年hashrate稳定。\n\n功率密度：水冷每平方英尺算力比风冷多40-50%。10 MW水冷厅装的TH远超同占地的风冷厅。土地和电力基建越贵，水冷优势越大。\n\n维护和生命周期：水冷无风扇 = 无风扇故障，而风扇是风冷fleet的头号服务项目。Bitmain水冷线官方生命周期6年以上；S23 Hydro 3U附带7年保修。\n\n额外卖点：水冷约50 dB噪音 vs 风冷75+ dB——靠近社区的site这是关键合规变量。\n\n【TCO（5年总拥有成本）的算法】\n\n5年TCO = 机器capex + 5×年电费 + 5×年O&M + site基建摊销 - 5年BTC产出收入\n\n关键投入变量：\n\n效率（J/TH）：S23 Hydro 9.5 vs S23风冷 11 → 水冷15%更省电\n\n电价（$/kWh）：客户具体合约价，Texas通常$0.04-$0.06\n\nUptime（%）：水冷~99%+，风冷热季节~93-95%\n\nHashprice轨迹：用客户自己的projection或Hashrate Index 12个月forward曲线\n\n持有时长：5年标准，水冷7年也常见\n\n【一个具体例子】\n\n10 MW site，电价$0.05/kWh，hashprice $36/PH/day（保守）：\n\nS21 Pro风冷（15 J/TH）：5年NPV约$X\n\nS23 Hydro（9.5 J/TH）：5年NPV约$X + 30-40%\n\n超出capex差额的回收期通常在18-24个月内。\n\n【适合 vs 不适合的客户】\n\n适合：大型公众矿企的greenfield、热气候运营商、5年+持有计划、在乎噪音/邻居关系的site\n\n不适合：小型运营商capex紧张、翻新进existing风冷hall没有水冷基建、计划2-3年内退役机器的\n\n【销售对话的标准动作】\n\n不直接rec水冷或风冷，而是带着客户的电价、hashprice假设、持有时长，现场建S23风冷 vs S23 Hydro的5年NPV模型——让数据自己挑SKU。这种approach比spec sheet更能赢CFO。",
        "qtype": "T",
        "charCount": 1060
      },
      {
        "id": "m6-4",
        "num": 27,
        "title": "Bitmain真正的竞争对手是谁？怎么打他们？",
        "answer": "三家ASIC竞争，Bitmain第一，MicroBT第二，Canaan第三。加一个美国entrant值得关注。\n\nMicroBT — Whatsminer M79S 和 M70S+. 创始人杨作兴是前Bitmain工程师。2025年12月旗舰M79S Hydro 1.35 PH/s, 14.81 J/TH — 原始算力比S23 Hydro 3U (1.16 PH/s) 高但效率明显差（14.81 vs 9.5）。风冷M70S+ 244 TH/s, 12.5 J/TH对标S23风冷但仍落后。常比Bitmain价格低10-15%。美国服务足迹在增长但不到我们的深度。\n\nCanaan — Avalon A16 XP 系列。 NASDAQ: CAN。A16 XP 300 TH/s, 12.8 J/TH。规格竞争力足够，但装机基数小、固件较弱。定位预算或新兴市场。\n\nAuradine — AT2860 系列。 美国Palo Alto，VC支持。定位”美国制造”。仍在爬升但值得关注 — 他们受益于本土供应链的政治利好。\n\nBitmain怎么赢：\n\n效率领先。 S23 Hydro at 9.5 J/TH是行业最高。这是每个竞争性交易中最多被引用的数字。\n\n装机基数成熟度。 固件稳定、管理软件、ANTPOOL集成 — 来自十多年运行全球大部分挖矿fleet。新进入者两年内追不上。\n\n售后网络。 美国、哈萨克斯坦、中东、东南亚的服务枢纽。10万台fleet出问题时我们有区域备件和field engineers。MicroBT在追赶但不在一个水平。\n\n美国工厂。 Bitmain 2026年初在TX或FL开始美国生产，年底全面投产。这是关税、供应链韧性、政治风险在MicroBT和Canaan刚刚开始匹配的领域。\n\n每个竞争性对话我都锚定在”效率+生态”。绝不被拉进纯粹的价格战。 对话一旦只关于价格，我们就输了framing。",
        "qtype": "T",
        "charCount": 815
      },
      {
        "id": "m6-5",
        "num": 28,
        "title": "讲讲北美头部公众矿企",
        "answer": "一线（按fleet规模和战略相关性）：\n\nMARA Holdings (原Marathon Digital)。美国最大公众矿企按self-mining算力 ~50 EH/s。主要是Bitmain fleet。CEO Fred Thiel媒体活跃。最近执行15%裁员应对BTC疲软。激进BTC treasury策略。\n\nRiot Platforms. Texas-based，Rockdale和Corsicana site。~30 EH/s。大量ERCOT demand response收入。混合fleet有相当MicroBT份额 — 关键竞争战场。\n\nCleanSpark. 2024-25通过site M&A增长最快。Georgia、Mississippi重仓，2026年1月宣布Brazoria County Texas 890 MW扩张。以Bitmain fleet为主。CEO Matt Schultz，运营纪律强。$1.677亿S21 XP Immersion交易是标杆。\n\nCipher Mining. Texas焦点，Odessa site，Bitfury血统。JPMorgan 2025年11月upgrade看好AI/HPC转型。中型但在成长。\n\nCore Scientific. 从破产重组。通过CoreWeave多十亿美元交易深度转向AI/HPC。仍有meaningful BTC hashrate但AI是primary。\n\nBitdeer. NASDAQ: BTDR。2025年末增加capacity。成长故事。\n\n二线：\n\nTeraWulf (WULF). 纽约州北部，核能驱动，小规模，绿色电力溢价。\n\nHut 8 (HUT). 与US Bitcoin Corp合并，多样化进入AI。\n\nBitfarms (BITF). Canada和Argentina，最近宣布美国redomicile计划。\n\nIris Energy (IREN). 澳大利亚HQ，Texas和BC存在。2025年末签微软$97亿HPC — AI转型标杆交易。\n\nBitmain targeting： MARA、RIOT、CLSK、CIFR是按量级算BTC主要买家 — 那是季度收入的来源。CORZ、HUT、IREN战略重要 因为AI转型打开Sophon+ANTMINER组合销售的机会。BTDR是成长所在。",
        "qtype": "T",
        "charCount": 1003
      },
      {
        "id": "m6-6",
        "num": 29,
        "title": "AI/HPC转型对Bitmain是威胁还是机会？",
        "answer": "两者都是 — 取决于客户在哪一边。\n\n威胁面 — 真实的。 每一兆瓦重新分配给AI就是一兆瓦不买BTC矿机。Core Scientific做了。IREN做了。MARA在逐步做。摩根大通预测2026年底公众矿企最多70%收入来自AI/HPC。这是数十万ASIC slots从BTC需求端消失。\n\n机会面 — 更大图景。 三件事。\n\n第一，转型者很少100%转AI。Core Scientific还运营着约19 EH/s BTC。IREN还在挖。转型是产能分配，不是放弃。客户需要同时懂两个stream的partner。\n\n第二，转型者在resource起来。AI合约把数十亿带到资产负债表可以资助下一代ASIC。IREN的$97亿微软协议能资助很多S23。\n\n第三，BTC纯粹派 — CleanSpark、Cipher、Bitdeer — 竞争对手变少了、更需要效率优势。那些就是2026年S23 Hydro的客户。\n\nBitmain自己的定位。 Sophon是我们的AI品牌。对转型者的pitch：“Bitmain是你两个revenue stream的partner — hashrate和AI compute — 你不需要第二家hardware关系。” 对纯粹派反过来：“当竞争对手追AI，你在BTC上复利。我们给你效率优势让你赢。”\n\nAI转型不是单一威胁要管理。它是市场分段信号。我会建三个playbook — 转型者、混合者、纯粹派 — 向每一类销售不同的bundle。",
        "qtype": "T",
        "charCount": 639
      },
      {
        "id": "m6-7",
        "num": 30,
        "title": "Bitmain的美国工厂怎么改变销售？",
        "answer": "这是我在每个会议中最强的新卖点。\n\nContext for interviewer. Bitmain 2025年7月宣布Irene Gao的团队在Texas或Florida开设第一个美国facility。2026年初首批芯片生产，年底满产。第一阶段250美国员工。MicroBT和Canaan做类似的build。原因：Trump Liberation Day 25-35%关税对中国原产挖矿设备，加上美国对中国科技供应链的政治压力，加上客户procurement越来越要求origin披露。\n\n它为sales pitch做什么。\n\n关税减免。 美国制造的机器就是美国制造的机器。绕过20-30% Liberation Day关税溢价。一个$30M订单客户省下$6-9M关税。\n\n更快delivery、更快repair。 国内生产意味60-90天海运被替换为国内shipping。RMA周转从数周到数天。\n\n政治和合规掩护。 美国上市矿企越来越面对投资者压力和监管审查关于中国供应链风险。Bitmain美国生产让他们的procurement在审计委员会面前为买单辩护。\n\n竞争平价翻转为领先。 MicroBT和Canaan也在建美国capacity，但Bitmain first公开宣布并最接近上线。美国供应商关系、州激励、客户mindshare的先行者优势。\n\n我会小心什么。 我不会在第一年over-promise capacity。全production是2026年底。如果客户要50,000 S23s在Q2，那仍然是mixed origin。我会透明说，把US factory framework成year-over-year改善的故事。\n\n谁最在乎。 有compliance officer的公众矿企、有board-level supply chain scrutiny的F1000客户、有实质tariff成本波动exposure的任何人。对付cash、不在乎origin的私营矿工，factory是nice-to-have不是决策driver。",
        "qtype": "T",
        "charCount": 877
      },
      {
        "id": "m6-8",
        "num": 31,
        "title": "很多矿工的breakeven高于今天的BTC价格。你怎么卖机器给可能用它赚不到钱的人？",
        "answer": "诚实答案 — 对有些人你卖不出去。这个岗位的一部分就是qualify out那些打不赢的deal。\n\n但对于数学还work的客户，pitch是specifically关于survival economics不是expansion economics。\n\n这个市场的三种客户姿态。\n\nShutdown候选人。 旧fleet，高电费，弱资产负债表。他们的最佳move是下线等待，或卖给更强的operator。我不会卖机器他们付不起钱的。\n\n幸存者升级。 较旧但solvent，电费sub-$0.05/kWh。他们的S19 fleet生产BTC breakeven $80-95K。S23同样的电费下breakeven到$45-55K。突然又盈利了。这就是S23 replacement sale的地方。Pitch是：“你不需要BTC恢复你才盈利。你需要一个在$60K BTC下work的成本结构。”\n\n扩张者。 强资产负债表、便宜电力（常常sub-$0.03/kWh或behind-the-meter gas）、长期视野。他们现在买因为ASIC价格和secondary supply让这是good entry。经典逆势买家 — CleanSpark的playbook。\n\n这个环境的商业工具。\n\nBTC pledging. 客户posts BTC collateral，得到折扣机器pricing。对齐利益 — 如果BTC涨两方都赢。Bitmain已经deployed。\n\n阶段delivery加price lock. 30-40%现在，其余90天间隔，价格锁定。\n\nTrade-in credit on old fleet. 把S19 salvage作为S23 offer的一部分。\n\n延长payment terms. 50/40/10替代30/60/10对cash timing的客户。\n\n我不会做什么。 把机器push给cash-flow line以下的人。这些deal回来时是AR问题、然后warranty问题、然后relationship问题。走开更好。",
        "qtype": "S",
        "charCount": 880
      },
      {
        "id": "m6-9",
        "num": 32,
        "title": "给mid-sized 10 MW运营商设计一个bundle",
        "answer": "硬件。 推荐S23 Hydro 3U如果site能support hydro — 最高效率long-term，9.5 J/TH，7年保修。~900 units at ~$22/TH gives ~$23M。如果site只能风冷，S23 Pro-equivalent mix ~8,600 units ticket相近。\n\n托管。 如果客户没site，配对Bitmain托管合作伙伴网络。如果他们有site，提供deployment设计加commissioning SLA — 30天delivery后operational。\n\n10 MW我推荐Silver。Gold是50 MW+才make sense。\n\n融资。 $23M capex经常benefit from equipment finance。早期带入Galaxy Digital、NYDIG或equivalent。BTC pledging如果客户有balance-sheet BTC。\n\n额外。 合约期firmware升级。ANTPOOL integration优惠fee tier。30个月next-gen trade-in credit。\n\n结构。 3年框架协议，初始10 MW部署，expansion option到30 MW same commercial terms如果客户hit deployment milestones。锁定前瞻view。",
        "qtype": "S",
        "charCount": 607
      },
      {
        "id": "m6-10",
        "num": 33,
        "title": "客户说”M79S便宜15% — 为什么S23 premium合理？”",
        "answer": "直接答案：机器价格15%是lifetime TCO的约4-5%。\n\n在10,000台规模下，机器成本是5年TCO的25-30%。电费是55-65%。O&M和其他是其余。15%机器折扣如果效率和运营性能identical，节省~3.5-4.5% TCO。\n\n但S23 Hydro和M79S不identical。\n\n效率. S23 Hydro 9.5 J/TH vs M79S 14.81 J/TH。5年at $0.05/kWh在10,000机器上，电费差异是数千万美元 — 容易超过机器价格折扣。\n\n每MW算力. M79S per unit拉20 kW for 1.35 PH/s。S23 Hydro per unit 11 kW for 1.16 PH/s。对power-constrained sites — 大部分是 — 你在同样power envelope装1.8倍S23 Hydro units。总hashrate per MW在S23 Hydro更高。\n\n运营性能. Bitmain firmware 10+年refinement加大量installed-base遥测优势。MicroBT works但newer。real-world uptime 1-2点variance at current hashprice是meaningful美元。\n\n售后. Bitmain在美国、哈萨克斯坦、中东、SE Asia的hubs。MicroBT在成长但not at parity。\n\n美国工厂. Bitmain 2026年初开始国内生产。tariff relief和faster turnaround。\n\n在这些变量下诚实跑5年NPV，S23 Hydro即使MicroBT折扣也赢。 如果你的CFO想要，我可以和他一起在model里走一遍数字。\n\n如果在那个数学之后你还preferencia MicroBT，我尊重这个决定。但对一个必须perform across 5年和hashprice波动的fleet，premium paid off by itself。",
        "qtype": "S",
        "charCount": 883
      },
      {
        "id": "m6-11",
        "num": 34,
        "title": "5分钟电梯pitch在Bitcoin 2026 Vegas",
        "answer": "“Bitmain是世界最大的比特币挖矿硬件制造商。我们的新flagship S23 Hydro 3U达到每太哈希9.5焦耳 — 行业最高效 — 我们的风冷S23 at 11 J/TH替代了大部分S19装机基数。我们运营ANTPOOL，我们提供托管和O&M bundles，我们今年在Texas或Florida开美国production，意味着tariff relief和更快delivery for US customers。\n\n如果你是生产成本在$55,000/BTC以上的公众或大型私营矿工 — 大部分S19装机基数 — 我能帮你model一个升级path把生产成本降到$45,000/BTC在你现在的电费下。在10 MW site上那是$3-5 million per year的recovered margin。\n\n你从哪家公司，你的fleet规模和12个月expansion或upgrade plan是什么？”\n\n然后discovery。两个问题：fleet composition和horizon。他们的答案告诉我他们是priority-one opp和什么hook fit。一线operator — 下周book follow-up。小的 — 名片加15分钟call。\n\n电梯pitch不是关于show close。是关于赢得follow-up meeting。show我懂行业、懂机器、30分钟能add value。那就足够拿到calendar邀请。",
        "qtype": "S",
        "charCount": 633
      },
      {
        "id": "m6-12",
        "num": 35,
        "title": "20,000台shipment延迟两个月。客户威胁取消。走一遍两周",
        "answer": "第1小时。 拥有消息。打电话，不是email。事实，不自我辩护。客户尊重来自first告诉他们坏消息的人。\n\n第2小时。 理解他们的downside。delay对他们cost什么？对他们hosting customers的合约commitment？ERCOT interconnect schedule？financing covenants tied to deployment milestones？真实cost告诉真实remedy。\n\n第1-3天。建立remedies。\n\nPartial early shipment. 6,000现在从available production加14,000晚两个月。Partial usually解决60% pain at 20% operational cost。\n\nSubstitution. S23 Hydro换S23 air — on-time delivery at lower economics。他们可能接受的trade-off。\n\nAlternative sourcing. 帮他们bridge from secondary market，Bitmain cover一部分成本。\n\n第1-5天。内部升级。 Bitmain COO和head of production into the conversation。$50M+客户值得这个exception。协商internal trade-offs enable partial shipment。\n\n第2周。文档化resolution. Joint plan — 我们delivery什么、什么时候、什么compensation、ship dates如何成功。双方executives签字。防止drift和blame。\n\n更长期。Lessons learned. 我们为什么miss？Supply chain？Forecasting？Sales committed without production capacity check？Structural fix，不只是这个deal的bandage。\n\n关系纪律。 最坏事 — hide、delay、blame。客户记得站在问题前面的供应商。5年后，被hit两个月delay加clean recovery的客户变成reference。同样delay加evasion变成敌人。",
        "qtype": "S",
        "charCount": 1016
      },
      {
        "id": "m6-13",
        "num": 38,
        "title": "顶级BTC客户想80% pivot到AI像Core Scientific。你fight还是support？",
        "answer": "五个原因，按优先级顺序。\n\n1. Pivot无论有没有我都在happen。 Boards基于capital structure、AI hosting economics、他们对BTC的view做这些decisions。一个rep talking他们out of it是overstating influence。我的工作是transition期间retain maximum wallet share，不是prevent transition。\n\n2. Partial BTC保留比total relationship loss更valuable。 如果他们80% AI和20% BTC，那20%仍然是$5-20M per year的S23 Hydro orders。如果我fight pivot和lose relationship entirely，我get zero。做他们的BTC partner for residual 20%比做他们的ex-partner for former 100%更好。\n\n5. Case study leverage. 一个在Bitmain硬件上build的successful BTC-to-AI hybrid是赢next五个conversations的reference。帮他们gracefully pivot，我已经built一个multi-year revenue stream beyond this account。\n\nInternally at Bitmain我会用的frame. 我们不再是BTC hardware公司。我们是compute infrastructure公司with two product lines。Fighting pivoting客户是Bitmain如何become irrelevant in three years。",
        "qtype": "S",
        "charCount": 798
      }
    ]
  },
  {
    "id": "mod7",
    "name": "反问环节",
    "color": "#4527A0",
    "icon": "🔄",
    "description": "团队/quota/汇报/目标客户/托管/工厂/合规/AI/30-60-90",
    "cards": [
      {
        "id": "m7-1",
        "num": 39,
        "title": "团队结构和岗位缘起",
        "answer": "【要问的问题】\n\n\"目前北美团队规模和结构是什么样的？这个岗位是新增的还是替换的？\n\n如果是替换：上一个人是怎么离开的——升职、主动离开、还是绩效原因？\n\n如果是新岗位：是什么具体的gap催生了这个seat？\n\n还有一个问题——为什么是现在招人？而不是早半年或晚半年？\"\n\n【为什么这样问】\n\n这个问题在90秒内告诉你三件你急需知道的事：\n\n你是走进一个growth seat还是burned-out seat\n\n经理怎么思考team construction——是有规划地扩张，还是临时补窟窿\n\n这个岗位是被动开的（救火），还是主动开的（抓窗口）\n\n【从答案里听什么】\n\n绿灯：\"我们去年成立了北美团队，今年Q2加这个岗位是因为公众矿企的pipeline增长太快\" → growth seat\n\n黄灯：\"上一个人去做托管业务了\" → 还行，但要追问为什么\n\n红灯：\"上一个人合同到期没续\" / \"上一个rep做了8个月就走了\" → burnout风险，问\"团队过去2年的rep平均tenure是多少？\"\n\n【后续问】\n\n如果是新岗位：\"这个岗位的success在2026年底应该长什么样？\"\n\n如果是替换：\"上一个人最大的成就和最大的struggle是什么？我可以从他们的experience学到什么？\"",
        "qtype": "R",
        "charCount": 553
      },
      {
        "id": "m7-2",
        "num": 40,
        "title": "Quota和提成",
        "answer": "【要问的问题】\n\n\"2026年这个岗位的季度和年度quota分别是多少？\n\nRevenue-based、margin-based、还是blended？\n\n提成结构是flat、tiered、还是超额有accelerators？\n\n新logo和existing account expansion有不同的kicker吗？\n\n顶级表现者的OTE是多少？中等水平的实际拿到手是多少？\n\n去年团队有多少比例的rep hit了quota？\"\n\n【为什么这样问】\n\n揭示comp reality和team baseline。这是签字前必须搞清楚的——offer letter上的OTE和实际能拿到的可能差50%。\n\n【从答案里听什么】\n\n绿灯：\"去年团队70%+ hit quota，顶级rep做到OTE 1.4-1.6倍\" → 健康，quota set realistic\n\n黄灯：\"我们刚set了2026新quota还在ramp\" → 不算坏，但要问历史baseline\n\n红灯：\"去年30%以下hit quota\" → quota probably unrealistic，或team under-ramped，或territory分配有问题——这种岗位即使你能力强也很难拿OTE\n\n【后续问】\n\n\"提成什么时候支付——签合同时、客户付款时、还是设备交付时？\"——交付cycle长的话这个差很大\n\n\"有claw-back条款吗？\"——客户取消订单提成会被追回吗\n\n\"过去12个月，有没有大deal跨quarter关闭，跨quota周期处理是怎么算的？\"",
        "qtype": "R",
        "charCount": 672
      },
      {
        "id": "m7-3",
        "num": 41,
        "title": "汇报关系和决策权限",
        "answer": "【要问的问题】\n\n\"这个岗位直接向谁汇报？美国还是中国HQ？\n\n决策权限的边界——到什么deal size或商务让步，我需要HQ审批 vs 本地权限？\n\n定价灵活度——折扣、付款条款、BTC质押，哪些我可以本地decide？\n\n产品优先级怎么work？如果一个大客户要一个feature，谁决定roadmap？\n\nHQ的响应时间——典型一个deal-critical问题需要多久回？\"\n\n【为什么这样问】\n\n中国HQ + 美国销售岗位的头号frustration是decision-authority gap。如果$1M以上都要去北京，那就是结构性问题——你会眼睁睁看着deal slip因为审批走不动。这是必须签字前test的。\n\n【从答案里听什么】\n\n绿灯：\"$5M以下你完全本地decide，$5M+和HQ co-sign。HQ典型48小时内回复\" → healthy authority\n\n黄灯：\"看情况，每个deal单独讨论\" → 模糊 = 实际操作起来你会被卡\n\n红灯：\"所有定价都要HQ approve\" / \"产品roadmap我们没有input\" → 你只是个order taker，不是strategic rep\n\n【后续问】\n\n\"上一个rep最近一次和HQ在定价/优先级上的分歧，最后怎么解决的？\"——这个具体例子比抽象答案有价值10倍\n\n\"我有没有微信直接联系产品/工厂/法务的key counterpart？\"——直通渠道是关键",
        "qtype": "R",
        "charCount": 627
      },
      {
        "id": "m7-4",
        "num": 42,
        "title": "未来12个月的目标客户",
        "answer": "【要问的问题】\n\n\"未来12个月Bitmain最想赢或expand的北美top 5-10客户是哪些？\n\n我们在哪些客户strong、哪些weak、哪些contested？\n\n这里面哪些会primary归我？哪些shared with其他reps或regional teams？\n\n有历史上难打的账户吗——比如长期100% MicroBT的？我想理解为什么，避免乐观进去栽跟头。\n\n这些目标客户里，哪些已经在active conversation，哪些是cold？\"\n\n【为什么这样问】\n\n揭示经理有没有strategy vs winging it。一个有想法的manager能在30秒内说出top 5和每个的状态。如果他support pause、looks at his notes、说\"我们还没really thought about it\"——red flag，你会进去后自己摸黑找客户。\n\n【从答案里听什么】\n\n绿灯：经理直接说出top 10名字、每个的状态、competitive position、share-of-wallet → 战略思考清楚\n\n黄灯：能说出top 3-5但其他模糊 → 还行，但你要主动补\n\n红灯：\"你来定义你的territory\" → 听起来像\"自由\"，实际上是没有规划\n\n【后续问】\n\n\"这些top 5客户里，最近6个月最大的进展和最大的setback分别是什么？\"\n\n\"哪些客户上一个rep没能进入但你认为可以打开的？\"\n\n\"我能不能在头30天之内见到top 3客户的key contact？\"——如果不能 = access问题",
        "qtype": "R",
        "charCount": 684
      },
      {
        "id": "m7-5",
        "num": 43,
        "title": "托管合作伙伴网络",
        "answer": "【要问的问题】\n\n\"Bitmain目前在北美的托管合作伙伴网络是什么样？\n\n我们和哪些托管运营商合作，是什么样的commercial结构——referral、revenue share、joint pitch？\n\n地理覆盖上我们在哪些州/地区弱？\n\nBitmain自己的托管战略怎么evolving——扩张自营托管、深化partner网络、还是两者并行？\n\n如果客户问'我有100台S23但没有site'，今天的标准答案是什么？\"\n\n【为什么这样问】\n\n托管是Bitmain bundle收入复利的核心地方——硬件+托管+O&M+ANTPOOL，每个客户从transactional变partnership。Weak NA hosting partnerships会让bundle pitch没武器，每次都只能裸卖硬件竞价。\n\n【从答案里听什么】\n\n绿灯：\"我们和Compass、Frontier、Riot Hosting有active partnerships，覆盖Texas/NY/Dakota，可以one-stop交付\" → 强\n\n黄灯：\"还在build托管partner网络\" → 你需要进去后帮着build\n\n红灯：\"客户site自己解决\" → bundle能力为零，竞争对手会赢hosting-bundled deals\n\n【后续问】\n\n\"我们和ANTPOOL在销售层面是coordinated还是siloed？\"\n\n\"BTC质押和discount定价工具我可以怎么和托管bundle在一起？\"\n\n\"有没有给托管partner的reference customer list我可以引用？\"",
        "qtype": "R",
        "charCount": 700
      },
      {
        "id": "m7-6",
        "num": 44,
        "title": "美国工厂部署和销售意义",
        "answer": "【要问的问题】\n\n\"Texas或Florida的美国工厂——ramp目前到哪了？\n\n今天我们怎么在客户对话中positioning这个工厂？\n\n2026年北美订单预期多少%来自美国生产 vs 中国进口？\n\n美国工厂的产品矩阵覆盖哪些SKU——只有S23还是包含S21线？\n\n有什么operational specifics——交期、价格premium、最小订单——是我向客户pitch时应该know的？\n\n如果客户specifically要求美国生产的units，我能lock in多少percent？\"\n\n【为什么这样问】\n\n美国工厂是Bitmain 2026最重要的commercial差异化——signals关税缓冲、政治风险降低、本地support。问得好signals你paying attention to战略发展，也calibrate你前几周向客户pitch这个故事的aggressiveness。\n\n【从答案里听什么】\n\n绿灯：\"Q2 2026开始首批生产，年底满产50% NA orders来自美国，list price和中国生产持平\" → 武器ready\n\n黄灯：\"还在ramp，不能commit具体百分比\" → 谨慎pitch\n\n红灯：\"工厂概念性的，2027才有real output\" → 不要over-promise客户\n\n【后续问】\n\n\"这个工厂故事在哪些类型客户面前最effective——F1000、政治敏感的公众矿企、还是合规重点客户？\"\n\n\"有没有Irene Gao或其他高管在媒体上对工厂的quotable语言我可以借用？\"",
        "qtype": "R",
        "charCount": 682
      },
      {
        "id": "m7-7",
        "num": 45,
        "title": "关税和合规支持",
        "answer": "【要问的问题】\n\n\"Bitmain目前在US-China trade compliance上的overall posture是什么？\n\n谁handle关税分类、HTS coding、export control的实际工作？\n\nLiberation Day关税对挖矿设备的实际有效税率是多少？\n\n是否有专门的trade compliance function我可以escalate复杂客户合规问题（KYC、source-of-funds、OFAC sanctions screening）？\n\n2026年有什么active或预期的regulatory developments我应该跟踪？\n\n如果客户法务团队来一份20页的compliance questionnaire，我能在多少天内拿到完整答案？\"\n\n【为什么这样问】\n\n显示你think like strategic rep而不是quota-chaser。F1000和大型公众矿企的procurement team会问深度合规问题，你必须有HQ的compliance backbone才能赢这种deal。\n\n【从答案里听什么】\n\n绿灯：\"我们有专门的trade compliance team在Beijing和US Counsel在DC，48-72小时回复客户合规问询\" → strong support\n\n黄灯：\"个案处理\" → 你会被客户合规问题压垮\n\n红灯：\"你处理\" → 没有compliance backbone的销售=不能赢F1000\n\n【后续问】\n\n\"我能不能在第一个月见一次Bitmain合规负责人，建立直通渠道？\"\n\n\"有没有应对'参议员Warren公开点名'类型问题的标准response template？\"",
        "qtype": "R",
        "charCount": 742
      },
      {
        "id": "m7-8",
        "num": 46,
        "title": "AI转型应对和Sophon",
        "answer": "【要问的问题】\n\n\"客户pivot到AI/HPC时，Bitmain怎么think about commercial relationship？\n\nSophon产品线和ANTMINER销售在团队层面是coordinated还是siloed？\n\n如果一个BTC客户想严肃讨论AI infrastructure，我应该stay in the relationship and bring Sophon expertise，还是hand off to Sophon specialist？\n\n提成怎么算？如果我介绍一个AI deal给Sophon team，我有没有split？\n\nBitmain的5年战略view——becoming compute-infrastructure公司，还是staying mining-focused with Sophon as side bet？\"\n\n【为什么这样问】\n\nAI转型是2026挖矿行业最大的市场问题——摩根大通预测2026年底大型公众矿企最多70%收入来自AI/HPC合约。这个问题揭示Bitmain自己在这个问题上的strategic coherence。如果Bitmain没有AI strategy，每丢一个客户pivot到AI就是丢一个5-7年关系。\n\n【从答案里听什么】\n\n绿灯：\"Sophon和ANTMINER销售有split commission结构，鼓励cross-sell。战略上Bitmain正在becoming dual-purpose compute公司\" → strategic clarity\n\n黄灯：\"还在figure out\" → 你会在客户对话里被动\n\n红灯：\"那是Sophon team的事，你focus mining\" → 你会丢掉AI-pivoting客户\n\n【后续问】\n\n\"过去12个月有没有客户成功把ANTMINER+Sophon bundled buy的案例？\"\n\n\"如果客户问'你们能deliver像CoreWeave那样的GPU compute吗？'，今天的诚实答案是什么？\"",
        "qtype": "R",
        "charCount": 884
      },
      {
        "id": "m7-9",
        "num": 47,
        "title": "30-60-90-180-365和陷阱问题",
        "answer": "【要问的问题（用这个收尾）】\n\n\"最后一个问题——\n\n你怎么定义30天、90天、6个月、12个月的success？\n\n早期我应该focus哪些activity metrics？中期看什么pipeline metrics？12个月时revenue by month的expectation是什么？\n\n还有——这个岗位前6个月最容易做错的high-risk的事是什么？我想知道陷阱好提前避开。\"\n\n【为什么这样问】\n\n面试结束以strong收尾。三个效果：\n\n显示你think in milestones——这是Bitmain希望看到的rep的mindset\n\n\"trap\"问题非常disarming——大多数面试官从来没被问过这个，答案会告诉你很多关于这个role的真实挑战\n\n表现你已经在思考onboarding，不是\"是否拿offer\"\n\n【从答案里听什么】\n\n绿灯：\"30天内见top 5客户，90天pipeline $20M，6个月first deal close，12个月hit quota\" + \"陷阱是不要在第一个月就过度承诺roadmap features\" → 思考清楚\n\n黄灯：\"你有6个月ramp\"——好但太宽泛，要追问月度milestone\n\n红灯：\"你来定义你的success\" → 没有明确expectation = 你后面会被retroactively判断\n\n【这是最后一题，用这句话收尾】\n\n\"感谢——今天真的是一个useful conversation。我对这个机会非常感兴趣。\n\nWhat are the next steps, and when should I expect to hear back?\n\n如果有帮助，我很乐意为[你提到的那个具体客户]put together一个one-page account strategy，下一轮我们可以一起走一遍。\"\n\n这句话做三件事：直接表态兴趣 + 问timeline不闪躲 + 主动加码作业为下一轮抢占preference。",
        "qtype": "R",
        "charCount": 856
      }
    ]
  },
  {
    "id": "mod8",
    "name": "行为STAR补充",
    "color": "#BF360C",
    "icon": "🗣️",
    "description": "mining-native对比·90天补差·失败deal·内部冲突·错过目标",
    "cards": [
      {
        "id": "m8-1",
        "num": 48,
        "title": "为什么Bitmain应该招你而不是一个Foundry、Luxor或矿业背景的候选人？",
        "answer": "公平的问题。直接回答。\n\n一个矿业出身的候选人有三样我没有的：直接的矿业客户关系、流利的挖矿经济学词汇、一两年的加密周期模式识别经验。\n\n我有而他们通常没有的四点：\n\n第一，企业级B2B销售流程的规模化肌肉。 $80M卖给Best Buy、Walmart、Target和运营商，意味着我经历过大多数矿业出身销售没经历过的采购、合规、合同流程。公众矿企在购买流程上更像零售商或运营商，而不是加密原生运营者。MARA和RIOT有procurement团队、法务审核、披露义务。我在那里的肌肉比典型的矿业销售更强。\n\n第二，跨文化执行的能力。 Bitmain是中国HQ卖给美国企业。这是我整个职业生涯在做的事。一个没有跨境经验的矿业原生销售会在HQ摩擦上栽跟头，我不会。\n\n第三，硬件分销P&L视角。 我管理过$80M硬件的pricing、margin、inventory、delivery和after-sales。我思考整个deal的经济学，不只是提成。Bitmain的bundle模式——硬件+托管+运维——要求P&L思维，不是提成猎手思维。\n\n第四，新鲜视角。 矿业原生候选人有established relationships也有established habits。我没有包袱，可以从零构建Bitmain-specific playbook。\n\n我会请Bitmain评估什么： 请按接下来三年评估我，不是按接下来三个月。矿业原生rep在Q1 outperform我。到Q3我在行业specifics上追上，在enterprise流程上仍然领先。那是计算。",
        "qtype": "B",
        "charCount": 679
      },
      {
        "id": "m8-2",
        "num": 49,
        "title": "锚定·头 90 天 (60 秒, 精炼版)",
        "answer": "【锚定回答 · 头 90 天 · 60 秒 · 精炼版】\n\n为什么精炼：二面确认了线索一部分分配一部分自开发。反映这一点。\n\n【第 1-30 天——沉浸期加继承关系】\n\n每份 Bitmain 产品 spec sheet，前四个季度的 Top 10 公众矿企 10-Q，Luxor Hashrate Index 报告回溯 12 个月。继承的客户关系——第一周清点分配给我的线索，按 deal 概率和战略价值排序，前五大的客户在第三周前安排引荐通话。\n\n【第 31-60 天——结构化对话和自开发 pipeline】\n\n20 场 30 分钟谈话——Bitmain 客户、Bitmain 工程师、行业分析师、托管运营商。并行：结构化进入二线 10 个新 logo 的 prospecting。第 60 天，知道每个主要北美账户的战略和痛点。\n\n【第 61-90 天——应用期】\n\n5 个目标账户的 discovery call，自己 own 对话。写两份账户战略文档。向 leadership 呈现我对北美市场的评估。\n\n【期望】\n\n第一季度建 pipeline，不是 closed revenue。第六个月，在行业知识上和矿业原生 rep 无法区分，企业销售流程上仍然领先。",
        "qtype": "B",
        "charCount": 535
      },
      {
        "id": "m8-3",
        "num": 50,
        "title": "讲一个本该赢但没赢的 deal",
        "answer": "【Deal】\n\n美国二线运营商企业 IoT，$800万 年度机会，14 个月追逐，输给现任供应商。\n\n【为什么本该赢】\n\n产品技术上有竞争力，价格比现任低 10%，认证 clean。标准 playbook 执行。\n\n【两个我输的原因】\n\n一、没有 internal champion。\n\n我有 neutral support——没人反对，没人拥护。Neutral support 推不掉 incumbent。Incumbent 有惯性，需要主动 internal champion 才能推翻。\n\n二、误读流程。\n\n看似公平的 RFP 在程序上掩盖了政治预决的 incumbent 续约。我应该在第四个月就读出 access 信号——senior leadership 时间有限、反馈模糊、回应 window 短——slow down 这个追逐。结果我又花了 10 个月在一个 closed process。\n\n【我现在做得不一样】\n\n每个账户在第二个月有 champion 测试。如果第八周还约不到实际决策人 60 分钟会议，无论技术匹配看起来多好，我都 deprioritize。这种纪律是保护 pipeline 不被 zombie opportunity 拖死的关键。\n\n【应用到 Bitmain】\n\n公众矿企周期 3-9 个月，champion 测试更早——第六周。如果 target 账户在 COO 或 CFO 层不响应，我把时间重定向到我有 access 的账户。这种纪律是北美 rep 怎么有效 cover 10 个目标账户而不是稀释到 30 个的关键。",
        "qtype": "B",
        "charCount": 683
      },
      {
        "id": "m8-4",
        "num": 51,
        "title": "讲一个你推动过的内部冲突",
        "answer": "在Foxx有一次销售和工程之间的典型对立——一个重要客户要求custom firmware，工程团队直接拒绝。引爆点是工程说定制fork需要单独maintain，让销售去回绝客户。但回绝意味着年收入丢$400万。我没有简单接受工程的\"no\"，也没跑去CEO那里告状，而是用了一套四步推动法把它解决。\n\n第一步：亲自验证需求。\n\n我飞到客户那里一对一validate——这到底是真实的operational痛点，还是一个wish list。确认是真痛点之后，我才有了后续谈判的事实基础；否则就只是销售在替客户说话，工程很容易把球踢回来。\n\n第二步：把业务案例摆到工程面前。\n\n做了一份完整的ROI分析——年收入$400万、6人周开发投入、10% FTE维护，ROI 3000%。把对话语境从\"拒绝麻烦\"切换到\"评估投入产出\"。\n\n第三步：解决他们的结构性顾虑。\n\n工程真正反对的不是这个客户，而是\"以后人人都来要\"的失控感。我提出双轨方案——未来变成standard需求就fold进主平台；保持单点定制就向客户收annual maintenance fee覆盖工程成本。这把一次性争论变成了可重复的规则。\n\n第四步：升级到CEO做联合决策。\n\n不是告状，而是带方案让CEO拍板，附带条件——formalize整个custom work的定价体系，以后不再one-off谈。\n\n核心教训：\n\n内部冲突常常是关于process，而不是具体决定。工程不是反对custom work，是反对ad hoc without framework。一旦提供framework，具体决定就自动解决。这个原则后来在Foxx被复制到了好几次类似冲突，每次都把摩擦从\"对立\"转成\"系统升级\"的契机。\n\n对Bitmain的迁移：\n\n中国总部工程 vs 美国销售在custom firmware和部署需求上会反复出现，正是中美协作的高频摩擦点。同样的四步——validate真实性、做ROI、提供structural framework、必要时升级——可以原样迁移到Bitmain。",
        "qtype": "B",
        "charCount": 876
      },
      {
        "id": "m8-5",
        "num": 52,
        "title": "讲一次你在压力下错过目标",
        "answer": "我在PayPal的Q4 2022差12%没达标。这不是从一开始就掉队——前10个月还做到118%达标，结果第四季度遭遇三连击：一个大客户的集成项目延期、另一个核心商户CEO换帅推翻原有合作框架、加上宏观环境放缓波及整个pipeline。到12月中我已经清楚——这个quarter不可能挽回。\n\n压力下面我做了四件事。\n\n第一，早承认。\n\n12月第三周我主动找经理坐下来，逐项说明哪些deal slip了、为什么slip、还能挽回多少。没有粉饰，也没有等到quarter close前一天才告诉他。\n\n第二，转向Q1准备。\n\n我没有继续追不可能在December close的deal——那只是浪费时间，还会让Q1开局也miss。剩下两周时间我用来book Q1 meetings、把slip的deal重新qualify、为新季度搭好pipeline。\n\n第三，自我校准。\n\n我诚实地把这次miss里运气和执行的比例分清楚——三连击确实有不可控的成分，但我也owning执行部分：当时pipeline coverage只有1.5x，没给意外留缓冲。\n\n第四，主动要feedback。\n\n我没有等manager来评价我，而是主动约一对一，请他对这次miss给完整反馈，包括我哪里做得不够好。\n\n结果： Q1 2023我做到126%，把Q4的miss补回来还多。\n\n三个教训：\n\n一是pipeline coverage必须是3x而不是1.5x，意外才有缓冲。\n\n二是早通信比晚通信好——早说manager还能帮你，晚说就只是承担坏消息。\n\n三是自己心里要分清运气vs执行，对执行部分诚实owning，对运气部分也别全揽下来——这才是健康的复盘。\n\n对Bitmain的迁移：\n\n矿机销售周期受BTC价格、政策窗口、客户融资能力影响极大，miss的概率比纯软件SaaS高。这套\"早承认+转下季度+自我校准+主动feedback\"的机制可以直接套用。",
        "qtype": "B",
        "charCount": 819
      },
      {
        "id": "m8-6",
        "num": 53,
        "title": "讲你最大的客户关系，从头到现在的演变",
        "answer": "我最大的客户关系是Best Buy，从Foxx时期一路演变到$4000万+的战略伙伴关系。这段关系经历了四个阶段。\n\n0-6个月：冷启动阶段。\n\n最早三次提案都被拒了，对方根本不把我们当回事。转机是在一次行业展会上拿到Best Buy commercial buyer的15分钟会面，从这个比总部低一级的口子切进去——区域决策门槛低，更愿意尝试新供应商。\n\n7-12个月：首单与信任建立。\n\n拿到$200万的ODM pilot订单。这一阶段最关键的不是订单大小，而是交付质量——94% sell-through打出了我们的可信度。第一年里我做的所有动作都围绕一件事：让对方不后悔选我们。\n\n13-18个月：扩张阶段。\n\n$2000万规模、12 SKU，我们还新增了ODM design services让Best Buy觉得\"这是个能共创的伙伴\"，而不只是供货商。\n\n19-30个月：preferred partner阶段。\n\n规模到$3500万、季度QBR制度化、我把VP of Merchandising拉进来作为exec sponsor。这是关系性质的根本变化——从rep-to-buyer升级到exec-to-exec。\n\n当前：战略伙伴。\n\n$4000万+、Best Buy会提前6个月带着product roadmap来找我们规划，我们成了他们规划过程的一部分，而不是被动响应RFP。\n\n三个inflection point：\n\n一是第一年的sell-through建立了基础信任；二是主动帮他们解决一次供应链危机赢得了good will；三是exec-to-exec关系给运营层日常合作提供了air cover。\n\n对Bitmain的lesson：\n\n大客户关系不是rep一个人建的，是org加rep作为orchestrator的合力。在Bitmain我会争取executive access for top 3 strategic accounts、季度on-site、proactive mindset而非reactive。第一个deal是transactional，第十个deal是客户无法想象没有你运营。",
        "qtype": "B",
        "charCount": 913
      },
      {
        "id": "m8-7",
        "num": 113,
        "title": "如果今天打给你 Foxx 的 CEO，他会说你最大的弱点是什么？",
        "answer": "【一句话】\n\n他会说我在队友请求支持低优先级工作时，难以说不。\n\n【诚实版本】\n\n我在 Foxx 的角色演变成销售枢纽功能——协调美国销售、中国工厂、认证、定制。美国 rep 让我推工厂做定制请求时，我通常会接，即使底层 deal 概率低。久而久之我自己高概率账户的 pipeline 拿到的注意力比应得的少。CEO 直接 call out 过——他说我需要在优先级上更硬，哪怕代价是一些团队内摩擦。\n\n【我做了什么】\n\n开始周五复盘上周时间花在哪里 versus deal 概率。如果 30% 以上时间花在概率低于 30% 的机会上，下周我就 push back。不完美——老习惯——但 framing 紧了。\n\n【为什么这对 Bitmain 重要】\n\n一个 quota $30M+ 的北美销售岗位，需要对内部不能推动 pipeline 前进的请求说不的纪律。我会希望前 30 天跟你明确校准什么值得我时间、什么不值。这是请求，不是抱怨——我宁愿早期得到 framing，也不要在第六个月才搞清楚。",
        "qtype": "B",
        "charCount": 450
      }
    ]
  },
  {
    "id": "mod9",
    "name": "商业战略补充",
    "color": "#37474F",
    "icon": "🧠",
    "description": "客户分层·公私采购·对冲基金·F1000·100K RFQ·BTC质押·政治风险",
    "cards": [
      {
        "id": "m9-1",
        "num": 54,
        "title": "锚定·客户分层论 (90 秒)",
        "answer": "【锚定回答 · 客户分层论 · 90 秒】\n\n【四层，优先级不平等】\n\n第一层——公众矿企。70% 的 pipeline 时间。\n\nMARA、RIOT、CleanSpark、Cipher、Core Scientific、Hut 8、TeraWulf、Bitfarms、IREN、Bitdeer。10-Q 披露 capex，成熟的采购团队，单笔 $30M 到 $300M。决策人是 COO、CFO、Chief Mining Officer。周期 3 到 9 个月。\n\n第二层——大型私营矿企和数据中心运营商。20%。\n\nPE 支持的私矿、混合 AI/BTC 运营商、托管公司。创始人驱动决策，2-6 个月周期，$5M 到 $50M ticket。比第一层快，less procedural。\n\n第三层——对冲基金和机构资本。5%。\n\n很少直接买机器——他们投资运营商，给我介绍 portfolio 公司，分享市场情报。每小时投入的 leverage 极高。\n\n第四层——《财富》1000强。5%。\n\nMicroStrategy 谱系的 BTC treasury 公司。有 stranded gas 的能源巨头。长线 logo，12-18 个月才能拿下第一单。\n\n【纪律】\n\n70% 时间给第一层因为那里有确定收入，但是结构化 prospecting 进入第二层，对第三、四层做季度性 touches，让 pipeline 正确老化。",
        "qtype": "S",
        "charCount": 615
      },
      {
        "id": "m9-2",
        "num": 57,
        "title": "F1000战略 — 哪些向量make sense？",
        "answer": "三种入口向量。\n\nBTC treasury公司。 MicroStrategy是先例。任何资产负债表上有BTC的F1000最终会问”我们是否也应该挖矿？“Bitmain卖垂直整合叙事。Semler Scientific和MSTR-inspired买家是目标。决策人：CFO、treasurer。\n\n能源集团。 有stranded flare gas的油气巨头、有curtailed renewables的公用事业、有spare capacity的数据中心REITs。比特币挖矿货币化otherwise-wasted能源。Exxon试点过flare gas挖矿。Occidental、Chevron、大型公用事业都是真实对话。决策人：corporate development或new ventures。\n\nHPC和hyperscalers。 微软、亚马逊、Meta大规模买compute。Sophon是载体。不同销售动作，更长周期，如果Bitmain要扩展超出纯挖矿战略上重要。\n\n方法。 我不会cold call F1000 CFO。我会通过有加密和AI practice的律所、投行、咨询公司。Warm intro是唯一efficient入口。我会把F1000内部定位为长期build而非短期收入，相应管理预期。",
        "qtype": "S",
        "charCount": 557
      },
      {
        "id": "m9-3",
        "num": 58,
        "title": "走一遍一个100,000-unit RFQ — 全周期",
        "answer": "100,000台S23 units在一个300 MW Texas greenfield。总ticket约$225M。\n\n第1-2周. Qualify. 和客户ops lead电话。300 MW不是一夜之间出现的。Substation建好了吗？ERCOT interconnect批准了吗？Commissioning时间线？电力合约签了吗，什么费率？这保护我不会build a proposal against一个不真实的site。\n\n第2-3周. Proposal. 和Bitmain产品一起pricing。100K units是顶级volume tier — 预期15-20%低于list。提议两个配置：S23风冷for capex效率，或S23+S23 Hydro mixed build for TCO效率，用客户电费做5年NPV和一系列hashprice scenarios。把Hydro选项framework为”2027-30周期的premium定位”。\n\n第4-6周. 技术DD. 客户工程要工厂访问、固件demo、O&M plan。协调区域服务团队和可能的新美国工厂。带一个类似部署的reference — CleanSpark或Cipher如果可以。\n\n第7-10周. 商务谈判. 定金条款、2-3个季度的分阶段delivery schedule（100K不一次性ship）、LD clauses、warranty specifics、O&M合约结构、BTC质押选项如果相关。Bitmain法务早期介入。这个阶段paperwork慢就kill deal。\n\n第11-14周. Execution. LC或wire instrument、按港口的shipping schedule、site deployment plan。平行workstream托管伙伴介绍如果客户感兴趣一部分用Bitmain-生态托管。\n\n第4-9个月. Delivery. 分阶段shipment、commissioning、O&M onboarding。我在delivery期间的工作是staying in the relationship so next RFQ comes back to Bitmain。前10,000 units成功部署是扩展order的foundation。\n\n关键纪律。 Deal不是在签字时done。Reorder依赖delivery和performance怎么走。我在install期间保持operational，不只是contract。",
        "qtype": "S",
        "charCount": 1080
      },
      {
        "id": "m9-4",
        "num": 59,
        "title": "在矿业大单谈判中支付条款典型什么样，你怎么谈？",
        "answer": "$10M+订单的标准机构结构。\n\n定金和timing。 30% on PO，60% on ready-to-ship，10% on delivery acceptance。对较小或较新买家，50/40/10或50/50。Lead time 60-120天取决于订单规模和production slot，但2026年末美国工厂output将为国内origin units压缩这个。\n\n支付工具。 公众矿企USD wire — Bitmain标准银行。有时候超大或国际订单用LC；我会推threshold以上的irrevocable LC保护Bitmain并signal seriousness。加密支付（USDT或BTC）历史上被某些客户接受，但机构买家几乎总是付USD。\n\nBTC质押 — 较新工具。 客户posts BTC collateral，拿折扣机器价。Bitmain在2025-26环境已经部署。对齐利益 — BTC涨两方都赢。需要careful custody和liquidation rights结构。\n\n风险场景。 BTC在定金和ready-to-ship之间跌 — 客户可能重谈或违约。Mitigation：紧合同语言、resell inventory权利、30%定金作为hard floor。对新或较小客户，push到50%定金或LC。\n\n谈判锚。 绝不以最灵活条款开场。从标准开始；让客户通过commit volume或O&M来earn灵活度。灵活度是lever，不是起始位置。",
        "qtype": "S",
        "charCount": 650
      },
      {
        "id": "m9-5",
        "num": 60,
        "title": "管道纪律 — CRM、预测、节奏",
        "answer": "PayPal用Salesforce，Foxx用HubSpot。复杂B2B我偏好Salesforce。\n\n三层。\n\n每周. 每个open opportunity被touched加上next step和next touchpoint的note。任何stale 14天的demoted或killed。\n\n每月. Forecast commit演练。Commit / Best / Upside。Commit = 90%信心本月close。Report commit然后over-deliver而不是pad。\n\n每季度. Pipeline generation audit。多少新pipeline、从哪些sources、按stage的conversion rates。重新分配prospecting to highest-converting channels。\n\n预测方法。 Probability-weighted，不是gut-feel。每个stage有historical conversion rate。Aggregate forecast是数学的加top 5 deals的qualitative color。\n\n对Bitmain specifically。 公众矿企在10-Q披露capex。我会build每个target的addressable wallet share的shadow model，parallel to Salesforce。Drive比opportunity-stage数学alone更准确的forecasting。例如：MARA披露2026年$X机器capex。其中Bitmain wallet share是Y%基于fleet composition。那给我上限on what’s actually winnable。",
        "qtype": "S",
        "charCount": 772
      },
      {
        "id": "m9-6",
        "num": 64,
        "title": "有自己电力的客户 vs 需要托管的客户 — 销售动作怎么不同？",
        "answer": "本质不同的对话。\n\n有电力的客户。 狭窄和technical。电价、气候、site design。Match SKU和O&M to fit。和MicroBT在机器spec和价格上竞争。Deal close on TCO math。更少stakeholders，faster cycle。\n\n需要托管的客户。 更wide。Sell Bitmain作为total infrastructure partner。托管伙伴selection based on规模、geography、电力economics。Site SLAs。客户长期own他们site的potential path。Consultant first, vendor second。Deal close on trust to deliver hashrate，不只硬件。\n\n重点转移。 - Power owner. Machines — 效率、固件、O&M、trade-in。 - Hosting seeker. Outcomes — 保证hashrate delivery、uptime、每BTC的cost、Bitmain orchestrating stack。\n\n关系投资转移。 - Power owner. Transactional — 通过pricing和service赢next PO。 - Hosting seeker. Partnership — 赢next PO because we’ve built多年infrastructure together，他们cannot rip and replace easily。\n\n战略读。 Bitmain想随时间把客户from transactional迁移到partnership。即使power owners，我们能否add O&M、固件管理、fleet analytics so Bitmain在他们P&L里baked？增加switching cost，保护share。",
        "qtype": "S",
        "charCount": 850
      },
      {
        "id": "m9-7",
        "num": 65,
        "title": "参议员Warren公开点名Bitmain。如果F1000客户提出政治风险担忧，你怎么处理？",
        "answer": "直接答案。Concern是legitimate的我不会dismiss。\n\n首先Acknowledge。 “那是一个fair concern。围绕中国科技的政治和监管风险是真实的，Bitmain在国会讨论中被明确reference。让我走一遍Bitmain在做什么关于这个，以及为什么我认为风险对你组织manageable。”\n\n四点response。\n\n美国工厂投资。 Texas或Florida，250美国员工第一阶段，chip production早2026年开始。那是billions美国资本投资和对美国买家materially reduction in中国-origin exposure。Reference Irene Gao在Bloomberg的公开commitments。\n\nCompliance posture。 Bitmain的trade compliance一直在actively navigate tariff和export control。每个shipment正确分类，每个origin documented。我可以把你合规团队连到Bitmain的 — 我会直接facilitate那个对话。\n\n不是uniquely exposed。 如果你审计委员会关心中国科技，他们应该在问Lenovo、TCL、Huawei in数据中心、供应链每个中国半导体。Bitmain是市场leader所以名字most cited — 不是uniquely at risk。\n\nAlternatives有tradeoffs。 MicroBT也是中国的。Canaan现在HQ在新加坡但制造供应链类似。Auradine是美国但不scale并有narrower产品线。不买Bitmain的决定通常意味着买a worse product或similarly-exposed product。\n\nClose。 “我认为balanced decision涉及ongoing policy monitoring、对新工厂的美国-origin units的preference、和diversified supplier posture。我能帮你structure procurement approach that addresses那些concerns directly — 你想要继续conversation with我们合规lead？”\n\n我绝不会做。 假装政治风险不存在，或make generic”中国科技is fine”arguments。F1000合规官们trained to detect that and it loses credibility fast。",
        "qtype": "S",
        "charCount": 1133
      },
      {
        "id": "m9-8",
        "num": 101,
        "title": "你怎么看 2027 年的比特币挖矿行业？",
        "answer": "【三个结构性变化会放大】\n\n一、整合加速。\n\n成本结构在 $80K/BTC 以上的公众矿企，挺不过 BTC 持续低于 $70K 的环境。要么被 CleanSpark、Cipher 这种更强的运营商收购，要么 wind down。Top 5 公众矿企到 2027 年控制美国算力中显著更大的份额。\n\n二、效率底线下移到 sub-10 J/TH。\n\nS23 Hydro 9.5 是今天的领先边界。到 2027 年，下一代 Bitmain 产品——大概率是 S25——推到 7-8 J/TH。认真运营商的标准 fleet 是 sub-12 J/TH。还在跑 S19 25 J/TH 的人，在任何合理 hashprice 下都不经济。\n\n三、地理集中度在美国深化。\n\nTexas、Carolinas、Wyoming、Georgia。ERCOT 需求响应经济性让 Texas 主导——RIOT 在 2023年8月 一个月赚了 $3000万 DR 信用。到 2027 年，美国持有全球算力 50% 以上，几乎全在五六个州。\n\n【对 Bitmain 的含义】\n\n账户更集中、关系更深、合约更长。北美业务从交易型硬件销售转向跟幸存运营商的多年 fleet 合作。如果我们是 record 上的合作伙伴，那对我们好；如果不是，是生存级问题。",
        "qtype": "S",
        "charCount": 561
      },
      {
        "id": "m9-9",
        "num": 104,
        "title": "Bitmain 现在最大的、被低估讨论的风险是什么？",
        "answer": "【一句话】\n\n对比特币价格的单点失败暴露。\n\n【为什么这是被低估的风险】\n\n我们经常谈 MicroBT、关税、AI 转型。我们没怎么谈：如果 BTC 进入持续 24 个月的熊市到 $40-50K 会怎样？这不是没先例——2018 和 2022 都发生过。在那个价位，hashprice 跌到 $20 以下，中位矿工严重亏损，行业范围 capex 冻结，我们北美收入可能在很长一段时间压缩 50% 或更多。\n\n【两个具体后果】\n\n第一，我依赖的\"幸存者升级\"论假设 BTC 留在效率高的 fleet 还能盈利的区间。如果 BTC 再跌 30%，即使 S23 fleet 在平均电费下也变成 marginal，升级 pitch 失去说服力。\n\n第二，应收账款风险快速上升——5,000 台机器的私营矿企破产场景变得更常见。\n\n【我希望 Bitmain 投资什么】\n\n反周期商业工具——BTC 质押是开始，但更激进的与 Galaxy、NYDIG 的融资伙伴关系，对承压客户更灵活的付款结构，更紧的 AR 信用风险管理。出熊市时跟客户关系最深的公司是熬过艰难季度时支持客户的那些，不是在条款上变僵硬的那些。\n\n【为什么我提这个】\n\n不是看空 Bitmain——是要在熊市到来之前投资好下一轮的剧本。赢下一轮的公司是这一轮做好准备的公司。",
        "qtype": "S",
        "charCount": 564
      },
      {
        "id": "m9-10",
        "num": 111,
        "title": "你会在 Bitmain 现行战略上 push back 哪里？",
        "answer": "【两个我会想测试共识的地方】\n\n一、美国工厂的传播策略。\n\n从外部看，美国工厂的信息读起来是防御性的——关于关税、政治风险、供应链韧性。都是真的。但同样的工厂可以卖成进攻性的——更近客户的工程、更快定制、针对特定电力 profile 的区域化产品变体。这种重 framing 把工厂从\"我们不只是中国\"变成\"我们比竞争对手更响应\"。MicroBT 和 Canaan 也在建美国产能——防御性定位会被对标。进攻性定位才差异化。\n\n二、Sophon 和 AI 算力故事。\n\nBitmain 通过 Sophon 有 AI 能力，但定位为独立产品线，几乎是姊妹业务。从销售视角看，这是错过的 bundle。同样这些在转型 AI 的北美账户——IREN、Core Scientific、Hut 8——会受益于单一 Bitmain 合作伙伴对话，而不是两个。我会推 Sophon 和 ANTMINER 一起卖成\"Bitmain 算力基础设施\"，对混合客户用统一 rep 关系。这是结构性变化，不是营销调整，我理解它有从外部看不到的含义。但这是我前六个月想跟你讨论的对话。\n\n【Framing】\n\n我不是说我对、Bitmain 错——我是说这两个地方我会想用我现在没有访问权的内部数据测试当前模式。这是我会带到我们每周一对一的那种问题。",
        "qtype": "S",
        "charCount": 561
      },
      {
        "id": "m9-11",
        "num": 112,
        "title": "你认为是错的、行业主流共识是什么？",
        "answer": "【一句话】\n\n\"Hashprice 是 model 矿工经济性的正确指标。\"\n\n【为什么这个共识是错的】\n\n每个分析师都用、每个公众矿企都报、每份准备文档都开篇用。但 hashprice 平均掉了对具体矿工最重要的两个东西——电费和 fleet 效率。一个跑 S23 Hydro 在 $0.035/kWh 的矿工，跟一个跑 S19 在 $0.06 的矿工，P&L 曲线完全不同，无法用单一 hashprice 数字分析。\n\n【对销售的意义】\n\n我不应该在客户对话里引用行业平均 hashprice。我应该引用客户专属的 BTC 生产成本——他们实际电价、实际 fleet 效率、实际 hashrate 份额——展示 S23 Hydro 改变什么 versus 他们当前 setup。完全不同的对话。\n\n【反向商业 play】\n\n当前 fleet 效率在最差四分位的公众矿企，是被定价过低的升级周期账户。他们看起来在崩盘——高生产成本、财务压力、AR 风险。但实际上是影响最大的升级，因为从 25 J/TH 到 9.5 J/TH 的边际收益远大于从 15 到 9.5。大多数 rep 因为感知信用风险避开他们。我会用结构化付款条件加 BTC 质押 target 他们。",
        "qtype": "S",
        "charCount": 533
      }
    ]
  },
  {
    "id": "mod10",
    "name": "跨行业桥接 Cross-Industry Bridge",
    "color": "#0F766E",
    "icon": "🌉",
    "description": "Foxx的NVIDIA GPU/手机OEM经验如何translate到Bitmain矿机销售",
    "cards": [
      {
        "id": "m10-1",
        "num": 48,
        "title": "你的背景里什么让你为这个职位做好了准备？",
        "answer": "老实说，我过去三年其实就是在卖 Bitmain 客户面前正在 converge 的两半 accelerated compute conversation — 而且不光是卖硬件，是帮客户从零搭数据中心。\n\n【在 Foxx 的实际工作】\n\n我同时干两件事。第一是经营手机品牌，从 chipset、memory、display 到 FCC/PTCRB/TAC 全部 BOM 我自己 own。第二是给企业客户配 GPU 服务器、规划数据中心 — RTX 5090 走 prosumer 和工作站渠道，HGX H100/H200/B200 系统走 AI infrastructure 客户。\n\n【一个具体例子】\n\n最近一个 64-GPU cluster 项目，我配的是 Supermicro SYS-A22GA-NBRT — 双路 Intel Xeon 6960P 3.8GHz、24 条 128GB DDR5-6400 (共 3TB 内存)、8 条 3.84TB NVMe U.2 Gen5、HGX B200 8-GPU 180GB (1.4TB HBM3e)、8 张 ConnectX-7 400Gb/s NIC、一张 BlueField-3 DPU 200Gb/s、TPM 2.0、6 路 5250W 3+3 冗余电源。8 台这种系统，整 cluster 60+ kW per rack，必须配液冷。\n\n【转移到 Bitmain】\n\n这个客户对话和卖 S23 Hydro 给 MARA 是同一套 motion — buyer persona 一样 (CFO、infrastructure VP、compute 负责人)、conversation 结构一样 (5 年 TCO、power per square foot、lead time、allocation)、决策路径一样。我要做的就是把 metric 从 TFLOPS per watt 换成 J/TH，把 NVLink topology 换成 hashboard 配置，把 CDU 入水温度换成 ASIC hydro 的 dry-cooler 配置。\n\n【Supermicro 经验的相关性】\n\n要卖 Supermicro 系统我们需要走 Solution Provider Partner 认证 — 销售培训、技术认证、NDA、定价 tier。这种 channel partner 的工作方式直接对应 Bitmain 的授权 reseller / hosting partner 体系。\n\n我不是从不相关的行业 pivot 过来。我是把\"卖 GPU + 建 DC + 做硬件\"三段经验 consolidate 成一个 job。\n\n===\n\nThe honest answer is that I've spent the last three years selling the two halves of the accelerated-compute conversation that's now converging at every Bitmain customer — and not just selling boxes, but helping clients architect data centers from scratch.\n\nAt Foxx I ran two parallel motions. One was the phone brand — owning the BOM from chipset down through memory, display, FCC/PTCRB/TAC compliance. The other was enterprise GPU sales and data center build-out: RTX 5090 SKUs through prosumer and workstation channels; HGX H100, H200, and B200 systems into AI infrastructure buyers.\n\nA concrete example. A recent 64-GPU cluster I configured: Supermicro SYS-A22GA-NBRT — dual Xeon 6960P 3.8GHz, 24x 128GB DDR5-6400 (3TB total), 8x 3.84TB NVMe Gen5, HGX B200 8-GPU 180GB baseboard with 1.4TB HBM3e aggregate, 8x ConnectX-7 400Gb/s NICs for east-west GPU fabric, BlueField-3 200Gb/s DPU for storage and north-south, TPM 2.0, six 5250W PSUs in 3+3 redundancy. Eight of those systems pushes you to 60+ kW per rack — you can't air-cool that, so I had to design the liquid loop with the customer too.\n\nThat conversation maps almost 1:1 onto selling S23 Hydro to MARA. Same buyer persona, same TCO structure, same allocation and lead-time gating. The metric changes from TFLOPS-per-watt to J/TH, the topology changes from NVLink to hashboard, but the decision path is the same.\n\nTo sell Supermicro at all, you have to clear their Solution Provider Partner certification — sales training, technical certification, NDA, discount tier. That channel-partner muscle is directly Bitmain's authorized-reseller and hosting-partner motion.\n\nI'm not pivoting from an unrelated industry. I'm consolidating \"sell GPUs + build DCs + manufacture hardware\" into one job.",
        "qtype": "B",
        "charCount": 2897
      },
      {
        "id": "m10-2",
        "num": 49,
        "title": "跟客户解释 hydro cooling — 包括你怎么提风冷 vs 液冷方案的经验",
        "answer": "我会先 acknowledge 客户已经知道的，因为 2026 大多数 institutional 买家在 AI 那边都听过 NVIDIA 给 H200 和 Blackwell 的 DLC pitch。然后我把我在 Foxx 实际做过的 cooling design proposal 节奏搬过来。\n\n【在 Foxx 我怎么提方案】\n\n客户跟我说他要建多大的算力、什么 workload、power cost、climate，我用 power density 决定 cooling 架构：\n\n- 15 kW/rack 以下：传统 CRAC/CRAH + hot/cold aisle containment 就够了，PUE 1.4–1.5。普通企业混合 workload 走这条\n- 15–30 kW/rack：in-row cooling 介入 (Vertiv 或 Stulz 那种)，PUE 1.3–1.4\n- 30–50 kW/rack：rear-door heat exchanger，可以 passive 也可以 active，PUE 1.25\n- 50–150 kW/rack：DLC (direct liquid cooling) — H200/B200 cluster 这一档，必须配 CDU、二次回路、deionized water 或者 PG25\n- 100+ kW/rack：浸没式 (immersion)，单相或双相，需要 dielectric fluid 池\n\n我给那个 64-GPU B200 cluster 客户的建议是 DLC + 干冷器，因为 NVIDIA Blackwell 入水可以接受 35–45°C，干冷器在德州大部分时间都够用，不用配 chiller，PUE 能压到 1.1。\n\n【Bitmain 这边一模一样的对话】\n\n只是 metric 换一下：S21 air 是 3.5 kW per unit、约 8–10 kW/rack 等效，pole-barn 设计就行。S23 Hydro 3U 是 11 kW per unit，42U cabinet 154 kW，必须液冷。这正好对应 GPU 那边 DLC 的密度区间 — 同样的物理、同样的工程、同样的 dry-cooler 配方。\n\nS23 Hydro 三个 TCO 优势：\n\n- 效率：9.5 J/TH vs S23 air 11 J/TH，100 MW site $0.05/kWh 一年差 $6.5M\n- 密度：16.24 PH/s per 42U @ 154 kW，比 air 少约 40% 占地，real estate 和 ERCOT interconnect 直接砍下来\n- 寿命：芯片 45–60°C vs air 75–85°C，无风扇无 fan failure，Bitmain 配 7 年 warranty\n\n【对 GPU 那边更 favorable 的几点】\n\n- ASIC workload 是 steady-state，不像 training 那样 spike，loop 控制简单\n- 出水温度可以推到 50°C → dry cooler 就够，省 chiller，几乎没有机械制冷\n- 工业级容忍度 — 35–40°C 环境也能跑\n\n【Trade-off 我会 honest 地讲】\n\nClosed-loop infrastructure 要 dry cooler、deionized water 管理、conductivity <100 μS/cm 监控。冷气候要配 PTC 加热器，因为 S23 Hydro 入水低于 20°C 启动不了。每台 capex 也更高。\n\n【最后】\n\n\"让我用你的 power cost 和 hashprice scenario 跑个 5 年 NPV，三档密度方案各跑一遍。我不会硬推 hydro — 数字来选 SKU。\" 这是我卖 GPU 时一样的 posture。\n\n===\n\nI open by acknowledging what most 2026 institutional buyers already know — they've heard NVIDIA's DLC pitch for H200 and Blackwell. Then I bring over the cooling design motion I actually used at Foxx.\n\nHow I proposed cooling at Foxx. Client tells me their compute target, workload, power cost, climate. Power density decides the architecture:\n\n- Sub-15 kW/rack: traditional CRAC/CRAH with hot/cold aisle containment, PUE 1.4–1.5. Mixed enterprise workloads.\n- 15–30 kW/rack: in-row cooling (Vertiv, Stulz), PUE 1.3–1.4.\n- 30–50 kW/rack: rear-door heat exchanger, passive or active, PUE 1.25.\n- 50–150 kW/rack: direct liquid cooling — H200/B200 territory. CDU, secondary loop, deionized water or PG25.\n- 100+ kW/rack: immersion, single or two-phase, dielectric fluid baths.\n\nFor that 64-GPU B200 cluster I recommended DLC plus dry coolers. NVIDIA Blackwell tolerates 35–45°C inlet, and dry coolers handle Texas climate most of the year — no chiller needed, PUE down near 1.1.\n\nThe Bitmain conversation is the same conversation. Just swap the metric. S21 air at 3.5 kW per unit and roughly 8–10 kW/rack equivalent — pole-barn design works. S23 Hydro 3U at 11 kW per unit, 42U cabinet at 154 kW — liquid is mandatory. That density lands in exactly the same regime as GPU DLC. Same physics, same engineering, same dry-cooler playbook.\n\nS23 Hydro wins TCO three ways. Efficiency: 9.5 J/TH versus 11 J/TH on air, which is ~$6.5M/year on a 100 MW site at $0.05/kWh. Density: 16.24 PH/s per 42U at 154 kW collapses footprint and ERCOT interconnect cost. Lifecycle: chips at 45–60°C versus 75–85°C, no fans means no fan failures, Bitmain backs a 7-year warranty.\n\nWhere ASIC hydro is actually more forgiving than GPU DLC: steady-state load means simpler loop control, outlet up to 50°C means dry coolers do most climates, and the industrial tolerance is wider — 35–40°C ambient is fine.\n\nThe trade-offs I'm honest about: closed-loop with dry cooler, deionized water management, conductivity below 100 μS/cm, and PTC heaters in cold climates because S23 Hydro will not start below 20°C inlet — opposite of GPU intuition.\n\nClose: \"Let me run a 5-year NPV at three density tiers using your power cost and hashprice. I won't push hydro — let the math pick the SKU.\" Same posture I take selling H200 air vs liquid configs.",
        "qtype": "T",
        "charCount": 3978
      },
      {
        "id": "m10-3",
        "num": 50,
        "title": "你的手机代工和制造经验怎么 translate 到 Bitmain？",
        "answer": "四件事 concrete 地 transfer，不是泛泛而谈，是真的天天打交道的内容。\n\n【一、合规和认证体系】\n\n手机出货要清四道门：TAC (Type Allocation Code，IMEI 前 8 位，向 GSMA 申请)、FCC ID (Part 15 走 WiFi/BT，Part 22/24 走蜂窝)、PTCRB (运营商接受认证 — T-Mobile、AT&T、Verizon 不过这道直接退货)、SAR/TIS/TRP 等 RF 测试。每个都有专门的 lab、提交流程、retest 周期。我直接管过这些。\n\n矿机这边: ANTMINER 在美国必须过 FCC Class A (工业设备类别)，加州还要过 CEC 能耗合规。Bitmain 美国工厂的产品要重新认证 — 这个流程我熟。\n\n【二、Tooling 和 molding 流程】\n\n手机外壳是双色注塑 (2-shot mold)，单套模具 $50–100K。从 DFM (Design for Manufacturing) review 开始 → 开 T0 试模 → T1/T2 改进迭代 → 量产。要管 cycle time、gate location、ejector pin design、表面处理 (UV 或 PVD)。模流分析 (Moldflow 软件) 在 T0 之前跑掉缩水和 weld line 风险。\n\n矿机的金属外壳冲压、散热鳍片挤压、PCB SMT 是同一个工程语言。客户问\"为什么 S23 量产爬坡要 90 天\" — 我能从 tooling 角度解释，不是公式化回答。\n\n【三、Supermicro 认证经验 = Bitmain 渠道伙伴模式】\n\n卖 Supermicro 系统需要过 SSPP (Solution Provider Partner) 认证 — 销售培训、技术认证 (FAE 级别更深)、NDA、按 tier 拿折扣。这就是 Bitmain 的 hosting partner、authorized reseller 模式。客户问\"我能不能从你们这买然后 host 在 X 那边\" — 我懂这个 channel 怎么走、怎么不踩 conflict。\n\n【四、ODM/EMS 供应链熟悉度】\n\nBitmain 设计、TSMC 流片、合同 integrator (类似闻泰 Wingtech、华勤 Huaqin、龙旗 Longcheer 在手机行业的角色) 组装。我做过这种安排的客户和 integrator 两边，懂 100K 单的 RFQ 分三个季度交付背后的 substrate allocation、PCB lead time、组装产能现实。\n\n【底层】\n\n手机是 consumer SKU、矿机是 industrial — 但\"通过复杂的亚洲 supply chain 把硬件交到美国客户手里、还要清美国合规和认证体系\"这个肌肉，正是 Bitmain 这个 role 需要的。\n\n===\n\nFour concrete transfers — not abstract, things I actually managed day-to-day.\n\nOne: compliance and certification. Shipping a phone clears four gates: TAC (Type Allocation Code, first 8 digits of IMEI, applied through GSMA), FCC ID (Part 15 for WiFi/BT, Part 22/24 for cellular), PTCRB (carrier acceptance — fail this and T-Mobile/AT&T/Verizon won't list you), and the SAR/TIS/TRP RF tests. Each has its own lab, submission protocol, and retest cycle. I owned these.\n\nANTMINER in the US needs FCC Class A (industrial device class) plus CEC energy compliance in California. The Bitmain US factory products will need re-certification under domestic origin — that workflow is exactly what I lived in phones.\n\nTwo: tooling and molding. Phone housings are 2-shot injection molds, $50–100K per tool. The flow is DFM review → T0 first article → T1/T2 iteration → mass production. You manage cycle time, gate location, ejector pin design, surface finish (UV coat or PVD). Moldflow analysis runs before T0 to catch sink marks and weld lines.\n\nThe miner's stamped metal chassis, extruded heatsinks, and PCB SMT line are the same engineering vocabulary. When a customer asks why S23 production ramp takes 90 days, I can answer from tooling reality — not a canned response.\n\nThree: Supermicro certification = Bitmain channel partner model. To sell Supermicro you clear SSPP (Solution Provider Partner) certification — sales training, technical cert (FAE-level for engineering depth), NDA, tiered discount. That's exactly Bitmain's hosting partner and authorized reseller motion. When a customer asks \"can I buy from you and host with someone else,\" I know how to route it without stepping on channel conflict.\n\nFour: ODM/EMS supply chain literacy. Bitmain designs, TSMC fabricates, contract integrators assemble — same model as Wingtech, Huaqin, Longcheer in phones. I've sat on both customer and integrator sides, so I understand the substrate allocation, PCB lead time, and assembly capacity realities behind a 100K-unit RFQ shipping over three quarters.\n\nPhones are consumer SKUs, miners are industrial. But the muscle — moving hardware through complex Asian supply chains into US customers while clearing US compliance — is exactly what this role needs.",
        "qtype": "B",
        "charCount": 3500
      },
      {
        "id": "m10-4",
        "num": 52,
        "title": "详细讲一下现代 GPU 服务器架构和 Bitmain ASIC 部署的对应关系",
        "answer": "我用两边 BOM side-by-side 讲，因为这是面试官在测我懂不懂工程，而不是 marketing。\n\n【GPU server — 以 HGX B200 为例 (我配过的)】\n\n- 加速器层：HGX B200 8-GPU 180GB baseboard，1.4TB HBM3e，NVLink + NVSwitch 全互联 — 8 颗 GPU 之间 1.8 TB/s 双向带宽\n- 主机层：双路 Intel Xeon 6960P (288 物理核心)，24 条 128GB DDR5-6400 = 3TB system memory\n- 存储：8 条 3.84TB NVMe U.2 Gen5 = 30TB local，还有 NFS 或 Lustre 走网络\n- 网络 — east-west GPU fabric：8 张 ConnectX-7 NIC 每张 400Gb/s，总 3.2 Tb/s，做 AllReduce 用\n- 网络 — north-south：BlueField-3 DPU 200Gb/s 走存储和管理面\n- 电源：6 路 5250W (3+3 冗余) — 整机 ~10 kW\n- 安全：TPM 2.0\n- 冷却：DLC 冷板在 GPU 和 HBM 上，CDU 二次回路\n\n【ANTMINER S23 Hydro 3U BOM (类比)】\n\n- 加速器层：3 块 hashboard，每块若干颗 BM 自研 SHA-256 ASIC (类比 GPU)\n- 主机层：control board，比 Xeon 简单得多 — 因为 workload 是 fixed-function (一直跑 SHA-256 双重哈希)，不需要通用 CPU\n- 存储：几乎不需要 — 配置参数存 flash，无需 NVMe 阵列\n- 网络：单网口 RJ45 走 Ethernet 到 ANTPOOL — 不需要 NVLink 这种 GPU 互联，因为 ASIC 之间无需通信\n- 电源：单机 11 kW，三相 380–415V，LP34 工业接头\n- 冷却：closed-loop hydro，入水 ≥20°C 才能启动\n\n【关键洞察】\n\n两边都是 accelerated compute 盒子，架构差异完全由 workload 决定。\n\nGPU 要 NVLink 因为 AI training 需要 all-reduce 同步梯度。ASIC 不要，因为每颗芯片独立 hash 互不通信。\n\nGPU 要 3TB DDR5 因为 model weights 和 activations 要 page in/out。ASIC 不要，因为 SHA-256 状态只有 256 bit。\n\nGPU 要 NVMe 因为数据集要 stream。ASIC 不要，因为没有数据集。\n\nASIC 是把 GPU 系统去掉所有 general-purpose 的部分、只保留加速核心。这就是为什么 ASIC 同样功耗下 J/TH 比 GPU 跑 SHA-256 高 1000x — 不是芯片更好，是系统去掉了所有不需要的 overhead。\n\n【对销售对话的影响】\n\n客户从 AI 跨过来时听到 ASIC 配置会觉得\"太简单了\" — 我会解释这正是优势：fewer moving parts、fewer failure modes、deterministic workload、predictable economics。这是 Bitmain 的工程哲学。\n\n===\n\nI run this side-by-side because the question tests whether I understand the engineering, not the marketing.\n\nGPU server — HGX B200 reference config I've ordered:\n\n- Accelerator layer: HGX B200 8-GPU 180GB baseboard, 1.4TB HBM3e total, NVLink + NVSwitch full mesh — 1.8 TB/s bidirectional between any two of the 8 GPUs\n- Host layer: dual Intel Xeon 6960P (288 physical cores), 24x 128GB DDR5-6400 = 3TB system memory\n- Storage: 8x 3.84TB NVMe U.2 Gen5 = 30TB local, NFS or Lustre over network for the rest\n- East-west fabric: 8x ConnectX-7 400Gb/s NICs, 3.2 Tb/s aggregate for AllReduce\n- North-south: BlueField-3 DPU 200Gb/s for storage and management\n- Power: 6x 5250W in 3+3 redundancy, ~10 kW per box\n- Security: TPM 2.0\n- Cooling: DLC cold plates on GPU and HBM, CDU secondary loop\n\nANTMINER S23 Hydro 3U analog:\n\n- Accelerator layer: 3 hashboards, each with multiple Bitmain proprietary SHA-256 ASICs\n- Host layer: simple control board — no Xeon needed because the workload is fixed-function\n- Storage: minimal flash for config — no NVMe array because there's no dataset\n- Network: single RJ45 Ethernet to ANTPOOL — no NVLink because ASIC chips don't communicate with each other\n- Power: 11 kW per unit, three-phase 380–415V, LP34 industrial connector\n- Cooling: closed-loop hydro, inlet ≥20°C to start\n\nThe insight: both are accelerated-compute boxes. The architectural delta is entirely workload-driven.\n\nGPUs need NVLink because AI training requires gradient AllReduce. ASICs don't — each chip hashes independently.\n\nGPUs need 3TB DDR5 because model weights and activations page in and out. ASICs don't — SHA-256 state is 256 bits.\n\nGPUs need NVMe because datasets stream. ASICs don't — there's no dataset.\n\nAn ASIC is what you get when you strip every general-purpose subsystem out of a GPU server and keep only the accelerator core. That's why ASICs hit J/TH numbers 1000x better than a GPU running SHA-256 — not because the chip is better, but because the system removed every overhead it doesn't need.\n\nIn the sales conversation: when a customer crossing over from AI sees the ASIC BOM and says \"this looks too simple,\" I frame that as the strength — fewer moving parts, fewer failure modes, deterministic workload, predictable economics. That's the Bitmain engineering philosophy.",
        "qtype": "T",
        "charCount": 3769
      },
      {
        "id": "m10-5",
        "num": 53,
        "title": "100 MW greenfield 矿场客户问你冷却方案，你怎么提？",
        "answer": "这正是我在 Foxx 给 AI 客户做过的对话，反过来。我先 discovery，再给方案，最后跑 NPV。\n\n【Discovery (15 分钟)】\n\n- Power cost: $0.03/kWh (West Texas wind PPA) 还是 $0.05/kWh (普通工业电)？这决定 efficiency 投资回报\n- Climate: 西德州热但干 → 干冷器 favorable; 北达 cold → 需要 PTC 启动加热器\n- Hold horizon: 3 年 vs 7 年 — 决定是不是值得多 capex 上 hydro\n- Site footprint constraint: 占地 cap 还是宽松？密度优势能否变现\n- Hashprice 假设: 客户用什么基准跑账？我用 Luxor 历史数据帮他 sanity check\n\n【方案 — 三档密度分别配】\n\nA 档 — Pure air (S21/S23 air)：\n\n- 8–10 kW/rack 等效，pole-barn 加 hot/cold aisle\n- 100 MW = ~28,500 台 S23 air，占地约 800,000 sqft\n- Capex 低，但 5 年总功耗成本最高 (11 J/TH)\n- 适合 hold horizon ≤3 年、power cost ≤$0.04/kWh\n\nB 档 — Mixed (60% air + 40% hydro)：\n\n- 灵活，可以 phase deployment\n- 占地约 600,000 sqft\n- Hedge 不同电力合同的 cost basis\n- 适合 hold 3–5 年、有现存 air 设施\n\nC 档 — Pure S23 Hydro 3U：\n\n- 154 kW per 42U cabinet，约 650 cabinets 全场\n- 占地 ~480,000 sqft (比 A 档少 40%)\n- 9.5 J/TH，5 年 power cost 比 A 档省 ~$32M\n- 配 dry cooler + deionized water + conductivity 监控 + PTC 加热器\n- 适合 hold ≥5 年、greenfield 且 power 高 ($0.04+/kWh)\n\n【参考 GPU 那边的方法论】\n\n给 AI 客户做 64-GPU cluster 时我用同样的决策树 — 密度阈值定 cooling 架构。Bitmain 这边数学更直接，因为 workload 是 steady-state，没有 training spike，scenario 跑出来更可信。\n\n【冷却基础设施细节】\n\n- 干冷器尺寸：100 MW 全 hydro 大约 10–15 台 EC2-DT 级别干冷器\n- 二次回路：分区 manifold，每个 cabinet 独立 isolation valve，方便维护单机\n- 冷却液：DI water + 25% PG (propylene glycol) 防冻和防菌\n- 监控：流量、入水温、出水温、压差、conductivity 实时上报\n- 冷启动：北方冬季需要 PTC 加热器组把入水预热到 20°C 以上\n\n【最后】\n\n\"我不会硬推 C 档。让我用你的 power cost、hashprice、hold horizon 跑三档 5 年 NPV、IRR、payback、break-even hashprice — 数字来选方案。这是我给 AI 客户做 cluster design 的同样 posture。\"\n\n【关键 message】\n\n我不是只能讲产品。我能和客户工程师在白板上画冷却图、跟 finance 讲 5 年 NPV、跟 procurement 讲 lead time。这是 institutional sales role 需要的全栈能力。\n\n===\n\nThis is the AI customer conversation I had at Foxx, run in reverse. Discovery first, design second, NPV third.\n\nDiscovery, ~15 minutes:\n\n- Power cost: $0.03/kWh West Texas wind PPA versus $0.05/kWh generic industrial? Drives efficiency-investment ROI.\n- Climate: West Texas hot-dry favors dry coolers; North Dakota cold means PTC start-up heaters required.\n- Hold horizon: 3 versus 7 years decides whether hydro capex pencils.\n- Footprint constraint: land-capped or open? Density advantage either real or theoretical.\n- Hashprice basis: what assumption are they running? I sanity-check with Luxor historicals.\n\nThree options, each tied to a density tier:\n\nOption A — pure air (S21/S23 air). 8–10 kW/rack equivalent in pole-barn with hot/cold aisle. 100 MW ≈ 28,500 S23 air units, ~800,000 sqft footprint. Lowest capex but highest 5-year power cost at 11 J/TH. Fits hold ≤3 years, power ≤$0.04/kWh.\n\nOption B — mixed 60/40 air-hydro. Phased deployment flexibility, ~600,000 sqft, hedges power-cost basis. Fits 3–5 year hold, sites with existing air infrastructure.\n\nOption C — pure S23 Hydro 3U. 154 kW per 42U cabinet, ~650 cabinets total, ~480,000 sqft (40% less than Option A). 9.5 J/TH saves ~$32M over 5 years versus Option A on power alone. Requires dry coolers, DI water, conductivity monitoring under 100 μS/cm, PTC heaters in cold climates. Fits hold ≥5 years, greenfield, power ≥$0.04/kWh.\n\nSame decision tree I used for AI cluster design at Foxx — density threshold dictates cooling architecture. The math is actually cleaner here because BTC workload is steady-state, no training spikes, scenarios are more trustworthy.\n\nCooling infrastructure detail customers will ask about:\n\n- Dry coolers: ~10–15 EC2-DT-class units for full 100 MW hydro\n- Secondary loop: zoned manifold, individual cabinet isolation valves for serviceability\n- Coolant: DI water with 25% propylene glycol for freeze and biofilm protection\n- Monitoring: real-time flow, inlet temp, outlet temp, differential pressure, conductivity\n- Cold start: PTC heater bank to bring inlet above 20°C in winter\n\nClose: \"I won't push Option C. Let me run all three options on your power cost, hashprice, and hold horizon — 5-year NPV, IRR, payback, breakeven hashprice. The numbers pick the design. Same posture I take for AI cluster design.\"\n\nKey message I'd want to leave: I'm not just a product talker. I can whiteboard a cooling loop with your engineers, walk a 5-year NPV with your CFO, and discuss lead time with procurement. That's the full-stack ability this institutional sales role needs.",
        "qtype": "T",
        "charCount": 4216
      }
    ]
  }
];
