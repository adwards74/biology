window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 4: THE GENETIC ALGORITHM — Textbook-Grade
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch4"] = {

    "ch4-1": {
        title: "9.1: The Laws of Segregation",
        subtitle: "Mendelian Genetics — Mono/Dihybrid Crosses, Punnett Squares, and Probability",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-purple); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Gene</strong> — A segment of DNA that codes for a specific protein or trait.</div>
                        <div><strong>Allele</strong> — A variant form of a gene (e.g., B = brown eyes, b = blue eyes).</div>
                        <div><strong>Homozygous</strong> — Two identical alleles (BB or bb).</div>
                        <div><strong>Heterozygous</strong> — Two different alleles (Bb); the dominant allele is expressed.</div>
                        <div><strong>Genotype</strong> — The genetic makeup (e.g., Bb).</div>
                        <div><strong>Phenotype</strong> — The observable trait (e.g., brown eyes).</div>
                        <div><strong>Law of Segregation</strong> — During gamete formation, the two alleles for a gene separate so each gamete gets only one.</div>
                        <div><strong>Law of Independent Assortment</strong> — Genes on different chromosomes sort independently during meiosis.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Genetics Is Probability, Not Destiny</h3>
                    <p>Mendel's genius was treating inheritance as a <strong>statistical problem</strong>. A Punnett square doesn't tell you what a specific offspring WILL be — it tells you the <strong>probability distribution</strong> of all possible outcomes. With enough offspring, observed ratios converge on predicted ratios (Law of Large Numbers).</p>
                </div>

                <h2>I. Monohybrid Cross: One Gene, Two Alleles</h2>

                <p>Cross: <strong>Bb × Bb</strong> (both parents heterozygous)</p>

                <div style="font-family:'JetBrains Mono',monospace; background:rgba(0,0,0,0.3); padding:15px; border-radius:8px; margin:15px 0; text-align:center; font-size:0.95rem;">
                    <div style="display:grid; grid-template-columns:60px 1fr 1fr; gap:2px; max-width:300px; margin:0 auto;">
                        <div></div><div style="padding:8px; background:rgba(139,92,246,0.2);"><strong>B</strong></div><div style="padding:8px; background:rgba(139,92,246,0.2);"><strong>b</strong></div>
                        <div style="padding:8px; background:rgba(139,92,246,0.2);"><strong>B</strong></div><div style="padding:8px; background:rgba(255,255,255,0.05);">BB</div><div style="padding:8px; background:rgba(255,255,255,0.05);">Bb</div>
                        <div style="padding:8px; background:rgba(139,92,246,0.2);"><strong>b</strong></div><div style="padding:8px; background:rgba(255,255,255,0.05);">Bb</div><div style="padding:8px; background:rgba(255,255,255,0.05);">bb</div>
                    </div>
                </div>

                <p><strong>Genotype ratio:</strong> 1 BB : 2 Bb : 1 bb<br>
                <strong>Phenotype ratio:</strong> 3 dominant : 1 recessive (the classic <strong>3:1 ratio</strong>)</p>

                <h2>II. Dihybrid Cross: Two Genes</h2>

                <p>Cross: <strong>BbEe × BbEe</strong>. Each parent produces 4 gamete types: BE, Be, bE, be.</p>
                <p>Expected phenotype ratio: <strong>9:3:3:1</strong></p>
                <ul style="line-height: 2;">
                    <li>9/16 — Both dominant (B_E_)</li>
                    <li>3/16 — First dominant only (B_ee)</li>
                    <li>3/16 — Second dominant only (bbE_)</li>
                    <li>1/16 — Both recessive (bbee)</li>
                </ul>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-purple);">
                    <h5 style="color: var(--accent-purple); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Probability Shortcut</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">In the cross AaBbCc × AaBbCc, what is the probability of offspring with genotype aaBbCC?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-purple); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> Treat each gene independently (Law of Independent Assortment).</div>
                            <div>P(aa from Aa × Aa) = 1/4</div>
                            <div>P(Bb from Bb × Bb) = 2/4 = 1/2</div>
                            <div>P(CC from Cc × Cc) = 1/4</div>
                            <div><strong>Step 2:</strong> Multiply: 1/4 × 1/2 × 1/4 = <strong>1/32</strong></div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Monohybrid cross (Aa × Aa): genotype 1:2:1, phenotype 3:1.</li>
                        <li>Dihybrid cross (AaBb × AaBb): phenotype 9:3:3:1.</li>
                        <li>Use the multiplication rule for multi-gene probability (treat each gene independently).</li>
                        <li>Law of Segregation: alleles separate during gamete formation.</li>
                        <li>Law of Independent Assortment: genes on different chromosomes sort independently.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch4-3": {
        title: "10.1: Chromosomal Linkage & Mapping",
        subtitle: "Linked Genes, Recombination Frequency, and Genetic Maps",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-purple); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Linked Genes</strong> — Genes located on the same chromosome; tend to be inherited together.</div>
                        <div><strong>Crossing Over</strong> — Exchange of genetic material between homologous chromosomes during meiosis I; separates linked genes.</div>
                        <div><strong>Recombination Frequency (RF)</strong> — Percentage of offspring showing recombinant phenotypes; indicates distance between genes.</div>
                        <div><strong>Map Unit (centimorgan, cM)</strong> — 1% recombination frequency = 1 map unit of distance between genes.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Breaking Mendel's Second Law</h3>
                    <p>Mendel's Law of Independent Assortment only works for genes on <strong>different chromosomes</strong>. When two genes are on the <strong>same chromosome</strong>, they travel together unless crossing over physically separates them. The closer two genes are, the less likely crossing over occurs between them — and this gives us a way to <strong>map gene positions</strong>.</p>
                </div>

                <h2>I. Linked vs. Unlinked Genes</h2>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(139,92,246,0.2);">
                            <th style="padding:12px; text-align:left;">Feature</th>
                            <th style="padding:12px; text-align:center;">Unlinked (different chromosomes)</th>
                            <th style="padding:12px; text-align:center;">Linked (same chromosome)</th>
                        </tr>
                        <tr><td style="padding:10px;">Expected dihybrid ratio</td><td style="padding:10px; text-align:center;">9:3:3:1</td><td style="padding:10px; text-align:center;">Mostly parental types, few recombinant</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;">RF</td><td style="padding:10px; text-align:center;">50% (independent)</td><td style="padding:10px; text-align:center;">0-50% (closer = lower)</td></tr>
                        <tr><td style="padding:10px;">Recombinants produced by</td><td style="padding:10px; text-align:center;">Independent assortment</td><td style="padding:10px; text-align:center;">Crossing over only</td></tr>
                    </table>
                </div>

                <h2>II. Calculating Recombination Frequency</h2>

                <div class="proof-box glass">
                    <h4>The RF Formula</h4>
                    <p>$$RF = \\frac{\\text{Number of Recombinant Offspring}}{\\text{Total Offspring}} \\times 100\\%$$</p>
                    <p style="margin-top:10px; color:var(--accent-cyan); font-style:italic;">1% RF = 1 centimorgan (cM) = 1 map unit.</p>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-purple);">
                    <h5 style="color: var(--accent-purple); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Gene Mapping</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">In a testcross of AaBb × aabb: 410 AaBb, 395 aabb, 48 Aabb, 47 aaBb. (a) Are genes A and B linked? (b) What is the map distance?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-purple); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> Identify recombinants: Aabb (48) and aaBb (47) = 95 recombinants.</div>
                            <div><strong>Step 2:</strong> Total offspring: 410 + 395 + 48 + 47 = 900.</div>
                            <div><strong>Step 3:</strong> RF = 95/900 × 100 = <strong>10.6%</strong></div>
                            <div><strong>(a)</strong> Yes, linked — RF < 50% means the genes are on the same chromosome.</div>
                            <div><strong>(b)</strong> Map distance = <strong>10.6 cM</strong> apart.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Linked genes are on the same chromosome; they violate independent assortment.</li>
                        <li>Crossing over during meiosis I can separate linked genes → recombinant offspring.</li>
                        <li>RF = (recombinants / total) × 100%. Max RF = 50% (behaves as if unlinked).</li>
                        <li>1% RF = 1 map unit (centimorgan). Higher RF = genes are farther apart.</li>
                    </ul>
                </div>
            </div>
        `
    }
};
