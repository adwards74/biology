window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch6"] = {
    "ch6-1": {
        title: "15.1 Pipeline Engineering: Handling Raw Bio-Data",
        subtitle: "High-Throughput Sequencing Workflow & QC Analysis",
        content: `
            <div class="lesson-section">
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-blue); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-blue); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>FASTQ</strong> — Standard file format for storing both biological sequences and their quality scores.</div>
                        <div><strong>Read Trimming</strong> — Process of removing low-quality bases or adapter sequences from the ends of reads.</div>
                        <div><strong>NGS (Next-Gen Sequencing)</strong> — High-throughput technology allowing millions of DNA fragments to be sequenced in parallel.</div>
                        <div><strong>Alignment</strong> — Mapping raw reads to a reference genome to determine their genomic origin.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-color: var(--accent-blue);">
                    <h3><i class="fas fa-filter"></i> Big Idea: Data Purification (The Pipeline Logic)</h3>
                    <p>Modern raw biological data is a massive collection of noisy sequences. Using Python to filter low-quality reads (QC) and align them to a reference genome is like <strong>'mining for diamonds'</strong> in raw ore. In the Elite 5.5 bioinformatics suite, we treat data as a liquid flow that must be purified before analysis.</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: THE NGS DATA PIPELINE -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #1e3a8a 0%, #0c0a09 100%); border: 2px solid var(--accent-blue); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(59,130,246,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-blue); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-blue); padding-bottom: 8px; margin: 0;">Bioinformatics Data Flow</h4>
                        <svg viewBox="0 0 400 120" style="max-width: 500px; width: 100%; height: auto;">
                            <!-- Pipeline Pipe -->
                            <rect x="20" y="50" width="360" height="20" rx="10" fill="rgba(255,255,255,0.05)" stroke="var(--accent-blue)" stroke-width="1" />
                            
                            <!-- Processing Units -->
                            <g transform="translate(60, 60)">
                                <circle r="8" fill="var(--accent-blue)" />
                                <text x="0" y="25" fill="#888" font-size="7" text-anchor="middle">QC / TRIMMING</text>
                            </g>
                            <g transform="translate(200, 60)">
                                <circle r="8" fill="var(--accent-cyan)" />
                                <text x="0" y="25" fill="#888" font-size="7" text-anchor="middle">ALIGNMENT</text>
                            </g>
                            <g transform="translate(340, 60)">
                                <circle r="8" fill="var(--accent-emerald)" />
                                <text x="0" y="25" fill="#888" font-size="7" text-anchor="middle">VARIANT CALLING</text>
                            </g>

                            <!-- Data Particles -->
                            <circle r="3" fill="var(--accent-cyan)">
                                <animateMotion path="M 20 60 L 380 60" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle r="2" fill="white" opacity="0.5">
                                <animateMotion path="M 20 60 L 380 60" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                            </circle>
                        </svg>
                        <p style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">From Raw Reads to Biological Insights: The Systematic Reduction of Complexity.</p>
                    </div>
                </div>

                <h2>II. Advanced Processing: Motif Finding</h2>
                <div class="code-block-container glass">
                    <pre style="background:rgba(0,0,0,0.3); padding:15px; font-size:0.85rem; border-left: 2px solid var(--accent-blue);">
<code># Searching for regulatory motifs (e.g., TATA Box) using Python Regex
import re

sequence = "ATGCGTACGACTATAAAAGCTAG"
# Standard TATA Box motif: TATA(A/T)A(A/T)
motif_pattern = r"TATA[AT]A[AT]"

match = re.search(motif_pattern, sequence)
if match:
    print(f"Motif detected at index: {match.start()}")
    print(f"Subsequence matched: {match.group()}")</code></pre>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: FASTA vs. FASTQ</h4>
                    <p>While FASTA only stores the sequence, <strong>FASTQ</strong> stores the 'Phred Confidence Score' for every single base. In high-precision research, we discard any read where the average Phred score is below 30 (99.9% accuracy), ensuring our 'Data Sieve' only passes the truth.</p>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (EMBEDDED) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-blue); padding: 30px;">
                    <h5 style="color: var(--accent-blue); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: What is Bioinformatics?</h5>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--standard-radius); box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(59,130,246,0.3);">
                        <iframe src="https://www.youtube-nocookie.com/embed/mX4a7I2j20A?rel=0&modestbranding=1" title="Bioinformatics Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Beginner's Guide to Bioinformatics (Enago Academy)</p>
                </div>
            </div>
        `
    },
    "ch6-2": {
        title: "15.2 Comparative Analysis: The BLAST Algorithm",
        subtitle: "Uncovering Homology & Evolutionary Links",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-color: var(--accent-cyan);">
                    <h3><i class="fas fa-tachometer-alt"></i> Big Idea: Speed vs. Accuracy (Heuristics)</h3>
                    <p>Comparing every sequence bit-by-bit against a global database is computationally impossible. <strong>BLAST</strong> (Basic Local Alignment Search Tool) uses a heuristic approach: it breaks sequences into short 'Words' to find seeds, then extends them to find alignments.</p>
                </div>

                <div class="visual-dynamics glass" style="margin:20px 0; padding:20px; text-align:center; background:rgba(0,163,255,0.05); border: 1px solid var(--accent-cyan); border-radius: var(--standard-radius);">
                    <h4><i class="fas fa-search-plus"></i> The Seed-and-Extend Logic</h4>
                    <svg viewBox="0 0 300 120" style="max-width: 400px; width:100%; height:auto;">
                        <!-- Query Sequence -->
                        <text x="10" y="30" fill="rgba(255,255,255,0.5)" font-size="10">Query:</text>
                        <rect x="50" y="20" width="200" height="15" fill="rgba(255,255,255,0.1)" rx="2"/>
                        <rect x="120" y="20" width="30" height="15" fill="var(--accent-cyan)"/> <!-- SEED -->
                        
                        <!-- Subject Sequence -->
                        <text x="10" y="80" fill="rgba(255,255,255,0.5)" font-size="10">Subject:</text>
                        <rect x="50" y="70" width="200" height="15" fill="rgba(255,255,255,0.1)" rx="2"/>
                        <rect x="120" y="70" width="30" height="15" fill="var(--accent-cyan)"/> <!-- SEED MATCH -->
                        
                        <!-- Extension Arrows -->
                        <path d="M 120,45 L 80,45" fill="none" stroke="var(--accent-magenta)" stroke-width="1.5" stroke-dasharray="3" />
                        <path d="M 150,45 L 190,45" fill="none" stroke="var(--accent-magenta)" stroke-width="1.5" stroke-dasharray="3" />
                        
                        <text x="110" y="58" fill="var(--accent-magenta)" font-size="8">Extend Left</text>
                        <text x="155" y="58" fill="var(--accent-magenta)" font-size="8">Extend Right</text>
                        <text x="125" y="15" fill="var(--accent-cyan)" font-size="8" font-weight="bold">SEED (Word)</text>
                    </svg>
                    <p style="font-size:0.8rem; margin-top:10px; opacity:0.8;">BLAST first finds an exact match for a short "word" (Seed), then extends it to find High-scoring Segment Pairs (HSPs).</p>
                </div>

                <h2>II. E-value: Chance or Truth?</h2>
                <p>The most critical metric in BLAST results is the <strong>Expect Value (E-value)</strong>. It represents the number of hits one can expect to see by sheer chance in a database of a certain size.</p>

                <div class="glass-card elite-border" style="background:rgba(255,0,0,0.05); border-left: 4px solid var(--accent-red);">
                    <h5><i class="fas fa-exclamation-triangle"></i> Elite Threshold</h5>
                    <p>Typically, an <strong>$E < 10^{-5}$</strong> is considered statistically significant for homology. $E=0.0$ implies the probability of a random match is nearly zero—indicating a true evolutionary relationship.</p>
                </div>

                <div class="practice-section glass" style="margin-top:30px; padding:20px; border-left: 4px solid var(--accent-purple);">
                    <h5 style="color:var(--accent-cyan);"><i class="fas fa-edit"></i> Mastery Check</h5>
                    <p><strong>Q.</strong> Which scoring matrix is used to account for biological substitution probabilities during alignment?</p>
                    <details class="glass-details" style="margin-top: 10px; cursor:pointer;">
                        <summary style="color: var(--accent-purple); font-weight: 700;">Show Answer</summary>
                        <p style="margin-top:10px;"><strong>BLOSUM62</strong> (Blocks Substitution Matrix) is the industry standard for protein alignment.</p>
                    </details>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS (EMBEDDED) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-cyan); padding: 30px;">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: How BLAST Works</h5>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--standard-radius); box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(6,182,212,0.3);">
                        <iframe src="https://www.youtube-nocookie.com/embed/Z7e_mY6Y7kM?rel=0&modestbranding=1" title="BLAST Algorithm" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                    </div>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: Understanding BLAST (Bioinformatics Lab)</p>
                </div>
            </div>
        `
    },
};
