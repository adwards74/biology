window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 9: MODERN RESEARCH & BIO-STATISTICS (Unit 16)
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch9"] = {

    "ch9-1": {
        title: "16.1 Systematic Review (SR) Protocol",
        subtitle: "Eliminating Researcher Bias and the PRISMA Logic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left: 4px solid var(--accent-magenta);">
                    <h3><i class="fas fa-brain"></i> The "Why": Dealing with Information Overload</h3>
                    <p>In modern biology, thousands of papers are published monthly. If a scientist only picks papers that support their theory, that's <strong>Confirmation Bias</strong>. A <strong>Systematic Review</strong> is a protocol-driven search that forces the researcher to look at <em>every</em> relevant study, even ones they disagree with. This is how we reach a "Scientific Consensus."</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: THE PRISMA DATA SIEVE -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #4c0519 0%, #0c0a09 100%); border: 2px solid var(--accent-magenta); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(217,70,239,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-magenta); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-magenta); padding-bottom: 8px; margin: 0;">PRISMA Evidence Purification</h4>
                        <svg viewBox="0 0 400 220" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- The Sieve Funnel -->
                            <path d="M 50 20 L 350 20 L 250 180 L 150 180 Z" fill="rgba(217,70,239,0.05)" stroke="var(--accent-magenta)" stroke-width="1" stroke-dasharray="5 5" />
                            
                            <!-- Internal Filter Plates -->
                            <line x1="100" y1="60" x2="300" y2="60" stroke="var(--accent-magenta)" stroke-width="2" opacity="0.3" />
                            <line x1="130" y1="120" x2="270" y2="120" stroke="var(--accent-magenta)" stroke-width="2" opacity="0.5" />
                            
                            <!-- Falling "Study" Particles -->
                            <g>
                                <!-- Noisy Data (Red) - mostly filtered out -->
                                <circle r="3" fill="var(--accent-red)">
                                    <animateMotion path="M 120 0 L 140 58" dur="2s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3" fill="var(--accent-red)">
                                    <animateMotion path="M 280 0 L 260 58" dur="2.5s" repeatCount="indefinite" />
                                </circle>
                                
                                <!-- Pure Data (Magenta) - passes through -->
                                <circle r="4" fill="var(--accent-magenta)">
                                    <animateMotion path="M 200 0 L 200 60 L 200 120 L 200 210" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="1;1;1;0" dur="3s" repeatCount="indefinite" />
                                </circle>
                            </g>
                            
                            <!-- Labels -->
                            <text x="50%" y="50" fill="white" font-size="8" text-anchor="middle" opacity="0.6">SCREENING (N=5,000)</text>
                            <text x="50%" y="110" fill="white" font-size="8" text-anchor="middle" opacity="0.8">ELIGIBILITY (N=150)</text>
                            <text x="50%" y="200" fill="var(--accent-magenta)" font-size="10" text-anchor="middle" font-weight="bold">INCLUDED (N=12)</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">Scientific validation is a reductionist process: stripping away noise until only reproducible truth remains.</p>
                    </div>
                </div>

                <h2>The "How": The PRISMA Sieve</h2>
                <p>We use the <strong>PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses)</strong> protocol to filter data in four strict stages:</p>
                
                <div class="glass-card" style="margin:20px 0;">
                    <ul style="line-height: 1.8;">
                        <li><strong>1. Identification:</strong> Search databases (PubMed, Google Scholar) using fixed keywords (e.g., "p53 AND apoptosis").</li>
                        <li><strong>2. Screening:</strong> Remove duplicates and read abstracts. If a paper studied mice but you're studying humans, discard it here.</li>
                        <li><strong>3. Eligibility:</strong> Read the full text. Check if the methodology is sound. Did they have a control group?</li>
                        <li><strong>4. Inclusion:</strong> The final "pure" datasets that will be used for your conclusion.</li>
                    </ul>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-filter"></i> PRISMA Flow Chart</h4>
                    <svg width="300" height="180" viewBox="0 0 300 180">
                        <rect x="100" y="10" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="55" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="100" width="100" height="25" rx="3" fill="rgba(255,255,255,0.05)" stroke="var(--accent-magenta)"/>
                        <rect x="100" y="145" width="100" height="25" rx="3" fill="var(--accent-magenta)"/>
                        <line x1="150" y1="35" x2="150" y2="55" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="150" y1="80" x2="150" y2="100" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <line x1="150" y1="125" x2="150" y2="145" stroke="var(--accent-magenta)" stroke-width="2"/>
                        <text x="115" y="27" fill="#fff" font-size="8">Identification</text>
                        <text x="120" y="72" fill="#fff" font-size="8">Screening</text>
                        <text x="122" y="117" fill="#fff" font-size="8">Eligibility</text>
                        <text x="125" y="162" fill="#fff" font-size="8" font-weight="bold">Included</text>
                    </svg>
                </div>
            </div>
        `
    },

    "ch9-2": {
        title: "16.2 Advanced Stats: P-Hacking & Meta-Analysis",
        subtitle: "Truth in Numbers: Effect Size over P-Values",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-exclamation-triangle"></i> The "Why": The Replication Crisis</h3>
                    <p>Many "breakthrough" study results cannot be reproduced by other scientists. Why? Because of <strong>P-Hacking</strong>. If you run 20 different tests on random data, by pure chance, one might show a p-value < 0.05. Reporting <em>only</em> that one result is scientific dishonesty.</p>
                </div>

                <h2>The "How": Beyond the P-Value</h2>
                <p>To find the real truth, we focus on two things:</p>
                <div class="glass-card" style="padding:20px;">
                    <ol style="line-height: 1.8;">
                        <li><strong>Effect Size:</strong> Instead of asking "Is there a difference?", ask "How <em>big</em> is the difference?" (e.g., does the drug lower blood pressure by 2mmHg or 20mmHg?).</li>
                        <li><strong>Meta-Analysis:</strong> This is a statistical tool that combines the raw data from 50 different reviews. It treats 50 small studies as one giant experiment, giving us a "Forest Plot" of the true effect.</li>
                    </ol>
                </div>
            </div>
        `
    },

    "ch9-3": {
        title: "16.3 Chi-Square ($\\chi^2$) Test",
        subtitle: "Goodness of Fit: Does Reality match our Hypothesis?",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-blue);">
                    <h3><i class="fas fa-dice"></i> The "Why": Is it Chance or a Law?</h3>
                    <p>If you flip a coin 100 times and get 55 heads, is the coin biased? Or is that just random luck? The <strong>Chi-Square Test</strong> gives us a mathematical way to decide if the difference between <strong>Observed</strong> and <strong>Expected</strong> is too large to be just luck.</p>
                </div>

                <h2>The "How": Step-by-Step Mendelian Example</h2>
                <div class="proof-box glass" style="margin:20px 0;">
                    <h4>Formula: $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$</h4>
                </div>

                <div class="glass-card" style="padding:20px;">
                    <p><strong>Scenario:</strong> You cross two purple (Pp) plants. Mendel predicts a 3:1 ratio (75% Purple, 25% White). You observe 100 plants: 70 Purple, 30 White.</p>
                    <table style="width:100%; border-collapse:collapse; margin:15px 0; font-size: 0.9rem;">
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                            <th style="padding:10px; text-align:left;">Phenotype</th>
                            <th style="padding:10px;">Observed (O)</th>
                            <th style="padding:10px;">Expected (E)</th>
                            <th style="padding:10px;">(O-E)² / E</th>
                        </tr>
                        <tr>
                            <td style="padding:10px;">Purple</td>
                            <td style="padding:10px; text-align:center;">70</td>
                            <td style="padding:10px; text-align:center;">75</td>
                            <td style="padding:10px; text-align:center;">25/75 = 0.33</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">White</td>
                            <td style="padding:10px; text-align:center;">30</td>
                            <td style="padding:10px; text-align:center;">25</td>
                            <td style="padding:10px; text-align:center;">25/25 = 1.00</td>
                        </tr>
                    </table>
                    <p><strong>Total $\\chi^2$:</strong> 1.33</p>
                    <p><strong>Conclusion:</strong> With 1 Degree of Freedom (categories - 1), the critical value for $p=0.05$ is 3.84. Since $1.33 < 3.84$, we <strong>Fail to Reject the Null Hypothesis</strong>. The 70:30 result is close enough to 75:25 to be explained by random chance.</p>
                </div>
            </div>
        `
    },

    "ch9-4": {
        title: "16.4 Standard Error (SEM) & Confidence Intervals",
        subtitle: "Visualizing Uncertainty in Biological Data",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-red);">
                    <h3><i class="fas fa-arrows-alt-v"></i> The "Why": Sample vs. Population</h3>
                    <p>We can't measure every tree in the world. We measure 20. The <strong>Standard Error of the Mean (SEM)</strong> tells us how accurately that sample mean represents the true global average. It’s the "precision" of our measuring stick.</p>
                </div>

                <h2>The "How": Reading the Error Bars</h2>
                <div class="glass-card" style="padding:20px;">
                    <ul style="line-height: 1.8;">
                        <li><strong>Standard Deviation (SD):</strong> Shows how much individual data points spread out around the mean.</li>
                        <li><strong>Standard Error (SEM):</strong> $SEM = \\frac{SD}{\\sqrt{n}}$. As your sample size ($n$) increases, your error decreases.</li>
                        <li><strong>Confidence Intervals (95% CI):</strong> Usually $Mean \\pm 2 \\times SEM$.</li>
                    </ul>
                </div>

                <div class="key-terms-box glass" style="margin-top:20px; border-left: 4px solid var(--accent-cyan);">
                    <h4><i class="fas fa-check-circle"></i> Quick Rule of Thumb</h4>
                    <p>When comparing two bars in a graph:</p>
                    <ul>
                        <li>If the <strong>2xSEM error bars overlap</strong> $\rightarrow$ The difference is likely NOT significant.</li>
                        <li>If the <strong>error bars do NOT overlap</strong> $\rightarrow$ There is a high probability the results are significantly different.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch9-5": {
        title: "16.5 Experimental Design & Variable Controls",
        subtitle: "The Science of Isolation: Controlling the Variables",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-vial"></i> The "Why": Causality vs. Correlation</h3>
                    <p>If you see that people who eat ice cream have higher sunburn rates, does ice cream cause sunburn? No, the <strong>Confounding Variable</strong> is the sun. A good experiment isolates the *cause* by controlling every other variable.</p>
                </div>

                <h2>The "How": Setup for a Perfect Lab</h2>
                <div class="glass-card" style="padding:20px;">
                    <ul style="line-height: 1.8;">
                        <li><strong>Independent Variable ($X$):</strong> The thing I change (e.g., Concentration of Enzyme).</li>
                        <li><strong>Dependent Variable ($Y$):</strong> The thing I measure (e.g., Rate of reaction).</li>
                        <li><strong>Positive Control:</strong> A group where we *know* the result will be positive (ensures the equipment works).</li>
                        <li><strong>Negative Control (Placebo):</strong> A group where no treatment is given (provides a baseline for comparison).</li>
                        <li><strong>Constants:</strong> Factors that must stay the same (Temperature, pH, Volume) so they don't mess up the data.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch9-6": {
        title: "16.6 FRQ Protocol (CER Model)",
        subtitle: "How to Answer Biology Questions like an Expert",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-pen-nib"></i> The "Why": Logic over Memorization</h3>
                    <p>In the AP exam or IBET, you don't get points just for knowing terms. You get points for <strong>Linking</strong> concepts. The CER model is the engine of scientific communication.</p>
                </div>

                <h2>The "How": The CER Framework</h2>
                <div class="glass-card" style="padding:20px; border-left: 5px solid var(--accent-magenta);">
                    <p><strong>1. Claim:</strong> A one-sentence answer to the question. (Do not start with "I think").</p>
                    <p><strong>2. Evidence:</strong> Specific data from the provided graph or table. (e.g., "At 40°C, the reaction rate dropped to zero").</p>
                    <p><strong>3. Reasoning:</strong> Use biological laws to explain <em>why</em> the evidence supports the claim. (e.g., "This occurred because the high temperature disrupted the hydrogen bonds in the enzyme's active site, causing denaturation").</p>
                </div>

                <div class="key-terms-box glass" style="margin-top:20px; border-color: var(--accent-emerald);">
                    <h4><i class="fas fa-lightbulb"></i> Pro-Tip</h4>
                    <p>Always use 'if/then' logic in your reasoning. "If the enzyme is denatured, then the substrate can no longer bind, thus the reaction stops."</p>
                </div>
            </div>
        `
    },

    // --- Unit 11 Specific Headers (Subject 500) ---
    "u11-1": {
        title: "11.1 Chi-Square ($\\chi^2$) Test",
        subtitle: "Goodness of Fit: Does Reality match our Hypothesis?",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-blue);">
                    <h3><i class="fas fa-dice"></i> The "Why": Is it Chance or a Law?</h3>
                    <p>If you flip a coin 100 times and get 55 heads, is the coin biased? Or is that just random luck? The <strong>Chi-Square Test</strong> gives us a mathematical way to decide if the difference between <strong>Observed</strong> and <strong>Expected</strong> is too large to be just luck.</p>
                </div>

                <h2>The "How": Step-by-Step Mendelian Example</h2>
                <div class="proof-box glass" style="margin:20px 0;">
                    <h4>Formula: $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$</h4>
                </div>

                <div class="glass-card" style="padding:20px;">
                    <p><strong>Scenario:</strong> You cross two purple (Pp) plants. Mendel predicts a 3:1 ratio (75% Purple, 25% White). You observe 100 plants: 70 Purple, 30 White.</p>
                    <table style="width:100%; border-collapse:collapse; margin:15px 0; font-size: 0.9rem;">
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                            <th style="padding:10px; text-align:left;">Phenotype</th>
                            <th style="padding:10px;">Observed (O)</th>
                            <th style="padding:10px;">Expected (E)</th>
                            <th style="padding:10px;">(O-E)² / E</th>
                        </tr>
                        <tr>
                            <td style="padding:10px;">Purple</td>
                            <td style="padding:10px; text-align:center;">70</td>
                            <td style="padding:10px; text-align:center;">75</td>
                            <td style="padding:10px; text-align:center;">25/75 = 0.33</td>
                        </tr>
                        <tr>
                            <td style="padding:10px;">White</td>
                            <td style="padding:10px; text-align:center;">30</td>
                            <td style="padding:10px; text-align:center;">25</td>
                            <td style="padding:10px; text-align:center;">25/25 = 1.00</td>
                        </tr>
                    </table>
                    <p><strong>Total $\\chi^2$:</strong> 1.33</p>
                    <p><strong>Conclusion:</strong> With 1 Degree of Freedom (categories - 1), the critical value for $p=0.05$ is 3.84. Since $1.33 < 3.84$, we <strong>Fail to Reject the Null Hypothesis</strong>. The 70:30 result is close enough to 75:25 to be explained by random chance.</p>
                </div>
            </div>
        `
    },
    "u11-2": {
        title: "11.2 Standard Error (SEM) & Confidence Intervals",
        subtitle: "Visualizing Uncertainty in Biological Data",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-red);">
                    <h3><i class="fas fa-arrows-alt-v"></i> The "Why": Sample vs. Population</h3>
                    <p>We can't measure every tree in the world. We measure 20. The <strong>Standard Error of the Mean (SEM)</strong> tells us how accurately that sample mean represents the true global average. It’s the "precision" of our measuring stick.</p>
                </div>

                <h2>The "How": Reading the Error Bars</h2>
                <div class="glass-card" style="padding:20px;">
                    <ul style="line-height: 1.8;">
                        <li><strong>Standard Deviation (SD):</strong> Shows how much individual data points spread out around the mean.</li>
                        <li><strong>Standard Error (SEM):</strong> $SEM = \\frac{SD}{\\sqrt{n}}$. As your sample size ($n$) increases, your error decreases.</li>
                        <li><strong>Confidence Intervals (95% CI):</strong> Usually $Mean \\pm 2 \\times SEM$.</li>
                    </ul>
                </div>

                <div class="key-terms-box glass" style="margin-top:20px; border-left: 4px solid var(--accent-cyan);">
                    <h4><i class="fas fa-check-circle"></i> Quick Rule of Thumb</h4>
                    <p>When comparing two bars in a graph:</p>
                    <ul>
                        <li>If the <strong>2xSEM error bars overlap</strong> $\rightarrow$ The difference is likely NOT significant.</li>
                        <li>If the <strong>error bars do NOT overlap</strong> $\rightarrow$ There is a high probability the results are significantly different.</li>
                    </ul>
                </div>
            </div>
        `
    },

    // --- Unit 12 Specific Headers (Subject 500) ---
    "u12-1": {
        title: "12.1 Experimental Design & Variable Controls",
        subtitle: "The Science of Isolation: Controlling the Variables",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-vial"></i> The "Why": Causality vs. Correlation</h3>
                    <p>If you see that people who eat ice cream have higher sunburn rates, does ice cream cause sunburn? No, the <strong>Confounding Variable</strong> is the sun. A good experiment isolates the *cause* by controlling every other variable.</p>
                </div>

                <h2>The "How": Setup for a Perfect Lab</h2>
                <div class="glass-card" style="padding:20px;">
                    <ul style="line-height: 1.8;">
                        <li><strong>Independent Variable ($X$):</strong> The thing I change (e.g., Concentration of Enzyme).</li>
                        <li><strong>Dependent Variable ($Y$):</strong> The thing I measure (e.g., Rate of reaction).</li>
                        <li><strong>Positive Control:</strong> A group where we *know* the result will be positive (ensures the equipment works).</li>
                        <li><strong>Negative Control (Placebo):</strong> A group where no treatment is given (provides a baseline for comparison).</li>
                        <li><strong>Constants:</strong> Factors that must stay the same (Temperature, pH, Volume) so they don't mess up the data.</li>
                    </ul>
                </div>
            </div>
        `
    },
    "u12-2": {
        title: "12.2 FRQ Writing Protocols (CER)",
        subtitle: "How to Answer Biology Questions like an Expert",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-pen-nib"></i> The "Why": Logic over Memorization</h3>
                    <p>In the AP exam or IBET, you don't get points just for knowing terms. You get points for <strong>Linking</strong> concepts. The CER model is the engine of scientific communication.</p>
                </div>

                <h2>The "How": The CER Framework</h2>
                <div class="glass-card" style="padding:20px; border-left: 5px solid var(--accent-magenta);">
                    <p><strong>1. Claim:</strong> A one-sentence answer to the question. (Do not start with "I think").</p>
                    <p><strong>2. Evidence:</strong> Specific data from the provided graph or table. (e.g., "At 40°C, the reaction rate dropped to zero").</p>
                    <p><strong>3. Reasoning:</strong> Use biological laws to explain <em>why</em> the evidence supports the claim. (e.g., "This occurred because the high temperature disrupted the hydrogen bonds in the enzyme's active site, causing denaturation").</p>
                </div>

                <div class="key-terms-box glass" style="margin-top:20px; border-color: var(--accent-emerald);">
                    <h4><i class="fas fa-lightbulb"></i> Pro-Tip</h4>
                    <p>Always use 'if/then' logic in your reasoning. "If the enzyme is denatured, then the substrate can no longer bind, thus the reaction stops."</p>
                </div>
            </div>
        `
    }
};
