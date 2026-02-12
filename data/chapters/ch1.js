window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA["ch1"] = {
    "ch1-1": {
        title: "1.1: The Cellular City",
        subtitle: "Architecture of Life",
        content: `
            <div class="lesson-section">
                <div class="intuition-box glass">
                    <h3><i class="fas fa-city"></i> The Urban Analogy</h3>
                    <p>Think of a cell not as a blob, but as a high-tech city. The <strong>Nucleus</strong> is City Hall (data storage), the <strong>Mitochondria</strong> are Power Plants (ATP production), and the <strong>Golgi Apparatus</strong> is the Post Office (packaging and shipping).</p>
                </div>

                <h2>I. The Endomembrane System</h2>
                <p>Biological systems rely on compartmentalization. By isolating different chemical reactions in separate organelles, the cell can perform contradictory tasks simultaneously (like building proteins while destroying waste).</p>
                
                <div class="glass-card" style="padding: 20px; border-left: 4px solid var(--accent-emerald);">
                    <h4>Key Organelles</h4>
                    <ul class="glass-list">
                        <li><strong>Ribosomes:</strong> Protein factories (The workers).</li>
                        <li><strong>Endoplasmic Reticulum (ER):</strong> The highway system. Rough ER handles protein synthesis; Smooth ER handles lipid manufacturing and detoxification.</li>
                        <li><strong>Lysosomes:</strong> The recycling centers (Waste management).</li>
                    </ul>
                </div>
            </div>

            <div class="tj-edge glass" style="margin-top:20px;">
                <h4><i class="fas fa-microchip"></i> CS Connection: Data Encapsulation</h4>
                <p>In Biology, organelles act like <strong>Objects</strong> in programming. Just as Object-Oriented Programming (OOP) uses encapsulation to hide internal logic and prevent external interference, the cell uses membrane-bound organelles to protect its vital processes from the messy environment of the cytoplasm.</p>
            </div>
        `
    },
    "ch1-2": {
        title: "1.2: Membrane Gatekeepers",
        subtitle: "Kinetics of Transport",
        content: `
            <div class="lesson-section">
                <h2>I. The Fluid Mosaic Model</h2>
                <p>Cell membranes are not rigid walls; they are fluid barriers made of phospholipids. They are <strong>Selectively Permeable</strong>, meaning they control exactly what enters and exits the 'city'.</p>
                
                <div class="proof-box glass">
                    <h4>Transport Flux ($\Delta C$)</h4>
                    <p>Molecules move naturally from High to Low concentration. This is <strong>Passive Transport</strong> (Entropy-driven). Moving against the gradient requires Energy (ATP) and is called <strong>Active Transport</strong>.</p>
                </div>
            </div>
        `
    }
};
