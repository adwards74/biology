window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// Merge Unit 3 lessons into ch1 (app.js routes ch1-5, ch1-6 to CHAPTER_DATA["ch1"])
window.CHAPTER_DATA["ch1"] = window.CHAPTER_DATA["ch1"] || {};
Object.assign(window.CHAPTER_DATA["ch1"], {

    "ch1-5": {
        javaLogic: "enzyme_kinetics",
        title: "3.1: The Activation Barrier",
        subtitle: "Enzyme Structure, Induced Fit, and Factors Affecting Activity",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-purple); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Enzyme</strong> — A biological catalyst, usually a protein, that speeds up chemical reactions by lowering the activation energy.</div>
                        <div><strong>Activation Energy ($E_a$)</strong> — The minimum energy required for a chemical reaction to proceed.</div>
                        <div><strong>Active Site</strong> — The specific region on an enzyme where the substrate binds; has a unique 3D shape.</div>
                        <div><strong>Substrate</strong> — The molecule(s) that an enzyme acts upon; fits into the active site.</div>
                        <div><strong>Induced Fit Model</strong> — The enzyme's active site changes shape slightly to better embrace the substrate upon binding.</div>
                        <div><strong>Denaturation</strong> — Loss of an enzyme's 3D shape (and function) due to extreme pH, temperature, or chemical conditions.</div>
                        <div><strong>Cofactor</strong> — A non-protein helper molecule (often a metal ion) required by some enzymes.</div>
                        <div><strong>Coenzyme</strong> — An organic cofactor, often derived from vitamins (e.g., NAD⁺ from niacin/vitamin B3).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Enzymes Make Life Possible at Body Temperature</h3>
                    <p>Without enzymes, the chemical reactions needed for life would occur so slowly that organisms could not survive. For example, the decomposition of hydrogen peroxide in your body would take <strong>years</strong> without the enzyme catalase — with catalase, it happens in <strong>milliseconds</strong>. Enzymes don't change what is thermodynamically possible; they change how <em>fast</em> it happens.</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: ATOMIC PRECISION (ENZYMES) -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #2e1065 0%, #0f172a 100%); border: 2px solid var(--accent-purple); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(139,92,246,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-purple); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-purple); padding-bottom: 8px; margin: 0;">Biocatalysis & Flux Control</h4>
                        <svg viewBox="0 0 500 150" style="max-width: 600px; width: 100%; height: auto; filter: drop-shadow(0 0 10px rgba(139,92,246,0.3));">
                            <!-- Enzyme Blueprint -->
                            <path d="M 150 120 Q 250 20 350 120" fill="none" stroke="var(--accent-purple)" stroke-width="4" stroke-dasharray="10 5">
                                <animate attributeName="stroke-dashoffset" from="0" to="100" dur="5s" repeatCount="indefinite" />
                            </path>
                            
                            <!-- Active Site Glow -->
                            <circle cx="250" cy="75" r="20" fill="rgba(139,92,246,0.2)">
                                <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                            </circle>
                            
                            <!-- Substrate "Fitting" Animation -->
                            <rect x="0" y="0" width="40" height="25" rx="5" fill="var(--accent-cyan)">
                                <animateMotion path="M 100 20 C 150 20 200 70 240 70" dur="1.5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="1;1;0" dur="1.5s" repeatCount="indefinite" />
                            </rect>
                            
                            <!-- Product "Release" -->
                            <g>
                                <path d="M 260 70 L 400 20" fill="none" stroke="var(--accent-emerald)" stroke-width="2" stroke-dasharray="5 5">
                                    <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="1.5s" repeatCount="indefinite" />
                                </path>
                                <circle r="5" fill="var(--accent-emerald)">
                                    <animateMotion path="M 260 70 L 400 20" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            </g>
                        </svg>
                    </div>
                </div>

                <h2>I. The Why: Activation Energy & Metabolic Control</h2>

                <p>Every chemical reaction has an energy barrier called the <strong>activation energy ($E_a$)</strong> — the minimum energy molecules must have to react. Think of it as the hill you must push a boulder over before it rolls downhill on the other side.</p>

                <p>Enzymes <strong>lower the activation energy</strong> by providing an alternative reaction pathway. They do NOT:</p>
                <ul style="line-height: 2;">
                    <li>❌ Change the overall energy change ($\\Delta G$) of the reaction</li>
                    <li>❌ Change the equilibrium position</li>
                    <li>❌ Get consumed — they are recycled and used again</li>
                </ul>
                <p>They DO:</p>
                <ul style="line-height: 2;">
                    <li>✅ Are highly specific — each enzyme catalyzes only one reaction (or type of reaction)</li>
                </ul>

                <!-- VISUAL DYNAMIC: ACTIVATION ENERGY (PREMIUM UPGRADE) -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; border-radius: var(--standard-radius); background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border: 1px solid var(--accent-purple); box-shadow: 0 0 20px rgba(139,92,246,0.15);">
                    <h5 style="color: var(--accent-purple); margin-bottom: 25px; text-align: center; text-transform: uppercase; letter-spacing: 2px;"><i class="fas fa-mountain"></i> Biocatalytic Energy Surface</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 400 220" style="max-width: 500px; width: 100%; height: auto; filter: drop-shadow(0 0 10px rgba(139,92,246,0.2));">
                            <!-- Definition for Glow Effects -->
                            <defs>
                                <linearGradient id="purple-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:var(--accent-purple);stop-opacity:0.3" />
                                    <stop offset="100%" style="stop-color:var(--accent-purple);stop-opacity:0" />
                                </linearGradient>
                            </defs>
                            
                            <!-- Grid / Background -->
                            <line x1="40" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                            <line x1="40" y1="20" x2="40" y2="180" stroke="rgba(255,255,255,0.1)" stroke-width="1" />

                            <!-- Under-Curve Fills for "Body" -->
                            <path d="M 40 160 L 100 160 Q 150 20 200 160 L 200 180 L 100 180 Z" fill="url(#purple-glow)" opacity="0.2" />

                            <!-- Main Paths -->
                            <!-- Uncatalyzed Path (Red) -->
                            <path d="M 40 160 L 100 160 Q 150 20 200 160 L 360 160" fill="none" stroke="var(--accent-red)" stroke-width="2" stroke-dasharray="6 4" opacity="0.6" />
                            <!-- Catalyzed Path (Purple) -->
                            <path d="M 40 160 L 100 160 Q 150 100 200 160 L 360 160" fill="none" stroke="var(--accent-purple)" stroke-width="5" stroke-linecap="round">
                                <animate attributeName="stroke-width" values="4;6;4" dur="3s" repeatCount="indefinite" />
                            </path>
                            
                            <!-- Energy Level Markers -->
                            <circle cx="100" cy="160" r="4" fill="var(--accent-cyan)" />
                            <text x="90" y="175" fill="var(--accent-cyan)" font-size="9" text-anchor="end" font-weight="bold">REACTANTS</text>
                            
                            <circle cx="200" cy="160" r="4" fill="var(--accent-emerald)" />
                            <text x="210" y="175" fill="var(--accent-emerald)" font-size="9" font-weight="bold">PRODUCTS</text>
                            
                            <!-- Measurement Bars -->
                            <line x1="125" y1="160" x2="125" y2="25" stroke="var(--accent-red)" stroke-width="1.5" marker-end="url(#arrow-red)" />
                            <text x="115" y="45" fill="var(--accent-red)" font-size="8" text-anchor="end" font-weight="bold" transform="rotate(-90 115 45)">HIGH EA</text>
                            
                            <line x1="145" y1="160" x2="145" y2="105" stroke="var(--accent-purple)" stroke-width="2" marker-end="url(#arrow-purple)" />
                            <text x="155" y="115" fill="var(--accent-purple)" font-size="8" font-weight="bold" transform="rotate(-90 155 115)">SCALED EA</text>
                            
                            <!-- Axis Labels -->
                            <text x="380" y="195" fill="#888" font-size="8" text-anchor="end">Reaction Progress →</text>
                            <text x="35" y="25" fill="#888" font-size="8" transform="rotate(-90 35 25)" text-anchor="end">Free Energy (G) ↑</text>
                            
                            <defs>
                                <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="var(--accent-red)" /></marker>
                                <marker id="arrow-purple" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="var(--accent-purple)" /></marker>
                            </defs>
                        </svg>
                        <p style="font-size: 0.85rem; color: #888; text-align: center; font-style: italic; max-width: 400px; line-height: 1.5;">
                            <strong style="color:var(--accent-purple);">Thermodynamic Leverage:</strong> Enzymes provide a lower-energy "tunnel" through the activation barrier without changing $\Delta G$.
                        </p>
                    </div>
                </div>

                <h2>II. The How: Induced Fit & Active Site Tension</h2>

                <p>The old "Lock and Key" model suggested that the enzyme's active site was a rigid shape that perfectly matched the substrate, like a key fitting into a lock. While useful as an introduction, this model is <strong>incomplete</strong>.</p>

                <p>The modern <strong>Induced Fit Model</strong> (proposed by Daniel Koshland, 1958) recognizes that:</p>
                <ol style="line-height: 2.2;">
                    <li>Products are released, and the enzyme returns to its original shape, ready for the next substrate.</li>
                </ol>

                <!-- VISUAL DYNAMIC: INDUCED FIT ANIMATION (PREMIUM UPGRADE) -->
                <div class="visual-dynamic glass" style="padding: 35px; margin: 30px 0; border-radius: var(--standard-radius); background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); border: 2px solid var(--accent-purple); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    <h5 style="color: var(--accent-purple); margin-bottom: 25px; text-align: center; text-transform: uppercase; letter-spacing: 2px;"><i class="fas fa-handshake"></i> Molecular Snap: The Induced Fit Mechanical Logic</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 500 200" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- Stage 1: Approach -->
                            <g>
                                <path d="M 40 100 Q 70 40 100 100" fill="none" stroke="var(--accent-purple)" stroke-width="4" opacity="0.3" stroke-dasharray="4 2" />
                                <rect x="60" y="30" width="20" height="20" rx="4" fill="var(--accent-cyan)" opacity="0.6">
                                    <animateMotion path="M 0 0 L 0 50" dur="2s" repeatCount="indefinite" />
                                </rect>
                                <text x="70" y="140" fill="#888" font-size="8" text-anchor="middle">1. SPECIFICITY</text>
                            </g>

                            <!-- Stage 2: THE SNAP (Central) -->
                            <g transform="translate(180, 0)">
                                <!-- Dynamic Enzyme Shell -->
                                <path d="M 20 100 Q 70 80 120 100" fill="none" stroke="var(--accent-purple)" stroke-width="8">
                                    <animate attributeName="d" values="M 20 100 Q 70 80 120 100; M 20 100 Q 70 120 120 100; M 20 100 Q 70 80 120 100" dur="2s" repeatCount="indefinite" />
                                    <animate attributeName="stroke" values="var(--accent-purple);var(--accent-amber);var(--accent-purple)" dur="2s" repeatCount="indefinite" />
                                </path>
                                <!-- Stressed Substrate -->
                                <rect x="50" y="85" width="40" height="15" rx="3" fill="var(--accent-amber)">
                                    <animate attributeName="width" values="40;35;40" dur="2s" repeatCount="indefinite" />
                                    <animate attributeName="fill" values="var(--accent-cyan);var(--accent-amber);var(--accent-cyan)" dur="2s" repeatCount="indefinite" />
                                </rect>
                                <!-- Glow pulse -->
                                <circle cx="70" cy="92" r="25" fill="var(--accent-amber)" opacity="0.1">
                                    <animate attributeName="r" values="20;40;20" dur="2s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
                                </circle>
                                <text x="70" y="140" fill="var(--accent-amber)" font-size="10" text-anchor="middle" font-weight="bold">2. TENSION (INDUCED FIT)</text>
                                <text x="70" y="155" fill="#aaa" font-size="7" text-anchor="middle">Bonds are physically warped</text>
                            </g>

                            <!-- Stage 3: Catalysis Complete -->
                            <g transform="translate(360, 0)">
                                <path d="M 20 100 Q 50 40 80 100" fill="none" stroke="var(--accent-purple)" stroke-width="4" opacity="0.3" />
                                <circle cx="40" cy="50" r="7" fill="var(--accent-emerald)" />
                                <circle cx="60" cy="50" r="7" fill="var(--accent-emerald)" />
                                <text x="50" y="140" fill="#888" font-size="8" text-anchor="middle">3. PRODUCT RELEASE</text>
                            </g>
                        </svg>
                        <p style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic; max-width: 450px;">
                            The active site is not a rigid lock, but a <strong>malleable machine</strong> that "grips" the substrate, inducing a transition state with lower potential energy.
                        </p>
                    </div>
                </div>

                <div class="proof-box glass">
                    <h4>Enzyme Kinetics: The Michaelis-Menten Relationship</h4>
                    <p>$$v = \\frac{V_{max}[S]}{K_m + [S]}$$</p>
                    <ul style="line-height: 2;">
                        <li>$v$ = reaction velocity (rate)</li>
                        <li>$V_{max}$ = maximum velocity when all active sites are saturated</li>
                        <li>$[S]$ = substrate concentration</li>
                        <li>$K_m$ = Michaelis constant = substrate concentration at which $v = \\frac{1}{2}V_{max}$</li>
                    </ul>
                    <p style="margin-top:10px; color: var(--accent-cyan); font-style:italic;">A low $K_m$ means the enzyme has a high affinity for its substrate — it reaches half-max speed at a lower substrate concentration.</p>
                </div>

                <h2>III. Factors Affecting Enzyme Activity</h2>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(139,92,246,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Factor</th>
                            <th style="padding:12px; text-align:left;">Effect</th>
                            <th style="padding:12px; text-align:left;">Explanation</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Temperature ↑</strong></td><td style="padding:10px;">Rate ↑ then ↓↓</td><td style="padding:10px;">More kinetic energy → more collisions. But above optimal temp (~37°C for human enzymes), the enzyme <strong>denatures</strong> — hydrogen bonds break, active site loses shape.</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>pH</strong></td><td style="padding:10px;">Optimal range varies</td><td style="padding:10px;">Extreme pH changes ionization of amino acid R-groups → alters active site shape. Pepsin optimal pH ~2 (stomach acid); trypsin optimal pH ~8 (small intestine).</td></tr>
                        <tr><td style="padding:10px;"><strong>Substrate Conc. ↑</strong></td><td style="padding:10px;">Rate ↑ then plateaus</td><td style="padding:10px;">More substrate = more collisions. But at saturation ($V_{max}$), all active sites are occupied → adding more substrate doesn't help.</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Enzyme Conc. ↑</strong></td><td style="padding:10px;">Rate ↑ (linear)</td><td style="padding:10px;">More enzyme molecules = more active sites available = faster reaction (assuming excess substrate).</td></tr>
                    </table>
                </div>

                <!-- SECTION IV: ALLOSTERIC COOPERATIVITY -->
                <h2>IV. Allosteric Cooperativity: The Teamwork Effect</h2>

                <p>Some enzymes are multi-subunit proteins (made of several polypeptide chains). In these enzymes, the binding of a substrate molecule to one active site can trigger a shape change in <em>all</em> other subunits, making them more receptive to the substrate. This is called <strong>Cooperativity</strong>.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin: 20px 0;">
                    <h4>The Sigmoidal "S-Curve"</h4>
                    <p>Enzymes with cooperativity do not follow the standard Michaelis-Menten hyperbola. Instead, they produce a <strong>Sigmoidal (S-shaped) curve</strong>. This allows the enzyme to be highly sensitivity to small changes in substrate concentration near a specific threshold – it acts like a sensitive switch rather than a gradual dimmer.</p>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: Hemoglobin as a Model</h4>
                    <p>While Hemoglobin is a transport protein, not an enzyme, it is the classic example of cooperativity. Once the first Oxygen molecule binds, the other three subunits "snap" into the high-affinity state, allowing for rapid loading in the lungs and rapid unloading in the tissues. In IBET, understanding this "snap" is key to understanding complex regulatory systems.</p>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-purple);">
                    <h5 style="color: var(--accent-purple); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Interpreting an Enzyme Graph</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">An enzyme has $V_{max} = 200$ μmol/min and $K_m = 5$ mM. At $[S] = 5$ mM, what is the reaction velocity?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-purple); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                            <div style="margin-bottom:8px;">$v = \\frac{V_{max}[S]}{K_m + [S]} = \\frac{200 \\times 5}{5 + 5} = \\frac{1000}{10} = 100$ μmol/min</div>
                            <div style="margin-top:12px; color:var(--accent-cyan); font-style:italic;">This makes sense: when $[S] = K_m$, velocity equals exactly $\\frac{1}{2}V_{max}$. This is actually the <em>definition</em> of $K_m$.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Enzymes lower $E_a$ without being consumed; they are biological catalysts.</li>
                        <li>The Induced Fit Model: the active site molds around the substrate, stressing its bonds.</li>
                        <li>Temperature, pH, and substrate concentration all affect enzyme activity — each enzyme has an optimum.</li>
                        <li>$K_m$ is the substrate concentration at half-max velocity — a measure of enzyme-substrate affinity.</li>
                        <li>Denaturation = permanent loss of 3D shape. The enzyme is still chemically present but non-functional.</li>
                    </ul>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-purple); padding: 30px;">
                    <h5 style="color: var(--accent-purple); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Enzyme Kinetics & $K_m$</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(139,92,246,0.3);">
                        <iframe src="https://www.youtube-nocookie.com/embed/R2j9aP-2hO0?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
    <div class="link-card-content">
        <h4>Watch Verification Video</h4>
        <p>High-Fidelity Playback</p>
    </div>
    <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
