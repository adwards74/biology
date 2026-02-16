window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 7: NATURAL SELECTION & PHYLOGENY (Unit 13)
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch7"] = {

    "ch7-1": {
        title: "13.1: The Mechanism of Change",
        subtitle: "Natural Selection, Selection Pressures, and Adaptation",
        content: `
            <div class="lesson-section">
                <!-- KEY TERMS BOX -->
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-amber); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-amber); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Adaptation</strong> — A heritable trait that increases an individual's fitness in a specific environment.</div>
                        <div><strong>Selection Pressure</strong> — External agents (predators, climate) that affect an organism's ability to survive.</div>
                        <div><strong>Fitness</strong> — The ability of an organism to survive and reproduce in its environment.</div>
                        <div><strong>Directional Selection</strong> — Shift toward one extreme phenotype.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-amber);">
                    <h3><i class="fas fa-lightbulb"></i> The Why: Life is a Computational Filter</h3>
                    <p>Evolution is not "random." Mutations are random, but <strong>Natural Selection</strong> is a deterministic filter. Traits that work are saved; traits that don't are deleted. It is the process by which biological hardware self-optimizes over geological timescales.</p>
                </div>

                <h2>II. The How: Darwin's Four Postulates</h2>
                <div class="glass-card elite-border" style="margin: 20px 0;">
                    <ul style="line-height: 1.8;">
                        <li><strong>1. Variation:</strong> Individuals in a population differ from one another.</li>
                        <li><strong>2. Heritability:</strong> At least some of these differences are passed to offspring.</li>
                        <li><strong>3. Survival of the Fittest:</strong> More offspring are produced than can survive (Struggle for Existence).</li>
                        <li><strong>4. Differential Reproduction:</strong> Individuals with favorable traits are more likely to survive and reproduce.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch7-2": {
        title: "13.2: Population Genetics (Hardy-Weinberg)",
        subtitle: "Measuring Evolution via Allelic Shifts",
        content: `
            <div class="lesson-section">
                <div class="proof-box glass" style="margin:20px 0;">
                    <h4>$p^2 + 2pq + q^2 = 1$</h4>
                    <p style="font-size: 0.9rem; opacity:0.8;">$p + q = 1$</p>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-microchip"></i> Mastery Protocol: The Null Model</h3>
                    <p>Hardy-Weinberg equilibrium is a <strong>Null Hypothesis</strong>. If a population is in H-W equilibrium, it is NOT evolving. If the observed allele frequencies differ from H-W predictions, then evolution *must* be occurring via: Mutation, Selection, Genetic Drift, Gene Flow, or Non-Random Mating.</p>
                </div>
            </div>
        `
    }
};
