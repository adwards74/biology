/**
 * Sabrina Biology Elite 5.3 - Curriculum Data
 * Modeling the TJHSST 9th Grade IBET Biology Curriculum
 */

const MATH_DATA = { // Keeping variable name for compatibility with copied ui-render.js
    subjects: [
        {
            id: "cell-bio",
            title: "Cell Systems & Dynamics",
            code: "BIO-101",
            icon: "fas fa-microscope",
            color: "#10b981",
            difficulty: "intermediate",
            description: "Study of life at the cellular level: structure, enzymatic function, and membrane kinetics.",
            units: [
                {
                    title: "Ch 1: Cell Architecture",
                    intuition: "Cells are not just bags of chemicals; they are complex cities with specialized districts (organelles) and logistics systems.",
                    topics: ["Organelle Function", "Membrane Transport", "Enzyme Catalysis"],
                    lectures: [
                        { name: "1.1: The Cellular City", url: "lesson:bio:ch1-1" },
                        { name: "1.2: Membrane Gatekeepers", url: "lesson:bio:ch1-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why is the surface-area-to-volume ratio critical for cell efficiency?", answer: "Smaller cells have more surface area per unit volume, allowing faster nutrient exchange.", options: ["Large cells are stronger", "Smaller cells exchange nutrients faster", "Volume increases slower than surface area"], explanation: "As cells grow, volume (needs) increases faster than surface area (supply)." }
                        ]
                    }
                }
            ]
        },
        {
            id: "genetics",
            title: "The Molecular Blueprint",
            code: "BIO-201",
            icon: "fas fa-dna",
            color: "#06b6d4",
            difficulty: "advanced",
            description: "Decoding the flow of information from DNA to Protein. Gene regulation and expression.",
            units: [
                {
                    title: "Ch 2: Molecular Inheritance",
                    intuition: "DNA is the ultimate code. Transcription and Translation are the 'compilation' process of life.",
                    topics: ["DNA Replication", "Protein Synthesis", "Gene Expression"],
                    lectures: [
                        { name: "2.1: The Central Dogma", url: "lesson:bio:ch2-1" },
                        { name: "2.2: RNA Processing", url: "lesson:bio:ch2-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "How does DNA store information differently than a computer?", answer: "DNA uses a 4-base chemical code (A,T,C,G) instead of binary bits (0,1).", options: ["It uses binary", "It uses 4 chemical bases", "It is analog"], explanation: "DNA's quaternary code provides massive density for biological instructions." }
                        ]
                    }
                }
            ]
        },
        {
            id: "bioenergetics",
            title: "Energy & Metabolism",
            code: "BIO-301",
            icon: "fas fa-bolt",
            color: "#f59e0b",
            difficulty: "advanced",
            description: "Analysis of ATP production via Photosynthesis and Cellular Respiration.",
            units: [
                {
                    title: "Ch 3: The ATP Engine",
                    intuition: "Life is a constant battle against entropy. Energy processes capture and convert sunlight into usable chemical currency.",
                    topics: ["Photosynthesis", "Glycolysis", "Kreb's Cycle"],
                    lectures: [
                        { name: "3.1: Solar Capture", url: "lesson:bio:ch3-1" },
                        { name: "3.2: Chemical Combustion", url: "lesson:bio:ch3-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What is the primary role of ATP in the cell?", answer: "It acts as a reusable energy currency for cellular work.", options: ["Information storage", "Energy currency", "Structural support"], explanation: "ATP stores potential energy in high-energy phosphate bonds." }
                        ]
                    }
                }
            ]
        },
        {
            id: "heredity",
            title: "Classical Genetics",
            code: "BIO-401",
            icon: "fas fa-pills",
            color: "#8b5cf6",
            difficulty: "intermediate",
            description: "Statistical analysis of inheritance patterns and Mendelian logic.",
            units: [
                {
                    title: "Ch 4: Mendelian Logic",
                    intuition: "Traits are not blended; they are inherited as discrete units of information.",
                    topics: ["Monohybrid Crosses", "Pedigrees", "Non-Mendelian Traits"],
                    lectures: [
                        { name: "4.1: The Monk's Observations", url: "lesson:bio:ch4-1" },
                        { name: "4.2: Beyond Mendel", url: "lesson:bio:ch4-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What does a 3:1 ratio in the F2 generation tell us?", answer: "Both parents were heterozygous for the trait.", options: ["Both parents were dominant", "Both parents were recessive", "Both parents were heterozygous"], explanation: "Hidden recessive traits reappear in the F2 generation in a 1/4 ratio." }
                        ]
                    }
                }
            ]
        },
        {
            id: "stats-lab",
            title: "The TJ Scientist",
            code: "BIO-501",
            icon: "fas fa-flask",
            color: "#ef4444",
            difficulty: "advanced",
            description: "Biostatistics, data interpretation, and experimental design for IBET projects.",
            units: [
                {
                    title: "Ch 5: Data Mastery",
                    intuition: "Science is not just about what you saw; it's about whether what you saw was significant.",
                    topics: ["Chi-Square Analysis", "Experimental Design", "FRQ Drafting"],
                    lectures: [
                        { name: "5.1: Chi-Square Logic", url: "lesson:bio:ch5-1" },
                        { name: "5.2: The Lab Paper", url: "lesson:bio:ch5-2" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "If your Chi-square value is less than the critical value, what do you do?", answer: "Fail to reject the Null Hypothesis (Null is supported).", options: ["Reject the Null", "Fail to reject the Null", "Restart the experiment"], explanation: "A low Chi-square indicates that the observed difference is likely due to chance." }
                        ]
                    }
                }
            ]
        }
    ]
};

if (typeof module !== 'undefined') module.exports = MATH_DATA;
