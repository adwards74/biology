window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch7"] = {
    "ch7-1": {
        title: "14.1 Systematic Review (SR) & Mock Review",
        subtitle: "Systematic Review Protocol & Critical Analysis",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-magenta);">
                    <h3><i class="fas fa-microscope"></i> Section I: Finding Flaws (Critical Reading)</h3>
                    <p>Journals are not perfect. The core of a systematic review is the <strong>ability to filter out low-quality research</strong> from the flood of publications. The PRISMA guidelines act as that 'sieve'.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-filter"></i> The PRISMA Protocol Flow</h4>
                    <svg width="300" height="180" viewBox="0 0 300 180">
                        <!-- Boxes -->
                        <rect x="100" y="10" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="55" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="100" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="145" width="100" height="25" rx="3" fill="var(--accent-magenta)"/>
                        <!-- Arrows -->
                        <line x1="150" y1="35" x2="150" y2="55" stroke="var(--accent-magenta)" stroke-width="2" marker-end="url(#arrowhead-magenta)"/>
                        <line x1="150" y1="80" x2="150" y2="100" stroke="var(--accent-magenta)" stroke-width="2" marker-end="url(#arrowhead-magenta)"/>
                        <line x1="150" y1="125" x2="150" y2="145" stroke="var(--accent-magenta)" stroke-width="2" marker-end="url(#arrowhead-magenta)"/>
                        <!-- Text -->
                        <text x="115" y="27" fill="#fff" font-size="8">Identification</text>
                        <text x="120" y="72" fill="#fff" font-size="8">Screening</text>
                        <text x="122" y="117" fill="#fff" font-size="8">Eligibility</text>
                        <text x="125" y="162" fill="#fff" font-size="8" font-weight="bold">Included</text>
                        <defs>
                            <marker id="arrowhead-magenta" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-magenta)" />
                            </marker>
                        </defs>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">The PRISMA sieve ensures only high-quality, relevant studies make it into the final meta-analysis.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; border: 1px dashed var(--accent-magenta); padding:15px;">
                    <h5><i class="fas fa-vial"></i> Mock Review Protocol: Case Simulation</h5>
                    <p style="font-size:0.9rem;">The following is a snippet from a hypothetical abstract. What is the error?</p>
                    <div class="glass-card" style="font-family:serif; font-style:italic; font-size:0.85rem; padding:10px;">
                        "...This study aimed to prove Supplement A improves memory by 20%. We interviewed 50 students already taking the supplement and collected only their positive responses."
                    </div>
                </div>

                <h2>II. Critical Appraisal Guidelines (CRA)</h2>
                <ul class="glass-list">
                    <li><strong>Search Bias:</strong> Was the search limited to a specific language (English-only) or certain keywords?</li>
                    <li><strong>Selection Bias:</strong> Did the researcher 'cherry-pick' only the data that fits their hypothesis?</li>
                    <li><strong>Reproducibility:</strong> Is the methodology detailed enough for another researcher to repeat the experiment?</li>
                </ul>
            </div>
        `
    },
    "ch7-2": {
        title: "14.2 Statistical Literacy: P-Hacking & Meta-Analysis",
        subtitle: "Advanced Statistical Rigor in Research",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-chart-line"></i> Section I: Pitfalls of Numbers</h3>
                    <p>A significance level of $p < 0.05$ is not a holy grail. <strong>P-Hacking</strong> is the act of manipulating variables until a low $p$-value occurs by chance. Meta-analyses focus on <strong>Effect Size</strong> to correct these distortions.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:rgba(255,255,255,0.02);">
                    <h4><i class="fas fa-align-left"></i> Visualizing Effect: The Forest Plot</h4>
                    <svg width="280" height="120" viewBox="0 0 280 120">
                        <!-- Null line -->
                        <line x1="140" y1="10" x2="140" y2="110" stroke="rgba(255,255,255,0.2)" stroke-dasharray="2"/>
                        <text x="135" y="118" fill="rgba(255,255,255,0.4)" font-size="8">Null Effect</text>
                        <!-- Study 1 -->
                        <line x1="60" y1="30" x2="120" y2="30" stroke="var(--accent-cyan)"/>
                        <rect x="85" y="27" width="10" height="6" fill="var(--accent-cyan)"/>
                        <text x="10" y="34" fill="#fff" font-size="8">Study A</text>
                        <!-- Study 2 -->
                        <line x1="150" y1="60" x2="230" y2="60" stroke="#fff"/>
                        <rect x="185" y="57" width="15" height="6" fill="#fff"/>
                        <text x="10" y="64" fill="#fff" font-size="8">Study B</text>
                        <!-- Aggregate (Diamond) -->
                        <polygon points="120,95 145,85 170,95 145,105" fill="var(--accent-magenta)"/>
                        <text x="10" y="99" fill="var(--accent-magenta)" font-size="8" font-weight="bold">Meta-Result</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">Forest plots show the <strong>Confidence Interval</strong> of multiple studies. If the diamond doesn't touch the vertical null line, the aggregate result is statistically significant.</p>
                </div>

                <div class="practice-section glass" style="margin-top:20px; padding:15px; border-left: 3px solid var(--accent-magenta);">
                    <h5 style="color:var(--accent-magenta);">Elite Challenge</h5>
                    <p><strong>Q.</strong> Why is a small $p$-value unreliable when the sample size is extremely small? (Hint: Type...)</p>
                    <details class="glass-details">
                        <summary>Show Explanation</summary>
                        <p>It increases the risk of a <strong>Type I Error</strong> (False Positive). Random fluctuations can disproportionately impact the result. In such cases, checking the <strong>Confidence Interval</strong> is more reliable.</p>
                    </details>
                </div>
            </div>
        `
    }
};
