window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ═══════════════════════════════════════════════════════
// CHAPTER 2: MOLECULAR GENETICS — Elite 4.0 Expansion
// Covers Units 4, 5, and 6 (DNA, Expression, Control)
// ═══════════════════════════════════════════════════════

window.CHAPTER_DATA["ch2"] = {

    // unit 4.1
    "ch2-1": {
        javaLogic: "dna_replication",
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
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: DNA Is a Digital Storage Medium</h3>
                    <p>Computers store information in binary (0, 1). DNA stores information in a <strong>quaternary code</strong> (A, T, C, G). This 4-letter alphabet encodes every protein your body can build. A single human cell contains about <strong>6.4 billion base pairs</strong> — roughly 1.5 GB of data — compressed into a nucleus just 6 micrometers wide.</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: THE DOUBLE HELIX -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #083344 0%, #0f172a 100%); border: 2px solid var(--accent-cyan); overflow: hidden; position: relative; box-shadow: 0 0 40px rgba(6,182,212,0.3);">
                    <!-- Background Grid -->
                    <div style="position: absolute; inset: 0; background-image: radial-gradient(var(--accent-cyan) 1px, transparent 1px); background-size: 30px 30px; opacity: 0.1;"></div>
                    
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; position: relative; z-index: 1;">
                        <h4 style="color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 4px; font-weight: 800; border-bottom: 2px solid var(--accent-cyan); padding-bottom: 8px; margin: 0; text-shadow: 0 0 10px rgba(6,182,212,0.5);">Genomic Source Code Architecture</h4>
                        <svg viewBox="0 0 500 160" style="max-width: 650px; width: 100%; height: auto; filter: drop-shadow(0 0 15px rgba(6,182,212,0.4));">
                            <defs>
                                <linearGradient id="rung-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:var(--accent-cyan);stop-opacity:1" />
                                    <stop offset="50%" style="stop-color:white;stop-opacity:0.8" />
                                    <stop offset="100%" style="stop-color:var(--accent-cyan);stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <!-- Animated DNA Strand 1 -->
                            <path d="M 0 80 Q 75 10 150 80 Q 225 150 300 80 Q 375 10 450 80 Q 525 150 600 80" fill="none" stroke="var(--accent-cyan)" stroke-width="5" stroke-linecap="round">
                                <animate attributeName="stroke-dasharray" from="0, 1000" to="1000, 0" dur="4s" repeatCount="indefinite" />
                            </path>
                            <!-- Animated DNA Strand 2 -->
                            <path d="M 0 80 Q 75 150 150 80 Q 225 10 300 80 Q 375 150 450 80 Q 525 10 600 80" fill="none" stroke="var(--accent-cyan)" stroke-width="5" stroke-linecap="round" opacity="0.4">
                                <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="4s" repeatCount="indefinite" />
                            </path>
                            <!-- Base Pair "Rungs" with Glow -->
                            <g>
                                <line x1="75" y1="43" x2="75" y2="117" stroke="url(#rung-grad)" stroke-width="2" opacity="0.8" />
                                <line x1="225" y1="43" x2="225" y2="117" stroke="url(#rung-grad)" stroke-width="2" opacity="0.8" />
                                <line x1="375" y1="43" x2="375" y2="117" stroke="url(#rung-grad)" stroke-width="2" opacity="0.8" />
                                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                            </g>
                            <text x="50" y="30" fill="var(--accent-cyan)" font-size="9" font-weight="bold" opacity="0.8">5' [ATG...]</text>
                            <text x="450" y="140" fill="var(--accent-cyan)" font-size="9" font-weight="bold" opacity="0.8" text-anchor="end">[...TAG] 3'</text>
                        </svg>
                        <p style="font-size: 0.9rem; color: #888; text-align: center; letter-spacing: 1px;">Quaternary Encoding System: The Stable Hardware of Heredity</p>
                    </div>
                </div>

                <h2>I. The Nucleotide: Building Block of DNA</h2>
                <p>Each nucleotide has three components: Phosphate group, Deoxyribose sugar, and Nitrogenous base.</p>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-cyan);">
                    <h5 style="color: var(--accent-cyan); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Applying Chargaff's Rule</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">A DNA sample is analyzed and found to contain 22% adenine. What are the percentages of T, C, and G?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-cyan); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div><strong>Step 1:</strong> By Chargaff's Rule, %A = %T → T = <strong>22%</strong></div>
                            <div><strong>Step 2:</strong> A + T = 44%, leaving 56% for C + G.</div>
                            <div><strong>Step 3:</strong> %C = %G → each is 56% / 2 = <strong>28%</strong></div>
                        </div>
                    </details>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-cyan); padding: 30px;">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: DNA Structure & Chemistry</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(6,182,212,0.3);">
                        <iframe src="https://www.youtube.com/embed/8m6hHRlKwxY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                            <div class="link-card-content">
                                <h4>Watch Verification Video</h4>
                                <p>High-Fidelity Playback</p>
                            </div>
                            <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // unit 4.2
    "ch2-2": {
        javaLogic: "dna_replication",
        title: "4.2: High-Fidelity Copying",
        subtitle: "DNA Replication — Enzymes, Leading/Lagging Strands, and Error Correction",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-cyan); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-cyan); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Sem-conservative</strong> — New DNA = 1 old strand + 1 new strand.</div>
                        <div><strong>Helicase</strong> — Unzips the double helix.</div>
                        <div><strong>DNA Polymerase III</strong> — Main builder enzyme (5'→3').</div>
                        <div><strong>Okazaki Fragment</strong> — Discontinuous chunks on the lagging strand.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Copying 6 Billion Letters Perfectly</h3>
                    <p>Reolication is a high-speed, high-fidelity process. The error rate is ~1 in a billion. It involves a coordinated team of enzymes at the replication fork.</p>
                </div>

                <!-- VISUAL DYNAMIC: REPLICATION FORK ANIMATION -->
                <div class="visual-dynamic glass" style="padding: 40px; margin: 30px 0; border-radius: var(--standard-radius); background: linear-gradient(135deg, #00161d 0%, #0f172a 100%); border: 2px solid var(--accent-cyan); box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 30px; text-align: center; text-transform: uppercase; letter-spacing: 2px;"><i class="fas fa-sync-alt"></i> Biomechanical Fidelity: The Replication Machinery</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                        <svg viewBox="0 0 550 300" style="max-width: 650px; width: 100%; height: auto;">
                            <!-- Parent Templates -->
                            <path d="M 550 50 Q 250 150 550 250" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="6" stroke-linecap="round" />
                            <!-- Helicase -->
                            <g transform="translate(250, 150)">
                                <path d="M -30 -20 L 30 0 L -30 20 Z" fill="var(--accent-amber)" stroke="white" stroke-width="1">
                                    <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
                                </path>
                                <text y="-35" fill="var(--accent-amber)" font-size="10" text-anchor="middle">HELICASE</text>
                            </g>
                            <!-- Continuous Leading Strand -->
                            <path d="M 270 142 L 530 65" fill="none" stroke="var(--accent-cyan)" stroke-width="5" stroke-linecap="round" stroke-dasharray="10 5">
                                <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="2s" repeatCount="indefinite" />
                            </path>
                            <!-- Discontinuous Lagging Strand -->
                            <g>
                                <path d="M 280 160 L 360 190" fill="none" stroke="var(--accent-emerald)" stroke-width="5" stroke-linecap="round">
                                    <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
                                </path>
                                <path d="M 380 198 L 460 228" fill="none" stroke="var(--accent-emerald)" stroke-width="5" stroke-linecap="round">
                                    <animate attributeName="opacity" values="0;0;1;1;0" dur="3s" repeatCount="indefinite" />
                                </path>
                            </g>
                            <text x="400" y="40" fill="var(--accent-cyan)" font-size="9" font-weight="bold">LEADING STRAND</text>
                            <text x="400" y="270" fill="var(--accent-emerald)" font-size="9" font-weight="bold">LAGGING STRAND</text>
                        </svg>
                    </div>
                </div>

                <h2>II. Leading vs. Lagging Strand</h2>
                <p>DNA Polymerase only builds 5'→3'. The leading strand follows the helicase. The lagging strand must work backwards in chunks (Okazaki fragments).</p>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-cyan); padding: 30px;">
                    <h5 style="color: var(--accent-cyan); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: DNA Replication Process</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(6,182,212,0.3);">
                        <iframe src="https://www.youtube.com/embed/Qqe4thU-os8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                            <div class="link-card-content">
                                <h4>Watch Verification Video</h4>
                                <p>High-Fidelity Playback</p>
                            </div>
                            <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // unit 5.1
    "ch2-3": {
        javaLogic: "transcription",
        title: "5.1: Transcription Machinery",
        subtitle: "DNA to mRNA — The Promoter, RNA Polymerase, and the Template Strand",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Transcription</strong> — Copying DNA into mRNA in the nucleus.</div>
                        <div><strong>RNA Polymerase</strong> — Encounter that binds to promoter and synthesizes mRNA.</div>
                        <div><strong>Promoter</strong> — TATA box region where transcription starts.</div>
                        <div><strong>Template Strand</strong> — The DNA strand (3'→5') that is actually read.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: The Temporary Blueprint</h3>
                    <p>The cell keeps its master DNA safe in the nucleus vault. It sends a cheap, disposable xerox copy (mRNA) to the factory floor. This separation protects the genome from damage.</p>
                </div>

                <!-- ELITE VISUAL: TRANSCRIPTION BUBBLE -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #064e3b 0%, #022c22 100%); border: 2px solid var(--accent-emerald);">
                    <h5 style="color: var(--accent-emerald); text-align: center;"><i class="fas fa-file-code"></i> The Transcription Bubble</h5>
                    <div style="display: flex; justify-content: center; margin-top: 20px;">
                        <svg viewBox="0 0 400 150" width="350">
                            <!-- DNA Opening -->
                            <path d="M 20 75 C 100 25 300 25 380 75" fill="none" stroke="#555" stroke-width="4" opacity="0.5"/>
                            <path d="M 20 75 C 100 125 300 125 380 75" fill="none" stroke="#555" stroke-width="4" opacity="0.5"/>
                            
                            <!-- RNA Poly -->
                            <circle cx="200" cy="75" r="40" fill="rgba(16,185,129,0.2)" stroke="var(--accent-emerald)" stroke-width="2" />
                            <text x="200" y="80" fill="white" font-size="10" text-anchor="middle">RNA Poly</text>
                            
                            <!-- Emerging mRNA -->
                            <path d="M 200 60 Q 250 40 300 10" fill="none" stroke="var(--accent-amber)" stroke-width="3" stroke-dasharray="4,2">
                                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"/>
                            </path>
                            <text x="310" y="10" fill="var(--accent-amber)" font-size="10">mRNA (5')</text>
                        </svg>
                    </div>
                </div>

                <h2>I. The Process</h2>
                <ol style="line-height:2;">
                    <li><strong>Initiation:</strong> Transcription factors bind to the TATA box. RNA Pol II docks.</li>
                    <li><strong>Elongation:</strong> RNA Pol reads the template 3'→5' and builds RNA 5'→3' (A pairs with U).</li>
                    <li><strong>Termination:</strong> A signal (AAUAAA) tells the enzyme to detach.</li>
                </ol>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-emerald); padding: 30px;">
                    <h5 style="color: var(--accent-emerald); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Transcription</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3);">
                        <iframe src="https://www.youtube.com/embed/h3b9ArupXZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                            <div class="link-card-content">
                                <h4>Watch Verification Video</h4>
                                <p>High-Fidelity Playback</p>
                            </div>
                            <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // unit 5.2
    "ch2-4": {
        javaLogic: "transcription",
        title: "5.2: RNA Processing & Epigenetics",
        subtitle: "The Complexity Layer — Splicing Mechanisms and Chromatin Modification",
        content: `
            <div class="lesson-section">
                <!-- Same content as before, verified correct -->
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-purple); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-purple); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>5' Cap</strong> — Modified Guanine added to start.</div>
                        <div><strong>Poly-A Tail</strong> — Adenine tail added to end for stability.</div>
                        <div><strong>Spliceosome</strong> — Complex that removes introns.</div>
                        <div><strong>Alternative Splicing</strong> — One gene -> Many proteins.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Editing the Movie</h3>
                    <p>Pre-mRNA is like raw film footage. Splicing is the editing room floor where useless scenes (introns) are cut and the best scenes (exons) are pasted together to make the final movie (Mature mRNA).</p>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-purple); padding: 30px;">
                    <h5 style="color: var(--accent-purple); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: RNA Processing</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden;">
                        <iframe src="https://www.youtube.com/embed/YjWuVrzDZBs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                            <div class="link-card-content">
                                <h4>Watch Verification Video</h4>
                                <p>High-Fidelity Playback</p>
                            </div>
                            <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // unit 5.3 (NEW SEPARATE LESSON)
    "ch2-5": {
        javaLogic: "translation_regulation",
        title: "5.3: Translation & Polypeptide Logic",
        subtitle: "The Ribosome Factory — Codons, tRNA, and Protein Assembly",
        content: `
            <div class="lesson-section">

                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-amber); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-amber); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Translation</strong> — Decoding mRNA into amino acids.</div>
                        <div><strong>Codon</strong> — 3-base word on mRNA.</div>
                        <div><strong>Anticodon</strong> — Complementary 3-base word on tRNA.</div>
                        <div><strong>Ribosome</strong> — The machine with A, P, E sites.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-amber);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Universal Language</h3>
                    <p>The Genetic Code (codon chart) is nearly universal. A bacteria can read human insulin DNA and produce the exact same protein. This universality implies all life shares a common origin.</p>
                </div>

                <!-- VISUAL DYNAMIC: TRANSLATION ELONGATION -->
                <div class="visual-dynamic glass" style="padding: 30px; margin: 30px 0; background: linear-gradient(135deg, #451a03 0%, #1c1917 100%); border: 2px solid var(--accent-amber);">
                    <h5 style="color: var(--accent-amber); text-align: center;"><i class="fas fa-cogs"></i> Ribosomal Assembly Line</h5>
                    <div style="display: flex; justify-content: center; margin-top: 20px;">
                        <svg viewBox="0 0 300 200" width="300">
                             <!-- Ribosome -->
                             <ellipse cx="150" cy="120" rx="80" ry="50" fill="rgba(245,158,11,0.2)" stroke="var(--accent-amber)" stroke-width="2"/>
                             <ellipse cx="150" cy="80" rx="50" ry="30" fill="rgba(245,158,11,0.2)" stroke="var(--accent-amber)" stroke-width="2"/>
                             
                             <!-- Sites -->
                             <text x="110" y="125" fill="#aaa" font-size="10">E</text>
                             <text x="150" y="125" fill="#aaa" font-size="10">P</text>
                             <text x="190" y="125" fill="#aaa" font-size="10">A</text>
                             
                             <!-- tRNA -->
                             <path d="M 140 100 L 160 100 L 150 70 Z" fill="var(--accent-emerald)">
                                <animate attributeName="fill" values="var(--accent-emerald);var(--accent-red);var(--accent-emerald)" dur="4s" repeatCount="indefinite"/>
                             </path>
                        </svg>
                    </div>
                </div>

                <div class="example-card glass" style="padding:20px; border-radius:var(--standard-radius); margin:25px 0; border-left:3px solid var(--accent-amber);">
                    <h5 style="color: var(--accent-amber); margin-bottom:8px;"><i class="fas fa-pencil-alt"></i> Worked Example: Decoding the Message</h5>
                    <p style="font-family:'JetBrains Mono', monospace; background:rgba(0,0,0,0.2); padding:10px; border-radius:8px; margin-bottom:12px;">mRNA: 5'-AUG-CCG-UAA-3'. What is the peptide?</p>
                    <details>
                        <summary style="font-size:0.85rem; color:var(--accent-amber); font-weight:600; cursor:pointer;">View Solution</summary>
                        <div style="margin-top:10px; padding-left:15px; border-left:1px solid rgba(255,255,255,0.1); line-height:2;">
                            <div>AUG = Start (Methionine)</div>
                            <div>CCG = Proline</div>
                            <div>UAA = Stop Codon (No amino acid)</div>
                            <div>Result: <strong>Met-Pro</strong></div>
                        </div>
                    </details>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-amber); padding: 30px;">
                    <h5 style="color: var(--accent-amber); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Translation</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(245,158,11,0.3);">
                        <iframe src="https://www.youtube.com/embed/oefAI2x2CQM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                            <div class="link-card-content">
                                <h4>Watch Verification Video</h4>
                                <p>High-Fidelity Playback</p>
                            </div>
                            <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // unit 6.1 (SHIFTED FROM ch2-5)
    "ch2-6": {
        javaLogic: "operon_regulation",
        title: "6.1: Bacterial Operon Logic",
        subtitle: "The Logic Gates of Life — Lac/Trp Operons and Prokaryotic Gene Control",
        content: `
            <div class="lesson-section">
                <!-- Operon Logic Content moved from old ch2-5 -->
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-emerald); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-emerald); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>Operon</strong> — Gene cluster under one switch.</div>
                        <div><strong>Operator</strong> — The on/off binding site.</div>
                        <div><strong>Repressor</strong> — Protein that blocks transcription.</div>
                        <div><strong>Inducer</strong> — Turns operon ON (e.g., Lactose).</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-emerald);">
                    <h3><i class="fas fa-lightbulb"></i> Big Idea: Biological Efficiency</h3>
                    <p>Bacteria represent the ultimate efficiency. Operons allow them to only produce enzymes when the food source is actually present. It's "Just-In-Time" manufacturing for cells.</p>
                </div>

                <!-- PREMIUM CINEMATIC HEADER: OPERON LOGIC GATES -->
                <div class="visual-dynamic glass" style="margin: 30px 0; padding: 40px; border-radius: var(--standard-radius); background: linear-gradient(135deg, #064e3b 0%, #052e16 100%); border: 2px solid var(--accent-emerald); overflow: hidden; position: relative; box-shadow: 0 0 30px rgba(16,185,129,0.3);">
                    <h5 style="color: var(--accent-emerald); margin-bottom: 30px; text-align: center; text-transform: uppercase; letter-spacing: 3px; font-weight: 800;"><i class="fas fa-project-diagram"></i> Biological Transistor: The Operon Control Logic</h5>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 25px;">
                        <svg viewBox="0 0 550 180" style="max-width: 650px; width: 100%; height: auto;">
                            <!-- Operon Diagram -->
                            <rect x="25" y="85" width="500" height="10" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
                            <g transform="translate(200, 90)">
                                <rect x="-30" y="-30" width="60" height="40" rx="4" fill="rgba(6,182,212,0.1)" stroke="var(--accent-cyan)" stroke-width="2" />
                                <text y="-35" fill="var(--accent-cyan)" font-size="8" font-weight="bold" text-anchor="middle">PROMOTER</text>
                            </g>
                             <g transform="translate(400, 90)">
                                <rect x="-60" y="-30" width="120" height="30" rx="4" fill="rgba(16,185,129,0.1)" stroke="var(--accent-emerald)" stroke-width="2" />
                                <text y="-35" fill="var(--accent-emerald)" font-size="8" font-weight="bold" text-anchor="middle">GENES</text>
                            </g>
                        </svg>
                    </div>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-emerald); padding: 30px;">
                    <h5 style="color: var(--accent-emerald); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: Operon Logic (Lac & Trp)</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3);">
                        <iframe src="https://www.youtube.com/embed/ePJb0Gk-u6Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                            <div class="link-card-content">
                                <h4>Watch Verification Video</h4>
                                <p>High-Fidelity Playback</p>
                            </div>
                            <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // unit 6.2 (SHIFTED FROM ch2-6)
    "ch2-7": {
        javaLogic: "biotech_tools",
        title: "6.2: Molecular Cloning & PCR",
        subtitle: "The Genome Engineering Toolkit — PCR, Gel Electrophoresis, and CRISPR",
        content: `
            <div class="lesson-section">
                <!-- Biotech Content moved from old ch2-6 -->
                <div class="key-terms-box glass" style="border-left: 4px solid var(--accent-blue); padding: 20px; margin-bottom: 30px; border-radius: var(--standard-radius);">
                    <h4 style="color: var(--accent-blue); margin-bottom: 12px;"><i class="fas fa-key"></i> Key Terms</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.9rem;">
                        <div><strong>PCR</strong> — Molecular xerox machine (Amplify DNA).</div>
                        <div><strong>Gel Electrophoresis</strong> — Separates DNA by size (Small moves fast).</div>
                        <div><strong>Restriction Enzyme</strong> — Molecular scissors (EcoRI).</div>
                        <div><strong>CRISPR-Cas9</strong> — Programmable gene editing.</div>
                    </div>
                </div>

                <div class="intuition-box glass" style="border-left-color: var(--accent-blue);">
                     <h3><i class="fas fa-lightbulb"></i> Big Idea: Engineering Life</h3>
                     <p>We are no longer just observers. With tools like CRISPR and PCR, we can copy, read, write, and edit the source code of life itself. This is the era of Synthetic Biology.</p>
                </div>

                <h2>I. Polymerase Chain Reaction (PCR)</h2>
                <div class="glass-card" style="padding:20px;">
                    <ol>
                        <li><strong>Denature (95°C):</strong> Separate strands.</li>
                        <li><strong>Anneal (55°C):</strong> Attach primers.</li>
                        <li><strong>Extend (72°C):</strong> Taq Polymerase builds DNA.</li>
                    </ol>
                </div>

                <!-- VIDEO CURATION: MASTER CLASS -->
                <div class="visual-dynamic glass" style="margin-top: 40px; border-top: 1px solid var(--accent-blue); padding: 30px;">
                    <h5 style="color: var(--accent-blue); margin-bottom: 25px; text-align: center;"><i class="fab fa-youtube"></i> Master Class: PCR & Gel Electrophoresis</h5>
                    <div style="position: relative; width: 100%; max-width: 600px; margin: 0 auto; aspect-ratio: 16/9; border-radius: var(--standard-radius); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(6,182,212,0.3);">
                        <iframe src="https://www.youtube.com/embed/33c8bJz2sc0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                            <div class="link-card-content">
                                <h4>Watch Verification Video</h4>
                                <p>High-Fidelity Playback</p>
                            </div>
                            <div class="link-card-arrow"><i class="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

};
