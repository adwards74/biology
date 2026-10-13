/**
 * Bio Tutor 5.5 - Elite Neural Mastery (AP Biology & TJHSST)
 * Unified intelligence engine for Sabrina's Biology Elite Portal.
 */

window.TutorEngine = (function () {

    // ========================================
    // BIOLOGICAL KNOWLEDGE MAPPER
    // ========================================
    const KnowledgeMap = {
        index: {},
        isMapped: false,
        conversationBuffer: [],
        lastQueryTopic: null,

        addToBuffer(query, response) {
            this.conversationBuffer.push({ query, response });
            if (this.conversationBuffer.length > 3) this.conversationBuffer.shift();
        },

        build() {
            if (this.isMapped) return;
            console.log("🧬 Bio-Neural Link: Mapping Elite 5.5 Curriculum...");

            if (window.MATH_DATA) {
                window.MATH_DATA.subjects.forEach(sub => {
                    this.addtoIndex(sub.id, {
                        type: 'subject',
                        title: sub.title,
                        description: sub.description,
                        color: sub.color
                    });

                    sub.units.forEach(unit => {
                        this.addtoIndex(unit.title, {
                            type: 'unit',
                            subjectId: sub.id,
                            insight: unit.intuition,
                            topics: unit.topics
                        });

                        unit.lectures.forEach(lecture => {
                            const lessonKey = lecture.url.split(':').pop();
                            this.addtoIndex(lessonKey, {
                                type: 'lecture',
                                name: lecture.name,
                                subjectId: sub.id,
                                subtitle: lecture.name
                            });
                        });
                    });
                });
            }

            if (window.CHAPTER_DATA) {
                for (const [chId, lessons] of Object.entries(window.CHAPTER_DATA)) {
                    for (const [lessonId, lesson] of Object.entries(lessons)) {
                        this.addtoIndex(lessonId, {
                            type: 'content',
                            title: lesson.title,
                            subtitle: lesson.subtitle,
                            content: lesson.content
                        });
                    }
                }
            }

            if (window.MATH_DATA && window.MATH_DATA.glossary) {
                for (const [term, def] of Object.entries(window.MATH_DATA.glossary)) {
                    const relatedUnits = [];
                    const termLower = term.toLowerCase();

                    window.MATH_DATA.subjects.forEach(sub => {
                        sub.units.forEach((unit, uIdx) => {
                            const inTitle = unit.title.toLowerCase().includes(termLower);
                            const inTopics = unit.topics && unit.topics.some(t => t.toLowerCase().includes(termLower));
                            const inIntuition = unit.intuition && unit.intuition.toLowerCase().includes(termLower);

                            if (inTitle || inTopics || inIntuition) {
                                relatedUnits.push({
                                    subjectId: sub.id,
                                    unitTitle: unit.title,
                                    unitIdx: uIdx
                                });
                            }
                        });
                    });

                    this.addtoIndex(term, {
                        type: 'glossary',
                        definition: def,
                        relatedUnits: relatedUnits.slice(0, 3)
                    });
                }
            }

            this.isMapped = true;
            console.log("✅ Bio-Neural Link: Mastery Mapping Complete.");
        },

        addtoIndex(key, data) {
            const normalizedKey = key.toLowerCase().trim();
            if (!this.index[normalizedKey]) this.index[normalizedKey] = [];
            this.index[normalizedKey].push(data);
        },

        search(query) {
            const lowerQuery = query.toLowerCase().trim().replace(/[?!.,]/g, '');
            const tokens = lowerQuery.split(/\s+/).filter(t => t.length > 2);
            const stopWords = ['what', 'is', 'how', 'about', 'the', 'tell', 'define', 'meaning', 'concept'];
            const keywords = tokens.filter(t => !stopWords.includes(t));

            const results = [];
            for (const [key, items] of Object.entries(this.index)) {
                let score = 0;
                const cleanKey = key.toLowerCase().trim();

                if (cleanKey === lowerQuery) score = 20;
                else if (lowerQuery.includes(cleanKey)) score = 15;
                else if (cleanKey.includes(lowerQuery)) score = 10;

                keywords.forEach(kw => {
                    if (cleanKey === kw) score += 12;
                    else if (cleanKey.includes(kw)) score += 5;
                });

                // Neo 6.0: Fuzzy match fallback (Levenshtein)
                if (score === 0) {
                    const distance = this.getLevenshtein(cleanKey, lowerQuery);
                    const threshold = Math.max(2, Math.floor(cleanKey.length * 0.3));
                    if (distance <= threshold && cleanKey.length > 3) {
                        score = 5 - distance;
                    }
                }

                if (score > 0) {
                    items.forEach(item => results.push({ ...item, score }));
                }
            }

            // Neo 6.0: HINT_DATABASE keyword fallback (with fuzzy)
            if (results.length === 0) {
                for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
                    if (lowerQuery.includes(keyword) || keyword.includes(lowerQuery)) {
                        results.push({ type: 'hint', title: keyword, definition: hint, score: 8 });
                    } else if (keyword.length > 4) {
                        // Fuzzy: allow typos in hint keywords
                        const tokens = lowerQuery.split(/\s+/);
                        for (const tok of tokens) {
                            if (tok.length < 4) continue;
                            const d = this.getLevenshtein(keyword, tok);
                            const th = Math.max(2, Math.floor(keyword.length * 0.3));
                            if (d <= th) {
                                results.push({ type: 'hint', title: keyword, definition: hint, score: 6 - d });
                                break;
                            }
                        }
                    }
                }
            }

            return results.sort((a, b) => b.score - a.score);
        },

        getLevenshtein(s1, s2) {
            const m = s1.length, n = s2.length;
            const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
            for (let i = 0; i <= m; i++) dp[i][0] = i;
            for (let j = 0; j <= n; j++) dp[0][j] = j;
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
                    dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
                }
            }
            return dp[m][n];
        }
    };

    // ========================================
    // NEO 6.0: HINT DATABASE (Biology)
    // ========================================
    const HINT_DATABASE = {
        "cell": "Cells are the basic unit of life. Remember: prokaryotes (no nucleus) vs eukaryotes (nucleus + organelles).",
        "mitosis": "Mitosis phases: PMAT — Prophase, Metaphase, Anaphase, Telophase. Chromosomes line up at the metaphase plate!",
        "meiosis": "Meiosis = 2 divisions, 4 haploid cells. Crossing over in Prophase I creates genetic variation.",
        "dna": "DNA: A-T, G-C (Chargaff's rule). Antiparallel strands, 5' to 3' synthesis. The double helix!",
        "replication": "DNA replication is semiconservative — each new molecule has one old strand and one new strand.",
        "transcription": "Transcription: DNA -> mRNA (in nucleus). RNA polymerase reads 3' to 5', builds 5' to 3'.",
        "translation": "Translation: mRNA -> protein (at ribosome). Codons (3 bases) = 1 amino acid. Start: AUG.",
        "photosynthesis": "Photosynthesis: 6CO2 + 6H2O -> C6H12O6 + 6O2. Light reactions (thylakoid) + Calvin cycle (stroma).",
        "respiration": "Cellular respiration: C6H12O6 + 6O2 -> 6CO2 + 6H2O + ATP. Glycolysis -> Krebs -> ETC. ~32 ATP total.",
        "enzyme": "Enzymes lower activation energy. Lock-and-key (or induced fit). Denatured by extreme pH/temperature.",
        "natural selection": "Natural selection: variation + competition + heritability = evolution. Survival of the fittest!",
        "heredity": "Mendel's laws: segregation (alleles separate) and independent assortment (genes sort independently).",
        "punnett": "Punnett squares predict offspring genotypes. Monohybrid = 3:1 phenotypic ratio (Aa x Aa).",
        "ecosystem": "Ecosystems: energy flows (10% rule), nutrients cycle. Producers -> consumers -> decomposers.",
        "homeostasis": "Homeostasis = stable internal conditions. Negative feedback loops (like thermostat) maintain balance.",
        "osmosis": "Osmosis: water moves toward higher solute concentration. Hypotonic = swell, hypertonic = shrink.",
        "atp": "ATP = cellular energy currency. ADP + Pi -> ATP (needs energy input). Hydrolysis releases energy.",
        "pcr": "PCR amplifies DNA: denature (95C) -> anneal (55C) -> extend (72C). Doubles each cycle — exponential!",
        "gel electrophoresis": "Gel electrophoresis separates DNA by size. Smaller fragments move farther. DNA is negative, moves to positive electrode.",
        "operon": "Operons (lac/trp): prokaryotic gene regulation. Lac = inducible (lactose turns ON), Trp = repressible (tryptophan turns OFF).",
        "linkage": "Linked genes are on the same chromosome and tend to inherit together. Crossing over can separate them — map distance = % recombination."
    };

    const PREREQUISITE_MAP = {
        "mitosis": ["cell"],
        "meiosis": ["mitosis", "cell"],
        "replication": ["dna"],
        "transcription": ["dna"],
        "translation": ["transcription"],
        "pcr": ["replication", "dna"],
        "gel electrophoresis": ["pcr", "dna"],
        "operon": ["transcription", "translation"],
        "linkage": ["meiosis", "heredity"],
        "photosynthesis": ["cell", "atp"],
        "respiration": ["cell", "atp", "enzyme"]
    };

    // ========================================
    // ANALYTICS & STATS (Elite 5.5)
    // ========================================
    const STATS_KEY = 'neo_tutor_stats';

    function getStats() {
        const saved = localStorage.getItem(STATS_KEY);
        return saved ? JSON.parse(saved) : {
            currentStreak: 0,
            bestStreak: 0,
            totalCorrect: 0,
            totalAttempts: 0,
            topicAccuracy: {},
            dailyGoal: 5,
            dailyProgress: 0,
            lastActiveDate: null
        };
    }

    function saveStats(stats) {
        localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    }

    function recordQuizResult(topic, isCorrect) {
        const stats = getStats();
        const today = new Date().toDateString();

        if (stats.lastActiveDate !== today) {
            stats.dailyProgress = 0;
            stats.lastActiveDate = today;
        }

        stats.totalAttempts++;
        stats.dailyProgress++;

        if (isCorrect) {
            stats.totalCorrect++;
            stats.currentStreak++;
            if (stats.currentStreak > stats.bestStreak) stats.bestStreak = stats.currentStreak;
        } else {
            stats.currentStreak = 0;
        }

        if (topic) {
            const nt = topic.toLowerCase();
            if (!stats.topicAccuracy[nt]) stats.topicAccuracy[nt] = { correct: 0, total: 0 };
            stats.topicAccuracy[nt].total++;
            if (isCorrect) stats.topicAccuracy[nt].correct++;
        }

        saveStats(stats);
        updateTutorUI(stats, isCorrect);
        return stats;
    }

    function getWeakTopics() {
        const stats = getStats();
        const weak = [];
        for (const [topic, data] of Object.entries(stats.topicAccuracy)) {
            if (data.total >= 2) {
                const acc = Math.round((data.correct / data.total) * 100);
                if (acc < 70) weak.push({ topic, accuracy: acc });
            }
        }
        return weak.sort((a, b) => a.accuracy - b.accuracy);
    }

    function updateTutorUI(stats, justCorrect) {
        const display = document.getElementById('tutor-stats-display');
        if (!display) return;

        const acc = stats.totalAttempts > 0 ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) : 0;
        let emoji = stats.currentStreak >= 10 ? '🔥🔥🔥' : stats.currentStreak >= 5 ? '🔥🔥' : stats.currentStreak >= 3 ? '🔥' : '';

        display.innerHTML = `
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:8px;">
                <span>Streak: ${stats.currentStreak} ${emoji}</span>
                <span>Accuracy: ${acc}%</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.7rem; opacity:0.7;">
                <span>Best: ${stats.bestStreak}</span>
                <span>Today: ${stats.dailyProgress}/${stats.dailyGoal}</span>
            </div>
        `;

        if (justCorrect && stats.currentStreak === 5) typeTerminalMessage("🧬 GENETIC FLOW! 5 streak achieved. Precision: CRISPR-Level.");
    }

    // ========================================
    // CORE TUTOR LOGIC
    // ========================================
    function handleChatInput(query) {
        if (!query || query.trim().length === 0) return "Sabrina, specify your biological inquiry.";

        const lowerQuery = query.toLowerCase().trim();

        // Neo 6.0: Friday bridge + Wrong Answer Journal (before filters)
        const fridayResp = handleFridayFlow(lowerQuery);
        if (fridayResp) return fridayResp;
        const journalResp = handleWrongAnswerFlow(lowerQuery, query);
        if (journalResp) return journalResp;

        // --- 1. IBET & AP High-Intelligence Filters ---
        if (lowerQuery.includes('crispr') || lowerQuery.includes('biotech') || lowerQuery.includes('recombinant')) {
            return `
                <div style="color:var(--accent-orange); font-weight:bold; margin-bottom:10px;"><i class="fas fa-microchip"></i> TJHSST IBET INSIGHT: Biotechnology & Evolution</div>
                Modern genetics (CRISPR/Cas9) is not just a tool; it represents **Artificial Selection 2.0**. 
                <ul style="margin-top:10px; padding-left:20px; font-size:0.85rem; line-height:1.6;">
                    <li><strong style="color:var(--accent-cyan)">The Link:</strong> While *Natural Selection* relies on random mutations over geological time, *CRISPR* allows for targeted genomic changes in a single generation.</li>
                    <li><strong style="color:var(--accent-cyan)">IBET Perspective:</strong> Consider the ethical and ecological implications of "Gene Drives"—using biotech to bypass traditional Mendelian inheritance.</li>
                </ul>
                <div style="font-size:0.8rem; opacity:0.6; margin-top:10px; border-top:1px dashed rgba(255,255,255,0.1); padding-top:10px;">🧬 **Mastery Tip:** DNA recombination is to human technology what cross-over is to meiosis: the ultimate driver of variation.</div>
            `;
        }

        if (lowerQuery.includes('frq') || lowerQuery.includes('experiment') || lowerQuery.includes('cer') || lowerQuery.includes('lab')) {
            return `
                <div style="color:var(--accent-emerald); font-weight:bold; margin-bottom:10px;"><i class="fas fa-vial"></i> FRQ/IBET LOGIC ENGINE:</div>
                For **TJHSST Lab Reports** and AP FRQs, precision is mandatory. Use the **CER Model**:
                <ul style="margin-top:10px; padding-left:20px; font-size:0.85rem; line-height:1.6;">
                    <li><strong style="color:var(--accent-cyan)">Claim:</strong> A one-sentence answer that addresses the prompt directly. No "I think".</li>
                    <li><strong style="color:var(--accent-cyan)">Evidence:</strong> Specific numerical values (Means, $\chi^2$, SEM) from your analysis.</li>
                    <li><strong style="color:var(--accent-cyan)">Reasoning:</strong> The "Why". Connect the data to a biological principle (e.g., *Natural Selection* or *Protein Folding*).</li>
                </ul>
                <div style="font-size:0.8rem; opacity:0.6; margin-top:10px; border-top:1px dashed rgba(255,255,255,0.1); padding-top:10px;">📊 **STAT TIP:** Always mention if your error bars (SEM) overlap. No overlap = likely Significance.</div>
            `;
        }

        // --- 2. Neural Knowledge Search ---
        const matches = KnowledgeMap.search(lowerQuery);
        KnowledgeMap.lastQueryTopic = lowerQuery;

        if (matches.length > 0) {
            const best = matches[0];
            let response = "";

            if (best.type === 'hint') {
                response += `<div style="color:var(--accent-magenta); font-weight:bold; margin-bottom:5px;">💡 INTUITION:</div> ${best.definition}<br><br>`;
            } else if (best.type === 'unit' && best.insight) {
                response += `<div style="color:var(--accent-magenta); font-weight:bold; margin-bottom:5px;">💡 INTUITION:</div> ${best.insight}<br><br>`;
            } else if (best.type === 'glossary') {
                response += `<div style="color:var(--accent-blue); font-weight:bold; margin-bottom:5px;">📝 DEFINITION:</div> ${best.definition}<br><br>`;
                if (best.relatedUnits && best.relatedUnits.length > 0) {
                    response += `<div style="font-size:0.8rem; opacity:0.6;">Context: ${best.relatedUnits.map(u => u.unitTitle).join(', ')}</div>`;
                }
            }

            if (best.subtitle) {
                response += `<div style="color:var(--accent-emerald); font-weight:bold; margin-bottom:5px;">⚙️ MECHANISM:</div> ${best.subtitle}. `;
            }

            response += `<br><br><div style="font-size:0.8rem; opacity:0.6; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">🔬 **Bio-Inquiry:** How does this relate to cellular homeostasis?</div>`;
            return response;
        }

        return `Neo-Sense: No deep-scan data on "<strong>${query}</strong>". Try Bio-Dictionary concepts.`;
    }

    function typeTerminalMessage(html, delay = 20) {
        const bubble = document.getElementById('tutor-message');
        if (!bubble) return;
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const text = temp.innerText;
        let i = 0;
        function type() {
            if (i < text.length) {
                bubble.innerText = '> ' + text.substring(0, i + 1);
                i++; setTimeout(type, delay);
            } else {
                bubble.innerHTML = `<span class="terminal-prefix">></span> ${html}`;
            }
        }
        type();
    }

    function getSocraticAdvice(lessonKey, subjectId) {
        const query = (lessonKey || subjectId || "").replace(/-/g, " ");
        return handleChatInput(query);
    }

    function getConceptMatrix(lessonKey) {
        let topic = (lessonKey || KnowledgeMap.lastQueryTopic || "general").toLowerCase();
        const matches = KnowledgeMap.search(topic);
        const res = { current: topic, parents: [], children: [] };
        if (matches.length > 0) {
            const best = matches[0];
            res.current = best.title || best.name || topic;
            if (best.type === 'unit') res.children = best.topics.slice(0, 3);
        }
        return res;
    }

    // ========================================
    // NEO 6.0: WRONG ANSWER JOURNAL
    // ========================================
    const WRONG_KEY = 'neo_wrong_answers';
    const WRONG_MAX = 50;

    function getWrongAnswers() {
        try {
            const saved = localStorage.getItem(WRONG_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    }

    function saveWrongAnswers(list) {
        try {
            localStorage.setItem(WRONG_KEY, JSON.stringify(list));
        } catch (e) { /* silent */ }
    }

    function recordWrongAnswer(topic, question) {
        const list = getWrongAnswers();
        const dup = list.some(w => !w.resolved &&
            w.topic.toLowerCase() === (topic || 'general').toLowerCase());
        if (!dup) {
            list.push({
                topic: topic || 'general',
                question: question || '',
                timestamp: Date.now(),
                resolved: false
            });
            if (list.length > WRONG_MAX) list.splice(0, list.length - WRONG_MAX);
            saveWrongAnswers(list);
        }
        return getUnresolvedCount();
    }

    function getUnresolvedCount() {
        return getWrongAnswers().filter(w => !w.resolved).length;
    }

    function getUnresolvedList() {
        return getWrongAnswers().filter(w => !w.resolved);
    }

    function markWrongResolved(topic) {
        const list = getWrongAnswers();
        const lower = (topic || '').toLowerCase().trim();
        let count = 0;
        list.forEach(w => {
            if (!w.resolved && (lower === '' ||
                w.topic.toLowerCase().includes(lower) ||
                lower.includes(w.topic.toLowerCase()))) {
                w.resolved = true;
                count++;
            }
        });
        saveWrongAnswers(list);
        return count;
    }

    function pickReviewItem() {
        const unresolved = getUnresolvedList();
        if (unresolved.length === 0) return null;
        return unresolved[Math.floor(Math.random() * unresolved.length)];
    }

    const WRONG_TRIGGERS = [
        "i don't understand", "i dont understand", "don't get it",
        "dont get it", "i'm confused", "im confused", "i got it wrong",
        "this is wrong", "i made a mistake", "still confused"
    ];
    const REVIEW_TRIGGERS = ["review", "quiz me", "test me", "practice"];
    const RESOLVED_TRIGGERS = ["got it now", "understand now", "i get it now", "resolved", "makes sense now"];
    const FRIDAY_PREP_TRIGGERS = ["prepare friday", "friday prep", "prepare for friday", "friday preview"];
    const FRIDAY_REVIEW_TRIGGERS = ["review friday", "friday review", "friday recap"];

    function stripTriggerWords(query, triggers) {
        let cleaned = query.toLowerCase();
        triggers.forEach(t => { cleaned = cleaned.split(t).join(' '); });
        return cleaned.replace(/\s+/g, ' ').trim();
    }

    function handleWrongAnswerFlow(lowerQuery, originalQuery) {
        if (WRONG_TRIGGERS.some(t => lowerQuery.includes(t))) {
            const topicGuess = stripTriggerWords(lowerQuery, WRONG_TRIGGERS) ||
                (KnowledgeMap.lastQueryTopic || 'general');
            const count = recordWrongAnswer(topicGuess, originalQuery);
            const hint = HINT_DATABASE[topicGuess.toLowerCase()] || '';
            KnowledgeMap.lastQueryTopic = topicGuess;
            return `📝 <strong>Saved to your Wrong Answer Journal</strong> ("${topicGuess}"). ` +
                `You have ${count} unresolved item${count === 1 ? '' : 's'}. ` +
                `Type "review" anytime to quiz yourself.` +
                (hint ? `<br><br>💡 <strong>Quick help:</strong> ${hint}` : '');
        }
        if (REVIEW_TRIGGERS.some(t => lowerQuery === t || lowerQuery.startsWith(t + ' '))) {
            const item = pickReviewItem();
            if (!item) {
                return "🎉 <strong>Wrong Answer Journal is clear!</strong> No unresolved items.";
            }
            const hint = HINT_DATABASE[item.topic.toLowerCase()] || '';
            return `📝 <strong>Review Quiz</strong> (${getUnresolvedCount()} unresolved):<br><br>` +
                `<strong>Topic:</strong> ${item.topic}<br>` +
                `<strong>You asked:</strong> "${item.question}"<br><br>` +
                (hint ? `💡 <strong>Hint:</strong> ${hint}<br><br>` : '') +
                `Explain this concept back to me. Say "got it now" when resolved.`;
        }
        if (RESOLVED_TRIGGERS.some(t => lowerQuery.includes(t))) {
            const topicGuess = stripTriggerWords(lowerQuery, RESOLVED_TRIGGERS);
            const n = markWrongResolved(topicGuess);
            if (n > 0) {
                return `✅ <strong>Marked ${n} item${n === 1 ? '' : 's'} resolved!</strong> ` +
                    `${getUnresolvedCount()} still in your journal.`;
            }
            return "✅ Noted! Journal item marked resolved.";
        }
        return null;
    }

    // ========================================
    // NEO 6.0: ZOOM SESSION BRIDGE
    // ========================================
    const FRIDAY_CORE_TOPICS = [
        "pcr",
        "gel electrophoresis",
        "operon",
        "natural selection",
        "cellular respiration"
    ];

    function handleFridayFlow(lowerQuery) {
        if (FRIDAY_PREP_TRIGGERS.some(t => lowerQuery.includes(t))) {
            const weak = getWeakTopics().slice(0, 3).map(w => w.topic);
            const topics = weak.length >= 3 ? weak :
                [...weak, ...FRIDAY_CORE_TOPICS.filter(t => !weak.includes(t))].slice(0, 3);
            let out = "🎯 <strong>Friday Session Prep</strong> — 3 key concepts:<br><br>";
            topics.forEach((t, i) => {
                const hint = HINT_DATABASE[t.toLowerCase()] || '';
                const prereqs = PREREQUISITE_MAP[t.toLowerCase()] || [];
                out += `<strong>${i + 1}. ${t}</strong><br>`;
                if (hint) out += `${hint}<br>`;
                if (prereqs.length > 0) out += `🛡️ Prereqs: ${prereqs.join(', ')}<br>`;
                out += "<br>";
            });
            out += "Skim these and bring questions to your tutor!";
            return out;
        }
        if (FRIDAY_REVIEW_TRIGGERS.some(t => lowerQuery.includes(t))) {
            const unresolved = getUnresolvedList();
            let out = "🔄 <strong>Friday Session Review</strong><br><br>";
            if (unresolved.length > 0) {
                out += `📝 <strong>Wrong Answer Journal:</strong> ${unresolved.length} unresolved<br>`;
                unresolved.slice(0, 5).forEach(w => { out += `   • ${w.topic}<br>`; });
                out += '<br>Type "review" to quiz yourself.<br><br>';
            } else {
                out += "📝 <strong>Wrong Answer Journal:</strong> all clear!<br><br>";
            }
            const weak = getWeakTopics().slice(0, 3);
            if (weak.length > 0) {
                out += "📊 <strong>Weakest topics:</strong><br>";
                weak.forEach(w => { out += `   • ${w.topic} (${w.accuracy}%)<br>`; });
            }
            return out;
        }
        return null;
    }

    // Initialize
    setTimeout(() => KnowledgeMap.build(), 1000);

    // Neo 6.0: expose journal API
    window.getWrongAnswers = getWrongAnswers;
    window.getUnresolvedCount = getUnresolvedCount;
    window.markWrongResolved = markWrongResolved;

    return {
        handleChatInput,
        recordQuizResult,
        getSocraticAdvice,
        getConceptMatrix,
        getStats,
        getWeakTopics,
        updateTutorUI,
        buildNeuralMap: () => KnowledgeMap.build(),
        // Neo 6.0
        getWrongAnswers,
        getUnresolvedCount,
        markWrongResolved,
        pickReviewItem
    };
})();
