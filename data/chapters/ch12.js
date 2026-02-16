window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 12: EXPERIMENTAL DESIGN & FRQ PROTOCOLS
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch12"] = {

    "ch12-1": {
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

                <!-- VIDEO CURATION: MASTER CLASS (EMBEDDED) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-emerald); padding: 30px;">
                    <h5 style="color: var(--accent-emerald); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Experimental Design</h5>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--standard-radius); box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3);">
                        <iframe src="https://www.youtube.com/embed/5U7L_2VnS_k" title="Experimental Design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Controlled Experiments (Bozeman Science)</p>
                </div>
            </div>
        `
    },
    "ch12-2": {
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

                <!-- VIDEO CURATION: MASTER CLASS (EMBEDDED) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-magenta); padding: 30px;">
                    <h5 style="color: var(--accent-magenta); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: The CER Model</h5>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--standard-radius); box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(217,70,239,0.3);">
                        <iframe src="https://www.youtube.com/embed/5KKsLuRPsvU" title="CER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Evidence-Based Claims (Crash Course)</p>
                </div>
            </div>
        `
    }
};
