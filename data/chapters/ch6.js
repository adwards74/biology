window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch6"] = {
    "ch6-1": {
        title: "13.1 Pipeline Engineering: Handling Raw Bio-Data",
        subtitle: "High-Throughput Sequencing Workflow",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-blue);">
                    <h3><i class="fas fa-filter"></i> Section I: Data Purification (The Pipeline Logic)</h3>
                    <p>Modern raw biological data is a massive collection of noisy sequences. Using Python to filter low-quality reads (QC) and align them to a reference genome is like 'mining for diamonds' in raw ore.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:rgba(0,0,0,0.2);">
                    <h4><i class="fas fa-stream"></i> Bio-Data Flow Simulation</h4>
                    <svg width="240" height="80" viewBox="0 0 240 80">
                        <rect x="10" y="20" width="50" height="30" rx="5" fill="rgba(255,255,255,0.1)" stroke="var(--accent-blue)"/>
                        <text x="20" y="40" fill="#fff" font-size="8">Raw FASTQ</text>
                        <line x1="60" y1="35" x2="80" y2="35" stroke="var(--accent-blue)" stroke-width="2"/>
                        <rect x="80" y="20" width="50" height="30" rx="5" fill="rgba(0,163,255,0.2)" stroke="var(--accent-cyan)"/>
                        <text x="95" y="40" fill="#fff" font-size="8">Trimming</text>
                        <line x1="130" y1="35" x2="150" y2="35" stroke="var(--accent-cyan)" stroke-width="2"/>
                        <rect x="150" y="20" width="60" height="30" rx="5" fill="var(--accent-blue)" stroke="var(--accent-cyan)"/>
                        <text x="162" y="40" fill="#fff" font-size="8">Alignment</text>
                    </svg>
                    <p style="font-size:0.75rem; margin-top:5px; opacity:0.7;">Quality Control (QC) is the foundation of every reliable NGS study.</p>
                </div>

                <h2>II. Advanced Processing: Motif Finding</h2>
                <div class="code-block-container glass">
                    <pre style="background:rgba(0,0,0,0.3); padding:15px; font-size:0.85rem;">
<code># Searching for specific motifs (e.g., TATA Box) using Regular Expressions
import re
sequence = "ATGCGTACGACTATAAAAGCTAG"
motif = re.search(r"TATA[AT]A[AT]", sequence)
if motif:
    print(f"Motif found at: {motif.start()} to {motif.end()}")</code></pre>
                </div>
            </div>
        `
    },
    "ch6-2": {
        title: "13.2 Comparative Analysis: The BLAST Algorithm",
        subtitle: "Uncovering Homology & Evolutionary Links",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-cyan);">
                    <h3><i class="fas fa-tachometer-alt"></i> Section I: Speed vs. Accuracy (Heuristics)</h3>
                    <p>Comparing every sequence bit-by-bit against a global database is impossible. <strong>BLAST</strong> uses a heuristic approach: it breaks sequences into short 'Words' to find seeds, then extends them to find alignments.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:rgba(0,163,255,0.05);">
                    <h4><i class="fas fa-search-plus"></i> The Seed-and-Extend Logic</h4>
                    <svg width="300" height="120" viewBox="0 0 300 120">
                        <!-- Query Sequence -->
                        <text x="10" y="30" fill="rgba(255,255,255,0.5)" font-size="10">Query:</text>
                        <rect x="50" y="20" width="200" height="15" fill="rgba(255,255,255,0.1)" rx="2"/>
                        <rect x="120" y="20" width="30" height="15" fill="var(--accent-cyan)"/> <!-- SEED -->
                        
                        <!-- Subject Sequence -->
                        <text x="10" y="80" fill="rgba(255,255,255,0.5)" font-size="10">Subject:</text>
                        <rect x="50" y="70" width="200" height="15" fill="rgba(255,255,255,0.1)" rx="2"/>
                        <rect x="120" y="70" width="30" height="15" fill="var(--accent-cyan)"/> <!-- SEED MATCH -->
                        
                        <!-- Extension Arrows -->
                        <path d="M 120,45 L 80,45 L 80,65 L 120,65" fill="transparent" stroke="var(--accent-magenta)" stroke-width="1.5" stroke-dasharray="3"/>
                        <path d="M 150,45 L 190,45 L 190,65 L 150,65" fill="transparent" stroke="var(--accent-magenta)" stroke-width="1.5" stroke-dasharray="3"/>
                        
                        <text x="110" y="58" fill="var(--accent-magenta)" font-size="8">Extend Left</text>
                        <text x="155" y="58" fill="var(--accent-magenta)" font-size="8">Extend Right</text>
                        <text x="125" y="15" fill="var(--accent-cyan)" font-size="8" font-weight="bold">SEED (Word)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px;">BLAST first finds an exact match for a short "word" (Seed), then extends it in both directions to see if the alignment continues (HSP).</p>
                </div>

                <h2>II. E-value: Chance or Truth?</h2>
                <p>The most critical metric in BLAST results is the **Expect Value (E-value)**. It represents the number of hits one can expect to see by sheer chance.</p>

                <div class="glass-card elite-border" style="background:rgba(255,0,0,0.05);">
                    <h5><i class="fas fa-exclamation-triangle"></i> Elite Threshold</h5>
                    <p>Typically, an $E < 10^{-5}$ is considered statistically significant for homology. $E=0.0$ implies the probability of a random match is nearly zero.</p>
                </div>

                <div class="practice-section glass" style="margin-top:20px; padding:15px;">
                    <h5 style="color:var(--accent-cyan);"><i class="fas fa-edit"></i> Practice Question</h5>
                    <p><strong>Q.</strong> Which scoring matrix is used to account for biological mutations during alignment? (Hint: B...)</p>
                    <details class="glass-details">
                        <summary>Show Answer</summary>
                        <p><strong>BLOSUM</strong> (BLOSUM62 is the industry standard).</p>
                    </details>
                </div>
            </div>
        `
    },
};
