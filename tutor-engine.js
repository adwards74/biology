/**
 * Bio Tutor 5.3 - Advanced Neural Link (Elite Bio-AI)
 * Ported from Neo Tutor 5.3 for Sabrina's Biology Elite Portal.
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

        getBufferContext() {
            return this.conversationBuffer.map(b => b.query).join(" ");
        },

        build() {
            if (this.isMapped) return;
            console.log("🧬 Bio-Neural Link: Mapping Curriculum...");

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
                                subjectId: sub.id
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
                        // NEW: Pre-index content keywords for faster deep-scan
                        const textContent = lesson.content.replace(/<[^>]*>/g, ' ');
                        this.addtoIndex(lesson.title, { type: 'content_ref', id: lessonId });
                    }
                }
            }

            // NEW: Automatically integrate Glossary into Knowledge Map with Unit Mapping
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
                        relatedUnits: relatedUnits.slice(0, 3) // Keep top 3 for brevity
                    });
                }
            }

            this.isMapped = true;
            console.log("✅ Bio-Neural Link: Mapping Complete.");
        },

        addtoIndex(key, data) {
            const normalizedKey = key.toLowerCase().trim();
            if (!this.index[normalizedKey]) this.index[normalizedKey] = [];
            this.index[normalizedKey].push(data);
        },

        search(query) {
            const lowerQuery = query.toLowerCase().trim().replace(/[?!.,]/g, '');
            const tokens = lowerQuery.split(/\s+/).filter(t => t.length > 2); // Extract meaningful tokens
            const stopWords = ['what', 'is', 'how', 'about', 'the', 'tell', 'define', 'meaning', 'concept', 'where', 'why'];
            const keywords = tokens.filter(t => !stopWords.includes(t));

            const results = [];

            for (const [key, items] of Object.entries(this.index)) {
                let score = 0;
                const cleanKey = key.toLowerCase().trim();

                // 1. Direct/Substring match (Highest Priority)
                if (cleanKey === lowerQuery) score = 20;
                else if (lowerQuery.includes(cleanKey)) score = 15;
                else if (cleanKey.includes(lowerQuery)) score = 10;

                // 2. Token-based match (Mid Priority)
                keywords.forEach(kw => {
                    if (cleanKey === kw) score += 12;
                    else if (cleanKey.includes(kw)) score += 5;
                });

                // 3. Fuzzy Match (Fallback)
                if (score === 0) {
                    const distance = this.getLevenshtein(cleanKey, lowerQuery);
                    const threshold = Math.max(2, Math.floor(cleanKey.length * 0.3));
                    if (distance <= threshold) score = 5 - distance;
                }

                if (score > 0) {
                    items.forEach(item => {
                        results.push({ ...item, score });
                    });
                }
            }

            // NEW: Deep Content Scanning (Elite 5.5 Feature)
            if (results.length === 0 || results[0].score < 5) {
                const searchTarget = keywords.length > 0 ? keywords[0] : lowerQuery;
                for (const [chId, lessons] of Object.entries(window.CHAPTER_DATA || {})) {
                    for (const [lessonId, lesson] of Object.entries(lessons)) {
                        const plainContent = lesson.content.replace(/<[^>]*>/g, ' ').toLowerCase();
                        if (plainContent.includes(searchTarget)) {
                            results.push({
                                type: 'content',
                                title: lesson.title,
                                subtitle: lesson.subtitle,
                                content: lesson.content,
                                score: 4
                            });
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

    /**
     * getSocraticAdvice - Compatibility wrapper for app.js
     * Links the application's tutor tip feature to the biological knowledge map.
     */
    function getSocraticAdvice(lessonKey, subjectId) {
        const query = (lessonKey || subjectId || "").replace(/-/g, " ");
        return handleChatInput(query);
    }

    // ========================================
    // BIOLOGY HINT DATABASE (Elite TJHSST IBET)
    // ========================================
    const HINT_DATABASE = {
        // Cell Biology
        "membrane": "Membranes are 'Fluid Mosaics'. Think of them as a sea of oil with protein icebergs floating in them. They are selectively permeable!",
        "osmosis": "Osmosis is just the diffusion of water. Remember: Water moves to where the solute (salt/sugar) is higher, to dilute it.",
        "diffusion": "Passive transport. Molecules move down their concentration gradient (High to Low) until equilibrium is reached. No ATP required!",
        "enzyme": "Enzymes are biological catalysts. They lower the 'Activation Energy' ($\\Delta E_a$) required for a reaction without being consumed.",
        "ratio": "The SA/V Ratio is the law of cell size. As a cell grows, its volume (needs) increases faster than its surface area (supply). Small is efficient!",
        "nucleus": "The control center. It protects the DNA source code and coordinates all 'urban' activities within the cell.",
        "mitochondria": "The power plant. It performs cellular respiration to convert glucose into ATP energy currency.",
        "ribosome": "The protein factory. Ribosomes translate mRNA instructions into polypeptide chains. They can be 'free' or attached to the ER.",
        "rough er": "The export factory. Studded with ribosomes, it synthesizes proteins destined for secretion or membrane insertion.",
        "smooth er": "The metabolic hub. It synthesizes lipids, detoxifies chemicals, and stores calcium ions.",
        "golgi": "The shipping & receiving center. It modifies, sorts, and packages proteins from the ER for final transport.",
        "lysosome": "The recycling crew. Contains digestive enzymes to break down macromolecules and old organelles.",
        "vacuole": "The storage vault. In plants, the large Central Vacuole maintains turgor pressure; in animals, they handle transport.",
        "cell wall": "The structural barricade. A rigid outer layer made of cellulose (in plants) that provides protection and shape.",

        // Genetics
        "dna": "The master code. $A$ pairs with $T$, $C$ pairs with $G$. Its anti-parallel structure ($5' \\rightarrow 3'$) defines how it is replicated.",
        "replication": "Semi-conservative. Half of the original DNA is 'saved' in each new double-helix to ensure high-fidelity copying.",
        "dogma": "The Central Dogma: DNA $\\rightarrow$ RNA $\\rightarrow$ Protein. It's the one-way flow of biological information.",
        "transcription": "Copying DNA into mRNA in the nucleus. It's like copying a master file into a temporary 'executable' format.",
        "translation": "Reading mRNA to build a protein chain at the ribosome. Converting 4-base language into 20-amino acid language.",
        "allele": "Different versions of a gene. You have two for every trait—one from each parent.",
        "genome": "The complete set of genetic material in an organism. Think of it as the ultimate biological architect's blueprint!",

        // Metabolism
        "atp": "The energy currency of the cell. Breaking the last phosphate bond releases the kinetic energy needed for cellular work.",
        "redox": "Reduction (Gaining electrons) and Oxidation (Loss of electrons). Energy is stored in the movement of these electrons.",
        "photosynthesis": "Converting solar flux into chemical storage. It's high-tech environmental engineering at the leaf level!",

        // Statistics
        "chisquare": "The $\\chi^2$ test tells us if 'Difference = Luck'. If your calculated value is higher than the critical value, the difference is real!",
        "control": "Controls are the baseline. Without a negative control, you can't be sure your independent variable caused the effect.",
        "null": "The Null Hypothesis ($H_0$) states that there is NO real difference, and any variation is just random chance.",

        "tjhsst": "For TJ Biology, focus on the 'Mechanism'. Don't just memorize what an organelle is—understand HOW it contributes to homeostasis.",
        "version": "I am Bio Tutor 5.3. Optimized for Sabrina's TJHSST IBET Preparation. Neural Link Status: Emerald-Active.",
        // 2028 Elite Expansion: Biology
        "bioinformatics": "바이오정보학은 생물학적 데이터를 분석하기 위해 연산 도구를 사용하는 학문입니다. 게놈 데이터에서 '의미'를 찾아내는 핵심 기술이죠.",
        "python": "파이썬은 생물학 데이터 처리에 가장 널리 쓰이는 언어입니다. Biopython을 사용하면 서열 정렬과 같은 복잡한 작업을 자동화할 수 있습니다.",
        "blast": "BLAST는 미지의 염기서열을 거대한 데이터베이스에서 검색하여 가장 유사한 서열을 찾아내는 생물학적 Google과 같습니다.",
        "prisma": "PRISMA는 체계적 문헌 검토를 위한 표준 프로토콜입니다. 연구의 투명성과 재현성을 높여줍니다.",
        "phacking": "P-Hacking은 통계적으로 유의미한 결과를 내기 위해 데이터를 조작하는 행위입니다. 비판적 사고를 통해 이를 식별하는 것이 중요합니다."
    };

    function handleChatInput(query) {
        if (!query || query.trim().length === 0) {
            return "Sabrina, type a concept like 'DNA', 'Genome', or 'CRISPR' to begin analysis.";
        }

        const lowerQuery = query.toLowerCase().trim();
        const neuralMatches = KnowledgeMap.search(lowerQuery);

        // Elite 5.3: Track last queried topic for Contextual Logic Mapping
        KnowledgeMap.lastQueryTopic = lowerQuery;

        let response = "";
        if (neuralMatches.length > 0) {
            const bestMatch = neuralMatches[0];

            if (bestMatch.type === 'unit' && bestMatch.insight) {
                response += `<div style="color:var(--accent-magenta); font-weight:bold; margin-bottom:5px;">💡 INTUITION:</div> ${bestMatch.insight}<br><br>`;
            } else if (bestMatch.type === 'glossary') {
                response += `<div style="color:var(--accent-blue); font-weight:bold; margin-bottom:5px;">📖 DEFINITION:</div> ${bestMatch.definition}<br><br>`;

                if (bestMatch.relatedUnits && bestMatch.relatedUnits.length > 0) {
                    response += `<div style="color:var(--accent-cyan); font-weight:bold; margin-bottom:5px;">🎯 RELATED IBET MODULES:</div>`;
                    bestMatch.relatedUnits.forEach(unit => {
                        response += `• <a href="#" onclick="window.showSubjectDetail('${unit.subjectId}', ${unit.unitIdx}); return false;" style="color:var(--accent-cyan); text-decoration:underline; font-size:0.9rem;">${unit.unitTitle}</a><br>`;
                    });
                    response += `<br>`;
                }
            } else if (HINT_DATABASE[lowerQuery]) {
                response += `<div style="color:var(--accent-magenta); font-weight:bold; margin-bottom:5px;">💡 INSIGHT:</div> ${HINT_DATABASE[lowerQuery]}<br><br>`;
            } else {
                // Keyword partial match fallback
                for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
                    if (lowerQuery.includes(keyword)) {
                        response += `<div style="color:var(--accent-magenta); font-weight:bold; margin-bottom:5px;">💡 INSIGHT:</div> ${hint}<br><br>`;
                        break;
                    }
                }
            }

            if (bestMatch.type === 'content' && bestMatch.subtitle) {
                response += `<div style="color:var(--accent-emerald); font-weight:bold; margin-bottom:5px;">⚙️ MECHANISM:</div> This relates to <em>${bestMatch.subtitle}</em>. `;
            } else if (bestMatch.type === 'unit') {
                response += `<div style="color:var(--accent-emerald); font-weight:bold; margin-bottom:5px;">⚙️ MECHANISM:</div> Covers: ${bestMatch.topics.join(', ')}. `;
            } else if (bestMatch.type === 'glossary') {
                response += `<div style="color:var(--accent-emerald); font-weight:bold; margin-bottom:5px;">⚙️ MECHANISM:</div> Core structural term for TJHSST Biological Framework. `;
            }

            response += `<br><br><div style="font-size:0.8rem; opacity:0.6; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">🤔 **Bio-Inquiry:** How does this specific mechanism contribute to the overall homeostasis of the organism?</div>`;
            return response;
        }

        for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
            if (lowerQuery.includes(keyword)) return `<div style="color:var(--accent-magenta); font-weight:bold; margin-bottom:5px;">💡 INSIGHT:</div> ${hint}`;
        }

        return `Neo-Sense: No deep-scan data on "<strong>${query}</strong>" yet. Try searching the specialized Bio-Dictionary or curriculum modules.`;
    }

    // ========================================
    // ANALYTICS & STATS (Simplified for Bio)
    // ========================================
    // ========================================
    // ANALYTICS & STATS (Elite 5.3)
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
            if (stats.currentStreak > stats.bestStreak) {
                stats.bestStreak = stats.currentStreak;
            }
        } else {
            stats.currentStreak = 0;
        }

        if (topic) {
            const normalizedTopic = topic.toLowerCase();
            if (!stats.topicAccuracy[normalizedTopic]) {
                stats.topicAccuracy[normalizedTopic] = { correct: 0, total: 0 };
            }
            stats.topicAccuracy[normalizedTopic].total++;
            if (isCorrect) stats.topicAccuracy[normalizedTopic].correct++;
        }

        saveStats(stats);
        updateTutorUI(stats, isCorrect);
        return stats;
    }

    function updateTutorUI(stats, justAnsweredCorrect) {
        const statsDisplay = document.getElementById('tutor-stats-display');
        if (statsDisplay) {
            const accuracy = stats.totalAttempts > 0 ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) : 0;
            let streakEmoji = stats.currentStreak >= 10 ? '🔥🔥🔥' : stats.currentStreak >= 5 ? '🔥🔥' : stats.currentStreak >= 3 ? '🔥' : '';

            statsDisplay.innerHTML = `
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; margin-bottom:8px;">
                    <span>Streak: ${stats.currentStreak} ${streakEmoji}</span>
                    <span>Accuracy: ${accuracy}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.7rem; opacity:0.7;">
                    <span>Best: ${stats.bestStreak}</span>
                    <span>Today: ${stats.dailyProgress}/${stats.dailyGoal}</span>
                </div>
                <div style="margin-top:8px;">
                    <div style="height:4px; background:rgba(255,255,255,0.1); border-radius:2px;">
                        <div style="height:100%; width:${Math.min((stats.dailyProgress / stats.dailyGoal) * 100, 100)}%; background:linear-gradient(90deg, var(--accent-emerald), var(--accent-cyan)); border-radius:2px; transition:width 0.5s;"></div>
                    </div>
                </div>
            `;
            statsDisplay.classList.add('updated');
            setTimeout(() => statsDisplay.classList.remove('updated'), 500);
        }

        if (justAnsweredCorrect && stats.currentStreak > 0) {
            if (stats.currentStreak === 3) typeTerminalMessage("⚡ BIOLOGICAL MOMENTUM! 3 in a row. Your synapses are synchronizing!");
            else if (stats.currentStreak === 5) typeTerminalMessage("🧬 GENETIC FLOW! 5 streak achieved. Your logic is matching the precision of CRISPR!");
            else if (stats.currentStreak === 10) {
                typeTerminalMessage("🌟 EVOLUTIONARY LEAP! 10-STREAK! You've optimized your cognitive genome!");
                triggerCelebration();
            }
        }
    }

    function triggerCelebration() {
        const overlay = document.createElement('div');
        overlay.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:9999;";
        overlay.innerHTML = `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:var(--accent-emerald); font-size:2rem; font-weight:bold; text-shadow:0 0 20px var(--accent-emerald);">BIOLOGY MASTER!</div>`;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.remove(), 3000);
    }

    function updateStabilityUI() {
        const stats = getStats();
        const canvas = document.getElementById('stability-graph');
        const percentDisplay = document.getElementById('stability-percent');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const accuracy = stats.totalAttempts > 0 ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) : 98;
        if (percentDisplay) percentDisplay.textContent = `${accuracy}%`;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = accuracy > 80 ? '#38ef7d' : accuracy > 60 ? '#ffd700' : '#f5576c';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
            const normalizedAccuracy = accuracy / 100;
            const wave = Math.sin(x * 0.05 + Date.now() * 0.002) * (1 - normalizedAccuracy) * 15;
            const baseline = canvas.height / 2;
            const y = baseline + wave + (Math.random() - 0.5) * 5 * (1 - normalizedAccuracy);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    setInterval(updateStabilityUI, 100);

    function typeTerminalMessage(html, delay = 20) {
        const bubble = document.getElementById('tutor-message');
        if (!bubble) return;
        bubble.innerHTML = '<span class="terminal-prefix">></span> ';
        let i = 0;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const plainText = tempDiv.innerText;

        function type() {
            if (i < plainText.length) {
                bubble.innerText = '> ' + plainText.substring(0, i + 1);
                i++;
                setTimeout(type, delay);
            } else {
                bubble.innerHTML = `<span class="terminal-prefix">></span> ${html}<span class="terminal-cursor"></span>`;
                if (window.MathJax) MathJax.typesetPromise();
            }
        }
        type();
    }

    function getNextRecommendation(subjectId, progress) {
        const subject = window.MATH_DATA && window.MATH_DATA.subjects.find(s => s.id === subjectId);
        if (!subject) return { message: "Biological sensors calibrated. Ready for next inquiry." };

        let nextLecture = null;
        for (const unit of subject.units) {
            for (const lecture of unit.lectures) {
                const id = lecture.url.split(':').pop();
                if (!(progress && progress[id] && progress[id].completed)) {
                    nextLecture = lecture;
                    break;
                }
            }
            if (nextLecture) break;
        }

        const panel = document.getElementById('tutor-recommendation');
        const content = document.getElementById('recommendation-content');
        if (nextLecture && panel && content) {
            content.innerHTML = `🔬 Next Up: **${nextLecture.name}**. Ready to analyze?`;
            panel.style.display = 'block';
            return { message: content.innerHTML };
        }
        return { message: "Curriculum mastered. Ready for experimental expansion." };
    }

    function getConceptMatrix(lessonKey) {
        let normalized = (lessonKey || "general").toLowerCase();

        // Elite 5.3: If on dashboard (general), use the last searched topic as "Focus"
        if (normalized === "general" && KnowledgeMap.lastQueryTopic) {
            normalized = KnowledgeMap.lastQueryTopic;
        }

        const neuralMatches = KnowledgeMap.search(normalized);
        const matrix = {
            current: normalized,
            parents: [],
            children: []
        };

        if (neuralMatches.length > 0) {
            const best = neuralMatches[0];
            matrix.current = best.title || best.name || best.id || normalized;

            // Parents: If it's a glossary term, parents are related units. If lecture, parent is unit.
            if (best.type === 'glossary' && best.relatedUnits) {
                matrix.parents = best.relatedUnits.map(u => u.unitTitle);
            } else if (best.type === 'lecture' && best.subjectId) {
                const sub = window.MATH_DATA && window.MATH_DATA.subjects.find(s => s.id === best.subjectId);
                if (sub) {
                    const unit = sub.units.find(u => u.lectures.some(l => l.url.includes(normalized)));
                    if (unit) matrix.parents = [unit.title];
                }
            } else if (best.type === 'unit') {
                const sub = window.MATH_DATA && window.MATH_DATA.subjects.find(s => s.id === best.subjectId);
                if (sub) matrix.parents = [sub.title];
                matrix.children = best.topics.slice(0, 3);
            }

            // Children fallback: If we have multiple matches, add them as related children
            if (matrix.children.length === 0 && neuralMatches.length > 1) {
                matrix.children = neuralMatches.slice(1, 4).map(m => m.title || m.name || m.id);
            }
        }

        return matrix;
    }

    // Initialize map
    setTimeout(() => KnowledgeMap.build(), 1000);

    // Initial UI Update
    setTimeout(() => updateTutorUI(getStats(), false), 1500);

    // Public API
    window.handleChatInput = handleChatInput;
    window.getSocraticAdvice = getSocraticAdvice;
    window.recordQuizResult = recordQuizResult;
    window.typeTerminalMessage = typeTerminalMessage;
    window.getTutorStats = getStats;
    window.updateTutorUI = updateTutorUI;
    window.getNextRecommendation = getNextRecommendation;

    window.analyzePattern = (userInput) => {
        const stats = getStats();
        let analysis = "🧪 **Bio-Neural Pattern Analysis:**\\n";
        analysis += stats.totalAttempts > 0 ? `Current precision delta is ${Math.round((stats.totalCorrect / stats.totalAttempts) * 100)}%. ` : "Sensors idle. ";
        analysis += "Your research logic is consistent.";
        return analysis;
    };

    window.renderLogicMap = (topic) => {
        return `<div class="logic-map-viz glass" style="padding:20px; border:1px solid var(--accent-emerald); border-radius:15px; margin-top:15px;">
            <h5 style="color:var(--accent-emerald); margin-bottom:15px;"><i class="fas fa-project-diagram"></i> Bio-Logic Map: ${topic}</h5>
            <div style="display:flex; justify-content:center; align-items:center; gap:20px;">
                <div class="node glass active" style="border-color:var(--accent-emerald); font-weight:bold; padding:10px 15px;">${topic}</div>
            </div>
        </div>`;
    };

    window.buildNeuralMap = () => KnowledgeMap.build();

    return {
        handleChatInput,
        recordQuizResult,
        typeTerminalMessage,
        getSocraticAdvice,
        getConceptMatrix,
        getNextRecommendation,
        getStats,
        updateTutorUI,
        updateStabilityUI,
        buildNeuralMap: () => KnowledgeMap.build()
    };
})();
