window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 11: BIO-STATISTICS & DATA ANALYSIS
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch11"] = {

    "ch11-1": {
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
    "ch11-2": {
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
    }
};
