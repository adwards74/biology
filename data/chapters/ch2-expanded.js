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

                <!-- PREMIUM CINEMATIC HEADER: THE DOUBLE HELIX -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #083344 0%, #0f172a 100%); border: 2px solid var(--accent-cyan); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(6,182,212,0.2);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 3px; font-weight: 800; border-bottom: 2px solid var(--accent-cyan); padding-bottom: 8px; margin: 0;">Genomic Architecture & Source Code</h4>
                        <svg viewBox="0 0 500 150" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- Animated DNA Strand 1 -->
                            <path d="M 50 75 Q 125 0 200 75 Q 275 150 350 75 Q 425 0 500 75" fill="none" stroke="var(--accent-cyan)" stroke-width="4" opacity="0.6">
                                <animate attributeName="stroke-dashoffset" from="0" to="100" dur="4s" repeatCount="indefinite" />
                            </path>
                            <!-- Animated DNA Strand 2 -->
                            <path d="M 50 75 Q 125 150 200 75 Q 275 0 350 75 Q 425 150 500 75" fill="none" stroke="var(--accent-cyan)" stroke-width="4" opacity="0.6" stroke-dasharray="8 4">
                                <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="4s" repeatCount="indefinite" />
                            </path>
                            
                            <!-- Base Pair "Rungs" -->
                            <g opacity="0.4">
                                <line x1="125" y1="38" x2="125" y2="112" stroke="var(--accent-amber)" stroke-width="2" />
                                <line x1="275" y1="38" x2="275" y2="112" stroke="var(--accent-emerald)" stroke-width="2" />
                                <line x1="425" y1="38" x2="425" y2="112" stroke="var(--accent-red)" stroke-width="2" />
                            </g>
                            
                            <!-- Floating Info Tags -->
                            <text x="50" y="30" fill="var(--accent-cyan)" font-size="8" font-weight="bold">5' END</text>
                            <text x="450" y="130" fill="var(--accent-cyan)" font-size="8" font-weight="bold">3' END</text>
                        </svg>
                    </div>
                </div>

                <h2>I. The Nucleotide: Building Block of DNA</h2>

                <p>Each nucleotide has three components:</p>
                <ol style="line-height: 2.2;">
                    <li><strong>Phosphate group</strong> — Provides the negative charge; links nucleotides via phosphodiester bonds.</li>
                    <li><strong>Deoxyribose sugar</strong> (DNA) or <strong>Ribose sugar</strong> (RNA) — The 5-carbon sugar backbone. Deoxyribose lacks an -OH group at the 2′ carbon (hence "deoxy"), making DNA more chemically stable than RNA.</li>
                    <li><strong>Nitrogenous base</strong> — The "letter" of the code. Purines (A, G) have two rings; Pyrimidines (C, T/U) have one ring.</li>
                </ol>

                <p><strong>Memory trick:</strong> <em>Pur</em>ines are <em>Pur</em>e As <em>G</em>old (A, G). <em>Py</em>rimidines — <em>C</em>u<em>T</em> the <em>Py</em>e (C, T, U).</p>

                <!-- VISUAL DYNAMIC: DNA DOUBLE HELIX -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 20px; text-align: center;"><i class="fas fa-dna"></i> Visual Dynamic: Quaternary Information Logic</h5>
                    <div style="display: flex; justify-content: center; align-items: center; gap: 30px; min-height: 220px;">
                        <svg viewBox="0 0 200 200" width="180">
                            <!-- DNA Strands -->
                            <path d="M 60 20 Q 140 100 60 180" fill="none" stroke="var(--accent-cyan)" stroke-width="3" opacity="0.8" />
                            <path d="M 140 20 Q 60 100 140 180" fill="none" stroke="var(--accent-cyan)" stroke-width="3" stroke-dasharray="2,2" />
                            
                            <!-- Base Pairs -->
                            <line x1="68" y1="40" x2="132" y2="40" stroke="var(--accent-amber)" stroke-width="2" />
                            <circle cx="100" cy="40" r="4" fill="#111" stroke="white" stroke-width="0.5" />
                            
                            <line x1="90" y1="80" x2="110" y2="80" stroke="var(--accent-emerald)" stroke-width="2" />
                            <circle cx="100" cy="80" r="4" fill="#111" stroke="white" stroke-width="0.5" />
                            
                            <line x1="90" y1="120" x2="110" y2="120" stroke="var(--accent-red)" stroke-width="2" />
                            <circle cx="100" cy="120" r="4" fill="#111" stroke="white" stroke-width="0.5" />
                            
                            <line x1="68" y1="160" x2="132" y2="160" stroke="var(--accent-cyan)" stroke-width="2" />
                            <circle cx="100" cy="160" r="4" fill="#111" stroke="white" stroke-width="0.5" />
                            
                            <!-- Legend -->
                            <text x="100" y="195" fill="#aaa" font-size="8" text-anchor="middle">Quaternary Basis: A-T, G-C</text>
                        </svg>
                        <div style="flex: 1; font-size: 0.9rem; color: #ddd; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px;">
                            <div style="margin-bottom: 10px;"><span style="color:var(--accent-cyan);">■</span> Phosphodiester Backbone</div>
                            <div style="margin-bottom: 10px;"><span style="color:var(--accent-amber);">■</span> Hydrogen Bonds</div>
                            <div><span style="color:var(--accent-emerald);">■</span> Nitrogenous Base Pairs</div>
                        </div>
                    </div>
                </div>

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

                <!-- VIDEO CURATION: MASTER CLASS (HYBRID LINK CARD) -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-cyan); padding: 30px;">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: DNA Structure & Chemistry</h5>
                    <a href="https://www.youtube.com/watch?v=_POdSeSnL2c" target="_blank" style="text-decoration: none; display: block;">
                        <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://img.youtube.com/vi/_POdSeSnL2c/maxresdefault.jpg'); background-size: cover; background-position: center; border: 1px solid rgba(6,182,212,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: transform 0.3s ease;">
                            <!-- Floating Play Button -->
                            <div style="width: 80px; height: 80px; background: var(--accent-cyan); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(6,182,212,0.6); z-index: 2;">
                                <i class="fas fa-play" style="color: black; font-size: 2rem; margin-left: 5px;"></i>
                            </div>
                            <!-- Bottom Info Bar -->
                            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(6, 182, 212, 0.9); padding: 12px; text-align: center; backdrop-filter: blur(10px);">
                                <p style="margin: 0; color: black; font-weight: 800; font-size: 0.9rem; letter-spacing: 1px;">WATCH ON YOUTUBE <i class="fas fa-external-link-alt" style="font-size: 0.8rem; margin-left: 8px;"></i></p>
                            </div>
                        </div>
                    </a>
                    <p style="font-size: 0.8rem; color: #888; margin-top: 20px; text-align: center; font-style: italic;">Reference: DNA Structure & Replication (Amoeba Sisters / Science Curation)</p>
                </div>

                <!-- SECTION IV: INFORMATIONAL THERMODYNAMICS -->
                <h2>IV. Informational Thermodynamics: Stability and Entropy</h2>

                <p>Why is DNA the master copy while RNA is the disposable copy? The answer lies in <strong>Structural Stability</strong>.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin: 20px 0;">
                    <h4>The 2'-OH Vulnerability</h4>
                    <p>RNA contains a hydroxyl (-OH) group at the 2' position of the ribose sugar. This group is chemically reactive and can participate in auto-catalytic cleavage. DNA lacks this group (De-oxy), making it significantly more resistant to hydrolysis. This allows DNA to persist for thousands of years (as seen in fossil DNA), whereas mRNA typically degrades within minutes or hours.</p>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: The GC-Clamp</h4>
                    <p>In PCR and molecular biology, we often look at <strong>Melting Temperature ($T_m$)</strong>. Because G-C pairs have 3 hydrogen bonds while A-T pairs have only 2, regions of DNA with high GC content are more thermally stable. This is why extremophiles living in thermal vents often have genomes with high GC bias – it's an adaptation to prevent their "source code" from melting at $100^\circ C$.</p>
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

                <!-- VISUAL DYNAMIC: REPLICATION FORK ANIMATION -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.4); border: 1px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 25px; text-align: center;"><i class="fas fa-sync-alt"></i> Molecular Dynamic: The Replication Fork in Motion</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 500 250" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- Unzipping Parent Strands -->
                            <path d="M 500 50 Q 250 125 500 200" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
                            
                            <!-- Helicase Wedge -->
                            <path d="M 230 110 L 270 125 L 230 140 Z" fill="var(--accent-amber)">
                                <animate attributeName="transform" type="translate" values="0,0; 5,0; 0,0" dur="1s" repeatCount="indefinite" />
                            </path>

                            <!-- Continuous Leading Strand -->
                            <path d="M 270 118 L 480 55" fill="none" stroke="var(--accent-cyan)" stroke-width="4">
                                <animate attributeName="stroke-dasharray" from="0, 500" to="500, 0" dur="3s" repeatCount="indefinite" />
                            </path>
                            
                            <!-- Discontinuous Lagging Strand (Fragments) -->
                            <g>
                                <path d="M 280 140 L 340 160" fill="none" stroke="var(--accent-emerald)" stroke-width="4">
                                    <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
                                </path>
                                <path d="M 360 165 L 420 185" fill="none" stroke="var(--accent-emerald)" stroke-width="4">
                                    <animate attributeName="opacity" values="0;0;1;1;0" dur="4s" repeatCount="indefinite" />
                                </path>
                            </g>
                            
                            <!-- DNA Polymerase Dots -->
                            <circle cx="280" cy="118" r="8" fill="rgba(6,182,212,0.4)" stroke="var(--accent-cyan)" stroke-width="2" />
                            <circle cx="290" cy="145" r="8" fill="rgba(16,185,129,0.4)" stroke="var(--accent-emerald)" stroke-width="2" />
                            
                            <text x="50" y="30" fill="#888" font-size="9">TEMPLATE (3'→5')</text>
                            <text x="450" y="230" fill="#888" font-size="9" text-anchor="end">TEMPLATE (5'→3')</text>
                        </svg>
                        <p style="font-size: 0.85rem; color: #888; text-align: center; font-style: italic;">Asymmetry in action: The antiparallel nature of DNA forces the "Lagging Strand" to be built backward in fragments.</p>
                    </div>
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

                <!-- SECTION IV: REPLICATION FIDELITY LOGIC -->
                <h2>IV. The Math of Fidelity: Probability and Proofreading</h2>

                <p>Replication is a race against <strong>Stochastic Noise</strong>. DNA Polymerase makes a mistake about once every 100,000 nucleotides. Without repair, a human cell would accrue 60,000 mutations per division.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin: 20px 0;">
                    <h4>Two-Step Error Correction</h4>
                    <ol style="line-height: 1.8;">
                        <li><strong>Proofreading (Real-time):</strong> DNA Pol III has a 3' to 5' exonuclease "delete key". If it adds the wrong base, the geometry shift triggers the enzyme to pause, move backward, and snip out the error. This improves fidelity 100x.</li>
                        <li><strong>Mismatch Repair (Post-replication):</strong> Specialized proteins (like MutS/MutL) scan the new DNA for "bulges" caused by improper pairing. They cut out the new strand and let DNA Pol I refill it. This improves fidelity another 100x.</li>
                    </ol>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: The Fidelity-Speed Tradeoff</h4>
                    <p>Viruses like HIV or Influenza evolve rapidly because their replication enzymes (Reverse Transcriptase or RNA Replicase) lack proofreading ability. They trade <strong>Stability</strong> for <strong>Variation</strong>, allowing them to outrun the immune system. Eukaryotes, however, prioritize stability to prevent the accumulation of lethal mutations (Cancer).</p>
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

                <!-- VISUAL DYNAMIC: CENTRAL DOGMA -->
                <div class="visual-dynamic glass" style="padding: 25px; margin: 30px 0; border-radius: var(--standard-radius); background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 20px; text-align: center;"><i class="fas fa-microchip"></i> Visual Dynamic: Information Flow Architecture</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 500 150" style="max-width: 600px; width: 100%; height: auto;">
                            <!-- Stage 1: DNA -->
                            <g transform="translate(40, 50)">
                                <path d="M 0 0 Q 30 50 0 100" fill="none" stroke="var(--accent-cyan)" stroke-width="2" />
                                <path d="M 30 0 Q 0 50 30 100" fill="none" stroke="var(--accent-cyan)" stroke-width="2" />
                                <text x="15" y="-15" fill="var(--accent-cyan)" font-size="10" text-anchor="middle" font-weight="bold">DNA</text>
                                <text x="15" y="115" fill="#aaa" font-size="8" text-anchor="middle">Nucleus</text>
                            </g>
                            
                            <!-- Arrow 1 -->
                            <path d="M 90 75 L 170 75" marker-end="url(#arrow)" stroke="white" stroke-width="2" stroke-dasharray="4,2">
                                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite" />
                            </path>
                            <text x="130" y="65" fill="white" font-size="8" text-anchor="middle">Transcription</text>
                            
                            <!-- Stage 2: mRNA -->
                            <g transform="translate(190, 50)">
                                <path d="M 0 50 L 60 50" fill="none" stroke="var(--accent-amber)" stroke-width="3" />
                                <text x="30" y="-15" fill="var(--accent-amber)" font-size="10" text-anchor="middle" font-weight="bold">mRNA</text>
                            </g>
                            
                            <!-- Arrow 2 -->
                            <path d="M 270 75 L 350 75" marker-end="url(#arrow)" stroke="white" stroke-width="2" stroke-dasharray="4,2">
                                <animate attributeName="stroke-dashoffset" from="0" to="24" dur="2s" repeatCount="indefinite" />
                            </path>
                            <text x="310" y="65" fill="white" font-size="8" text-anchor="middle">Translation</text>
                            
                            <!-- Stage 3: Protein -->
                            <g transform="translate(370, 50)">
                                <circle cx="40" cy="50" r="25" fill="rgba(16,185,129,0.2)" stroke="var(--accent-emerald)" stroke-width="2" />
                                <text x="40" y="-15" fill="var(--accent-emerald)" font-size="10" text-anchor="middle" font-weight="bold">PROTEIN</text>
                                <text x="40" y="55" fill="white" font-size="8" text-anchor="middle">3D Structure</text>
                            </g>
                            
                            <defs>
                                <marker id="arrow" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="white" /></marker>
                            </defs>
                        </svg>
                        <div style="font-size: 0.85rem; color: #aaa; text-align: center; font-style: italic;">
                            Digital Code (DNA) → Analog Interface (mRNA) → Functional Product (Protein)
                        </div>
                    </div>
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

                <!-- SECTION IV: TRANSLATIONAL KINETICS -->
                <h2>IV. Translational Kinetics: The Polysome</h2>

                <p>The cell does not translate one mRNA with one ribosome. To maximize output, multiple ribosomes bind to a single mRNA molecule simultaneously, forming a <strong>Polysome (Polyribosome)</strong>.</p>

                <div class="glass-card" style="border-left: 4px solid var(--accent-amber); padding: 20px; margin: 20px 0;">
                    <h4>Assembly Line Efficiency</h4>
                    <p>As soon as the first ribosome has moved far enough from the start codon (AUG), a second ribosome can bind. This allows for the production of dozens of protein molecules from a single mRNA template in a very short time. In prokaryotes, because there is no nucleus, translation can start even <em>before</em> transcription is finished (Coupled Transcription-Translation).</p>
                </div>
            </div>
        `
    },

    "ch2-4": {
        title: "5.2: RNA Processing & Epigenetics",
        subtitle: "The Complexity Layer — Splicing Mechanisms and Chromatin Modification",
        content: `
            <div class="lesson-section">
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-purple); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Epigenetics</strong> — Changes in organisms caused by modification of gene expression rather than alteration of the genetic code itself.</div>
                        <div><strong>Histone Acetylation</strong> — Addition of acetyl groups to histones; loosens chromatin structure, promoting transcription.</div>
                        <div><strong>DNA Methylation</strong> — Addition of methyl groups to DNA (usually Cytosine); typically silences gene expression.</div>
                        <div><strong>snRNPs (snurps)</strong> — Small nuclear ribonucleoproteins; part of the spliceosome that removes introns.</div>
                        <div><strong>Alternative Splicing</strong> — Joining different combinations of exons to produce varied protein isoforms from one gene.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: The Software vs. The Hardware</h3>
                    <p>If DNA is the <strong>hardware</strong> (the raw code), epigenetics is the <strong>software</strong> (which parts of the code are currently running). Every cell in your body has the same DNA, but a neuron looks and acts differently from a muscle cell because they have different <strong>Epigenetic Profiles</strong> — different genes are "unlocked" or "locked away" in chromatin.</p>
                </div>

                <h2>I. The Mechanics of Splicing</h2>
                <p>Introns are not just "junk". They allow for <strong>Alternative Splicing</strong>, which is the primary reason why humans can be so complex with relatively few genes (~20,000).</p>
                
                <div class="proof-box glass">
                    <h4>The Spliceosome Logic</h4>
                    <p>The spliceosome recognizes specific sequences at the 5' and 3' ends of an intron. It loops the intron into a "lariat" shape, snips it out, and ligates the adjacent exons. If the cell chooses to skip an exon (Exon Skipping), it creates a different version of the protein.</p>
                </div>

                <h2>II. Epigenetics: Regulating Access</h2>
                <p>The cell controls gene expression by changing how tightly DNA is wrapped around <strong>Histone Proteins</strong>.</p>

                <div style="overflow-x: auto; margin: 25px 0;">
                    <table class="glass-table" style="width:100%; border-collapse:collapse; font-size:0.88rem;">
                        <tr style="background: rgba(139,92,246,0.2);">
                            <th style="padding:12px; text-align:left;">Modification</th>
                            <th style="padding:12px; text-align:left;">Mechanism</th>
                            <th style="padding:12px; text-align:left;">Effect on Transcription</th>
                        </tr>
                        <tr><td><strong>Acetylation</strong></td><td>Adds (-COCH3) to histone tails</td><td>Loosens DNA (Euchromatin) → <strong>Active</strong></td></tr>
                        <tr style="background:rgba(255,255,255,0.03);"><td><strong>Methylation</strong></td><td>Adds (-CH3) to DNA/Histones</td><td>Tightens DNA (Heterochromatin) → <strong>Silenced</strong></td></tr>
                    </table>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-dna"></i> TJ Honors Insight: Environmental Epigenetics</h4>
                    <p>Epigenetic marks can be influenced by diet, stress, and environmental toxins. Fascinatingly, some marks can be <strong>inherited</strong> (Transgenerational Epigenetic Inheritance). This means your lifestyle choices could potentially affect the gene expression patterns of your children and grandchildren without changing a single letter of your DNA code.</p>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-purple);">
                    <h5 style="color: var(--accent-purple); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Splicing Math</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A gene has 5 exons. If any combination of at least 3 consecutive exons can form a functional protein, how many isoforms are possible?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-purple); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div>Consecutive sets of 3: (1,2,3), (2,3,4), (3,4,5) = 3</div>
                            <div>Consecutive sets of 4: (1,2,3,4), (2,3,4,5) = 2</div>
                            <div>Consecutive sets of 5: (1,2,3,4,5) = 1</div>
                            <div>Total = 3 + 2 + 1 = <strong>6 Isoforms</strong></div>
                        </div>
                    </details>
                </div>
            </div>
        `
    },

    "ch2-5": {
        title: "6.1: Regulation & Operons",
        subtitle: "The Logic Gates of Life — Lac/Trp Operons and Prokaryotic Gene Control",
        content: `
            <div class="lesson-section">
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Operon</strong> — A cluster of genes under the control of a single promoter (prokaryotes only).</div>
                        <div><strong>Operator</strong> — The "on/off switch" where a repressor binds.</div>
                        <div><strong>Repressor</strong> — A protein that inhibits transcription by binding to the operator.</div>
                        <div><strong>Inducer</strong> — A molecule that inactivates a repressor (e.g., Allolactose).</div>
                        <div><strong>Corepressor</strong> — A molecule that activates a repressor (e.g., Tryptophan).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Genes Are NOT All-Or-Nothing</h3>
                    <p>Bacteria are extreme economists. They won't spend energy making an enzyme if they don't need it. Operons act like <strong>Biological Transistors</strong>, turning metabolic pathways on or off based on chemical signals in the environment. This is the foundation of synthetic biology.</p>
                </div>

                <h2>I. The Lac Operon: Inducible Logic</h2>
                <p>The <em>Lac</em> operon is an <strong>Inducible System</strong>. It is normally OFF and only turns ON when lactose is present and glucose is absent.</p>
                
                <div class="glass-card" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin: 20px 0;">
                    <h4>How it works:</h4>
                    <ul>
                        <li><strong>No Lactose:</strong> Repressor binds to operator → RNA Pol blocked → No enzymes made.</li>
                        <li><strong>Lactose Present:</strong> Allolactose binds repressor → Repressor changes shape and falls off → RNA Pol can transcribe.</li>
                    </ul>
                </div>

                <h2>II. The Trp Operon: Repressible Logic</h2>
                <p>The <em>Trp</em> operon is a <strong>Repressible System</strong>. It is normally ON and only turns OFF when the cell has enough tryptophan.</p>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: Negative Feedback</h4>
                    <p>The Trp operon is a classic example of <strong>Negative Feedback</strong>. As Tryptophan levels rise, Tryptophan itself acts as a corepressor, shutting down its own production. This maintains the optimal concentration and prevents metabolic waste.</p>
                </div>
            </div>
        `
    },

    "ch2-6": {
        title: "6.2: Molecular Biotechnology",
        subtitle: "The Genome Engineering Toolkit — PCR, Gel Electrophoresis, and CRISPR-Cas9",
        content: `
            <div class="lesson-section">
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-amber); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-amber); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>PCR (Polymerase Chain Reaction)</strong> — A method to amplify (copy) specific DNA segments billions of times.</div>
                        <div><strong>Restriction Enzymes</strong> — Molecular scissors that cut DNA at specific palindromic sequences.</div>
                        <div><strong>Gel Electrophoresis</strong> — Separates DNA fragments based on size using an electric field (DNA is negative).</div>
                        <div><strong>Plasmid</strong> — Small, circular DNA used as a vector to transport genes into bacteria.</div>
                        <div><strong>CRISPR-Cas9</strong> — A precision genome editing tool using guide RNA (gRNA) and the Cas9 nuclease.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-amber);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Reading, Writing, and Editing Life</h3>
                    <p>For decades, we could only "read" DNA (sequencing) or "copy" it (cloning). With CRISPR, we can finally <strong>"Edit"</strong> it with word-processor precision. We have moved from observing biology to engineering it.</p>
                </div>

                <h2>I. PCR: The Molecular Xerox</h2>
                <p>PCR uses three temperature-controlled steps to amplify DNA:</p>
                <div class="glass-card" style="border-left: 4px solid var(--accent-blue); padding: 20px; margin: 20px 0;">
                    <ol>
                        <li><strong>Denaturation ($95^\circ C$):</strong> Heat breaks H-bonds, separating strands.</li>
                        <li><strong>Annealing ($55^\circ C$):</strong> Primers bind to target sequences.</li>
                        <li><strong>Extension ($72^\circ C$):</strong> Taq Polymerase (from hot springs bacteria!) builds new strands.</li>
                    </ol>
                    <p style="font-weight: bold; margin-top: 10px;">Exponential Growth: $N = N_0 \times 2^n$ where $n$ is the number of cycles.</p>
                </div>

                <h2>II. CRISPR-Cas9: The Precision Suture</h2>
                <p>Unlike restriction enzymes which cut at fixed sites, CRISPR is <strong>Programmable</strong>.</p>
                
                <div class="proof-box glass">
                    <h4>The Search and Cut Mechanism</h4>
                    <p>The <strong>Guide RNA (gRNA)</strong> acts as a molecular GPS, searching the genome for a 20-base match. Once found, the <strong>Cas9 enzyme</strong> creates a double-strand break. The cell's repair mechanisms then either disable the gene (NHEJ) or insert a new sequence (HDR).</p>
                </div>

                <div class="tj-edge glass">
                    <h4><i class="fas fa-microchip"></i> TJ Honors Insight: Ethical Boundaries</h4>
                    <p>CRISPR technology raises profound ethical questions via <strong>Gene Drives</strong> and germline editing. If we "fix" a genetic disease in an embryo, that change is passed to ALL future generations. Investigating these trade-offs is a core component of modern IBET research.</p>
                </div>
            </div>
        `
    }
};
