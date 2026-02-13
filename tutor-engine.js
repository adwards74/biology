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
                    }
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
            const lowerQuery = query.toLowerCase().trim();
            const results = [];

            for (const [key, items] of Object.entries(this.index)) {
                let score = 0;
                if (key === lowerQuery) score = 15;
                else if (key.includes(lowerQuery) || lowerQuery.includes(key)) score = 8;
                else {
                    const distance = this.getLevenshtein(key, lowerQuery);
                    const threshold = Math.max(2, Math.floor(key.length * 0.3));
                    if (distance <= threshold) score = 5 - distance;
                }

                if (score > 0) {
                    items.forEach(item => {
                        results.push({ ...item, score });
                    });
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

        // Genetics
        "dna": "The master code. $A$ pairs with $T$, $C$ pairs with $G$. Its anti-parallel structure ($5' \\rightarrow 3'$) defines how it is replicated.",
        "replication": "Semi-conservative. Half of the original DNA is 'saved' in each new double-helix to ensure high-fidelity copying.",
        "dogma": "The Central Dogma: DNA $\\rightarrow$ RNA $\\rightarrow$ Protein. It's the one-way flow of biological information.",
        "transcription": "Copying DNA into mRNA in the nucleus. It's like copying a master file into a temporary 'executable' format.",
        "translation": "Reading mRNA to build a protein chain at the ribosome. Converting 4-base language into 20-amino acid language.",
        "allele": "Different versions of a gene. You have two for every trait—one from each parent.",

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
            return "Sabrina, type a concept like 'DNA', 'Osmosis', or 'Enzymes' to begin analysis.";
        }

        const lowerQuery = query.toLowerCase().trim();
        const neuralMatches = KnowledgeMap.search(lowerQuery);

        let response = "";
        if (neuralMatches.length > 0) {
            const bestMatch = neuralMatches[0];

            if (bestMatch.type === 'unit' && bestMatch.insight) {
                response += `💡 **Intuition:** ${bestMatch.insight}\\n\\n`;
            } else if (HINT_DATABASE[lowerQuery]) {
                response += `💡 **Intuition:** ${HINT_DATABASE[lowerQuery]}\n\n`;
            } else {
                // Fallback to searching database for keywords in query
                for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
                    if (lowerQuery.includes(keyword)) {
                        response += `💡 **Insight:** ${hint}\\n\\n`;
                        break;
                    }
                }
            }

            if (bestMatch.type === 'content' && bestMatch.subtitle) {
                response += `⚙️ **Mechanism:** This relates to *${bestMatch.subtitle}*. `;
            } else if (bestMatch.type === 'unit') {
                response += `⚙️ **Mechanism:** This covers core topics like: ${bestMatch.topics.join(', ')}. `;
            }

            response += `\\n\\n🤔 **Bio-Inquiry:** How does this specific mechanism contribute to the overall homeostasis of the organism?`;
            return response;
        }

        for (const [keyword, hint] of Object.entries(HINT_DATABASE)) {
            if (lowerQuery.includes(keyword)) return hint;
        }

        return `I don't have deep-scan data on "${query}" yet. Try asking about a core biological system or a specific chapter topic!`;
    }

    // ========================================
    // ANALYTICS & STATS (Simplified for Bio)
    // ========================================
    function recordQuizResult(topic, isCorrect) {
        // Logic for tracking progress - preserved for UI compatibility
        const stats = window.getTutorStats ? window.getTutorStats() : { totalAttempts: 0, totalCorrect: 0, currentStreak: 0 };
        stats.totalAttempts++;
        if (isCorrect) {
            stats.totalCorrect++;
            stats.currentStreak++;
        } else {
            stats.currentStreak = 0;
        }
        localStorage.setItem('neo_tutor_stats', JSON.stringify(stats));
        if (window.updateTutorUI) window.updateTutorUI(stats, isCorrect);
        return stats;
    }

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

    // Initialize map
    setTimeout(() => KnowledgeMap.build(), 1000);

    function getConceptMatrix(lessonKey) {
        const normalized = (lessonKey || "general").toLowerCase();
        const results = KnowledgeMap.search(normalized);
        const best = results.length > 0 ? results[0] : null;

        return {
            current: best ? (best.title || best.name || normalized) : normalized,
            parents: [], // Placeholder for future graph logic
            children: []
        };
    }

    function getNextRecommendation(subjectId, progress) {
        const subject = window.MATH_DATA && window.MATH_DATA.subjects.find(s => s.id === subjectId);
        if (!subject) return { message: "Sync complete. Ready for new input." };

        // Find first incomplete unit
        const nextUnit = subject.units.find(u => {
            return u.lectures.some(l => {
                const id = l.url.split(':').pop();
                return !(progress && progress[id] && progress[id].completed);
            });
        });

        if (nextUnit) {
            return { message: `Recommended: Focus on **${nextUnit.title}** to strengthen your ${subject.title} foundation.` };
        }
        return { message: "Current pillar mastered. Neural link suggests proceeding to the next complexity level." };
    }

    // Public API
    window.handleChatInput = handleChatInput;
    window.getSocraticAdvice = getSocraticAdvice;
    window.recordQuizResult = recordQuizResult;
    window.typeTerminalMessage = typeTerminalMessage;
    window.analyzePattern = (userInput) => {
        const weak = window.getWeakTopics ? window.getWeakTopics() : [];
        let analysis = "🧪 **Bio-Neural Pattern Analysis:**\\n";
        if (weak.length > 0) {
            analysis += `Your analysis of **${weak[0].topic}** shows some variance. Research suggests reinforcing the underlying biochemical principles.`;
        } else {
            analysis += "Your research logic is consistent. You are exhibiting high experimental precision.";
        }
        return analysis;
    };

    window.renderLogicMap = (topic) => {
        const matrix = getConceptMatrix(topic);
        return `<div class="logic-map-viz glass" style="padding:20px; border:1px solid var(--accent-emerald); border-radius:15px; margin-top:15px;">
            <h5 style="color:var(--accent-emerald); margin-bottom:15px;"><i class="fas fa-project-diagram"></i> Bio-Logic Map: ${topic}</h5>
            <div style="display:flex; justify-content:center; align-items:center; gap:20px;">
                ${matrix.parents.map(p => `<div class="node glass" style="font-size:0.7rem; padding:5px 10px;">${p}</div>`).join('')}
                <div class="node glass active" style="border-color:var(--accent-emerald); font-weight:bold; padding:10px 15px;">${topic}</div>
                ${matrix.children.map(c => `<div class="node glass" style="font-size:0.7rem; padding:5px 10px;">${c}</div>`).join('')}
            </div>
        </div>`;
    };

    window.buildNeuralMap = () => KnowledgeMap.build();
    window.getNextRecommendation = getNextRecommendation;

    return {
        handleChatInput,
        recordQuizResult,
        typeTerminalMessage,
        getConceptMatrix,
        getNextRecommendation,
        buildNeuralMap: () => KnowledgeMap.build()
    };
})();
