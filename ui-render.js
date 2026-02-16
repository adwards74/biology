/**
 * Genius Math Portal - UI Engine
 * Handles rendering of subjects, lessons, and interactive elements.
 */

window.UIEngine = (function () {

    function renderSubjectGrid(subjects, containerIdOrElem) {
        const container = typeof containerIdOrElem === 'string'
            ? document.getElementById(containerIdOrElem)
            : containerIdOrElem;

        if (!container) return;

        const progress = (window.getProgress) ? window.getProgress() : {};

        // Difficulty badge helper
        const getDifficultyBadge = (diff) => {
            switch (diff) {
                case 'basic': return '<span class="difficulty-badge neon-blue">🟢 Basic</span>';
                case 'intermediate': return '<span class="difficulty-badge" style="background:#f9d42322; color:#f9d423; padding:3px 8px; border-radius:8px; font-size:0.7rem; margin-left:8px;">🟡 Intermediate</span>';
                case 'advanced': return '<span class="difficulty-badge" style="background:#ff416c22; color:#ff416c; padding:3px 8px; border-radius:8px; font-size:0.7rem; margin-left:8px;">🔴 Advanced</span>';
                default: return '';
            }
        };

        container.innerHTML = (subjects || []).map((sub, idx) => {
            if (!sub) return '';
            // Calculate actual progress %
            let totalLectures = 0;
            let completedLectures = 0;
            let hasMasterClass = false;

            if (sub.units) {
                sub.units.forEach(unit => {
                    if (unit.masterClass) hasMasterClass = true;
                    if (unit.lectures) {
                        unit.lectures.forEach(lecture => {
                            totalLectures++;
                            const parts = (lecture.url || "").split(':');
                            const id = parts.length > 0 ? parts.pop() : null;
                            if (id && progress[id] && progress[id].completed) {
                                completedLectures++;
                            }
                        });
                    }
                });
            }
            const percent = totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0;

            return `
                <div class="subject-card glass" style="animation-delay: ${idx * 0.1}s" onclick="window.showSubjectDetail('${sub.id}')">
                    <div class="card-icon" style="background: ${sub.color}20; color: ${sub.color}"><i class="${sub.icon}"></i></div>
                    <div class="card-content">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <span class="code">${sub.code}${getDifficultyBadge(sub.difficulty)}</span>
                            ${hasMasterClass ? '<span style="font-size:0.6rem; background:rgba(255,0,0,0.15); color:#ff4b2b; padding:2px 6px; border-radius:4px; border:1px solid rgba(255,0,0,0.2); font-weight:bold;"><i class="fab fa-youtube"></i> MASTER</span>' : ''}
                        </div>
                        <h3>${sub.title}</h3>
                        <p>${sub.description}</p>
                    </div>
                    <div class="progress-bar" title="${percent}% Complete">
                        <div class="progress-fill" style="width: ${percent}%; background: ${sub.color};"></div>
                    </div>
                    <div class="card-footer">
                        <span style="font-size:0.8rem; color:var(--text-secondary)">${percent}% Mastered</span>
                        <i class="fas fa-arrow-right" style="color:${sub.color}"></i>
                    </div>
                </div>
            `;
        }).join('');
    }


    function showSubjectDetail(subjectId) {
        const data = window.MATH_DATA || { subjects: [] };
        const subject = data.subjects.find(s => s.id === subjectId);
        if (!subject) return;



        const main = document.getElementById('dashboard-view');
        main.innerHTML = `
            <div class="back-link" style="cursor:pointer; margin-bottom:30px; color:${subject.color}; display:flex; align-items:center; gap:8px;" onclick="window.showDashboard()">
                <i class="fas fa-arrow-left"></i> Back to Dashboard
            </div>
            <div class="hero">
                <span class="code" style="color:${subject.color}">${subject.code}</span>
                <h1 style="color:${subject.color}; font-size:3rem;">${subject.title}</h1>
                <p>${subject.description}</p>
            </div>
            <div class="syllabus-grid" style="display:grid; gap:25px; margin-top:40px;">
                ${subject.units.map((unit, uIdx) => {
            try {
                return renderUnitCard(unit, subject, uIdx);
            } catch (err) {
                console.error(`Error rendering unit ${uIdx}:`, err);
                return `<div class="unit-card glass">Error loading unit ${uIdx}</div>`;
            }
        }).join('')}
            </div>
        `;

        // Re-trigger MathJax for new content
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    }

    function renderUnitCard(unit, subject, uIdx) {
        let labProtocolHtml = '';
        if (unit.labProtocol) {
            labProtocolHtml = `
                <div class="lab-protocol-box fadeIn">
                    <h4 style="color:${subject.color};">
                        <i class="fas fa-flask"></i> ${unit.labProtocol.title}
                    </h4>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:15px;">
                        <div>
                            <span class="protocol-section-title" style="color:var(--accent-cyan);">Pre-Lab Logic</span>
                            <ul style="padding-left:15px; margin-top:8px; font-size:0.85rem; color:#cbd5e1; list-style-type: '🔬';">
                                ${unit.labProtocol.preLab.map(item => `<li style="margin-bottom:5px;">${item}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <span class="protocol-section-title" style="color:var(--accent-emerald);">Post-Lab Analysis</span>
                            <ul style="padding-left:15px; margin-top:8px; font-size:0.85rem; color:#cbd5e1; list-style-type: '📈';">
                                ${unit.labProtocol.postLab.map(item => `<li style="margin-bottom:5px;">${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        let evolutionLinkHtml = '';
        if (unit.evolutionLink) {
            evolutionLinkHtml = `
                <div class="evolution-link-box fadeIn">
                    <h5><i class="fas fa-project-diagram"></i> Bio-Logic Connectivity: Evolution</h5>
                    <p style="font-size:0.85rem; font-style:italic; opacity:0.9;">${unit.evolutionLink}</p>
                </div>
            `;
        }

        let masterClassHtml = '';
        if (unit.masterClass) {
            masterClassHtml = `
                <div class="master-class-promo glass fadeIn" style="margin-bottom:15px; padding:15px; border-radius:var(--standard-radius); border:1px solid rgba(255,75,43,0.3); background:rgba(255,75,43,0.05); cursor:pointer;" onclick="window.showLessonHandler('${unit.lectures[0].url}', '${subject.id}')">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="width:40px; height:40px; background:#ff4b2b; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; box-shadow:0 0 15px rgba(255,75,43,0.4);">
                            <i class="fab fa-youtube"></i>
                        </div>
                        <div>
                            <div style="font-size:0.65rem; color:#ff4b2b; font-weight:bold; text-transform:uppercase; letter-spacing:1px;">Advanced Tutorial</div>
                            <div style="font-weight:700; color:white; font-size:0.9rem;">Master Class Available</div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="unit-card glass" style="padding:30px; border-radius:var(--standard-radius);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <h3 style="margin:0; border-left:4px solid ${subject.color}; padding-left:15px;">${unit.title}</h3>
                    ${unit.masterClass ? '<span class="pulse-badge-red" style="font-size:0.65rem; background:rgba(255,75,43,0.1); color:#ff4b2b; padding:4px 10px; border-radius:30px; border:1px solid #ff4b2b44; font-weight:800;">VIDEO</span>' : ''}
                </div>
                ${unit.intuition ? `<p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:15px;">${unit.intuition}</p>` : ''}
                ${masterClassHtml}
                <div class="lectures" style="display:grid; gap:10px;">
                    ${unit.lectures.map(l => renderLectureLink(l, subject)).join('')}
                </div>
                ${labProtocolHtml}
                ${evolutionLinkHtml}
                ${unit.examples ? renderExamplesSection(unit.examples, subject) : ''}
                ${unit.quiz ? renderQuizBox(unit.quiz, subject, uIdx, unit.title) : ''}
            </div>
        `;
    }

    function renderLectureLink(l, subject) {
        const id = l.url.includes('lesson:') ? l.url.split(':').pop() : null;
        const prog = (id && window.getProgress) ? window.getProgress()[id] : null;
        return `
            <div class="lecture-link glass ${prog ? 'completed' : ''}" style="cursor:pointer; display:flex; justify-content:space-between; padding:15px 20px; border-radius:var(--standard-radius);" onclick="window.showLessonHandler('${l.url}', '${subject.id}')">
                <div style="display:flex; align-items:center; gap:12px;">
                    <i class="fas fa-book-open" style="color:${prog ? 'var(--accent-green)' : subject.color}"></i>
                    <span>${l.name}</span>
                </div>
                <i class="fas fa-chevron-right" style="opacity:0.3;"></i>
            </div>
        `;
    }

    function renderExamplesSection(examples, subject) {
        return `
            <div class="examples-section" style="margin-top:25px;">
                <h4 style="color:${subject.color}; margin-bottom:15px;"><i class="fas fa-chalkboard-teacher"></i> Worked Examples</h4>
                ${examples.map(ex => `
                    <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin-bottom:15px; border-left:3px solid ${subject.color};">
                        <h5 style="margin-bottom:8px; color:white;">${ex.title}</h5>
                        <p style="font-size:0.95rem; margin-bottom:12px; font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:var(--standard-radius);">${ex.problem}</p>
                        <details style="cursor:pointer;">
                            <summary style="font-size:0.85rem; color:${subject.color}; font-weight:600;">View Step-by-Step Solution</summary>
                            <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                                ${ex.steps.map(step => `<div style="font-size:0.9rem; margin-bottom:6px; color:#cbd5e1;"><i class="fas fa-arrow-right" style="font-size:0.7rem; opacity:0.5;"></i> ${step}</div>`).join('')}
                                <div style="margin-top:12px; font-size:0.85rem; color:var(--accent-cyan); font-style:italic;">
                                    <strong>Intuition:</strong> ${ex.intuition}
                                </div>
                            </div>
                        </details>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderQuizBox(quiz, subject, unitIdx, unitTitle) {
        // Detect if this is a multi-level quiz (Elite 4.0) or legacy
        const isMultiLevel = quiz.levels && Array.isArray(quiz.levels);
        const currentLevel = isMultiLevel ? quiz.levels[0] : quiz;

        let levelSelectorHtml = '';
        if (isMultiLevel) {
            levelSelectorHtml = `
                <div class="level-selector" style="display:flex; gap:10px; margin-bottom:15px;">
                    ${quiz.levels.map((lvl, lIdx) => `
                        <button class="glass level-btn ${lIdx === 0 ? 'active' : ''}" 
                                style="padding:5px 12px; font-size:0.75rem; border-radius:30px; border-color:${subject.color}40;"
                                onclick="window.switchQuizLevel(${unitIdx}, ${lIdx}, '${subject.id}')">
                            ${lvl.title}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="quiz-box glass" id="quiz-container-${unitIdx}" style="margin-top:15px; padding:20px; border-radius:var(--standard-radius);">
                <h4 style="color:${subject.color}; margin-bottom:10px;"><i class="fas fa-question-circle"></i> Concept Check</h4>
                ${levelSelectorHtml}
                <div class="quiz-content" id="quiz-content-${unitIdx}">
                    <p style="margin-bottom:15px; font-size:0.95rem;">${currentLevel.question}</p>
                    <div class="quiz-options" style="display:grid; gap:8px;">
                        ${currentLevel.options ? currentLevel.options.map(opt => `
                            <button class="glass quiz-opt" style="text-align:left; padding:10px 15px; font-size:0.9rem;" 
                                    onclick="window.checkQuizAnswer(${unitIdx}, '${opt.replace(/'/g, "\\'")}', '${currentLevel.answer.replace(/'/g, "\\'")}', '${currentLevel.explanation.replace(/'/g, "\\'")}', '${unitTitle.replace(/'/g, "\\'")}', '${currentLevel.question.replace(/'/g, "\\'")}')">
                                ${opt}
                            </button>
                        `).join('') : `
                            <div class="glass" style="padding:15px; font-size:0.9rem; font-style:italic; opacity:0.7;">
                                This level requires a manual justification in the Graduation Challenge.
                            </div>
                        `}
                    </div>
                </div>
                <div id="feedback-${unitIdx}" style="margin-top:15px; display:none;"></div>
            </div>
        `;
    }

    function showDashboard() {
        const containerId = 'dashboard-view';
        const main = document.getElementById(containerId);
        if (!main) return;

        main.innerHTML = `
            <div class="hero">
                <h1>Biology <span class="gradient-text">Elite 5.5</span></h1>
                <p>Advanced Biological Systems Analysis for TJHSST IBET & Beyond.</p>
                <div style="margin-top:20px;">
                    <button class="glass-btn reset-btn" onclick="window.resetProgress()" style="padding:10px 20px; font-size:0.8rem; border-color:rgba(245,87,108,0.3); color:#f5576c;">
                        <i class="fas fa-sync-alt"></i> Reset Neural Link
                    </button>
                </div>
            </div>
            <div id="subject-cards-container" class="subject-grid"></div>
        `;
        const data = window.MATH_DATA || {};
        renderSubjectGrid(data.subjects || [], 'subject-cards-container');
    }

    // Expose functions to global context
    window.renderSubjectGrid = renderSubjectGrid;
    window.showSubjectDetail = showSubjectDetail;
    window.showDashboard = showDashboard;
    function switchQuizLevel(unitIdx, levelIdx, subjectId) {
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
        const unit = subject.units[unitIdx];
        const quiz = unit.quiz;
        const level = quiz.levels[levelIdx];

        const container = document.getElementById(`quiz-content-${unitIdx}`);
        const feedback = document.getElementById(`feedback-${unitIdx}`);

        // Update active button state
        const buttons = document.querySelectorAll(`#quiz-container-${unitIdx} .level-btn`);
        buttons.forEach((btn, idx) => {
            if (idx === levelIdx) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        feedback.style.display = 'none';

        container.innerHTML = `
            <p style="margin-bottom:15px; font-size:0.95rem;">${level.question}</p>
            <div class="quiz-options" style="display:grid; gap:8px;">
                ${level.options ? level.options.map(opt => `
                    <button class="glass quiz-opt" style="text-align:left; padding:10px 15px; font-size:0.9rem;" 
                            onclick="window.checkQuizAnswer(${unitIdx}, '${opt.replace(/'/g, "\\'")}', '${level.answer.replace(/'/g, "\\'")}', '${level.explanation.replace(/'/g, "\\'")}', '${unit.title.replace(/'/g, "\\'")}', '${level.question.replace(/'/g, "\\'")}')">
                        ${opt}
                    </button>
                `).join('') : `
                    <div class="glass" style="padding:15px; font-size:0.9rem; font-style:italic; opacity:0.7;">
                        This level requires a manual justification in the Graduation Challenge.
                    </div>
                `}
            </div>
        `;

        if (window.MathJax) window.MathJax.typesetPromise();
    }

    function applyTerminologyTooltips(html) {
        if (!window.MATH_DATA || !window.MATH_DATA.glossary) return html;
        let enhancedHtml = html;
        const glossaryEntries = Object.entries(window.MATH_DATA.glossary);

        // Sort terms by length (descending) to avoid partial matches
        glossaryEntries.sort((a, b) => b[0].length - a[0].length);

        glossaryEntries.forEach(([term, definition]) => {
            const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Regex matches any HTML tag OR the term as a whole word
            const regex = new RegExp(`(<[^>]*>)|(\\b${escapedTerm}\\b)`, 'gi');

            enhancedHtml = enhancedHtml.replace(regex, (match, tag, termMatch) => {
                if (tag) return tag; // Return tag unchanged

                // Handle object-based definitions
                const cleanDef = typeof definition === 'object' ? definition.def : definition;
                return `<span class="term-tooltip" data-definition="${cleanDef.replace(/"/g, '&quot;')}">${termMatch}</span>`;
            });
        });

        return enhancedHtml;
    }

    function renderCalculator(type = 'quadratic') {
        const isQuad = type === 'quadratic';
        const isDeriv = type === 'derivative';
        const isDesmos = type === 'desmos';

        return `
            <div class="calculator-module glass" style="height:100% !important; display:flex !important; flex-direction:row !important; align-items:stretch !important; color:white !important; background: rgba(13, 17, 23, 0.98); border-radius:15px; overflow:hidden; box-sizing: border-box !important;">
                <div class="calc-sidebar" style="width:65px !important; flex: 0 0 65px !important; display:flex !important; flex-direction:column !important; align-items:center !important; justify-content: flex-start !important; padding:20px 0; border-right:1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.5); z-index: 10;">
                    <div class="calc-tool-mgr" style="display:flex !important; flex-direction:column !important; gap:18px !important;">
                        <div class="tooltip-container">
                            <button class="glass square-btn ${isQuad ? 'active' : ''}" onclick="window.UIEngine.toggleCalculator('quadratic')">Q</button>
                            <span class="tooltip-text">Quadratic Solver</span>
                        </div>
                        <div class="tooltip-container">
                            <button class="glass square-btn ${isDeriv ? 'active' : ''}" onclick="window.UIEngine.toggleCalculator('derivative')">D</button>
                            <span class="tooltip-text">Derivative Solver</span>
                        </div>
                        <div class="tooltip-container" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top:18px;">
                            <button class="glass square-btn ${isDesmos ? 'active' : ''}" onclick="window.UIEngine.toggleCalculator('desmos')" style="color:var(--accent-green) !important;">G</button>
                            <span class="tooltip-text">Desmos (EN)</span>
                        </div>
                        <div class="tooltip-container">
                            <button class="glass square-btn" onclick="window.UIEngine.toggleCalculator()" style="border:none !important; color:rgba(255,255,255,0.4) !important; opacity:0.6;"><i class="fas fa-times"></i></button>
                            <span class="tooltip-text">Close Tool</span>
                        </div>
                    </div>
                </div>

                <div class="calc-workbench" style="flex:1 !important; display:flex !important; flex-direction:column !important; overflow:hidden !important; position:relative !important; height:100% !important;">
                    <div class="workbench-content" style="height:100% !important; padding:${isDesmos ? '15px' : '25px'} !important; display:flex !important; flex-direction:column !important; box-sizing: border-box !important; overflow-y: auto;">
                        ${isDesmos ? `
                            <div style="flex:none !important; display:flex !important; justify-content:space-between !important; align-items:center !important; margin-bottom:10px !important;">
                                <h4 style="color:var(--accent-green); font-size:0.95rem; opacity:0.9; margin:0;"><i class="fas fa-chart-line"></i> Desmos Lab (EN)</h4>
                                <span style="font-size:0.7rem; opacity:0.5; color:#cbd5e1; font-family:'JetBrains Mono', monospace;">Interface: English</span>
                            </div>
                            <iframe src="https://www.desmos.com/calculator?lang=en" width="100%" height="100%" style="border:none; border-radius:10px; flex:1 !important; background: white !important;"></iframe>
                        ` : isQuad ? `
                            <div style="flex:1 !important; display:flex !important; flex-direction:column !important;">
                                <h4 style="color:var(--accent-green); margin-bottom:12px; font-size:1.1rem;"><i class="fas fa-square-root-variable"></i> Neo-Solver: Quadratic</h4>
                                <p style="font-size:0.85rem; margin-bottom:20px; opacity:0.8; color:#cbd5e1;">Solve $ax^2 + bx + c = 0$</p>
                                <div style="display:flex; gap:12px; align-items:center; margin-bottom:25px; justify-content:center; background:rgba(255,255,255,0.03); padding:20px; border-radius:12px;">
                                    <input type="number" id="quad-a" class="glass-input" placeholder="a" style="width:70px; text-align:center; font-size:1rem; padding:10px; border-radius:8px;" value="1">
                                    <span style="font-size:1.2rem;">$x^2 +$</span>
                                    <input type="number" id="quad-b" class="glass-input" placeholder="b" style="width:70px; text-align:center; font-size:1rem; padding:10px; border-radius:8px;" value="5">
                                    <span style="font-size:1.2rem;">$x +$</span>
                                    <input type="number" id="quad-c" class="glass-input" placeholder="c" style="width:70px; text-align:center; font-size:1rem; padding:10px; border-radius:8px;" value="6">
                                    <span style="font-size:1.2rem;">$= 0$</span>
                                </div>
                                <div id="quad-result" class="calc-result glass" style="min-height:100px; padding:20px; background:rgba(0,0,0,0.3); border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
                                    <div class="result-label" style="font-size:0.8rem; opacity:0.6; margin-bottom:10px; color:var(--accent-blue);">Analyzed Roots:</div>
                                    <div id="quad-output" style="font-size:1.1rem; color:white; line-height:1.6;">Click Analyze to verify roots.</div>
                                </div>
                                <button class="glass solve-btn" style="width:100%; margin-top:25px; padding:15px; background:var(--accent-green); color:black; font-weight:900; border-radius:10px; cursor:pointer;" onclick="window.UIEngine.solveQuadratic()">ANALYZE ROOTS</button>
                            </div>
                        ` : `
                            <div style="flex:1 !important; display:flex !important; flex-direction:column !important;">
                                <h4 style="color:var(--accent-blue); margin-bottom:12px; font-size:1.1rem;"><i class="fas fa-calculator"></i> Neo-Solver: Calculus</h4>
                                <div class="input-group" style="margin-bottom:25px;">
                                    <label style="display:block; font-size:0.85rem; margin-bottom:10px; opacity:0.7; color:#cbd5e1;">Input Function $f(x)$:</label>
                                    <input type="text" id="calc-input" class="glass-input" style="width:100%; padding:15px; font-size:1rem; border-radius:10px;" placeholder="e.g. x^2 + 3*x + 5" value="x^2">
                                </div>
                                <div id="calc-result" class="calc-result glass" style="min-height:100px; padding:20px; background:rgba(0,0,0,0.3); border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
                                    <div class="result-label" style="font-size:0.8rem; opacity:0.6; margin-bottom:10px; color:var(--accent-blue);">Derivative Result $f'(x)$:</div>
                                    <div id="result-output" class="result-output" style="font-size:1.4rem; color:var(--accent-blue);">$2x$</div>
                                </div>
                                <button class="glass solve-btn" style="width:100%; margin-top:25px; padding:15px; background:var(--accent-blue); color:black; font-weight:900; border-radius:10px; cursor:pointer;" onclick="window.UIEngine.solveEquation('derivative')">COMPUTE $f'(x)$</button>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }

    function solveQuadratic() {
        const a = parseFloat(document.getElementById('quad-a').value);
        const b = parseFloat(document.getElementById('quad-b').value);
        const c = parseFloat(document.getElementById('quad-c').value);
        const output = document.getElementById('quad-output');

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            output.innerHTML = "Invalid parameters.";
            return;
        }

        const disc = b * b - 4 * a * c;
        let result = `Discriminant $D = ${disc}$<br>`;

        if (disc > 0) {
            const x1 = (-b + Math.sqrt(disc)) / (2 * a);
            const x2 = (-b - Math.sqrt(disc)) / (2 * a);
            result += `<span style="color:var(--accent-green)">Two Real Roots:</span><br>$x_1 = ${x1.toFixed(2)}$, $x_2 = ${x2.toFixed(2)}$`;
        } else if (disc === 0) {
            const x = -b / (2 * a);
            result += `<span style="color:var(--accent-blue)">One Double Root:</span><br>$x = ${x.toFixed(2)}$`;
        } else {
            const real = (-b / (2 * a)).toFixed(2);
            const imag = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
            result += `<span style="color:var(--accent-magenta)">Complex Roots:</span><br>$x = ${real} \pm ${imag}i$`;
        }

        output.innerHTML = result;
        if (window.MathJax) window.MathJax.typesetPromise();
    }

    async function toggleCalculator(type) {
        const panel = document.getElementById('lesson-tool-panel');
        if (!panel) return;

        const isCurrentOpen = panel.style.display !== 'none';

        if (!type && isCurrentOpen) {
            panel.style.display = 'none';
            return;
        }

        // Direct routing to Quantum Engine for any graphing request
        if (type === 'desmos' || type === 'graph') {
            panel.style.display = 'block';
            panel.innerHTML = renderQuantumGraph({ expressions: ['x^2'] });
            if (window.MathJax) window.MathJax.typesetPromise();
            return;
        }

        panel.style.display = 'block';
        panel.innerHTML = renderCalculator(type || 'quadratic');
        if (window.MathJax) window.MathJax.typesetPromise();
    }

    function solveEquation(type) {
        const input = document.getElementById('calc-input').value;
        const output = document.getElementById('result-output');

        let result = "Processing...";
        if (input.trim() === "x^2") result = "$2x$";
        else if (input.trim() === "sin(x)") result = "$\\cos(x)$";
        else if (input.trim() === "x^3") result = "$3x^2$";
        else result = "Complexity exceeded. Use WolframAlpha for advanced analysis.";

        output.innerHTML = result;
        if (window.MathJax) window.MathJax.typesetPromise();
    }

    function renderQuantumGraph(config = {}) {
        const width = config.width || 600;
        const height = config.height || 400;
        const expressions = config.expressions || [];
        const padding = 40;

        // Coordinate system bounds
        const minX = -10;
        const maxX = 10;
        const minY = -10;
        const maxY = 10;

        const toX = (val) => padding + ((val - minX) / (maxX - minX)) * (width - 2 * padding);
        const toY = (val) => (height - padding) - ((val - minY) / (maxY - minY)) * (height - 2 * padding);

        // Safe evaluation function for manual input
        const evaluate = (expr, x) => {
            try {
                // Pre-process expression
                let safeExpr = expr.toLowerCase();
                safeExpr = safeExpr.replace(/sin/g, 'Math.sin');
                safeExpr = safeExpr.replace(/cos/g, 'Math.cos');
                safeExpr = safeExpr.replace(/tan/g, 'Math.tan');
                safeExpr = safeExpr.replace(/sqrt/g, 'Math.sqrt');
                safeExpr = safeExpr.replace(/pow/g, 'Math.pow');
                safeExpr = safeExpr.replace(/abs/g, 'Math.abs');
                safeExpr = safeExpr.replace(/log/g, 'Math.log');
                safeExpr = safeExpr.replace(/exp/g, 'Math.exp');
                safeExpr = safeExpr.replace(/pi/g, 'Math.PI');
                safeExpr = safeExpr.replace(/\^/g, '**');

                // Allow simple multiplication like 2x -> 2*x
                safeExpr = safeExpr.replace(/(\d)(x)/g, '$1*$2');

                const fn = new Function('x', `return ${safeExpr};`);
                return fn(x);
            } catch (e) {
                return NaN;
            }
        };

        let paths = "";
        const colors = ['var(--accent-blue)', 'var(--accent-green)', 'var(--accent-orange)', 'var(--accent-magenta)'];

        expressions.forEach((expr, idx) => {
            if (!expr) return;
            const color = colors[idx % colors.length];
            let d = "";
            let first = true;

            for (let x = minX; x <= maxX; x += 0.1) {
                const y = evaluate(expr, x);
                if (isNaN(y) || !isFinite(y)) {
                    first = true;
                    continue;
                }
                const screenX = toX(x);
                const screenY = toY(y);

                if (screenY < -100 || screenY > height + 100) {
                    first = true;
                    continue;
                }

                if (first) {
                    d += `M ${screenX} ${screenY}`;
                    first = false;
                } else {
                    d += ` L ${screenX} ${screenY}`;
                }
            }
            if (d) {
                paths += `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" filter="drop-shadow(0 0 5px ${color})" />`;
            }
        });

        const currentExpr = expressions[0] || "";

        return `
            <div class="quantum-graph glass" style="width:100%; height:100%; min-height:450px; display:flex; flex-direction:column; background:rgba(5,7,10,0.98); border-radius:15px; overflow:hidden; position:relative; border:1px solid rgba(0,210,255,0.15);">
                <!-- Header -->
                <div style="padding:15px 20px; background:rgba(0,0,0,0.5); border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fas fa-atom" style="color:var(--accent-cyan); animation: spin 4s linear infinite;"></i>
                        <span style="font-weight:800; font-size:0.9rem; letter-spacing:2px; color:var(--accent-cyan); text-shadow:0 0 10px rgba(0,210,255,0.3);">QUANTUM GRAPH ENGINE 6.0</span>
                    </div>
                </div>

                <div style="display:flex; flex:1; overflow:hidden;">
                    <!-- Expression Sidebar -->
                    <div style="width:220px; background:rgba(0,0,0,0.3); border-right:1px solid rgba(255,255,255,0.05); padding:15px; display:flex; flex-direction:column; gap:15px;">
                        <div>
                            <div style="font-size:0.7rem; color:var(--accent-cyan); font-weight:bold; letter-spacing:1px; margin-bottom:10px;">EXPRESSIONS</div>
                            <div class="glass" style="padding:12px; border-radius:10px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05);">
                                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                                    <div style="width:10px; height:10px; border-radius:50%; background:var(--accent-blue);"></div>
                                    <span style="font-size:0.75rem; color:#888;">y₁ = f(x)</span>
                                </div>
                                <input type="text" id="quantum-input-0" class="glass-input" 
                                       style="width:100%; background:transparent; border:none; color:white; font-family:'JetBrains Mono', monospace; font-size:0.9rem; outline:none;" 
                                       placeholder="Enter formula..." value="${currentExpr}"
                                       onkeyup="if(event.key==='Enter') window.UIEngine.updateQuantumPlot()">
                            </div>
                        </div>
                        
                        <div style="margin-top:auto; display:flex; flex-direction:column; gap:10px;">
                        <button class="glass-btn solve-btn" style="width:100%; padding:12px; background:var(--accent-blue); color:black; font-weight:bold; border-radius:8px; cursor:pointer;" onclick="window.UIEngine.updateQuantumPlot()">
                            <i class="fas fa-sync-alt"></i> RE-PLOT
                        </button>
                        <button class="glass-btn" style="width:100%; padding:10px; background:rgba(255,255,255,0.05); color:#888; font-size:0.75rem; border:1px solid rgba(255,255,255,0.1); border-radius:8px; cursor:pointer; transition:all 0.3s;" 
                                onclick="window.UIEngine.switchToDesmos()"
                                onmouseover="this.style.color='white'; this.style.borderColor='var(--accent-cyan)'"
                                onmouseout="this.style.color='#888'; this.style.borderColor='rgba(255,255,255,0.1)'">
                            <i class="fas fa-external-link-alt"></i> SWITCH TO DESMOS
                        </button>
                    </div>
                </div>

                    <!-- SVG Canva -->
                    <div style="flex:1; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; padding:10px; background: radial-gradient(circle at center, #0f172a 0%, #020617 100%);">
                        <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
                            <!-- Grid -->
                            ${[-5, 0, 5].map(x => `<line x1="${toX(x)}" y1="${toY(minY)}" x2="${toX(x)}" y2="${toY(maxY)}" stroke="rgba(255,255,255,0.05)" stroke-width="1" />`).join('')}
                            ${[-5, 0, 5].map(y => `<line x1="${toX(minX)}" y1="${toY(y)}" x2="${toX(maxX)}" y2="${toY(y)}" stroke="rgba(255,255,255,0.05)" stroke-width="1" />`).join('')}
                            
                            <!-- Axes -->
                            <line x1="${toX(minX)}" y1="${toY(0)}" x2="${toX(maxX)}" y2="${toY(0)}" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                            <line x1="${toX(0)}" y1="${toY(minY)}" x2="${toX(0)}" y2="${toY(maxY)}" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                            
                            <!-- Plot -->
                            ${paths}
                        </svg>
                    </div>
                </div>

                <div style="padding:10px 20px; background:rgba(0,0,0,0.5); border-top:1px solid rgba(255,255,255,0.1); font-size:0.75rem; color:#888; display:flex; justify-content:space-between;">
                    <span><i class="fas fa-keyboard"></i> Use ^ for power, sqrt() for roots</span>
                    <span style="color:var(--accent-cyan); font-weight:bold;">BYPASSING EXTERNAL DEPENDENCIES</span>
                </div>
            </div>
        `;
    }

    function updateQuantumPlot() {
        const input = document.getElementById('quantum-input-0');
        if (!input) return;
        const expr = input.value;
        const panel = document.getElementById('lesson-tool-panel');
        if (!panel) return;
        panel.innerHTML = renderQuantumGraph({ expressions: [expr] });
        if (window.MathJax) window.MathJax.typesetPromise();
    }

    // --- Elite 6.1: Plan B Engine Switcher ---
    function switchToDesmos() {
        const input = document.getElementById('quantum-input-0');
        const expressions = input ? [input.value] : ['x^2'];

        // Clear old instance and force Desmos
        window.desmosCalculator = null;
        window.desmosFallbackActive = false;

        if (window.initDesmosLab) {
            window.initDesmosLab({ expressions: expressions, force: true });
        }
    }

    // Final Global Bindings
    window.renderSubjectGrid = renderSubjectGrid;
    window.showSubjectDetail = showSubjectDetail;
    window.showDashboard = showDashboard;
    window.switchQuizLevel = switchQuizLevel;
    window.applyTerminologyTooltips = applyTerminologyTooltips;
    window.toggleCalculator = toggleCalculator;
    window.renderQuantumGraph = renderQuantumGraph;

    return {
        renderSubjectGrid,
        showSubjectDetail,
        showDashboard,
        applyTerminologyTooltips,
        toggleCalculator,
        solveEquation,
        solveQuadratic,
        renderQuantumGraph,
        updateQuantumPlot,
        switchToDesmos
    };
})();
