/**
 * Sabrina Biology Elite 5.5 - Curriculum Data
 * Modeling the TJHSST 9th Grade IBET Biology Curriculum
 */

window.MATH_DATA = window.MATH_DATA || {};
window.MATH_DATA = {
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
                                "Surface Area: $4\\pi r^2$. $r=1 \\rightarrow 4\\pi$; $r=3 \\rightarrow 36\\pi$ (9x increase).",
                                "Volume: $4/3\\pi r^3$. $r=1 \\rightarrow 4/3\\pi$; $r=3 \\rightarrow 108/3\\pi$ (27x increase).",
                                "Calculated factor: $27 / 9 = 3$."
                            ],
                            intuition: "As the cell triples in size, its internal volume (needs) explodes 3x faster than its membrane (supply). This is geometric stress."
                        },
                        {
                            title: "The Biconcave Disc Advantage",
                            problem: "Why are red blood cells (RBCs) shaped like flattened discs instead of spheres?",
                            steps: [
                                "Spheres have the minimum surface area for a given volume.",
                                "Flattening the shape increases surface area without changing volume.",
                                "Result: Higher SA/V ratio for faster Oxygen diffusion."
                            ],
                            intuition: "In biology, a sphere is a 'fortress' (low exchange), while a flat disc is a 'trading post' (high exchange)."
                        },
                        {
                            title: "Analyzing the Alveoli Surface Area",
                            problem: "Humans have ~300 million alveoli ($r = 100 \\mu m$). What is the total surface area? How does this relate to SA/V logic?",
                            steps: [
                                "Area of 1 alveolus: $4 \\pi (10^{-4})^2 \\approx 1.25 \\times 10^{-7} m^2$.",
                                "Total Area for 300M: $(1.25 \\times 10^{-7}) \\times (3 \\times 10^8) = 37.5 m^2$.",
                                "Total for both lungs: $\\approx 75 m^2$."
                            ],
                            intuition: "A single lung 'sac' would have tiny surface area. By fragmenting the volume into 300 million micro-spheres, we create a surface area the size of a tennis court."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why do large cells often have highly folded membranes?", answer: "To maximize surface area", options: ["To look more complex", "To maximize surface area", "To store more energy"], explanation: "Folding increases the 'exchange surface' while keeping the total volume manageable." },
                            { title: "L2: Analysis", question: "If the linear dimensions of a cell double, how does the SA/V ratio change?", answer: "Decreases by half", options: ["Doubles", "Stays the same", "Decreases by half"], explanation: "SA/V for a cube is $6/s$. If $s$ goes from 1 to 2, the ratio goes from 6 to 3." },
                            { title: "L3: Mastery", question: "Which organelle synergy is primarily responsible for clearing misfolded proteins to restore homeostasis?", answer: "ER and Lysosome", options: ["Mitochondria and Nucleus", "ER and Lysosome", "Golgi and Vacuole"], explanation: "The ER quality control identifies misfolds, while the Lysosome (via autophagy) breaks them down." }
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
                    examples: [
                        {
                            title: "Calculating $\\Psi_s$ for a Root Cell",
                            problem: "A cell contains 0.3 M glucose at $20 ^\\circ C$. Calculate its solute potential $(\\Psi_s)$. Is it likely high or low relative to pure water?",
                            steps: [
                                "Equation: $\\Psi_s = -iCRT$.",
                                "Values: $i=1$ (glucose), $C=0.3$, $R=0.0831$, $T=273+20=293$.",
                                "Calculation: $-(1)(0.3)(0.0831)(293) = -7.3 \\text{ bars} \\approx -0.73 \\text{ MPa}$."
                            ],
                            intuition: "The value is negative (-0.73), meaning the solutes inside 'pull' water from the environment (where $\\Psi$ is closer to 0)."
                        },
                        {
                            title: "Drought Resistance & Osmotic Adjustment",
                            problem: "If soil $\\Psi = -0.8$ MPa, will water enter a root cell with $\\Psi_s = -1.2$ MPa and $\\Psi_p = +0.2$ MPa?",
                            steps: [
                                "Calculate tissue potential: $\\Psi = -1.2 + 0.2 = -1.0$ MPa.",
                                "Compare: Soil (-0.8) > Root (-1.0).",
                                "Result: Water enters the roots."
                            ],
                            intuition: "Plants survive dry soil by 'racing to the bottom' – dropping their solute potential lower than the soil's total potential."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "In which direction does water move regarding $\\Psi$?", answer: "High to Low", options: ["High to Low", "Low to High", "Against the gradient"], explanation: "Free energy dictates water moves from areas of high potential to low potential." },
                            { title: "L2: Analysis", question: "If $\\Psi_s = -0.5$ and $\\Psi_p = +0.2$, what is total $\\Psi$?", answer: "-0.3 MPa", options: ["-0.7 MPa", "-0.3 MPa", "+0.3 MPa"], explanation: "$\\Psi = \\Psi_s + \\Psi_p = -0.5 + 0.2 = -0.3$." },
                            { title: "L3: Mastery", question: "In a drought, a plant cell accumulates sucrose. How does this affect its ability to survive?", answer: "Lowers solute potential, increasing water intake", options: ["Increases turgor pressure directly", "Lowers solute potential, increasing water intake", "It has no effect"], explanation: "By lowering $ \Psi_s $, the cell creates a steeper gradient to draw in any available water." }
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
                    examples: [
                        {
                            title: "Interpreting $K_m$ and $V_{max}$",
                            problem: "Enzyme A has a $K_m$ of 2 mM. Enzyme B has a $K_m$ of 10 mM. Which enzyme has a higher affinity for its substrate?",
                            steps: [
                                "Identify: $K_m$ is inversely proportional to affinity.",
                                "Analysis: Enzyme A reaches half-max speed at a much lower concentration.",
                                "Conclusion: Enzyme A has a HIGHER affinity."
                            ],
                            intuition: "A low $K_m$ means the enzyme 'grabs' its substrate easily, even when very few molecules are around."
                        },
                        {
                            title: "Competitive vs. Non-Competitive Inhibition Data",
                            problem: "If an inhibitor keeps $V_{max}$ the same but increases $K_m$, what is the inhibition type? How do you overcome it?",
                            steps: [
                                "Same $V_{max}$: The enzyme can still reach full speed given enough substrate.",
                                "Higher $K_m$: The enzyme's affinity appears lower (needs more [S]).",
                                "Conclusion: Competitive Inhibition. Overcome by adding excess substrate."
                            ],
                            intuition: "Competitive inhibitors are like a 'distraction' at the front door. If you crowd the door with workers, the distraction is overwhelmed."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What happens to the rate of reaction if you add a non-competitive inhibitor?", answer: "$V_{max}$ decreases", options: ["Rate increases", "$V_{max}$ decreases", "Reaction stops"], explanation: "Non-competitive inhibitors change the enzyme's shape, making it less effective even if plenty of substrate is present." },
                            { title: "L2: Analysis", question: "How can you tell the difference between competitive and non-competitive inhibition using a rate graph?", answer: "Competitive can still reach $V_{max}$ at high [S]", options: ["Both look identical", "Competitive can still reach $V_{max}$ at high [S]", "Non-competitive increases $K_m$"], explanation: "Increasing substrate concentration 'washes out' the effect of a competitive inhibitor but not a non-competitive one." },
                            { title: "L3: Mastery", question: "In feedback inhibition, which enzyme in a pathway is typically targeted by the final product?", answer: "The first enzyme in the pathway", options: ["The last enzyme", "The first enzyme in the pathway", "All enzymes equally"], explanation: "Inhibiting the first commitment step prevents the wasteful buildup of all metabolic intermediates." }
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
                    examples: [
                        {
                            title: "DNA Density Analysis",
                            problem: "How many base pairs are contained in a 1 micrometer length of double-stranded DNA? (Assume 0.34 nm per bp).",
                            steps: [
                                "1 micrometer = 1000 nm.",
                                "Density = Total Length / Distance per bp.",
                                "Calculation: 1000 nm / 0.34 nm/bp ≈ 2,941 bp."
                            ],
                            intuition: "DNA is incredibly information-dense. A tiny fragment you can't even see with a light microscope already contains nearly 3000 letters of code."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why is one DNA strand built in fragments (Okazaki)?", answer: "5'→3' constraint", options: ["Because it is faster", "5'→3' constraint", "To prevent mutations"], explanation: "As the fork opens, the lagging strand must wait for enough space to build 'forward' in small chunks." },
                            { title: "L2: Analysis", question: "A sample has 20% Adenine. What is the % of Guanine?", answer: "30%", options: ["20%", "30%", "80%"], explanation: "A=20% -> T=20% (Total 40%). Remaining 60% is G+C, so G=30%." },
                            { title: "L3: Mastery", question: "In the Meselson-Stahl experiment, if DNA replication were CONSERVATIVE, what would be seen after one generation of growth in N14?", answer: "One heavy band and one light band", options: ["One intermediate band", "One heavy band and one light band", "Only one light band"], explanation: "Conservative replication keeps the original heavy parent together and makes a completely new light daughter, resulting in two distinct outer bands." }
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
                            { title: "L2: Analysis", question: "In a gene with 4 exons and 3 introns, how many unique mRNA configurations are possible if all exons can be alternatively spliced?", answer: "15", options: ["4", "7", "15"], explanation: "Possible combinations of 4 distinct items = $2^4 - 1$ (excluding the empty set) = 15." },
                            { title: "L3: Mastery", question: "Which epigenetic modification is most likely associated with X-inactivation in female mammals?", answer: "Heavy DNA Methylation", options: ["Histone Acetylation", "Heavy DNA Methylation", "Telomere shortening"], explanation: "Methylation adds a 'lock' to the DNA, condensing it into a Barr body to prevent transcription." }
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
                            { title: "L1: Intuition", question: "In the lac operon, what molecule acts as the 'inducer'?", answer: "Allolactose", options: ["Glucose", "Allolactose", "cAMP"], explanation: "Allolactose (a derivative of lactose) binds to the repressor and removes it from the operator." },
                            { title: "L2: Analysis", question: "What happens to the trp operon when tryptophan levels are HIGH?", answer: "Repressor binds, stopping transcription", options: ["Transcription increases", "Repressor binds, stopping transcription", "DNA is degraded"], explanation: "The trp operon is repressible. High levels of the product activate the repressor to stop further production (Feedback Inhibition)." },
                            { title: "L3: Mastery", question: "In CRISPR-Cas9, what determines the SPECIFICITY of the cut?", answer: "The 20-nucleotide sequence of the gRNA", options: ["The Cas9 enzyme itself", "The PAM sequence only", "The 20-nucleotide sequence of the gRNA"], explanation: "The guide RNA (gRNA) is complementary to the target DNA; if this match is perfect, the nuclease will cut." }
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
                        { name: "7.1: The Solar Panel — Photosynthesis", url: "lesson:bio:ch3-1" }
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
                        { name: "8.1: Cellular Respiration — Harvesting Energy", url: "lesson:bio:ch3-3" }
                    ],
                    examples: [
                        {
                            title: "Analyzing Anaerobic Threshold",
                            problem: "During intense exercise, muscle cells switch to lactic acid fermentation. Why does this cause a 'burning' sensation and how many ATP are produced per glucose compared to aerobic respiration?",
                            steps: [
                                "Identify the absence of O2 leads to glycolysis being the sole ATP source.",
                                "Lactic acid is produced to recycle NAD+.",
                                "Aerobic: ~32 ATP; Fermentation: 2 ATP.",
                                "Intuition: You are trading efficiency for speed to survive the sprint."
                            ],
                            intuition: "Fermentation is like a backup generator—it's loud, dirty, and inefficient, but it keeps the lights on."
                        }
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
                    examples: [
                        {
                            title: "Bayesian Carrier Risk",
                            problem: "Two carriers of Cystic Fibrosis (Aa x Aa) have two children. Both are healthy. What is the probability that the first child is a carrier?",
                            steps: [
                                "Observed: Child is healthy. Sample space reduced to {AA, Aa, aA}.",
                                "Probability of Aa in healthy set = 2 out of 3.",
                                "Result: 2/3 ≈ 67%."
                            ],
                            intuition: "The fact that the child is healthy ELIMINATES the possibility of 'aa', changing the denominator from 4 to 3."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What phenotype ratio do you expect from a monohybrid cross Aa × Aa?", answer: "3:1", options: ["1:1", "3:1", "9:3:3:1"], explanation: "A monohybrid cross of two heterozygotes produces 1 AA : 2 Aa : 1 aa genotype, which gives a 3:1 dominant:recessive phenotype ratio." },
                            { title: "L2: Analysis", question: "If a baby has Type O blood and the mother has Type A, what are the possible genotypes for the father?", answer: "i i, I^A i, or I^B i", options: ["I^A I^B", "i i, I^A i, or I^B i", "Only i i"], explanation: "The father must provide one 'i' allele. Therefore, he can be O (ii), heterozygous A (Ai), or heterozygous B (Bi)." },
                            { title: "L3: Mastery", question: "In a cross AaBb x AaBb, what is the probability of an offspring with genotype AAbb?", answer: "1/16", options: ["1/4", "1/8", "1/16"], explanation: "P(AA) = 1/4; P(bb) = 1/4. Multiplied: 1/4 * 1/4 = 1/16." }
                        ]
                    }
                },
                {
                    title: "Unit 10: Chromosomal Linkage",
                    intuition: "Genes on the same chromosome break Mendel's second law — unless crossing over separates them.",
                    topics: ["Linked Genes", "Recombination Frequency", "Gene Mapping"],
                    lectures: [
                        { name: "10.1: Chromosomal Linkage & Mapping", url: "lesson:bio:ch4-3" },
                        { name: "10.2: Epistasis & Non-Mendelian Flow", url: "lesson:bio:ch4-4" }
                    ],
                    examples: [
                        {
                            title: "Mapping Chromosome Distances",
                            problem: "In a cross between AaBb and aabb, 90% of offspring are parental (AaBb or aabb). What is the map distance between genes A and B?",
                            steps: [
                                "Identify recombinant percentage: 100% - 90% = 10%.",
                                "RF = 10%.",
                                "By definition, 1% RF = 1 map unit (cM).",
                                "Result: 10 cM apart on the same chromosome."
                            ],
                            intuition: "The farther apart two houses are on a street, the more likely a 'break' (crossing over) occurs between them."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "If two genes have a recombination frequency of 50%, what does that tell you?", answer: "They are on different chromosomes (unlinked)", options: ["They are very close together", "They are on different chromosomes (unlinked)", "They never recombine"], explanation: "RF of 50% means genes assort independently — they behave as if on different chromosomes. Linked genes always have RF < 50%." },
                            { title: "L2: Analysis", question: "If the recombination frequency between A and B is 10%, and B and C is 5%, what is the possible distance between A and C?", answer: "5% or 15%", options: ["15% only", "5% only", "5% or 15%"], explanation: "The order could be A-C-B (10-5=5) or A-B-C (10+5=15)." },
                            { title: "L3: Mastery", question: "In a 3-point cross, which offspring class is used to determine the middle gene?", answer: "The Double Crossover (DCO) class", options: ["The Parental class", "The Double Crossover (DCO) class", "The single crossover between A and B"], explanation: "The DCO class is the least frequent and shows a 'swap' of only the middle gene relative to the parents." }
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
                        { name: "11.1: The Chi-Square Test", url: "lesson:bio:u11-1" },
                        { name: "11.2: Error Analysis & SE", url: "lesson:bio:u11-2" }
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
                        { name: "12.1: Designing the Lab", url: "lesson:bio:u12-1" },
                        { name: "12.2: FRQ Writing Protocols (CER)", url: "lesson:bio:u12-2" }
                    ],
                    examples: [
                        {
                            title: "Designing the Negative Control",
                            problem: "You are testing the effect of light intensity on photosynthesis rate in Elodea plants. What should your negative control be?",
                            steps: [
                                "Identify the independent variable: Light intensity.",
                                "Identify the negative control: Group with zero light (complete darkness).",
                                "Goal: Establish the baseline bubble production without the treatment.",
                                "Intuition: If the dark group still makes bubbles, something other than light is causing the gas."
                            ],
                            intuition: "A negative control is your 'zero point'—it proves that your results are caused by your IV, not by ghosts in the machine."
                        }
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
            code: "BIO-600",
            icon: "fas fa-tree",
            color: "#65a30d",
            difficulty: "intermediate",
            description: "The big picture. How populations change over time and how energy flows through the biosphere.",
            units: [
                {
                    title: "Unit 13: Natural Selection & Phylogeny",
                    intuition: "Evolution is the unifying theory of biology. It explains how diversity arises from common ancestry through survival of the fittest.",
                    topics: ["Darwinian Selection", "Hardy-Weinberg Equilibrium", "Cladistics & Mapping"],
                    evolutionLink: "Biotechnology (CRISPR/Recombinant DNA) represents human-driven rapid evolution, a shift from geological timescales to technological timescales.",
                    lectures: [
                        { name: "13.1: The Mechanism of Change", url: "lesson:bio:ch7-1" },
                        { name: "13.2: Population Genetics (H-W)", url: "lesson:bio:ch7-2" }
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
                    title: "Unit 14: Ecosystem Dynamics",
                    intuition: "Energy flows, but matter cycles. Understanding the 10% rule explains why top predators are rare.",
                    topics: ["Trophic Levels", "Nutrient Cycling", "Community Interactions"],
                    lectures: [
                        { name: "14.1: Energy Flow Networks", url: "lesson:bio:ch8-1" },
                        { name: "14.2: Biodiversity & Resilience", url: "lesson:bio:ch8-2" }
                    ],
                    examples: [
                        {
                            title: "Applying the 10% Trophic Rule",
                            problem: "A grassland ecosystem captures 50,000 kJ of solar energy. How much energy is realistically sequestered by the hawks (tertiary consumers)?",
                            steps: [
                                "Plants (Producer) $\\rightarrow$ 50,000 kJ.",
                                "Insects (Primary) $\\rightarrow$ 5,000 kJ.",
                                "Frogs (Secondary) $\\rightarrow$ 500 kJ.",
                                "Hawks (Tertiary) $\\rightarrow$ 50 kJ."
                            ],
                            intuition: "Energy is lost as heat at every step. This is why there are millions of blades of grass but only a few hawks."
                        }
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
            code: "BIO-700",
            icon: "fas fa-laptop-code",
            color: "#6366f1",
            difficulty: "advanced",
            description: "Advanced bioinformatics and research logic. Integrating Python/R for biological data analysis and meta-analysis protocols.",
            units: [
                {
                    title: "Unit 15: Bioinformatics with Python",
                    intuition: "Modern biology is high-throughput. We use code to find patterns in billions of base pairs that the human eye would miss.",
                    topics: ["Sequence Alignment Algorithms", "Biopython Foundations", "Statistical Analysis with R"],
                    lectures: [
                        { name: "15.1: Python for Biologists", url: "lesson:bio:ch6-1" },
                        { name: "15.2: BLAST & Sequence Alignment", url: "lesson:bio:ch6-2" }
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
                    title: "Unit 16: The Research Literature Review",
                    intuition: "Science is a conversation. A literature review is how you map out that conversation before adding your own voice through experiments.",
                    topics: ["Meta-Analysis Protocols", "P-Hacking Awareness", "Database Mining (PubMed/NCBI)"],
                    lectures: [
                        { name: "16.1: Systematic Review Protocol", url: "lesson:bio:ch9-1" },
                        { name: "16.2: Advanced Stats: P-Hacking & Meta-Analysis", url: "lesson:bio:ch9-2" },
                        { name: "16.3: Chi-Square Distribution & Testing", url: "lesson:bio:ch9-3" },
                        { name: "16.4: Standard Error (SEM) & Confidence Intervals", url: "lesson:bio:ch9-4" },
                        { name: "16.5: Experimental Design & Variable Control", url: "lesson:bio:ch9-5" },
                        { name: "16.6: FRQ Protocol: Claims, Evidence, Reasoning", url: "lesson:bio:ch9-6" }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Research Ethics",
                                question: "What is the primary danger of P-Hacking in biological research?",
                                answer: "False positive results",
                                options: ["Data loss", "False positive results", "High cost", "Slow publication"],
                                explanation: "P-Hacking artificially forces a $p < 0.05$ result, leading to conclusions that aren't actually true or reproducible."
                            },
                            {
                                title: "L2: Quantitative Reasoning",
                                question: "If the critical value for $\\chi^2$ is 3.84 and your calculated value is 4.52, what is your conclusion?",
                                answer: "Reject the Null Hypothesis",
                                options: ["Accept the Null Hypothesis", "Reject the Null Hypothesis", "Ignore the result", "Increase sample size"],
                                explanation: "If calculated $\\chi^2 >$ critical value, the difference is statistically significant, so we reject the Null (chance) hypothesis."
                            },
                            {
                                title: "L3: Experimental Mastery",
                                question: "In a study on plant growth, why is a high sample size ($n$) preferred when calculating SEM?",
                                answer: "Decreases uncertainty of the mean",
                                options: ["Increases the mean", "Decreases uncertainty of the mean", "Changes the variable", "Speeds up growth"],
                                explanation: "SEM is calculated as $SD / \\sqrt{n}$. As $n$ grows, SEM shrinks, meaning our sample mean is a much more precise estimate of the true population."
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

window.BIO_DATA = window.MATH_DATA; // Aliasing for clarity in Bio Portal

if (typeof module !== 'undefined') module.exports = window.MATH_DATA;
