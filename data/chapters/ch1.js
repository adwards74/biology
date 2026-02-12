window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch1"] = {
    // UNIT 1: ARCHITECTURE & SCALABILITY
    "ch1-1": {
        title: "1.1: The Geometry of Life",
        subtitle: "Surface Area to Volume (SA/V) Ratio",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-expand-arrows-alt"></i> The Scalar Limit</h3>
                    <p>Why aren't there single cells the size of an elephant? Because as a sphere (or cube) grows, its <strong>Volume ($r^3$)</strong> increases exponentially faster than its <strong>Surface Area ($r^2$)</strong>. A cell that is too large literally starves because its 'door' (membrane) isn't big enough to feed its 'factory' (cytoplasm).</p>
                </div>

                <h2>I. The Quantitative Constraint</h2>
                <div class="proof-box glass">
                    <p>Formula for a Cube:</p>
                    <p>$$SA = 6s^2 \quad | \quad V = s^3$$</p>
                    <p>As $s$ increases from 1 to 10:</p>
                    <ul>
                        <li>$s=1 \rightarrow SA=6, V=1 \rightarrow Ratio: 6:1$</li>
                        <li>$s=10 \rightarrow SA=600, V=1000 \rightarrow Ratio: 0.6:1$</li>
                    </ul>
                </div>
                
                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: Membrane Folding</h4>
                    <p>Evolution solves the SA/V problem not just by staying small, but by <strong>folding</strong>. Root hairs, microvilli in the gut, and the cristae of mitochondria all use fractal-like folding to maximize Surface Area without increasing total Volume.</p>
                </div>
            </div>
        `
    },
    "ch1-2": {
        title: "1.2: Endomembrane Logistics",
        subtitle: "Organelle Synergy & Sequestration",
        content: `
            <div class="lesson-section">
                <h2>I. Compartmentalization Strategy</h2>
                <p>Eukaryotic cells are defined by internal membranes. This is <strong>Modular Design</strong>. By separating 'Hot' reactions (like oxidative phosphorylation) from 'Sensitive' areas (like the Nucleus), the cell increases its efficiency by 1000x over bacteria.</p>
                
                <div class="glass-card" style="border-left: 4px solid var(--accent-emerald);">
                    <h4>The Protein Export Pipeline</h4>
                    <ol class="glass-list">
                        <li><strong>Nucleus:</strong> Source code (DNA) transcribed to mRNA.</li>
                        <li><strong>Rough ER:</strong> Ribosomes translate mRNA into proteins directly into the lumen.</li>
                        <li><strong>Golgi:</strong> The 'Shipping Center'—modifies proteins (glycosylation) and tags them for delivery.</li>
                        <li><strong>Vesicle:</strong> The 'Delivery Truck'—fuses with the membrane to release the product via exocytosis.</li>
                    </ol>
                </div>
            </div>
        `
    },
    // UNIT 2: THE SEMI-PERMEABLE GATE
    "ch1-3": {
        title: "2.1: Water Potential Logic",
        subtitle: "Kinetics of Osmosis ($\Psi$)",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-tint"></i> The Flow of Energy</h3>
                    <p>Water doesn't just 'follow salt'. It follows <strong>Free Energy</strong>. Water potential ($\Psi$) measures how likely water is to move in or out of a cell. Water ALWAYS moves from High $\Psi$ to Low $\Psi$.</p>
                </div>

                <h2>I. The Water Potential Equation</h2>
                <div class="proof-box glass">
                    <p>$$\Psi = \Psi_s + \Psi_p$$</p>
                    <p>Where $\Psi_s$ is <strong>Solute Potential</strong> (always negative) and $\Psi_p$ is <strong>Pressure Potential</strong> (usually positive in plants).</p>
                    <p>Calculated as: $$\Psi_s = -iCRT$$</p>
                </div>

                <div class="example-card glass">
                    <h4>Elite Example: TJ IBET Calculation</h4>
                    <p>A plant cell with $\Psi_s = -0.6$ MPa is placed in a sucrose solution with $\Psi_s = -0.9$ MPa. Which way does water flow?</p>
                    <details>
                        <summary>View Solution Mechanics</summary>
                        <p>$\Psi_{cell} = -0.6$ vs $\Psi_{sol} = -0.9$. Since $-0.6 > -0.9$, the cell has HIGHER potential. Water flows <strong>OUT</strong> of the cell into the solution. The cell becomes <em>plasmolyzed</em>.</p>
                    </details>
                </div>
            </div>
        `
    },
    "ch1-4": {
        title: "2.2: Active Loading Systems",
        subtitle: "Electrochemical Gradients",
        content: `
            <div class="lesson-section">
                <h2>I. Beyond Diffusion</h2>
                <p>Molecules moving against entropy require the currency of life: <strong>ATP</strong>. The Sodium-Potassium Pump ($Na^+/K^+$ ATPase) consumes 30% of your total energy just to keep your cell voltage balanced.</p>
                
                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> Bio-Physics: Co-Transport</h4>
                    <p>Think of it as a revolving door. The cell 'spends' ATP to push $H^+$ out (generating a gradient), then allows the $H^+$ to fall back in while 'hitchhiking' a Glucose molecule with it. This is <strong>Secondary Active Transport</strong>.</p>
                </div>
            </div>
        `
    },
    // UNIT 3: BIOCATALYSIS & ENZYMES
    "ch1-5": {
        title: "3.1: The Activation Barrier",
        subtitle: "Lowering $\Delta E_a$",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-fire"></i> The Biological Spark</h3>
                    <p>Spontaneous reactions are often too slow for life. Enzymes act as <strong>Catalysts</strong>—tools that grab substrate molecules and force them into the 'Transition State' without being consumed themselves.</p>
                </div>

                <h2>I. Induced Fit Model</h2>
                <p>When a substrate binds to the <strong>Active Site</strong>, the enzyme changes shape slightly to squeeze and stress the chemical bonds of the substrate. This physical torque lowers the energy required to break the bond.</p>
                
                <div class="proof-box glass">
                    <p>Energetics: Enzymes do NOT change $\Delta G$ (Net energy change). They ONLY change $\Delta E_a$ (Speed to get there).</p>
                </div>
            </div>
        `
    },
    "ch1-6": {
        title: "3.2: Control Systems (Feedback)",
        subtitle: "Inhibition & Allosteric Management",
        content: `
            <div class="lesson-section">
                <h2>I. Turning Off the Factory</h2>
                <p>The cell must regulate its chemical speed. If you have enough ATP, you don't want to keep burning sugar. This is <strong>Negative Feedback</strong>.</p>
                
                <div class="glass-card">
                    <h4>Two Types of Inhibition</h4>
                    <ul>
                        <li><strong>Competitive:</strong> A molecule 'jams' the active site. (Can be overcome by adding more substrate).</li>
                        <li><strong>Non-Competitive (Allosteric):</strong> A molecule binds to a different spot, changing the enzyme's entire shape. (Cannot be overcome by more substrate).</li>
                    </ul>
                </div>
            </div>
        `
    }
};
