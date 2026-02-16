window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 3: METABOLIC ENGINES — Textbook-Grade Expansion
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch3"] = {

    "ch3-1": {
        title: "7.1: The Solar Panel — Photosynthesis",
        subtitle: "Light Reactions, Calvin Cycle, and Chemiosmosis in the Chloroplast",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-orange); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-orange); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Photosystem II (PSII)</strong> — First photosystem activated; splits water (photolysis), releases O₂, and passes electrons down the ETC.</div>
                        <div><strong>Photosystem I (PSI)</strong> — Re-energizes electrons; ultimately reduces NADP⁺ to NADPH.</div>
                        <div><strong>Chemiosmosis</strong> — H⁺ ions flow through ATP synthase down their gradient, powering ATP synthesis.</div>
                        <div><strong>Calvin Cycle</strong> — Light-independent reactions; uses CO₂, ATP, and NADPH to build G3P (sugar precursor).</div>
                        <div><strong>RuBisCO</strong> — The enzyme that fixes CO₂ into organic molecules; most abundant protein on Earth.</div>
                        <div><strong>Carbon Fixation</strong> — The incorporation of CO₂ into an organic molecule (3-PGA) by RuBisCO.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Photosynthesis Is an Electron Transport Chain Powered by Light</h3>
                    <p>Photosynthesis is NOT just "plants making food from sunlight." It is a sophisticated <strong>electron relay system</strong> where photons excite electrons, which are then passed through protein complexes to pump H⁺ ions and generate ATP. The "light reactions" capture energy; the "Calvin Cycle" uses that energy to build sugar from CO₂.</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: THE Z-SCHEME (SOLAR CAPTURE) -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #064e3b 0%, #065f46 100%); border: 2px solid var(--accent-orange); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(251,146,60,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-orange); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-orange); padding-bottom: 8px; margin: 0;">Solar Energy Capture & Flux</h4>
                        <svg viewBox="0 0 500 180" style="max-width: 600px; width: 100%; height: auto; filter: drop-shadow(0 0 10px rgba(251,146,60,0.3));">
                            <!-- Axis -->
                            <line x1="40" y1="20" x2="40" y2="160" stroke="#888" stroke-width="1" marker-end="url(#arrow-head)" />
                            <text x="30" y="90" fill="#888" font-size="8" transform="rotate(-90 30,90)" text-anchor="middle">REDUX POTENTIAL</text>
                            
                            <!-- PSII -->
                            <g transform="translate(100, 130)">
                                <rect x="-20" y="-20" width="40" height="40" rx="4" fill="var(--accent-emerald)" opacity="0.8" />
                                <text x="0" y="30" fill="white" font-size="8" text-anchor="middle" font-weight="bold">PSII</text>
                                <!-- Excitation Arrow -->
                                <path d="M 0 0 L 0 -80" stroke="var(--accent-amber)" stroke-width="3" stroke-dasharray="4 2">
                                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
                                </path>
                                <circle cx="0" cy="-80" r="5" fill="var(--accent-amber)">
                                    <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
                                </circle>
                            </g>
                            
                            <!-- ETC Relay -->
                            <path d="M 100 50 L 250 100" fill="none" stroke="white" stroke-width="2" stroke-dasharray="5 5">
                                <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
                            </path>
                            
                            <!-- PSI -->
                            <g transform="translate(300, 100)">
                                <rect x="-20" y="-20" width="40" height="40" rx="4" fill="var(--accent-emerald)" />
                                <text x="0" y="30" fill="white" font-size="8" text-anchor="middle" font-weight="bold">PSI</text>
                                <!-- Second Excitation -->
                                <path d="M 0 0 L 0 -70" stroke="var(--accent-amber)" stroke-width="3" stroke-dasharray="4 2">
                                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
                                </path>
                            </g>
                            
                            <!-- NADPH End -->
                            <g transform="translate(420, 40)">
                                <circle cx="0" cy="0" r="15" fill="rgba(6,182,212,0.2)" stroke="var(--accent-cyan)" stroke-width="1" />
                                <text x="0" y="5" fill="var(--accent-cyan)" font-size="8" text-anchor="middle" font-weight="bold">NADPH</text>
                            </g>
                        </svg>
                        <p style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">The Non-Cyclic Electron Flow: A journey from low-energy water to high-energy sugar precursors.</p>
                    </div>
                </div>

                <!-- VISUAL DYNAMIC: CALVIN CYCLE DYNAMICS -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.4); border: 1px solid var(--accent-orange);">
                    <h5 style="color: var(--accent-orange); margin-bottom: 25px; text-align: center;"><i class="fas fa-redo"></i> Molecular Dynamic: The Calvin Cycle "Gear"</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 400 200" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- Central Cycle -->
                            <circle cx="200" cy="100" r="60" fill="none" stroke="rgba(251,146,60,0.3)" stroke-width="8" stroke-dasharray="20 10">
                                <animateTransform attributeName="transform" type="rotate" from="0 200 100" to="360 200 100" dur="10s" repeatCount="indefinite" />
                            </circle>
                            
                            <!-- Input: CO2 -->
                            <g transform="translate(200, 20)">
                                <circle r="10" fill="var(--accent-amber)" />
                                <text x="0" y="-15" fill="var(--accent-amber)" font-size="10" text-anchor="middle" font-weight="bold">CO₂ IN</text>
                                <animateTransform attributeName="transform" type="translate" values="200,0; 200,40" dur="2s" repeatCount="indefinite" />
                            </g>
                            
                            <!-- Output: G3P -->
                            <g transform="translate(300, 150)">
                                <polygon points="0,-10 10,10 -10,10" fill="var(--accent-emerald)" />
                                <text x="0" y="25" fill="var(--accent-emerald)" font-size="10" text-anchor="middle" font-weight="bold">G3P OUT</text>
                                <animateTransform attributeName="transform" type="translate" values="260,100; 340,150" dur="3s" repeatCount="indefinite" />
                            </g>
                            
                            <!-- Regeneration Loop -->
                            <path d="M 140 100 A 60 60 0 1 1 260 100" fill="none" stroke="var(--accent-amber)" stroke-width="2" opacity="0.4" />
                            <text x="120" y="105" fill="#888" font-size="8" text-anchor="middle">RuBP REGEN</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #888; text-align: center; font-style: italic;">RuBisCO efficiency: For every 3 CO₂ entered, only 1 G3P molecule survives as Net Gain. The rest feeds the machine.</p>
                    </div>
                </div>

                <h2>I. The Light-Dependent Reactions (Thylakoid Membrane)</h2>

                <p>The overall equation: <strong>$$6CO_2 + 6H_2O \\xrightarrow{\\text{light}} C_6H_{12}O_6 + 6O_2$$</strong></p>

                <p>The light reactions follow this sequence:</p>
                <ol style="line-height: 2.2;">
                    <li><strong>PSII absorbs light</strong> → electrons are excited to high energy level.</li>
                    <li><strong>Water is split</strong> (photolysis): $2H_2O \\rightarrow 4H^+ + 4e^- + O_2$. This is where the O₂ you breathe comes from!</li>
                    <li>Excited electrons pass through the <strong>Electron Transport Chain</strong> (plastoquinone → cytochrome complex → plastocyanin), pumping H⁺ into the thylakoid lumen.</li>
                    <li><strong>PSI re-energizes</strong> electrons with a second photon, then passes them to ferredoxin.</li>
                    <li><strong>NADP⁺ reductase</strong> combines electrons + H⁺ → <strong>NADPH</strong> (the reducing power for the Calvin Cycle).</li>
                    <li>H⁺ gradient drives <strong>ATP synthase</strong> → <strong>ATP</strong> (photophosphorylation).</li>
                </ol>

                <h2>II. The Calvin Cycle (Stroma)</h2>

                <p>The Calvin Cycle uses the ATP and NADPH from the light reactions to fix CO₂ into sugar. It has 3 phases:</p>
                <ol style="line-height: 2.2;">
                    <li><strong>Carbon Fixation:</strong> RuBisCO attaches CO₂ to RuBP (5C) → 2 molecules of 3-PGA (3C).</li>
                    <li><strong>Reduction:</strong> ATP and NADPH convert 3-PGA → G3P (glyceraldehyde-3-phosphate). This is where carbon becomes "fixed" into organic form.</li>
                    <li><strong>Regeneration:</strong> 5 of every 6 G3P molecules are recycled to regenerate RuBP, using more ATP.</li>
                </ol>

                <p><strong>Net output per 3 turns:</strong> 1 G3P molecule (3C). Two G3P are needed to make one glucose (6C), so <strong>6 turns of the Calvin Cycle = 1 glucose</strong>.</p>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-orange);">
                    <h5 style="color: var(--accent-orange); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Tracking Carbon in Photosynthesis</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">If a plant fixes 18 molecules of CO₂, how many G3P molecules are produced? How many glucose molecules can be assembled?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-orange); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> Each CO₂ fixed → eventually produces 1 G3P (after 3 turns). 18 CO₂ ÷ 3 per turn = 6 turns → but each turn makes 2 G3P, and only 1 is "net." So 18 CO₂ = 18 turns = 18 net G3P? No — 3 CO₂ per turn × 6 turns = 18 CO₂, producing <strong>12 G3P total</strong> (2 per turn × 6 turns), of which <strong>2 are net output</strong> and 10 are recycled. Wait — let's be precise:</div>
                            <div><strong>Correct approach:</strong> 18 CO₂ → 36 G3P total. 30 recycled to RuBP, <strong>6 G3P net</strong>.</div>
                            <div><strong>Step 2:</strong> 2 G3P = 1 glucose → 6 G3P = <strong>3 glucose molecules</strong>.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-orange); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Light reactions (thylakoid): water split → O₂ released → electrons power ETC → ATP + NADPH produced.</li>
                        <li>Calvin Cycle (stroma): CO₂ fixed by RuBisCO → G3P built using ATP + NADPH → glucose assembled.</li>
                        <li>6 CO₂ + 18 ATP + 12 NADPH → 1 glucose (requires 6 turns of Calvin Cycle).</li>
                        <li>O₂ comes from water splitting, NOT from CO₂.</li>
                    </ul>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-orange); padding: 30px;">
                    <h5 style="color: var(--accent-orange); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Photosynthesis Deep Dive</h5>
                    <a href="https://www.youtube.com/watch?v=sQK3Yr4Sc_k" target="_blank" style="text-decoration: none; display: block;">
                        <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://img.youtube.com/vi/sQK3Yr4Sc_k/maxresdefault.jpg'); background-size: cover; background-position: center; border: 1px solid rgba(251,146,60,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: transform 0.3s ease;">
                            <!-- Floating Play Button -->
                            <div style="width: 80px; height: 80px; background: var(--accent-orange); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(251,146,60,0.6); z-index: 2;">
                                <i class="fas fa-play" style="color: black; font-size: 2rem; margin-left: 5px;"></i>
                            </div>
                            <!-- Bottom Info Bar -->
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(251, 146, 60, 0.9); padding: 12px; text-align: center; backdrop-filter: blur(10px);">
                                <p style="margin: 0; color: black; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px;">WATCH ON YOUTUBE <i class="fas fa-external-link-alt" style="font-size: 0.8rem; margin-left: 8px;"></i></p>
                            </div>
                        </div>
                    </a>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Light Reactions & Calvin Cycle (Amoeba Sisters / Advanced Curation)</p>
                </div>
            </div>
        `
    },

    "ch3-3": {
        title: "8.1: Cellular Respiration",
        subtitle: "Glycolysis, Krebs Cycle, Oxidative Phosphorylation, and ATP Accounting",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-orange); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-orange); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Glycolysis</strong> — Splitting of glucose (6C) into 2 pyruvate (3C) in the cytoplasm; yields 2 ATP and 2 NADH. Anaerobic.</div>
                        <div><strong>Krebs Cycle</strong> — Acetyl-CoA (2C) is oxidized in the mitochondrial matrix; yields CO₂, NADH, FADH₂, and 2 ATP per glucose.</div>
                        <div><strong>Electron Transport Chain (ETC)</strong> — Electrons from NADH/FADH₂ pass through protein complexes in the inner mitochondrial membrane, pumping H⁺.</div>
                        <div><strong>Oxidative Phosphorylation</strong> — ATP synthesis powered by the H⁺ gradient flowing through ATP synthase; yields ~26-28 ATP.</div>
                        <div><strong>Fermentation</strong> — Anaerobic pathway regenerating NAD⁺ when O₂ is absent; produces ethanol (yeast) or lactate (muscles).</div>
                        <div><strong>NAD⁺/NADH</strong> — Electron carrier; NAD⁺ is oxidized form, NADH is reduced (carries 2e⁻ + H⁺).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Respiration Is Controlled Combustion</h3>
                    <p>Burning glucose in a fire releases all its energy as heat — instantly and wastefully. Cellular respiration does the same chemistry ($C_6H_{12}O_6 + 6O_2 → 6CO_2 + 6H_2O$) but in <strong>many small steps</strong>, capturing ~34% of the energy as ATP. The rest is still released as heat (which is why you're warm!).</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: THE MITOCHONDRIAL TURBINE (ETC) -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #451a03 0%, #0c0a09 100%); border: 2px solid var(--accent-orange); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(251,146,60,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-orange); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-orange); padding-bottom: 8px; margin: 0;">Metabolic Powerhouse & ETC</h4>
                        <svg viewBox="0 0 500 180" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- Inner Membrane Boundary -->
                            <path d="M 0 120 Q 250 100 500 120" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4" />
                            
                            <!-- ETC Complexes -->
                            <g transform="translate(80, 110)">
                                <rect x="-20" y="-30" width="40" height="60" rx="5" fill="#1e293b" stroke="var(--accent-orange)" stroke-width="2" />
                                <text x="0" y="45" fill="#888" font-size="7" text-anchor="middle">Complex I</text>
                                <!-- Proton Pumping -->
                                <circle cx="0" cy="0" r="3" fill="var(--accent-cyan)">
                                    <animate attributeName="cy" values="0;-60" dur="1s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
                                </circle>
                            </g>
                            
                            <g transform="translate(200, 110)">
                                <rect x="-20" y="-30" width="40" height="60" rx="5" fill="#1e293b" stroke="var(--accent-orange)" stroke-width="2" />
                            </g>
                            
                            <!-- ATP Synthase Turbine -->
                            <g transform="translate(380, 110)">
                                <path d="M -25 -40 L 25 -40 L 15 20 L -15 20 Z" fill="var(--accent-amber)" opacity="0.8">
                                    <animateTransform attributeName="transform" type="rotate" values="0 0 -10; 360 0 -10" dur="2s" repeatCount="indefinite" />
                                </path>
                                <text x="0" y="45" fill="var(--accent-amber)" font-size="8" text-anchor="middle" font-weight="bold">ATP SYNTHASE</text>
                                <!-- Flowing Protons IN -->
                                <circle cx="0" cy="-70" r="3" fill="var(--accent-cyan)">
                                    <animate attributeName="cy" values="-70; -30" dur="1s" repeatCount="indefinite" />
                                </circle>
                            </g>

                            <!-- Electron Flow Path -->
                            <path d="M 50 110 L 350 110" fill="none" stroke="var(--accent-amber)" stroke-width="1.5" stroke-dasharray="4 4">
                                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
                            </path>
                        </svg>
                        <p style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">The Proton Motive Force: Converting electron kinetic energy into a chemical gradient and finally into molecular torque (ATP).</p>
                    </div>
                </div>

                <!-- VISUAL DYNAMIC: RESPIRATION FLOW -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-orange); margin-bottom: 20px; text-align: center;"><i class="fas fa-battery-full"></i> Visual Dynamic: The ATP Production Workflow</h5>
                    <div style="display: flex; justify-content: center; align-items: center; gap: 20px; min-height: 200px;">
                        <svg viewBox="0 0 500 150" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- Stage 1 -->
                            <rect x="20" y="40" width="100" height="70" rx="10" fill="rgba(255,255,255,0.05)" stroke="white" stroke-width="1" />
                            <text x="70" y="70" fill="white" font-size="10" text-anchor="middle">GLYCOLYSIS</text>
                            <text x="70" y="85" fill="#aaa" font-size="8" text-anchor="middle">Cytoplasm</text>
                            
                            <!-- Stage 2 -->
                            <rect x="180" y="40" width="100" height="70" rx="10" fill="rgba(251,146,60,0.1)" stroke="var(--accent-orange)" stroke-width="2" />
                            <text x="230" y="70" fill="var(--accent-orange)" font-size="10" text-anchor="middle" font-weight="bold">KREBS CYCLE</text>
                            <text x="230" y="85" fill="#aaa" font-size="8" text-anchor="middle">Matrix</text>
                            
                            <!-- Stage 3 -->
                            <rect x="340" y="40" width="140" height="70" rx="10" fill="rgba(16,185,129,0.1)" stroke="var(--accent-emerald)" stroke-width="2" />
                            <text x="410" y="70" fill="var(--accent-emerald)" font-size="10" text-anchor="middle" font-weight="bold">ETC / OX-PHOS</text>
                            <text x="410" y="85" fill="#aaa" font-size="8" text-anchor="middle">Inner Membrane</text>
                            
                            <!-- Connectors -->
                            <path d="M 120 75 L 180 75" marker-end="url(#arrow)" stroke="white" stroke-width="1.5" />
                            <path d="M 280 75 L 340 75" marker-end="url(#arrow)" stroke="white" stroke-width="1.5" />
                            
                            <!-- ATP Yields -->
                            <text x="70" y="130" fill="var(--accent-cyan)" font-size="9" text-anchor="middle">2 ATP</text>
                            <text x="230" y="130" fill="var(--accent-cyan)" font-size="9" text-anchor="middle">2 ATP</text>
                            <text x="410" y="130" fill="var(--accent-cyan)" font-size="10" text-anchor="middle" font-weight="bold">~28 ATP</text>
                        </svg>
                    </div>
                </div>

                <h2>I. The Four Stages</h2>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.85rem;">
                        <tr style="background: rgba(251,146,60,0.2);">
                            <th style="padding:10px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Stage</th>
                            <th style="padding:10px; text-align:center;">Location</th>
                            <th style="padding:10px; text-align:center;">Input</th>
                            <th style="padding:10px; text-align:center;">Output (per glucose)</th>
                            <th style="padding:10px; text-align:center;">O₂ needed?</th>
                        </tr>
                        <tr><td style="padding:8px;"><strong>Glycolysis</strong></td><td style="padding:8px; text-align:center;">Cytoplasm</td><td style="padding:8px; text-align:center;">Glucose</td><td style="padding:8px; text-align:center;">2 pyruvate, 2 ATP, 2 NADH</td><td style="padding:8px; text-align:center; color:var(--accent-green);">No</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;"><strong>Pyruvate Oxidation</strong></td><td style="padding:8px; text-align:center;">Mito. matrix</td><td style="padding:8px; text-align:center;">2 Pyruvate</td><td style="padding:8px; text-align:center;">2 Acetyl-CoA, 2 CO₂, 2 NADH</td><td style="padding:8px; text-align:center;">Yes</td></tr>
                        <tr><td style="padding:8px;"><strong>Krebs Cycle</strong></td><td style="padding:8px; text-align:center;">Mito. matrix</td><td style="padding:8px; text-align:center;">2 Acetyl-CoA</td><td style="padding:8px; text-align:center;">4 CO₂, 6 NADH, 2 FADH₂, 2 ATP</td><td style="padding:8px; text-align:center;">Yes</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;"><strong>ETC / Ox. Phos.</strong></td><td style="padding:8px; text-align:center;">Inner mito. membrane</td><td style="padding:8px; text-align:center;">10 NADH, 2 FADH₂</td><td style="padding:8px; text-align:center;">~26-28 ATP, H₂O</td><td style="padding:8px; text-align:center;">Yes (final e⁻ acceptor)</td></tr>
                    </table>
                </div>

                <p><strong>Total ATP per glucose:</strong> 2 + 2 + ~28 = <strong>~30-32 ATP</strong> (varies by shuttle system used).</p>

                <h2>II. Why Does the Cell Need O₂?</h2>

                <p>Oxygen is the <strong>final electron acceptor</strong> in the ETC. Without it, electrons have nowhere to go, the ETC stops, NADH cannot be recycled to NAD⁺, and the Krebs Cycle halts. The cell falls back to fermentation (glycolysis only = 2 ATP), which is ~15x less efficient.</p>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: Photosynthesis ↔ Respiration Mirror</h4>
                    <p>Photosynthesis and respiration are essentially <strong>reverse processes</strong>: photosynthesis builds glucose and releases O₂; respiration breaks down glucose and consumes O₂. Both use ETCs and chemiosmosis. Both use ATP synthase. The key difference: photosynthesis stores energy in bonds; respiration releases it.</p>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-orange);">
                    <h5 style="color: var(--accent-orange); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: ATP Accounting</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">If a muscle cell has no oxygen, how much ATP can it produce from one glucose? What about with oxygen?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-orange); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Without O₂ (anaerobic):</strong> Only glycolysis runs → <strong>2 ATP</strong> per glucose. Pyruvate is converted to lactate to regenerate NAD⁺.</div>
                            <div><strong>With O₂ (aerobic):</strong> Glycolysis + Krebs + ETC → <strong>~30-32 ATP</strong> per glucose.</div>
                            <div style="margin-top:8px; color:var(--accent-orange); font-style:italic;">Aerobic respiration is ~15-16x more efficient. This is why you breathe harder during exercise — your muscles need O₂ to maintain high ATP output.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-orange); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Glycolysis (cytoplasm, anaerobic): glucose → 2 pyruvate + 2 ATP + 2 NADH.</li>
                        <li>Krebs Cycle (matrix): acetyl-CoA fully oxidized → CO₂ + NADH + FADH₂ + 2 ATP.</li>
                        <li>ETC (inner membrane): NADH/FADH₂ donate electrons → H⁺ gradient → ATP synthase → ~28 ATP.</li>
                        <li>O₂ is the final electron acceptor; without it, only fermentation (2 ATP) is possible.</li>
                        <li>Total aerobic yield: ~30-32 ATP per glucose.</li>
                    </ul>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-orange); padding: 30px;">
                    <h5 style="color: var(--accent-orange); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Cellular Respiration Details</h5>
                    <a href="https://www.youtube.com/watch?v=4Eo7JtRA7lg" target="_blank" style="text-decoration: none; display: block;">
                        <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://img.youtube.com/vi/4Eo7JtRA7lg/maxresdefault.jpg'); background-size: cover; background-position: center; border: 1px solid rgba(251,146,60,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: transform 0.3s ease;">
                            <!-- Floating Play Button -->
                            <div style="width: 80px; height: 80px; background: var(--accent-orange); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(251,146,60,0.6); z-index: 2;">
                                <i class="fas fa-play" style="color: black; font-size: 2rem; margin-left: 5px;"></i>
                            </div>
                            <!-- Bottom Info Bar -->
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(251, 146, 60, 0.9); padding: 12px; text-align: center; backdrop-filter: blur(10px);">
                                <p style="margin: 0; color: black; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px;">WATCH ON YOUTUBE <i class="fas fa-external-link-alt" style="font-size: 0.8rem; margin-left: 8px;"></i></p>
                            </div>
                        </div>
                    </a>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Cellular Respiration (Amoeba Sisters / Advanced Curation)</p>
                </div>
            </div>
        `
    }
};
