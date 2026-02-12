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
            </div>
        `
    }
};
