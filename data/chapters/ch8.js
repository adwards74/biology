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
