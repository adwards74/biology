window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 2: MOLECULAR GENETICS — Textbook-Grade Expansion
// Replaces stub content in ch2_5.js for ch2-1, ch2-2, ch2-3
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch2"] = {

    "ch2-1": {
        title: "4.1: Source Code Structure",
        subtitle: "DNA Architecture, Nucleotide Chemistry, and Information Theory",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Nucleotide</strong> — The monomer of DNA/RNA: a phosphate group + a 5-carbon sugar + a nitrogenous base.</div>
                        <div><strong>Phosphodiester Bond</strong> — Covalent bond linking the 3′ hydroxyl of one sugar to the 5′ phosphate of the next; forms the backbone.</div>
                        <div><strong>Antiparallel</strong> — The two DNA strands run in opposite directions: one 5′→3′ and the other 3′→5′.</div>
                        <div><strong>Complementary Base Pairing</strong> — A pairs with T (2 H-bonds); C pairs with G (3 H-bonds). This is Chargaff's Rule.</div>
                        <div><strong>Purine</strong> — Double-ring nitrogenous base: Adenine (A) and Guanine (G).</div>
                        <div><strong>Pyrimidine</strong> — Single-ring nitrogenous base: Cytosine (C), Thymine (T), Uracil (U, in RNA only).</div>
                        <div><strong>Chromatin</strong> — DNA wrapped around histone proteins; the "storage form" of DNA in the nucleus.</div>
                        <div><strong>Chargaff's Rule</strong> — In any DNA molecule, %A = %T and %C = %G.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: DNA Is a Digital Storage Medium</h3>
                    <p>Computers store information in binary (0, 1). DNA stores information in a <strong>quaternary code</strong> (A, T, C, G). This 4-letter alphabet encodes every protein your body can build, every enzyme, every structural component. A single human cell contains about <strong>6.4 billion base pairs</strong> — roughly 1.5 GB of data — compressed into a nucleus just 6 micrometers wide.</p>
                </div>

                <h2>I. The Nucleotide: Building Block of DNA</h2>

                <p>Each nucleotide has three components:</p>
                <ol style="line-height: 2.2;">
                    <li><strong>Phosphate group</strong> — Provides the negative charge; links nucleotides via phosphodiester bonds.</li>
                    <li><strong>Deoxyribose sugar</strong> (DNA) or <strong>Ribose sugar</strong> (RNA) — The 5-carbon sugar backbone. Deoxyribose lacks an -OH group at the 2′ carbon (hence "deoxy"), making DNA more chemically stable than RNA.</li>
                    <li><strong>Nitrogenous base</strong> — The "letter" of the code. Purines (A, G) have two rings; Pyrimidines (C, T/U) have one ring.</li>
                </ol>

                <p><strong>Memory trick:</strong> <em>Pur</em>ines are <em>Pur</em>e As <em>G</em>old (A, G). <em>Py</em>rimidines — <em>C</em>u<em>T</em> the <em>Py</em>e (C, T, U).</p>

                <h2>II. The Double Helix: Structure and Stability</h2>

                <p>Watson and Crick (1953), building on Rosalind Franklin's X-ray crystallography data, proposed the double helix model:</p>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(6,182,212,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Feature</th>
                            <th style="padding:12px; text-align:left;">Detail</th>
                            <th style="padding:12px; text-align:left;">Biological Significance</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Antiparallel strands</strong></td><td style="padding:10px;">One strand runs 5′→3′, the other 3′→5′</td><td style="padding:10px;">Required for complementary base pairing geometry and replication directionality</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>H-bonds between bases</strong></td><td style="padding:10px;">A=T (2 bonds), G≡C (3 bonds)</td><td style="padding:10px;">Weak enough to unzip for replication/transcription; GC-rich regions are harder to separate</td></tr>
                        <tr><td style="padding:10px;"><strong>Phosphodiester backbone</strong></td><td style="padding:10px;">Covalent bonds → very strong</td><td style="padding:10px;">Structural stability; gives DNA its negative charge</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Major & minor grooves</strong></td><td style="padding:10px;">Helical twisting creates grooves</td><td style="padding:10px;">Proteins (transcription factors) bind in the major groove to read the code without unwinding</td></tr>
                    </table>
                </div>

                <h2>III. DNA vs. RNA</h2>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(6,182,212,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Feature</th>
                            <th style="padding:12px; text-align:center;">DNA</th>
                            <th style="padding:12px; text-align:center;">RNA</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Sugar</strong></td><td style="padding:10px; text-align:center;">Deoxyribose</td><td style="padding:10px; text-align:center;">Ribose</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Bases</strong></td><td style="padding:10px; text-align:center;">A, T, C, G</td><td style="padding:10px; text-align:center;">A, U, C, G</td></tr>
                        <tr><td style="padding:10px;"><strong>Structure</strong></td><td style="padding:10px; text-align:center;">Double-stranded helix</td><td style="padding:10px; text-align:center;">Usually single-stranded</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Location</strong></td><td style="padding:10px; text-align:center;">Nucleus (mostly)</td><td style="padding:10px; text-align:center;">Nucleus and cytoplasm</td></tr>
                        <tr><td style="padding:10px;"><strong>Function</strong></td><td style="padding:10px; text-align:center;">Permanent info storage</td><td style="padding:10px; text-align:center;">Temporary copy, catalysis, regulation</td></tr>
                    </table>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Applying Chargaff's Rule</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A DNA sample is analyzed and found to contain 22% adenine. What are the percentages of T, C, and G?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> By Chargaff's Rule, %A = %T → T = <strong>22%</strong></div>
                            <div><strong>Step 2:</strong> A + T = 22% + 22% = 44%, leaving 56% for C + G.</div>
                            <div><strong>Step 3:</strong> %C = %G → each is 56% / 2 = <strong>28%</strong></div>
                            <div style="margin-top:8px; color:var(--accent-cyan); font-style:italic;">Answer: T = 22%, C = 28%, G = 28%. Total = 100% ✓</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>DNA is a polymer of nucleotides (phosphate + deoxyribose + base) linked by phosphodiester bonds.</li>
                        <li>The double helix is antiparallel, held together by H-bonds between complementary bases (A=T, G≡C).</li>
                        <li>Chargaff's Rule: %A = %T and %C = %G in any DNA molecule.</li>
                        <li>DNA is stable (double-stranded, deoxyribose); RNA is temporary (single-stranded, ribose, uracil).</li>
                        <li>The genetic code uses 4 bases to encode 20 amino acids via triplet codons.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch2-2": {
        title: "4.2: High-Fidelity Copying",
        subtitle: "DNA Replication — Enzymes, Leading/Lagging Strands, and Error Correction",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Semiconservative</strong> — Each new DNA molecule consists of one old strand and one new strand.</div>
                        <div><strong>Origin of Replication</strong> — Specific DNA sequence where replication begins; eukaryotes have multiple origins per chromosome.</div>
                        <div><strong>Helicase</strong> — Enzyme that unwinds the double helix by breaking hydrogen bonds.</div>
                        <div><strong>DNA Polymerase III</strong> — Main replication enzyme; adds nucleotides 5′→3′; has proofreading (3′→5′ exonuclease) ability.</div>
                        <div><strong>Primase</strong> — Makes the RNA primer needed for DNA Polymerase to start.</div>
                        <div><strong>Ligase</strong> — Seals gaps between Okazaki fragments on the lagging strand.</div>
                        <div><strong>Okazaki Fragment</strong> — Short DNA segments (100-200 bp) built on the lagging strand.</div>
                        <div><strong>Telomere</strong> — Repetitive DNA caps (TTAGGG) at chromosome ends; shortened each replication cycle.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Copying 6 Billion Letters with Almost Zero Mistakes</h3>
                    <p>Every time a human cell divides, it must copy all 6.4 billion base pairs of DNA. The error rate? Approximately <strong>1 mistake per billion base pairs</strong> after proofreading and repair. This is like copying the entire Encyclopedia Britannica 3,000 times and making only ONE typo. This astonishing accuracy is achieved by a team of specialized enzymes.</p>
                </div>

                <h2>I. Replication Is Semiconservative</h2>

                <p>Meselson and Stahl (1958) proved that DNA replication is <strong>semiconservative</strong>: each daughter molecule contains one original (parent) strand and one newly synthesized strand. This preserves the template while generating new copies.</p>

                <h2>II. The Replication Fork — Enzyme Team</h2>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(6,182,212,0.2);">
                            <th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.15);">Enzyme</th>
                            <th style="padding:12px; text-align:left;">Role</th>
                            <th style="padding:12px; text-align:left;">Analogy</th>
                        </tr>
                        <tr><td style="padding:10px;"><strong>Helicase</strong></td><td style="padding:10px;">Unwinds double helix; breaks H-bonds</td><td style="padding:10px;">Unzipping a zipper</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Topoisomerase</strong></td><td style="padding:10px;">Relieves supercoiling ahead of helicase</td><td style="padding:10px;">Holding the rope to prevent tangling</td></tr>
                        <tr><td style="padding:10px;"><strong>SSB Proteins</strong></td><td style="padding:10px;">Prevent single strands from re-annealing</td><td style="padding:10px;">Bookmarks holding pages open</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>Primase</strong></td><td style="padding:10px;">Lays short RNA primer (~10 nt)</td><td style="padding:10px;">Drawing a starting line</td></tr>
                        <tr><td style="padding:10px;"><strong>DNA Pol III</strong></td><td style="padding:10px;">Extends primer by adding nucleotides 5′→3′</td><td style="padding:10px;">The main builder</td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;"><strong>DNA Pol I</strong></td><td style="padding:10px;">Removes RNA primers, replaces with DNA</td><td style="padding:10px;">The clean-up crew</td></tr>
                        <tr><td style="padding:10px;"><strong>Ligase</strong></td><td style="padding:10px;">Seals nicks between Okazaki fragments</td><td style="padding:10px;">Gluing puzzle pieces together</td></tr>
                    </table>
                </div>

                <h2>III. The Leading vs. Lagging Strand Problem</h2>

                <p>DNA Polymerase can ONLY add nucleotides in the <strong>5′→3′ direction</strong>. This creates an asymmetry at the replication fork:</p>
                <ul style="line-height: 2;">
                    <li><strong>Leading strand:</strong> Runs 3′→5′ (template), so new strand is built 5′→3′ continuously — one primer, smooth synthesis.</li>
                    <li><strong>Lagging strand:</strong> Runs 5′→3′ (template), so new strand must be built in short reverse segments (Okazaki fragments), each requiring a new primer. Ligase then seals the fragments.</li>
                </ul>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: The Telomere Problem</h4>
                    <p>Each replication cycle, the lagging strand gets slightly shorter because the RNA primer at the very end cannot be replaced with DNA (there's no upstream fragment to extend). This is the <strong>End Replication Problem</strong>. Telomeres (TTAGGG repeats) act as disposable buffers — they shorten with each division. When telomeres become critically short, the cell enters senescence or triggers apoptosis. <strong>Telomerase</strong>, active in stem cells and cancer cells, extends telomeres to enable unlimited division.</p>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Replication Fork Analysis</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A bacterial chromosome has ONE origin of replication and is 4.6 million bp long. If replication proceeds bidirectionally at 1,000 bp/sec, how long does replication take?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> Bidirectional = two forks moving in opposite directions from the origin.</div>
                            <div><strong>Step 2:</strong> Each fork covers half: 4,600,000 / 2 = 2,300,000 bp per fork.</div>
                            <div><strong>Step 3:</strong> Time = 2,300,000 bp ÷ 1,000 bp/sec = 2,300 seconds ≈ <strong>38 minutes</strong>.</div>
                            <div style="margin-top:8px; color:var(--accent-cyan); font-style:italic;">This matches E. coli's actual replication time of ~40 minutes!</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Replication is semiconservative — each new molecule has one old and one new strand.</li>
                        <li>Helicase unwinds; Primase lays RNA primers; DNA Pol III builds 5′→3′; Ligase seals fragments.</li>
                        <li>Leading strand = continuous; Lagging strand = discontinuous (Okazaki fragments).</li>
                        <li>Proofreading (DNA Pol III exonuclease) + mismatch repair → ~1 error per billion bp.</li>
                        <li>Telomeres shorten with each division; telomerase extends them in stem/cancer cells.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch2-3": {
        title: "5.1: Transcription & Translation",
        subtitle: "From Gene to Protein — mRNA Processing, Codons, and the Ribosome",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Transcription</strong> — Copying a gene's DNA sequence into mRNA; occurs in the nucleus.</div>
                        <div><strong>Translation</strong> — Ribosome reads mRNA codons and assembles amino acids into a polypeptide; occurs at ribosomes.</div>
                        <div><strong>mRNA Processing</strong> — 5′ cap + poly-A tail added; introns spliced out, exons joined (eukaryotes only).</div>
                        <div><strong>Codon</strong> — A triplet of mRNA bases encoding one amino acid (e.g., AUG = methionine/start).</div>
                        <div><strong>Anticodon</strong> — Complementary triplet on tRNA that base-pairs with an mRNA codon.</div>
                        <div><strong>RNA Polymerase</strong> — Enzyme that builds mRNA from a DNA template strand; does NOT need a primer.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: DNA → RNA → Protein (The Central Dogma)</h3>
                    <p>DNA is the master blueprint locked in the vault (nucleus). The cell never sends the original out — instead, it makes a disposable mRNA copy (transcription), sends it to the factory floor (ribosome), and assembles the product (translation). This is Francis Crick's <strong>Central Dogma</strong> of molecular biology.</p>
                </div>

                <h2>I. Transcription: DNA → mRNA</h2>

                <p><strong>Three phases:</strong></p>
                <ol style="line-height: 2.2;">
                    <li><strong>Initiation:</strong> RNA Polymerase binds to the <strong>promoter</strong> (TATA box in eukaryotes) with help from transcription factors.</li>
                    <li><strong>Elongation:</strong> RNA Pol reads the <strong>template strand</strong> (3′→5′) and builds mRNA (5′→3′) using complementary bases (A→U, T→A, C→G, G→C).</li>
                    <li><strong>Termination:</strong> RNA Pol reaches a terminator sequence; mRNA is released.</li>
                </ol>

                <h2>II. mRNA Processing (Eukaryotes Only)</h2>

                <p>Before leaving the nucleus, the pre-mRNA undergoes three critical modifications:</p>
                <ul style="line-height: 2;">
                    <li><strong>5′ Cap</strong> (modified G nucleotide) — Protects from degradation; helps ribosome recognize it.</li>
                    <li><strong>Poly-A Tail</strong> (~200 adenines at 3′ end) — Protects from degradation; aids nuclear export.</li>
                    <li><strong>Splicing</strong> — Introns (non-coding) removed by the <strong>spliceosome</strong>; exons (coding) joined together.</li>
                </ul>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: Alternative Splicing</h4>
                    <p>By combining different exons, a single gene can produce <strong>multiple different proteins</strong>. This is why humans have ~20,000 genes but can produce >100,000 different proteins. Alternative splicing is a major source of proteomic diversity.</p>
                </div>

                <h2>III. Translation: mRNA → Protein</h2>

                <p>Translation occurs at ribosomes and involves mRNA, tRNA, and amino acids:</p>
                <ol style="line-height: 2.2;">
                    <li><strong>Initiation:</strong> Small ribosomal subunit binds mRNA at the <strong>AUG start codon</strong>. Initiator tRNA (carrying methionine) arrives. Large subunit joins.</li>
                    <li><strong>Elongation:</strong> tRNAs bring amino acids to the A site; peptide bonds form; ribosome translocates along mRNA, codon by codon.</li>
                    <li><strong>Termination:</strong> Ribosome reaches a <strong>stop codon</strong> (UAA, UAG, UGA). Release factor enters; polypeptide is freed.</li>
                </ol>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: From DNA to Amino Acid</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">DNA template strand: 3′-TAC GCA AAT-5′. What amino acid sequence is produced?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> Transcribe (complement, T→U): mRNA = 5′-AUG CGU UUA-3′</div>
                            <div><strong>Step 2:</strong> Translate using codon chart:<br>AUG = Met (start), CGU = Arg, UUA = Leu</div>
                            <div style="margin-top:8px; color:var(--accent-cyan); font-style:italic;">Answer: <strong>Met–Arg–Leu</strong>. The AUG is both the start codon AND codes for methionine.</div>
                        </div>
                    </details>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Transcription: RNA Pol reads template strand 3′→5′, builds mRNA 5′→3′.</li>
                        <li>mRNA processing (eukaryotes): 5′ cap, poly-A tail, intron splicing.</li>
                        <li>Translation: ribosome reads mRNA codons → tRNAs deliver amino acids → polypeptide chain.</li>
                        <li>AUG = start (Met); UAA/UAG/UGA = stop codons.</li>
                        <li>Alternative splicing allows one gene to produce multiple proteins.</li>
                    </ul>
                </div>
            </div>
        `
    }
};
