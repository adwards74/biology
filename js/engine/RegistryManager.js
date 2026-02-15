/**
 * Sabrina Math 5.0 - Registry Manager
 * Handles the central curriculum manifest.
 */
window.RegistryManager = (function () {
    let manifest = null;

    let initPromise = null;

    async function loadManifest() {
        if (manifest) return manifest;
        if (initPromise) return initPromise;

        initPromise = (async () => {
            // First Priority: Try to use pre-loaded window.MANIFEST_DATA (e.g. from manifest.js)
            if (window.MANIFEST_DATA) {
                console.log("RegistryManager: Using pre-loaded MANIFEST_DATA.");
                manifest = window.MANIFEST_DATA;
                return manifest;
            }

            // Second Priority: Try to fetch manifest.json
            try {
                const response = await fetch('data/manifest.json');
                if (response.ok) {
                    manifest = await response.json();
                    console.log("RegistryManager: Manifest loaded via fetch.", Object.keys(manifest.lessons).length, "lessons.");
                    return manifest;
                }
            } catch (err) {
                console.warn("RegistryManager: Fetch failed. This is expected on file:// protocol.", err);
            }

            console.error("RegistryManager: All manifest loading methods failed.");
            initPromise = null;
            return null;
        })();

        return initPromise;
    }

    async function getLessonMetadata(lessonKey) {
        if (!manifest) {
            await loadManifest();
        }
        if (!manifest || !manifest.lessons) {
            console.error("RegistryManager: Manifest is null or invalid.");
            return null;
        }

        // Standard manifest check
        let metadata = manifest.lessons[lessonKey];

        // --- FALLBACK: Check modular CHAPTER_DATA ---
        if (!metadata && window.CHAPTER_DATA) {
            // Find in CHAPTER_DATA (typically nested by chapter ID, but we search all)
            for (const chapterId in window.CHAPTER_DATA) {
                if (window.CHAPTER_DATA[chapterId][lessonKey]) {
                    metadata = window.CHAPTER_DATA[chapterId][lessonKey];
                    console.log(`RegistryManager: Found ${lessonKey} in CHAPTER_DATA["${chapterId}"] fallback.`);
                    break;
                }
            }
        }

        return metadata || null;
    }

    return {
        initialize: loadManifest,
        getLesson: getLessonMetadata,
        isReady: () => !!manifest,
        getManifest: () => manifest
    };
})();
