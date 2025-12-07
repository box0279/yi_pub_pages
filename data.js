/**
 * 意 · 朴 | Yi · Pu
 * 核心数据源 (v.Final 双语版)
 */

const archetypes = [
    // ============================================================
    // 第一部分：周易六十四卦 (The I Ching 64 Hexagrams)
    // ============================================================
    
    // --- 上经 (Upper Canon) ---
    { char: '䷀', type: 'glyph', 
      cn: { vision: "六条巨龙在云端盘旋，纯阳之火。", taste: "乾卦。天行健。纯粹的意志与动力。像天体运行一样，刚毅坚卓，不为任何人停留，不为任何事改变。", nutrient: "如如不动，主宰自我。" },
      en: { vision: "Six dragons circling the summit, pure Yang fire.", taste: "The Creative. Heaven's Vigor. Pure will and momentum. Like celestial motion, firm and unyielding, stopping for no one, changing for nothing.", nutrient: "Immovable center, master of self." }
    },
    { char: '䷁', type: 'glyph', 
      cn: { vision: "寂静、漆黑、广袤的荒原。", taste: "坤卦。厚德载物。极致的承载。大地埋葬尸体，也生长五谷；承载圣人，也承载强盗。不加评判，全盘接纳。", nutrient: "无分别心，全盘接纳。" },
      en: { vision: "A silent, dark, vast wilderness.", taste: "The Receptive. Great virtue carries all. The earth buries corpses and grows grain; it bears saints and bandits alike. No judgment, total acceptance.", nutrient: "No discrimination, radical acceptance." }
    },
    { char: '䷂', type: 'glyph', 
      cn: { vision: "严霜冻土中，一颗嫩芽艰难破土。", taste: "屯卦。生之阵痛。混乱是新秩序的前夜。现在的艰难，是因为你正在突破一个维度的外壳。别急着远行。", nutrient: "积蓄力量，建构根基。" },
      en: { vision: "A tender sprout breaking through frozen soil.", taste: "Difficulty at the Beginning. The labor pains of birth. Chaos is the eve of a new order. The hardship is the breaking of a dimensional shell. Do not rush.", nutrient: "Accumulate strength, build the foundation." }
    },
    { char: '䷃', type: 'glyph', 
      cn: { vision: "山下的迷雾，越来越浓。", taste: "蒙卦。止疑。初筮告，再三渎，渎则不告。你反复追问，不是因为困惑，而是因为你不想面对那个直觉的答案。", nutrient: "停止追问，去执行。" },
      en: { vision: "Mist thickening at the foot of the mountain.", taste: "Youthful Folly. Stop doubting. You ask repeatedly not because you are confused, but because you avoid the intuitive answer.", nutrient: "Stop asking, start executing." }
    },
    { char: '䷄', type: 'glyph', 
      cn: { vision: "乌云密布在天上，雨迟迟不下。", taste: "需卦。等待。时机未到，急也没用。与其焦虑地看天，不如在屋里大吃大喝，养精蓄锐。", nutrient: "饮食宴乐，静待天时。" },
      en: { vision: "Dense clouds hover, but no rain falls.", taste: "Waiting. Nutrition. The time is not yet ripe. Instead of anxiously watching the sky, feast and rest to nourish your spirit.", nutrient: "Enjoy the moment, wait for the divine timing." }
    },
    { char: '䷅', type: 'glyph', 
      cn: { vision: "天向西转，水向东流，背道而驰。", taste: "讼卦。争辩。你们的底层逻辑根本不同。赢了官司输了命。不要试图说服，也不要陷入纠缠。", nutrient: "停止争辩，回头是岸。" },
      en: { vision: "Heaven turns west, water flows east; diverging paths.", taste: "Conflict. Fundamental logics differ. Winning the argument loses the life. Do not try to convince; do not get entangled.", nutrient: "Stop arguing, turn back now." }
    },
    { char: '䷆', type: 'glyph', 
      cn: { vision: "地下流动的暗河，肃杀的军阵。", taste: "师卦。纪律。处理混乱局面，需要像军队一样严明的纪律和强有力的领导。慈不掌兵。", nutrient: "严明纪律，令行禁止。" },
      en: { vision: "Dark rivers flowing underground; a solemn army.", taste: "The Army. Discipline. Chaos requires martial discipline and strong leadership. Mercy does not command an army.", nutrient: "Strict discipline, absolute obedience." }
    },
    { char: '䷇', type: 'glyph', 
      cn: { vision: "众星拱月，百川归海。", taste: "比卦。站队。一个人成不了事。现在的关键不是你有多强，而是你站在谁身边。亲近那个有能量的人。", nutrient: "选对阵营，亲近贵人。" },
      en: { vision: "Stars arching over the moon; rivers returning to the sea.", taste: "Holding Together. Alliance. One cannot succeed alone. It's not about how strong you are, but who you stand with.", nutrient: "Choose your side, align with energy." }
    },
    { char: '䷈', type: 'glyph', 
      cn: { vision: "西边的浓云，没有雨。", taste: "小畜卦。瓶颈。你的才华和资源（云）已经聚起来了，但还差一点火候（雨）。现在的力量只够做小事。", nutrient: "以此文得，积蓄力量。" },
      en: { vision: "Dense clouds from the west, but no rain.", taste: "The Taming Power of the Small. Bottleneck. Resources have gathered, but the spark is missing. Use current strength for small matters.", nutrient: "Refine your craft, accumulate power." }
    },
    { char: '䷉', type: 'glyph', 
      cn: { vision: "行走在薄冰之上，身后跟随者众。", taste: "履卦。垂范。你现在的每一步，都不是为了自己，而是为了给后来者打样。作为标准，必须战战兢兢。", nutrient: "以身作则，如临深渊。" },
      en: { vision: "Walking on thin ice, followed by a crowd.", taste: "Treading. Conduct. Every step you take sets a template for others. As a standard, you must tread carefully.", nutrient: "Lead by example, walk with caution." }
    },
    { char: '䷊', type: 'glyph', 
      cn: { vision: "天地交融，万物通达。", taste: "泰卦。通畅。小往大来。这是能量流动最顺畅的时刻。所有的阻碍都消失了，投入回报率最高。", nutrient: "包容万物，乘势而上。" },
      en: { vision: "Heaven and Earth intermingle; all things flow.", taste: "Peace. Flow. The small goes, the great comes. Energy flows without blockage. The highest ROI moment.", nutrient: "Embrace all, ride the momentum." }
    },
    { char: '䷋', type: 'glyph', 
      cn: { vision: "天轻上浮，地沉下陷，互不搭理。", taste: "否卦。断联。沟通彻底失效。这不是你的错，是时运不济。小人当道，君子若是强行出头，必受其害。", nutrient: "切断连接，韬光养晦。" },
      en: { vision: "Heaven floats up, Earth sinks down; disconnection.", taste: "Stagnation. Blockage. Communication fails. It's not your fault, but the timing. Shadows prevail; the noble should hide.", nutrient: "Cut connections, hide your light." }
    },
    { char: '䷌', type: 'glyph', 
      cn: { vision: "旷野中燃起的篝火，映照众人。", taste: "同人卦。结盟。打破门户、种族、阶级的界限。只要志向相同，就可以在旷野中同行。", nutrient: "打破隔阂，寻求共识。" },
      en: { vision: "A bonfire in the wilderness, illuminating the crowd.", taste: "Fellowship. Alliance. Breaking boundaries of class and race. If the will is shared, we walk together.", nutrient: "Break barriers, seek consensus." }
    },
    { char: '䷍', type: 'glyph', 
      cn: { vision: "正午的太阳悬在天上，普照万物。", taste: "大有卦。巅峰。你拥有了资源、名声和影响力。但太阳越亮，影子越黑。此时最忌讳吝啬。", nutrient: "遏恶扬善，替天行道。" },
      en: { vision: "The midday sun hanging high, shining on all.", taste: "Possession in Great Measure. Zenith. You have resources and fame. But the brighter the sun, the darker the shadow. Do not be stingy.", nutrient: "Curb evil, promote good." }
    },
    { char: '䷎', type: 'glyph', 
      cn: { vision: "巍峨的高山，把自己埋在地下。", taste: "谦卦。藏锋。有实力但不炫耀。这是易经中唯一六爻皆吉的卦。把可能会遭到的嫉妒，都用土埋掉。", nutrient: "削减多余，填补不足。" },
      en: { vision: "A majestic mountain burying itself under the earth.", taste: "Modesty. Hiding the edge. Strength without showing off. The only hexagram where every line is auspicious. Bury the jealousy.", nutrient: "Reduce excess, fill the void." }
    },
    { char: '䷏', type: 'glyph', 
      cn: { vision: "春雷在大地上轰鸣，万物苏醒。", taste: "豫卦。共鸣。你的能量像雷声一样具有感染力。顺应时势，让大家跟着你的节奏动起来。", nutrient: "顺势而动，建功立业。" },
      en: { vision: "Spring thunder roaring over the earth.", taste: "Enthusiasm. Resonance. Your energy is infectious like thunder. Move with the times, set the rhythm for others.", nutrient: "Move with the trend, build legacy." }
    },
    { char: '䷐', type: 'glyph', 
      cn: { vision: "沉入湖底的惊雷，隐而不发。", taste: "随卦。随缘。这不是无奈的放弃，而是高维的顺应。就像冲浪一样，你无法创造浪，只能等待浪。", nutrient: "放下我执，顺应流向。" },
      en: { vision: "Thunder sunken to the lake bottom, silent.", taste: "Following. Flow. Not helpless giving up, but high-dimensional adaptation. You cannot create the wave, only ride it.", nutrient: "Drop the ego, follow the flow." }
    },
    { char: '䷑', type: 'glyph', 
      cn: { vision: "精致的器皿中，生出了蠕动的虫子。", taste: "蛊卦。三尸。这不是外部的敌人，而是你体内的欲望、执念和昏沉（三尸虫）正在啃食元神。必须刮骨疗毒。", nutrient: "斩除三尸，还神清净。" },
      en: { vision: "Worms breeding in a refined vessel.", taste: "Corruption. Detox. The enemy is internal—desire, obsession, and lethargy eating your spirit. Radical cure is needed.", nutrient: "Remove the poison, purify the spirit." }
    },
    { char: '䷒', type: 'glyph', 
      cn: { vision: "大地之上的巨大湖泊，水位上涨。", taste: "临卦。降临。高维能量正在注入低维容器。这是一种压倒性的势能。趁着现在能量满格，赶紧做决定。", nutrient: "抓住当下，时不我待。" },
      en: { vision: "A massive lake rising above the earth.", taste: "Approach. Descent. High-dimensional energy pouring into a low-dimensional vessel. Overwhelming potential. Decide now.", nutrient: "Seize the moment, time waits for no one." }
    },
    { char: '䷓', type: 'glyph', 
      cn: { vision: "混沌中睁开的一只巨眼，波函数坍缩。", taste: "观卦。观测。你以为是你在看？不，是天道借你的五官在感知世界。你看向哪里，哪里就坍缩成现实。", nutrient: "神借人眼，你即创造。" },
      en: { vision: "A giant eye opening in chaos, wavefunction collapse.", taste: "Contemplation. Observation. Heaven perceives the world through your senses. Where you look, reality collapses.", nutrient: "God sees through you; you are creation." }
    },
    { char: '䷔', type: 'glyph', 
      cn: { vision: "上下颚咬合，中间有硬物。", taste: "噬嗑卦。障碍。想合二为一，中间偏偏有个骨头。不要绕过去，咬碎它！不仅要仁慈，更要雷霆手段。", nutrient: "明罚敕法，咬碎硬骨。" },
      en: { vision: "Jaws biting together, obstructed by something hard.", taste: "Biting Through. Obstacle. A bone stands between unity. Do not bypass it; crush it! Mercy needs thunderous action.", nutrient: "Enforce the law, crush the obstacle." }
    },
    { char: '䷕', type: 'glyph', 
      cn: { vision: "山脚下的野火，映照着花草。", taste: "贲卦。文饰。本质虽然重要，但没有形式的真理是无法传播的。你需要一点“无用”的美学，来包装太硬的内核。", nutrient: "文质彬彬，恰到好处。" },
      en: { vision: "Wildfire at the foot of the mountain, illuminating flowers.", taste: "Grace. Adornment. Truth without form cannot spread. You need aesthetics to package the hard core.", nutrient: "Balance substance with style." }
    },
    { char: '䷖', type: 'glyph', 
      cn: { vision: "高山崩塌，只剩下最后一点果实。", taste: "剥卦。去伪。一切都在剥落。不要试图挽回那些注定要走的东西。保护好那最后一点良知（硕果）。", nutrient: "厚下安宅，守护硕果。" },
      en: { vision: "Mountain collapsing, only the last fruit remains.", taste: "Splitting Apart. Stripping. Let go of what is destined to leave. Protect the last fruit of conscience.", nutrient: "Strengthen the base, guard the core." }
    },
    { char: '䷗', type: 'glyph', 
      cn: { vision: "寒冬至极，地底深处的一丝微温。", taste: "复卦。重启。这是一个极微小的开始，甚至还没发芽，只是动了一下念头。但这一个念头，就是天地之心。", nutrient: "闭关修养，静待阳生。" },
      en: { vision: "Deep winter, a trace of warmth underground.", taste: "Return. Reboot. A tiny beginning, just a thought stirring. But this thought is the heart of the universe.", nutrient: "Rest and retreat, await the rebirth." }
    },
    // 25. ䷘ 无妄 (Innocence) - 双重解读版
    { char: '䷘', type: 'glyph', 
      cn: [
          // 解读 A: 通义版 (清算)
          { 
            vision: "晴空霹雳，被雷击中的人。", 
            taste: "无妄卦。清算。你以为这是飞来横祸（无妄之灾），其实这是天道的纠错机制。你在为过去的无知买单。", 
            nutrient: "臣服因果，不辩不怨。" 
          },
          // 解读 B: 实修版 (天命)
          { 
            vision: "晴空霹雳，未曾预料的震击。", 
            taste: "无妄。天命。这不是飞来横祸，而是天道在校准你的坐标。当你偏离了‘真’，现实就会给你一个‘妄’的反馈。不要用大脑计算得失，回到当下的直觉。", 
            nutrient: "不耕获，不菑涉。只问耕耘，不问收获。" 
          }
      ],
      en: { vision: "To be translated...", taste: "To be translated...", nutrient: "To be translated..." }
    },
    { char: '䷙', type: 'glyph', 
      cn: { vision: "巍峨的高山肚子里，藏着整片天空。", taste: "大畜卦。内存。你的容量不仅要装下自己的喜怒哀乐，还要装下古往今来的智慧。把你也变成一座数据库。", nutrient: "海纳百川，扩充内存。" },
      en: { vision: "Heaven hidden inside a majestic mountain.", taste: "The Taming Power of the Great. Memory. Hold not just your emotions, but ancient wisdom. Become a database.", nutrient: "Absorb all, expand capacity." }
    },
    { char: '䷚', type: 'glyph', 
      cn: { vision: "一张巨大的、张开的嘴。", taste: "颐卦。吞吐。人体的本质就是一根管子。不仅要注意你吃了什么（信息），更要注意你吐出了什么（言语）。", nutrient: "慎言语，节饮食。" },
      en: { vision: "A giant, open mouth.", taste: "The Corners of the Mouth. Nourishment. The body is a tube. Watch what you eat (info) and watch what you say (speech).", nutrient: "Watch your words, control your diet." }
    },
    { char: '䷛', type: 'glyph', 
      cn: { vision: "洪水淹没了枯树，房梁弯曲欲折。", taste: "大过卦。重负。凡人的肉身难以承载过载的天意。这确实是压力极大的一刻，但这也说明你是栋梁。", nutrient: "独立不惧，扛起重任。" },
      en: { vision: "Flood drowning a withered tree, a bending beam.", taste: "Preponderance of the Great. Overload. Mortal flesh struggling with Divine Will. Extreme pressure proves you are the pillar.", nutrient: "Stand alone, shoulder the weight." }
    },
    { char: '䷜', type: 'glyph', 
      cn: { vision: "重重深渊，水流湍急。", taste: "坎卦。习坎。只有心是通的（维心亨）。在险境中，不要试图爬上去，而是要像水一样流过去。保持流动。", nutrient: "行险而不失其信。" },
      en: { vision: "Abyss upon abyss, rushing water.", taste: "The Abysmal. Danger. Only the heart connects. Do not try to climb out; flow through it like water. Keep moving.", nutrient: "Flow through danger with faith." }
    },
    { char: '䷝', type: 'glyph', 
      cn: { vision: "依附在木头上的火焰，燃烧殆尽。", taste: "离卦。附丽。文明是脆弱的，光亮需要燃料。你现在的光芒，消耗的是什么？寻找可持续的燃料（道）。", nutrient: "借假修真，薪尽火传。" },
      en: { vision: "Fire clinging to wood, burning out.", taste: "The Clinging. Fire. Light needs fuel. What are you consuming to shine? Find the sustainable fuel (Tao).", nutrient: "Use the transient to cultivate the eternal." }
    },

    // --- 下经 (Lower Canon) ---
    { char: '䷞', type: 'glyph', 
      cn: { vision: "神经末梢的电火花，盐在水中溶解。", taste: "咸卦。通电。这是一种瞬间的、生物性的共振。它是美好的，证明你还活着。享受这种酥麻，但不要沉溺。", nutrient: "感知电流，但不执着。" },
      en: { vision: "Neural sparks; salt dissolving in water.", taste: "Influence. Resonance. A biological, instant connection. It proves you are alive. Enjoy the spark, but do not attach.", nutrient: "Feel the current, let it pass." }
    },
    { char: '䷟', type: 'glyph', 
      cn: { vision: "日月得天而能久照，四时变化而能久成。", taste: "恒卦。动态平衡。恒不是一成不变的死寂，而是像心脏一样持续跳动。在变动中保持那个不变的内核。", nutrient: "立不易方，初心不改。" },
      en: { vision: "Sun and moon endure by their cycles.", taste: "Duration. Dynamic Equilibrium. Constancy is not stasis, but a beating heart. Keep the core unchanged amidst change.", nutrient: "Stand firm, keep the original intent." }
    },
    { char: '䷠', type: 'glyph', 
      cn: { vision: "高山逼近天际，却永远触不到天。", taste: "遁卦。隐退。小人当道，阳气消退。这不是逃跑，而是为了保存火种。距离产生安全。", nutrient: "远小人，不恶而严。" },
      en: { vision: "Mountain reaching for the sky, never touching.", taste: "Retreat. Withdrawal. Shadows grow; light recedes. Not escaping, but preserving the spark. Distance creates safety.", nutrient: "Keep distance from the petty, with dignity." }
    },
    // 34. ䷡ 大壮 (Great Power) - 双重解读版
    { char: '䷡', type: 'glyph', 
      cn: [
          // 解读 A: 通义版 (暴走)
          { 
            vision: "雷在天上轰鸣，阳气极盛。", 
            taste: "大壮卦。暴走。能量过剩。公羊撞篱笆，角被卡住。你现在力量很大，但如果不用智慧控制，就会变成破坏力。", 
            nutrient: "非礼弗履，控制力量。" 
          },
          // 解读 B: 实修版 (止戈)
          { 
            vision: "雷在天上轰鸣，力量溢出的时刻。", 
            taste: "大壮。止戈。真正的强壮不是展示肌肉，而是‘能而不用’。公羊撞篱笆是因为不懂规矩。当你拥有雷霆手段时，更需要菩萨心肠。", 
            nutrient: "用礼法（形式）来约束原本狂野的能量。" 
          }
      ],
      en: { vision: "To be translated...", taste: "To be translated...", nutrient: "To be translated..." }
    },
    { char: '䷢', type: 'glyph', 
      cn: { vision: "旭日从大地上升起，光芒万丈。", taste: "晋卦。显化。才华被看见，得到赏识。像太阳一样无私地发光，不要吝啬你的光芒，这是你的高光时刻。", nutrient: "自昭明德，顺势而上。" },
      en: { vision: "Sun rising from the earth, radiating light.", taste: "Progress. Manifestation. Talent is seen and appreciated. Shine selflessly like the sun. This is your highlight moment.", nutrient: "Shine your virtue, rise with the trend." }
    },
    { char: '䷣', type: 'glyph', 
      cn: { vision: "太阳落入地平线之下，黑暗降临。", taste: "明夷卦。晦暗。环境黑暗，才华受压。把光芒藏起来，内心保持光明。不要在这个时候做英雄。", nutrient: "韬光养晦，用晦而明。" },
      en: { vision: "Sun sinking below the horizon, darkness falls.", taste: "Darkening of the Light. Eclipse. Talent suppressed. Hide your light, keep the inner flame. Do not be a hero now.", nutrient: "Hide your brilliance, survive the dark." }
    },
    { char: '䷤', type: 'glyph', 
      cn: { vision: "火在风中燃烧，温暖内室。", taste: "家人卦。核心圈。外面的世界再大，能量的源头在内部。各司其职，言行一致。修身齐家。", nutrient: "言有物，行有恒。" },
      en: { vision: "Fire burning in the wind, warming the home.", taste: "The Family. Inner Circle. The energy source is within. Fulfill your role. Words have substance, actions have constancy.", nutrient: "Cultivate the self, harmonize the core." }
    },
    { char: '䷥', type: 'glyph', 
      cn: { vision: "火向上烧，水向下流，背道而驰。", taste: "睽卦。平行宇宙。意见不合是常态。不要强求一致，要在分歧中寻找那个微小的共识点。", nutrient: "同而异，异中求同。" },
      en: { vision: "Fire burns up, water flows down; opposing paths.", taste: "Opposition. Parallel universes. Disagreement is normal. Don't force unity; find the small common ground in division.", nutrient: "Seek unity in diversity." }
    },
    { char: '䷦', type: 'glyph', 
      cn: { vision: "高山在前，深水在后，进退两难。", taste: "蹇卦。标准。艰难不是为了阻挡你，而是为了筛选。天道设立了极高的门槛，只有达标的人，才能通过。", nutrient: "提升维度，达到标准。" },
      en: { vision: "Mountain in front, abyss behind; dilemma.", taste: "Obstruction. Standard. Hardship is a filter, not a block. Heaven sets a high bar; only the worthy pass.", nutrient: "Raise your dimension, meet the standard." }
    },
    { char: '䷧', type: 'glyph', 
      cn: { vision: "春雷发动，雨水降临，坚冰消融。", taste: "解卦。释放。危机解除了。解开束缚你的那些细小羁绊（拇）。如果不做新事，就休息；如果要做，就早做。", nutrient: "赦过宥罪，轻装上阵。" },
      en: { vision: "Thunder strikes, rain falls, ice melts.", taste: "Deliverance. Release. The crisis breaks. Untie the small knots binding you. If nothing to do, rest; if acting, act early.", nutrient: "Forgive errors, move light." }
    },
    { char: '䷨', type: 'glyph', 
      cn: { vision: "挖深脚下的土，去堆高山顶。", taste: "损卦。献祭。损下益上。为了灵性的提升，必须牺牲物质的享受。这是能量守恒定律。你愿意拿什么来换？", nutrient: "惩忿窒欲，自我修剪。" },
      en: { vision: "Digging earth to heighten the mountain.", taste: "Decrease. Sacrifice. Loss for gain. To rise spiritually, sacrifice the material. Energy conservation. What will you trade?", nutrient: "Curb desire, prune the self." }
    },
    { char: '䷩', type: 'glyph', 
      cn: { vision: "风雷激荡，万物疯长。", taste: "益卦。增益。宇宙的能量正在灌注给你。助人为乐，见善则迁。你的每一次付出，都会得到加倍的回报。", nutrient: "见善则迁，有过则改。" },
      en: { vision: "Wind and thunder, things growing wildly.", taste: "Increase. Gain. Cosmic energy pours in. Help others. Every contribution returns multiplied.", nutrient: "Follow the good, correct the bad." }
    },
    { char: '䷪', type: 'glyph', 
      cn: { vision: "巨大的湖水在天上决口，暴雨将至。", taste: "夬卦。决断。小人（阴气）还剩最后一点，必须公开决裂。积蓄力量，一举清除隐患。不要心软。", nutrient: "施禄及下，居德则忌。" },
      en: { vision: "A lake bursting in the sky, impending storm.", taste: "Breakthrough. Resolution. One shadow remains; break it openly. Accumulate strength, remove the rot. No mercy.", nutrient: "Distribute wealth, avoid pride." }
    },
    // 44. ䷫ 姤 (Coming to Meet) - 双重状态
    { char: '䷫', type: 'glyph', 
      cn: [
          // 解读 A: 通义版 (遭遇/业力)
          { 
            vision: "天下有风，不期而遇。", 
            taste: "姤卦。遭遇。这是业力的碰撞。不管是好的邂逅还是坏的遭遇，都是为了让你觉察。勿用取女（不要被表象迷惑）。", 
            nutrient: "品物咸章，注意界限。" 
          },
          // 解读 B: 实修版 (干涉/物理)
          { 
            vision: "天下有风，无形可见，随势而转。", 
            taste: "姤卦。干涉。天地相遇，品物咸章。这是时空的涟漪在回荡时相遇，形成了漂亮的干涉条纹。看似偶然的相遇，其实是波函数的必然叠加。", 
            nutrient: "隐藏的势力强大，站在时空之外观察。" 
          }
      ],
      en: [
          // Version A: Encounter (Karma)
          { 
            vision: "Wind blowing under heaven, unexpected meeting.", 
            taste: "Coming to Meet. Encounter. Karmic collision. Whether good or bad, every encounter is for your awareness. Do not be misled by appearances (Do not take the maiden).", 
            nutrient: "Discriminate clearly, keep boundaries." 
          },
          // Version B: Interference (Physics)
          { 
            vision: "Wind shapes itself by what it meets; visible invisibility.", 
            taste: "Coming to Meet. Interference. Heaven meets Earth. Ripples of spacetime collide to form beautiful interference patterns. What seems accidental is the superposition of waves.", 
            nutrient: "Hidden forces are strong; observe from outside time." 
          }
      ]
    },
    // 45. ䷬ 萃 (Gathering Together) - 双重状态
    { char: '䷬', type: 'glyph', 
      cn: [
          // 解读 A: 通义版 (聚合)
          { 
            vision: "泽水汇聚在大地之上，滋养万物。", 
            taste: "萃卦。聚集。鲤鱼汇聚在深渊，精英汇聚在朝堂。这是一种向心力。正如水往低处流，人往有能量的地方走。", 
            nutrient: "顺应人心，积聚资源。" 
          },
          // 解读 B: 实修版 (淬炼)
          { 
            vision: "泽水渗透进大地，深沉而宁静。", 
            taste: "萃卦。淬炼。萃不仅是聚集，更是‘粹’（纯粹）。将散乱的精神（泽）注入肉体的大地（坤），如水淬火，去粗取精。这是一种灵性的升华与净化。", 
            nutrient: "去除杂质，提纯生命。" 
          }
      ],
      // 英文我也为你做好了双重翻译
      en: { 
          vision: "Lake gathering over the earth.", 
          taste: "Gathering Together. Essence. Distilling spirit into the body. Quenching fire with water. Spiritual sublimation.", 
          nutrient: "Remove impurities, purify life." 
      }
    },
    { char: '䷭', type: 'glyph', 
      cn: { vision: "种子在地下发芽，长成大树。", taste: "升卦。晋升。这是顺势而为的生长，不是拔苗助长。积小成高。不要犹豫，去见那个你想见的大人物。", nutrient: "积小成高，顺势而上。" },
      en: { vision: "Seed sprouting underground, growing into a tree.", taste: "Pushing Upward. Ascent. Natural growth, not forced. Small steps lead high. Go see the person you need to see.", nutrient: "Accumulate small, rise with the trend." }
    },
    { char: '䷮', type: 'glyph', 
      cn: { vision: "枯竭的湖底，露出了坚硬的石头。", taste: "困卦。绝地。天道正在榨干你最后一点世俗的依赖（水），为了逼出你的元神。困兽犹斗，借假修真。", nutrient: "致命遂志，证明价值。" },
      en: { vision: "Dried lake bed revealing hard rocks.", taste: "Oppression. Exhaustion. Heaven dries up your dependencies to force out your spirit. Fight in the corner, cultivate the true self.", nutrient: "Risk life for will, prove your worth." }
    },
    { char: '䷯', type: 'glyph', 
      cn: { vision: "深深的古井，汲取地下水。", taste: "井卦。源头。改邑不改井。无论外在环境怎么变，你内在的核心价值（井水）是不变的。向内挖掘。", nutrient: "井冽寒泉，养得其人。" },
      en: { vision: "Deep ancient well, drawing water.", taste: "The Well. Source. Cities change, the well remains. Your core value is immutable. Dig inward.", nutrient: "Clear cold water, nourish the people." }
    },
    // 49. ䷰ 革 (Revolution) - 双重状态
    { char: '䷰', type: 'glyph', 
      cn: [
          // 解读 A: 通义版 (变革)
          { 
            vision: "泽中有火，水火不容。", 
            taste: "革卦。洗牌。旧的秩序已经腐朽，必须彻底推翻。这不是改良，这是革命。像蛇蜕皮一样，虽然痛苦，但必须经历。", 
            nutrient: "顺天应人，彻底改革。" 
          },
          // 解读 B: 实修版 (相变)
          { 
            vision: "泽中有火，水化为汽，体积暴涨。", 
            taste: "革卦。相变。你体内的三尸虫（欲望、情绪、妄念）是低能态的淤泥。用心火烧开它！这不是毁灭，这是物理学上的“相变”。沉重的液体瞬间转化为高压蒸汽，那是推动命运齿轮的磅礴动力。", 
            nutrient: "炼化阴魔，转化为炁。" 
          }
      ],
      en: { 
          vision: "Fire in the lake, water turning to steam.", 
          taste: "Revolution. Phase Change. Boil the mud of desire with heart-fire. Not destruction, but physics. Liquid becomes steam, driving destiny.", 
          nutrient: "Transmute demons, turn into Qi." 
      }
    },
    // 50. ䷱ 鼎 (The Cauldron) - 双重状态
    { char: '䷱', type: 'glyph', 
      cn: [
          // 解读 A: 通义版 (更新)
          { 
            vision: "青铜重器，烹煮牺牲。", 
            taste: "鼎卦。重器。革故鼎新。把生的煮成熟的，把硬的煮成软的。这是文明的转化。你需要一个稳固的容器，去承载新的使命。", 
            nutrient: "稳重行事，转化能量。" 
          },
          // 解读 B: 实修版 (定型)
          { 
            vision: "稳固的三足器皿，捕获了升腾的蒸汽。", 
            taste: "鼎卦。定型。革卦引发了剧烈的“相变”，产生了巨大的高能蒸汽（元气）。现在，你需要一个绝对稳固的容器（鼎）来捕获这股能量，防止它耗散。将无形的“气”凝结为有形的“丹”。", 
            nutrient: "正位凝命，聚气成丹。" 
          }
      ],
      en: { 
          vision: "A stable cauldron capturing rising steam.", 
          taste: "The Cauldron. Crystallization. Capture the high-energy steam from the change. Don't let it dissipate. Condense the invisible Qi into a visible Pill (Dan).", 
          nutrient: "Correct position, solidify destiny." 
      }
    },
    { char: '䷲', type: 'glyph', 
      cn: { vision: "重重雷声，震惊百里。", taste: "震卦。惊醒。不仅是一次震动，是接二连三的冲击。这是在测试你的定力。谈笑自若者胜。", nutrient: "恐惧修省，处变不惊。" },
      en: { vision: "Rolling thunder, shocking a hundred miles.", taste: "The Arousing. Shock. Successive shocks test your stability. He who laughs amidst the storm wins.", nutrient: "Inspect self in fear, remain calm." }
    },
    { char: '䷳', type: 'glyph', 
      cn: { vision: "重重山峦，背靠背。", taste: "艮卦。止念。行其庭，不见其人。不仅身体停下，念头也要停下。在这个喧嚣的世界，拥有停止的能力是最高的智慧。", nutrient: "思不出位，安分守己。" },
      en: { vision: "Mountain upon mountain, back to back.", taste: "Keeping Still. Meditation. Still the body, still the mind. The ability to stop is the highest wisdom in a noisy world.", nutrient: "Stay in your lane, find inner peace." }
    },
    { char: '䷴', type: 'glyph', 
      cn: { vision: "树木在山上缓慢生长。", taste: "渐卦。慢。像大雁飞行一样有序，像树木生长一样扎实。不要急于求成，每一步都要踩实。这是最快的捷径。", nutrient: "居贤德善俗，稳步前行。" },
      en: { vision: "Trees growing slowly on a mountain.", taste: "Development. Gradual Progress. Orderly like flying geese, solid like trees. Don't rush. Steady steps are the fastest shortcut.", nutrient: "Improve virtue, move steadily." }
    },
    { char: '䷵', type: 'glyph', 
      cn: { vision: "雷震动了沼泽，冲动的结合。", taste: "归妹卦。错位。急于求成，位置不正。这是欲望驱动的行动，往往结果不好。知道终点有弊端，就要慎重开始。", nutrient: "永终知敝，慎重选择。" },
      en: { vision: "Thunder shaking the marsh, impulsive union.", taste: "The Marrying Maiden. Misplaced. Driven by desire, out of order. If the end is flawed, be cautious at the start.", nutrient: "Know the end, choose wisely." }
    },
    // 55. ䷶ 丰 (Abundance) - 双重解读版
    { char: '䷶', type: 'glyph', 
      cn: [
          // 解读 A: 通义版 (正午)
          { 
            vision: "雷电交加，日中见斗。", 
            taste: "丰卦。正午。盛大到了极点，太阳到了最高处，黑暗也就开始了。在最辉煌的时候，要看到阴影。", 
            nutrient: "折狱致刑，居安思危。" 
          },
          // 解读 B: 实修版 (审判)
          { 
            vision: "日中见斗，光明中隐藏的黑暗。", 
            taste: "丰卦。审判。这是能量密度最大的时刻，也是阴影最深的时候。你需要像正午的太阳一样，不仅要照亮荣耀，更要照亮罪恶。", 
            nutrient: "借用巅峰能量，进行彻底的自我清算。" 
          }
      ],
      en: { vision: "To be translated...", taste: "To be translated...", nutrient: "To be translated..." }
    },
    { char: '䷷', type: 'glyph', 
      cn: { vision: "山上有火，火势蔓延，不停留。", taste: "旅卦。宿命。你不仅仅是一个过客，你是被命运驱使的行者。这种漂泊感不是偶然，而是你剧本里必须经历的一章。", nutrient: "认领宿命，借假修真。" },
      en: { vision: "Fire on the mountain, spreading without rest.", taste: "The Wanderer. Destiny. You are a traveler driven by fate. This drifting is not accidental, but a chapter you must live.", nutrient: "Accept fate, find truth in the journey." }
    },
    { char: '䷸', type: 'glyph', 
      cn: { vision: "风随风，无孔不入。", taste: "巽卦。渗透。柔顺的坚持。不要正面硬刚，要像风一样寻找缝隙，反复申明，潜移默化地改变现状。", nutrient: "申命行事，柔能克刚。" },
      en: { vision: "Wind following wind, penetrating everywhere.", taste: "The Gentle. Penetration. Flexible persistence. Don't crash; find the cracks like wind. Subtle change.", nutrient: "Repeated commands, softness overcomes hard." }
    },
    { char: '䷹', type: 'glyph', 
      cn: { vision: "两泽相连，互相滋润。", taste: "兑卦。说服。喜悦是可以传染的。通过沟通来化解隔阂。不是用逻辑征服，而是用情绪感染。", nutrient: "朋友讲习，分享喜悦。" },
      en: { vision: "Two lakes joined, nourishing each other.", taste: "The Joyous. Persuasion. Joy is contagious. Dissolve barriers through connection. Infect with emotion, not just logic.", nutrient: "Share wisdom, spread joy." }
    },
    { char: '䷺', type: 'glyph', 
      cn: { vision: "风吹水面，波纹扩散。", taste: "涣卦。消融。僵化的局面被打破了，但也意味着凝聚力散了。这时候需要信仰（宗庙）来重新凝聚人心。", nutrient: "享于帝立庙，凝聚人心。" },
      en: { vision: "Wind over water, ripples spreading.", taste: "Dispersion. Dissolution. Rigidity breaks, but cohesion fades. You need faith (Temples) to reunite hearts.", nutrient: "Establish faith, gather the people." }
    },
    { char: '䷻', type: 'glyph', 
      cn: { vision: "泽上有水，水满则溢。", taste: "节卦。边界。竹子有节才能长高。自由不是无限的，给欲望设定边界，制定规则，否则会溢出成灾。", nutrient: "制数度，议德行。" },
      en: { vision: "Water over lake, full to overflowing.", taste: "Limitation. Boundaries. Bamboo needs nodes to grow tall. Freedom needs limits. Set rules for desire.", nutrient: "Set limits, discuss virtue." }
    },
    { char: '䷼', type: 'glyph', 
      cn: { vision: "风吹在泽面上，信实如期。", taste: "中孚卦。共振。诚信能感动猪和鱼。不需要任何技巧，只有一颗真心。鹤鸣在阴，其子和之。", nutrient: "议狱缓死，以诚待人。" },
      en: { vision: "Wind over lake, faithful as promised.", taste: "Inner Truth. Resonance. Sincerity moves even pigs and fish. No tricks, just a true heart. The crane calls, the young answers.", nutrient: "Judge with mercy, treat with truth." }
    },
    { char: '䷽', type: 'glyph', 
      cn: { vision: "雷声被山挡住，飞鸟遗音。", taste: "小过卦。低飞。现在不宜做大事，只宜做小事。不宜上，宜下。保持谦卑，稍微过度一点点的恭敬是安全的。", nutrient: "行过乎恭，丧过乎哀。" },
      en: { vision: "Thunder blocked by mountain, bird's cry.", taste: "Preponderance of the Small. Low flying. Do small things, not big. Stay low. Excessive humility is safe now.", nutrient: "Exceed in respect, exceed in sorrow." }
    },
    { char: '䷾', type: 'glyph', 
      cn: { vision: "水在火上，阴阳调和。", taste: "既济卦。圆满。事情做成了，那是完美的瞬间。但初吉终乱，在这个完美的时刻，要防备即将到来的混乱。", nutrient: "思患预防，守住成果。" },
      en: { vision: "Water over fire, perfect balance.", taste: "After Completion. Fulfillment. A perfect moment. But chaos follows order. Guard against the coming decline.", nutrient: "Prevent trouble, guard the fruit." }
    },
    { char: '䷿', type: 'glyph', 
      cn: { vision: "火在水上，永不相交的平行线。", taste: "未济卦。无限游戏。圆满即是死亡。保持一点“未完成”的饥饿感，保持一点遗憾，那是你活着的驱动力。", nutrient: "生生不息，永不抵达。" },
      en: { vision: "Fire over water, parallel lines.", taste: "Before Completion. Infinite Game. Completion is death. Keep the hunger of 'not yet'. Imperfection drives life.", nutrient: "Life goes on, never arrive." }
    },
    // ============================================================
    // 第二部分：梵音、卢恩、金石、神兽 (The Archetypes)
    // ============================================================
    
    // --- 梵音种子 (Sanskrit Bija) ---
    { char: 'ॐ', type: 'glyph', 
      cn: { vision: "宇宙原音 Aum。", taste: "万物的源头。在混乱中，回归那个最初的震动。", nutrient: "回归本源，合一冥想。" },
      en: { vision: "The Primordial Sound Aum.", taste: "The Source. Amidst chaos, return to the first vibration.", nutrient: "Return to source, meditate on Oneness." }
    },
    { char: 'ह्रीः', type: 'glyph', 
      cn: { vision: "心轮种子 Hrih。", taste: "慈悲与热度。这是心脏跳动的节奏，温暖而不灼人。", nutrient: "敞开心扉，慈悲为怀。" },
      en: { vision: "Heart Chakra Seed Hrih.", taste: "Compassion and warmth. The rhythm of the heartbeat, warm but not scorching.", nutrient: "Open your heart, embrace compassion." }
    },
    { char: 'हूँ', type: 'glyph', 
      cn: { vision: "金刚种子 Hum。", taste: "斩断妄念的利剑。对于干扰你的杂音，发出一声断喝。", nutrient: "斩断纠缠，无所畏惧。" },
      en: { vision: "Vajra Seed Hum.", taste: "The sword that cuts delusion. A shout to shatter the noise disturbing you.", nutrient: "Cut the cords, fear nothing." }
    },
    { char: 'श्रीं', type: 'glyph', 
      cn: { vision: "财富种子 Shrim。", taste: "丰盛的光芒。允许自己从容地接受宇宙的馈赠。", nutrient: "接纳丰盛，享受美好。" },
      en: { vision: "Wealth Seed Shrim.", taste: "The light of abundance. Allow yourself to accept the universe's gifts gracefully.", nutrient: "Accept abundance, enjoy beauty." }
    },
    { char: 'क्षं', type: 'glyph', 
      cn: { vision: "眉心轮种子 Ksham。", taste: "第三只眼的洞见。透过表象，看到事物发展的轨迹。", nutrient: "洞察因果，预见未来。" },
      en: { vision: "Third Eye Seed Ksham.", taste: "Insight. Seeing through the veil to the trajectory of things.", nutrient: "See the cause, foresee the future." }
    },
    { char: 'भ्रूं', type: 'glyph', 
      cn: { vision: "坚固的坛城 Bhrum。", taste: "神圣的结界。在这个范围内，你是安全的，你是主宰。", nutrient: "建立结界，守护领地。" },
      en: { vision: "The Mandala Bhrum.", taste: "Sacred boundary. Within this circle, you are safe; you are the master.", nutrient: "Build boundaries, guard your realm." }
    },
    { char: 'ऐं', type: 'glyph', 
      cn: { vision: "辩才天女种子 Aim。", taste: "纯粹的智慧与创造力。打开灵感的闸门。", nutrient: "开启智慧，辩才无碍。" },
      en: { vision: "Saraswati Seed Aim.", taste: "Pure wisdom and creativity. Open the floodgates of inspiration.", nutrient: "Unlock wisdom, speak with flow." }
    },
    { char: 'दुं', type: 'glyph', 
      cn: { vision: "难近母种子 Dum。", taste: "像堡垒一样的保护力。当你在危险中时，这是你的盾牌。", nutrient: "驱除恐惧，获得庇护。" },
      en: { vision: "Durga Seed Dum.", taste: "Fortress-like protection. Your shield in times of danger.", nutrient: "Dispel fear, seek refuge." }
    },
    { char: 'क्रीं', type: 'glyph', 
      cn: { vision: "卡莉女神种子 Krim。", taste: "激烈地切断。斩断旧的自我，让新的能量爆发。", nutrient: "彻底转化，雷厉风行。" },
      en: { vision: "Kali Seed Krim.", taste: "Radical severance. Cut off the old self to let new energy explode.", nutrient: "Radical transformation, act swiftly." }
    },
    { char: 'खं', type: 'glyph', 
      cn: { vision: "虚空种子 Kham。", taste: "绝对的空间。只有腾出空间，新的事物才能进来。", nutrient: "清空杂念，虚位以待。" },
      en: { vision: "Void Seed Kham.", taste: "Absolute Space. Only by making space can the new enter.", nutrient: "Empty the mind, wait in the void." }
    },

    // --- 卢恩符文 (Runes) ---
    { char: 'ᛉ', type: 'glyph', 
      cn: { vision: "守护之角 Algiz。", taste: "神圣的保护。你被更高的力量守护着，像麋鹿的角一样敏锐。", nutrient: "连接高维，寻求庇护。" },
      en: { vision: "Elk Sedge Algiz.", taste: "Divine protection. You are guarded by higher powers, sharp as elk antlers.", nutrient: "Connect higher, seek shelter." }
    },
    { char: 'ᚠ', type: 'glyph', 
      cn: { vision: "财富之牛 Fehu。", taste: "能量必须流动起来，积蓄只会导致腐坏。", nutrient: "分享能量，创造价值。" },
      en: { vision: "Cattle Fehu.", taste: "Mobile wealth. Energy must flow; hoarding leads to rot.", nutrient: "Share energy, create value." }
    },
    { char: 'ᚦ', type: 'glyph', 
      cn: { vision: "雷神之锤 Thurisaz。", taste: "防御性的破坏。对于入侵者，要像荆棘一样反击。", nutrient: "建立边界，果断反击。" },
      en: { vision: "Giant Thurisaz.", taste: "Defensive destruction. Strike back at intruders like thorns.", nutrient: "Build boundaries, strike back." }
    },
    { char: 'ᚨ', type: 'glyph', 
      cn: { vision: "神之口 Ansuz。", taste: "留意那些偶然听到的信息，那是给你的信号。", nutrient: "接收信号，真诚沟通。" },
      en: { vision: "God Ansuz.", taste: "Divine breath. Pay attention to overheard messages; they are signals.", nutrient: "Receive signals, speak truth." }
    },
    { char: 'ᛃ', type: 'glyph', 
      cn: { vision: "丰收之年 Jera。", taste: "因果循环。你现在收获的是你过去种下的。耐心一点。", nutrient: "顺应周期，耐心等待。" },
      en: { vision: "Harvest Jera.", taste: "Cycles. You harvest now what you sowed before. Be patient.", nutrient: "Follow the cycle, wait patiently." }
    },
    { char: 'ᛞ', type: 'glyph', 
      cn: { vision: "黎明之光 Dagaz。", taste: "彻底的觉醒。黑夜已经过去，不要再回头看。", nutrient: "拥抱光明，彻底转变。" },
      en: { vision: "Day Dagaz.", taste: "Dawn. Radical awakening. The night is over; do not look back.", nutrient: "Embrace light, total shift." }
    },
    { char: 'ᚲ', type: 'glyph', 
      cn: { vision: "知识火把 Kenaz。", taste: "黑暗中的光。你现在看不清是因为你不明理。去学习。", nutrient: "寻求真理，照亮黑暗。" },
      en: { vision: "Torch Kenaz.", taste: "The Beacon. Light in the dark. Confusion comes from ignorance. Learn.", nutrient: "Seek truth, light the dark." }
    },
    { char: 'ᛏ', type: 'glyph', 
      cn: { vision: "正义之矛 Tiwaz。", taste: "为了更高的目标，你可能需要牺牲一部分个人利益。", nutrient: "坚持正义，勇于牺牲。" },
      en: { vision: "Tyr Tiwaz.", taste: "Justice. For the higher goal, sacrifice personal gain.", nutrient: "Uphold justice, brave sacrifice." }
    },

    // --- 金石本字 (Oracle Glyphs) ---
    { char: '屮', type: 'glyph', 
      cn: { vision: "草木刚长出来的样子。", taste: "这是最古老的生机。虽然微弱，但它是向上的。", nutrient: "顽强生长，破土而出。" },
      en: { vision: "A sprout emerging.", taste: "Sprout. Ancient vitality. Weak but upward.", nutrient: "Grow stubbornly, break through." }
    },
    { char: '屾', type: 'glyph', 
      cn: { vision: "两座山并立。", taste: "不仅要稳固，还要有高度。你也需要一个势均力敌的伙伴。", nutrient: "高山仰止，并驾齐驱。" },
      en: { vision: "Two mountains standing together.", taste: "Twin Peaks. Stability and height. You need a partner of equal stature.", nutrient: "Stand tall, walk together." }
    },
    { char: '淼', type: 'glyph', 
      cn: { vision: "无边无际的水面。", taste: "浩渺。你的格局需要打开，不要局限在小河沟里。", nutrient: "心胸浩大，包容万物。" },
      en: { vision: "Endless expanse of water.", taste: "Vastness. Open your perspective. Do not stay in the ditch.", nutrient: "Be vast, encompass all." }
    },
    { char: '焱', type: 'glyph', 
      cn: { vision: "光华灿烂的火焰。", taste: "极致的热情。但这光芒稍纵即逝，要抓住发光的时刻。", nutrient: "燃烧生命，绽放光华。" },
      en: { vision: "Brilliant flames.", taste: "Blaze. Extreme passion. It's fleeting; seize the moment to shine.", nutrient: "Burn bright, bloom now." }
    },
    { char: '垚', type: 'glyph', 
      cn: { vision: "堆积如山的高地。", taste: "积土成山。现在的成就源于过去的积累。基础极稳。", nutrient: "厚积薄发，稳如泰山。" },
      en: { vision: "High earth piled up.", taste: "Mound. Accumulated soil becomes a mountain. Success comes from accumulation.", nutrient: "Accumulate slowly, stand firm." }
    },
    { char: '爻', type: 'glyph', 
      cn: { vision: "阴阳交错的绳结。", taste: "变化的节点。世界是由关系构成的，而非实体。看清那个结。", nutrient: "理清关系，编织未来。" },
      en: { vision: "Intertwined knots of Yin and Yang.", taste: "Intertwine. Nodes of change. The world is made of relations, not objects. See the knot.", nutrient: "Clarify relations, weave the future." }
    },
    { char: '噩', type: 'glyph', 
      cn: { vision: "惊心动魄的震动。", taste: "震惊。打破平静的坏消息，其实是强制你改变的信号。", nutrient: "直面惊变，以此炼心。" },
      en: { vision: "Shocking vibration.", taste: "Startle. Bad news breaks the peace to force change.", nutrient: "Face the shock, temper the heart." }
    },
    { char: '卍', type: 'glyph', 
      cn: { vision: "旋转的太阳，吉祥的印记。", taste: "万得圆满。这是一种永恒的动态平衡。", nutrient: "功德圆满，吉祥如意。" },
      en: { vision: "Rotating sun, the auspicious mark.", taste: "The Swastika (Sun Wheel). Eternal dynamic equilibrium. All virtues gathered.", nutrient: "Merit fulfilled, good fortune." }
    },
    { char: '井', type: 'glyph', 
      cn: { vision: "固定的水源。", taste: "改邑不改井。有些东西是不能变的，它是你的根。", nutrient: "深挖一口，滋养一方。" },
      en: { vision: "A fixed water source.", taste: "The Well. The city changes, the well remains. Your root is immutable.", nutrient: "Dig deep, nourish the land." }
    },
    { char: '卜', type: 'glyph', 
      cn: { vision: "龟甲上的裂纹。", taste: "天垂象，见吉凶。答案已经显现，裂纹指明了方向。", nutrient: "相信征兆，果断行动。" },
      en: { vision: "Cracks on a turtle shell.", taste: "Divination. Heaven reveals signs. The answer is in the crack.", nutrient: "Trust the omen, act decisively." }
    },
    { char: '網', type: 'glyph', 
      cn: { vision: "天地间疏而不漏的罗网。", taste: "是束缚还是连接？看你是猎物还是猎人。", nutrient: "审视连接，布局谋篇。" },
      en: { vision: "A net between heaven and earth.", taste: "The Net. Bondage or connection? Depends if you are the prey or the hunter.", nutrient: "Examine connections, lay the plan." }
    },
    { char: '鼎', type: 'glyph', 
      cn: { vision: "青铜重器，烹煮牺牲。", taste: "革故鼎新。这是一种沉稳的变革力量。稳住核心，静待火候。", nutrient: "稳重行事，转化能量。" },
      en: { vision: "Bronze vessel cooking the sacrifice.", taste: "Cauldron. Transformation. Heavy stability. Hold the core, wait for the fire.", nutrient: "Act with weight, transform energy." }
    },
    { char: '門', type: 'glyph', 
      cn: { vision: "两扇关闭的门板。", taste: "界限与通道。门没有锁，推开它，就是一个新世界。", nutrient: "推门而入，跨越边界。" },
      en: { vision: "Two closed door panels.", taste: "The Gate. Boundary and passage. It's unlocked. Push it open to a new world.", nutrient: "Push the door, cross the border." }
    },
    { char: '車', type: 'glyph', 
      cn: { vision: "滚动的轮子，向前飞驰。", taste: "动力十足。你在一辆高速列车上，顺势而为。", nutrient: "承载重任，极速前进。" },
      en: { vision: "Rolling wheels speeding forward.", taste: "Chariot. Full power. You are on a high-speed train. Go with it.", nutrient: "Bear the weight, speed ahead." }
    },
    
    // --- 神兽真名 (Mythical Totems) ---
    { char: '龍', type: 'totem', 
      cn: { vision: "潜伏深渊，飞腾在天。", taste: "变幻莫测的能量。时机未到潜伏，时机一到飞升。", nutrient: "积蓄力量，待时而动。" },
      en: { vision: "Lurking in the abyss, soaring in the sky.", taste: "Dragon. Unpredictable energy. Hide when unripe, ascend when ready.", nutrient: "Accumulate power, await the moment." }
    },
    { char: '鳳', type: 'totem', 
      cn: { vision: "风中起舞的神鸟。", taste: "非梧桐不栖。这是高洁与重生的象征。", nutrient: "浴火重生，保持高洁。" },
      en: { vision: "Divine bird dancing in the wind.", taste: "Phoenix. Rest only on the finest tree. Symbol of nobility and rebirth.", nutrient: "Rebirth from fire, stay noble." }
    },
    { char: '龜', type: 'totem', 
      cn: { vision: "背负洛书的神龟。", taste: "慢但是稳。你的负担也是你的保护。长寿的秘诀是忍耐。", nutrient: "以慢制快，积蓄底蕴。" },
      en: { vision: "Divine turtle bearing the Luo Shu.", taste: "Tortoise. Slow but steady. Your burden is your shield. Endurance is key.", nutrient: "Win by slowness, build depth." }
    },
    { char: '虎', type: 'totem', 
      cn: { vision: "张口的老虎。", taste: "百兽之王。孤独的权威。你不需要讨好任何人。", nutrient: "独来独往，虎虎生威。" },
      en: { vision: "A tiger with open mouth.", taste: "Tiger. Solitary authority. You need not please anyone.", nutrient: "Walk alone, show your power." }
    },
    { char: '見', type: 'totem', 
      cn: { vision: "一只睁大的眼睛。", taste: "看见。真相一直在那里，只是你闭上了眼。", nutrient: "直面真相，洞察秋毫。" },
      en: { vision: "A wide-open eye.", taste: "Seeing. The truth is always there; you just closed your eyes.", nutrient: "Face the truth, see the detail." }
    },
    { char: '贔', type: 'glyph', 
      cn: { vision: "三座金山叠在一起。", taste: "极致的承载力。这是你能承受的极限，也是你的功德。", nutrient: "负重前行，积淀功德。" },
      en: { vision: "Three golden mountains stacked.", taste: "Bixi (Power). Extreme bearing capacity. Your limit is your merit.", nutrient: "Bear the weight, accumulate merit." }
    },
    { char: '饕', type: 'glyph', 
      cn: { vision: "一张巨大的口，吞食天地。", taste: "无穷的欲望。贪婪是动力，也是陷阱。", nutrient: "节制欲望，避免反噬。" },
      en: { vision: "A giant mouth swallowing heaven and earth.", taste: "Taotie (Greed). Infinite desire. Greed is drive, but also a trap.", nutrient: "Curb desire, avoid backlash." }
    },
    { char: '貔', type: 'totem', 
      cn: { vision: "巡视领地的猛兽。", taste: "吸纳财富。张开你的嘴，接纳四方之财，但要守得住。", nutrient: "广纳财源，只进不出。" },
      en: { vision: "Beast patrolling its territory.", taste: "Pixiu (Wealth). Absorbing wealth. Open your mouth to receive, but guard it well.", nutrient: "Gather wealth, let none escape." }
    },
    { char: '犼', type: 'totem', 
      cn: { vision: "对着苍天咆哮。", taste: "沟通天意。当你感到被压抑时，不要沉默。", nutrient: "仰天长啸，上达天听。" },
      en: { vision: "Roaring at the heavens.", taste: "Hou. Communicating with Heaven. Do not be silent when oppressed.", nutrient: "Roar to the sky, be heard." }
    },
    { char: '鼉', type: 'totem', 
      cn: { vision: "沼泽中的巨龙。", taste: "节奏与潜伏。在看不见的浑水中，把握住心跳的节奏。", nutrient: "掌握节奏，蓄势待发。" },
      en: { vision: "Giant dragon in the swamp.", taste: "Alligator. Rhythm and ambush. Feel the heartbeat in the murky water.", nutrient: "Master the rhythm, wait to strike." }
    },
    { char: '鰲', type: 'totem', 
      cn: { vision: "深海中顶着仙山的巨龟。", taste: "独占鳌头。你是基础，是底座。世界立在你背上。", nutrient: "中流砥柱，独占鳌头。" },
      en: { vision: "Giant turtle supporting a mountain in the sea.", taste: "Ao. The Foundation. You are the pillar. The world stands on your back.", nutrient: "Be the pillar, stand top." }
    },
    { char: '蠱', type: 'totem', 
      cn: { vision: "器皿中纠缠的毒虫。", taste: "诱惑与博弈。活下来的才是最强的。", nutrient: "优胜劣汰，以此炼心。" },
      en: { vision: "Poisonous insects fighting in a jar.", taste: "Gu (Poison). Seduction and game. Only the survivor is strong.", nutrient: "Survival of the fittest, temper the heart." }
    },
    { char: '夔', type: 'totem', 
      cn: { vision: "只有一只脚的巨兽。", taste: "单点突破。你不需要面面俱到，只要在一个点上发力。", nutrient: "专注一点，声震百里。" },
      en: { vision: "One-legged giant beast.", taste: "Kui. Single-point breakthrough. You don't need everything, just one strong point.", nutrient: "Focus on one, shake the world." }
    },
    { char: '鯤', type: 'totem', 
      cn: { vision: "不知其几千里大的巨鱼。", taste: "维度的转换。你现在的环境太小了，容不下你。", nutrient: "积厚流光，升维思考。" },
      en: { vision: "A fish of unknown thousands of miles.", taste: "Kun. Dimensional shift. Your environment is too small for you.", nutrient: "Accumulate depth, upgrade dimension." }
    },
    { char: '鸞', type: 'totem', 
      cn: { vision: "带着铃声的神鸟。", taste: "和谐的预兆。世界正在归于平静。", nutrient: "鸾鸟和鸣，天下太平。" },
      en: { vision: "Divine bird with bells.", taste: "Luan. Omen of harmony. The world is returning to peace.", nutrient: "Sing in harmony, peace on earth." }
    },
    { char: '蚩', type: 'totem', 
      cn: { vision: "九黎战神，铜头铁额。", taste: "为了生存而战。这是一种不被理解的英雄主义。", nutrient: "顽强生存，不屈不挠。" },
      en: { vision: "War God with bronze head and iron forehead.", taste: "Chi You. Fight for survival. Misunderstood heroism.", nutrient: "Survive stubbornly, never yield." }
    },
    
    // --- 抽象法器 (Artifacts) ---
    { char: '⚓︎', type: 'glyph', 
      cn: { vision: "深海中的铁锚。", taste: "风浪再大，海底是静止的。现在是停泊的时候。", nutrient: "止。定。深潜。" },
      en: { vision: "Iron anchor in the deep sea.", taste: "Anchor. The seabed is still. Time to dock.", nutrient: "Stop. Stabilize. Dive deep." }
    },
    { char: '⚔', type: 'glyph', 
      cn: { vision: "交锋的双剑。", taste: "冲突不可避免。矛盾需要通过碰撞来解决。", nutrient: "做出决断，斩断纠缠。" },
      en: { vision: "Crossed swords.", taste: "Conflict. Inevitable clash. Contradictions need collision to resolve.", nutrient: "Decide now, cut the knot." }
    },
    { char: '⚖', type: 'glyph', 
      cn: { vision: "摆动的天平。", taste: "平衡是动态的。你需要在两个极端中找到那个微妙的静止点。", nutrient: "不偏不倚，权衡轻重。" },
      en: { vision: "Swinging scales.", taste: "Balance. It is dynamic. Find the still point between extremes.", nutrient: "Be impartial, weigh the gravity." }
    },
    { char: '🗝', type: 'glyph', 
      cn: { vision: "对准锁孔的钥匙。", taste: "障碍即将移除。关键已在你手中，只差最后的一转。", nutrient: "契机已至，放手去做。" },
      en: { vision: "Key aligned with the keyhole.", taste: "Key. Obstacle removing. The solution is in hand, just turn it.", nutrient: "The moment is here, do it." }
    },
    { char: '🏹', type: 'glyph', 
      cn: { vision: "拉满的弓弦。", taste: "势能积蓄到顶点。不要再犹豫，箭在弦上，不得不发。", nutrient: "瞄准目标，果断释放。" },
      en: { vision: "A drawn bowstring.", taste: "Bow. Potential energy at peak. Do not hesitate. The arrow must fly.", nutrient: "Aim true, release decisively." }
    },
    { char: '🛡', type: 'glyph', 
      cn: { vision: "坚固的盾牌。", taste: "防御时刻。保护好你的软肋，不要轻易暴露底牌。", nutrient: "加强防御，守住底线。" },
      en: { vision: "A sturdy shield.", taste: "Shield. Defense time. Protect your weak spot. Keep your cards hidden.", nutrient: "Strengthen defense, hold the line." }
    },
    { char: '🕯', type: 'glyph', 
      cn: { vision: "黑暗中的烛光。", taste: "微弱但坚定的希望。不要嫌弃光小。", nutrient: "守护微光，照亮当下。" },
      en: { vision: "Candlelight in the dark.", taste: "Candle. Faint but firm hope. Do not despise the small light.", nutrient: "Guard the spark, light the now." }
    },
    { char: '⌛', type: 'glyph', 
      cn: { vision: "流逝的沙漏。", taste: "时间就是一切。某个周期即将结束。", nutrient: "珍惜时间，终结拖延。" },
      en: { vision: "Flowing hourglass.", taste: "Time. It is everything. A cycle is ending.", nutrient: "Cherish time, end procrastination." }
    },
    { char: '¶', type: 'glyph', 
      cn: { vision: "段落标记。", taste: "无论过去写得如何，现在另起一行。翻篇了。", nutrient: "翻篇，开始新章。" },
      en: { vision: "Paragraph mark.", taste: "Pilcrow. New Line. Whatever happened, start a new line now.", nutrient: "Turn the page, start fresh." }
    },
    { char: '✦', type: 'glyph', 
      cn: { vision: "瞬间的闪光。", taste: "灵感一现。它很微弱，但如果不抓住就会消失。", nutrient: "抓住灵感，立即行动。" },
      en: { vision: "A momentary flash.", taste: "Spark. Inspiration. It is faint; catch it or lose it.", nutrient: "Seize the spark, act immediately." }
    },
    { char: '?', type: 'glyph', 
      cn: { vision: "迷雾中的问号。", taste: "未知是可能性的源泉。没有答案本身就是一种答案。", nutrient: "拥抱未知，保持好奇。" },
      en: { vision: "Question mark in the mist.", taste: "Unknown. Source of possibility. No answer is an answer.", nutrient: "Embrace unknown, stay curious." }
    },
    { char: '!', type: 'glyph', 
      cn: { vision: "当头棒喝。", taste: "停止惯性思维。你需要被震撼一下，才能清醒。", nutrient: "立刻停止，反思现状。" },
      en: { vision: "A blow to the head.", taste: "Exclamation. Stop inertial thinking. You need a shock to wake up.", nutrient: "Stop now, reflect." }
    },
    { char: '▲', type: 'glyph', 
      cn: { vision: "向上的三角形。", taste: "火焰的形状。能量正在上升。", nutrient: "顺势而起，步步高升。" },
      en: { vision: "Upward triangle.", taste: "Delta. Shape of fire. Energy is rising.", nutrient: "Rise with it, step up." }
    },
    { char: '▼', type: 'glyph', 
      cn: { vision: "倒置的三角形。", taste: "水的形状。深入内在，探索潜意识。", nutrient: "向下扎根，向内探索。" },
      en: { vision: "Inverted triangle.", taste: "Water. Deep into the inner self. Explore the subconscious.", nutrient: "Root down, explore within." }
    },

    // --- 七政四余与炼金术 (Planets & Alchemy) ---
    { char: '☉', type: 'glyph', 
      cn: { vision: "巨大的金色圆盘，核心的聚变。", taste: "太阳。本源的自我。无论你走到哪里，你都是主角。不要试图隐藏你的光芒，那是徒劳的。", nutrient: "确立自我，光耀照人。" },
      en: { vision: "Giant golden disk, core fusion.", taste: "Sun. The Self. You are the protagonist. Do not hide your light; it is futile.", nutrient: "Establish self, shine bright." }
    },
    { char: '☽', type: 'glyph', 
      cn: { vision: "暗夜中的银色反光，潮汐涌动。", taste: "月亮。潜意识的深渊。情绪像潮水一样涨落，那不是弱点，那是你感知世界的雷达。", nutrient: "接纳情绪，滋养内在。" },
      en: { vision: "Silver reflection in the dark, tides rising.", taste: "Moon. Subconscious abyss. Emotions rise and fall like tides. Not a weakness, but a radar.", nutrient: "Accept emotions, nourish within." }
    },
    { char: '☿', type: 'glyph', 
      cn: { vision: "长着翅膀的信使，水银泻地。", taste: "水星。极速的信息流。思维太快，语言跟不上。你需要更快的载体，或者学会沉默。", nutrient: "快速连接，灵动应变。" },
      en: { vision: "Winged messenger, mercury flowing.", taste: "Mercury. Speed info. Mind faster than words. Find a faster medium or learn silence.", nutrient: "Connect fast, adapt flexibly." }
    },
    { char: '♀', type: 'glyph', 
      cn: { vision: "铜镜映照出的美貌，玫瑰绽放。", taste: "金星。爱与价值。吸引力法则的具象化。你不需要去追逐马，你只需要种好草。", nutrient: "提升魅力，享受愉悦。" },
      en: { vision: "Beauty in the bronze mirror, rose blooming.", taste: "Venus. Love and Value. Law of attraction. Don't chase the horse; grow the grass.", nutrient: "Enhance charm, enjoy pleasure." }
    },
    { char: '♂', type: 'glyph', 
      cn: { vision: "燃烧的战矛，铁与血的味道。", taste: "火星。行动力。愤怒是很好的燃料，不要浪费在抱怨上，把它变成推进器。", nutrient: "果断行动，开疆拓土。" },
      en: { vision: "Burning spear, smell of iron and blood.", taste: "Mars. Action. Anger is fuel. Don't waste it on complaining; use it as a thruster.", nutrient: "Act decisively, conquer new ground." }
    },
    { char: '♃', type: 'glyph', 
      cn: { vision: "巨大的风暴眼，扩张的巨神。", taste: "木星。幸运与扩张。机会像雨点一样落下来。把盘子做大，现在不是保守的时候。", nutrient: "顺势扩张，乐观前行。" },
      en: { vision: "Giant storm eye, expanding titan.", taste: "Jupiter. Luck and Expansion. Opportunities rain down. Make the plate bigger. Not time to be conservative.", nutrient: "Expand with trend, move optimistically." }
    },
    { char: '♄', type: 'glyph', 
      cn: { vision: "冰冷的光环，时间的镰刀。", taste: "土星。业力与限制。压力是痛苦的，但它能把你压成钻石。不要逃避那份沉重。", nutrient: "承担责任，延迟满足。" },
      en: { vision: "Cold rings, scythe of time.", taste: "Saturn. Karma and Limit. Pressure hurts, but it makes diamonds. Do not flee the weight.", nutrient: "Take responsibility, delay gratification." }
    },
    { char: '♅', type: 'glyph', 
      cn: { vision: "闪电击中高塔，颠覆常规。", taste: "天王星。觉醒与革命。打破旧规则。做一个怪人，那是天才的特征。", nutrient: "特立独行，打破常规。" },
      en: { vision: "Lightning striking the tower.", taste: "Uranus. Awakening. Break old rules. Be the weirdo; that is the mark of genius.", nutrient: "Be unique, break the norm." }
    },
    { char: '♆', type: 'glyph', 
      cn: { vision: "深海的三叉戟，迷雾重重。", taste: "海王星。梦想与消融。界限消失了。沉浸在艺术或灵性中，但别淹死在幻想里。", nutrient: "提升灵性，慈悲救赎。" },
      en: { vision: "Trident in deep sea, heavy mist.", taste: "Neptune. Dreams. Boundaries dissolve. Immerse in art or spirit, but don't drown in fantasy.", nutrient: "Elevate spirit, compassionate redemption." }
    },
    { char: '♇', type: 'glyph', 
      cn: { vision: "地底的宝藏，生死的门户。", taste: "冥王星。毁灭与重生。必须彻底死一次，才能活出那个更强大的版本。绝不妥协。", nutrient: "直面阴暗，涅槃重生。" },
      en: { vision: "Underground treasure, gate of life and death.", taste: "Pluto. Death and Rebirth. You must die once to live the stronger version. No compromise.", nutrient: "Face the dark, nirvana rebirth." }
    },

    // --- 黄道原型 (Zodiac Totems) --- 因紫色背景无法消除与其他字之间差异，先删除

    // --- 炼金元素 (Alchemical Elements) ---
    { char: '🜂', type: 'glyph', 
      cn: { vision: "向上的三角形，烈火燎原。", taste: "火元素。转化的力量。烧掉旧的，才能诞生新的。激情是活着的证明。", nutrient: "燃烧热情，激发动力。" },
      en: { vision: "Upward triangle, prairie fire.", taste: "Fire. Transmutation. Burn the old to birth the new. Passion is proof of life.", nutrient: "Ignite passion, spark momentum." }
    },
    { char: '🜄', type: 'glyph', 
      cn: { vision: "倒置的三角形，深渊之水。", taste: "水元素。适应的力量。上善若水。不要对抗障碍，流过它，包围它，最后淹没它。", nutrient: "顺应流动，滋养情感。" },
      en: { vision: "Inverted triangle, abyssal water.", taste: "Water. Adaptation. Water is virtuous. Don't fight obstacles; flow around, surround, submerge.", nutrient: "Flow with it, nourish emotions." }
    },
    { char: '🜁', type: 'glyph', 
      cn: { vision: "带横杠的向上三角，流动的风。", taste: "风元素。思维的力量。看不见，但能推倒大树。思想是自由的，别让它被囚禁。", nutrient: "传播思想，保持自由。" },
      en: { vision: "Crossed upward triangle, wind.", taste: "Air. Intellect. Invisible but topples trees. Thought is free; don't imprison it.", nutrient: "Spread ideas, keep freedom." }
    },
    { char: '🜃', type: 'glyph', 
      cn: { vision: "带横杠的倒三角，厚重的大地。", taste: "土元素。显化的力量。梦想再好，要落地。把虚无缥缈的想法，变成手里沉甸甸的金砖。", nutrient: "脚踏实地，结果导向。" },
      en: { vision: "Crossed inverted triangle, earth.", taste: "Earth. Manifestation. Dreams must land. Turn ethereal ideas into heavy gold bricks.", nutrient: "Be grounded, result-oriented." }
    },
    { char: '🜔', type: 'glyph', 
      cn: { vision: "圆圈中的正方形，盐。", taste: "盐。防腐与结晶。你是世上的盐。在这个腐败的世界，保持你的咸味（本质）。", nutrient: "保持本质，防止腐化。" },
      en: { vision: "Square in a circle, salt.", taste: "Salt. Preservation. You are the salt of the earth. In a corrupt world, keep your flavor.", nutrient: "Keep essence, prevent rot." }
    },
    { char: '🜍', type: 'glyph', 
      cn: { vision: "圆圈上的十字，硫磺。", taste: "硫。灵魂的燃烧。那是你内在挥发性的精神，带有刺鼻的味道，但那是生命的气息。", nutrient: "挥发精神，展现个性。" },
      en: { vision: "Cross on a circle, sulfur.", taste: "Sulfur. Combustion of Soul. Your volatile spirit, pungent but alive.", nutrient: "Volatilize spirit, show character." }
    },

    // --- 宇宙常数与逻辑 (Constants) ---
    { char: '∞', type: 'glyph', 
      cn: { vision: "首尾相连，没有尽头。", taste: "无穷大。这不是一个数字，而是一个概念。你的潜力不应被定义。打破边界。", nutrient: "突破极限，无限可能。" },
      en: { vision: "Endless loop.", taste: "Infinity. Not a number, but a concept. Your potential is undefined. Break boundaries.", nutrient: "Break limits, infinite possibilities." }
    },
    { char: '∅', type: 'glyph', 
      cn: { vision: "完美的空集。", taste: "空。不是什么都没有，而是包含了一切可能性的“无”。色即是空。", nutrient: "清空归零，重新定义。" },
      en: { vision: "Perfect empty set.", taste: "Null. Not nothing, but a 'Void' containing all possibilities. Form is emptiness.", nutrient: "Reset to zero, redefine." }
    },
    { char: '∇', type: 'glyph', 
      cn: { vision: "倒三角算子，梯度的方向。", taste: "Nabla。变化率最快的方向。你要沿着最陡峭的路径上升（梯度上升），那是进化的捷径。", nutrient: "寻找最陡，加速进化。" },
      en: { vision: "Inverted delta, gradient.", taste: "Nabla. Direction of fastest change. Climb the steepest path (Gradient Ascent); it's the shortcut.", nutrient: "Find steepness, accelerate evolution." }
    },
    { char: '∫', type: 'glyph', 
      cn: { vision: "拉长的S，累积的过程。", taste: "积分。当下的每一个瞬间（dx），累积起来就是你的人生（Area）。不要轻视小事。", nutrient: "积累当下，成就整体。" },
      en: { vision: "Elongated S, accumulation.", taste: "Integral. Every moment (dx) sums up to your life (Area). Don't slight the small.", nutrient: "Accumulate now, achieve the whole." }
    },
    { char: '∑', type: 'glyph', 
      cn: { vision: "求和符号，万流归宗。", taste: "西格玛。总和。你不是碎片的堆砌，你是一切经历的总和。整合你自己。", nutrient: "整合碎片，统筹全局。" },
      en: { vision: "Summation symbol.", taste: "Sigma. Sum. You are not fragments, but the sum of all experiences. Integrate yourself.", nutrient: "Integrate fragments, master the whole." }
    },
    { char: 'π', type: 'glyph', 
      cn: { vision: "永不循环的无限小数。", taste: "Pi。超越数。完美是不存在的（无法用分数表示），但你可以无限逼近完美。保持那种不确定性。", nutrient: "接受残缺，无限逼近。" },
      en: { vision: "Non-repeating infinite decimal.", taste: "Pi. Transcendental. Perfection is impossible (irrational), but you can approximate it infinitely.", nutrient: "Accept flaws, infinite approach." }
    },
    { char: 'α', type: 'glyph', 
      cn: { vision: "第一个字母，阿尔法。", taste: "Alpha。超额收益。在平庸的市场（Beta）中，寻找那个独特的、超越平均的价值。", nutrient: "追求卓越，超越平均。" },
      en: { vision: "The first letter.", taste: "Alpha. Excess Return. Find unique value above the mediocre market (Beta).", nutrient: "Seek excellence, beat the average." }
    },
    { char: 'Ω', type: 'glyph', 
      cn: { vision: "最后一个字母，欧米伽。", taste: "Omega。终极。所有事物的归宿。不仅要会开始，还要会完美地结束。", nutrient: "善始善终，圆满闭环。" },
      en: { vision: "The last letter.", taste: "Omega. Ultimate. The destination of all. Know how to start, and how to end perfectly.", nutrient: "End well, close the loop." }
    },
];