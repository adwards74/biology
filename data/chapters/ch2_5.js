window.CHAPTER_DATA = window.CHAPTER_DATA || {};

// ==========================================
// CHAPTER 2: MOLECULAR GENETICS (Units 4-6)
// ==========================================
window.CHAPTER_DATA["ch2"] = {
    "ch2-1": {
        title: "4.1: Source Code Structure",
        subtitle: "DNA Architecture & Information Theory",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-cyan);">
                    <h3><i class="fas fa-microchip"></i> Biological Data Storage</h3>
                    <p>DNA is a digital storage medium. It uses a 4-base quaternary system (A, T, C, G) instead of the binary (0, 1) used by computers. This allows for incredible information density—about 215 petabytes per gram.</p>
                </div>
                <h2>I. The Double Helix Mechanics</h2>
                <p>The anti-parallel nature ($5' \rightarrow 3'$) isn't just a quirk; it's a structural requirement for replication. The <strong>Phosphodiester Bonds</strong> provide the robust 'backbone', while <strong>Hydrogen Bonds</strong> between bases allow for the 'unzipping' necessary to read the code.</p>
            </div>
        `
    },
    "ch2-2": {
        title: "4.2: High-Fidelity Copying",
        subtitle: "DNA Replication Fork Dynamics",
        content: `
            <div class="lesson-section">
                <h2>I. The Replication Machinery</h2>
                <div class="glass-card">
                    <h4>The Enzyme Team</h4>
                    <ul>
                        <li><strong>Helicase:</strong> The Unzipper (breaks H-bonds).</li>
                        <li><strong>Topoisomerase:</strong> The Relaxer (prevents supercoiling).</li>
                        <li><strong>DNA Polymerase III:</strong> The Builder (adds nucleotides in $5' \rightarrow 3'$ direction).</li>
                        <li><strong>Ligase:</strong> The Gluer (seals Okazaki fragments).</li>
                    </ul>
                </div>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-exclamation-triangle"></i> The Lagging Strand Problem</h4>
                    <p>Coz DNA Polymerase can only build in one direction, the 'lagging strand' must be built in backwards spurts called <strong>Okazaki Fragments</strong>. This is a brilliant biological workaround for a directional geometry constraint.</p>
                </div>
            </div>
        `
    },
    "ch2-3": {
        title: "5.1: Transcription Systems",
        subtitle: "mRNA Synthesis & Processing",
        content: `
            <div class="lesson-section">
                <h2>I. Converting Source to Executable</h2>
                <p>Transcription is the process of copying DNA into mRNA. In eukaryotes, this "raw" mRNA must be processed before it can leave the nucleus.</p>
                <div class="proof-box glass">
                    <h4>Post-Transcriptional Editing</h4>
                    <ul>
                        <li><strong>Splicing:</strong> Introns (non-coding) are cut out; Exons (expressable) are glued together.</li>
                        <li><strong>5' Cap & Poly-A Tail:</strong> Protects the mRNA from degradation in the hostile cytoplasm.</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// ==========================================
// CHAPTER 3: METABOLIC ENGINES (Units 7-8)
// ==========================================
window.CHAPTER_DATA["ch3"] = {
    "ch3-1": {
        title: "7.1: The Solar Panel (PSII/PSI)",
        subtitle: "Light-Dependent Reactions",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-orange);">
                    <h3><i class="fas fa-bolt"></i> Harvesting Photons</h3>
                    <p>Photosynthesis is essentially an <strong>Electron Transport Chain</strong> powered by light. It uses the energy of photons to split water, releasing oxygen as a 'waste' byproduct and creating a proton gradient to charge ATP.</p>
                </div>
                <h2>I. Chemiosmosis in the Chloroplast</h2>
                <p>Protons ($H^+$) are pumped into the Thylakoid space. As they flow back out through <strong>ATP Synthase</strong>, they physically spin a molecular turbine that converts kinetic energy into chemical energy (ATP).</p>
            </div>
        `
    },
    "ch3-3": {
        title: "8.1: Metabolic Breakdown",
        subtitle: "Glycolysis & The Krebs Cycle",
        content: `
            <div class="lesson-section">
                <h2>I. The Efficiency of Respiration</h2>
                <p>Aerobic respiration is the process of fully oxidizing glucose. While glycolysis only yields 2 ATP, the full cycle (including the ETC) yields about 30-32 ATP per glucose molecule.</p>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-atom"></i> Redox Logic</h4>
                    <p>The entire process is a series of <strong>Redox reactions</strong>. Electrons are stripped from glucose and carried by $NADH$ and $FADH_2$ to the mitochondrial 'power plant'.</p>
                </div>
            </div>
        `
    }
};

// ==========================================
// CHAPTER 4: THE GENETIC ALGORITHM (Units 9-10)
// ==========================================
window.CHAPTER_DATA["ch4"] = {
    "ch4-1": {
        title: "9.1: The Laws of Segregation",
        subtitle: "Mendelian Probability",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-purple);">
                    <h3><i class="fas fa-dice"></i> Genetic Probability</h3>
                    <p>Mendel's genius was applying <strong>Statistics</strong> to biological inheritance. He realized that alleles segregate independently during gamete formation.</p>
                </div>
                <h2>I. The Multiplication Rule</h2>
                <p>To find the probability of multiple independent events occurring together, you multiply their individual probabilities. (e.g., probability of $aa$ from $Aa \times Aa$ is $1/2 \times 1/2 = 1/4$).</p>
            </div>
        `
    },
    "ch4-3": {
        title: "10.1: Chromosomal Linkage",
        subtitle: "Mapping Genetic Distance",
        content: `
            <div class="lesson-section">
                <h2>I. Breaking the Law (of Independent Assortment)</h2>
                <p>When two genes are located close together on the SAME chromosome, they tend to be inherited together. This is <strong>Linkage</strong>.</p>
                <div class="proof-box glass">
                    <h4>Recombination Frequency ($RF$)</h4>
                    <p>$$RF = \frac{\text{Number of Recombinants}}{\text{Total Offspring}} \times 100$$</p>
                    <p>1% Recombination Frequency = 1 <strong>Map Unit</strong> (Centimorgan).</p>
                </div>
            </div>
        `
    }
};

