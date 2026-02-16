window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 8: ECOSYSTEM DYNAMICS
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch8"] = {

    "ch8-1": {
        title: "14.1: Energy Flow Networks",
        subtitle: "Trophic Levels, Food Webs, and the 10% Rule",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Trophic Level</strong> — Position in a food chain: producers (1st), primary consumers (2nd), secondary consumers (3rd), etc.</div>
                        <div><strong>10% Rule</strong> — Only ~10% of energy at one trophic level transfers to the next; ~90% is lost as heat via cellular respiration.</div>
                        <div><strong>Primary Productivity</strong> — Rate at which producers convert solar energy to chemical energy (biomass).</div>
                        <div><strong>GPP vs. NPP</strong> — Gross Primary Productivity = total photosynthesis. Net = GPP − respiration. NPP is energy available to consumers.</div>
                        <div><strong>Biogeochemical Cycles</strong> — Pathways by which chemical elements cycle through biotic and abiotic components (Carbon, Nitrogen, Water, Phosphorus).</div>
                        <div><strong>Keystone Species</strong> — A species whose removal causes disproportionate ecosystem collapse (e.g., sea otters, wolves).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Energy Flows, Matter Cycles</h3>
                    <p>This is the most fundamental principle in ecology: <strong>Energy flows in one direction</strong> (sun → producers → consumers → heat) and cannot be recycled. <strong>Matter cycles</strong> — carbon, nitrogen, water, and phosphorus are continuously recycled through ecosystems. The 10% rule explains why top predators are rare: by the 4th trophic level, only 0.1% of the original energy remains.</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: THE ENERGY pyramid -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #064e3b 0%, #020617 100%); border: 2px solid var(--accent-emerald); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(16,185,129,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-emerald); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-emerald); padding-bottom: 8px; margin: 0;">Ecological Energy Dynamics</h4>
                        <svg viewBox="0 0 400 200" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- Trophic Pyramid Layers -->
                            <!-- Layer 1 (Producers) -->
                            <path d="M 50 180 L 350 180 L 320 140 L 80 140 Z" fill="rgba(16,185,129,0.4)" stroke="var(--accent-emerald)" stroke-width="1" />
                            <text x="50%" y="165" fill="white" font-size="10" text-anchor="middle" font-weight="bold">PRODUCERS (10,000 kJ)</text>
                            
                            <!-- Layer 2 (Primary) -->
                            <path d="M 80 140 L 320 140 L 290 100 L 110 100 Z" fill="rgba(16,185,129,0.2)" stroke="var(--accent-emerald)" stroke-width="1" />
                            <text x="50%" y="125" fill="white" font-size="9" text-anchor="middle">PRIMARY (1,000 kJ)</text>
                            
                            <!-- Layer 3 (Secondary) -->
                            <path d="M 110 100 L 290 100 L 260 60 L 140 60 Z" fill="rgba(16,185,129,0.1)" stroke="var(--accent-emerald)" stroke-width="1" />
                            <text x="50%" y="85" fill="white" font-size="8" text-anchor="middle">SECONDARY (100 kJ)</text>
                            
                            <!-- Layer 4 (Tertiary) -->
                            <path d="M 140 60 L 260 60 L 200 20 Z" fill="rgba(245,158,11,0.2)" stroke="var(--accent-amber)" stroke-width="1" />
                            <text x="50%" y="50" fill="var(--accent-amber)" font-size="8" text-anchor="middle" font-weight="bold">TERTIARY (10 kJ)</text>
                            
                            <!-- Energy Loss Arrows -->
                            <path d="M 330 160 Q 380 150 380 120" fill="none" stroke="var(--accent-red)" stroke-width="1" stroke-dasharray="4 2">
                                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />
                            </path>
                            <text x="385" y="115" fill="var(--accent-red)" font-size="8" transform="rotate(0)">HEAT LOSS (90%)</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">The 10% Rule: Thermodynamics dictates that entropy increases at every biological transfer point.</p>
                    </div>
                </div>

                <h2>I. Energy Transfer Through Trophic Levels</h2>
                <p>Consider a food chain: <strong>Grass → Grasshopper → Frog → Snake → Hawk</strong></p>
                <ul style="line-height: 2;">
                    <li>If grass captures <strong>10,000 kJ</strong> of solar energy:</li>
                    <li>Grasshoppers receive: ~1,000 kJ</li>
                    <li>Frogs receive: ~100 kJ</li>
                    <li>Snakes receive: ~10 kJ</li>
                    <li>Hawks receive: ~1 kJ</li>
                </ul>
                <p>This is why <strong>ecological pyramids</strong> taper upward — less energy, less biomass, fewer organisms at higher levels.</p>

                <h2>II. Nutrient Cycling</h2>
                <p>Unlike energy, matter is conserved and recycled:</p>
                <ul style="line-height: 2;">
                    <li><strong>Carbon Cycle:</strong> CO₂ fixed by photosynthesis → organic compounds → returned by respiration, decomposition, combustion.</li>
                    <li><strong>Nitrogen Cycle:</strong> N₂ fixed by bacteria → NH₃ → NO₃⁻ (nitrification) → absorbed by plants → returned by denitrification.</li>
                    <li><strong>Phosphorus Cycle:</strong> No atmospheric phase; cycles through rocks → soil → organisms → sediment.</li>
                </ul>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: Trophic Cascades</h4>
                    <p>When a top predator is removed, the effects cascade down the food web. The reintroduction of wolves to Yellowstone (1995) reduced elk populations, allowing vegetation to recover along riverbanks, which reduced erosion and even changed the course of rivers. This is a <strong>trophic cascade</strong> — proof that top predators shape entire ecosystems.</p>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Energy flows one direction and is lost as heat at each trophic level (~10% transfer efficiency).</li>
                        <li>Matter (C, N, P, H₂O) cycles through biotic and abiotic components continuously.</li>
                        <li>NPP = GPP − Respiration = energy available to consumers.</li>
                        <li>Keystone species have outsized effects on ecosystem structure.</li>
                        <li>Trophic cascades demonstrate top-down regulation of ecosystems.</li>
                    </ul>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-emerald); padding: 30px;">
                    <h5 style="color: var(--accent-emerald); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Ecosystem Dynamics & Energy Flow</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3);">
                        <iframe 
                            src="https://www.youtube.com/embed/v6mtJbB5C28" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Ecosystem Ecology (Bozeman Science / Advanced Curation)</p>
                </div>
            </div>
        `
    },

    "ch8-2": {
        title: "14.2: Biodiversity & Resilience",
        subtitle: "Species Diversity, Community Interactions, and Ecosystem Stability",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Species Richness</strong> — The number of different species present in a community.</div>
                        <div><strong>Species Evenness</strong> — How equally individuals are distributed among species.</div>
                        <div><strong>Shannon Diversity Index</strong> — H = −Σ(pᵢ × ln pᵢ); higher H = more diverse.</div>
                        <div><strong>Ecological Succession</strong> — Predictable change in community composition over time (primary and secondary).</div>
                        <div><strong>Mutualism</strong> — Both species benefit (e.g., mycorrhizae + plant roots).</div>
                        <div><strong>Competitive Exclusion</strong> — Two species competing for identical resources cannot coexist indefinitely (Gause's Principle).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Diversity = Stability</h3>
                    <p>Ecosystems with <strong>higher biodiversity are more resilient</strong> to disturbance. If one species disappears, others can fill its ecological role. Monocultures (low diversity) are vulnerable — think of the Irish potato famine. This principle underlies conservation biology and explains why protecting biodiversity is protecting ecosystem function.</p>
                </div>

                <h2>I. Community Interactions</h2>
                <p>Species in a community interact in several ways:</p>
                <ul style="line-height: 2;">
                    <li><strong>Predation (+/−):</strong> One species consumes another. Drives natural selection and population dynamics.</li>
                    <li><strong>Competition (−/−):</strong> Both species harmed by sharing limited resources. Leads to niche partitioning.</li>
                    <li><strong>Mutualism (+/+):</strong> Both species benefit (e.g., pollinators and flowers).</li>
                    <li><strong>Parasitism (+/−):</strong> One benefits at the other's expense (e.g., tapeworms).</li>
                    <li><strong>Commensalism (+/0):</strong> One benefits, the other is unaffected (e.g., barnacles on whales).</li>
                </ul>

                <h2>II. Ecological Succession</h2>
                <ul style="line-height: 2;">
                    <li><strong>Primary Succession:</strong> Occurs on bare substrate (volcanic rock, glacial retreat). Pioneer species (lichens, mosses) colonize first.</li>
                    <li><strong>Secondary Succession:</strong> Occurs after disturbance that doesn't destroy soil (fire, farming). Faster recovery because soil and seed bank remain.</li>
                </ul>

                <h2>III. Measuring Biodiversity</h2>
                <p>The <strong>Shannon Diversity Index (H)</strong> combines richness and evenness:</p>
                <p style="text-align: center; font-size: 1.1rem; margin: 20px 0;"><strong>H = −Σ(pᵢ × ln pᵢ)</strong></p>
                <p>Where pᵢ = proportion of individuals belonging to species <em>i</em>. Higher H indicates greater diversity.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Community interactions: predation, competition, mutualism, parasitism, commensalism.</li>
                        <li>Competitive exclusion → niche partitioning allows coexistence.</li>
                        <li>Succession: primary (bare rock) vs. secondary (post-disturbance with soil intact).</li>
                        <li>Shannon Diversity Index measures biodiversity; higher H = more diverse and stable.</li>
                    </ul>
                </div>
            </div>
        `
    }
};
