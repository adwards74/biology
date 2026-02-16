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

                <!-- PREMIUM CINEMATIC HEADER: THE EVOLUTIONARY FILTER -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #422006 0%, #0c0a09 100%); border: 2px solid var(--accent-amber); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(245,158,11,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-amber); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-amber); padding-bottom: 8px; margin: 0;">Natural Selection & Adaptation</h4>
                        <svg viewBox="0 0 500 150" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- The Selection Filter (Sieve) -->
                            <rect x="150" y="60" width="200" height="10" rx="5" fill="rgba(245,158,11,0.2)" stroke="var(--accent-amber)" stroke-width="1" stroke-dasharray="10 5" />
                            
                            <!-- Incoming Diversity (Mixed Particles) -->
                            <g>
                                <circle r="4" fill="var(--accent-red)">
                                    <animateMotion path="M 50 20 Q 100 40 180 60" dur="2s" repeatCount="indefinite" />
                                </circle>
                                <circle r="4" fill="var(--accent-cyan)">
                                    <animateMotion path="M 70 10 Q 120 30 220 60" dur="2.5s" repeatCount="indefinite" />
                                </circle>
                                <circle r="5" fill="var(--accent-amber)">
                                    <animateMotion path="M 30 30 Q 80 50 200 60" dur="1.8s" repeatCount="indefinite" />
                                </circle>
                            </g>
                            
                            <!-- Filtered Outcomes (Only Amber survives) -->
                            <g>
                                <circle r="5" fill="var(--accent-amber)">
                                    <animateMotion path="M 200 70 Q 220 100 250 130" dur="1.8s" repeatCount="indefinite" begin="0.9s" />
                                </circle>
                                <circle r="5" fill="var(--accent-amber)" opacity="0.6">
                                    <animateMotion path="M 250 70 Q 270 110 300 130" dur="2s" repeatCount="indefinite" begin="1s" />
                                </circle>
                            </g>
                            
                            <!-- Labels -->
                            <text x="50" y="10" fill="#888" font-size="8">RANDOM MUTATION (DIVERSITY)</text>
                            <text x="350" y="68" fill="var(--accent-amber)" font-size="9" font-weight="bold">SELECTION PRESSURE</text>
                            <text x="280" y="145" fill="var(--accent-amber)" font-size="8">ADAPTED POPULATION</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">Differential Survival: The environment "computes" which phenotypes are optimal for the current input parameters.</p>
                    </div>
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

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-amber); padding: 30px;">
                    <h5 style="color: var(--accent-amber); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Natural Selection & H-W equilibrium</h5>
                    <a href="https://www.youtube.com/watch?v=7VM9YxmULuo" target="_blank" style="text-decoration: none; display: block;">
                        <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://img.youtube.com/vi/7VM9YxmULuo/maxresdefault.jpg'); background-size: cover; background-position: center; border: 1px solid rgba(245,158,11,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: transform 0.3s ease;">
                            <!-- Floating Play Button -->
                            <div style="width: 80px; height: 80px; background: var(--accent-amber); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(245,158,11,0.6); z-index: 2;">
                                <i class="fas fa-play" style="color: black; font-size: 2rem; margin-left: 5px;"></i>
                            </div>
                            <!-- Bottom Info Bar -->
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(245, 158, 11, 0.9); padding: 12px; text-align: center; backdrop-filter: blur(10px);">
                                <p style="margin: 0; color: black; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px;">WATCH ON YOUTUBE <i class="fas fa-external-link-alt" style="font-size: 0.8rem; margin-left: 8px;"></i></p>
                            </div>
                        </div>
                    </a>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Evolution & Hardy-Weinberg (Amoeba Sisters / Advanced Curation)</p>
                </div>
            </div>
        `
    }
};
