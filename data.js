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
                    title: "Unit 5: Gene Expression",
                    intuition: "The Central Dogma: DNA is transcribed to RNA, which is translated into protein. One gene, one polypeptide.",
                    topics: ["Transcription", "mRNA Processing", "Translation", "Codon Table"],
                    lectures: [
                        { name: "5.1: Transcription & Translation", url: "lesson:bio:ch2-3" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What is the start codon and which amino acid does it code for?", answer: "AUG — Methionine", options: ["UAA — Stop", "AUG — Methionine", "GCA — Alanine"], explanation: "AUG is both the universal start codon and codes for the amino acid methionine." }
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
                            { title: "L1: Intuition", question: "Where does the oxygen released during photosynthesis come from?", answer: "From the splitting of water (photolysis)", options: ["From CO₂", "From glucose breakdown", "From the splitting of water (photolysis)"], explanation: "Water is split in PSII: 2H₂O → 4H⁺ + 4e⁻ + O₂. The oxygen you breathe comes from water, not CO₂." }
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
                            { title: "L1: Intuition", question: "How much ATP does aerobic respiration produce per glucose compared to fermentation?", answer: "~30-32 vs. 2", options: ["2 vs. 2", "~30-32 vs. 2", "~30-32 vs. 18"], explanation: "Without oxygen, only glycolysis can run (2 ATP). With oxygen, the full pathway yields ~30-32 ATP — about 15x more efficient." }
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
                            { title: "L1: Intuition", question: "What phenotype ratio do you expect from a monohybrid cross Aa × Aa?", answer: "3:1", options: ["1:1", "3:1", "9:3:3:1"], explanation: "A monohybrid cross of two heterozygotes produces 1 AA : 2 Aa : 1 aa genotype, which gives a 3:1 dominant:recessive phenotype ratio." }
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
                            { title: "L1: Intuition", question: "If two genes have a recombination frequency of 50%, what does that tell you?", answer: "They are on different chromosomes (unlinked)", options: ["They are very close together", "They are on different chromosomes (unlinked)", "They never recombine"], explanation: "RF of 50% means genes assort independently — they behave as if on different chromosomes. Linked genes always have RF < 50%." }
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
                    title: "Unit 11: Statistical Power",
                    intuition: "Is your data significant or just noise? Statistics provides the mathematical threshold for proof.",
                    topics: ["Chi-Square Analysis", "SEM & Error Bars", "Null Hypothesis Testing"],
                    lectures: [
                        { name: "11.1: The Chi-Square Test", url: "lesson:bio:ch5-1" }
                    ],
                    examples: [
                        {
                            title: "Chi-Square for Mendelian Ratios",
                            problem: "You observe 310 tall plants and 90 short plants in a cross expecting 3:1. Calculate χ².",
                            steps: [
                                "Expected: Tall = 300, Short = 100.",
                                "χ² = (310-300)²/300 + (90-100)²/100.",
                                "χ² = 100/300 + 100/100 = 0.33 + 1.0 = 1.33."
                            ],
                            intuition: "Since 1.33 < 3.84 (critical value for df=1), we fail to reject the null. The data supports the 3:1 ratio."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L3: Mastery", question: "What does it mean if your 95% Confidence Interval error bars for two groups OVERLAP?", answer: "Not statistically significant", options: ["Data is perfect", "Difference is significant", "Not statistically significant"], explanation: "Overlapping error bars suggest the real means could be the same." }
                        ]
                    }
                },
                {
                    title: "Unit 12: Experimental Design",
                    intuition: "A well-designed experiment eliminates all alternative explanations for the results.",
                    topics: ["Variables & Controls", "Sample Size", "Replication", "IBET Protocols"],
                    lectures: [
                        { name: "12.1: Designing the Lab", url: "lesson:bio:ch5-3" }
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
    ]
};

if (typeof module !== 'undefined') module.exports = window.MATH_DATA;
