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
                case 'basic': return '<span class="difficulty-badge neon-blue">🟢 기초</span>';
                case 'intermediate': return '<span class="difficulty-badge" style="background:#f9d42322; color:#f9d423; padding:3px 8px; border-radius:8px; font-size:0.7rem; margin-left:8px;">🟡 중급</span>';
                case 'advanced': return '<span class="difficulty-badge" style="background:#ff416c22; color:#ff416c; padding:3px 8px; border-radius:8px; font-size:0.7rem; margin-left:8px;">🔴 고급</span>';
                default: return '';
            }
        };

        container.innerHTML = subjects.map((sub, idx) => {
            // Calculate actual progress %
            let totalLectures = 0;
            let completedLectures = 0;
            sub.units.forEach(unit => {
                unit.lectures.forEach(lecture => {
                    totalLectures++;
                    const id = lecture.url.split(':').pop();
                    if (progress[id] && progress[id].completed) {
                        completedLectures++;
                    }
                });
            });
            const percent = totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0;

            return `
                <div class="subject-card glass" style="animation-delay: ${idx * 0.1}s" onclick="window.showSubjectDetail('${sub.id}')">
                    <div class="card-icon" style="background: ${sub.color}20; color: ${sub.color}"><i class="${sub.icon}"></i></div>
                    <div class="card-content">
                        <span class="code">${sub.code}${getDifficultyBadge(sub.difficulty)}</span>
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
        const subject = MATH_DATA.subjects.find(s => s.id === subjectId);
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
        return `
            <div class="unit-card glass" style="padding:30px; border-radius:var(--standard-radius);">
                <h3 style="margin-bottom:15px; border-left:4px solid ${subject.color}; padding-left:15px;">${unit.title}</h3>
                ${unit.intuition ? `<p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:15px;">${unit.intuition}</p>` : ''}
                <div class="lectures" style="display:grid; gap:10px;">
                    ${unit.lectures.map(l => renderLectureLink(l, subject)).join('')}
                </div>
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
                <h1>Sabrina <span class="gradient-text">Elite 5.3</span></h1>
                <p>Advanced Biological Systems Analysis for TJHSST & Beyond.</p>
                <div style="margin-top:20px;">
                    <button class="glass-btn reset-btn" onclick="window.resetProgress()" style="padding:10px 20px; font-size:0.8rem; border-color:rgba(245,87,108,0.3); color:#f5576c;">
                        <i class="fas fa-sync-alt"></i> Reset Neural Link
                    </button>
                </div>
            </div>
            <div id="subject-cards-container" class="subject-grid"></div>
        `;
        renderSubjectGrid(MATH_DATA.subjects, 'subject-cards-container');
    }

    // Expose functions global context
    window.renderSubjectGrid = renderSubjectGrid;
    window.showSubjectDetail = showSubjectDetail;
    window.showDashboard = showDashboard;

    window.switchQuizLevel = function (unitIdx, levelIdx, subjectId) {
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
    };

    return {
        renderSubjectGrid,
        showSubjectDetail,
        showDashboard
    };
})();
