window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// Merge Unit 2 lessons into ch1 (app.js routes ch1-3, ch1-4 to CHAPTER_DATA["ch1"])
window.CHAPTER_DATA["ch1"] = window.CHAPTER_DATA["ch1"] || {};
Object.assign(window.CHAPTER_DATA["ch1"], {

    "ch1-3": {
        title: "2.1: Water Potential Logic",
        subtitle: "Osmosis, Tonicity, and the Water Potential Equation",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Osmosis</strong> — The diffusion of water across a selectively permeable membrane, from an area of high water potential to low water potential.</div>
                        <div><strong>Water Potential ($\\Psi$)</strong> — A measure of the tendency of water to move from one area to another; measured in Megapascals (MPa).</div>
                        <div><strong>Solute Potential ($\\Psi_s$)</strong> — The effect of dissolved solutes on water potential. Always negative (or zero for pure water).</div>
                        <div><strong>Pressure Potential ($\\Psi_p$)</strong> — The physical pressure exerted on water. Usually positive in plant cells (turgor pressure).</div>
                        <div><strong>Hypertonic</strong> — A solution with higher solute concentration (lower $\\Psi$) compared to the cell interior.</div>
                        <div><strong>Hypotonic</strong> — A solution with lower solute concentration (higher $\\Psi$) compared to the cell interior.</div>
                        <div><strong>Isotonic</strong> — A solution with equal solute concentration to the cell interior; no net water movement.</div>
                        <div><strong>Plasmolysis</strong> — Shrinkage of the cell membrane away from the cell wall in a plant cell placed in a hypertonic solution.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Water Follows the Energy</h3>
                    <p>A common misconception is that "water follows salt." The precise truth is: water moves from areas of <strong>higher water potential</strong> to areas of <strong>lower water potential</strong>. Dissolved solutes <em>reduce</em> water potential, which is why water tends to move toward solutes. Understanding this distinction is critical for IBET-level analysis.</p>
                </div>

                <h2>I. Diffusion and Osmosis: The Fundamentals</h2>

                <p><strong>Diffusion</strong> is the net movement of molecules from an area of higher concentration to an area of lower concentration. It is a <em>passive</em> process — it requires no energy input because it is driven by the natural random motion (kinetic energy) of molecules.</p>

                <p><strong>Osmosis</strong> is a special case of diffusion: it is the diffusion of <em>water</em> across a selectively permeable membrane. The membrane allows water to pass but blocks most solutes.</p>

                <p>The key question is always: <strong>Which direction does water move?</strong> The answer depends on the relative water potential on either side of the membrane.</p>

                <h2>II. The Water Potential Equation</h2>

                <div class="proof-box glass">
                    <h4>The Master Equation</h4>
                    <p>$$\\Psi = \\Psi_s + \\Psi_p$$</p>
                    <p>Where:</p>
                    <ul style="line-height: 2;">
                        <li>$\\Psi$ = Total water potential (MPa)</li>
                        <li>$\\Psi_s$ = Solute potential = $-iCRT$</li>
                        <li>$\\Psi_p$ = Pressure potential (turgor pressure in plants)</li>
                    </ul>
                    <p style="margin-top:10px;"><strong>Solute Potential Formula:</strong></p>
                    <p>$$\\Psi_s = -iCRT$$</p>
                    <ul style="line-height: 2;">
                        <li>$i$ = Ionization constant (e.g., NaCl → 2 ions, so $i = 2$; sucrose doesn't ionize, so $i = 1$)</li>
                        <li>$C$ = Molar concentration (mol/L)</li>
                        <li>$R$ = Pressure constant = $0.0831$ L·bar/mol·K</li>
                        <li>$T$ = Temperature in Kelvin ($°C + 273$)</li>
                    </ul>
                </div>

                <p><strong>The Golden Rule:</strong> Water ALWAYS moves from <strong>high $\\Psi$</strong> to <strong>low $\\Psi$</strong>. Pure water ($\\Psi = 0$) has the highest possible water potential.</p>

                <!-- VISUAL DYNAMIC: WATER POTENTIAL LOGIC -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 20px; text-align: center;"><i class="fas fa-faucet"></i> Visual Dynamic: Water Potential & Osmotic Pressure</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
                        <svg viewBox="0 0 400 200" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- U-Tube Glass -->
                            <path d="M 120 40 L 120 160 Q 120 180 140 180 L 260 180 Q 280 180 280 160 L 280 40" fill="none" stroke="white" stroke-width="3" opacity="0.3" />
                            
                            <!-- Left Side (High WP) -->
                            <rect x="122" y="80" width="58" height="100" fill="rgba(6,182,212,0.2)" />
                            <text x="150" y="70" fill="var(--accent-cyan)" font-size="10" text-anchor="middle" font-weight="bold">High $\Psi$ (0 MPa)</text>
                            
                            <!-- Right Side (Low WP) -->
                            <rect x="220" y="110" width="58" height="70" fill="rgba(16,185,129,0.3)" />
                            <text x="250" y="100" fill="var(--accent-emerald)" font-size="10" text-anchor="middle" font-weight="bold">Low $\Psi$ (-1.0 MPa)</text>
                            
                            <!-- Solutes (Right) -->
                            <circle cx="230" cy="130" r="3" fill="var(--accent-amber)" />
                            <circle cx="260" cy="140" r="3" fill="var(--accent-amber)" />
                            <circle cx="240" cy="160" r="3" fill="var(--accent-amber)" />
                            <circle cx="265" cy="165" r="3" fill="var(--accent-amber)" />
                            
                            <!-- Arrow (Flow) -->
                            <path d="M 150 160 Q 200 190 250 160" fill="none" stroke="var(--accent-cyan)" stroke-width="4" stroke-linecap="round">
                                <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="2s" repeatCount="indefinite" />
                            </path>
                            <text x="200" y="175" fill="white" font-size="9" text-anchor="middle">NET FLOW</text>
                            
                            <text x="200" y="30" fill="white" font-size="11" text-anchor="middle" font-style="italic">Diffusion of water down the potential gradient</text>
                        </svg>
                    </div>
                </div>

                <h2>III. Tonicity: Effects on Cells</h2>

                <p>Tonicity describes the relative concentration of solutes outside the cell compared to inside. It determines whether the cell gains water, loses water, or stays the same.</p>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(6,182,212,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Condition</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">Water Movement</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">Animal Cell</th>
                            <th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.15);">Plant Cell</th>
                        </tr>
                        <tr>
                            <td style="padding:12px;"><strong>Hypotonic</strong><br><span style="font-size:0.8rem; color:#aaa;">Solution has less solute (higher $\\Psi$)</span></td>
                            <td style="padding:12px; text-align:center;">Water enters cell →</td>
                            <td style="padding:12px; text-align:center; color:var(--accent-orange);">Swells → may <strong>lyse</strong> (burst)</td>
                            <td style="padding:12px; text-align:center; color:var(--accent-green);"><strong>Turgid</strong> (ideal — firm and healthy)</td>
                        </tr>
                        <tr style="background:rgba(255,255,255,0.03);">
                            <td style="padding:12px;"><strong>Isotonic</strong><br><span style="font-size:0.8rem; color:#aaa;">Equal solute concentration</span></td>
                            <td style="padding:12px; text-align:center;">No net movement</td>
                            <td style="padding:12px; text-align:center; color:var(--accent-green);"><strong>Normal</strong> (ideal)</td>
                            <td style="padding:12px; text-align:center; color:#aaa;">Flaccid (limp)</td>
                        </tr>
                        <tr>
                            <td style="padding:12px;"><strong>Hypertonic</strong><br><span style="font-size:0.8rem; color:#aaa;">Solution has more solute (lower $\\Psi$)</span></td>
                            <td style="padding:12px; text-align:center;">← Water exits cell</td>
                            <td style="padding:12px; text-align:center; color:var(--accent-orange);">Shrivels (<strong>crenation</strong>)</td>
                            <td style="padding:12px; text-align:center; color:var(--accent-orange);"><strong>Plasmolyzed</strong> (membrane pulls from wall)</td>
                        </tr>
                    </table>
                </div>

                <p><strong>Critical Difference:</strong> Plant cells have a rigid <strong>cell wall</strong> that prevents lysis. When water rushes in, the cell wall pushes back, creating <strong>turgor pressure</strong> ($\\Psi_p > 0$). This is why plants are firm and upright. When a plant wilts, it has lost turgor pressure because the cells became flaccid or plasmolyzed.</p>

                <!-- WORKED EXAMPLE 1 -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example 1: Calculating Solute Potential</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A 0.5 M sucrose solution is at 25°C. Calculate the solute potential. (Sucrose does not ionize, so $i = 1$.)</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                            <div style="margin-bottom:8px;"><strong>Step 1:</strong> Convert temperature: $T = 25 + 273 = 298 \\text{ K}$</div>
                            <div style="margin-bottom:8px;"><strong>Step 2:</strong> Apply the formula: $\\Psi_s = -iCRT$</div>
                            <div style="margin-bottom:8px;"><strong>Step 3:</strong> Substitute values:</div>
                            <div style="margin-bottom:8px; padding-left:15px;">$\\Psi_s = -(1)(0.5)(0.0831)(298)$</div>
                            <div style="margin-bottom:8px; padding-left:15px;">$\\Psi_s = -(1)(0.5)(24.76)$</div>
                            <div style="margin-bottom:8px; padding-left:15px;">$\\Psi_s = -12.38 \\text{ bars} \\approx -1.238 \\text{ MPa}$</div>
                            <div style="margin-top:12px; color:var(--accent-cyan); font-style:italic;"><strong>Interpretation:</strong> The solute potential is strongly negative. This solution would draw water <em>toward</em> it from any area with a higher water potential (such as pure water at $\\Psi = 0$).</div>
                        </div>
                    </details>
                </div>

                <!-- WORKED EXAMPLE 2 -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example 2: Predicting Water Flow Between Cells</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">Cell A: $\\Psi_s = -0.7$ MPa, $\\Psi_p = +0.5$ MPa. Cell B: $\\Psi_s = -0.4$ MPa, $\\Psi_p = +0.3$ MPa. Which direction does water flow?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                            <div style="margin-bottom:8px;"><strong>Step 1:</strong> Calculate $\\Psi_A$: $\\Psi_A = -0.7 + 0.5 = -0.2$ MPa</div>
                            <div style="margin-bottom:8px;"><strong>Step 2:</strong> Calculate $\\Psi_B$: $\\Psi_B = -0.4 + 0.3 = -0.1$ MPa</div>
                            <div style="margin-bottom:8px;"><strong>Step 3:</strong> Compare: $\\Psi_B (-0.1) > \\Psi_A (-0.2)$</div>
                            <div style="margin-top:12px; color:var(--accent-cyan); font-style:italic;"><strong>Answer:</strong> Water flows from <strong>Cell B → Cell A</strong> (from high $\\Psi$ to low $\\Psi$). Even though Cell A has more turgor pressure, its overall water potential is lower because of its high solute concentration.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Water always moves from high $\\Psi$ to low $\\Psi$.</li>
                        <li>$\\Psi = \\Psi_s + \\Psi_p$. Adding solutes decreases $\\Psi$ (makes it more negative).</li>
                        <li>Animal cells are happiest in isotonic solutions; plant cells are happiest in hypotonic solutions (turgid).</li>
                        <li>Plasmolysis occurs when plant cells lose water in hypertonic solutions.</li>
                        <li>Always calculate both sides and compare to determine water flow direction.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch1-4": {
        title: "2.2: Active Loading Systems",
        subtitle: "Passive vs. Active Transport, Pumps, and Co-Transport",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Passive Transport</strong> — Movement of molecules down their concentration gradient; requires NO energy (ATP).</div>
                        <div><strong>Active Transport</strong> — Movement of molecules against their concentration gradient; requires energy (ATP).</div>
                        <div><strong>Facilitated Diffusion</strong> — Passive transport through channel or carrier proteins; still no ATP required.</div>
                        <div><strong>Na⁺/K⁺ ATPase</strong> — A pump that moves 3 Na⁺ out and 2 K⁺ in per ATP hydrolyzed, maintaining the electrochemical gradient.</div>
                        <div><strong>Electrochemical Gradient</strong> — A gradient that combines both concentration difference and electrical charge difference across a membrane.</div>
                        <div><strong>Co-transport (Symport)</strong> — Transport of one molecule "downhill" driving another molecule "uphill" simultaneously.</div>
                        <div><strong>Aquaporin</strong> — A channel protein specifically designed for rapid water transport across membranes.</div>
                        <div><strong>Carrier Protein</strong> — A membrane protein that changes shape to shuttle a molecule across the membrane.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Fighting the Gradient Costs Energy</h3>
                    <p>Diffusion is free — molecules naturally spread from crowded areas to empty areas. But life often needs molecules moved the <em>wrong way</em> — concentrated where they're already abundant. This is like pushing a boulder uphill. It requires the cell to spend its energy currency: <strong>ATP</strong>. The Na⁺/K⁺ pump alone consumes about 30% of your total resting energy budget.</p>
                </div>

                <h2>I. The Transport Spectrum</h2>

                <p>All membrane transport falls on a spectrum from completely passive to fully active:</p>

                <!-- VISUAL DYNAMIC: TRANSPORT ANIMATION -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 20px; text-align: center;"><i class="fas fa-bolt"></i> Visual Dynamic: Membrane Transport Energetics</h5>
                    <div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;">
                        <!-- PASSIVE -->
                        <div style="text-align: center;">
                            <svg viewBox="0 0 150 200" width="150">
                                <rect x="0" y="90" width="150" height="20" fill="rgba(255,255,255,0.1)" stroke="white" stroke-width="1" />
                                <rect x="60" y="85" width="30" height="30" fill="#111" stroke="var(--accent-cyan)" stroke-width="2" />
                                <!-- Channel Particles -->
                                <circle cx="75" cy="40" r="4" fill="var(--accent-cyan)">
                                    <animate attributeName="cy" from="30" to="170" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                                <text x="75" y="20" fill="var(--accent-cyan)" font-size="10" text-anchor="middle" font-weight="bold">PASSIVE</text>
                                <text x="75" y="190" fill="#aaa" font-size="8" text-anchor="middle">High → Low (Free)</text>
                            </svg>
                        </div>
                        <!-- ACTIVE -->
                        <div style="text-align: center;">
                            <svg viewBox="0 0 150 200" width="150">
                                <rect x="0" y="90" width="150" height="20" fill="rgba(255,255,255,0.1)" stroke="white" stroke-width="1" />
                                <rect x="60" y="85" width="30" height="30" fill="#111" stroke="var(--accent-amber)" stroke-width="2" />
                                <!-- ATP Spark -->
                                <circle cx="95" cy="100" r="8" fill="rgba(245,158,11,0.2)">
                                    <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
                                </circle>
                                <text x="105" y="105" fill="var(--accent-amber)" font-size="8">ATP</text>
                                <!-- Pump Particles -->
                                <circle cx="75" cy="170" r="4" fill="var(--accent-emerald)">
                                    <animate attributeName="cy" from="170" to="30" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                                <text x="75" y="20" fill="var(--accent-amber)" font-size="10" text-anchor="middle" font-weight="bold">ACTIVE</text>
                                <text x="75" y="190" fill="#aaa" font-size="8" text-anchor="middle">Low → High (Spent)</text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(6,182,212,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Type</th>
                            <th style="padding:12px; text-align:center;">Energy?</th>
                            <th style="padding:12px; text-align:center;">Direction</th>
                            <th style="padding:12px; text-align:center;">Protein?</th>
                            <th style="padding:12px; text-align:left;">Examples</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Simple Diffusion</strong></td><td style="padding:10px; text-align:center; color:var(--accent-green);">No ATP</td><td style="padding:10px; text-align:center;">High → Low</td><td style="padding:10px; text-align:center;">No</td><td style="padding:10px;">O₂, CO₂, steroid hormones cross lipid bilayer directly</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Facilitated Diffusion</strong></td><td style="padding:10px; text-align:center; color:var(--accent-green);">No ATP</td><td style="padding:10px; text-align:center;">High → Low</td><td style="padding:10px; text-align:center;">Yes</td><td style="padding:10px;">Glucose (GLUT1), ions (ion channels), water (aquaporins)</td></tr>
                        <tr><td style="padding:10px;"><strong>Primary Active Transport</strong></td><td style="padding:10px; text-align:center; color:var(--accent-orange);">ATP directly</td><td style="padding:10px; text-align:center;">Low → High</td><td style="padding:10px; text-align:center;">Yes</td><td style="padding:10px;">Na⁺/K⁺ pump, Ca²⁺ pump, H⁺ pump</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Secondary Active (Co-transport)</strong></td><td style="padding:10px; text-align:center; color:var(--accent-orange);">ATP indirectly</td><td style="padding:10px; text-align:center;">Low → High</td><td style="padding:10px; text-align:center;">Yes</td><td style="padding:10px;">Glucose-Na⁺ symport in intestines</td></tr>
                    </table>
                </div>

                <h2>II. The Na⁺/K⁺ Pump: Life's Most Important Pump</h2>

                <p>The <strong>Sodium-Potassium ATPase</strong> is found in virtually every animal cell. It is essential for maintaining the cell's <strong>resting membrane potential</strong> (~-70mV), which is required for nerve impulses, muscle contractions, and nutrient absorption.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-orange); padding: 25px; margin: 25px 0;">
                    <h4 style="color: var(--accent-orange);">How the Na⁺/K⁺ Pump Works (Per Cycle)</h4>
                    <div style="display: grid; gap: 12px; margin-top: 15px;">
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-orange); color:black; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">1</div>
                            <div>3 Na⁺ ions from inside the cell bind to the pump's intracellular face.</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-orange); color:black; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">2</div>
                            <div>ATP is hydrolyzed → ADP + P. The phosphate attaches to the pump, causing it to change shape (conformational change).</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-orange); color:black; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">3</div>
                            <div>The shape change opens the pump to the outside → 3 Na⁺ are released extracellularly.</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-orange); color:black; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">4</div>
                            <div>2 K⁺ ions from outside the cell bind to the pump's extracellular face.</div>
                        </div>
                        <div style="display:flex; gap:15px; align-items:flex-start;">
                            <div style="background:var(--accent-orange); color:black; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; flex-shrink:0;">5</div>
                            <div>Phosphate is released → pump reverts to original shape → 2 K⁺ are released intracellularly.</div>
                        </div>
                    </div>
                    <div style="margin-top:15px; padding:10px; background:rgba(0,0,0,0.2); border-radius:8px; font-size:0.9rem;">
                        <strong>Net result per cycle:</strong> 3 Na⁺ out, 2 K⁺ in. This creates a <strong>net negative charge inside</strong> the cell (electrogenic), establishing the electrochemical gradient essential for nerve signaling.
                    </div>
                </div>

                <h2>III. Co-Transport: Hitchhiking on the Gradient</h2>

                <p>The Na⁺/K⁺ pump creates a steep Na⁺ gradient (high outside, low inside). Other transport proteins can harness this gradient to move a second molecule "uphill" — this is called <strong>co-transport</strong> or <strong>secondary active transport</strong>.</p>

                <p><strong>Example: Glucose absorption in the intestine.</strong> Intestinal cells use a Na⁺-glucose symporter. Na⁺ is allowed to flow "downhill" (into the cell, down its gradient). The energy released from Na⁺ flowing downhill simultaneously pulls glucose "uphill" (into the cell, against its gradient). The cell gets both molecules in without spending ATP directly — but the Na⁺/K⁺ pump is constantly running in the background to reset the Na⁺ gradient.</p>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: Why "Secondary" Active Transport?</h4>
                    <p>It's called "secondary" because the ATP is not used directly by the co-transporter. Instead, ATP is used by the Na⁺/K⁺ pump to <em>create</em> the Na⁺ gradient, and then that gradient's potential energy drives the co-transport. Think of it as a two-step system: the pump charges the battery (gradient), and the symporter uses the battery to do work.</p>
                </div>

                <!-- WORKED EXAMPLE -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Classifying Transport Types</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">For each scenario, identify the transport type: (a) O₂ enters a muscle cell. (b) Glucose enters a red blood cell via GLUT1. (c) A plant root cell absorbs H⁺ using ATP. (d) Glucose enters an intestinal cell via Na⁺ co-transport.</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2.2;">
                            <div>(a) <strong>Simple diffusion</strong> — O₂ is small, nonpolar → crosses lipid bilayer directly, no protein needed.</div>
                            <div>(b) <strong>Facilitated diffusion</strong> — Glucose is large, polar → needs GLUT1 channel, but still moves down its gradient (no ATP).</div>
                            <div>(c) <strong>Primary active transport</strong> — H⁺ moved against gradient, ATP hydrolyzed directly by the H⁺ pump.</div>
                            <div>(d) <strong>Secondary active transport</strong> — Glucose moves against its gradient, powered by the Na⁺ gradient (not ATP directly).</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Passive transport (diffusion, facilitated diffusion, osmosis) moves molecules <strong>down</strong> their gradient — no ATP.</li>
                        <li>Active transport moves molecules <strong>against</strong> their gradient — requires ATP.</li>
                        <li>The Na⁺/K⁺ pump moves 3 Na⁺ out and 2 K⁺ in per ATP, creating the electrochemical gradient.</li>
                        <li>Co-transport uses the energy stored in one molecule's gradient to transport a different molecule uphill.</li>
                        <li>Small nonpolar molecules diffuse freely; large or charged molecules need protein channels or carriers.</li>
                    </ul>
                </div>
            </div>
        `
    }
});
