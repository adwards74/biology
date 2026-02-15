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

                if (score > 0) {
                    items.forEach(item => results.push({ ...item, score }));
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

        // --- 1. FRQ Intelligence ---
        if (lowerQuery.includes('frq') || lowerQuery.includes('experiment') || lowerQuery.includes('cer') || lowerQuery.includes('lab')) {
            return `
                <div style="color:var(--accent-emerald); font-weight:bold; margin-bottom:10px;"><i class="fas fa-vial"></i> FRQ LOGIC ENGINE:</div>
                Apply the **CER Model** for high-score research analysis:
                <ul style="margin-top:10px; padding-left:20px; font-size:0.85rem; line-height:1.6;">
                    <li><strong style="color:var(--accent-cyan)">Claim:</strong> Direct answer (e.g. <em>"The pH affected enzyme rate..."</em>)</li>
                    <li><strong style="color:var(--accent-cyan)">Evidence:</strong> Quote data from the Scientific Lab.</li>
                    <li><strong style="color:var(--accent-cyan)">Reasoning:</strong> Explain the mechanism (e.g. <em>"Hydrogen bonds were disrupted..."</em>).</li>
                </ul>
            `;
        }

        // --- 2. Neural Knowledge Search ---
        const matches = KnowledgeMap.search(lowerQuery);
        KnowledgeMap.lastQueryTopic = lowerQuery;

        if (matches.length > 0) {
            const best = matches[0];
            let response = "";

            if (best.type === 'unit' && best.insight) {
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

    // Initialize
    setTimeout(() => KnowledgeMap.build(), 1000);

    return {
        handleChatInput,
        recordQuizResult,
        getSocraticAdvice,
        getConceptMatrix,
        getStats,
        updateTutorUI,
        buildNeuralMap: () => KnowledgeMap.build()
    };
})();
