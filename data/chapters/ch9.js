window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 9: MODERN RESEARCH & BIO-STATISTICS (Unit 16)
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch9"] = {

    "ch9-1": {
        title: "16.1 Systematic Review (SR) Protocol",
        subtitle: "PRISMA Guidelines and Data Filtering Logic",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-magenta);">
                    <h3><i class="fas fa-microscope"></i> Section I: Data Purification (PRISMA Protocol)</h3>
                    <p>Selecting only reliable data from a vast sea of research results is central to biological research. The PRISMA guidelines act like a 'sieve' to ensure transparency and reproducibility of research.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center;">
                    <h4><i class="fas fa-filter"></i> PRISMA Flow Chart Simulation</h4>
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
                    </svg>\n                </div>\n            </div>\n        `
    },

    "ch9-2": {
        title: "16.2 Advanced Stats: P-Hacking & Meta-Analysis",
        subtitle: "Preventing Data Distortion and Effect Size Analysis",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-chart-line"></i> Section I: Pitfalls of Statistical Significance</h3>
                    <p>A p-value < 0.05 result is not always the truth. <strong>P-Hacking</strong> refers to manipulating data until a desired result is achieved. To compensate for this, meta-analyses that integrate multiple studies focus on <strong>Effect Size</strong>.</p>
                </div>
            </div>
        `
    },

    "ch9-3": {
        title: "16.3 Chi-Square Test",
        subtitle: "Comparing Observed and Expected Values & Significance Testing",
        content: `
            <div class="lesson-section">
                <div class="proof-box glass">
                    <h4>$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$</h4>
                    <p>When observing Mendelian inheritance ratios or ecosystem distributions, we statistically verify if the actual data matches the hypothesis.</p>
                </div>
            </div>
        `
    },

    "ch9-4": {
        title: "16.4 Standard Error (SEM) & Confidence Intervals",
        subtitle: "Data Precision Measurement and Error Bar Analysis",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-red);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Precision vs. Variance</h3>
                    <p>The Standard Error of the Mean (SEM) is a measure of how close the sample mean is to the actual population mean.</p>
                </div>
            </div>
        `
    },

    "ch9-5": {
        title: "16.5 Experimental Design & Variable Controls",
        subtitle: "Standards for Independent Variables, Dependent Variables, and Controls",
        content: `
            <div class="lesson-section">
                <p>A good experiment changes only one independent variable to eliminate alternative explanations for the result.</p>
            </div>
        `
    },

    "ch9-6": {
        title: "16.6 FRQ Protocol (CER)",
        subtitle: "Claim-Evidence-Reasoning for AP Biology Responses",
        content: `
            <div class="lesson-section">
                <p>Answering like a scientist: Connecting clear Claims, specific Data (Evidence), and biological Principles (Reasoning).</p>
            </div>
        `
    }
};
