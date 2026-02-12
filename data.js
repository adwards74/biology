/**
 * Sabrina Biology Elite 5.3 - Curriculum Data
 * Modeling the TJHSST 9th Grade IBET Biology Curriculum
 */

window.MATH_DATA = { // Keeping variable name for compatibility with copied ui-render.js
    subjects: [
        {
            id: "cell-systems",
            title: "Cell Systems & Dynamics",
            code: "BIO-100",
            icon: "fas fa-microscope",
            color: "#10b981",
            difficulty: "intermediate",
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
                            problem: "If a cell's radius increases from $1 \mu m$ to $3 \mu m$, by what factor does the volume increase relative to the surface area?",
                            steps: [
                                "Surface Area formula: $4\pi r^2$. $r=1 \rightarrow 4\pi$, $r=3 \rightarrow 36\pi$ (9x increase).",
                                "Volume formula: $4/3 \pi r^3$. $r=1 \rightarrow 4/3\pi$, $r=3 \rightarrow 108/3\pi$ (27x increase).",
                                "Ratio check: Volume increased 3x MORE than surface area."
                            ],
                            intuition: "Growth causes 'internal stress'—the cell needs 27x more food but only has 9x more door space."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why do large cells often have highly folded membranes?", answer: "To maximize surface area without significantly increasing volume.", options: ["To look more complex", "To maximize surface area", "To store more energy"], explanation: "Folding increases the 'exchange surface' while keeping the total volume manageable." },
                            { title: "L3: Mastery", question: "Which cell shape would be MOST efficient at nutrient absorption per unit volume?", answer: "A flat, thin disc (like a red blood cell).", options: ["A perfect sphere", "A long cylinder", "A flat thin disc"], explanation: "Extremely thin shapes minimize the distance to the center, maximizing the SA/V ratio." }
                        ]
                    }
                },
                {
                    title: "Unit 2: The Semi-Permeable Gate",
                    intuition: "Transport is not just moving things; it is a battle against gradients and water potential.",
                    topics: ["Water Potential ($\Psi$)", "Osmoregulation", "Active Transport Kinetics"],
                    lectures: [
                        { name: "2.1: Water Potential Logic", url: "lesson:bio:ch1-3" },
                        { name: "2.2: Active Loading Systems", url: "lesson:bio:ch1-4" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "In which direction does water move regarding $\Psi$?", answer: "From High $\Psi$ to Low $\Psi$.", options: ["High to Low", "Low to High", "Against the gradient"], explanation: "Free energy dictates water moves from areas of high potential to low potential." },
                            { title: "L2: Analysis", question: "If $\Psi_s = -0.5$ and $\Psi_p = +0.2$, what is total $\Psi$?", answer: "-0.3 MPa", options: ["-0.7 MPa", "-0.3 MPa", "+0.3 MPa"], explanation: "$\Psi = \Psi_s + \Psi_p = -0.5 + 0.2 = -0.3$." }
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
                            { title: "L1: Intuition", question: "What happens to the rate of reaction if you add a non-competitive inhibitor?", answer: "The $V_{max}$ decreases regardless of substrate concentration.", options: ["Rate increases", "$V_{max}$ decreases", "Reaction stops"], explanation: "Non-competitive inhibitors change the enzyme's shape, making it less effective even if plenty of substrate is present." }
                        ]
                    }
                }
            ]
        },
        {
            id: "molecular-genetics",
            title: "The Molecular Blueprint",
            code: "BIO-200",
            icon: "fas fa-dna",
            color: "#06b6d4",
            difficulty: "advanced",
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
                            { title: "L1: Intuition", question: "Why is one DNA strand built in fragments (Okazaki)?", answer: "DNA Polymerase can only build in the $5' \rightarrow 3'$ direction.", options: ["Because it is faster", "$5' \rightarrow 3'$ constraint", "To prevent mutations"], explanation: "As the fork opens, the lagging strand must wait for enough space to build 'forward' in small chunks." }
                        ]
                    }
                }
            ]
        },
        {
            id: "biostatistics",
            title: "The TJ Scientist (Quantitative)",
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
                        { name: "11.1: The Chi-Square Test", url: "lesson:bio:ch5-1" },
                        { name: "11.2: Error Bar Logic", url: "lesson:bio:ch5-2" }
                    ],
                    examples: [
                        {
                            title: "Chi-Square for Mendelian Ratios",
                            problem: "You observe 310 tall plants and 90 short plants in a cross expecting 3:1. Calculate $\chi^2$.",
                            steps: [
                                "Expected: Tall = 300, Short = 100.",
                                "$\chi^2 = (310-300)^2/300 + (90-100)^2/100$.",
                                "$\chi^2 = 100/300 + 100/100 = 0.33 + 1.0 = 1.33$."
                            ],
                            intuition: "Since $1.33 < 3.84$ (critical value for df=1), we fail to reject the null. The data supports the 3:1 ratio."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L3: Mastery", question: "What does it mean if your 95% Confidence Interval error bars for two groups OVERLAP?", answer: "The difference between the groups is likely NOT statistically significant.", options: ["Data is perfect", "Difference is significant", "Not statistically significant"], explanation: "Overlapping error bars suggest the real means could be the same." }
                        ]
                    }
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined') module.exports = window.MATH_DATA;
