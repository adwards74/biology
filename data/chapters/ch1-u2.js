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

                <!-- PREMIUM CINEMATIC HEADER: WATER POTENTIAL MASTER -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #0c4a6e 0%, #0f172a 100%); border: 2px solid var(--accent-cyan); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(6,182,212,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-cyan); padding-bottom: 8px; margin: 0;">Water Potential Equilibrium Logic</h4>
                        
                        <svg viewBox="0 0 500 150" style="max-width: 600px; width: 100%; height: auto; filter: drop-shadow(0 0 10px rgba(6,182,212,0.3));">
                            <!-- Gradient Flow -->
                            <defs>
                                <linearGradient id="wp-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:var(--accent-cyan); stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:var(--accent-emerald); stop-opacity:0.2" />
                                </linearGradient>
                            </defs>
                            
                            <!-- Pressure Vector -->
                            <path d="M 50 75 Q 250 25 450 75" fill="none" stroke="url(#wp-flow)" stroke-width="4" stroke-dasharray="10,5">
                                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                            </path>
                            
                            <!-- Particles -->
                            <circle r="3" fill="var(--accent-cyan)">
                                <animateMotion path="M 50 75 Q 250 25 450 75" dur="3s" repeatCount="indefinite" />
                            </circle>
                            
                            <text x="50" y="110" fill="var(--accent-cyan)" font-size="12" font-weight="bold">HIGH $\Psi$ (0)</text>
                            <text x="450" y="110" fill="var(--accent-emerald)" font-size="12" font-weight="bold" text-anchor="end">LOW $\Psi$ (-)</text>
                            
                            <text x="250" y="140" fill="white" font-size="10" text-anchor="middle" opacity="0.6">Movement Toward Negative Free Energy</text>
                        </svg>
                    </div>
                </div>

                <h2>I. The Why: Free Energy & Water Potential Flux</h2>

                <p><strong>Diffusion</strong> is the net movement of molecules from an area of higher concentration to an area of lower concentration. It is a <em>passive</em> process — it requires no energy input because it is driven by the natural random motion (kinetic energy) of molecules.</p>

                <p><strong>Osmosis</strong> is a special case of diffusion: it is the diffusion of <em>water</em> across a selectively permeable membrane. The membrane allows water to pass but blocks most solutes.</p>

                <p>The key question is always: <strong>Which direction does water move?</strong> The answer depends on the relative water potential on either side of the membrane.</p>

                <h2>II. The How: Mastering the $\Psi$ Equation</h2>

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

                <!-- VISUAL DYNAMIC: OSMOTIC PRESSURE SIMULATOR -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.4); border: 1px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 25px; text-align: center;"><i class="fas fa-vial"></i> Osmotic Pressure Simulator</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 400 220" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- U-Tube Glass -->
                            <path d="M 120 40 V 160 Q 120 180 140 180 H 260 Q 280 180 280 160 V 40" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="4" />
                            
                            <!-- Water Level (Left) -->
                            <rect x="122" y="100" width="58" height="80" fill="rgba(6,182,212,0.15)">
                                <animate attributeName="y" values="100;120;100" dur="8s" repeatCount="indefinite" />
                                <animate attributeName="height" values="80;60;80" dur="8s" repeatCount="indefinite" />
                            </rect>
                            
                            <!-- Water Level (Right) -->
                            <rect x="220" y="70" width="58" height="110" fill="rgba(16,185,129,0.2)">
                                <animate attributeName="y" values="70;50;70" dur="8s" repeatCount="indefinite" />
                                <animate attributeName="height" values="110;130;110" dur="8s" repeatCount="indefinite" />
                            </rect>
                            
                            <!-- Semipermeable Membrane -->
                            <line x1="200" y1="140" x2="200" y2="180" stroke="white" stroke-width="2" stroke-dasharray="2,2" />
                            
                            <!-- Solutes (Right only) -->
                            <g>
                                <circle cx="235" cy="110" r="3" fill="var(--accent-amber)" />
                                <circle cx="260" cy="130" r="3" fill="var(--accent-amber)" />
                                <circle cx="240" cy="155" r="3" fill="var(--accent-amber)" />
                                <circle cx="265" cy="90" r="3" fill="var(--accent-amber)" />
                            </g>
                            
                            <!-- Moving Water Particles -->
                            <circle r="2" fill="var(--accent-cyan)">
                                <animateMotion path="M 160 140 Q 200 170 240 140" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle r="2" fill="var(--accent-cyan)" opacity="0.5">
                                <animateMotion path="M 140 150 H 260" dur="3s" repeatCount="indefinite" />
                            </circle>

                            <text x="150" y="30" fill="var(--accent-cyan)" font-size="9" text-anchor="middle">Pure Water (0)</text>
                            <text x="250" y="30" fill="var(--accent-emerald)" font-size="9" text-anchor="middle">Solution (-1.2)</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #888; text-align: center; font-style: italic;">Water moves toward the side with <strong>lower potential</strong> until pressure balances the osmotic pull.</p>
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

                <!-- SECTION IV: WATER POTENTIAL GRADIENTS -->
                <h2>IV. The Water Potential Gradient in Tissues</h2>

                <p>In a multicellular organism, water potential isn't just about a single cell – it's about the <strong>Gradients</strong> across entire tissues. For example, in a tree, water moves from the soil ($ \Psi \approx -0.1$ MPa) up to the leaves ($ \Psi \approx -1.5$ MPa) and finally to the air ($ \Psi \approx -100$ MPa).</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin: 20px 0;">
                    <h4>Factors Influencing Tissue Gradient</h4>
                    <ul style="line-height: 2;">
                        <li><strong>Evaporative Demand:</strong> Transpiration at the leaf surface lowers $ \Psi $ significantly, creating the "pull" that moves columns of water hundreds of feet upward.</li>
                        <li><strong>Solute Accumulation:</strong> Root cells actively pump minerals into their xylem to lower $ \Psi_s $, ensuring water flows into the roots from the soil even in dry conditions.</li>
                        <li><strong>Wall Elasticity:</strong> The pressure potential ($ \Psi_p $) is limited by the strength of the cellulose cell wall. If the wall is weak, the cell cannot maintain high turgor even in a hypotonic environment.</li>
                    </ul>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: Equilibrium vs. Dynamic Flow</h4>
                    <p>When you calculate $ \Psi $ in a textbook problem, you are usually looking for <strong>Equilibrium</strong> (where $ \Psi_{cell} = \Psi_{solution} $). In a living IBET lab experiment, however, you are often looking at <strong>Dynamic Flow</strong>. If $ \Delta\Psi \neq 0 $, water is currently moving, and the rate of that movement is determined by the permeability of the membrane (the number of <strong>Aquaporins</strong> active).</p>
                </div>

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

                <!-- WORKED EXAMPLE 3 -->
                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example 3: Drought Stress in Xylem</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A plant is experiencing drought. Soil $\Psi = -0.8$ MPa. To keep water flowing into the roots, the plant actively pumps solutes to reach $\Psi_s = -1.2$ MPa. If the root cells' turgor pressure is currently $\Psi_p = +0.2$ MPa, will water enter the roots?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Step-by-Step Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1);">
                            <div style="margin-bottom:8px;"><strong>Step 1:</strong> Identify Soil Potential: $\Psi_{soil} = -0.8$ MPa</div>
                            <div style="margin-bottom:8px;"><strong>Step 2:</strong> Calculate Root Potential: $\Psi_{root} = \Psi_s + \Psi_p = -1.2 + 0.2 = -1.0$ MPa</div>
                            <div style="margin-bottom:8px;"><strong>Step 3:</strong> Compare: Since $\Psi_{soil} (-0.8) > \Psi_{root} (-1.0)$, water flows from Soil → Root.</div>
                            <div style="margin-top:12px; color:var(--accent-cyan); font-style:italic;"><strong>Elite Insight:</strong> This is "osmotic adjustment." Plants survive drought by dropping their internal water potential even lower than the dry soil, maintaining the gradient needed for life.</div>
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

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-cyan); padding: 30px;">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Water Potential & Osmoregulation</h5>
                    <a href="https://www.youtube.com/watch?v=L-osuaqiX5A" target="_blank" style="text-decoration: none; display: block;">
                        <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://img.youtube.com/vi/L-osuaqiX5A/maxresdefault.jpg'); background-size: cover; background-position: center; border: 1px solid rgba(6,182,212,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: transform 0.3s ease;">
                            <!-- Floating Play Button -->
                            <div style="width: 80px; height: 80px; background: var(--accent-emerald); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(16,185,129,0.6); z-index: 2;">
                                <i class="fas fa-play" style="color: black; font-size: 2rem; margin-left: 5px;"></i>
                            </div>
                            <!-- Bottom Info Bar -->
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(16, 185, 129, 0.9); padding: 12px; text-align: center; backdrop-filter: blur(10px);">
                                <p style="margin: 0; color: black; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px;">WATCH ON YOUTUBE <i class="fas fa-external-link-alt" style="font-size: 0.8rem; margin-left: 8px;"></i></p>
                            </div>
                        </div>
                    </a>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Water Potential (Amoeba Sisters / Academic Curation)</p>
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

                <!-- PREMIUM CINEMATIC HEADER: ACTIVE TRANSPORT -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #451a03 0%, #0f172a 100%); border: 2px solid var(--accent-amber); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(245,158,11,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-amber); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-amber); padding-bottom: 8px; margin: 0;">Active Logistics & Ion Flux</h4>
                        <svg viewBox="0 0 500 150" style="max-width: 600px; width: 100%; height: auto; filter: drop-shadow(0 0 10px rgba(245,158,11,0.3));">
                            <!-- Pump Core -->
                            <rect x="220" y="50" width="60" height="80" rx="10" fill="rgba(245,158,11,0.1)" stroke="var(--accent-amber)" stroke-width="3">
                                <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" />
                            </rect>
                            
                            <!-- ATP Input -->
                            <circle cx="210" cy="90" r="12" fill="var(--accent-amber)" opacity="0.3">
                                <animate attributeName="r" values="12;18;12" dur="1s" repeatCount="indefinite" />
                            </circle>
                            <text x="210" y="93" fill="var(--accent-amber)" font-size="8" text-anchor="middle" font-weight="bold">ATP</text>
                            
                            <!-- Sodium Flow (Out) -->
                            <g>
                                <circle r="4" fill="var(--accent-red)">
                                    <animateMotion path="M 250 90 C 250 40 400 40 450 40" dur="2s" repeatCount="indefinite" />
                                </circle>
                                <text x="400" y="30" fill="var(--accent-red)" font-size="10" font-weight="bold">3 Na⁺ OUT</text>
                            </g>
                            
                            <!-- Potassium Flow (In) -->
                            <g>
                                <circle r="4" fill="var(--accent-cyan)">
                                    <animateMotion path="M 450 110 C 300 110 250 110 50 110" dur="2.5s" repeatCount="indefinite" />
                                </circle>
                                <text x="80" y="130" fill="var(--accent-cyan)" font-size="10" font-weight="bold">2 K⁺ IN</text>
                            </g>
                        </svg>
                    </div>
                </div>

                <h2>I. The Why: Fighting Entropy & Concentration Gradients</h2>

                <p>All membrane transport falls on a spectrum from completely passive to fully active:</p>

                <!-- MOLECULAR SIMULATION: NA+/K+ PUMP (E1-E2 MECHANISM) -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.4); border: 1px solid var(--accent-amber);">
                    <h5 style="color: var(--accent-amber); margin-bottom: 25px; text-align: center;"><i class="fas fa-microchip"></i> Na⁺/K⁺ Pump Molecular Dynamics</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 400 240" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- Membrane -->
                            <rect x="0" y="100" width="400" height="40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
                            
                            <!-- Pump Body (Animated transformation) -->
                            <path d="M 170 80 Q 200 60 230 80 L 230 160 Q 200 180 170 160 Z" fill="#111" stroke="var(--accent-amber)" stroke-width="3">
                                <animate attributeName="d" 
                                    values="M 170 80 Q 200 60 230 80 L 230 160 Q 200 180 170 160 Z;
                                            M 170 60 Q 200 80 230 60 L 230 140 Q 200 160 170 140 Z;
                                            M 170 80 Q 200 60 230 80 L 230 160 Q 200 180 170 160 Z" 
                                    dur="4s" repeatCount="indefinite" />
                            </path>
                            
                            <!-- ATP Firing -->
                            <circle cx="160" cy="120" r="0" fill="var(--accent-amber)">
                                <animate attributeName="r" values="0;15;0" dur="4s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                            </circle>
                            
                            <!-- Ion Pings -->
                            <g>
                                <!-- Na+ outgoing -->
                                <circle r="3" fill="var(--accent-red)">
                                    <animateMotion path="M 185 100 Q 200 40 250 40" dur="4s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3" fill="var(--accent-red)">
                                    <animateMotion path="M 200 100 Q 200 20 280 40" dur="4s" begin="0.2s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3" fill="var(--accent-red)">
                                    <animateMotion path="M 215 100 Q 200 30 310 40" dur="4s" begin="0.4s" repeatCount="indefinite" />
                                </circle>
                                
                                <!-- K+ incoming -->
                                <circle r="3" fill="var(--accent-cyan)">
                                    <animateMotion path="M 230 40 Q 200 80 180 200" dur="4s" begin="2s" repeatCount="indefinite" />
                                </circle>
                                <circle r="3" fill="var(--accent-cyan)">
                                    <animateMotion path="M 250 40 Q 200 100 220 200" dur="4s" begin="2.2s" repeatCount="indefinite" />
                                </circle>
                            </g>
                            
                            <text x="50" y="220" fill="#888" font-size="9">INTRACELLULAR (Negative)</text>
                            <text x="350" y="40" fill="#888" font-size="9" text-anchor="end">EXTRACELLULAR</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #888; text-align: center; font-style: italic;">The "Ping-Pong" conformational change (E1 $\to$ E2) powered by ATP hydrolysis.</p>
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

                <h2>II. The How: Primary Active Transport (The Na⁺/K⁺ Engine)</h2>

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

                <h2>III. Secondary Systems: Co-Transport Logistics</h2>

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

                <!-- SECTION IV -->
                <h2>IV. Advanced Kinetics: The Sodium-Potassium Exchange Mechanism</h2>
                <div class="glass-card elite-border" style="margin: 20px 0;">
                    <p>On the molecular level, the Na⁺/K⁺ pump is an <strong>E1-E2 ATPase</strong>. It switches between two primary states:</p>
                    <ul style="line-height: 1.8; font-size: 0.9rem;">
                        <li><strong>E1 State (High affinity for Na⁺)</strong>: The pump is open to the inside. Binding of Na⁺ triggers phosphorylation by ATP.</li>
                        <li><strong>E2 State (High affinity for K⁺)</strong>: After phosphorylation, the pump flips outside. Na⁺ leaves, and K⁺ binds, triggering the release of the phosphate and flipping the pump back to E1.</li>
                    </ul>
                    <p style="margin-top:10px; font-style:italic; opacity:0.8;">This "Ping-Pong" mechanism ensures that ions never "leak" in the wrong direction during the change, preserving the gradient with 100% efficiency.</p>
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

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-amber); padding: 30px;">
                    <h5 style="color: var(--accent-amber); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Active Transport & Co-Transport</h5>
                    <a href="https://www.youtube.com/watch?v=2Th0PuORsWY" target="_blank" style="text-decoration: none; display: block;">
                        <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://img.youtube.com/vi/2Th0PuORsWY/maxresdefault.jpg'); background-size: cover; background-position: center; border: 1px solid rgba(245,158,11,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: transform 0.3s ease;">
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
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Active Transport & Na+/K+ Pump (Amoeba Sisters / Academic Curation)</p>
                </div>
            </div>
        `
    }
});
