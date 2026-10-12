/**
 * Sabrina Biology Elite 5.5 - Curriculum Data
 * Modeling the TJHSST 9th Grade IBET Biology Curriculum
 * Updated: Fix Unit 13.3 visibility
 */

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
                    intuition: "The key idea: geometry sets the budget for all exchange. A cell's membrane is its only interface with the world — every nutrient in, every waste product out, must cross it — yet its volume (its demand) grows as the cube of its radius while its surface (its supply) grows only as the square. That mismatch is why cells stay microscopic, why large cells fold their membranes, and why you — a giant multicellular organism — are essentially a cooperative of trillions of tiny SA/V-optimized units wrapped in specialized exchange organs (lungs, intestines, kidneys). Visualize a warehouse with a single loading door: doubling the warehouse quadruples the floor space but only doubles the doors — eventually deliveries cannot keep up. This same ratio logic resurfaces in Unit 2 (transport rates scale with membrane area), Unit 7 (thylakoid stacking), and Unit 8 (mitochondrial cristae) — it is the master constraint of cell design.",
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
                            intuition: "The key idea: tripling the radius multiplies surface area by 9 but volume by 27 — needs outrun supply by a factor of 3. This 'geometric stress' is not a metaphor; it is the arithmetic that caps cell size. Picture a city whose population triples while its roads only double: gridlock is mathematically inevitable. Evolution's workarounds — staying small, folding membranes, going multicellular with dedicated transport (Unit 8 preview) — are all strategies for beating this one equation. Whenever you see a folded biological surface from here on (villi, alveoli, cristae), ask: 'what SA/V problem is this solving?'"
                        },
                        {
                            title: "The Biconcave Disc Advantage",
                            problem: "Why are red blood cells (RBCs) shaped like flattened discs instead of spheres?",
                            steps: [
                                "Spheres have the minimum surface area for a given volume.",
                                "Flattening the shape increases surface area without changing volume.",
                                "Result: Higher SA/V ratio for faster Oxygen diffusion."
                            ],
                            intuition: "The key idea: shape is a design choice about exchange. A sphere minimizes surface area for a given volume — perfect for something that wants isolation — while flattening into a biconcave disc raises surface area without adding volume, maximizing the membrane available for oxygen diffusion. Red blood cells even jettison their nucleus to make room for more hemoglobin: the entire cell is optimized around one SA/V mission. This is why sickle-cell disease is so devastating — a single amino-acid swap deforms the disc into a crescent, wrecking the shape-function match and clogging capillaries. Form follows function, literally, in every unit of this course."
                        },
                        {
                            title: "Analyzing the Alveoli Surface Area",
                            problem: "Humans have ~300 million alveoli ($r = 100 \\mu m$). What is the total surface area? How does this relate to SA/V logic?",
                            steps: [
                                "Area of 1 alveolus: $4 \\pi (10^{-4})^2 \\approx 1.25 \\times 10^{-7} m^2$.",
                                "Total Area for 300M: $(1.25 \\times 10^{-7}) \\times (3 \\times 10^8) = 37.5 m^2$.",
                                "Total for both lungs: $\\approx 75 m^2$."
                            ],
                            intuition: "The key idea: fragmentation multiplies surface without multiplying volume. One big sac has the area of a balloon; 300 million tiny alveoli have the area of a tennis court (~75 m²) — same air volume, far greater exchange surface. It is the SA/V principle scaled up to an organ. This is why emphysema is cruel: the disease destroys alveolar walls, merging micro-spheres into fewer, larger sacs — the lung literally un-fragments itself, and gas exchange collapses even though lung volume looks normal from the outside. Structure is function, and here the structure is pure geometry."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why do large cells often have highly folded membranes?", answer: "To maximize surface area", options: ["To look more complex", "To maximize surface area", "To store more energy"], explanation: "The key idea is the surface-area-to-volume ratio. A cell's membrane is its interface with the world — nutrients in, waste out — but volume (demand) grows as $r^3$ while surface area (supply) grows only as $r^2$. Folding the membrane boosts exchange surface without paying the full volume cost. Wrong-answer watch: 'to look more complex' confuses appearance with function — every structure here is about transport economics. This same SA/V logic explains why your small intestine is folded into villi and why large organisms need circulatory systems (Unit 8 preview)." },
                            { title: "L2: Analysis", question: "If the linear dimensions of a cell double, how does the SA/V ratio change?", answer: "Decreases by half", options: ["Doubles", "Stays the same", "Decreases by half"], explanation: "The key idea is that surface area and volume scale differently. For a cube, $SA = 6s^2$ and $V = s^3$, so $SA/V = 6/s$ — the ratio itself shrinks as $s$ grows. Doubling $s$ from 1 to 2 makes the surface grow 4x but the volume 8x, so the ratio drops from 6 to 3: exactly halved. Wrong-answer watch: 'doubles' treats the ratio like a linear dimension, and 'stays the same' ignores that volume outruns surface area. This is why cells cannot simply grow bigger — it is the geometric reason behind Unit 1's whole story, and why large animals evolved folded exchange surfaces like lungs and intestines." },
                            { title: "L3: Mastery", question: "Which organelle synergy is primarily responsible for clearing misfolded proteins to restore homeostasis?", answer: "ER and Lysosome", options: ["Mitochondria and Nucleus", "ER and Lysosome", "Golgi and Vacuole"], explanation: "The key idea is a two-step quality-control pipeline: detection, then destruction. Chaperone proteins in the ER inspect newly made proteins; misfolded ones are tagged and shipped out. The lysosome — the cell's recycling center — then engulfs them via autophagy and digests them back into amino acids. Wrong-answer watch: 'Golgi and Vacuole' sounds plausible, but the Golgi ships proteins forward (it does not destroy them), and the vacuole is the plant equivalent — animal cells use lysosomes. 'Mitochondria and Nucleus' handle energy and blueprints, not cleanup. This is why failed protein clearance is implicated in neurodegenerative diseases like Alzheimer's — when the cleanup crew falls behind, toxic aggregates accumulate." }
                        ],
                        "javaLogic": "cell_transport"
                    }
                },
                {
                    title: "Unit 2: The Semi-Permeable Gate",
                    intuition: "The key idea: water is life's solvent, and every cell is a tiny vessel floating in a thermodynamic sea. Water does not 'decide' where to go — it follows free energy downhill, from high water potential to low — and the cell's survival depends on managing that flow: keeping enough water to stay turgid, excluding enough to avoid bursting. Picture a boat with a semi-permeable hull in waters of varying saltiness: the crew (active transport, solute management) must constantly bail and ballast against the gradient. This battle connects backward to Unit 1 — osmosis rates scale with membrane surface area — and forward to Unit 14, where whole ecosystems are shaped by water availability. Master $\\Psi$, and you have mastered the physics half of plant biology.",
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
                            intuition: "The key idea: the negative sign is the thirst. Pure water sits at $\\Psi = 0$ — the maximum — and every dissolved solute lowers it, so a root cell at −0.73 MPa is 'below' its surroundings and water flows downhill into it. Think of a dry sponge: its emptiness is what pulls water in. The equation $\\Psi_s = -iCRT$ just quantifies the sponge — more solute, higher temperature, greater pull. This single number predicts whether a plant drinks or wilts, which is why agronomists measure soil $\\Psi$ to schedule irrigation: farming, at bottom, is water-potential management."
                        },
                        {
                            title: "Drought Resistance & Osmotic Adjustment",
                            problem: "If soil $\\Psi = -0.8$ MPa, will water enter a root cell with $\\Psi_s = -1.2$ MPa and $\\Psi_p = +0.2$ MPa?",
                            steps: [
                                "Calculate tissue potential: $\\Psi = -1.2 + 0.2 = -1.0$ MPa.",
                                "Compare: Soil (-0.8) > Root (-1.0).",
                                "Result: Water enters the roots."
                            ],
                            intuition: "The key idea: when the soil dries, its $\\Psi$ falls — and the plant must fall faster. By synthesizing solutes (sugars, ions, proline), the root cell drives its own $\\Psi$ below the soil's, keeping the gradient pointed inward: a literal 'race to the bottom.' But this race has a cost — manufacturing solutes burns energy that could have grown leaves. It is an evolutionary gamble: pay metabolic rent to keep drinking, or conserve energy and risk desiccation. Natural selection has run this trade-off for millions of years (Unit 13), which is why desert plants are such extravagant chemists. Survival, here, is a thermodynamic bidding war."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "In which direction does water move regarding $\\Psi$?", answer: "High to Low", options: ["High to Low", "Low to High", "Against the gradient"], explanation: "The key idea is free energy: water, like everything else, flows downhill energetically. Water potential ($\\Psi$) measures that free energy, and pure water is defined as $\\Psi = 0$ — the maximum. Any solutes or pressure lower it, so water spontaneously moves from high $\\Psi$ toward low $\\Psi$, with no ATP required. Wrong-answer watch: 'against the gradient' describes active transport, which costs energy — osmosis is passive, so it can never go uphill on its own. This is why salting a slug (or eggplant) draws water out: the salt makes the outside $\\Psi$ plummet, and water obediently follows the gradient." },
                            { title: "L2: Analysis", question: "If $\\Psi_s = -0.5$ and $\\Psi_p = +0.2$, what is total $\\Psi$?", answer: "-0.3 MPa", options: ["-0.7 MPa", "-0.3 MPa", "+0.3 MPa"], explanation: "The key idea is that water potential is additive: total $\\Psi$ is simply the sum of its components, $\\Psi = \\Psi_s + \\Psi_p$. Here the solute potential ($-0.5$ MPa) pulls water in while the turgor pressure ($+0.2$ MPa) pushes back, giving $-0.5 + 0.2 = -0.3$ MPa. Wrong-answer watch: '$-0.7$' subtracts the pressure term as if turgor sucked water in — but pressure potential is positive because it pushes outward against the wall. '$+0.3$' drops the negative sign, and in thermodynamics the sign IS the physics: negative means water is still drawn inward. This bookkeeping is exactly what plant physiologists do to predict wilting." },
                            { title: "L3: Mastery", question: "In a drought, a plant cell accumulates sucrose. How does this affect its ability to survive?", answer: "Lowers solute potential, increasing water intake", options: ["Increases turgor pressure directly", "Lowers solute potential, increasing water intake", "It has no effect"], explanation: "The key idea is osmotic adjustment: the cell deliberately makes its interior 'saltier' to win the tug-of-war for water. Accumulating sucrose drives $\\Psi_s$ more negative, which drags total $\\Psi$ below the dry soil's potential — steepening the gradient so water still flows inward even when the soil is nearly dry. Wrong-answer watch: 'increases turgor pressure directly' skips a step — turgor rises only as a consequence of water entering; the mechanism is the gradient. 'No effect' ignores thermodynamics entirely. This is why desert plants and drought-resistant crops invest precious energy in manufacturing solutes: survival is worth the metabolic cost, an evolutionary trade-off we will revisit in Unit 13." }
                        ],
                        "javaLogic": "water_potential"
                    }
                },
                {
                    title: "Unit 3: Biocatalysis & Enzymes",
                    intuition: "The key idea: at body temperature, most biologically necessary reactions would take centuries — enzymes make them take milliseconds by offering an easier path, not by pushing harder. Picture a mountain pass versus climbing straight over the peak: the enzyme is the pass, lowering the activation-energy barrier so more molecules have enough energy to cross. Crucially, enzymes do not change the reaction's start or end points — no energy is created or spent — which is why they are never consumed. This connects forward to Units 7–8, where every step of photosynthesis and respiration is enzyme-catalyzed, and to Unit 5, where the 'tools' themselves are the regulated products of genes. Control the enzyme, and you control the chemistry of life.",
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
                            intuition: "The key idea: $K_m$ is the substrate concentration at half-maximum speed, so a low $K_m$ means the enzyme is already working hard when substrate is scarce — high affinity. Evolution tunes this number like a thermostat: hexokinase (low $K_m$) grabs glucose constantly to feed the brain, while glucokinase (high $K_m$) in the liver only kicks in after a meal floods the blood with glucose. Same reaction, different $K_m$, different job. When you see a $K_m$ value, ask the teleological question: 'what lifestyle did this enzyme evolve for?' — the number is a fossil record of the cell's priorities."
                        },
                        {
                            title: "Competitive vs. Non-Competitive Inhibition Data",
                            problem: "If an inhibitor keeps $V_{max}$ the same but increases $K_m$, what is the inhibition type? How do you overcome it?",
                            steps: [
                                "Same $V_{max}$: The enzyme can still reach full speed given enough substrate.",
                                "Higher $K_m$: The enzyme's affinity appears lower (needs more [S]).",
                                "Conclusion: Competitive Inhibition. Overcome by adding excess substrate."
                            ],
                            intuition: "The key idea: competitive inhibition is a numbers game at a single binding site. The inhibitor and substrate are rival suitors for the active site — add enough substrate and the inhibitor gets outcompeted, which is why $V_{max}$ is recoverable but apparent $K_m$ rises. This reversibility is medically precious: statins, the world's most prescribed drugs, are competitive inhibitors of HMG-CoA reductase (the cholesterol-making enzyme) — and their effect can be modulated precisely because flooding or starving the pathway shifts the competition. A 'distraction at the front door' that physicians have learned to dose to the milligram."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What happens to the rate of reaction if you add a non-competitive inhibitor?", answer: "$V_{max}$ decreases", options: ["Rate increases", "$V_{max}$ decreases", "Reaction stops"], explanation: "The key idea is allosteric sabotage: a non-competitive inhibitor binds somewhere other than the active site and warps the enzyme's shape. A bent keyhole cannot be fixed by pushing more keys in — even at saturating substrate concentrations, each enzyme molecule works at reduced efficiency, so $V_{max}$ falls while $K_m$ (affinity) stays roughly the same. Wrong-answer watch: 'reaction stops' is too absolute — the enzyme still functions, just sluggishly; 'rate increases' is the opposite of inhibition. This is why many real drugs are non-competitive inhibitors: their effect cannot be outcompeted by the body's own substrate buildup, making dosing predictable." },
                            { title: "L2: Analysis", question: "How can you tell the difference between competitive and non-competitive inhibition using a rate graph?", answer: "Both look identical", options: ["Both look identical", "Competitive can still reach $V_{max}$ at high [S]", "Non-competitive increases $K_m$"], explanation: "The key idea is that competition can be outnumbered. A competitive inhibitor fights substrate molecules for the same active site, so flooding the system with substrate 'washes out' the inhibitor — the enzyme can still reach its normal $V_{max}$, it just needs more substrate to get there (higher apparent $K_m$). A non-competitive inhibitor, deforming the enzyme from afar, can never be washed out: $V_{max}$ stays depressed no matter how much substrate you add. Wrong-answer watch: 'both look identical' is only true at low substrate — the high-[S] tail of the curve is the diagnostic. 'Non-competitive increases $K_m$' mixes up the parameters: that is the competitive signature. In the IBET lab you will plot this as Lineweaver-Burk lines — parallel shifts versus intersecting ones." },
                            { title: "L3: Mastery", question: "In feedback inhibition, which enzyme in a pathway is typically targeted by the final product?", answer: "The first enzyme in the pathway", options: ["The last enzyme", "The first enzyme in the pathway", "All enzymes equally"], explanation: "The key idea is economic: shut down the assembly line at the first committed step. If the final product inhibits the pathway's first enzyme, no energy or raw material is wasted building intermediates that will never be used — everything downstream simply never gets made. Wrong-answer watch: inhibiting 'the last enzyme' would let all the intermediates pile up wastefully, like stopping a factory at the shipping dock instead of canceling the supply order. 'All enzymes equally' is redundant overkill; one well-placed brake is faster and cheaper. This logic echoes in Unit 6: the trp operon does the same thing at the transcriptional level — biology reuses the 'brake early' principle at every layer of control." }
                        ],
                        "javaLogic": "enzyme_kinetics"
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
                    intuition: "The key idea: DNA's structure solves two contradictory jobs at once. It must be stable enough to preserve information for a lifetime (hydrogen bonds and base stacking hold the duplex together), yet accessible enough to be copied and read on demand (the strands unzip like a zipper). The antiparallel double helix with complementary base pairing is the elegant compromise: each strand is simultaneously a backup and a template for the other. Picture a zipper archive that is also the backup drive — damage one side and the other can restore it. This dual role connects forward to Unit 5 (reading the code via transcription/translation) and Unit 6 (editing it with CRISPR), and backward to Unit 3 (the enzymes — helicase, polymerase, ligase — that operate the machinery).",
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
                            intuition: "The key idea: 2,941 base pairs per micrometer means your genome's ~3 billion letters would stretch about 2 meters if unwound — all packed into a nucleus 6 micrometers wide. That million-fold compaction is achieved by spooling DNA around histone proteins like thread on bobbins, then coiling the coils. The density is the point: information storage is cheap, but access must be regulated — which is exactly why Unit 5's epigenetics (methylation, histone modification) exists. Packaging is not just storage; it is the first layer of gene control."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Intuition",
                                question: "Why is one DNA strand built in fragments (Okazaki)?",
                                answer: "5'→3' constraint",
                                options: ["Because it is faster", "5'→3' constraint", "To prevent mutations"],
                                explanation: "The key idea is a hard mechanical constraint: DNA polymerase can only add nucleotides to a free 3' end, so it synthesizes strictly 5'→3'. At the replication fork, one template strand runs the 'right' way (leading strand, built continuously), but the other runs antiparallel — so polymerase must wait for the fork to open, then build backward in short 'forward' chunks: Okazaki fragments, later stitched together by ligase. Wrong-answer watch: 'because it is faster' — fragment assembly is actually the awkward workaround, not a speedup; 'to prevent mutations' is proofreading's job, not the fragments'. This is why the lagging strand is central to the telomere problem: chromosome ends cannot be fully copied by this backward-building trick."
                            },
                            {
                                title: "L2: Analysis",
                                question: "A sample has 20% Adenine. What is the % of Guanine?",
                                answer: "30%",
                                options: ["20%", "30%", "80%"],
                                explanation: "The key idea is Chargaff's rules: base pairing makes the four percentages interdependent, not independent. A pairs with T, so %A = %T = 20% (40% together). That leaves 60% for the G–C pair, split evenly: %G = %C = 30%. Wrong-answer watch: '80%' adds G to A instead of subtracting the A–T share first; '20%' confuses G with A. This is why Watson and Crick's model had to be a double helix with specific pairing — Chargaff's numbers were the constraint the structure had to satisfy, a beautiful case of data dictating theory."
                            },
                            {
                                title: "L3: Mastery",
                                question: "In the Meselson-Stahl experiment, if DNA replication were CONSERVATIVE, what would be seen after one generation of growth in N14?",
                                answer: "One heavy band and one light band",
                                options: ["One intermediate band", "One heavy band and one light band", "Only one light band"],
                                explanation: "The key idea is what each model predicts for the Meselson–Stahl density gradient. Conservative replication keeps the original heavy (N15) duplex completely intact and builds one all-new light (N14) duplex — so after one generation you would see two separate bands: one heavy, one light. (The real result was a single intermediate band, supporting the semi-conservative model.) Wrong-answer watch: 'one intermediate band' is the semi-conservative prediction — mixing the models up is exactly what the question tests. This is why the experiment is legendary: three mutually exclusive models, one clean gradient, and a single decisive observation."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 5: Gene Expression & Regulation",
                    intuition: "The key idea: every cell in your body carries the same genome, yet a neuron and a skin cell are utterly different — the difference is regulation, not DNA. DNA → RNA → protein is the hardware pipeline; transcription factors, splicing, and epigenetic marks are the software deciding which apps launch, when, and for how long. Picture identical pianos playing different symphonies: the keys (genes) are the same, the performance (expression pattern) is everything. This connects back to Unit 3 (the regulated 'apps' are mostly enzymes) and forward to Unit 6, where bacteria run the same idea with simpler switches — operons. Life's complexity is not in the gene count; it is in the control logic.",
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
                            intuition: "The key idea: modularity multiplies diversity without new genes. By mixing and matching exons, one gene yields many proteins — humans get 100,000+ proteins from ~20,000 genes. Evolution loves this trick: a new exon combination can create a new protein function without duplicating the whole gene, so innovation is cheap and failures are survivable. It is the same principle as LEGO (or, less playfully, as alternative splicing in the brain, where splicing diversity is highest). When Unit 13 asks how complexity evolves without proportional genome growth, alternative splicing is a large part of the answer."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What is the primary benefit of the 5' G-cap and 3' Poly-A tail?", answer: "Protection and Export", options: ["Encoding amino acids", "Protection and Export", "DNA Replication"], explanation: "The key idea is that mRNA is fragile and needs both armor and a passport. The 5' G-cap blocks exonucleases from chewing the transcript and helps ribosomes recognize it; the 3' poly-A tail resists degradation from the other end and signals 'ready for export' to the nuclear pore. Wrong-answer watch: 'encoding amino acids' is the coding region's job — the cap and tail are untranslated; 'DNA replication' involves a different molecule in a different place entirely. This is why mRNA vaccines are engineered with optimized caps and tails: without them, the therapeutic message would be shredded before a ribosome ever read it." },
                            { title: "L2: Analysis", question: "In a gene with 4 exons and 3 introns, how many unique mRNA configurations are possible if all exons can be alternatively spliced?", answer: "15", options: ["4", "7", "15"], explanation: "The key idea is combinatorial explosion: each exon is an independent in/out choice. With 4 exons, every subset is a possible mRNA — that is $2^4 = 16$ combinations, minus the empty set (a transcript with no exons is useless), giving 15. Wrong-answer watch: '4' counts the exons instead of their combinations; '7' is $2^3 - 1$ — the classic off-by-one from miscounting exons. This is why ~20,000 human genes can produce well over 100,000 proteins: alternative splicing is evolution's way of getting a proteome far larger than the genome." },
                            { title: "L3: Mastery", question: "Which epigenetic modification is most likely associated with X-inactivation in female mammals?", answer: "Heavy DNA Methylation", options: ["Histone Acetylation", "Heavy DNA Methylation", "Telomere shortening"], explanation: "The key idea is dosage compensation through lockdown: females have two X chromosomes but need one X's worth of gene product, so one X is silenced by heavy DNA methylation. Methyl groups recruit proteins that condense the chromosome into a Barr body — heterochromatin so tightly packed that transcription machinery cannot access it. Wrong-answer watch: 'histone acetylation' does the opposite — it loosens chromatin and activates genes; 'telomere shortening' is about aging, not silencing. This is why calico cats are (almost always) female: random X-inactivation in each cell creates the mosaic orange/black patches — a visible map of epigenetics." }
                        ]
                    }
                },
                {
                    title: "Unit 6: Control Systems (Operons & Biotech)",
                    intuition: "The key idea: gene expression is expensive — every mRNA and protein costs ATP and raw materials — so bacteria evolved to manufacture enzymes only on demand. Operons cluster related genes under one switch (promoter + operator), letting a single repressor or activator control a whole metabolic pathway at once. The 'smart thermostat' analogy holds: sense the environment (lactose present? tryptophan scarce?), then run the heater only when needed. This is the prokaryotic answer to Unit 5's regulation problem — simpler than eukaryotic enhancers and chromatin, but the same economic logic: do not pay for proteins you are not using. Jacob and Monod's Nobel-winning insight was that genes are not just blueprints but circuits.",
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
                            intuition: "The key idea: the lac operon computes a logical AND — transcribe lactose-digesting enzymes only if lactose is present AND glucose is absent. Lactose (via allolactose) removes the repressor; low glucose raises cAMP, which activates CAP to boost transcription. Either signal alone gives weak expression; both together give full throttle. Why the dual control? Glucose is the preferred fuel — burning lactose while glucose sits available would be metabolic folly. This two-input logic gate, built from proteins and DNA, is the ancestor of every genetic circuit in synthetic biology — and a preview of the combinatorial control you will see in eukaryotic gene regulation."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "In the lac operon, what molecule acts as the 'inducer'?", answer: "Allolactose", options: ["Glucose", "Allolactose", "cAMP"], explanation: "The key idea is molecular recognition: the inducer is the specific signal the operon evolved to detect. Lactose is converted to allolactose, which fits the repressor protein like a key, changing its shape so it releases the operator DNA — freeing RNA polymerase to transcribe the lac genes. Wrong-answer watch: 'glucose' is the wrong signal — glucose actually suppresses the operon via catabolite repression (the cell prefers glucose); 'cAMP' is the co-activator for CAP, not the inducer that removes the repressor. This is why the system uses allolactose rather than lactose itself: the isomer is the true molecular signature of 'lactose is here.'" },
                            { title: "L2: Analysis", question: "What happens to the trp operon when tryptophan levels are HIGH?", answer: "Repressor binds, stopping transcription", options: ["Transcription increases", "Repressor binds, stopping transcription", "DNA is degraded"], explanation: "The key idea is repressible logic: build the factory only when the product runs low. The trp operon makes tryptophan; when tryptophan is abundant, it binds the repressor as a corepressor, activating it — the repressor then clamps onto the operator and blocks transcription, halting further synthesis (a transcriptional version of feedback inhibition). Wrong-answer watch: 'transcription increases' is backwards — high product means stop, not go; 'DNA is degraded' confuses regulation with destruction — the genes stay intact, merely switched off. Compare with Unit 3's feedback inhibition: the same 'brake early' economics, but this brake acts on the gene rather than the enzyme — two layers of one control philosophy." },
                            { title: "L3: Mastery", question: "In CRISPR-Cas9, what determines the SPECIFICITY of the cut?", answer: "The 20-nucleotide sequence of the gRNA", options: ["The Cas9 enzyme itself", "The PAM sequence only", "The 20-nucleotide sequence of the gRNA"], explanation: "The key idea is programmable targeting: in CRISPR-Cas9, the protein is generic scissors but the RNA is the address label. The 20-nucleotide guide RNA base-pairs with the complementary DNA target; only a near-perfect match (plus a neighboring PAM sequence) triggers Cas9 to cut. Wrong-answer watch: 'the Cas9 enzyme itself' cuts wherever the guide takes it — Cas9 has no targeting preference of its own; 'the PAM sequence only' is necessary but far too short to be a unique address in a 3-billion-letter genome. This is why CRISPR revolutionized genetics: retargeting requires synthesizing a new 20-letter RNA, not engineering a new protein — which is also why Unit 13 flags it as human-driven evolution on technological timescales." }
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
                    intuition: "The key idea: photosynthesis is solar power with a chemical battery. Chlorophyll captures photons and uses their energy to rip electrons from water; those electrons cascade through an electron transport chain, pumping protons to build a gradient — a reservoir of potential energy — that ATP synthase then spends to make ATP and NADPH. Picture a hydroelectric dam: sunlight pumps the water uphill (the gradient), and the turbine (ATP synthase) generates the current on demand. The 'solar engine' framing matters because nearly every joule in the biosphere — your breakfast, the forest, fossil fuels — entered through this one photosynthetic gateway. Unit 8 will show the same machinery running in reverse to spend that stored energy.",
                    topics: ["PSII and PSI", "Chemiosmosis", "Calvin Cycle"],
                    lectures: [
                        { name: "7.1: The Solar Panel — Photosynthesis", url: "lesson:bio:ch3-1" }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Where does the oxygen released during photosynthesis come from?", answer: "From the splitting of water (photolysis)", options: ["From CO₂", "From glucose breakdown", "From the splitting of water (photolysis)"], explanation: "The key idea is to trace the atoms, not the intuition. The classic misconception says oxygen comes from CO₂ — but Ruben and Kamen's isotope experiment settled it: when algae were given water labeled with heavy oxygen ($^{18}$O), the released O₂ carried the label; labeled CO₂ did not. The mechanism is photolysis at PSII: $2H_2O \\rightarrow 4H^+ + 4e^- + O_2$, where the stripped electrons replace those excited out of chlorophyll. Wrong-answer watch: 'from CO₂' — CO₂'s oxygens end up in glucose and water, not in the O₂ you breathe. This is why every breath you take is, atom-for-atom, recycled split water — plants are literally exhaling the ashes of water." },
                            { title: "L2: Analysis", question: "What is the primary function of the Calvin Cycle?", answer: "To synthesize G3P (sugar)", options: ["To split water", "To produce ATP", "To synthesize G3P (sugar)"], explanation: "The key idea is division of labor: the light reactions capture energy, the Calvin cycle spends it on construction. Using ATP and NADPH from the light reactions, the cycle fixes CO₂ (via Rubisco) into 3-PGA, reduces it to G3P — the actual sugar product — and regenerates its starting molecule. Wrong-answer watch: 'to split water' is PSII's job in the light reactions; 'to produce ATP' is photophosphorylation — the Calvin cycle consumes ATP, it does not make it. This is why the cycle is called 'light-independent': it runs on the chemical batteries charged earlier, which Melvin Calvin proved by tracing $^{14}$C through the pathway." },
                            { title: "L3: Mastery", question: "How does the pH gradient across the thylakoid membrane drive ATP synthesis?", answer: "Via ATP Synthase", options: ["Through active transport", "Via ATP Synthase", "By diffusion of water"], explanation: "The key idea is chemiosmosis: a concentration gradient is a battery. Light energy pumps H⁺ into the thylakoid lumen, building a steep gradient; H⁺ then flows back down it through ATP synthase, and the released energy phosphorylates ADP into ATP. Wrong-answer watch: 'active transport' would spend ATP to move ions — here the flow generates ATP, the reverse; 'diffusion of water' names the wrong molecule — it is protons crossing, not water. This is why the same ATP synthase machine reappears in mitochondria (Unit 8): evolution invented the gradient-battery once and reused it in both energy systems." }
                        ]
                    }
                },
                {
                    title: "Unit 8: Cellular Respiration",
                    intuition: "The key idea: controlled demolition beats explosion. Burning glucose all at once releases its energy as useless heat; respiration dismantles it in small steps — glycolysis, the Krebs cycle, oxidative phosphorylation — capturing the energy in manageable ATP-sized packets (like breaking a $100 bill into spendable change). Oxygen's role is to keep the line moving: as the final electron acceptor, it drains spent electrons so the carriers can be recycled. Picture a bucket brigade where the last person must empty each bucket — without oxygen, buckets pile up and the whole line stalls. This connects back to Unit 7 (respiration spends what photosynthesis saved, using the same ATP synthase turbine) and forward to Unit 14, where the 'wasted' 90% becomes the heat that limits food chains.",
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
                            intuition: "The key idea: fermentation's real product is not the 2 ATP — it is recycled NAD⁺. When oxygen is absent, the electron transport chain cannot re-oxidize NADH, so glycolysis would halt within seconds for lack of NAD⁺. Fermentation dumps electrons onto pyruvate (making lactate or ethanol) purely to regenerate NAD⁺ and keep glycolysis alive — a desperate, inefficient workaround. The 'burning' sensation is mostly acidity from accumulating protons, not the lactate itself (a common misconception). Why evolve such a wasteful backup? Because a cell that keeps making 2 ATP during a sprint outlives one that makes zero — evolution grades on survival, not efficiency."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "How much ATP does aerobic respiration produce per glucose compared to fermentation?", answer: "~30-32 vs. 2", options: ["2 vs. 2", "~30-32 vs. 2", "~30-32 vs. 18"], explanation: "The key idea is that oxygen unlocks the rest of the pathway. Without O₂, the electron transport chain backs up, NADH cannot be recycled to NAD⁺, and everything downstream of glycolysis stalls — leaving only glycolysis's net 2 ATP per glucose. With O₂ as the final electron acceptor, the Krebs cycle and oxidative phosphorylation run fully, harvesting roughly 30–32 ATP total: about 15 times more efficient. Wrong-answer watch: '~30-32 vs 18' invents a number — fermentation yields exactly glycolysis's 2; '2 vs 2' erases the entire payoff of aerobic metabolism. This is why you breathe hard after a sprint: your muscles ran up an oxygen debt and must repay it to restore the efficient pathway." },
                            { title: "L2: Analysis", question: "Which molecule is the final electron acceptor in the Electron Transport Chain?", answer: "Oxygen", options: ["Water", "Carbon Dioxide", "Oxygen"], explanation: "The key idea is that the electron transport chain needs a drain. Electrons cascade down the carriers, releasing energy to pump protons — but the chain only keeps flowing if something at the end accepts the spent electrons. Oxygen does this, combining with electrons and protons to form water ($\\frac{1}{2}O_2 + 2H^+ + 2e^- \\rightarrow H_2O$). Wrong-answer watch: 'water' is the product of this step, not the acceptor; 'carbon dioxide' is a photosynthesis input — it has no role at the end of the ETC. This is why cyanide kills so swiftly: it blocks cytochrome c oxidase from handing electrons to oxygen, and the whole energy economy halts within minutes." },
                            { title: "L3: Mastery", question: "Why is the Krebs cycle considered an aerobic process, even though it doesn't use oxygen directly?", answer: "It depends on NAD+ from ETC", options: ["It uses O2 in the first step", "It depends on NAD+ from ETC", "It occurs only in plants"], explanation: "The key idea is indirect dependence: the Krebs cycle never touches an O₂ molecule, but it runs on recycled carriers. Each turn reduces NAD⁺ and FAD to NADH and FADH₂; those carriers are only re-oxidized by the electron transport chain, which only runs when oxygen accepts its electrons. No oxygen → no NAD⁺ → the cycle stalls for lack of its reactant. Wrong-answer watch: 'it uses O₂ in the first step' — check the reactions: no O₂ appears anywhere in the cycle; 'it occurs only in plants' — every aerobic organism runs it. This is why fermentation's real job is NAD⁺ recycling (not just making 2 ATP): it keeps glycolysis alive when the oxygen-dependent recycling service is down." }
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
                    intuition: "The key idea: meiosis shuffles the deck, and fertilization deals the hand — so inheritance is probability, not destiny. Each parent contributes one randomly chosen allele per gene, which is why Punnett squares work: they are just sample spaces of equally likely gamete combinations. Picture dealing cards from two shuffled decks: the 3:1 ratio is not a rule nature 'obeys' — it is the statistical signature of thousands of independent deals. This connects directly to Unit 11, where chi-square tests check whether real offspring counts match these probabilistic predictions, and to Unit 10, where linked genes are the cards 'glued together' in the deck. Learn to think in sample spaces and the whole of genetics becomes calculation.",
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
                            intuition: "The key idea: new information shrinks the sample space. Before observing the child, the four outcomes (AA, Aa, aA, aa) are equally likely; learning the child is healthy deletes 'aa' from possibility, leaving three equally likely outcomes — two of which are carriers. So the probability jumps from 1/2 to 2/3. This is conditional probability in its purest form, and it is the exact reasoning genetic counselors use: every test result, every healthy sibling, updates the risk. The common mistake is to keep the original denominator of 4 — but probability always conditions on what you know, and you now know this child is not 'aa.'"
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What phenotype ratio do you expect from a monohybrid cross Aa × Aa?", answer: "3:1", options: ["1:1", "3:1", "9:3:3:1"], explanation: "The key idea is segregation plus dominance. Each parent contributes one allele at random, giving genotypes 1 AA : 2 Aa : 1 aa — but the dominant A masks the recessive a in heterozygotes, so three genotypes collapse into two phenotypes: 3 dominant : 1 recessive. Wrong-answer watch: '1:1' is the testcross ratio (Aa × aa), not a heterozygote self-cross; '9:3:3:1' is the dihybrid ratio — one gene too many. This is why Mendel's 3:1 was revolutionary: the hidden 1:2:1 underneath proved that inheritance is particulate — discrete 'factors,' not blended fluids." },
                            { title: "L2: Analysis", question: "If a baby has Type O blood and the mother has Type A, what are the possible genotypes for the father?", answer: "i i, I^A i, or I^B i", options: ["I^A I^B", "i i, I^A i, or I^B i", "Only i i"], explanation: "The key idea is that the child must receive an 'i' allele from each parent. The baby is ii, so the mother (type A) must be Ai — she contributed one i. The father therefore must also contribute an i, meaning his genotype contains at least one i allele: ii (type O), $I^Ai$ (type A), or $I^Bi$ (type B). Wrong-answer watch: 'only ii' forgets that heterozygotes silently carry i; '$I^AI^B$' (type AB) has no i to give at all. This is why blood-type puzzles are really logic puzzles about hidden carriers — the same reasoning genetic counselors use with pedigree charts." },
                            { title: "L3: Mastery", question: "In a cross AaBb x AaBb, what is the probability of an offspring with genotype AAbb?", answer: "1/16", options: ["1/4", "1/8", "1/16"], explanation: "The key idea is that independent genes follow the product rule: the probability of two independent events co-occurring is their product. P(AA) from Aa × Aa is 1/4, and P(bb) from Bb × Bb is 1/4, so P(AAbb) = $1/4 \\times 1/4$ = 1/16. Wrong-answer watch: '1/4' answers only one gene and stops; '1/8' halves instead of quartering — a common slip when rushing. This multiplication logic is the engine under every dihybrid prediction, and it is exactly the math your chi-square test (Unit 11) will later check against real data." }
                        ],
                        "javaLogic": "mendelian_genetics"
                    }
                },
                {
                    title: "Unit 10: Chromosomal Linkage",
                    intuition: "The key idea: Mendel's law of independent assortment assumed genes travel alone — but genes are physical passengers on chromosomes, and passengers on the same bus tend to arrive together. Linked genes violate independent assortment, traveling as a package through meiosis — unless crossing over swaps segments between homologous chromosomes mid-journey, shuffling the packages. Picture commuters who usually ride together but occasionally switch buses at a transfer station: the closer their seats (loci), the rarer the switch. This connects back to Unit 9 (linkage is the exception that proves Mendel's probabilistic rule) and forward to Unit 13, where recombination is evolution's shuffling engine, generating the variation that selection acts on.",
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
                            intuition: "The key idea: recombination frequency is a proxy for physical distance. A crossover is a random break-and-swap event along the chromosome — the longer the stretch of DNA between two genes, the more likely a break lands between them. So 1% recombination ≈ 1 map unit (centimorgan) becomes a genetic ruler: count the recombinant offspring, and you have measured the street. Morgan's fly lab turned this into the first chromosome maps, years before anyone saw DNA's structure. One caveat for later: the ruler is statistical, not perfectly physical — recombination 'hotspots' mean some streets have more breaks per mile — but as a first approximation, it built the founding maps of genetics."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "If two genes have a recombination frequency of 50%, what does that tell you?", answer: "They are on different chromosomes (unlinked)", options: ["They are very close together", "They are on different chromosomes (unlinked)", "They never recombine"], explanation: "The key idea is that 50% recombination is the ceiling, not a measurement of closeness. Linked genes cross over only when a break falls between them, so their recombinant frequency is always below 50% — the closer, the lower. RF = 50% means the genes assort as if on different chromosomes: either they truly are, or they are so far apart on the same chromosome that crossing over between them is essentially guaranteed. Wrong-answer watch: 'very close together' describes RF near 0%; 'never recombine' is the opposite extreme. This is why Morgan's fruit-fly crosses were decisive: deviations below 50% were the fingerprint of physical linkage on a chromosome." },
                            { title: "L2: Analysis", question: "If the recombination frequency between A and B is 10%, and B and C is 5%, what is the possible distance between A and C?", answer: "5% or 15%", options: ["15% only", "5% only", "5% or 15%"], explanation: "The key idea is that pairwise distances do not reveal order. If the gene order is A–B–C, then A to C spans both intervals: 10 + 5 = 15 map units. But if the order is A–C–B, then C sits between A and B, and A to C is 10 − 5 = 5. Both arrangements fit the same two measurements. Wrong-answer watch: picking '15% only' or '5% only' assumes an order the data never established — the question tests whether you notice the underdetermination. This is why geneticists run three-point crosses: the third measurement breaks the ambiguity and reveals the true order." },
                            { title: "L3: Mastery", question: "In a 3-point cross, which offspring class is used to determine the middle gene?", answer: "The Double Crossover (DCO) class", options: ["The Parental class", "The Double Crossover (DCO) class", "The single crossover between A and B"], explanation: "The key idea is that the rarest class is the most informative. In a three-point cross, a double crossover (DCO) swaps only the middle gene between chromatids — so comparing the DCO offspring's gene arrangement to the parental arrangement shows exactly which gene 'flipped.' That flipped gene must be in the middle. Wrong-answer watch: the 'parental class' is the most common and tells you nothing about order; a 'single crossover' between A and B leaves the order ambiguous. This is why Sturtevant — still an undergraduate in Morgan's lab — could draw the first genetic map: he realized rarity itself was the signal." }
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
                    intuition: "The key idea: science needs a referee between 'interesting pattern' and 'random luck,' and statistics is that referee. The null hypothesis ($H_0$) plays devil's advocate — 'your results are just chance' — and tests like chi-square measure exactly how surprised you should be if the devil's advocate were right. Picture a radio tuner separating signal from static: the $p < 0.05$ threshold is where the scientific community agreed the signal is loud enough to trust. In IBET, this is not optional decoration — your lab reports live or die on whether you can show the math, which is why Unit 9's Mendelian ratios and Unit 12's experimental designs both feed into this one testing framework.",
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
                            intuition: "The key idea: 'fail to reject' is not 'prove' — it is a verdict of 'not guilty,' not 'innocent.' Our $\\chi^2$ of 1.33 falls well below the critical value of 3.84 (df = 1, $p = 0.05$), meaning deviations this size happen by chance more than 5% of the time — too common to convict the null hypothesis. So we keep the 3:1 hypothesis standing, provisionally. The common misconception is declaring the hypothesis 'proven'; a larger sample might still overturn it. This disciplined modesty is the heart of NHST: statistics tells you when the evidence is insufficient, and honest scientists report exactly that."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "What is the primary role of a p-value in AP Biology?", answer: "Probability that results are due to chance", options: ["The percentage of accuracy", "Probability that results are due to chance", "The number of samples"], explanation: "The key idea is that a p-value quantifies surprise, not truth. It measures how unlikely your observed data (or something more extreme) would be if the null hypothesis — 'nothing interesting is happening' — were true. A tiny p-value is evidence against the null, never proof of your alternative. Wrong-answer watch: 'percentage of accuracy' — p says nothing about how accurate your measurements are; 'number of samples' — that is n, a separate input to the test. And a subtle trap: p is not the probability that the null is true. This is why the $p < 0.05$ convention (Fisher's practical threshold) is a decision rule, not a law of nature — which is exactly what Unit 16's p-hacking warning is about." }
                        ]
                    }
                },
                {
                    title: "Unit 12: Experimental Design & FRQ Logic",
                    intuition: "The key idea: an experiment is an argument, and controls are how you rule out every objection before it is raised. Holding all variables constant except one, including a negative control (no treatment) and ideally blinding and replication, leaves the independent variable as the only remaining explanation for any difference. Picture a detective eliminating suspects: each control crosses one suspect off the list until only your hypothesis remains standing. This is why AP/IBET free-response questions obsess over variables and controls — they are testing whether you can design an argument, not just recite facts — and it connects directly to Unit 11, where statistics provides the final verdict on whether your carefully isolated effect is real.",
                    topics: ["Variables & Controls", "Hypothesis Selection", "Data Interpretation Modeling"],
                    lectures: [
                        { name: "12.1: Designing the Lab", url: "lesson:bio:ch12-1" },
                        { name: "12.2: FRQ Writing Protocols (CER)", url: "lesson:bio:ch12-2" }
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
                            intuition: "The key idea: without a baseline, every measurement is meaningless. The dark-treated Elodea establishes how much gas (or how little) appears with zero light — so if the lit groups produce more bubbles, light is the only remaining explanation. But the negative control does double duty: if the dark group mysteriously produces bubbles too, you have caught a confound — maybe the plants are respiring, the water is warming, or the counting method is biased. It is the experimental equivalent of taring a scale: subtract the background before you claim a signal. Every 'ghost' it catches is a wrong conclusion prevented."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "Why must an experiment have a negative control?", answer: "To establish a baseline without treatment", options: ["To save money", "To establish a baseline without treatment", "To increase sample size"], explanation: "The key idea is isolation of variables: the negative control is the experiment with the treatment deliberately withheld. It establishes the baseline — what happens with zero light, zero drug, zero intervention — so any difference in the treatment group can be attributed to your independent variable and nothing else. Wrong-answer watch: 'to save money' — controls cost extra work and materials; 'to increase sample size' — that is about statistical power, a different design goal. This is why medicine uses placebos: the placebo group is the negative control that proves the drug — not hope, rest, or time — caused the recovery." }
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
                    intuition: "The key idea, in Dobzhansky's famous words: 'Nothing in biology makes sense except in the light of evolution.' Every topic in this course — the SA/V constraints of Unit 1, the enzyme tuning of Unit 3, the operon circuits of Unit 6 — is a product of variation filtered by selection over deep time. Picture the tree of life as a family reunion stretching back 3.5 billion years: phylogeny (this unit's cladistics) is the seating chart, natural selection is the story of how everyone got their seat, and Hardy–Weinberg is the null hypothesis — the 'no evolution happening' baseline that lets us detect when it is. Even biotechnology (CRISPR, this unit's evolutionLink) is evolution continued by other means: humans as a new selective pressure, operating on technological rather than geological timescales.",
                    topics: ["Darwinian Selection", "Hardy-Weinberg Equilibrium", "Cladistics & Mapping"],
                    evolutionLink: "Biotechnology (CRISPR/Recombinant DNA) represents human-driven rapid evolution, a shift from geological timescales to technological timescales.",
                    lectures: [
                        { name: "13.1: The Mechanism of Change", url: "lesson:bio:ch7-1" },
                        { name: "13.2: Population Genetics (H-W)", url: "lesson:bio:ch7-2" },
                        { name: "13.3: Phylogeny & Cladistics", url: "lesson:bio:ch7-3" }
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
                            intuition: "The key idea: the recessive phenotype is the only genotype you can read directly. Dominant phenotypes hide heterozygotes (AA and Aa look identical), but every individual showing the recessive trait must be 'aa' — so $q^2$ = observed frequency, and $q = \\sqrt{q^2}$ unlocks $p = 1 - q$ and the full genotype distribution. It is detective work by elimination: find the one unambiguous clue, and the hidden frequencies fall out. This is why population geneticists start every H–W problem at the recessive corner — and why, in the wild, deviations from these expectations are the fingerprints of selection, drift, or nonrandom mating (the moment the null model starts talking)."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L2: Analysis", question: "Which of these is NOT a requirement for Hardy-Weinberg equilibrium?", answer: "Small population size", options: ["No mutations", "Random mating", "Small population size"], explanation: "The key idea is that Hardy–Weinberg is biology's null model: it describes a population where no evolution is happening. Its requirements — large population, random mating, no mutation, no migration, no selection — each exclude one evolutionary force. Small populations violate it because genetic drift (random sampling error in who reproduces) shifts allele frequencies by pure chance, which is evolution by definition. Wrong-answer watch: the other options are genuine requirements — the question tests whether you can spot the intruder that breaks equilibrium. This is why H–W is so useful: like a negative control (Unit 12), it is the baseline against which real evolution is detected — deviations from H–W are how we discover selection and drift in the wild." }
                        ]
                    }
                },
                {
                    title: "Unit 14: Ecosystem Dynamics",
                    intuition: "The key idea: energy and matter take opposite journeys through an ecosystem. Energy enters as sunlight, is spent at every transfer (respiration burns ~90% as heat — the second law of thermodynamics), and exits as waste heat: a one-way flow. Matter — carbon, nitrogen, water — is instead endlessly recycled by decomposers: a closed loop. Picture a river (energy) running through a fountain (matter): the water in the fountain recirculates forever, but the river only flows downhill once. The 10% rule falls out of the river's physics — each trophic level keeps a tenth and loses the rest — which is why biomass pyramids narrow, food chains stay short, and a hawk needs a meadow's worth of grass beneath it. Units 7–8 named the furnace; this unit follows the smoke.",
                    topics: ["Trophic Levels", "Nutrient Cycling", "Community Interactions", "Population Growth"],
                    lectures: [
                        { name: "14.1: Energy Flow Networks", url: "lesson:bio:ch8-1" },
                        { name: "14.2: Biodiversity & Resilience", url: "lesson:bio:ch8-2" },
                        { name: "14.3: Population Ecology (r/K)", url: "lesson:bio:ch8-3" }
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
                            intuition: "The key idea: three transfers, three tenfold taxes. Plants capture 50,000 kJ; insects keep ~5,000; frogs ~500; hawks a mere ~50 kJ — each level surrendering 90% to respiration, movement, and waste heat. The hawk is not 'inefficient'; it is paying the thermodynamic toll booth three times. This arithmetic is why ecosystems are bottom-heavy by necessity: a top predator's existence requires an enormous energetic foundation, which is also why large carnivores are the first to vanish when habitats shrink — conservation biology is, at bottom, energy accounting. And it reframes your diet: every step down the food chain you eat is a 10x energy savings."
                        }
                    ],
                    quiz: {
                        levels: [
                            { title: "L1: Intuition", question: "In a food web, if 10,000 kJ of energy is available at the producer level, how much is likely available to a tertiary consumer?", answer: "10 kJ", options: ["1,000 kJ", "100 kJ", "10 kJ"], explanation: "The key idea is the second law of thermodynamics wearing an ecological costume: at every trophic transfer, most energy is lost as heat (respiration, movement, waste). Only about 10% becomes new biomass. So 10,000 kJ of producers → ~1,000 kJ of primary consumers → ~100 kJ of secondary → ~10 kJ for tertiary consumers — three transfers, three tenfold cuts. Wrong-answer watch: '1,000 kJ' stops one level too early (that is the primary consumer's share); '100 kJ' is the secondary consumer's — each wrong answer is exactly one trophic step off. This is why food chains are short, top predators are rare, and eating lower on the food chain is energetically 'cheaper' — the same physics that makes your Unit 8 respiration 'waste' heat is what starves the top of the pyramid." }
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
                    intuition: "The key idea: the data outgrew the human. A single human genome is 3 billion letters; a single sequencing run produces terabytes — no researcher can 'look at' that. Code becomes the microscope: alignment algorithms, statistical tests, and visualizations extend perception into scales where intuition fails. Picture searching a library by reading every book versus using a search index — Python and R are the index. This connects back to Units 4–5 (the sequences being analyzed are the central dogma's output) and forward to Unit 16 (where the same code must be wielded honestly — p-hacking is what happens when the index is used to cherry-pick). In modern biology, the pipette and the script are equal partners.",
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
                            intuition: "The key idea: G–C pairs are glued by three hydrogen bonds versus A–T's two, so GC-rich DNA literally melts at a higher temperature. Thermophilic bacteria living in hot springs carry GC-rich genomes — evolution reinforcing the weak points. That is the 'why it evolved this way' behind a one-line Python script: counting letters predicts a physical property with ecological consequences. Practically, this is why PCR primer design obsesses over GC content — primers with the wrong GC profile anneal at the wrong temperature and the reaction fails. A four-line script, a hydrogen bond, and a hot spring: molecular biology in miniature."
                        }
                    ],
                    quiz: {
                        levels: [
                            {
                                title: "L1: Conceptual Intuition",
                                question: "What is the fundamental benefit of using Python over manual analysis in genomics?",
                                answer: "Scale and reproducibility",
                                options: ["Speed only", "Scale and reproducibility", "More colorful plots", "Simpler formulas"],
                                explanation: "The key idea is that code turns analysis into a reproducible instrument. A Python script applies the identical logic to every one of millions of sequences — no fatigue, no transcription errors — and anyone can re-run it to verify the result. Speed matters, but reproducibility is the scientific payoff: the analysis becomes a shareable, auditable protocol rather than one person's afternoon of clicking. Wrong-answer watch: 'speed only' — a fast irreproducible result is still bad science; 'more colorful plots' — visualization is presentation, not evidence. This is why bioinformatics sits at the heart of modern biology's reproducibility movement: when the method is code, the method can be checked."
                            },
                            {
                                title: "L2: Algorithmic Understanding",
                                question: "In a BLAST result, what does an E-value of $10^{-10}$ signify?",
                                answer: "Alignment unlikely by chance",
                                options: ["High probability of chance", "Alignment unlikely by chance", "Sequence length is 10", "An error occurred"],
                                explanation: "The key idea is that the E-value ('Expect') counts how many alignments this good you would see by pure chance in a database this size. An E-value of $10^{-10}$ means you would expect essentially zero such hits randomly — so the match is almost certainly true homology (shared ancestry), not coincidence. Wrong-answer watch: 'high probability of chance' is exactly backwards — smaller E means less chance; 'sequence length is 10' misreads scientific notation as a length. This is why BLAST could trace COVID variants within days: astronomically small E-values turn sequence similarity into confident evolutionary statements."
                            },
                            {
                                title: "L3: Elite Application",
                                question: "Which scoring matrix is used to account for biological mutation probabilities?",
                                answer: "BLOSUM62",
                                options: ["PAM1", "BLOSUM62", "Identity Matrix", "Zero Matrix"],
                                explanation: "The key idea is that not all mutations are created equal, and the scoring matrix should know that. BLOSUM62 is built from observed amino-acid substitutions in conserved protein blocks: swaps between chemically similar amino acids (like leucine↔isoleucine) score positively because evolution tolerates them; radical swaps score negatively. Wrong-answer watch: an 'identity matrix' treats every mismatch identically — biologically naive, since it ignores chemistry; 'PAM1' is calibrated for very closely related sequences, not general searches; 'zero matrix' carries no information at all. This is why your BLAST hits are trustworthy: the matrix itself encodes billions of years of evolutionary trial and error."
                            }
                        ]
                    }
                },
                {
                    title: "Unit 16: The Research Literature Review",
                    intuition: "The key idea: no experiment speaks into a void — it answers, refines, or challenges what came before. A systematic literature review maps the state of the conversation: what is established, what is contested, where the gaps are — so your work lands where it is needed instead of reinventing the wheel. Picture joining a group chat with years of scrollback: reading it first is the difference between contributing and repeating. This connects to everything in BIO-500: Unit 11's statistics and Unit 12's design are the grammar of the conversation, and p-hacking (this unit's cautionary tale) is what happens when someone fakes fluency. The review is where a TJ scientist learns to listen before speaking.",
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
                                explanation: "The key idea is that data dredging manufactures significance. P-hacking — testing many hypotheses, dropping outliers, or stopping data collection the moment $p$ dips below 0.05 — virtually guarantees a 'significant' result by luck alone, producing false positives that will not replicate. The data are not lost; the conclusions are rotten. Wrong-answer watch: 'data loss' — the dataset is intact, it is the inference that is corrupted; 'high cost' — the real cost is to the literature's credibility. This is why preregistration (declaring your analysis plan before seeing the data) is becoming standard: it ties the researcher's hands before temptation arrives — the methodological cousin of Unit 11's honest hypothesis testing."
                            },
                            {
                                title: "L2: Quantitative Reasoning",
                                question: "If the critical value for $\\chi^2$ is 3.84 and your calculated value is 4.52, what is your conclusion?",
                                answer: "Reject the Null Hypothesis",
                                options: ["Accept the Null Hypothesis", "Reject the Null Hypothesis", "Ignore the result", "Increase sample size"],
                                explanation: "The key idea is a direct comparison: statistic versus threshold. You compute $\\chi^2$ from your data (4.52), look up the critical value for your degrees of freedom at $p = 0.05$ (3.84), and ask which is bigger. Since 4.52 > 3.84, the deviation from expectation is too large to blame on chance — so you reject the null hypothesis. Wrong-answer watch: 'accept the null' is backwards — exceeding the critical value is precisely the rejection condition; 'increase sample size' is a redesign decision, not the conclusion this test yields. This is the same machinery as Unit 11's worked example — one framework, applied everywhere from Mendel's peas to your IBET lab reports."
                            },
                            {
                                title: "L3: Experimental Mastery",
                                question: "In a study on plant growth, why is a high sample size ($n$) preferred when calculating SEM?",
                                answer: "Decreases uncertainty of the mean",
                                options: ["Increases the mean", "Decreases uncertainty of the mean", "Changes the variable", "Speeds up growth"],
                                explanation: "The key idea is that $SEM = SD / \\sqrt{n}$ measures the precision of your mean, not the spread of your data. The standard deviation describes the population's variability; dividing by $\\sqrt{n}$ shrinks that uncertainty as you collect more samples — the sample mean converges on the true population mean (the law of large numbers in action). Wrong-answer watch: 'increases the mean' — sample size does not move the center, it sharpens it; 'speeds up growth' — statistics cannot change the plants' biology. This is why clinical trials enroll thousands of patients: large $n$ is what turns a noisy sample mean into a trustworthy estimate."
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