</div>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Enzymes (Amoeba Sisters / Academic Curation)</p>
                </div>
            </div>
        `
    },

    "ch1-6": {
        javaLogic: "enzyme_kinetics",
        title: "3.2: Control Systems — Inhibition & Feedback",
        subtitle: "Competitive, Non-competitive, Allosteric Regulation, and Feedback Loops",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-purple); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Competitive Inhibitor</strong> — A molecule that resembles the substrate and competes for the active site. Can be overcome by increasing substrate concentration.</div>
                        <div><strong>Non-competitive Inhibitor</strong> — A molecule that binds to an allosteric site (not the active site), changing the enzyme's shape and reducing activity. Cannot be overcome by adding more substrate.</div>
                        <div><strong>Allosteric Site</strong> — A regulatory binding site on an enzyme, separate from the active site. Binding changes the enzyme's conformation.</div>
                        <div><strong>Allosteric Activation</strong> — Binding of an activator to an allosteric site that increases enzyme activity.</div>
                        <div><strong>Feedback Inhibition</strong> — The end product of a metabolic pathway inhibits an earlier enzyme in the same pathway.</div>
                        <div><strong>Irreversible Inhibitor</strong> — A molecule that permanently destroys enzyme function (e.g., nerve gas, penicillin).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Cells Need Brakes, Not Just an Engine</h3>
                    <p>A cell producing unlimited amounts of every possible product would be catastrophically wasteful. Enzyme inhibition is the cell's <strong>precision brake system</strong> — it allows cells to regulate which pathways are active, how fast they run, and when to shut them down. Understanding inhibition is also key to understanding how <strong>drugs</strong> work — most pharmaceuticals are enzyme inhibitors.</p>
                </div>

                <h2>I. The Competitive Threshold: $V_{max}$ vs. $K_m$</h2>

                <p>These are the two fundamental types of reversible inhibition:</p>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(139,92,246,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Feature</th>
                            <th style="padding:12px; text-align:center;">Competitive</th>
                            <th style="padding:12px; text-align:center;">Non-Competitive</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Where does the inhibitor bind?</strong></td><td style="padding:10px; text-align:center;">Active site (blocks substrate)</td><td style="padding:10px; text-align:center;">Allosteric site (distorts active site)</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Resembles substrate?</strong></td><td style="padding:10px; text-align:center;">Yes (structural mimic)</td><td style="padding:10px; text-align:center;">No</td></tr>
                        <tr><td style="padding:10px;"><strong>Can be overcome by ↑ [S]?</strong></td><td style="padding:10px; text-align:center; color:var(--accent-green);">Yes — more substrate outcompetes</td><td style="padding:10px; text-align:center; color:var(--accent-orange);">No — $V_{max}$ is permanently reduced</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Effect on $V_{max}$</strong></td><td style="padding:10px; text-align:center;">Same (can still reach it)</td><td style="padding:10px; text-align:center;">Decreased</td></tr>
                        <tr><td style="padding:10px;"><strong>Effect on $K_m$</strong></td><td style="padding:10px; text-align:center;">Increased (need more [S] for half-max)</td><td style="padding:10px; text-align:center;">Same</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Example drug</strong></td><td style="padding:10px; text-align:center;">Methotrexate (blocks folate → cancer treatment)</td><td style="padding:10px; text-align:center;">Cyanide (blocks cytochrome c oxidase)</td></tr>
                    </table>
                </div>

                <h2>II. Allosteric Regulation: The Logic Gates of Life</h2>

                <p>Many enzymes exist in two states:</p>
                <ul style="line-height: 2;">
                    <li><strong>Active state (R-state, "relaxed")</strong>: Active site is the correct shape → substrate can bind → reaction occurs.</li>
                    <li><strong>Inactive state (T-state, "tense")</strong>: Active site is distorted → substrate cannot bind → no reaction.</li>
                </ul>

                <p><strong>Allosteric regulators</strong> shift the enzyme between these states:</p>
                <ul style="line-height: 2;">
                    <li><strong>Allosteric activator:</strong> Binds allosteric site → stabilizes R-state → enzyme is MORE active.</li>
                    <li><strong>Allosteric inhibitor:</strong> Binds allosteric site → stabilizes T-state → enzyme is LESS active.</li>
                </ul>

                <p>This is fundamentally different from competitive inhibition: the allosteric regulator doesn't compete with the substrate — it changes the enzyme's <em>shape</em> remotely.</p>

                <h2>III. Feedback Logic: The Thermostat of Metabolism</h2>

                <p>In a metabolic pathway with multiple steps:</p>
                <div style="font-family:'JetBrains Mono',monospace; background:rgba(0,0,0,0.3); padding:15px; border-radius:8px; margin:15px 0; text-align:center; font-size:0.95rem;">
                    A → <span style="color:var(--accent-emerald);">[E₁]</span> → B → <span style="color:var(--accent-emerald);">[E₂]</span> → C → <span style="color:var(--accent-emerald);">[E₃]</span> → D (final product)
                </div>
                <p>When enough product <strong>D</strong> accumulates, D binds to <strong>E₁</strong> (the first enzyme) as an allosteric inhibitor. This shuts down the entire pathway at its source, preventing wasteful overproduction.</p>

                <p><strong>Classic Example — Isoleucine synthesis:</strong> When the amino acid isoleucine (the end product) builds up, it inhibits threonine deaminase (the first enzyme in its synthesis pathway). When isoleucine is used up, the inhibition is released and the pathway restarts. This is exactly how a thermostat works — the output (temperature) regulates the input (heater).</p>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: Drug Design and Enzyme Inhibition</h4>
                    <p>Nearly all pharmaceutical drugs work by inhibiting specific enzymes. <strong>Statins</strong> (for cholesterol) competitively inhibit HMG-CoA reductase. <strong>ACE inhibitors</strong> (for blood pressure) block angiotensin-converting enzyme. <strong>Penicillin</strong> irreversibly inhibits transpeptidase, the enzyme bacteria need to build their cell walls. Understanding inhibition types is essential to understanding how medicines work.</p>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-purple);">
                    <h5 style="color: var(--accent-purple); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Identifying Inhibition Type from Data</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">An enzyme has $V_{max} = 100$ and $K_m = 4$ mM normally. With Inhibitor X: $V_{max}$ remains 100 but $K_m$ increases to 8 mM. With Inhibitor Y: $V_{max}$ drops to 50 but $K_m$ stays 4 mM. Classify each inhibitor.</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-purple); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Inhibitor X:</strong> $V_{max}$ unchanged, $K_m$ increased → <strong>Competitive</strong>. The inhibitor blocks the active site, so the enzyme needs more substrate to reach half-max velocity. But given enough substrate, you can still reach full speed.</div>
                            <div style="margin-top:8px;"><strong>Inhibitor Y:</strong> $V_{max}$ decreased, $K_m$ unchanged → <strong>Non-competitive</strong>. The inhibitor reduces the number of functional enzyme molecules (by distorting some of them), so the maximum rate drops. But the remaining active enzymes still have normal substrate affinity.</div>
                        </div>
                    </details>
                </div>

                <!-- WORKED EXAMPLE 2 -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-purple);">
                    <h5 style="color: var(--accent-purple); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example 2: Double-Reciprocal (Lineweaver-Burk) Logic</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">In a Lineweaver-Burk plot (1/v vs 1/[S]), two lines are plotted. Line A (no inhibitor) and Line B (+ inhibitor). If the two lines intersect on the <strong>Y-axis</strong>, what type of inhibition is occurring?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-purple); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                            <div style="margin-bottom:8px;"><strong>Logic:</strong> The Y-intercept of a Lineweaver-Burk plot is $1/V_{max}$.</div>
                            <div style="margin-bottom:8px;"><strong>Analysis:</strong> If the lines intersect on the Y-axis, it means $1/V_{max}$ is the <strong>same</strong> for both. Therefore, $V_{max}$ is unchanged.</div>
                            <div style="margin-bottom:8px;"><strong>Conclusion:</strong> $V_{max}$ unchanged + different X-intercept ($1/K_m$) = <strong>Competitive Inhibition</strong>.</div>
                            <div style="margin-top:12px; color:var(--accent-cyan); font-style:italic;"><strong>Elite Insight:</strong> This is a classic IBET/AP Bio "trick" question. Always look at the intercepts: Y-axis = $V_{max}$ info; X-axis = $K_m$ info.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Competitive inhibitors block the active site; can be overcome by increasing [S] → $V_{max}$ same, $K_m$ increased.</li>
                        <li>Non-competitive inhibitors bind allosteric site; cannot be overcome → $V_{max}$ decreased, $K_m$ same.</li>
                        <li>Allosteric regulation: activators stabilize active (R) state; inhibitors stabilize inactive (T) state.</li>
                        <li>Feedback inhibition: the end product of a pathway inhibits an early enzyme — a self-regulating system.</li>
                        <li>Most drugs are enzyme inhibitors — understanding inhibition = understanding pharmacology.</li>
                    </ul>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-purple); padding: 30px;">
                    <h5 style="color: var(--accent-purple); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Inhibition & Feedback Loops</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(139,92,246,0.3);">
                        <iframe src="https://www.youtube-nocookie.com/embed/Iz0Q9nTZCw4?rel=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
    <div class="link-card-content">
        <h4>Watch Verification Video</h4>
        <p>High-Fidelity Playback</p>
    </div>
    <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
</div>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Feedback Inhibition & Allosteric Control (Bozeman Science)</p>
                </div>
            </div>
        `
    }
});
