window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 5: QUANTITATIVE BIOLOGY — Textbook-Grade
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch5"] = {

    "ch5-1": {
        title: "11.1: The Chi-Square Test",
        subtitle: "Hypothesis Testing, Degrees of Freedom, and Statistical Significance",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-magenta); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-magenta); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Null Hypothesis ($H_0$)</strong> — The default assumption that there is NO significant difference between observed and expected results.</div>
                        <div><strong>Chi-Square ($\\chi^2$)</strong> — A statistical test comparing observed data to expected data to determine if deviations are due to chance.</div>
                        <div><strong>Degrees of Freedom (df)</strong> — Number of categories minus 1 ($df = n - 1$); determines the critical value.</div>
                        <div><strong>p-value</strong> — Probability that the observed deviation is due to chance alone. If $p < 0.05$, we reject $H_0$.</div>
                        <div><strong>Critical Value</strong> — The $\\chi^2$ threshold at $p = 0.05$; if calculated $\\chi^2$ > critical value, results are statistically significant.</div>
                        <div><strong>Expected Value</strong> — The predicted count based on a hypothesis (e.g., 3:1 ratio).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Science Doesn't Prove — It Rejects</h3>
                    <p>Scientists never "prove" a hypothesis. Instead, they test whether the data is <strong>consistent with</strong> the null hypothesis. If the deviation between observed and expected is too large to be explained by random chance ($p < 0.05$), we <strong>reject</strong> the null hypothesis. This is the foundation of all statistical reasoning in biology.</p>
                </div>

                <h2>I. The Chi-Square Formula</h2>

                <div class="proof-box glass">
                    <h4>$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$</h4>
                    <ul style="line-height: 2;">
                        <li>$O$ = Observed count (what you actually counted)</li>
                        <li>$E$ = Expected count (what the hypothesis predicts)</li>
                        <li>Sum over all categories</li>
                    </ul>
                </div>

                <h2>II. Step-by-Step Procedure</h2>

                <ol style="line-height: 2.2;">
                    <li><strong>State the null hypothesis:</strong> "There is no significant difference between observed and expected values."</li>
                    <li><strong>Calculate expected values</strong> from the predicted ratio.</li>
                    <li><strong>Calculate $\\chi^2$</strong> using the formula above.</li>
                    <li><strong>Determine degrees of freedom:</strong> $df = n - 1$ (where $n$ = number of categories).</li>
                    <li><strong>Compare to critical value</strong> at $p = 0.05$. If $\\chi^2$ > critical value → reject $H_0$.</li>
                </ol>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(236,72,153,0.2);">
                            <th style="padding:10px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">df</th>
                            <th style="padding:10px; text-align:center;">1</th>
                            <th style="padding:10px; text-align:center;">2</th>
                            <th style="padding:10px; text-align:center;">3</th>
                            <th style="padding:10px; text-align:center;">4</th>
                            <th style="padding:10px; text-align:center;">5</th>
                        </tr>
                        <tr>
                            <td style="padding:10px; text-align:center;"><strong>Critical value (p=0.05)</strong></td>
                            <td style="padding:10px; text-align:center;">3.84</td>
                            <td style="padding:10px; text-align:center;">5.99</td>
                            <td style="padding:10px; text-align:center;">7.81</td>
                            <td style="padding:10px; text-align:center;">9.49</td>
                            <td style="padding:10px; text-align:center;">11.07</td>
                        </tr>
                    </table>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-magenta);">
                    <h5 style="color: var(--accent-magenta); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Monohybrid Chi-Square</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">From Aa × Aa, you expected a 3:1 ratio. Out of 200 offspring: 160 dominant, 40 recessive. Do these results support the hypothesis?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> Expected: 3/4 × 200 = 150 dominant; 1/4 × 200 = 50 recessive.</div>
                            <div><strong>Step 2:</strong> $\\chi^2 = \\frac{(160-150)^2}{150} + \\frac{(40-50)^2}{50}$</div>
                            <div>$= \\frac{100}{150} + \\frac{100}{50} = 0.667 + 2.0 = \\textbf{2.667}$</div>
                            <div><strong>Step 3:</strong> df = 2 categories − 1 = <strong>1</strong>. Critical value = 3.84.</div>
                            <div><strong>Step 4:</strong> 2.667 < 3.84 → <strong>Fail to reject $H_0$</strong>.</div>
                            <div style="margin-top:8px; color:var(--accent-magenta); font-style:italic;">The deviation is within the range of normal random variation. The 3:1 hypothesis is supported.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-magenta); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>$\\chi^2 = \\sum (O-E)^2 / E$. Larger values = more deviation from expected.</li>
                        <li>df = number of categories − 1.</li>
                        <li>Compare $\\chi^2$ to critical value at p = 0.05.</li>
                        <li>If $\\chi^2$ > critical value → reject $H_0$ (results are statistically significant).</li>
                        <li>If $\\chi^2$ ≤ critical value → fail to reject $H_0$ (deviation is due to chance).</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch5-3": {
        title: "12.1: Designing the Lab",
        subtitle: "IBET Experimental Design — Variables, Controls, and Scientific Reasoning",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-magenta); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-magenta); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Independent Variable (IV)</strong> — The factor the experimenter deliberately changes; plotted on the x-axis.</div>
                        <div><strong>Dependent Variable (DV)</strong> — The factor being measured as a response; plotted on the y-axis.</div>
                        <div><strong>Controlled Variables</strong> — All factors that must remain constant to prevent confounding results.</div>
                        <div><strong>Negative Control</strong> — A group that receives no treatment; establishes the baseline.</div>
                        <div><strong>Positive Control</strong> — A group that receives a known effective treatment; confirms the experiment can detect a result.</div>
                        <div><strong>Sample Size</strong> — Number of subjects/trials; larger samples reduce the effect of random variation.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: A Good Experiment Eliminates Alternative Explanations</h3>
                    <p>The goal of experimental design is NOT just to "test a hypothesis" — it's to design a test so carefully that the <strong>only possible explanation</strong> for the results is the independent variable. Every control, every constant, every replicate exists to eliminate a possible alternative explanation.</p>
                </div>

                <!-- VISUAL DYNAMIC: EXPERIMENTAL DESIGN HIERARCHY -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-magenta); margin-bottom: 20px; text-align: center;"><i class="fas fa-sitemap"></i> Visual Dynamic: Experimental Design Architecture</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 500 200" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- Central Flow -->
                            <rect x="180" y="20" width="140" height="40" rx="8" fill="var(--accent-magenta)" opacity="0.2" stroke="var(--accent-magenta)" stroke-width="2" />
                            <text x="250" y="45" fill="white" font-size="12" font-weight="bold" text-anchor="middle">INDEPENDENT (IV)</text>
                            
                            <path d="M 250 60 L 250 140" marker-end="url(#arrow)" stroke="white" stroke-width="2" />
                            
                            <rect x="180" y="140" width="140" height="40" rx="8" fill="var(--accent-cyan)" opacity="0.2" stroke="var(--accent-cyan)" stroke-width="2" />
                            <text x="250" y="165" fill="white" font-size="12" font-weight="bold" text-anchor="middle">DEPENDENT (DV)</text>
                            
                            <!-- Side Guards -->
                            <g transform="translate(40, 80)">
                                <rect x="0" y="0" width="100" height="40" rx="5" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1" />
                                <text x="50" y="25" fill="#aaa" font-size="10" text-anchor="middle">Constants</text>
                                <text x="50" y="55" fill="#888" font-size="8" text-anchor="middle">Eliminate confounding</text>
                            </g>
                            
                            <g transform="translate(360, 80)">
                                <rect x="0" y="0" width="100" height="40" rx="5" fill="rgba(255,255,255,0.05)" stroke="#888" stroke-width="1" />
                                <text x="50" y="25" fill="#aaa" font-size="10" text-anchor="middle">Controls</text>
                                <text x="50" y="55" fill="#888" font-size="8" text-anchor="middle">Establish baselines</text>
                            </g>
                            
                            <defs>
                                <marker id="arrow" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="white" /></marker>
                            </defs>
                        </svg>
                    </div>
                </div>

                <h2>I. The Variables of Science</h2>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(236,72,153,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Variable Type</th>
                            <th style="padding:12px; text-align:left;">What It Is</th>
                            <th style="padding:12px; text-align:left;">Example (Enzyme Lab)</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Independent (IV)</strong></td><td style="padding:10px;">What YOU change</td><td style="padding:10px;">Temperature of the reaction (20°C, 30°C, 40°C)</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Dependent (DV)</strong></td><td style="padding:10px;">What you MEASURE</td><td style="padding:10px;">Rate of O₂ production (mL/min)</td></tr>
                        <tr><td style="padding:10px;"><strong>Constants</strong></td><td style="padding:10px;">What stays the SAME</td><td style="padding:10px;">Enzyme concentration, substrate concentration, pH, time</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Negative Control</strong></td><td style="padding:10px;">No treatment baseline</td><td style="padding:10px;">Boiled (denatured) enzyme at 37°C → should show 0 activity</td></tr>
                    </table>
                </div>

                <h2>II. Designing a Valid Experiment</h2>

                <ol style="line-height: 2.2;">
                    <li><strong>Hypothesis:</strong> Must be testable, specific, and falsifiable. Format: "If [IV], then [DV], because [reasoning]."</li>
                    <li><strong>Single variable:</strong> Only change ONE factor at a time.</li>
                    <li><strong>Controls:</strong> Include both negative (no treatment) and positive (known treatment) controls.</li>
                    <li><strong>Replication:</strong> Minimum 3 trials per condition to establish reliability.</li>
                    <li><strong>Sample size:</strong> Large enough to be statistically meaningful (use chi-square to verify).</li>
                </ol>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: IBET Lab Report Standards</h4>
                    <p>In IBET labs, you must explicitly state your <strong>null hypothesis</strong>, identify ALL controlled variables, justify your sample size, and include statistical analysis (chi-square or t-test). A "good result" is not just the expected outcome — it's a result that is <strong>statistically significant</strong> and <strong>reproducible</strong>.</p>
                </div>

                <!-- VISUAL DYNAMIC: ERROR BARS & SIGNIFICANCE -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-magenta); margin-bottom: 20px; text-align: center;"><i class="fas fa-chart-bar"></i> Visual Dynamic: Data Reliability & Error Analysis</h5>
                    <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 40px;">
                        <svg viewBox="0 0 200 200" width="180">
                            <!-- Axes -->
                            <line x1="30" y1="170" x2="180" y2="170" stroke="white" stroke-width="2" />
                            <line x1="30" y1="170" x2="30" y2="30" stroke="white" stroke-width="2" />
                            
                            <!-- Significant Result (No overlap) -->
                            <rect x="50" y="100" width="30" height="70" fill="var(--accent-magenta)" opacity="0.5" />
                            <line x1="65" y1="80" x2="65" y2="120" stroke="white" stroke-width="2" />
                            <line x1="55" y1="80" x2="75" y2="80" stroke="white" stroke-width="2" />
                            <line x1="55" y1="120" x2="75" y2="120" stroke="white" stroke-width="2" />
                            
                            <rect x="110" y="130" width="30" height="40" fill="var(--accent-magenta)" opacity="0.3" />
                            <line x1="125" y1="115" x2="125" y2="145" stroke="white" stroke-width="2" />
                            <line x1="115" y1="115" x2="135" y2="115" stroke="white" stroke-width="2" />
                            <line x1="115" y1="145" x2="135" y2="145" stroke="white" stroke-width="2" />
                            
                            <text x="100" y="190" fill="var(--accent-emerald)" font-size="10" text-anchor="middle" font-weight="bold">No Overlap = Significant</text>
                            <text x="95" y="60" fill="var(--accent-emerald)" font-size="14" font-weight="bold">*</text>
                        </svg>
                        
                        <div style="flex: 1; min-width: 200px; font-size: 0.9rem; color: #ddd;">
                            <p style="margin-bottom: 12px;"><i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> <strong>95% Confidence Interval:</strong> If these bars do not overlap, we can be confident the difference is not due to chance.</p>
                            <p><i class="fas fa-exclamation-triangle" style="color: var(--accent-red);"></i> <strong>Overlap = Null Hypothesis:</strong> If error bars overlap significantly, we fail to reject the null hypothesis.</p>
                        </div>
                    </div>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-magenta);">
                    <h5 style="color: var(--accent-magenta); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Identifying Experimental Flaws</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A student tests whether caffeine affects heart rate by giving coffee to Group A and nothing to Group B. What are the flaws?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-magenta); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Flaw 1:</strong> Confounding variable — coffee contains many substances besides caffeine (sugar, temperature, volume). The IV should be pure caffeine.</div>
                            <div><strong>Flaw 2:</strong> No placebo — Group B should receive decaf coffee (same taste/volume) so the only difference is caffeine.</div>
                            <div><strong>Flaw 3:</strong> No mention of sample size or replication.</div>
                            <div><strong>Flaw 4:</strong> No mention of controlled variables (age, weight, time of day, baseline heart rate).</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-magenta); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>IV = what you change; DV = what you measure; Constants = everything else.</li>
                        <li>Controls establish baselines: negative (no treatment) and positive (known treatment).</li>
                        <li>Replication (≥3 trials) and adequate sample size reduce the impact of random variation.</li>
                        <li>A well-designed experiment eliminates all alternative explanations for the results.</li>
                        <li>Always include a testable, falsifiable hypothesis and statistical analysis.</li>
                    </ul>
                </div>
            </div>
        `
    }
};