// ==========================================
// CHAPTER 5: QUANTITATIVE BIOLOGY (Units 11-12)
// ==========================================
window.CHAPTER_DATA["ch5"] = {
    "ch5-1": {
        title: "11.1: The Chi-Square Test",
        subtitle: "Statistical Significance ($\chi^2$)",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass" style="border-left-color: var(--accent-magenta);">
                    <h3><i class="fas fa-calculator"></i> Proving Significance</h3>
                    <p>Scientists never say they 'proved' something; they say they 'rejected the null hypothesis'. The Chi-Square test determines if the difference between what we SAW and what we EXPECTED is too large to be just luck.</p>
                </div>
                <h2>I. Calculation Steps</h2>
                <ol>
                    <li>Calculate $(O-E)^2 / E$ for each category.</li>
                    <li>Sum them up to get $\chi^2$.</li>
                    <li>Compare to <strong>Critical Value</strong> using Degrees of Freedom ($df = n-1$).</li>
                </ol>
            </div>
        `
    },
    "ch5-3": {
        title: "12.1: Designing the Lab",
        subtitle: "IBET Experimental Protocol",
        content: `
            <div class="lesson-section">
                <h2>I. The Variables of Science</h2>
                <table class="glass-table">
                    <tr><th>Variable</th><th>Definition</th></tr>
                    <tr><td>Independent</td><td>The one YOU change (X-axis).</td></tr>
                    <tr><td>Dependent</td><td>The one you MEASURE (Y-axis).</td></tr>
                    <tr><td>Constant</td><td>The things that MUST not change.</td></tr>
                </table>
                <div class="tj-edge glass">
                    <h4><i class="fas fa-flask"></i> TJ Standard: The Negative Control</h4>
                    <p>A negative control ensures that your results are caused by the independent variable and not by the experimental setup itself. It is the baseline of scientific truth.</p>
                </div>
            </div>
        `
    }
};
