/**
 * Bio-Archive Library Data
 * Curated external resources including YouTube videos and academic sites.
 * Ratings are based on curriculum relevance (1-5 stars).
 */

window.BIO_LIBRARY = {
    categories: [
        {
            id: "intro-meta",
            title: "Ch.0: Biological Foundations & Intro",
            icon: "fas fa-seedling",
            resources: [
                {
                    type: "video",
                    title: "Biology Explained in 17 Minutes",
                    author: "Wacky Science",
                    id: "otAEibvhi6U",
                    views: "2.6M+",
                    relevance: 5,
                    description: "An incredibly fast-paced, high-density overview of all major biological themes."
                },
                {
                    type: "video",
                    title: "The Biology Learning Playlist Intro",
                    author: "Amoeba Sisters",
                    id: "T-0MvM-kE7A",
                    views: "800K+",
                    relevance: 5,
                    description: "A perfect roadmap for visual learners starting their biology journey."
                },
                {
                    type: "site",
                    title: "Khan Academy Biology",
                    url: "https://www.khanacademy.org/science/biology",
                    author: "Sal Khan",
                    relevance: 5,
                    description: "The gold standard for fundamental concept reinforcement and practice questions."
                },
                {
                    type: "site",
                    title: "HHMI BioInteractive",
                    url: "https://www.hhmi.org/biointeractive",
                    author: "HHMI",
                    relevance: 5,
                    description: "Real-world data and professional laboratory simulations used by researchers."
                }
            ]
        },
        {
            id: "cellular-dynamics",
            title: "Ch.1: Cellular Systems & Logic",
            icon: "fas fa-microscope",
            resources: [
                {
                    type: "video",
                    title: "Introduction to Cells",
                    author: "Amoeba Sisters",
                    id: "8IlzKri08t0",
                    views: "6M+",
                    relevance: 5,
                    description: "Detailed visualization of prokaryotic vs eukaryotic architecture."
                },
                {
                    type: "site",
                    title: "Cells Alive!",
                    url: "https://www.cellsalive.com/",
                    author: "Quill Graphics",
                    relevance: 4,
                    description: "Famous interactive cell models and microscopy animations."
                },
                {
                    type: "video",
                    title: "Inside the Cell Membrane",
                    author: "Amoeba Sisters",
                    id: "qBCVVszQQNs",
                    views: "4M+",
                    relevance: 5,
                    description: "Deep dive into the fluid mosaic model and phospholipid logic."
                }
            ]
        },
        {
            id: "genetics-biotech",
            title: "Advanced Genetics & Biotech",
            icon: "fas fa-dna",
            resources: [
                {
                    type: "video",
                    title: "DNA Replication (Updated)",
                    author: "Amoeba Sisters",
                    id: "5qSrmeiWsuc",
                    views: "3M+",
                    relevance: 5,
                    description: "The most clear explanation of leading/lagging strand synthesis."
                },
                {
                    type: "site",
                    title: "BioNinja IB Biology",
                    url: "https://ib.bioninja.com.au/",
                    author: "BioNinja",
                    relevance: 5,
                    description: "Extremely high-quality notes specifically formatted for IB/Advanced biology students."
                },
                {
                    type: "site",
                    title: "Learn.Genetics",
                    url: "https://learn.genetics.utah.edu/",
                    author: "University of Utah",
                    relevance: 5,
                    description: "The ultimate resource for visualizing gene expression and biotech tools like PCR."
                }
            ]
        }
    ]
};
