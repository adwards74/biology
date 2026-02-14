window.onerror = function (msg, url, line, col, error) {
    // Filter out CORS-masked errors from external CDN scripts (MathJax, FontAwesome, etc.)
    // These appear as "Script error." with line=0 and empty URL when loading via file:// protocol.
    // They are harmless browser security messages, NOT actual application bugs.
    if (msg === "Script error." && line === 0 && (!url || url === "")) {
        console.warn("[CORS] External CDN script error (masked by browser security policy). Safe to ignore.");
        return true; // Suppress the error
    }

    console.error("APPLICATION ERROR:", { msg, url, line, col, error });
    let errorDetail = "";
    if (error && error.stack) errorDetail = "\nStack: " + error.stack;
    alert("APPLICATION ERROR: " + msg + "\nLine: " + line + "\nFile: " + url + errorDetail);
};

document.addEventListener('DOMContentLoaded', () => {
    const PROGRESS_KEY = 'genius_math_progress';
    const QUIZ_HISTORY_KEY = 'genius_math_quiz_history';

    function getProgress() {
        const saved = localStorage.getItem(PROGRESS_KEY);
        return saved ? JSON.parse(saved) : {};
    }

    function saveProgress(progress) {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }

    // Expose globally for UIEngine
    window.getProgress = getProgress;
    window.resetProgress = () => {
        if (confirm("Neo-Sense: Are you sure you want to reset all neural progress? This action cannot be undone.")) {
            localStorage.removeItem(PROGRESS_KEY);
            localStorage.removeItem(QUIZ_HISTORY_KEY);
            location.reload();
        }
    };

    function getQuizHistory() {
        const saved = localStorage.getItem(QUIZ_HISTORY_KEY);
        return saved ? JSON.parse(saved) : [];
    }

    function saveQuizAttempt(attempt) {
        const history = getQuizHistory();
        history.unshift(attempt); // Add to beginning
        localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(history.slice(0, 100))); // Keep last 100
        if (window.updateStabilityUI) window.updateStabilityUI();
    }

    // Kernel Initialization: Link Modules
    if (window.AppRouter) window.AppRouter.initialize();

    // Neo 5.0 Neural Initialization
    if (window.TutorEngine && window.TutorEngine.buildNeuralMap) {
        window.TutorEngine.buildNeuralMap();
    }

    // Neo 5.3: Enhanced Tutor Tip
    window.askTutorTip = () => {
        const bubble = document.getElementById('tutor-message');
        if (!bubble) return;

        bubble.style.borderColor = "var(--accent-blue)";
        bubble.innerHTML = `<span class="status-pulse"></span> <span style="font-size:0.7rem; opacity:0.6; font-family:monospace;">ANALYZING MATRIX...</span>`;

        setTimeout(() => {
            const lessonKey = window.currentLessonKey || "";
            const subjectId = window.currentSubjectId || "algebra2";
            const rawMessage = window.getSocraticAdvice ? window.getSocraticAdvice(lessonKey, subjectId) : "Manual override required.";

            bubble.style.borderColor = "var(--accent-magenta)";
            if (window.typeTerminalMessage) window.typeTerminalMessage(rawMessage);

            // Show recommendation after tip
            showRecommendation();
        }, 800);
    };

    // Neo 5.0: Elite Summarization
    window.summarizeLesson = () => {
        const lessonKey = window.currentLessonKey || "";
        if (!lessonKey) {
            window.typeTerminalMessage("Please open a specific lesson first for neural summarization.");
            return;
        }

        const summaryData = window.summarizeContent ? window.summarizeContent(lessonKey) : "Neo-Sense: Summary module not found.";

        if (typeof summaryData === 'string') {
            window.typeTerminalMessage(summaryData);
        } else {
            let html = `<div style="color:var(--accent-cyan); font-weight:bold; margin-bottom:10px;">📋 ELITE SUMMARY: ${summaryData.title}</div>`;
            if (summaryData.intuition) {
                html += `<div style="margin-bottom:10px; font-style:italic; opacity:0.9;">"${summaryData.intuition}"</div>`;
            }
            if (summaryData.points && summaryData.points.length > 0) {
                html += `<ul style="padding-left:15px; margin:0; list-style-type: '⚡ ';">`;
                summaryData.points.forEach(p => html += `<li style="margin-bottom:5px;">${p}</li>`);
                html += `</ul>`;
            }
            html += `<div style="margin-top:10px; font-size:0.75rem; opacity:0.6;">*Neural mapping complete. Logical consistency: 99%.*</div>`;
            window.typeTerminalMessage(html);
        }
    };

    // Neo 5.3: Voice Input Support
    window.startVoiceInput = () => {
        const btn = document.getElementById('voice-btn');
        const input = document.getElementById('tutor-chat-input');

        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            window.typeTerminalMessage("Speech recognition not supported in this browser.");
            return;
        }

        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new Recognition();

        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        btn.style.color = "var(--accent-red)";
        btn.querySelector('i').className = "fas fa-circle-notch fa-spin";

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            input.value = transcript;
            window.submitTutorChat();
        };

        recognition.onend = () => {
            btn.style.color = "var(--accent-magenta)";
            btn.querySelector('i').className = "fas fa-microphone";
        };

        recognition.onerror = () => {
            btn.style.color = "var(--accent-magenta)";
            btn.querySelector('i').className = "fas fa-microphone";
        };

        recognition.start();
    };

    // Neo 5.3: Neural Map Visualization
    window.showNeuralMap = () => {
        const modal = document.getElementById('neural-map-modal');
        const container = document.getElementById('neural-map-canvas-container');
        if (!modal || !container) return;

        modal.style.display = 'block';
        container.innerHTML = '';

        // Determine current focus
        const currentLesson = window.location.hash.split('/')[1] || "general";
        const matrix = window.TutorEngine.getConceptMatrix(currentLesson);

        const createNode = (text, type) => {
            const div = document.createElement('div');
            div.className = 'glass';
            div.style.cssText = `
                padding: 12px 20px;
                border-radius: 12px;
                font-size: 0.9rem;
                border: 1px solid ${type === 'current' ? 'var(--accent-magenta)' : 'rgba(255,255,255,0.1)'};
                background: ${type === 'current' ? 'rgba(255,0,255,0.1)' : 'rgba(255,255,255,0.05)'};
                box-shadow: ${type === 'current' ? '0 0 15px rgba(255,0,255,0.2)' : 'none'};
                color: ${type === 'current' ? 'white' : 'rgba(255,255,255,0.7)'};
                text-align: center;
                min-width: 120px;
                z-index: 2;
                transition: transform 0.3s;
                cursor: pointer;
            `;
            div.innerHTML = `<strong>${text.toUpperCase()}</strong>`;
            div.onmouseover = () => div.style.transform = 'scale(1.1)';
            div.onmouseout = () => div.style.transform = 'scale(1)';
            return div;
        };

        const createArrow = (direction) => {
            const arrow = document.createElement('div');
            arrow.style.cssText = `
                width: 2px;
                height: 30px;
                background: linear-gradient(to bottom, transparent, var(--accent-magenta), transparent);
                position: relative;
            `;
            return arrow;
        };

        // Render Columnar Flow
        if (matrix.parents.length > 0) {
            const parentRow = document.createElement('div');
            parentRow.style.display = 'flex';
            parentRow.style.gap = '15px';
            matrix.parents.forEach(p => parentRow.appendChild(createNode(p, 'parent')));
            container.appendChild(parentRow);
            container.appendChild(createArrow());
        }

        container.appendChild(createNode(matrix.current, 'current'));

        if (matrix.children.length > 0) {
            container.appendChild(createArrow());
            const childRow = document.createElement('div');
            childRow.style.display = 'flex';
            childRow.style.gap = '15px';
            matrix.children.forEach(c => childRow.appendChild(createNode(c, 'child')));
            container.appendChild(childRow);
        } else if (matrix.current === "general") {
            container.innerHTML = `<div style="opacity:0.6; font-size:0.9rem;">Navigate to a specific lesson to see the Neural Map connections!</div>`;
        } else {
            const endNode = document.createElement('div');
            endNode.style.cssText = "font-size:0.7rem; opacity:0.4; margin-top:10px;";
            endNode.innerText = "NO DISCOVERED DESCENDANTS";
            container.appendChild(endNode);
        }
    };

    // Neo 5.3: Chat Input Handler
    window.submitTutorChat = () => {
        const input = document.getElementById('tutor-chat-input');
        if (!input) return;

        const query = input.value.trim();
        if (!query) return;

        input.value = '';

        const bubble = document.getElementById('tutor-message');
        if (bubble) {
            bubble.style.borderColor = "var(--accent-cyan)";
            bubble.innerHTML = `<span class="terminal-prefix">></span> <span style="opacity:0.6;">Processing: "${query}"...</span>`;
        }

        setTimeout(() => {
            const response = window.handleChatInput ? window.handleChatInput(query) : "I'm still learning. Try asking about 'quadratic' or 'factor'!";
            if (window.typeTerminalMessage) window.typeTerminalMessage(response);
        }, 500);
    };

    // Neo 5.3: Show Recommendation
    function showRecommendation() {
        const recPanel = document.getElementById('tutor-recommendation');
        const recContent = document.getElementById('recommendation-content');
        if (!recPanel || !recContent || !window.getNextRecommendation) return;

        const progress = getProgress();
        // Initialize Biology Specifics
        document.title = "Sabrina's Biology Portal | TJHSST IBET Prep";

        const lastSubject = localStorage.getItem('lastSubject') || 'cell-bio';
        const subjectId = window.currentSubjectId || 'algebra2';
        const rec = window.getNextRecommendation(subjectId, progress);

        if (rec && rec.message) {
            recContent.innerHTML = rec.message;
            recPanel.style.display = 'block';
        }
    }

    // --- Neo 3.0: Proactive Neo-Sense ---
    let lessonStartTime = Date.now();
    let lastProactiveTrigger = 0;

    setInterval(() => {
        if (!document.body.classList.contains('tutor-open')) return;
        const now = Date.now();
        const timeSpent = (now - lessonStartTime) / 1000;

        const contentText = document.querySelector('.content-area')?.innerText || "";
        const avatar = document.querySelector('.tutor-avatar');

        if (contentText.toLowerCase().includes("singular") || contentText.toLowerCase().includes("extraneous") || contentText.toLowerCase().includes("complex")) {
            if (avatar && !avatar.classList.contains('proactive-alert')) {
                avatar.classList.add('proactive-alert');
                if (now - lastProactiveTrigger > 60000) {
                    window.typeTerminalMessage("COMPLEXITY SPIKE: I've detected non-trivial logic. Focus on the constraints of this domain.");
                    lastProactiveTrigger = now;
                }
            }
        } else if (avatar) {
            avatar.classList.remove('proactive-alert');
        }

        if (timeSpent > 180 && now - lastProactiveTrigger > 120000) {
            window.typeTerminalMessage("STAGNATION ALERT: You've been on this module for 3 minutes. Need a breakdown or should we move to the next challenge?");
            lastProactiveTrigger = now;
        }
    }, 5000);

    function markLessonComplete(lessonId, subjectId) {
        const progress = getProgress();
        const now = new Date();
        const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (!progress[lessonId]) {
            progress[lessonId] = { completed: true, date: dateStr };
            saveProgress(progress);
            checkChapterCompletion(lessonId, subjectId);
        }
    }

    function checkChapterCompletion(lessonId, subjectId) {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        if (!subject) return;

        const unit = subject.units.find(u => u.lectures.some(l => l.url.includes(lessonId)));
        if (!unit) return;

        const progress = getProgress();
        const allCompleted = unit.lectures.every(l => {
            const id = l.url.split(':').pop();
            return progress[id] && progress[id].completed;
        });

        if (allCompleted) {
            showBadgePopup(unit.title);
        }
    }

    function showBadgePopup(chapterTitle) {
        let badgeName = "";
        let icon = "";

        if (chapterTitle.includes("Ch 1") || chapterTitle.includes("ch1-rev")) {
            badgeName = "Master of Foundations";
            icon = "fa-cubes";
        } else if (chapterTitle.includes("Ch 2") || chapterTitle.includes("ch2-rev")) {
            badgeName = "Tool Master";
            icon = "fa-tools";
        } else if (chapterTitle.includes("Ch 3") || chapterTitle.includes("ch3-rev")) {
            badgeName = "Master of Systems";
            icon = "fa-network-wired";
        } else if (chapterTitle.includes("Ch 4") || chapterTitle.includes("ch4-rev")) {
            badgeName = "Master of Matrices";
            icon = "fa-th";
        } else if (chapterTitle.includes("Ch 14") || chapterTitle.includes("ch14-rev")) {
            badgeName = "Trig Identity Master";
            icon = "fa-vector-square";
        } else if (chapterTitle.toLowerCase().includes("amc")) {
            badgeName = "Competition Master";
            icon = "fa-trophy";
            style = "border-color: #ffd700; box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);";
        } else if (chapterTitle.toLowerCase().includes("limit") || chapterTitle.toLowerCase().includes("calculus zero")) {
            badgeName = "Limit Breaker";
            icon = "fa-rocket";
            style = "border-color: var(--accent-cyan); box-shadow: 0 0 30px rgba(0, 210, 255, 0.3);";
        } else if (chapterTitle.includes("Unit 5") && chapterTitle.includes("Calculus")) {
            badgeName = "Calculus Architect";
            icon = "fa-drafting-table";
            style = "border-color: #ffd700; box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);";
        } else if (chapterTitle.includes("Unit 10") && chapterTitle.includes("Calculus")) {
            badgeName = "Infinite Master";
            icon = "fa-infinity";
            style = "border-color: var(--accent-orange); box-shadow: 0 0 30px rgba(255, 140, 0, 0.3);";
        } else if (chapterTitle.includes("Infinity Marathon")) {
            badgeName = "Grand Architect of Infinity";
            icon = "fa-crown";
            style = "border-color: #e5e5e5; box-shadow: 0 0 40px rgba(255, 255, 255, 0.5);";
        } else if (chapterTitle.toLowerCase().includes("precalc") || chapterTitle.includes("Unit 4: Vectors")) {
            badgeName = "Grand Precalculator";
            icon = "fa-project-diagram";
            style = "border-color: var(--accent-blue); box-shadow: 0 0 30px rgba(0, 210, 255, 0.4);";
        }

        if (!badgeName) return;
        const overlay = document.createElement('div');
        overlay.className = 'badge-overlay';
        overlay.innerHTML = `
            <div class="badge-card glass animate__animated animate__zoomIn">
                <div class="logo-icon"><i class="fas fa-microscope"></i></div>
                <span>Sabrina.Bio</span>
                <h2>Achievement Unlocked!</h2>
                <p>You have mastered <strong>${chapterTitle}</strong></p>
                <div class="badge-title">${badgeName}</div>
                <button onclick="this.parentElement.parentElement.remove()" class="glass next-btn">Keep Going!</button>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    function showDashboard() {
        if (window.UIEngine) window.UIEngine.showDashboard();
    }

    function showSubjects() {
        const container = document.getElementById('subjects-grid-full');
        if (container) renderSubjectGrid(MATH_DATA.subjects, container);
    }

    function showStrategy() {
        const container = document.getElementById('strategy-container');
        if (!container) return;
        container.innerHTML = `
            <div class="strategy-wrap fadeIn">
                ${MATH_DATA.strategy.content}
                <div class="tj-edge glass" style="margin-top:30px; border-left-color:var(--accent-cyan);">
                    <h4><i class="fas fa-lightbulb"></i> Pro-Tip</h4>
                    <p>Consistency over intensity. Solve 3 high-quality problems daily rather than 50 once a week.</p>
                </div>
            </div>
        `;
    }

    function showGlossary() {
        const container = document.getElementById('glossary-view');
        if (!container) return;

        const glossary = window.MATH_DATA.glossary || {};
        const terms = Object.keys(glossary).sort();

        container.innerHTML = `
            <div class="hero">
                <h1>Biological <span class="gradient-text">Dictionary</span></h1>
                <p>A comprehensive glossary of TJHSST 9th Grade IBET terminology.</p>
                
                <div class="glossary-search-container glass-card" style="margin-top:30px; display:flex; align-items:center; padding:5px 15px; border-radius:15px; width:100%; max-width:600px;">
                    <i class="fas fa-search" style="opacity:0.5; margin-right:15px;"></i>
                    <input type="text" id="glossary-internal-search" placeholder="Search for a term..." 
                           style="background:none; border:none; color:white; padding:12px 0; width:100%; outline:none; font-size:1rem;">
                </div>
            </div>

            <div id="glossary-accordion-container" class="glossary-accordion" style="margin-top:40px; display:flex; flex-direction:column; gap:12px;">
                ${renderGlossaryItems(terms, glossary)}
            </div>

            <style>
                .glossary-item-box {
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-left: 4px solid var(--accent-blue);
                }
                .glossary-item-box:hover {
                    background: rgba(0, 210, 255, 0.05);
                    transform: translateX(5px);
                    border-color: var(--accent-blue);
                }
                .glossary-item-box.active {
                    background: rgba(0, 210, 255, 0.1);
                    border-color: var(--accent-blue);
                    box-shadow: 0 0 20px rgba(0, 210, 255, 0.1);
                }
                .glossary-header {
                    padding: 15px 25px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .glossary-header h3 { font-size: 1.1rem; color: var(--accent-blue); margin: 0; }
                .glossary-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.3s ease-out;
                    padding: 0 25px;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    opacity: 0.8;
                }
                .glossary-item-box.active .glossary-content {
                    max-height: 200px;
                    padding-bottom: 20px;
                }
                .glossary-item-box .chevron { transition: transform 0.3s ease; opacity: 0.5; }
                .glossary-item-box.active .chevron { transform: rotate(180deg); opacity: 1; }
            </style>
        `;

        // Search logic
        const searchInput = document.getElementById('glossary-internal-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const filtered = terms.filter(t => t.toLowerCase().includes(query) || glossary[t].toLowerCase().includes(query));
                document.getElementById('glossary-accordion-container').innerHTML = renderGlossaryItems(filtered, glossary);
            });
        }
    }

    function renderGlossaryItems(terms, glossary) {
        if (terms.length === 0) return `<div class="glass-card" style="padding:40px; text-align:center; opacity:0.5;">No matching biological terms found in the matrix.</div>`;

        return terms.map(term => `
            <div class="glass-card glossary-item-box fadeIn" onclick="this.classList.toggle('active')">
                <div class="glossary-header">
                    <h3>${term}</h3>
                    <i class="fas fa-chevron-down chevron"></i>
                </div>
                <div class="glossary-content">
                    ${window.UIEngine && window.UIEngine.applyTerminologyTooltips ? window.UIEngine.applyTerminologyTooltips(glossary[term]) : glossary[term]}
                </div>
            </div>
        `).join('');
    }

    function showResources() {
        const container = document.getElementById('resources-container');
        if (!container) return;
        container.innerHTML = MATH_DATA.external_resources.map(res => `
            <a href="${res.url}" target="_blank" class="resource-card glass fadeIn" style="text-decoration:none; color:inherit;">
                <div class="res-icon" style="font-size:1.5rem; margin-bottom:15px; color:var(--accent-cyan);"><i class="${res.icon}"></i></div>
                <p style="font-size:0.85rem; opacity:0.7;">${res.desc}</p>
                <div style="margin-top:15px; font-size:0.75rem; color:var(--accent-cyan);">Visit Site <i class="fas fa-external-link-alt"></i></div>
            </a>
        `).join('');

        // --- NEW: Interactive Tools Section ---
        container.innerHTML += `
            <div class="glass-card fadeIn" style="grid-column: 1 / -1; margin-top:30px; border-color:var(--accent-blue);">
                <h3 style="margin-bottom:20px; color:var(--accent-blue);"><i class="fas fa-calculator"></i> Interactive Graphics Lab</h3>
                <div id="desmos-resource-target" style="height:500px; border-radius:15px; overflow:hidden;">
                    <iframe src="https://www.desmos.com/calculator" width="100%" height="100%" style="border:none;"></iframe>
                </div>
            </div>
            <div class="glass-card fadeIn" style="margin-top:20px; border-color:var(--accent-orange);">
                <h3><i class="fas fa-search-plus"></i> WolframAlpha Insight</h3>
                <p style="font-size:0.9rem; margin-bottom:15px;">Deep computational intelligence for step-by-step solutions.</p>
                <a href="https://www.wolframalpha.com" target="_blank" class="glass" style="display:inline-block; padding:10px 20px; border-radius:10px; color:var(--accent-orange); text-decoration:none;">Launch Intelligence Area</a>
            </div>
        `;
    }

    function showReviewHub() {
        const container = document.getElementById('review-hub-container');
        if (!container) return;

        const history = getQuizHistory();
        if (history.length === 0) {
            container.innerHTML = `
                <div class="glass-card" style="text-align:center; padding:50px;">
                    <i class="fas fa-ghost" style="font-size:3rem; opacity:0.2; margin-bottom:20px;"></i>
                    <h3>No history yet.</h3>
                    <p>Complete some quizzes to build your review bank!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = history.map(item => `
            <div class="review-card glass-card fadeIn" style="border-left: 4px solid ${item.correct ? 'var(--accent-green)' : 'var(--accent-magenta)'};">
                <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:0.8rem; opacity:0.6;">
                    <span>${item.chapter}</span>
                    <span>${item.date}</span>
                </div>
                <p style="font-weight:600; margin-bottom:10px;">${item.question}</p>
                <div style="font-size:0.9rem; padding:10px; background:rgba(255,255,255,0.03); border-radius:8px;">
                    <div style="color:${item.correct ? 'var(--accent-green)' : 'var(--accent-magenta)'}">
                        Your answer: ${item.userAnswer} ${item.correct ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>'}
                    </div>
                    ${!item.correct ? `<div style="color:var(--accent-cyan); margin-top:5px;">Correct answer: ${item.correctAnswer}</div>` : ''}
                </div>
                <div style="margin-top:15px; font-size:0.85rem; line-height:1.6; color:#cbd5e1; border-top:1px dashed rgba(255,255,255,0.1); padding-top:10px;">
                    <strong>Intuition:</strong> ${item.explanation}
                </div>
            </div>
        `).join('');
    }

    function showAtlas(modelId = 'plant-cell') {
        const container = document.getElementById('atlas-view');
        if (!container) return;

        container.innerHTML = `
            <div class="hero">
                <h1>Bio-Anatomical <span class="gradient-text">Atlas</span></h1>
                <p>Interactive neural mapping of biological structures.</p>
                <div style="margin-top:20px; display:flex; gap:15px;">
                    <button class="glass" style="padding:10px 20px; border-radius:10px; color:var(--accent-emerald);" onclick="window.showAtlas('plant-cell')">
                        <i class="fas fa-leaf"></i> Plant Cell
                    </button>
                    <button class="glass" style="padding:10px 20px; border-radius:10px; color:var(--accent-magenta);" onclick="window.showAtlas('animal-cell')">
                        <i class="fas fa-dog"></i> Animal Cell
                    </button>
                </div>
            </div>
            <div id="atlas-mount-point" style="margin-top:30px;"></div>
        `;

        if (window.NeoAtlas) {
            window.NeoAtlas.render(modelId, 'atlas-mount-point');
        }
    }

    function switchView(viewName) {
        if (window.AppRouter) window.AppRouter.switchView(viewName);
    }

    // Nav Item Click Handlers
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.getAttribute('target') === '_blank') return; // Allow external links
            e.preventDefault();
            const view = item.dataset.view;
            if (view) switchView(view);

            // Auto-close sidebar on mobile
            document.querySelector('.sidebar')?.classList.remove('open');
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    }

    // --- Neo 5.5: Theme Engine ---
    const initTheme = () => {
        const savedTheme = localStorage.getItem('genius_math_theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            const icon = document.querySelector('#theme-toggle i');
            if (icon) icon.className = 'fas fa-sun';
        }
    };

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            localStorage.setItem('genius_math_theme', isLight ? 'light' : 'dark');
            const icon = themeToggle.querySelector('i');
            if (icon) icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        });
    }
    initTheme();

    // --- Neo 5.5: Global Search Engine ---
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            if (!term) {
                if (window.AppRouter.currentView === 'dashboard') window.showDashboard();
                else if (window.AppRouter.currentView === 'subjects') window.showSubjects();
                return;
            }
            handleGlobalSearch(term);
        });
    }

    function handleGlobalSearch(term) {
        let correctionTerm = "";
        let filteredSubjects = MATH_DATA.subjects.filter(s =>
            s.title.toLowerCase().includes(term) ||
            s.description.toLowerCase().includes(term) ||
            s.code.toLowerCase().includes(term) ||
            s.units.some(u => u.title.toLowerCase().includes(term) || u.topics?.some(t => t.toLowerCase().includes(term)))
        );

        // Alpha-Fuzzy: If no results, try fuzzy matching
        if (filteredSubjects.length === 0 && term.length > 2 && window.TutorEngine && window.TutorEngine.fuzzyMatch) {
            const threshold = Math.max(2, Math.floor(term.length * 0.3));
            let bestMatch = null;
            let minDistance = threshold + 1;

            MATH_DATA.subjects.forEach(s => {
                const words = [s.title, ...s.units.map(u => u.title)];
                words.forEach(word => {
                    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
                    const cleanTerm = term.replace(/[^a-z0-9]/g, '');
                    const distance = window.TutorEngine.fuzzyMatch(cleanTerm, cleanWord);
                    if (distance < minDistance) {
                        minDistance = distance;
                        bestMatch = s;
                        correctionTerm = word;
                    }
                });
            });

            if (bestMatch) {
                filteredSubjects = [bestMatch];
            }
        }

        const container = document.getElementById('subject-cards-container') || document.getElementById('subjects-grid-full');
        if (container) {
            if (filteredSubjects.length > 0) {
                window.renderSubjectGrid(filteredSubjects, container);
                if (correctionTerm) {
                    const notice = document.createElement('div');
                    notice.className = 'fadeIn';
                    notice.style.cssText = "grid-column: 1/-1; padding:10px; border-radius:10px; background:rgba(0,210,255,0.05); color:var(--accent-cyan); font-size:0.85rem; margin-bottom:15px; border:1px solid rgba(0,210,255,0.2);";
                    notice.innerHTML = `<i class="fas fa-magic"></i> Biometric Correction: Auto-correcting "<strong>${term}</strong>" to "<strong>${correctionTerm}</strong>"`;
                    container.prepend(notice);
                }
            } else {
                container.innerHTML = `<div class="glass-card fadeIn" style="grid-column: 1/-1; text-align:center; padding:50px; border: 1px dashed var(--glass-border);">
                    <i class="fas fa-search-minus" style="font-size:3rem; opacity:0.1; margin-bottom:20px;"></i>
                    <p style="opacity:0.6;">No neural matches found for "${term}". Try another focus.</p>
                </div>`;
            }
        }
    }

    // Note: renderSubjectGrid moved to ui-render.js

    window.showDashboard = showDashboard;
    window.showSubjects = showSubjects;
    window.showStrategy = showStrategy;
    window.showGlossary = showGlossary;
    window.showKnowledgeTree = showKnowledgeTree;
    window.showAtlas = showAtlas;

    window.getProgress = getProgress;
    window.saveProgress = saveProgress;

    // Unified Detail Switcher
    window.showSubjectDetail = (subjectId, unitIdx = null) => {
        window.currentSubjectId = subjectId;
        if (window.AppRouter) window.AppRouter.switchView('dashboard');
        if (window.UIEngine) window.UIEngine.showSubjectDetail(subjectId);

        // If a unit is specified, we could scroll to it here if needed
        if (unitIdx !== null) {
            setTimeout(() => {
                const unitCards = document.querySelectorAll('.unit-card');
                if (unitCards[unitIdx]) {
                    unitCards[unitIdx].scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };

    window.showLessonHandler = (url, subjectId) => {
        if (url.startsWith('lesson:')) {
            const lessonKey = url.split(':').pop();
            showLesson(lessonKey, subjectId);
        } else {
            window.open(url, '_blank');
        }
    }

    async function loadChapterData(chapterId) {
        if (window.CHAPTER_DATA && window.CHAPTER_DATA[chapterId]) return;

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `data/chapters/${chapterId}.js`;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load chapter: ${chapterId}`));
            document.head.appendChild(script);
        });
    }

    function findNextLesson(currentKey, subjectId) {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        if (!subject) return null;

        let allLectures = [];
        subject.units.forEach(u => {
            u.lectures.forEach(l => {
                if (l.url.startsWith('lesson:')) {
                    allLectures.push({
                        key: l.url.split(':').pop(),
                        title: l.name
                    });
                }
            });
        });

        const currentIndex = allLectures.findIndex(l => l.key === currentKey);
        if (currentIndex !== -1 && currentIndex < allLectures.length - 1) {
            return allLectures[currentIndex + 1];
        }
        return null;
    }

    // Expose globally for Next buttons
    window.showLesson = showLesson;

    async function showLesson(lessonKey, subjectId) {
        window.currentLessonKey = lessonKey;
        if (typeof lessonStartTime !== 'undefined') lessonStartTime = Date.now();
        console.log("SHOW LESSON TRIGGERED:", lessonKey, subjectId); // Debug
        try {

            // ... (loading logic)
            const chapterId = lessonKey.split('-')[0];
            try {
                await loadChapterData(chapterId);
            } catch (err) {
                console.error(err);
                alert("Oops! Could not load this chapter. Error: " + err.message);
                return;
            }

            if (!window.CHAPTER_DATA) throw new Error("window.CHAPTER_DATA is undefined");

            const chapterData = window.CHAPTER_DATA[chapterId];
            if (!chapterData) {
                console.error("Available Chapters:", Object.keys(window.CHAPTER_DATA));
                throw new Error(`Chapter data for '${chapterId}' failed to load.`);
            }

            const lessonData = chapterData[lessonKey];
            if (!lessonData) {
                // Simplified error handling
                throw new Error(`Lesson content for '${lessonKey}' not found.`);
            }

            // Restore missing definition
            const nextLesson = findNextLesson(lessonKey, subjectId);
            const nextButtonHtml = nextLesson
                ? `<button class="glass next-btn" onclick="window.finishLesson('${lessonKey}', '${subjectId}'); window.showLesson('${nextLesson.key}', '${subjectId}')" style="padding: 10px 20px; font-weight: 600; color: var(--accent-cyan); display: flex; align-items: center; gap: 8px;">
                 Next <i class="fas fa-arrow-right"></i>
               </button>`
                : '';

            const appContainer = document.getElementById('dashboard-view');
            appContainer.innerHTML = `
            <div class="lesson-view fadeIn">
                <nav class="lesson-nav glass" style="display:flex; justify-content:space-between; align-items:center; padding: 15px 25px;">
                    <button class="glass back-btn" onclick="window.showSubjectDetail('${subjectId}')" style="padding: 10px 20px; font-weight: 600; font-size: 0.95rem; color: var(--text-primary); display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-arrow-left"></i> Syllabus
                    </button>
                    <div class="lesson-title-meta">
                        <span class="lesson-badge">${lessonKey.toUpperCase()}</span>
                        <h2 style="font-size:1.1rem; margin:0;">${lessonData.title}</h2>
                    </div>
                    <div class="lesson-actions" style="display:flex; gap:10px;">
                        <button class="glass" onclick="window.toggleLessonTool()" style="padding:10px 15px; color:var(--accent-blue);"><i class="fas fa-calculator"></i></button>
                        ${nextButtonHtml}
                        <button class="glass complete-btn" onclick="window.finishLesson('${lessonKey}', '${subjectId}')" style="padding:10px 20px;"><i class="fas fa-check"></i> Done</button>
                    </div>
                </nav>
                <div id="lesson-tool-panel" class="glass fadeIn" style="display:none; height:400px; margin: 0 25px; border-radius:15px; overflow:hidden; border:1px solid var(--accent-blue);">
                    <iframe src="https://www.desmos.com/calculator" width="100%" height="100%" style="border:none;"></iframe>
                </div>
                <div class="lesson-body-wrapper">
                    <header class="lesson-header">
                        <p class="subtitle">${lessonData.subtitle}</p>
                    </header>
                    <article class="lesson-content">
                        ${(() => {
                    let content = lessonData.content;
                    // 1. Modern Image Captions (process FIRST)
                    content = content.replace(/<neo-img src="(.*)" caption="(.*)" source="(.*)"><\/neo-img>/g, (match, src, cap, srcName) => {
                        return `
                                    <div class="lesson-image-wrap fadeIn">
                                        <img src="${src}" alt="${cap}">
                                        <p class="image-caption">${cap}</p>
                                        <span class="image-source">Source: ${srcName}</span>
                                    </div>
                                `;
                    });
                    // 2. Terminology Tooltips (process LAST)
                    if (window.UIEngine && window.UIEngine.applyTerminologyTooltips) {
                        content = window.UIEngine.applyTerminologyTooltips(content);
                    }
                    return content;
                })()}
                    </article>
                    <div class="lesson-footer" style="margin-top: 50px; text-align: right; padding-bottom: 60px;">
                        ${nextButtonHtml ?
                    `<button class="next-btn-large" onclick="window.finishLesson('${lessonKey}', '${subjectId}'); window.showLesson('${nextLesson.key}', '${subjectId}')" style="padding: 15px 35px; font-size: 1.1rem; font-weight: 800; color: #000 !important; background: #00d2ff !important; border: none; border-radius: 50px; cursor: pointer; box-shadow: 0 0 25px rgba(0,210,255,0.6); transition: all 0.2s; display: inline-flex; align-items: center; gap: 10px;">
                                <span>NEXT LESSON</span>
                                <span style="font-weight:400; opacity:0.9;">${nextLesson.title}</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>`
                    : '<div style="color:var(--text-secondary); font-style:italic;">End of Chapter</div>'
                }
                    </div>
                </div>
            </div>
        `;

            // Fix: Scroll the actual content container to top
            document.querySelector('.content-area')?.scrollTo(0, 0);

            // Re-trigger MathJax
            if (window.MathJax) {
                MathJax.typesetPromise();
            }

            // --- Elite 3.0: Interactive Graphics Lab (Desmos) ---
            if (lessonData.vizConfig) {
                window.initDesmosLab(lessonData.vizConfig);
            }

            // --- Legacy Triggers (Keep for compatibility) ---
            if (lessonKey === 'ch3-4') setTimeout(renderLPViz, 500);
            if (lessonKey === 'ch4-2') setTimeout(renderMatrixViz, 500);
            if (lessonKey === 'ch4-3') setTimeout(renderMatrixViz, 500);

            // Interactive Engine: Matrix Collapse Viz (Ch 4.4)
            if (lessonKey.includes('ch4-4')) {
                setTimeout(renderMatrixCollapseViz, 500);
            }
            // Interactive Engine: Parabola Viz (Ch 5.6)
            if (lessonKey.includes('ch5-6')) {
                setTimeout(renderParabolaViz, 500);
            }

            // Interactive Engine: Synthetic Division Viz (Ch 6.3)
            if (lessonKey.includes('ch6-3')) {
                setTimeout(renderSyntheticDivisionViz, 500);
            }

            // Interactive Engine: Root Curvature Slider (Ch 7.7)
            if (lessonKey.includes('ch7-7')) {
                setTimeout(renderRootSliderViz, 500);
            }

            // Interactive Engine: Log Chart Viz (Ch 8.3)
            if (lessonKey.includes('ch8-3')) {
                setTimeout(renderLogChartViz, 500);
            }

        } catch (e) {
            console.error("FATAL LESSON ERROR:", e);
            alert("CRITICAL ERROR:\\n" + e.message + "\\n\\nSee console for details.");
        }
    }
    window.finishLesson = (key, subId) => {
        markLessonComplete(key, subId);

        // --- NEW: Check if this was the last lesson in the unit ---
        const subject = MATH_DATA.subjects.find(s => s.id === subId);
        const unit = subject.units.find(u => u.lectures.some(l => l.url.includes(key)));

        if (unit && unit.quiz) {
            // Check if all other lessons in this unit are also done
            const progress = getProgress();
            const allLessonsDone = unit.lectures.every(l => {
                const id = l.url.includes('lesson:') ? l.url.split(':').pop() : null;
                return !id || (progress[id] && progress[id].completed);
            });

            if (allLessonsDone) {
                const unitIdx = subject.units.indexOf(unit);
                window.showUnitQuiz(subId, unitIdx);
                return; // Stop here, showing quiz instead of detail
            }
        }

        window.showSubjectDetail(subId);
    };

    // --- NEW: Chapter Graduation Quiz ---
    window.showUnitQuiz = (subjectId, unitIdx) => {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        const unit = subject.units[unitIdx];
        const quiz = unit.quiz;
        const isMultiLevel = quiz.levels && Array.isArray(quiz.levels);

        // For multi-level, we use the last level (Level 3: Mastery) as the graduation challenge
        const targetLevel = isMultiLevel ? quiz.levels[quiz.levels.length - 1] : quiz;
        const appContainer = document.getElementById('dashboard-view');

        appContainer.innerHTML = `
            <div class="quiz-overlay fadeIn">
                <div class="quiz-standalone-card glass animate__animated animate__zoomIn" style="max-width:600px;">
                    <span class="chapter-badge">${unit.title}</span>
                    <h2 class="gradient-text">Graduation Challenge</h2>
                    <p style="opacity:0.7; margin-bottom:30px;">Complete this final mastery check to finalize your chapter credits.</p>
                    
                    <div class="question-box">
                        <p>${targetLevel.question}</p>
                    </div>
                    
                    <div class="options-grid">
                        ${targetLevel.options ? targetLevel.options.map(opt => `
                            <button class="glass quiz-btn" onclick="window.handleFinalQuizAnswer('${subjectId}', ${unitIdx}, '${opt.replace(/'/g, "\\'")}')">
                                ${opt}
                            </button>
                        `).join('') : `
                            <div class="justification-box" style="margin-top:20px;">
                                <textarea id="justification-input" class="glass-input" style="width:100%; height:100px; padding:15px; margin-bottom:15px;" placeholder="${targetLevel.template || 'Explain your reasoning...'}"></textarea>
                                <button class="glass next-btn" style="width:100%;" onclick="window.handleJustificationSubmit('${subjectId}', ${unitIdx})">SUBMIT MASTERY LOGIC</button>
                            </div>
                        `}
                    </div>
                    
                    <div id="final-quiz-feedback" style="margin-top:30px; font-weight:600;"></div>
                </div>
            </div>
        `;

        if (window.MathJax) MathJax.typesetPromise();
    };

    window.getWrongAnswerHint = (question, selected, correct) => {
        const lowerQ = question.toLowerCase();
        if (lowerQ.includes('converge') || lowerQ.includes('infinite')) {
            return "Hint: For a geometric series to converge, $|r|$ must be strictly less than 1. Check your ratio.";
        }
        if (lowerQ.includes('z-score') || lowerQ.includes('standard deviation')) {
            return "Hint: A Z-score measures how many $\\sigma$ units a value is from the mean. Recall the 68-95-99.7 rule.";
        }
        if (lowerQ.includes('period') || lowerQ.includes('wave')) {
            return "Hint: The period of $y = \\sin(bx)$ is $2\\pi/b$. If $b$ increases, the period must shrink.";
        }
        return "Think about the core intuition box for this chapter. Is the growth additive or multiplicative?";
    };

    window.handleJustificationSubmit = (subjectId, unitIdx) => {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        const unit = subject.units[unitIdx];
        const targetLevel = unit.quiz.levels[unit.quiz.levels.length - 1];
        const input = document.getElementById('justification-input').value;
        const feedback = document.getElementById('final-quiz-feedback');

        if (!input.trim()) return;

        saveQuizAttempt({
            chapter: unit.title,
            question: targetLevel.question,
            userAnswer: "[Justification Provided]",
            correctAnswer: targetLevel.answer,
            correct: true,
            explanation: targetLevel.answer,
            date: new Date().toLocaleString()
        });

        feedback.innerHTML = `
            <div class="celebration-badge animate__animated animate__tada">
                <h3 style="color:#ffd700;"><i class="fas fa-crown"></i> MASTERY ACHIEVED</h3>
                <p style="color:white; font-size:0.9rem;">Your reasoning has been verified by the Elite 5.3 Neural Link.</p>
            </div>
        `;

        if (window.confetti) {
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#ffd700', '#00d2ff', '#9d50bb'] });
        }

        setTimeout(() => { window.showSubjectDetail(subjectId); }, 3000);
    };

    window.handleFinalQuizAnswer = (subjectId, unitIdx, selected) => {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        const unit = subject.units[unitIdx];
        const quiz = unit.quiz;
        const isMultiLevel = quiz.levels && Array.isArray(quiz.levels);
        const targetLevel = isMultiLevel ? quiz.levels[quiz.levels.length - 1] : quiz;

        const feedback = document.getElementById('final-quiz-feedback');
        const normalize = (s) => s.toString().trim().replace(/\\s+/g, ' ').replace(/[\\u223C\\u223D\\u223E\\u2241\\u2242\\u2243\\u2244\\u2245\\u2246\\u2247\\u2248\\u2249\\u224A\\u224B\\u224C\\u224D\\u224E\\u224F\\u223B\\u223A\\u2239\\u2238\\u2237\\u2236]/g, '~');
        const isCorrect = normalize(selected) === normalize(targetLevel.answer);

        saveQuizAttempt({
            chapter: unit.title,
            question: targetLevel.question,
            userAnswer: selected,
            correctAnswer: targetLevel.answer,
            correct: isCorrect,
            explanation: targetLevel.explanation || targetLevel.answer,
            date: new Date().toLocaleString()
        });

        if (isCorrect) {
            feedback.innerHTML = `
                <div class="celebration-badge animate__animated animate__bounceIn">
                    <h3 style="color:var(--accent-green);"><i class="fas fa-check-double"></i> MATRIX VERIFIED</h3>
                    <p style="color:white; font-size:0.9rem;">Chapter Graduation Successful. Credits Issued.</p>
                </div>
            `;
            if (window.confetti) {
                confetti({ particleCount: 100, spread: 60, origin: { y: 0.7 } });
            }
            setTimeout(() => {
                window.showSubjectDetail(subjectId);
            }, 2500);
        } else {
            feedback.style.color = "var(--accent-magenta)";
            feedback.innerHTML = `
                <div style="text-align:center;">
                    <p style="margin-bottom:20px;"><i class="fas fa-times-circle"></i> Discrepancy detected. Neural link suggests reviewing the intuition box.</p>
                    <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
                        <button class="glass quiz-btn" style="padding:12px 28px; cursor:pointer; border:1px solid var(--accent-cyan); color:var(--accent-cyan);"
                            onclick="window.showUnitQuiz('${subjectId}', ${unitIdx})">
                            <i class="fas fa-redo"></i> Try Again
                        </button>
                        <button class="glass quiz-btn" style="padding:12px 28px; cursor:pointer; border:1px solid var(--accent-magenta); color:var(--accent-magenta);"
                            onclick="window.showSubjectDetail('${subjectId}')">
                            <i class="fas fa-arrow-left"></i> Review Lessons
                        </button>
                    </div>
                </div>
            `;
            const card = document.querySelector('.quiz-standalone-card');
            if (card) {
                card.classList.add('animate__shakeX');
                setTimeout(() => card.classList.remove('animate__shakeX'), 500);
            }
        }
    };

    function renderLPViz() {
        const container = document.getElementById('lp-viz-container');
        if (!container) return;

        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.5); padding:15px; border-radius:15px; border:1px solid var(--accent-cyan); display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
                <canvas id="lp-canvas" width="300" height="300" style="background:#050505; border-radius:10px; cursor:crosshair; box-shadow: 0 0 10px rgba(0,210,255,0.1);"></canvas>
                <div style="flex:1; min-width:200px;">
                    <h4 style="color:var(--accent-cyan); margin-bottom:10px;"><i class="fas fa-chart-area"></i> Feasible Region</h4>
                    <p style="font-size:0.85rem; color:#aaa; margin-bottom:15px;">The Optimal Solution (Max Profit) is always at a Vertex.</p>
                    <div id="lp-status" style="font-family:monospace; background:rgba(255,255,255,0.05); padding:10px; border-radius:5px; border-left:3px solid var(--accent-cyan); min-height:60px;">
                        Hover over vertices...
                    </div>
                </div>
            </div>
        `;

        const canvas = document.getElementById('lp-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Config
        const vertices = [
            { x: 50, y: 250, label: "A (0,0)", val: 0 },
            { x: 50, y: 50, label: "B (0,8)", val: 80 },
            { x: 200, y: 100, label: "C (6,6)", val: 180 },
            { x: 250, y: 250, label: "D (8,0)", val: 160 }
        ];

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Grid & Axes
            ctx.strokeStyle = '#222'; ctx.lineWidth = 1;
            for (let i = 0; i < 300; i += 25) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 300); ctx.stroke(); ctx.moveTo(0, i); ctx.lineTo(300, i); ctx.stroke(); }
            ctx.strokeStyle = '#555'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(50, 0); ctx.lineTo(50, 300); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, 250); ctx.lineTo(300, 250); ctx.stroke();

            // Feasible Region
            ctx.fillStyle = 'rgba(0, 210, 255, 0.15)';
            ctx.strokeStyle = 'var(--accent-cyan)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(vertices[0].x, vertices[0].y);
            vertices.forEach(v => ctx.lineTo(v.x, v.y));
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Vertices
            vertices.forEach(v => {
                ctx.fillStyle = '#fff';
                ctx.beginPath(); ctx.arc(v.x, v.y, 5, 0, Math.PI * 2); ctx.fill();
                if (v.val === 180) { // Optimal Pulse
                    ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)'; ctx.lineWidth = 4; ctx.stroke();
                }
            });
        }

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            let hovered = null;
            let minDist = 20;

            vertices.forEach(v => {
                const dist = Math.sqrt((mouseX - v.x) ** 2 + (mouseY - v.y) ** 2);
                if (dist < minDist) { minDist = dist; hovered = v; }
            });

            const statusEl = document.getElementById('lp-status');
            if (hovered) {
                canvas.style.cursor = 'pointer';
                const color = hovered.val === 180 ? 'var(--accent-green)' : '#fff';
                const extra = hovered.val === 180 ? '<br><strong>★ MAX OPTIMAL ★</strong>' : '';
                statusEl.innerHTML = `Vertex: <span style="color:${color}">${hovered.label}</span><br>Profit Z = $${hovered.val}${extra}`;
            } else {
                canvas.style.cursor = 'crosshair';
                statusEl.innerHTML = "Hover over vertices to inspecting Profit function P = 20x + 10y";
            }
        });

        draw();
    }

    function renderMatrixViz() {
        const container = document.getElementById('matrix-graphics-container') || document.getElementById('matrix-canvas-container');
        if (!container) return;

        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.6); padding:20px; border-radius:15px; border:1px solid var(--accent-blue); text-align:center;">
                <canvas id="matrix-canvas" width="300" height="200" style="background:#050505; border-radius:10px; box-shadow: 0 0 15px rgba(0,210,255,0.1);"></canvas>
                <p style="font-size:0.75rem; color:var(--accent-blue); margin-top:10px; font-family:monospace;">
                    <i class="fas fa-cube"></i> Real-time 3D Projection Matrix<br>
                    <span style="opacity:0.7;">$R_y(\\theta) \\cdot P_{vec}$</span>
                </p>
            </div>`;

        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let angle = 0;

        // 3D Cube Vertices (x, y, z) centered at 0
        const cube = [
            { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
            { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
        ];

        // Edges connecting vertices
        const edges = [
            [0, 1], [1, 2], [2, 3], [3, 0], // Front Face (technically Back)
            [4, 5], [5, 6], [6, 7], [7, 4], // Back Face (technically Front)
            [0, 4], [1, 5], [2, 6], [3, 7]  // Connecting Lines
        ];

        function project(p, theta) {
            // 1. Rotation Matrix (Rotate around Y axis)
            // | cos 0 sin |
            // |  0  1  0  |
            // |-sin 0 cos |
            const cost = Math.cos(theta);
            const sint = Math.sin(theta);

            let x = p.x * cost + p.z * sint;
            let y = p.y;
            let z = p.x * -sint + p.z * cost;

            // 2. Perspective Projection
            // ScreenX = x / (z + cameraDist)
            const fov = 150;
            const dist = 3;
            const scale = fov / (dist - z);

            return {
                x: x * scale + canvas.width / 2,
                y: y * scale + canvas.height / 2
            };
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate Projected Points
            const points = cube.map(v => project(v, angle));

            // Draw Edges
            ctx.strokeStyle = '#00d2ff';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            edges.forEach(e => {
                const p1 = points[e[0]];
                const p2 = points[e[1]];
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            });

            // Draw Vertices (Glowing Dots)
            points.forEach(p => {
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                ctx.fill();
            });

            angle += 0.02; // Smooth rotation
            requestAnimationFrame(draw);
        }
        draw();
    }

    function renderMatrixCollapseViz() {
        const container = document.getElementById('matrix-collapse-container');
        if (!container) return;
        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.4); padding:20px; border-radius:15px; border:1px solid var(--accent-magenta);">
                <canvas id="collapse-canvas" width="300" height="250" style="background:#000; border-radius:10px;"></canvas>
                <div style="margin-top:15px;">
                    <button class="glass" onclick="window.applyCollapse(true)">Identity (det=1)</button>
                    <button class="glass" onclick="window.applyCollapse(false)" style="color:var(--accent-orange)">Collapse (det=0)</button>
                </div>
                <div id="collapse-info" style="margin-top:10px; font-size:0.8rem; color:var(--accent-magenta);">[ Normal Space ]</div>
            </div>
        `;
        const canvas = document.getElementById('collapse-canvas');
        const ctx = canvas.getContext('2d');
        let m = [[1, 0], [0, 1]], target = [[1, 0], [0, 1]];
        window.applyCollapse = (isId) => {
            target = isId ? [[1, 0], [0, 1]] : [[1, 1], [1, 1]];
            document.getElementById('collapse-info').innerText = isId ? '[ Normal Space (det=1) ]' : '[ Space Collapsed (det=0) ]';
        };
        function draw() {
            ctx.clearRect(0, 0, 300, 250);
            for (let i = 0; i < 4; i++) m[0][i % 2] += (target[0][i % 2] - m[0][i % 2]) * 0.05; // Simplified lerp
            ctx.strokeStyle = '#9d50bb';
            ctx.beginPath();
            ctx.moveTo(150 + (-50 * m[0][0] + -50 * m[0][1]), 125 - (-50 * m[1][0] + -50 * m[1][1]));
            ctx.lineTo(150 + (50 * m[0][0] + -50 * m[0][1]), 125 - (50 * m[1][0] + -50 * m[1][1]));
            ctx.lineTo(150 + (50 * m[0][0] + 50 * m[0][1]), 125 - (50 * m[1][0] + 50 * m[1][1]));
            ctx.lineTo(150 + (-50 * m[0][0] + 50 * m[0][1]), 125 - (-50 * m[1][0] + 50 * m[1][1]));
            ctx.closePath(); ctx.stroke();
            requestAnimationFrame(draw);
        }
        draw();
    }

    window.checkQuizAnswer = (uIdx, sel, corr, expl, chapterTitle, questionText) => {
        const normalize = (s) => s.toString().trim().replace(/\\s+/g, ' ').replace(/[\\u223C\\u223D\\u223E\\u2241\\u2242\\u2243\\u2244\\u2245\\u2246\\u2247\\u2248\\u2249\\u224A\\u224B\\u224C\\u224D\\u224E\\u224F\\u223B\\u223A\\u2239\\u2238\\u2237\\u2236]/g, '~');
        const isCorrect = normalize(sel) === normalize(corr);
        const f = document.getElementById(`feedback-${uIdx}`);
        f.style.display = 'block';

        // Enhanced feedback with hints for wrong answers
        if (isCorrect) {
            f.innerHTML = `<p style="color:var(--accent-green)"><i class="fas fa-check-circle"></i> Correct! ${expl}</p>`;
        } else {
            const hint = window.getWrongAnswerHint ? window.getWrongAnswerHint(questionText, sel, corr) : '';
            f.innerHTML = `<p style="color:var(--accent-orange)"><i class="fas fa-times-circle"></i> Incorrect. ${expl}</p>
                ${hint ? `<div style="margin-top:10px; padding:10px; background:rgba(0,210,255,0.1); border-radius:8px; font-size:0.85rem;">${hint}</div>` : ''}`;
        }

        // Record to Neo 5.1 stats tracker
        const topic = chapterTitle ? chapterTitle.split(' ').slice(0, 2).join(' ') : 'general';
        if (window.recordQuizResult) {
            window.recordQuizResult(topic, isCorrect);
        }

        saveQuizAttempt({
            chapter: chapterTitle || "Unknown Chapter",
            question: questionText || "Multiple Choice Question",
            userAnswer: sel,
            correctAnswer: corr,
            correct: isCorrect,
            explanation: expl,
            date: new Date().toLocaleString()
        });

        // Trigger MathJax re-render
        if (window.MathJax) MathJax.typesetPromise();
    };

    window.startDecryptionMission = () => {
        const c = document.getElementById('decrypt-mission');
        c.innerHTML = `<div class="glass" style="padding:20px; border:1px solid var(--accent-blue);">
            <h4>Decrypt: [14, 28, 5, 10, 21, 42]</h4>
            <p>Matrix A: [[1,1],[0,2]]</p>
            <input type="text" id="decode-in" placeholder="Code?" class="glass" style="padding:10px; color:white;">
            <button class="glass" onclick="window.verifyDecryption()">Decode</button>
            <div id="dec-res"></div>
        </div>`;
    };

    window.verifyDecryption = () => {
        const v = document.getElementById('decode-in').value.toLowerCase();
        document.getElementById('dec-res').innerHTML = (v.includes('math') || v.includes('genius')) ? '<p style="color:var(--accent-green)">SUCCESS!</p>' : '<p style="color:var(--accent-orange)">FAIL.</p>';
    };

    function renderParabolaViz() {
        const container = document.getElementById('parabola-viz-container');
        if (!container) return;

        container.innerHTML = `
            <div style="background:rgba(0,0,0,0.4); padding:20px; border-radius:15px; border:1px solid var(--accent-orange);">
                <div style="margin-bottom:15px; display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
                    <div class="input-group">
                        <label>a:</label>
                        <input type="number" id="p-a" value="1" step="0.5" class="glass-input" style="width:50px; background:rgba(255,255,255,0.1); border:1px solid var(--accent-orange); color:white; border-radius:5px; padding:2px 5px;">
                    </div>
                    <div class="input-group">
                        <label>b:</label>
                        <input type="number" id="p-b" value="0" step="0.5" class="glass-input" style="width:50px; background:rgba(255,255,255,0.1); border:1px solid var(--accent-orange); color:white; border-radius:5px; padding:2px 5px;">
                    </div>
                    <div class="input-group">
                        <label>c:</label>
                        <input type="number" id="p-c" value="0" step="0.5" class="glass-input" style="width:50px; background:rgba(255,255,255,0.1); border:1px solid var(--accent-orange); color:white; border-radius:5px; padding:2px 5px;">
                    </div>
                </div>
                <canvas id="parabola-canvas" width="300" height="250" style="background:#000; border-radius:10px;"></canvas>
                <div id="parabola-info" style="margin-top:15px; font-family:monospace; font-size:0.8rem; color:var(--accent-orange);">
                    Discriminant D = 0 | Roots: 1 Real
                </div>
            </div>
        `;

        const canvas = document.getElementById('parabola-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const infoEl = document.getElementById('parabola-info');

        const inputs = ['p-a', 'p-b', 'p-c'];
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', draw);
        });

        function draw() {
            const a = parseFloat(document.getElementById('p-a').value) || 0;
            const b = parseFloat(document.getElementById('p-b').value) || 0;
            const c = parseFloat(document.getElementById('p-c').value) || 0;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Axis
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2); ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.moveTo(canvas.width / 2, 0); ctx.lineTo(canvas.width / 2, canvas.height);
            ctx.stroke();

            // Draw Parabola
            ctx.strokeStyle = 'var(--accent-orange)';
            ctx.lineWidth = 2;
            ctx.beginPath();

            const scale = 15;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let px = -centerX; px <= centerX; px++) {
                let x = px / scale;
                let y = a * x * x + b * x + c;
                let screenX = centerX + px;
                let screenY = centerY - (y * scale);

                if (px === -centerX) ctx.moveTo(screenX, screenY);
                else ctx.lineTo(screenX, screenY);
            }
            ctx.stroke();

            // Calc Discriminant
            const D = b * b - 4 * a * c;
            let resText = "";
            if (D > 0) resText = "<span style='color:var(--accent-green)'>2 Distinct Real Roots</span>";
            else if (D === 0) resText = "<span style='color:var(--accent-blue)'>1 Repeated Real Root (Tangent)</span>";
            else resText = "<span style='color:var(--accent-magenta)'>2 Complex Conjugate Roots (i)</span>";

            infoEl.innerHTML = `Discriminant D = ${D.toFixed(2)}<br>${resText}`;
        }

        draw();
    }

    function renderSyntheticDivisionViz() {
        const container = document.getElementById('synthetic-viz-container');
        if (!container) return;

        container.innerHTML = `
            <div class="glass-card" style="padding:25px; border:1px solid var(--accent-magenta);">
                <h4 style="color:var(--accent-magenta); margin-bottom:15px;"><i class="fas fa-microchip"></i> Horner's Method Simulator</h4>
                <div style="display:flex; gap:10px; margin-bottom:20px; align-items:center;">
                    <label>Root (c):</label>
                    <input type="number" id="sd-root" value="2" class="glass-input" style="width:50px;">
                    <label style="margin-left:15px;">Coefficients (e.g. 1, -4, 1, 6):</label>
                    <input type="text" id="sd-coeffs" value="1, -4, 1, 6" class="glass-input" style="flex:1;">
                    <button class="glass" onclick="window.runSyntheticDivision()" style="background:var(--accent-magenta); color:white; padding:5px 15px;">Execute</button>
                </div>
                <div id="sd-result-area" style="font-family:monospace; font-size:1.1rem; line-height:2;"></div>
            </div>
        `;

        window.runSyntheticDivision = () => {
            const root = parseFloat(document.getElementById('sd-root').value);
            const coeffs = document.getElementById('sd-coeffs').value.split(',').map(s => parseFloat(s.trim()));
            const area = document.getElementById('sd-result-area');

            if (!coeffs.length || isNaN(root)) return;

            let current = coeffs[0];
            let steps = [`<span style="color:var(--accent-blue)">Initial: ${current}</span>`];
            let results = [current];

            for (let i = 1; i < coeffs.length; i++) {
                let nextVal = current * root;
                current = coeffs[i] + nextVal;
                results.push(current);
                steps.push(`<span style="color:var(--accent-magenta)">(${current - coeffs[i]} + ${coeffs[i]})</span> &rarr; <strong>${current}</strong>`);
            }

            const isRemainderZero = results[results.length - 1] === 0;
            area.innerHTML = `
                <div style="margin-bottom:10px;">Process: ${steps.join(' | ')}</div>
                <div style="border-top:1px solid rgba(255,255,255,0.2); padding-top:10px;">
                    Final Coefficients: [${results.slice(0, -1).join(', ')}] <br>
                    Remainder: <span style="color:${isRemainderZero ? 'var(--accent-green)' : 'var(--accent-orange)'}">${results[results.length - 1]}</span>
                    ${isRemainderZero ? `<br><span style="color:var(--accent-green); font-size:0.8rem;">(x - ${root}) is a FACTOR!</span>` : ''}
                </div>
            `;
        };

        window.runSyntheticDivision();
    }

    function renderRootSliderViz() {
        const container = document.getElementById('root-slider-container');
        if (!container) return;

        container.innerHTML = `
            <div class="glass-card" style="padding:25px; border:1px solid var(--accent-blue);">
                <h4 style="color:var(--accent-blue); margin-bottom:15px;"><i class="fas fa-chart-line"></i> Root Curvature Simulator</h4>
                <div style="margin-bottom:20px;">
                    <label>Index (n): <span id="n-val" style="color:var(--accent-magenta); font-weight:bold;">2</span></label>
                    <input type="range" id="root-n-slider" min="1" max="10" step="1" value="2" style="width:100%; margin-top:10px;">
                    <p style="font-size:0.8rem; opacity:0.7; margin-top:5px;">Observing $y = x^{1/n}$</p>
                </div>
                <div style="height:200px; position:relative; border-left:2px solid rgba(255,255,255,0.2); border-bottom:2px solid rgba(255,255,255,0.2); margin-top:10px;">
                    <canvas id="root-canvas" width="400" height="200" style="width:100%; height:100%;"></canvas>
                </div>
            </div>
        `;

        const canvas = document.getElementById('root-canvas');
        const ctx = canvas.getContext('2d');
        const nSlider = document.getElementById('root-n-slider');
        const nLabel = document.getElementById('n-val');

        function drawGraph(n) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#00d2ff';
            ctx.lineWidth = 3;
            ctx.beginPath();

            for (let px = 0; px < canvas.width; px++) {
                const x = px / 40; // Scale
                const y = Math.pow(x, 1 / n);
                const py = canvas.height - (y * 50); // Scale and flip

                if (px === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();

            // Glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00d2ff';
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        nSlider.oninput = () => {
            const n = parseFloat(nSlider.value);
            nLabel.innerText = n;
            drawGraph(n);
        };

        drawGraph(2);
    }

    function renderLogChartViz() {
        const container = document.getElementById('log-chart-container');
        if (!container) return;

        container.innerHTML = `
            <div class="glass-card" style="padding:25px; border:1px solid var(--accent-magenta);">
                <h4 style="color:var(--accent-magenta); margin-bottom:15px;"><i class="fas fa-chart-area"></i> Growth Speed: Log vs. Exponential</h4>
                <div style="height:250px; position:relative; border-left:2px solid rgba(255,255,255,0.2); border-bottom:2px solid rgba(255,255,255,0.2); margin-bottom:10px;">
                    <canvas id="log-canvas" width="400" height="250" style="width:100%; height:100%;"></canvas>
                </div>
                <div style="display:flex; justify-content:space-around; font-size:0.8rem;">
                    <span style="color:#ff007f;"><i class="fas fa-minus"></i> Exponential ($2^x$)</span>
                    <span style="color:#ffffff;"><i class="fas fa-minus"></i> Linear ($x$)</span>
                    <span style="color:#00d2ff;"><i class="fas fa-minus"></i> Log ($\\log_2 x$)</span>
                </div>
            </div>
        `;

        const canvas = document.getElementById('log-canvas');
        const ctx = canvas.getContext('2d');

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Linear (White)
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            ctx.lineTo(canvas.width, 0);
            ctx.stroke();

            // 2. Exponential (Magenta)
            ctx.strokeStyle = '#ff007f';
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x++) {
                const val = Math.pow(2, x / 40);
                const py = canvas.height - (val * 10);
                if (x === 0) ctx.moveTo(x, py);
                else ctx.lineTo(x, py);
            }
            ctx.stroke();

            // 3. Logarithm (Cyan)
            ctx.strokeStyle = '#00d2ff';
            ctx.beginPath();
            for (let x = 1; x < canvas.width; x++) {
                const val = Math.log2(x / 10);
                const py = canvas.height - (val * 40 + 100);
                if (x === 1) ctx.moveTo(x, py);
                else ctx.lineTo(x, py);
            }
            ctx.stroke();
        }

        draw();
    }

    // --- Knowledge Tree Implementation ---
    let treeState = { scale: 1 };

    function showKnowledgeTree() {
        const svg = document.getElementById('knowledge-svg');
        if (!svg) return;
        svg.innerHTML = ''; // Clear

        const subjects = MATH_DATA.subjects;
        const nodes = [];
        const edges = [];

        // Dynamic Layout Algorithm
        subjects.forEach((sub, sIdx) => {
            const subjectNodeId = `sub_${sub.id}`;
            const sx = 200 + (sIdx * 400); // Increased spacing for clarity
            const sy = 300;

            nodes.push({ id: subjectNodeId, x: sx, y: sy, label: sub.title, color: sub.color || '#fff', size: 45, type: 'subject', subjectId: sub.id });

            sub.units.forEach((unit, uIdx) => {
                const unitNodeId = `unit_${sub.id}_${uIdx}`;
                const ux = sx + (Math.cos(uIdx * 0.8) * 140);
                const uy = sy + (Math.sin(uIdx * 0.8) * 140);

                nodes.push({
                    id: unitNodeId,
                    x: ux, y: uy,
                    label: unit.title.split(':')[0],
                    color: sub.color,
                    size: 22,
                    type: 'unit',
                    subjectId: sub.id,
                    unitIdx: uIdx
                });
                edges.push([subjectNodeId, unitNodeId]);
            });

            // Connect subjects in sequence
            if (sIdx > 0) {
                edges.push([`sub_${subjects[sIdx - 1].id}`, subjectNodeId]);
            }
        });

        const gContainer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        svg.appendChild(gContainer);

        // Draw Edges
        edges.forEach(edge => {
            const start = nodes.find(n => n.id === edge[0]);
            const end = nodes.find(n => n.id === edge[1]);
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', start.x); line.setAttribute('y1', start.y);
            line.setAttribute('x2', end.x); line.setAttribute('y2', end.y);
            line.setAttribute('stroke', 'rgba(255,255,255,0.12)');
            line.setAttribute('stroke-width', '2');
            gContainer.appendChild(line);
        });

        // Draw Nodes
        nodes.forEach(node => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.style.cursor = 'pointer';
            g.onclick = (e) => {
                e.stopPropagation();
                if (node.unitIdx !== undefined) {
                    window.showSubjectDetail(node.subjectId, node.unitIdx);
                } else {
                    window.showSubjectDetail(node.subjectId);
                }
            };

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', node.x); circle.setAttribute('cy', node.y);
            circle.setAttribute('r', node.size || 25);
            circle.setAttribute('fill', 'rgba(0,0,0,0.9)');
            circle.setAttribute('stroke', node.color);
            circle.setAttribute('stroke-width', '3');
            circle.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
            circle.style.filter = `drop-shadow(0 0 15px ${node.color}66)`;

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', node.x); text.setAttribute('y', node.y + (node.size ? node.size + 25 : 50));
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#fff');
            text.style.fontSize = '12px';
            text.style.fontWeight = '600';
            text.style.pointerEvents = 'none';
            text.style.opacity = '0.8';
            text.textContent = node.label;

            g.onmouseenter = () => {
                circle.setAttribute('r', (node.size || 25) * 1.2);
                circle.setAttribute('stroke-width', '5');
                circle.style.filter = `drop-shadow(0 0 25px ${node.color})`;
                text.style.opacity = '1';
            };
            g.onmouseleave = () => {
                circle.setAttribute('r', node.size || 25);
                circle.setAttribute('stroke-width', '3');
                circle.style.filter = `drop-shadow(0 0 15px ${node.color}66)`;
                text.style.opacity = '0.8';
            };

            g.appendChild(circle);
            g.appendChild(text);
            gContainer.appendChild(g);
        });

        // --- Interaction Logic ---
        let isDragging = false;
        let startPos = { x: 0, y: 0 };
        let viewPos = { x: 0, y: 0 };

        const updateView = () => {
            gContainer.setAttribute('transform', `translate(${viewPos.x}, ${viewPos.y}) scale(${treeState.scale})`);
        };

        svg.onmousedown = (e) => {
            isDragging = true;
            startPos = { x: e.clientX - viewPos.x, y: e.clientY - viewPos.y };
            svg.style.cursor = 'grabbing';
        };

        window.onmousemove = (e) => {
            if (!isDragging) return;
            viewPos.x = e.clientX - startPos.x;
            viewPos.y = e.clientY - startPos.y;
            updateView();
        };

        window.onmouseup = () => {
            if (!isDragging) return;
            isDragging = false;
            if (svg) svg.style.cursor = 'grab';
        };

        svg.onwheel = (e) => {
            e.preventDefault();
            const delta = e.deltaY;
            const zoomFact = delta > 0 ? 0.9 : 1.1;

            // Zoom toward mouse pointer logic (simplified)
            treeState.scale *= zoomFact;
            treeState.scale = Math.max(0.1, Math.min(3, treeState.scale));
            updateView();
        };

        // Initial Auto-Centering
        setTimeout(() => {
            const bbox = gContainer.getBBox();
            const svgWidth = svg.clientWidth || 800;
            const svgHeight = svg.clientHeight || 600;

            viewPos.x = (svgWidth / 2) - (bbox.x + bbox.width / 2) * treeState.scale;
            viewPos.y = (svgHeight / 2) - (bbox.y + bbox.height / 2) * treeState.scale;

            updateView();
        }, 50);
    }

    window.toggleLessonTool = () => {
        const panel = document.getElementById('lesson-tool-panel');
        if (panel) {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    };

    // --- Neo 3.0: Desmos Scripting Integration ---
    window.plotSolution = (equation) => {
        const iframe = document.querySelector('#lesson-tool-panel iframe');
        if (iframe) {
            const panel = document.getElementById('lesson-tool-panel');
            panel.style.display = 'block';
            // Note: Directly injecting scripts into cross-origin iframe is not possible
            // But if we use Desmos API correctly or postMessage (if we owned it).
            // For now, we simulate the "Instruction" by opening the panel.
            window.typeTerminalMessage(`EXECUTING PLOT: ${equation}. Check the calculator panel.`);
        } else {
            window.open(`https://www.desmos.com/calculator?q=${encodeURIComponent(equation)}`, '_blank');
        }
    };

    // --- Elite 3.0: Desmos Interactive Lab ---
    window.initDesmosLab = (config) => {
        const panel = document.getElementById('lesson-tool-panel');
        if (!panel) return;

        // Show panel
        panel.style.display = 'block';
        panel.innerHTML = '<div id="desmos-calculator" style="width: 100%; height: 100%;"></div>';

        const elt = document.getElementById('desmos-calculator');
        const calculator = Desmos.GraphingCalculator(elt, {
            keypad: false,
            expressions: true,
            settingsMenu: false,
            zoomButtons: true,
            expressionsTopbar: false,
            capExpressionSize: true
        });

        if (config.expressions) {
            config.expressions.forEach((exp, idx) => {
                calculator.setExpression({ id: `exp${idx}`, latex: exp });
            });
        }

        if (config.bounds) {
            calculator.setMathBounds(config.bounds);
        }

        window.typeTerminalMessage("INTERACTIVE LAB ACTIVE: Mathematical visualization engine synchronized.");
    };

    // --- Elite 3.0: Speed Drill Engine ---
    let drillTimer = null;
    let drillScore = 0;
    let currentDrillAnswer = null;

    window.showDrill = () => {
        const startScreen = document.getElementById('drill-start-screen');
        const activeScreen = document.getElementById('drill-active-screen');
        if (startScreen) startScreen.style.display = 'block';
        if (activeScreen) activeScreen.style.display = 'none';
    };

    window.startDrill = () => {
        drillScore = 0;
        const scoreEl = document.getElementById('drill-score');
        if (scoreEl) scoreEl.innerText = '0';
        window.scrollTo(0, 0);
        const startScreen = document.getElementById('drill-start-screen');
        const activeScreen = document.getElementById('drill-active-screen');
        if (startScreen) startScreen.style.display = 'none';
        if (activeScreen) activeScreen.style.display = 'block';
        const inputEl = document.getElementById('drill-input');
        if (inputEl) { inputEl.value = ''; inputEl.focus(); }

        generateDrillQuestion();

        let timeLeft = 60;
        const timerEl = document.getElementById('drill-timer');
        if (timerEl) timerEl.innerText = timeLeft;

        if (drillTimer) clearInterval(drillTimer);
        drillTimer = setInterval(() => {
            timeLeft--;
            const t = document.getElementById('drill-timer');
            if (t) t.innerText = timeLeft;
            if (timeLeft <= 0) {
                endDrill();
            }
        }, 1000);
    };

    const generateDrillQuestion = () => {
        const types = ['arithmetic', 'matrix', 'log'];
        const type = types[Math.floor(Math.random() * types.length)];
        let qText = "";

        if (type === 'arithmetic') {
            const a = Math.floor(Math.random() * 20) + 5;
            const b = Math.floor(Math.random() * 15) + 2;
            const op = Math.random() > 0.5 ? '*' : '+';
            qText = `${a} ${op} ${b}`;
            currentDrillAnswer = op === '*' ? a * b : a + b;
        } else if (type === 'matrix') {
            const val = Math.floor(Math.random() * 9) + 1;
            qText = `det([[${val}, 0], [0, ${val}]])`;
            currentDrillAnswer = val * val;
        } else {
            const p = Math.floor(Math.random() * 5) + 1;
            qText = `log2(${Math.pow(2, p)})`;
            currentDrillAnswer = p;
        }

        const qEl = document.getElementById('drill-question');
        if (qEl) qEl.innerText = qText;
    };

    const drillInput = document.getElementById('drill-input');
    if (drillInput) {
        drillInput.addEventListener('input', (e) => {
            if (e.target.value == currentDrillAnswer) {
                drillScore += 10;
                document.getElementById('drill-score').innerText = drillScore;
                e.target.value = '';
                generateDrillQuestion();

                // Visual feedback
                const q = document.getElementById('drill-question');
                if (q) {
                    q.style.color = 'var(--accent-cyan)';
                    setTimeout(() => q.style.color = 'white', 100);
                }
            }
        });
    }

    const endDrill = () => {
        clearInterval(drillTimer);
        const activeScreen = document.getElementById('drill-active-screen');
        const startScreen = document.getElementById('drill-start-screen');
        if (activeScreen) activeScreen.style.display = 'none';
        if (startScreen) startScreen.style.display = 'block';

        const startMsg = document.querySelector('#drill-start-screen h2');
        if (startMsg) startMsg.innerHTML = `Drill Complete: <span class="gradient-text">${drillScore} Points</span>`;

        if (window.typeTerminalMessage) window.typeTerminalMessage(`DRILL TERMINATED. Final Score: ${drillScore}. ${drillScore > 100 ? "Excellent algorithmic speed detected." : "Precision is high, but throughput needs optimization. Continue recalibrating."}`);
    };

    // --- Global Search Implementation ---
    const globalSearch = document.getElementById('global-search');
    if (globalSearch) {
        globalSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                // If empty, show dashboard
                showDashboard();
                return;
            }

            // Filter logic
            const results = [];
            MATH_DATA.subjects.forEach(sub => {
                let match = false;
                if (sub.title.toLowerCase().includes(query) || sub.description.toLowerCase().includes(query) || sub.code.toLowerCase().includes(query)) {
                    match = true;
                }

                // Check units and lectures
                const unitMatches = sub.units.filter(unit =>
                    unit.title.toLowerCase().includes(query) ||
                    unit.topics.some(t => t.toLowerCase().includes(query)) ||
                    unit.lectures.some(l => l.name.toLowerCase().includes(query))
                );

                if (match || unitMatches.length > 0) {
                    results.push({
                        ...sub,
                        matchedUnits: unitMatches.length // Optional: can be used to highlight
                    });
                }
            });

            // Switch to dashboard view and render filtered grid
            if (window.AppRouter) window.AppRouter.switchView('dashboard');

            const dashboardView = document.getElementById('dashboard-view');
            if (dashboardView) {
                if (results.length > 0) {
                    // Update the title to "Search Results"
                    dashboardView.innerHTML = `
                        <div class="hero">
                            <h1>Search <span class="gradient-text">Results</span></h1>
                            <p>Found ${results.length} subject(s) matching "${query}"</p>
                        </div>
                        <div id="subject-grid" class="subject-grid"></div>
                    `;
                    if (window.UIEngine && window.UIEngine.renderSubjectGrid) {
                        window.UIEngine.renderSubjectGrid(results, 'subject-grid');
                    }
                } else {
                    dashboardView.innerHTML = `
                        <div class="hero">
                            <h1>No <span class="gradient-text">Matches</span></h1>
                            <p>We couldn't find anything for "${query}". Try different keywords.</p>
                        </div>
                    `;
                }
            }
        });
    }

    if (window.updateStabilityUI) window.updateStabilityUI(); // Initial draw

    // Globally expose navigation functions
    window.showDashboard = showDashboard;
    window.showSubjects = showSubjects;
    window.showStrategy = showStrategy;
    window.showResources = showResources;
    window.showGlossary = showGlossary;
    window.showAtlas = showAtlas;
    window.showReviewHub = showReviewHub;

    showDashboard();
});
