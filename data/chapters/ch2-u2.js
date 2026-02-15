window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CH2 UNIT 2 EXTENSION: Molecular Genetics — Units 5–6
// Adds ch2-4, ch2-5, ch2-6, ch2-7 via Object.assign
// ═══════════════════════════════════════════════════════

Object.assign(window.CHAPTER_DATA["ch2"], {

    "ch2-4": {
        title: "5.2: RNA Processing & Splicing",
        subtitle: "Post-Transcriptional Modifications, Introns, Exons, and Alternative Splicing",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>5′ Cap</strong> — A modified guanine nucleotide added to the 5′ end of pre-mRNA; protects from degradation and aids ribosome recognition.</div>
                        <div><strong>Poly-A Tail</strong> — A chain of ~200 adenine nucleotides added to the 3′ end; protects mRNA and facilitates nuclear export.</div>
                        <div><strong>Intron</strong> — Non-coding intervening sequence removed during splicing.</div>
                        <div><strong>Exon</strong> — Expressed sequence that remains in the mature mRNA and is translated into protein.</div>
                        <div><strong>Spliceosome</strong> — A complex of snRNPs (small nuclear ribonucleoproteins) that catalyzes intron removal.</div>
                        <div><strong>Alternative Splicing</strong> — The process by which different combinations of exons are joined together, producing multiple protein variants from a single gene.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: One Gene, Many Proteins</h3>
                    <p>The human genome has only ~20,000 protein-coding genes, yet the human proteome exceeds <strong>100,000 distinct proteins</strong>. How? <strong>Alternative splicing.</strong> By mixing and matching exons, a single gene can produce multiple protein products. The <em>Drosophila</em> DSCAM gene can theoretically produce over 38,000 different mRNA variants — more than twice the total number of genes in the fly genome.</p>
                </div>

                <h2>I. Pre-mRNA Modifications</h2>
                <p>Before mRNA can leave the nucleus, it undergoes three critical processing steps:</p>
                <ol style="line-height: 2.2;">
                    <li><strong>5′ Capping:</strong> A modified guanine is added to the 5′ end during transcription. This cap protects the mRNA from exonuclease degradation and is recognized by the ribosome's small subunit during translation initiation.</li>
                    <li><strong>3′ Polyadenylation:</strong> After transcription, ~200 adenines are added by poly-A polymerase. The poly-A tail protects the 3′ end and facilitates export through the nuclear pore complex.</li>
                    <li><strong>Splicing:</strong> Introns are precisely excised by the spliceosome, and exons are ligated together to form the mature mRNA.</li>
                </ol>

                <h2>II. The Spliceosome Mechanism</h2>
                <p>Splicing occurs in the nucleus and requires precise recognition of splice site sequences:</p>
                <ul style="line-height: 2;">
                    <li><strong>5′ splice site:</strong> GU dinucleotide at the intron's start</li>
                    <li><strong>3′ splice site:</strong> AG dinucleotide at the intron's end</li>
                    <li><strong>Branch point:</strong> An adenine within the intron that forms the lariat intermediate</li>
                </ul>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: Splicing Errors & Disease</h4>
                    <p>Mutations at splice sites can cause <strong>exon skipping</strong> or <strong>intron retention</strong>, leading to diseases such as Spinal Muscular Atrophy (SMA) and certain cancers. Understanding splicing is critical for developing RNA-based therapeutics like <strong>antisense oligonucleotides (ASOs)</strong>.</p>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Pre-mRNA undergoes 5′ capping, 3′ polyadenylation, and intron splicing before leaving the nucleus.</li>
                        <li>The spliceosome recognizes GU-AG splice sites and removes introns via a lariat intermediate.</li>
                        <li>Alternative splicing allows one gene to produce multiple protein variants.</li>
                        <li>Splicing errors can lead to serious genetic diseases.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch2-5": {
        title: "5.3: Translation & Polypeptide Logic",
        subtitle: "Ribosome Architecture, tRNA Charging, and Post-Translational Modification",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Ribosome</strong> — Molecular machine composed of rRNA and protein; has three binding sites: A (aminoacyl), P (peptidyl), and E (exit).</div>
                        <div><strong>tRNA</strong> — Transfer RNA; carries amino acids to the ribosome. Each has an anticodon complementary to an mRNA codon.</div>
                        <div><strong>Aminoacyl-tRNA Synthetase</strong> — Enzyme that charges tRNA with the correct amino acid (requires ATP).</div>
                        <div><strong>Peptide Bond</strong> — Covalent bond between amino acids, formed by peptidyl transferase activity of the ribosome.</div>
                        <div><strong>Polyribosome</strong> — Multiple ribosomes translating the same mRNA simultaneously for rapid protein production.</div>
                        <div><strong>Post-Translational Modification</strong> — Chemical modifications (folding, glycosylation, phosphorylation) that activate or direct proteins after synthesis.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: The Ribosome Is a Molecular Factory</h3>
                    <p>The ribosome reads mRNA like a tape reader and assembles amino acids into proteins at a rate of <strong>~15-20 amino acids per second</strong> in bacteria. A single mRNA can be read by dozens of ribosomes simultaneously (polyribosome), mass-producing the same protein. This is the cell's assembly line.</p>
                </div>

                <h2>I. Translation: Step by Step</h2>
                <ol style="line-height: 2.2;">
                    <li><strong>Initiation:</strong> Small ribosomal subunit binds the 5′ cap and scans for the start codon (AUG). Initiator tRNA (Met-tRNA) binds. Large subunit joins.</li>
                    <li><strong>Elongation:</strong> Charged tRNAs enter the A site → peptide bond forms → ribosome translocates one codon → tRNA exits through E site.</li>
                    <li><strong>Termination:</strong> Stop codon (UAA, UAG, or UGA) enters the A site → release factor protein binds → polypeptide is released → ribosome disassembles.</li>
                </ol>

                <h2>II. The Genetic Code Properties</h2>
                <ul style="line-height: 2;">
                    <li><strong>Universal:</strong> Nearly all organisms use the same codon-amino acid assignments.</li>
                    <li><strong>Degenerate (Redundant):</strong> Multiple codons encode the same amino acid (e.g., Leu has 6 codons).</li>
                    <li><strong>Non-overlapping:</strong> Codons are read sequentially without sharing bases.</li>
                    <li><strong>Unambiguous:</strong> Each codon specifies only one amino acid.</li>
                </ul>

                <h2>III. After Translation: Protein Fate</h2>
                <p>Newly synthesized polypeptides must fold into their functional 3D structure. <strong>Chaperone proteins</strong> assist in proper folding, and post-translational modifications (phosphorylation, glycosylation, cleavage) activate or target the protein to its destination.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Translation occurs at ribosomes: Initiation (AUG + Met-tRNA) → Elongation (A-P-E site cycle) → Termination (stop codon + release factor).</li>
                        <li>The genetic code is universal, degenerate, non-overlapping, and unambiguous.</li>
                        <li>Polyribosomes allow mass production of proteins from a single mRNA.</li>
                        <li>Chaperones and post-translational modifications are essential for protein function.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch2-6": {
        title: "6.1: Bacterial Operon Logic",
        subtitle: "lac Operon, trp Operon, and Gene Regulation in Prokaryotes",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Operon</strong> — A cluster of genes under the control of a single promoter; found in prokaryotes.</div>
                        <div><strong>Operator</strong> — DNA sequence where a repressor protein binds to block transcription.</div>
                        <div><strong>Repressor</strong> — Protein that binds the operator to prevent RNA polymerase from transcribing.</div>
                        <div><strong>Inducer</strong> — Molecule that inactivates a repressor (e.g., allolactose binds the lac repressor).</div>
                        <div><strong>Corepressor</strong> — Molecule that activates a repressor (e.g., tryptophan activates the trp repressor).</div>
                        <div><strong>CAP (Catabolite Activator Protein)</strong> — Positive regulator activated by cAMP when glucose is low.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Genes Are Smart Switches</h3>
                    <p>Bacteria don't waste energy making proteins they don't need. Operons are <strong>gene control circuits</strong> — like smart thermostats that only run when conditions demand it. The lac operon turns ON only when lactose is present AND glucose is absent. The trp operon turns OFF when tryptophan levels are high. This is <strong>metabolic efficiency through gene regulation</strong>.</p>
                </div>

                <h2>I. The lac Operon (Inducible System)</h2>
                <p>The lac operon is <strong>normally OFF</strong> and turns ON when induced:</p>
                <ul style="line-height: 2;">
                    <li><strong>No lactose:</strong> Repressor binds operator → transcription blocked.</li>
                    <li><strong>Lactose present:</strong> Allolactose (inducer) binds repressor → repressor falls off → genes transcribed.</li>
                    <li><strong>Maximum expression:</strong> Lactose present AND glucose absent → high cAMP → CAP activates promoter → maximum transcription.</li>
                </ul>

                <h2>II. The trp Operon (Repressible System)</h2>
                <p>The trp operon is <strong>normally ON</strong> and turns OFF when repressed:</p>
                <ul style="line-height: 2;">
                    <li><strong>Low tryptophan:</strong> Repressor inactive → genes transcribed → tryptophan is synthesized.</li>
                    <li><strong>High tryptophan:</strong> Tryptophan (corepressor) binds repressor → repressor activated → binds operator → transcription stops.</li>
                </ul>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-bolt"></i> TJ Honors Insight: Negative Feedback in Gene Regulation</h4>
                    <p>The trp operon is a textbook example of <strong>negative feedback</strong>: the product of the pathway (tryptophan) shuts down its own production. This principle applies broadly — from bacterial metabolism to human hormone regulation.</p>
                </div>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>lac operon: Inducible (OFF → ON). Lactose induces; glucose absence maximizes via CAP/cAMP.</li>
                        <li>trp operon: Repressible (ON → OFF). Tryptophan acts as corepressor for negative feedback.</li>
                        <li>Operons are prokaryotic gene clusters regulated by a single promoter and operator.</li>
                        <li>Positive regulation (CAP) and negative regulation (repressor) can work together.</li>
                    </ul>
                </div>
            </div>
        `
    },

    "ch2-7": {
        title: "6.2: Molecular Cloning & PCR",
        subtitle: "Recombinant DNA, Restriction Enzymes, PCR, and CRISPR/Cas9 Basics",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Restriction Enzyme</strong> — Enzyme that cuts DNA at specific palindromic sequences, creating sticky or blunt ends.</div>
                        <div><strong>Plasmid</strong> — Small circular DNA molecule in bacteria; used as a vector for cloning.</div>
                        <div><strong>DNA Ligase</strong> — Enzyme that joins DNA fragments together by forming phosphodiester bonds.</div>
                        <div><strong>PCR (Polymerase Chain Reaction)</strong> — Technique to amplify specific DNA sequences exponentially using Taq polymerase.</div>
                        <div><strong>Gel Electrophoresis</strong> — Technique to separate DNA fragments by size; smaller fragments migrate farther.</div>
                        <div><strong>CRISPR/Cas9</strong> — A genome editing tool using guide RNA to direct the Cas9 nuclease to specific DNA sequences for cutting.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Cut, Copy, Paste — Molecular Biology Edition</h3>
                    <p>Just as computers can cut, copy, and paste text, molecular biologists can <strong>cut</strong> DNA with restriction enzymes, <strong>copy</strong> it with PCR, and <strong>paste</strong> it into vectors with ligase. CRISPR has revolutionized this further by allowing precise, programmable edits to any genome.</p>
                </div>

                <h2>I. Restriction Enzymes & Recombinant DNA</h2>
                <p>Restriction enzymes recognize specific palindromic sequences (e.g., EcoRI: 5′-GAATTC-3′) and cut DNA, often creating <strong>sticky ends</strong> — short single-stranded overhangs that can pair with complementary ends. This allows DNA from different sources to be joined (<strong>recombinant DNA</strong>).</p>

                <h2>II. PCR — Amplifying DNA</h2>
                <p>PCR uses heat-stable <strong>Taq polymerase</strong> to amplify a specific DNA region through thermal cycling:</p>
                <ol style="line-height: 2.2;">
                    <li><strong>Denaturation (95°C):</strong> DNA strands separate.</li>
                    <li><strong>Annealing (55-65°C):</strong> Primers bind to target sequences.</li>
                    <li><strong>Extension (72°C):</strong> Taq polymerase synthesizes new strands.</li>
                </ol>
                <p>After <em>n</em> cycles, the DNA is amplified <strong>2<sup>n</sup></strong> times. 30 cycles → ~1 billion copies from a single molecule.</p>

                <h2>III. CRISPR/Cas9 — Precision Gene Editing</h2>
                <p>CRISPR uses a <strong>guide RNA (gRNA)</strong> to direct the Cas9 nuclease to a specific 20-bp target in the genome. Cas9 creates a double-strand break (DSB), which the cell repairs via:</p>
                <ul style="line-height: 2;">
                    <li><strong>NHEJ (Non-Homologous End Joining):</strong> Error-prone repair that can knock out genes.</li>
                    <li><strong>HDR (Homology-Directed Repair):</strong> Precise repair using a donor template to insert or correct sequences.</li>
                </ul>

                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-top: 30px;">
                    <h4><i class="fas fa-clipboard-check"></i> Summary</h4>
                    <ul style="line-height: 2; font-size: 0.92rem;">
                        <li>Restriction enzymes cut DNA at palindromic sites; sticky ends allow recombinant DNA construction.</li>
                        <li>PCR amplifies DNA exponentially via denaturation → annealing → extension cycles.</li>
                        <li>Gel electrophoresis separates DNA by size (smaller = farther migration).</li>
                        <li>CRISPR/Cas9 enables precise genome editing using guide RNA and Cas9 nuclease.</li>
                    </ul>
                </div>
            </div>
        `
    }
});
