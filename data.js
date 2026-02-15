/**
 * Sabrina Biology Elite 5.3 - Curriculum Data
 * Modeling the TJHSST 9th Grade IBET Biology Curriculum
 */

window.MATH_DATA = window.MATH_DATA || {};
window.MATH_DATA = { // Keeping variable name for compatibility with copied ui-render.js
    subjects: [
        {
            id: "cell-systems",
            title: "Cell Systems & Dynamics",
            code: "BIO-100",
            icon: "fas fa-microscope",
            color: "#10b981",
            difficulty: "basic",
            description: "Advanced analysis of cellular architecture, transport kinetics, and enzymatic control systems.",
            units: [
                {
                    title: "Unit 1: Architecture & Scalability",
                    intuition: "Biological efficiency is limited by geometry. Understanding the SA/V ratio is the key to understanding why cells are small.",
                    topics: ["SA:V Ratio Logic", "Organelle Synergy", "Eukaryotic vs Prokaryotic Scaling"],
                    lectures: [
                        { name: "1.1: The Geometry of Life", url: "lesson:bio:ch1-1" },
                        { name: "1.2: Endomembrane Logistics", url: "lesson:bio:ch1-2" }
                    ],
                    examples: [
                        {
                            title: "Calculating SA/V for a Spherical Cell",
                            problem: "If a cell's radius increases from $1 \\mu m$ to $3 \\mu m$, by what factor does the volume increase relative to the surface area?",
                            steps: [
                                "Surface Area formula: $4\\pi r^2$. $r=1 \\rightarrow 4\\pi$, $r=3 \\rightarrow 36\\pi$ (9x increase).",
                                "Volume formula: $4/3 \\pi r^3$. $r=1 \\rightarrow 4/3\\pi$, $r=3 \\rightarrow 108/3\\pi$ (27x increase).",
                                "Ratio check: Volume increased 3x MORE than surface area."
                            ],
                            intuition: "Growth causes 'internal stress'—the cell needs 27x more food but only has 9x more door space."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why do large cells often have highly folded membranes?", answer: "To maximize surface area", options: ["To look more complex", "To maximize surface area", "To store more energy"], explanation: "Folding increases the 'exchange surface' while keeping the total volume manageable." },
                            { title: "L3: Mastery", question: "Which cell shape would be MOST efficient at nutrient absorption per unit volume?", answer: "A flat thin disc", options: ["A perfect sphere", "A long cylinder", "A flat thin disc"], explanation: "Extremely thin shapes minimize the distance to the center, maximizing the SA/V ratio." }
                        ]
                    }
                },
                {
                    title: "Unit 2: The Semi-Permeable Gate",
                    intuition: "Transport is not just moving things; it is a battle against gradients and water potential.",
                    topics: ["Water Potential ($\\Psi$)", "Osmoregulation", "Active Transport Kinetics"],
                    lectures: [
                        { name: "2.1: Water Potential Logic", url: "lesson:bio:ch1-3" },
                        { name: "2.2: Active Loading Systems", url: "lesson:bio:ch1-4" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "In which direction does water move regarding $\\Psi$?", answer: "High to Low", options: ["High to Low", "Low to High", "Against the gradient"], explanation: "Free energy dictates water moves from areas of high potential to low potential." },
                            { title: "L2: Analysis", question: "If $\\Psi_s = -0.5$ and $\\Psi_p = +0.2$, what is total $\\Psi$?", answer: "-0.3 MPa", options: ["-0.7 MPa", "-0.3 MPa", "+0.3 MPa"], explanation: "$\\Psi = \\Psi_s + \\Psi_p = -0.5 + 0.2 = -0.3$." }
                        ]
                    }
                },
                {
                    title: "Unit 3: Biocatalysis & Enzymes",
                    intuition: "Enzymes are tools that lower the hill (activation energy) required for a reaction to start.",
                    topics: ["Enzyme-Substrate Complex", "Inhibition", "Reaction Rate Dynamics"],
                    lectures: [
                        { name: "3.1: The Activation Barrier", url: "lesson:bio:ch1-5" },
                        { name: "3.2: Control Systems (Feedback)", url: "lesson:bio:ch1-6" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What happens to the rate of reaction if you add a non-competitive inhibitor?", answer: "$V_{max}$ decreases", options: ["Rate increases", "$V_{max}$ decreases", "Reaction stops"], explanation: "Non-competitive inhibitors change the enzyme's shape, making it less effective even if plenty of substrate is present." }
                        ]
                    }
                }
            ]
        },
        {
            id: "molecular-genetics",
            title: "Molecular Genetics",
            code: "BIO-200",
            icon: "fas fa-dna",
            color: "#06b6d4",
            difficulty: "intermediate",
            description: "Information theory applied to biology. DNA replication, protein synthesis, and the logic of gene regulation.",
            units: [
                {
                    title: "Unit 4: DNA Architecture",
                    intuition: "DNA is the source code of life. Its double-helix structure ensures both stability and ease of replication.",
                    topics: ["Nucleotide Logic", "Replication Fork Engineering", "Telomere Preservation"],
                    lectures: [
                        { name: "4.1: Source Code Structure", url: "lesson:bio:ch2-1" },
                        { name: "4.2: High-Fidelity Copying", url: "lesson:bio:ch2-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why is one DNA strand built in fragments (Okazaki)?", answer: "5'→3' constraint", options: ["Because it is faster", "5'→3' constraint", "To prevent mutations"], explanation: "As the fork opens, the lagging strand must wait for enough space to build 'forward' in small chunks." }
                        ]
                    }
                },
                {
                    title: "Unit 5: Gene Expression & Regulation",
                    intuition: "The Central Dogma is the starting point. Regulation is where the complexity of life arises—choosing which 'apps' (genes) to run at the right time.",
                    topics: ["Transcription Factors", "mRNA Processing (Splicing/Capping)", "Ribosome Translation Logic", "Epigenetic Methylation"],
                    lectures: [
                        { name: "5.1: Transcription Machinery", url: "lesson:bio:ch2-3" },
                        { name: "5.2: RNA Processing & Splicing", url: "lesson:bio:ch2-4" },
                        { name: "5.3: Translation & Polypeptide Logic", url: "lesson:bio:ch2-5" }
                    ],
                    examples: [
                        {
                            title: "Interpreting Splicing Variants",
                            problem: "How can a single gene produce five different proteins in different tissues?",
                            steps: [
                                "Identify the exons and introns in the pre-mRNA.",
                                "Analyze 'Alternative Splicing' patterns.",
                                "Different tissues select different combinations of exons to join.",
                                "Result: Unique mRNA sequences from a single DNA source."
                            ],
                            intuition: "Alternative splicing is like having a modular LEGO set where the same pieces can build a car or a plane."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What is the primary benefit of the 5' G-cap and 3' Poly-A tail?", answer: "Protection and Export", options: ["Encoding amino acids", "Protection and Export", "DNA Replication"], explanation: "These modifications protect mRNA from enzymatic degradation and signal the cell that it's ready for export to the cytoplasm." },
                            { title: "L3: Mastery", question: "In eukaryotes, what is the role of transcription factors?", answer: "To allow RNA Polymerase to bind to the promoter", options: ["To build the ribosome", "To allow RNA Polymerase to bind to the promoter", "To synthesize introns"], explanation: "RNA Polymerase II cannot initiate transcription alone; it requires a suite of transcription factors to recognize the TATA box." }
                        ]
                    }
                },
                {
                    title: "Unit 6: Control Systems (Operons & Biotech)",
                    intuition: "Genes are rarely 'always on'. In bacteria, they use elegant on/off switches called Operons to conserve energy.",
                    topics: ["lac/trp Operons", "Repressor Logic", "PCR & Gel Electrophoresis", "CRISPR/Cas9 Basics"],
                    lectures: [
                        { name: "6.1: Bacterial Operon Logic", url: "lesson:bio:ch2-6" },
                        { name: "6.2: Molecular Cloning & PCR", url: "lesson:bio:ch2-7" }
                    ],
                    examples: [
                        {
                            title: "The lac Operon Scenario",
                            problem: "If Glucose is absent but Lactose is present, is the lac operon ON or OFF?",
                            steps: [
                                "Lactose binds to the repressor, inactivating it.",
                                "Low glucose leads to high cAMP, which activates CAP.",
                                "The combination triggers high-level transcription.",
                                "Result: The operon is ON."
                            ],
                            intuition: "Operons are the 'Smart Thermostats' of the bacterial world—they only run the heater when it's cold AND power is available."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L2: Analysis", question: "What happens to the trp operon when tryptophan levels are HIGH?", answer: "Repressor binds, stopping transcription", options: ["Transcription increases", "Repressor binds, stopping transcription", "DNA is degraded"], explanation: "The trp operon is repressible. High levels of the product activate the repressor to stop further production (Feedback Inhibition)." }
                        ]
                    }
                }
            ]
        },
        {
            id: "metabolism",
            title: "Energy & Metabolism",
            code: "BIO-300",
            icon: "fas fa-bolt",
            color: "#f59e0b",
            difficulty: "intermediate",
            description: "Energy transformation systems. Photosynthesis and cellular respiration mechanics.",
            units: [
                {
                    title: "Unit 7: Solar Engines",
                    intuition: "Life runs on solar flux captured via electron transport chains.",
                    topics: ["PSII and PSI", "Chemiosmosis", "Calvin Cycle"],
                    lectures: [
                        { name: "7.1: The Solar Panel", url: "lesson:bio:ch3-1" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Where does the oxygen released during photosynthesis come from?", answer: "From the splitting of water (photolysis)", options: ["From CO₂", "From glucose breakdown", "From the splitting of water (photolysis)"], explanation: "Water is split in PSII: 2H₂O → 4H⁺ + 4e⁻ + O₂. The oxygen you breathe comes from water, not CO₂." },
                            { title: "L2: Analysis", question: "What is the primary function of the Calvin Cycle?", answer: "To synthesize G3P (sugar)", options: ["To split water", "To produce ATP", "To synthesize G3P (sugar)"], explanation: "The Calvin Cycle uses ATP and NADPH from the light reactions to fix CO2 into organic molecules (G3P)." },
                            { title: "L3: Mastery", question: "How does the pH gradient across the thylakoid membrane drive ATP synthesis?", answer: "Via ATP Synthase", options: ["Through active transport", "Via ATP Synthase", "By diffusion of water"], explanation: "High H+ concentration inside the thylakoid lumen flows through ATP Synthase, powering the phosphorylation of ADP." }
                        ]
                    }
                },
                {
                    title: "Unit 8: Cellular Respiration",
                    intuition: "Glucose is broken down in controlled steps to harvest ATP. Oxygen is the final electron acceptor.",
                    topics: ["Glycolysis", "Krebs Cycle", "Oxidative Phosphorylation", "Fermentation"],
                    lectures: [
                        { name: "8.1: Cellular Respiration", url: "lesson:bio:ch3-3" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "How much ATP does aerobic respiration produce per glucose compared to fermentation?", answer: "~30-32 vs. 2", options: ["2 vs. 2", "~30-32 vs. 2", "~30-32 vs. 18"], explanation: "Without oxygen, only glycolysis can run (2 ATP). With oxygen, the full pathway yields ~30-32 ATP — about 15x more efficient." },
                            { title: "L2: Analysis", question: "Which molecule is the final electron acceptor in the Electron Transport Chain?", answer: "Oxygen", options: ["Water", "Carbon Dioxide", "Oxygen"], explanation: "Oxygen accepts electrons and protons to form water, preventing the 'traffic jam' in the ETC." },
                            { title: "L3: Mastery", question: "Why is the Krebs cycle considered an aerobic process, even though it doesn't use oxygen directly?", answer: "It depends on NAD+ from ETC", options: ["It uses O2 in the first step", "It depends on NAD+ from ETC", "It occurs only in plants"], explanation: "The cycle needs a constant supply of NAD+ and FAD, which are only recycled from NADH/FADH2 when the ETC has oxygen to receive electrons." }
                        ]
                    }
                }
            ]
        },
        {
            id: "heredity",
            title: "Heredity & Variation",
            code: "BIO-400",
            icon: "fas fa-users-viewfinder",
            color: "#8b5cf6",
            difficulty: "advanced",
            description: "Classical and Non-Mendelian genetics. Probability models for life inheritance.",
            units: [
                {
                    title: "Unit 9: Genetic Probability",
                    intuition: "Inheritance is a statistical game played with chromosomal cards.",
                    topics: ["Mendelian Logic", "Punnett Squares", "Dihybrid Crosses"],
                    lectures: [
                        { name: "9.1: The Laws of Segregation", url: "lesson:bio:ch4-1" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What phenotype ratio do you expect from a monohybrid cross Aa × Aa?", answer: "3:1", options: ["1:1", "3:1", "9:3:3:1"], explanation: "A monohybrid cross of two heterozygotes produces 1 AA : 2 Aa : 1 aa genotype, which gives a 3:1 dominant:recessive phenotype ratio." },
                            { title: "L2: Analysis", question: "If a baby has Type O blood and the mother has Type A, what are the possible genotypes for the father?", answer: "i i, I^A i, or I^B i", options: ["I^A I^B", "i i, I^A i, or I^B i", "Only i i"], explanation: "The father must provide one 'i' allele. Therefore, he can be O (ii), heterozygous A (Ai), or heterozygous B (Bi)." },
                            { title: "L3: Mastery", question: "Which Mendelian law states that alleles for different traits are distributed to sex cells independently of one another?", answer: "Law of Independent Assortment", options: ["Law of Segregation", "Law of Dominance", "Law of Independent Assortment"], explanation: "Independent Assortment only applies to genes on different chromosomes (or far apart on the same one)." }
                        ]
                    }
                },
                {
                    title: "Unit 10: Chromosomal Linkage",
                    intuition: "Genes on the same chromosome break Mendel's second law — unless crossing over separates them.",
                    topics: ["Linked Genes", "Recombination Frequency", "Gene Mapping"],
                    lectures: [
                        { name: "10.1: Chromosomal Linkage & Mapping", url: "lesson:bio:ch4-3" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "If two genes have a recombination frequency of 50%, what does that tell you?", answer: "They are on different chromosomes (unlinked)", options: ["They are very close together", "They are on different chromosomes (unlinked)", "They never recombine"], explanation: "RF of 50% means genes assort independently — they behave as if on different chromosomes. Linked genes always have RF < 50%." },
                            { title: "L2: Analysis", question: "A recombination frequency of 1% is equal to how many map units (centimorgans)?", answer: "1 cM", options: ["10 cM", "1 cM", "100 cM"], explanation: "By definition, 1% RF = 1 map unit or 1 centimorgan." },
                            { title: "L3: Mastery", question: "Why is the recombination frequency between two genes on the same chromosome limited to 50%?", answer: "Multiple crossovers cancel out", options: ["Genes are too small", "Chromosomes don't break", "Multiple crossovers cancel out"], explanation: "Even for genes very far apart, multiple crossovers ensure that half the gametes remain parental and half become recombinant, mirroring independent assortment." }
                        ]
                    }
                }
            ]
        },
        {
            id: "biostatistics",
            title: "The TJ Scientist",
            code: "BIO-500",
            icon: "fas fa-square-root-variable",
            color: "#ef4444",
            difficulty: "advanced",
            description: "Scientific method mastery. Statistical significance testing and IBET experimental design protocols.",
            units: [
                {
                    title: "Unit 11: Statistical Power & Inference",
                    intuition: "Is your data significant or just noise? Statistics provides the mathematical threshold for proof. In IBET, we don't guess; we test.",
                    topics: ["Chi-Square Analysis", "SEM & 95% Confidence Intervals", "Null Hypothesis Significance Testing (NHST)"],
                    labProtocol: {
                        title: "IBET Experimental Design Protocol",
                        preLab: [
                            "Identify the **Null Hypothesis ($H_0$)**: No significant difference between observed and expected.",
                            "Determine **Degrees of Freedom ($df$)**: $n - 1$.",
                            "Establish the **P-Value threshold**: Standard is $0.05$ (5%)."
                        ],
                        postLab: [
                            "Calculate $\\chi^2$ using the Scientific Lab tool.",
                            "Compare $\\chi^2$ to critical values. If $\\chi^2 > CV$, **Reject $H_0$**.",
                            "Apply CER: Use data to justify your conclusion on biological significance."
                        ]
                    },
                    lectures: [
                        { name: "11.1: The Chi-Square Test", url: "lesson:bio:ch11-1" },
                        { name: "11.2: Error Analysis & SE", url: "lesson:bio:ch11-2" }
                    ],
                    examples: [
                        {
                            title: "Chi-Square for Mendelian Ratios",
                            problem: "You observe 310 tall plants and 90 short plants in a cross expecting 3:1. Calculate χ².",
                            steps: [
                                "Expected: Tall = 300, Short = 100.",
                                "χ² = (310-300)²/300 + (90-100)²/100.",
                                "χ² = 100/300 + 100/100 = 1.33.",
                                "Critical Value (df=1, p=0.05) is 3.84."
                            ],
                            intuition: "Since 1.33 < 3.84, we fail to reject the null. The deviation is due to chance, and the hypothesis is supported."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What is the primary role of a p-value in AP Biology?", answer: "Probability that results are due to chance", options: ["The percentage of accuracy", "Probability that results are due to chance", "The number of samples"], explanation: "A p-value measures the evidence against the null hypothesis." }
                        ]
                    }
                },
                {
                    title: "Unit 12: Experimental Design & FRQ Logic",
                    intuition: "A well-designed experiment eliminates alternative explanations. AP FRQs often ask you to identify the independent variable and predict the effect of a treatment.",
                    topics: ["Variables & Controls", "Hypothesis Selection", "Data Interpretation Modeling"],
                    lectures: [
                        { name: "12.1: Designing the Lab", url: "lesson:bio:ch12-1" },
                        { name: "12.2: FRQ Writing Protocols (CER)", url: "lesson:bio:ch12-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why must an experiment have a negative control?", answer: "To establish a baseline without treatment", options: ["To save money", "To establish a baseline without treatment", "To increase sample size"], explanation: "A negative control receives no treatment, establishing the baseline against which experimental results are compared." }
                        ]
                    }
                }
            ]
        },
        {
            id: "evolution-ecology",
            title: "Evolution & Ecology",
            code: "BIO-700",
            icon: "fas fa-tree",
            color: "#65a30d",
            difficulty: "intermediate",
            description: "The big picture. How populations change over time and how energy flows through the biosphere.",
            units: [
                {
                    title: "Unit 15: Natural Selection & Phylogeny",
                    intuition: "Evolution is the unifying theory of biology. It explains how diversity arises from common ancestry through survival of the fittest.",
                    topics: ["Darwinian Selection", "Hardy-Weinberg Equilibrium", "Cladistics & Mapping"],
                    evolutionLink: "Biotechnology (CRISPR/Recombinant DNA) represents human-driven rapid evolution, a shift from geological timescales to technological timescales.",
                    lectures: [
                        { name: "15.1: The Mechanism of Change", url: "lesson:bio:ch7-1" },
                        { name: "15.2: Population Genetics (H-W)", url: "lesson:bio:ch7-2" }
                    ],
                    examples: [
                        {
                            title: "Calculating Allele Frequencies",
                            problem: "In a population in H-W equilibrium, 16% of individuals show a recessive trait (aa). Calculate the frequency of the dominant allele (A).",
                            steps: [
                                "$q^2 = 0.16 \\rightarrow q = \\sqrt{0.16} = 0.4$.",
                                "$p + q = 1 \\rightarrow p = 1 - 0.4 = 0.6$.",
                                "Result: Frequency of A is 0.6 (60%)."
                            ],
                            intuition: "Once you find 'q' (the frequency of the invisible recessive guy), you can find everything else in the population."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L2: Analysis", question: "Which of these is NOT a requirement for Hardy-Weinberg equilibrium?", answer: "Small population size", options: ["No mutations", "Random mating", "Small population size"], explanation: "Small populations are subject to genetic drift, which causes evolution. H-W requires a large population." }
                        ]
                    }
                },
                {
                    title: "Unit 16: Ecosystem Dynamics",
                    intuition: "Energy flows, but matter cycles. Understanding the 10% rule explains why top predators are rare.",
                    topics: ["Trophic Levels", "Nutrient Cycling", "Community Interactions"],
                    lectures: [
                        { name: "16.1: Energy Flow Networks", url: "lesson:bio:ch8-1" },
                        { name: "16.2: Biodiversity & Resilience", url: "lesson:bio:ch8-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "In a food web, if 10,000 kJ of energy is available at the producer level, how much is likely available to a tertiary consumer?", answer: "10 kJ", options: ["1,000 kJ", "100 kJ", "10 kJ"], explanation: "The 10% rule means energy decreases by an order of magnitude at each step: 10,000 $\\rightarrow$ 1,000 $\\rightarrow$ 100 $\\rightarrow$ 10." }
                        ]
                    }
                }
            ]
        },
        {
            id: "bio-data-science",
            title: "Bio-Data Science & Research",
            code: "BIO-600",
            icon: "fas fa-laptop-code",
            color: "#6366f1",
            difficulty: "advanced",
            description: "Advanced bioinformatics and research logic. Integrating Python/R for biological data analysis and meta-analysis protocols.",
            units: [
                {
                    title: "Unit 13: Bioinformatics with Python",
                    intuition: "Modern biology is high-throughput. We use code to find patterns in billions of base pairs that the human eye would miss.",
                    topics: ["Sequence Alignment Algorithms", "Biopython Foundations", "Statistical Analysis with R"],
                    lectures: [
                        { name: "13.1: Python for Biologists", url: "lesson:bio:ch6-1" },
                        { name: "13.2: BLAST & Sequence Alignment", url: "lesson:bio:ch6-2" }
                    ],
                    examples: [
                        {
                            title: "Simulating GC Content Analysis",
                            problem: "Write a Python snippet to calculate the GC content of a DNA sequence string.",
                            steps: ["Define the sequence string.", "Count 'G' and 'c' occurrences.", "Divide by total length.", "Multiply by 100."],
                            intuition: "GC content is a proxy for thermal stability. High GC means the DNA stays together in hotter environments."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Conceptual Intuition",
                                question: "What is the fundamental benefit of using Python over manual analysis in genomics?",
                                answer: "Scale and reproducibility",
                                options: ["Speed only", "Scale and reproducibility", "More colorful plots", "Simpler formulas"],
                                explanation: "The ability to process millions of sequences consistently and reproduce the same logic is the core of bio-data science."
                            },
                            {
                                title: "L2: Algorithmic Understanding",
                                question: "In a BLAST result, what does an E-value of $10^{-10}$ signify?",
                                answer: "Alignment unlikely by chance",
                                options: ["High probability of chance", "Alignment unlikely by chance", "Sequence length is 10", "An error occurred"],
                                explanation: "E-value represents the 'Expectation' of random hits. Closer to 0 means true Homology."
                            },
                            {
                                title: "L3: Elite Application",
                                question: "Which scoring matrix is used to account for biological mutation probabilities?",
                                answer: "BLOSUM62",
                                options: ["PAM1", "BLOSUM62", "Identity Matrix", "Zero Matrix"],
                                explanation: "BLOSUM62 is the standard statistical matrix for biological substitutions."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 14: The Research Literature Review",
                    intuition: "Science is a conversation. A literature review is how you map out that conversation before adding your own voice through experiments.",
                    topics: ["Meta-Analysis Protocols", "P-Hacking Awareness", "Database Mining (PubMed/NCBI)"],
                    lectures: [
                        { name: "14.1: Systematic Review Logic", url: "lesson:bio:ch7-1" },
                        { name: "14.2: Evaluating Scientific Rigor", url: "lesson:bio:ch7-2" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Research Ethics",
                                question: "What is the term for manipulating variables until a desired p-value is reached?",
                                answer: "P-Hacking",
                                options: ["Data Mining", "P-Hacking", "Peer Review", "Meta-Analysis"],
                                explanation: "P-Hacking is an unethical practice of processing data to force statistical significance ($p < 0.05$)."
                            },
                            {
                                title: "L2: Critical Analysis",
                                question: "What is the primary reason for using the PRISMA protocol in a Systematic Review?",
                                answer: "Transparency and reproducibility",
                                options: ["To speed up writing", "Transparency and reproducibility", "To correct typos", "To auto-generate citations"],
                                explanation: "Clearly defining selection criteria allows other researchers to trust and replicate the results."
                            }
                        ]
                    }
                }
            ]
        }
    ],
    strategy: {
        content: `
            <h2>TJHSST IBET Strategy Guide</h2>
            <div class="glass-card">
                <h4>1. Focus on the Mechanism</h4>
                <p>Don't just memorize terms. For every organelle or process, ask: <em>How does this contribute to homeostasis?</em></p>
                <h4>2. Quantitative Precision</h4>
                <p>TJ's Biology curriculum is heavy on math. Master the Chi-Square test and Water Potential calculations early.</p>
                <h4>3. The FRQ Logic</h4>
                <p>When writing, use the **Claim, Evidence, Reasoning (CER)** model. It's the standard for IBET success.</p>
            </div>
        `
    },
    external_resources: [
        { title: "Khan Academy Bio", url: "https://www.khanacademy.org/science/biology", icon: "fas fa-leaf", desc: "Foundational concepts for supplemental review." },
        { title: "Bozeman Science", url: "http://www.bozemanscience.com/biology", icon: "fas fa-video", desc: "In-depth video lectures on AP/Honors Bio topics." }
    ],
    glossary: {
        // --- Cell Systems & Architecture ---
        "SA:V Ratio": { def: "Surface Area to Volume Ratio. Explains why cells must remain small to maintain efficient nutrient/waste exchange.", highFrequency: true },
        "Organelle": "A membrane-bound structure within a cell that performs a specific function (e.g., mitochondria, nucleus).",
        "Endomembrane System": "A group of membranes and organelles in eukaryotic cells that work together to modify, package, and transport lipids and proteins.",
        "Rough ER": "Studded with ribosomes; synthesizes proteins destined for secretion or membrane insertion.",
        "Smooth ER": "Synthesizes lipids, detoxifies chemicals, and stores calcium ions (no ribosomes).",
        "Golgi Apparatus": "The shipping & receiving center; modifies, sorts, and packages proteins from the ER.",
        "Mitochondria": { def: "The power plant of the cell; site of cellular respiration and ATP production.", highFrequency: true },
        "Ribosome": "The protein factory; translates mRNA into polypeptide chains.",
        "Lysosome": "The recycling crew; contains digestive enzymes to break down macromolecules.",
        "Prokaryote": "A single-celled organism that lacks a nucleus and membrane-bound organelles.",
        "Eukaryote": "An organism whose cells contain a nucleus and other membrane-bound organelles.",
        "Cytoskeleton": "A network of protein fibers (microtubules, microfilaments) that maintains cell shape and enables movement.",

        // --- Transport & Energetics ---
        "Osmosis": "The diffusion of water molecules across a semi-permeable membrane from high to low water potential.",
        "Water Potential": { def: "A measure of the free energy of water in a solution; water moves from high potential ($\Psi$) to low potential.", highFrequency: true },
        "Active Transport": "The movement of molecules across a cell membrane against a concentration gradient, requiring ATP (energy).",
        "Facilitated Diffusion": "Passive transport of molecules across a membrane through specific transmembrane integral proteins.",
        "Endocytosis": "Process by which a cell takes in materials by folding its membrane around them to form a vesicle.",
        "Exocytosis": "The release of substances from a cell via the fusion of a vesicle with the plasma membrane.",
        "Chemiosmosis": { def: "The movement of ions across a semipermeable membrane down their electrochemical gradient to generate ATP.", highFrequency: true },
        "Calvin Cycle": "The light-independent reactions of photosynthesis that fix CO2 into organic molecules like G3P.",
        "Krebs Cycle": "Also known as the Citric Acid Cycle; a series of reactions that harvest high-energy electrons from glucose derivatives.",
        "Oxidative Phosphorylation": "The production of ATP using energy derived from the redox reactions of an electron transport chain.",
        "Vmax": "The maximum reaction rate in an enzyme-catalyzed reaction when the enzyme is saturated with substrate.",
        "Enzyme": { def: "A biological catalyst (usually a protein) that speeds up chemical reactions by lowering activation energy.", highFrequency: true },

        // --- Molecular Genetics ---
        "Central Dogma": { def: "The fundamental flow of genetic information: DNA $\rightarrow$ RNA $\rightarrow$ Protein.", highFrequency: true },
        "Transcription": "The synthesis of an RNA molecule from a DNA template.",
        "Translation": "The process by which a ribosome builds a polypeptide chain using the genetic code from mRNA.",
        "Okazaki Fragments": "Short, newly synthesized DNA fragments that are formed on the lagging template strand during replication.",
        "Helicase": "The 'zipper' enzyme that unwinds the DNA double helix during replication.",
        "Ligase": "The 'glue' enzyme that joins DNA fragments (like Okazaki fragments) together.",
        "Codon": "A sequence of three nucleotides that together form a unit of genetic code in a DNA or RNA molecule.",
        "Intron": "A segment of a DNA or RNA molecule which does not code for proteins and interrupts the sequence of genes.",
        "Exon": "A segment of a DNA or RNA molecule containing information coding for a protein or peptide sequence.",
        "Plasmid": "A small, circular, double-stranded DNA molecule that is distinct from a cell's chromosomal DNA (common in bacteria).",
        "Allosteric Regulation": { def: "The binding of a regulatory molecule to a protein at one site that affects the function of the protein at a different site.", highFrequency: true },

        // --- Heredity & Biostatistics ---
        "Phenotype": "The set of observable characteristics of an individual resulting from the interaction of its genotype with the environment.",
        "Genotype": "The genetic constitution of an individual organism.",
        "Allele": "One of two or more alternative forms of a gene that arise by mutation and are found at the same place on a chromosome.",
        "Linked Genes": "Genes located close together on the same chromosome that tend to be inherited together.",
        "Recombination Frequency": "A measure of genetic linkage used in the creation of a genetic linkage map (1% RF = 1 centimorgan).",
        "Chi-Square Test": { def: "A statistical test used to determine if the observed data deviates significantly from the expected values.", highFrequency: true },
        "Null Hypothesis": { def: "A statement that there is no significant difference between the observed and expected results.", highFrequency: true },
        "P-Value": { def: "The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is correct (usually $p < 0.05$ is significant).", highFrequency: true },
        "Homeostasis": "The maintenance of a stable internal environment despite external changes.",

        // --- Evolution & Ecology ---
        "Natural Selection": { def: "The process by which organisms with favorable traits are more likely to survive and reproduce.", highFrequency: true },
        "Hardy-Weinberg Equilibrium": { def: "A principle stating that allele frequencies in a population will remain constant provided specific conditions are met.", highFrequency: true },
        "Genetic Drift": "Change in the allele frequency of a population due to random chance events, rather than natural selection.",
        "Phylogeny": "The evolutionary history of a species or group of related species.",
        "Cladogram": "A diagram used in cladistics to show relations among organisms.",
        "Trophic Level": { def: "The position an organism occupies in a food web (e.g., producer, primary consumer).", highFrequency: true },
        "Keystone Species": { def: "A species on which other species in an ecosystem largely depend, such that if it were removed the ecosystem would change drastically.", highFrequency: true },
        "Trophic Cascade": { def: "Powerful indirect interactions that can control entire ecosystems, occurring when a trophic level in a food web is suppressed.", highFrequency: true }
    }
};

if (typeof module !== 'undefined') module.exports = window.MATH_DATA;
