window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch1"] = {

    // ═══════════════════════════════════════════════════════
    // UNIT 1: ARCHITECTURE & SCALABILITY
    // ═══════════════════════════════════════════════════════

    "ch1-1": {
        title: "1.1: The Geometry of Life",
        subtitle: "Cell Size, Surface Area-to-Volume Ratio, and Organelle Architecture",
        content: `
            <div class="lesson-section">

                <!-- KEY TERMS BOX -->
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Surface Area (SA)</strong> — The total outer boundary of a cell; determines how much material can cross the membrane.</div>
                        <div><strong>Volume (V)</strong> — The internal space of a cell; determines how much material the cell needs.</div>
                        <div><strong>SA/V Ratio</strong> — The mathematical relationship between a cell's surface area and its volume; decreases as cell size increases.</div>
                        <div><strong>Prokaryote</strong> — Simple cell without a nucleus or membrane-bound organelles (e.g., bacteria).</div>
                        <div><strong>Eukaryote</strong> — Complex cell with a nucleus and membrane-bound organelles (e.g., animal, plant, fungal cells).</div>
                        <div><strong>Organelle</strong> — A specialized structure within a cell that performs a specific function (e.g., mitochondria, nucleus).</div>
                        <div><strong>Microvilli</strong> — Tiny finger-like projections on cell surfaces that increase surface area for absorption.</div>
                        <div><strong>Cristae</strong> — Infoldings of the inner mitochondrial membrane that increase surface area for ATP production.</div>
                    </div>
                </div>

                <!-- BIG IDEA -->
                <div class="intuition-box glass">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Why Are Cells Small?</h3>
                    <p>Every living cell faces a fundamental physical constraint: as it grows larger, its internal <strong>needs</strong> (determined by volume) grow much faster than its ability to <strong>supply</strong> those needs (determined by surface area). This is the single most important geometric principle in all of cell biology. It explains why cells are microscopic, why an <strong>Organelle</strong> exists, and why evolution invented membrane folding. Most efficient cells maintain a high <strong>SA:V Ratio</strong>.</p>
                </div>

                <neo-img src="assets/cell-architecture.png" caption="Comprehensive Eukaryotic Cell Architecture mapping the Endomembrane System." source="Elite Biology Research Lab"></neo-img>

                <!-- SECTION I -->
                <h2>I. The SA/V Ratio: The Law of Cell Size</h2>

                <p>Imagine a cell as a tiny factory. The <strong>surface area</strong> of the cell membrane is like the number of doors and windows — it controls how much raw material can enter and how much waste can leave. The <strong>volume</strong> of the cell is like the factory floor — it determines how many workers need to be fed and how much waste they produce.</p>

                <p>As a cell grows, both surface area and volume increase — but <strong>not at the same rate</strong>. Volume increases as the <em>cube</em> of the radius ($r^3$), while surface area increases as the <em>square</em> ($r^2$). This means that every time a cell doubles in size, its volume increases 8-fold but its surface area only increases 4-fold.</p>

                <div class="proof-box glass">
                    <h4>The Mathematics of Cell Size</h4>
                    <p><strong>For a sphere:</strong></p>
                    <p>$$SA = 4\\pi r^2 \\qquad V = \\frac{4}{3}\\pi r^3 \\qquad \\text{SA/V Ratio} = \\frac{3}{r}$$</p>
                    <p><strong>For a cube (side length $s$):</strong></p>
                    <p>$$SA = 6s^2 \\qquad V = s^3 \\qquad \\text{SA/V Ratio} = \\frac{6}{s}$$</p>
                    <p>Notice: in both cases, the ratio is <strong>inversely proportional</strong> to size. As $r$ or $s$ increases, the SA/V ratio <em>decreases</em>.</p>
                </div>

                <p><strong>What does this mean biologically?</strong> A large cell has proportionally less membrane surface through which to import nutrients and export waste relative to the volume of cytoplasm that needs to be serviced. At some point, the cell physically cannot bring in enough oxygen or glucose to sustain its metabolism. This is why most cells are between <strong>1–100 μm</strong> in diameter.</p>

                <!-- VISUAL DYNAMIC: SA/V RATIO GRAPH -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-emerald); margin-bottom: 20px; text-align: center;"><i class="fas fa-chart-line"></i> Visual Dynamic: Geometric Stress & Scalability</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 400 250" style="max-width: 500px; width: 100%; height: auto; filter: drop-shadow(0 0 10px rgba(16,185,129,0.2));">
                            <!-- Grid Lines -->
                            <line x1="40" y1="200" x2="360" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                            <line x1="40" y1="40" x2="40" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
                            
                            <!-- Area Curve (r^2) - Cyan -->
                            <path d="M 40 200 Q 150 180 340 100" fill="none" stroke="var(--accent-cyan)" stroke-width="3" stroke-dasharray="4" />
                            <!-- Volume Curve (r^3) - Amber -->
                            <path d="M 40 200 Q 180 195 350 40" fill="none" stroke="var(--accent-amber)" stroke-width="3" />
                            <!-- Ratio Curve (1/r) - Emerald -->
                            <path d="M 50 50 Q 100 180 350 190" fill="none" stroke="var(--accent-emerald)" stroke-width="4" />
                            
                            <!-- Labels -->
                            <text x="350" y="35" fill="var(--accent-amber)" font-size="12" font-weight="bold">Volume (r³)</text>
                            <text x="340" y="95" fill="var(--accent-cyan)" font-size="12" font-weight="bold">Area (r²)</text>
                            <text x="340" y="185" fill="var(--accent-emerald)" font-size="12" font-weight="bold">SA/V Ratio</text>
                            
                            <!-- Axes -->
                            <line x1="40" y1="200" x2="370" y2="200" stroke="white" stroke-width="2" marker-end="url(#arrow)" />
                            <line x1="40" y1="200" x2="40" y2="30" stroke="white" stroke-width="2" marker-end="url(#arrow)" />
                            <text x="375" y="215" fill="white" font-size="10" text-anchor="end">Radius (r)</text>
                            <text x="35" y="25" fill="white" font-size="10" transform="rotate(-90, 35, 25)" text-anchor="end">Magnitude</text>
                            
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                                  <path d="M0,0 L0,6 L9,3 z" fill="white" />
                                </marker>
                            </defs>
                        </svg>
                        <div style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">
                            The "Death Cross": As radius increases, Volume explodes while the SA/V ratio collapses, creating <strong>geometric stress</strong> that limits cell size.
                        </div>
                    </div>
                </div>

                <!-- COMPARISON TABLE -->
                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                        <tr style="background: rgba(16,185,129,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Cell Size (side $s$)</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">SA ($6s^2$)</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">Volume ($s^3$)</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">SA/V Ratio</th>
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Biological Implication</th>
                        </tr>
                        <tr><td style="padding:10px;">$s = 1$</td><td style="padding:10px; text-align:center;">6</td><td style="padding:10px; text-align:center;">1</td><td style="padding:10px; text-align:center; color:var(--accent-green);"><strong>6.0</strong></td><td style="padding:10px; color:#aaa;">Extremely efficient — typical bacterium</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;">$s = 2$</td><td style="padding:10px; text-align:center;">24</td><td style="padding:10px; text-align:center;">8</td><td style="padding:10px; text-align:center;">3.0</td><td style="padding:10px; color:#aaa;">Good efficiency — small eukaryotic cell</td></tr>
                        <tr><td style="padding:10px;">$s = 5$</td><td style="padding:10px; text-align:center;">150</td><td style="padding:10px; text-align:center;">125</td><td style="padding:10px; text-align:center;">1.2</td><td style="padding:10px; color:#aaa;">Declining — cell struggles to get enough resources</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;">$s = 10$</td><td style="padding:10px; text-align:center;">600</td><td style="padding:10px; text-align:center;">1000</td><td style="padding:10px; text-align:center; color:var(--accent-orange);"><strong>0.6</strong></td><td style="padding:10px; color:#aaa;">Critical — cell cannot sustain itself</td></tr>
                    </table>
                </div>

                <!-- SECTION II -->
                <h2>II. Evolution's Solution: Compartmentalization & Folding</h2>

                <p>If being big is so inefficient, how do organisms like humans exist? The answer is two evolutionary breakthroughs:</p>

                <p><strong>1. Multicellularity:</strong> Instead of making one giant cell, organisms are made of <em>trillions of small cells</em>, each maintaining an optimal SA/V ratio. A human body contains approximately $37.2$ trillion cells.</p>

                <p><strong>2. Membrane Folding:</strong> Cells that need high metabolic rates dramatically increase their internal surface area through <strong>folding</strong>. This is one of the most elegant solutions in biology:</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin: 20px 0;">
                    <h4>Examples of Membrane Folding in Biology</h4>
                    <ul style="line-height: 2;">
                        <li><strong>Mitochondrial cristae:</strong> The inner membrane folds inward to create a massive surface for the electron transport chain. More cristae = more ATP production. Muscle cells have mitochondria with extremely dense cristae.</li>
                        <li><strong>Intestinal microvilli:</strong> The cells lining your small intestine have thousands of tiny finger-like projections. This increases the absorptive surface area of the intestine to approximately <strong>32 m²</strong> — roughly the area of a studio apartment.</li>
                        <li><strong>Root hairs:</strong> Plant root cells extend thin projections into the soil to maximize water and mineral absorption, increasing surface area by 100x or more.</li>
                        <li><strong>Thylakoid grana:</strong> In chloroplasts, stacked disc-like membranes provide enormous surface area for capturing light energy during photosynthesis.</li>
                    </ul>
                </div>

                <!-- SECTION III: ORGANELLE FUNCTIONS -->
                <h2>III. The Organelle Team: Eukaryotic Cell Architecture</h2>

                <p>Eukaryotic cells solve the complexity problem through <strong>compartmentalization</strong> — dividing the cell into specialized compartments (organelles), each with its own microenvironment optimized for specific chemical reactions.</p>

                <!-- VISUAL DYNAMIC: ANIMAL VS PLANT -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-emerald); margin-bottom: 20px; text-align: center;"><i class="fas fa-shapes"></i> Visual Dynamic: Cellular Architecture Comparison</h5>
                    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                        <svg viewBox="0 0 500 250" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- ANIMAL CELL (Left) -->
                            <circle cx="125" cy="125" r="90" fill="rgba(6,182,212,0.1)" stroke="var(--accent-cyan)" stroke-width="2" stroke-dasharray="5,3" />
                            <circle cx="125" cy="125" r="30" fill="rgba(255,255,255,0.05)" stroke="white" stroke-width="1" />
                            <text x="125" y="125" fill="white" font-size="10" text-anchor="middle">Nucleus</text>
                            <text x="125" y="30" fill="var(--accent-cyan)" font-size="14" font-weight="bold" text-anchor="middle">ANIMAL</text>
                            
                            <!-- Animal Highlights -->
                            <circle cx="160" cy="160" r="12" fill="none" stroke="var(--accent-amber)" stroke-width="1.5" />
                            <text x="175" y="165" fill="#aaa" font-size="9">Centrioles</text>
                            <circle cx="80" cy="150" r="10" fill="none" stroke="var(--accent-red)" stroke-width="1.5" />
                            <text x="50" y="155" fill="#aaa" font-size="9" text-anchor="end">Lysosomes</text>
                            
                            <!-- PLANT CELL (Right) -->
                            <rect x="285" y="35" width="180" height="180" rx="20" fill="rgba(16,185,129,0.1)" stroke="var(--accent-emerald)" stroke-width="4" />
                            <circle cx="375" cy="165" r="25" fill="rgba(255,255,255,0.05)" stroke="white" stroke-width="1" />
                            <text x="375" y="165" fill="white" font-size="10" text-anchor="middle">Nucleus</text>
                            <text x="375" y="30" fill="var(--accent-emerald)" font-size="14" font-weight="bold" text-anchor="middle">PLANT</text>
                            
                            <!-- Plant Highlights -->
                            <rect x="340" y="70" width="70" height="60" rx="10" fill="none" stroke="var(--accent-cyan)" stroke-width="2" opacity="0.6" />
                            <text x="375" y="105" fill="#fff" font-size="8" text-anchor="middle">Vacuole</text>
                            
                            <ellipse cx="310" cy="80" rx="15" ry="8" fill="none" stroke="var(--accent-emerald)" stroke-width="1.5" />
                            <text x="310" y="65" fill="#aaa" font-size="9" text-anchor="middle">Chloroplast</text>
                            
                            <!-- SHARED Connector -->
                            <path d="M 215 125 L 285 125" stroke="rgba(255,255,255,0.2)" stroke-width="1" stroke-dasharray="4" />
                            <circle cx="250" cy="125" r="15" fill="#111" stroke="white" stroke-width="1" />
                            <text x="250" y="128" fill="white" font-size="8" text-anchor="middle">SHARED</text>
                            <text x="250" y="150" fill="#aaa" font-size="8" text-anchor="middle">ER, Golgi,</text>
                            <text x="250" y="160" fill="#aaa" font-size="8" text-anchor="middle">Mitochondria</text>
                        </svg>
                    </div>
                </div>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(16,185,129,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Organelle</th>
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Function</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">Membrane</th>
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Analogy</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Nucleus</strong></td><td style="padding:10px;">Stores and protects DNA; controls gene expression</td><td style="padding:10px; text-align:center;">Double</td><td style="padding:10px; color:#aaa;">The CEO's office with locked file cabinets</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Ribosome</strong></td><td style="padding:10px;">Translates mRNA into proteins (protein synthesis)</td><td style="padding:10px; text-align:center;">None</td><td style="padding:10px; color:#aaa;">The assembly line worker</td></tr>
                        <tr><td style="padding:10px;"><strong>Rough ER</strong></td><td style="padding:10px;">Synthesizes and folds proteins for export</td><td style="padding:10px; text-align:center;">Single</td><td style="padding:10px; color:#aaa;">The factory production line</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Smooth ER</strong></td><td style="padding:10px;">Synthesizes lipids; detoxifies chemicals</td><td style="padding:10px; text-align:center;">Single</td><td style="padding:10px; color:#aaa;">The chemical processing plant</td></tr>
                        <tr><td style="padding:10px;"><strong>Golgi Apparatus</strong></td><td style="padding:10px;">Modifies, packages, and ships proteins</td><td style="padding:10px; text-align:center;">Single</td><td style="padding:10px; color:#aaa;">The post office / shipping center</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Mitochondria</strong></td><td style="padding:10px;">Produces ATP via cellular respiration</td><td style="padding:10px; text-align:center;">Double</td><td style="padding:10px; color:#aaa;">The power plant</td></tr>
                        <tr><td style="padding:10px;"><strong>Chloroplast</strong></td><td style="padding:10px;">Converts light energy to glucose (plants only)</td><td style="padding:10px; text-align:center;">Double</td><td style="padding:10px; color:#aaa;">The solar panel array</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Lysosome</strong></td><td style="padding:10px;">Digests waste and foreign material (pH ~5)</td><td style="padding:10px; text-align:center;">Single</td><td style="padding:10px; color:#aaa;">The recycling/demolition crew</td></tr>
                        <tr><td style="padding:10px;"><strong>Vacuole</strong></td><td style="padding:10px;">Storage, turgor pressure (large in plants)</td><td style="padding:10px; text-align:center;">Single</td><td style="padding:10px; color:#aaa;">The warehouse / water tank</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Cell Wall</strong></td><td style="padding:10px;">Structural support, prevents lysis (plants, fungi, bacteria)</td><td style="padding:10px; text-align:center;">N/A</td><td style="padding:10px; color:#aaa;">The reinforced outer wall</td></tr>
                    </table>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: Prokaryote vs. Eukaryote</h4>
                    <p>On the IBET exam, you may be asked to compare these two cell types. The key distinction is <strong>compartmentalization</strong>. Prokaryotes perform all chemical reactions in the cytoplasm. Eukaryotes separate incompatible reactions into organelles (e.g., the acidic pH of lysosomes would destroy proteins if not enclosed in a membrane). This compartmentalization is what allows eukaryotes to achieve far greater metabolic complexity.</p>
                </div>

                <!-- WORKED EXAMPLE 1 -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-emerald);">
                    <h5 style="color: var(--accent-emerald); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example 1: Calculating SA/V for a Growing Cell</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A spherical cell has a radius of $2 \\mu m$. If it doubles in radius to $4 \\mu m$, by what factor does the SA/V ratio change?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-emerald); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                            <div style="margin-bottom:8px;"><strong>Step 1:</strong> Calculate SA/V at $r = 2$:</div>
                            <div style="margin-bottom:8px; padding-left:15px;">$\\text{SA/V} = \\frac{3}{r} = \\frac{3}{2} = 1.5$</div>
                            <div style="margin-bottom:8px;"><strong>Step 2:</strong> Calculate SA/V at $r = 4$:</div>
                            <div style="margin-bottom:8px; padding-left:15px;">$\\text{SA/V} = \\frac{3}{r} = \\frac{3}{4} = 0.75$</div>
                            <div style="margin-bottom:8px;"><strong>Step 3:</strong> Compare the ratio:</div>
                            <div style="margin-bottom:8px; padding-left:15px;">$\\frac{0.75}{1.5} = 0.5$</div>
                            <div style="margin-top:12px; color:var(--accent-cyan); font-style:italic;"><strong>Answer:</strong> The SA/V ratio was <strong>cut in half</strong>. Even though the cell only doubled in radius, the efficiency of membrane transport dropped by 50%.</div>
                        </div>
                    </details>
                </div>

                <!-- WORKED EXAMPLE 2 -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-emerald);">
                    <h5 style="color: var(--accent-emerald); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example 2: Which Cell Shape Is Most Efficient?</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">Three cells have the same volume of $8 \\mu m^3$. Cell A is a cube ($s = 2$). Cell B is a flat rectangular prism ($1 \\times 2 \\times 4$). Cell C is a sphere ($r \\approx 1.24$). Which has the highest SA/V ratio?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-emerald); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                            <div style="margin-bottom:8px;"><strong>Cell A (Cube):</strong> $SA = 6(2)^2 = 24$. SA/V $= 24/8 = 3.0$</div>
                            <div style="margin-bottom:8px;"><strong>Cell B (Flat prism):</strong> $SA = 2(1 \\times 2 + 2 \\times 4 + 1 \\times 4) = 2(2 + 8 + 4) = 28$. SA/V $= 28/8 = 3.5$</div>
                            <div style="margin-bottom:8px;"><strong>Cell C (Sphere):</strong> $SA = 4\\pi(1.24)^2 \\approx 19.3$. SA/V $= 19.3/8 \\approx 2.4$</div>
                            <div style="margin-top:12px; color:var(--accent-cyan); font-style:italic;"><strong>Answer:</strong> <strong>Cell B (the flat shape)</strong> has the highest SA/V ratio. This is why red blood cells are biconcave discs, not spheres — the flat shape maximizes surface area for gas exchange. The sphere is actually the <em>least</em> efficient shape for the same volume.</div>
                        </div>
                    </details>
                </div>

                <!-- SUMMARY -->
                <div class="glass-card" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary: Key Takeaways</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>As cells grow, volume increases faster than surface area — this limits cell size.</li>
                        <li>The SA/V ratio determines how efficiently a cell can exchange materials with its environment.</li>
                        <li>Flat, thin shapes have higher SA/V ratios than spheres of the same volume.</li>
                        <li>Evolution solves the SA/V problem through <strong>multicellularity</strong> and <strong>membrane folding</strong> (cristae, microvilli).</li>
                        <li>Eukaryotic cells achieve complexity through <strong>compartmentalization</strong> into specialized organelles.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch1-2": {
        title: "1.2: Endomembrane Logistics",
        subtitle: "The Protein Export Pipeline & Organelle Coordination",
        content: `
            <div class="lesson-section">

                <!-- KEY TERMS BOX -->
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Endomembrane System</strong> — A network of interconnected membranes (ER, Golgi, vesicles, plasma membrane) that work together to produce, modify, and transport proteins.</div>
                        <div><strong>Rough ER (RER)</strong> — ER studded with ribosomes; synthesizes proteins destined for membranes or export.</div>
                        <div><strong>Smooth ER (SER)</strong> — ER without ribosomes; synthesizes lipids, detoxifies drugs, stores calcium.</div>
                        <div><strong>Golgi Apparatus</strong> — Stacked membrane sacs (cisternae) that modify, sort, and package proteins for delivery.</div>
                        <div><strong>Vesicle</strong> — Small membrane-bound sac that transports materials between organelles or to the cell surface.</div>
                        <div><strong>Exocytosis</strong> — Process by which a vesicle fuses with the plasma membrane to release its contents outside the cell.</div>
                        <div><strong>Endocytosis</strong> — Process by which the cell takes in material by engulfing it in a portion of the plasma membrane.</div>
                        <div><strong>Signal Peptide</strong> — A short amino acid sequence at the beginning of a protein that directs it to the ER for processing.</div>
                    </div>
                </div>

                <!-- BIG IDEA -->
                <div class="intuition-box glass">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: The Cell as a Factory</h3>
                    <p>A eukaryotic cell is not a bag of chemicals — it is a highly organized <strong>logistics network</strong>. Proteins are "manufactured" at ribosomes, "quality-checked" in the ER, "packaged and labeled" in the Golgi, and "shipped" via vesicles to their final destination. Understanding this pipeline is essential because errors in protein trafficking cause serious diseases, including cystic fibrosis and Alzheimer's.</p>
                </div>

                <!-- SECTION I -->
                <h2>I. The Protein Export Pipeline</h2>

                <p>When a cell needs to produce a protein that will be exported (like a digestive enzyme or a hormone), that protein must pass through a specific series of organelles. This is the <strong>secretory pathway</strong>.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 25px; margin: 25px 0;">
                    <h4 style="color: var(--accent-cyan);">The 5-Step Protein Export Pipeline</h4>
                    <div style="display: grid; gap: 15px; margin-top: 15px;">
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-emerald); color:black; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">1</div>
                            <div><strong>Nucleus → mRNA:</strong> The gene encoding the protein is transcribed into messenger RNA (mRNA). The mRNA exits the nucleus through nuclear pores.</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-emerald); color:black; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">2</div>
                            <div><strong>Ribosome on Rough ER:</strong> A ribosome attaches to the mRNA and begins translating it. If the protein has a <em>signal peptide</em> (a molecular "zip code"), the ribosome docks onto the Rough ER and threads the growing protein directly into the ER lumen.</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-emerald); color:black; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">3</div>
                            <div><strong>ER Quality Control:</strong> Inside the ER lumen, the protein is <em>folded</em> into its 3D shape by chaperone proteins. Misfolded proteins are tagged for destruction. The ER also adds sugar chains (<strong>glycosylation</strong>) as molecular ID tags.</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-emerald); color:black; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">4</div>
                            <div><strong>Golgi Processing:</strong> Transport vesicles carry the protein from the ER to the Golgi apparatus. The Golgi further modifies the sugar chains, sorts the proteins, and packages them into vesicles with specific "address labels" (molecular tags that determine the final destination).</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-emerald); color:black; border-radius:50%; width:30px; height:30px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">5</div>
                            <div><strong>Vesicle Delivery (Exocytosis):</strong> The final vesicle travels to the plasma membrane, fuses with it, and releases the protein outside the cell. The vesicle membrane becomes part of the plasma membrane.</div>
                        </div>
                    </div>
                </div>

                <p><strong>Why does this matter?</strong> In cystic fibrosis, a single misfolded protein (CFTR) gets stuck in Step 3 — the ER recognizes it as defective and destroys it. The protein never reaches the cell membrane, so chloride channels don't function properly, leading to thick mucus buildup in the lungs.</p>

                <!-- SECTION II -->
                <h2>II. The Smooth ER: The Other Half</h2>

                <p>While the Rough ER specializes in proteins, the <strong>Smooth ER</strong> handles a completely different set of tasks:</p>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                        <tr style="background: rgba(16,185,129,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Feature</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">Rough ER</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">Smooth ER</th>
                        </tr>
                        <tr><td style="padding:10px;">Ribosomes?</td><td style="padding:10px; text-align:center;">Yes (gives it the "rough" appearance)</td><td style="padding:10px; text-align:center;">No</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;">Primary Function</td><td style="padding:10px; text-align:center;">Protein synthesis & folding</td><td style="padding:10px; text-align:center;">Lipid synthesis & detoxification</td></tr>
                        <tr><td style="padding:10px;">Products</td><td style="padding:10px; text-align:center;">Membrane proteins, secretory proteins</td><td style="padding:10px; text-align:center;">Phospholipids, steroid hormones</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;">Abundant in</td><td style="padding:10px; text-align:center;">Cells that secrete proteins (e.g., pancreatic cells)</td><td style="padding:10px; text-align:center;">Liver cells (detox), ovary cells (steroids)</td></tr>
                    </table>
                </div>

                <p>The Smooth ER in liver cells contains enzymes that <strong>detoxify drugs and alcohol</strong>. Heavy drinkers develop enlarged Smooth ER in their liver cells as the body adapts to process more toxins — a clear example of how cell structure responds to environmental demands.</p>

                <!-- SECTION III -->
                <h2>III. Endocytosis: The Reverse Pipeline</h2>

                <p>The endomembrane system doesn't just export — it also <strong>imports</strong>. Endocytosis is the process by which cells take in large molecules or even entire cells by wrapping them in a portion of the plasma membrane.</p>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                        <tr style="background: rgba(6,182,212,0.2);">
                            <th style="padding:12px; text-align:left;">Type</th>
                            <th style="padding:12px; text-align:left;">What It Engulfs</th>
                            <th style="padding:12px; text-align:left;">Example</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Phagocytosis</strong> ("cell eating")</td><td style="padding:10px;">Large particles or entire cells</td><td style="padding:10px;">White blood cells engulfing bacteria</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Pinocytosis</strong> ("cell drinking")</td><td style="padding:10px;">Liquid droplets with dissolved solutes</td><td style="padding:10px;">Intestinal cells absorbing nutrients</td></tr>
                        <tr><td style="padding:10px;"><strong>Receptor-mediated</strong></td><td style="padding:10px;">Specific molecules that bind to surface receptors</td><td style="padding:10px;">Cholesterol uptake via LDL receptors</td></tr>
                    </table>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: The Lysosome Connection</h4>
                    <p>After endocytosis, the ingested material is enclosed in a vesicle. This vesicle then fuses with a <strong>lysosome</strong> — an organelle containing powerful digestive enzymes at pH ~5 (very acidic). The lysosome breaks down the material into reusable molecules. If lysosomes malfunction (as in Tay-Sachs disease), undigested lipids accumulate and destroy nerve cells.</p>
                </div>

                <!-- WORKED EXAMPLE -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-emerald);">
                    <h5 style="color: var(--accent-emerald); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Tracing a Hormone's Journey</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">Trace the path of insulin (a protein hormone) from gene to secretion in a pancreatic beta cell. List each organelle in order.</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-emerald); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>1. Nucleus:</strong> Insulin gene is transcribed → mRNA produced</div>
                            <div><strong>2. Nuclear Pore:</strong> mRNA exits the nucleus</div>
                            <div><strong>3. Ribosome on Rough ER:</strong> mRNA translated → preproinsulin threaded into ER lumen</div>
                            <div><strong>4. ER Lumen:</strong> Signal peptide cleaved, protein folds, disulfide bonds form → proinsulin</div>
                            <div><strong>5. Transport Vesicle:</strong> Proinsulin budded off from ER in a vesicle</div>
                            <div><strong>6. Golgi Apparatus:</strong> C-peptide cleaved → mature insulin packaged into secretory granules</div>
                            <div><strong>7. Secretory Vesicle:</strong> Insulin stored until blood glucose rises</div>
                            <div><strong>8. Exocytosis:</strong> Vesicle fuses with plasma membrane → insulin released into bloodstream</div>
                            <div style="margin-top:10px; color:var(--accent-cyan); font-style:italic;"><strong>Key Insight:</strong> The protein is modified at <em>every</em> stop along the way. It is not functional insulin until after Golgi processing — this is why the pathway must be completed in sequence.</div>
                        </div>
                    </details>
                </div>

                <!-- SUMMARY -->
                <div class="glass-card" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary: Key Takeaways</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>The endomembrane system is an interconnected network: Nucleus → ER → Golgi → Vesicles → Plasma Membrane.</li>
                        <li>Rough ER synthesizes and folds proteins; Smooth ER synthesizes lipids and detoxifies chemicals.</li>
                        <li>The Golgi apparatus modifies, sorts, and packages proteins with molecular "address labels."</li>
                        <li>Exocytosis exports materials; Endocytosis (phagocytosis, pinocytosis, receptor-mediated) imports materials.</li>
                        <li>Lysosomes digest imported material and recycle cellular waste.</li>
                        <li>Signal peptides act as molecular "zip codes" directing proteins to the correct destination.</li>
                    </ul>
                </div>
            </div>
        `
    }
};
