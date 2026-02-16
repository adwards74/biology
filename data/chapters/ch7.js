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

                <!-- VIDEO CURATION: MASTER CLASS (EMBEDDED) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-amber); padding: 30px;">
                    <h5 style="color: var(--accent-amber); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Natural Selection & H-W equilibrium</h5>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--standard-radius); box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(245,158,11,0.3);">
                        <iframe src="https://www.youtube.com/embed/7VM9YxmULuo" title="Hardy-Weinberg Equilibrium" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Evolution & Hardy-Weinberg (Amoeba Sisters)</p>
                </div>
            </div>
        `
    },

    "ch7-3": {
        title: "13.3: Phylogeny & Systematics",
        subtitle: "Reading the Tree of Life — Cladograms, BLAST, and Molecular Clocks",
        content: `
            <div class="lesson-section">
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-purple); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Phylogeny</strong> — The evolutionary history of a species or group.</div>
                        <div><strong>Cladogram</strong> — A branching diagram showing relationships based on shared derived characters.</div>
                        <div><strong>Node</strong> — A branch point representing the most recent common ancestor.</div>
                        <div><strong>Molecular Clock</strong> — Using mutation rates in DNA/protein sequences to estimate time of divergence.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Reading the Files</h3>
                    <p>Morphology (what things look like) can be deceiving due to convergent evolution (e.g., dolphins and sharks). <strong>DNA is the ultimate truth.</strong> By comparing sequence alignment (BLAST), we can determine exactly how closely related two species are, regardless of how they look.</p>
                </div>

                <!-- VISUAL DYNAMIC: INTERACTIVE CLADOGRAM -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; border-radius: var(--standard-radius); background: linear-gradient(135deg, #2e1065 0%, #0f172a 100%); border: 2px solid var(--accent-purple);">
                    <h5 style="color: var(--accent-purple); margin-bottom: 25px; text-align: center;"><i class="fas fa-code-branch"></i> The Tree of Life (Cladistics)</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 400 250" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- Main Trunk -->
                            <line x1="50" y1="200" x2="350" y2="50" stroke="white" stroke-width="2" />
                            
                            <!-- Branch 1: Fish -->
                            <line x1="100" y1="175" x2="100" y2="100" stroke="white" stroke-width="2" />
                            <text x="100" y="90" fill="white" font-size="10" text-anchor="middle">Fish</text>
                             <!-- Trait 1 -->
                            <rect x="95" y="170" width="10" height="10" fill="var(--accent-purple)" />
                            <text x="110" y="180" fill="#aaa" font-size="8">Vertebrae</text>

                            <!-- Branch 2: Frog -->
                            <line x1="180" y1="135" x2="180" y2="60" stroke="white" stroke-width="2" />
                            <text x="180" y="50" fill="white" font-size="10" text-anchor="middle">Frog</text>
                             <!-- Trait 2 -->
                            <rect x="175" y="130" width="10" height="10" fill="var(--accent-purple)" />
                            <text x="190" y="140" fill="#aaa" font-size="8">4 Limbs</text>

                            <!-- Branch 3: Human -->
                            <line x1="260" y1="95" x2="260" y2="20" stroke="white" stroke-width="2" />
                            <text x="260" y="10" fill="white" font-size="10" text-anchor="middle">Human</text>
                            <!-- Trait 3 -->
                            <rect x="255" y="90" width="10" height="10" fill="var(--accent-purple)" />
                            <text x="270" y="100" fill="#aaa" font-size="8">Amniotic Egg</text>
                            
                            <!-- Node Animation -->
                            <circle cx="260" cy="95" r="4" fill="var(--accent-cyan)">
                                <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <text x="350" y="150" fill="#888" font-size="9" text-anchor="end" font-style="italic">Each node is a common ancestor</text>
                        </svg>
                    </div>
                </div>

                <h2>I. Molecular Homology (BLAST)</h2>
                <p>The more similar the DNA sequence, the more recently the two species shared a common ancestor.</p>
                <div class="glass-card" style="padding: 15px; font-family: 'Courier New', monospace; font-size: 0.85rem; background: rgba(0,0,0,0.3);">
                    <div>Human: A-T-G-C-C-A-T-T</div>
                    <div>Chimp: A-T-G-C-C-A-T-<span style="color:var(--accent-red);">C</span> (1 diff)</div>
                    <div>Mouse: A-T-<span style="color:var(--accent-red);">A</span>-C-C-<span style="color:var(--accent-red);">G</span>-T-T (2 diffs)</div>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (EMBEDDED) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-purple); padding: 30px;">
                    <h5 style="color: var(--accent-purple); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Cladograms & Phylogenetics</h5>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--standard-radius); box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(168,85,247,0.3);">
                        <iframe src="https://www.youtube.com/embed/J02_0ZfQ-iI" title="Crash Course Biology #19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Taxonomy: Life's Filing System (Crash Course Biology #19)</p>
                </div>
            </div>
        `
    }
};
