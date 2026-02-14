/**
 * NeoAtlas Dataset - Elite Biology Portal
 * Contains structured mapping for biological models.
 */

window.ATLAS_DATA = {
    "plant-cell": {
        title: "Anatomy of a Plant Cell",
        description: "A complex eukaryotic cell with specialized organelles for photosynthesis and structural support.",
        image: "assets/cell-architecture.png", // Using the confirmed existing high-quality asset
        parts: [
            {
                id: "nucleus",
                name: "Nucleus",
                icon: "fas fa-microchip",
                coords: { x: 75, y: 20 },
                description: "The control center. Contains the cell's DNA and coordinates growth, metabolism, and reproduction.",
                insight: "The 'Master Server' of the cell. Protected by a double membrane with nuclear pores for information relay."
            },
            {
                id: "vacuole",
                name: "Large Central Vacuole",
                icon: "fas fa-droplet",
                coords: { x: 72, y: 55 },
                description: "A large, water-filled sac that maintains turgor pressure against the cell wall.",
                insight: "Keeps the plant upright. When this 'reservoir' is empty, the plant wilts."
            },
            {
                id: "chloroplast",
                name: "Chloroplast",
                icon: "fas fa-leaf",
                coords: { x: 88, y: 75 },
                description: "The primary site of photosynthesis, converting light energy into chemical energy (glucose).",
                insight: "Contains Chlorophyll. Think of these as high-efficiency solar panels for the plant's grid."
            },
            {
                id: "mitochondria",
                name: "Mitochondria",
                icon: "fas fa-bolt",
                coords: { x: 68, y: 82 },
                description: "The powerhouse. Site of cellular respiration where ATP is generated from nutrients.",
                insight: "The cell's generators. They have their own DNA, suggesting an ancient symbiotic origin (Endosymbiotic Theory)."
            },
            {
                id: "cell-wall",
                name: "Cell Wall",
                icon: "fas fa-shield-halved",
                coords: { x: 92, y: 40 },
                description: "A rigid outer layer made of cellulose that provide structural protection and support.",
                insight: "The 'Exoskeleton' of the cell. Prevents the cell from bursting in hypotonic environments."
            },
            {
                id: "golgi",
                name: "Golgi Apparatus",
                icon: "fas fa-boxes-packing",
                coords: { x: 85, y: 88 },
                description: "Responsible for modifying, sorting, and packaging proteins and lipids for secretion.",
                insight: "The 'Post Office'. Packages are tagged with chemical markers to ensure they reach the correct destination."
            },
            {
                id: "ribosome",
                name: "Ribosome",
                icon: "fas fa-microscope",
                coords: { x: 65, y: 40 },
                description: "Molecular machines that translate mRNA into polypeptide chains (proteins).",
                insight: "The 'Assembly Line'. Found floating in the cytoplasm or attached to the Rough ER."
            }
        ]
    },
    "animal-cell": {
        title: "Anatomy of an Animal Cell",
        description: "A versatile eukaryotic cell optimized for mobility and specialized functions without a rigid wall.",
        image: "assets/cell-architecture.png", // Same reference image used for consistency
        parts: [
            {
                id: "centrioles",
                name: "Centrioles",
                icon: "fas fa-grip-lines",
                coords: { x: 38, y: 65 },
                description: "Cylindrical structures that organize microtubules for cell division.",
                insight: "The 'Architects' of mitosis. They build the spindle fibers that pull chromosomes apart."
            },
            {
                id: "lysosome",
                name: "Lysosome",
                icon: "fas fa-recycle",
                coords: { x: 15, y: 30 },
                description: "Spherical vesicles containing digestive enzymes that break down waste and old organelles.",
                insight: "The 'Recycling Crew'. They prevent cellular 'trash' from accumulating and damaging the cell."
            },
            {
                id: "nucleus",
                name: "Nucleus",
                icon: "fas fa-microchip",
                coords: { x: 25, y: 40 },
                description: "Central organelle containing genetic material.",
                insight: "The genetic vault of the eukaryotic cell."
            },
            {
                id: "mitochondria",
                name: "Mitochondria",
                icon: "fas fa-bolt",
                coords: { x: 35, y: 25 },
                description: "The ATP production center.",
                insight: "Fueling the cell's metabolic activity through aerobic respiration."
            }
        ]
    }
};
