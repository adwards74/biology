/**
 * Sabrina Math 5.0 - Content Loader
 * Fetches and processes lesson content from Markdown files.
 */
window.ContentLoader = (function () {

    async function loadLessonContent(lessonKey) {
        const metadata = await window.RegistryManager.getLesson(lessonKey);
        if (!metadata) {
            throw new Error(`ContentLoader: No metadata found for lesson '${lessonKey}'`);
        }

        // --- NEW: Local Fallback Check ---
        // If content is already embedded (from manifest.js fallback), use it directly.
        if (metadata.content) {
            console.log(`ContentLoader: Using embedded content for ${lessonKey}`);
            return {
                title: metadata.title,
                raw: metadata.content,
                html: parseMarkdown(metadata.content),
                vizConfig: metadata.viz
            };
        }

        try {
            const response = await fetch(metadata.path);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const text = await response.text();

            return {
                title: metadata.title,
                raw: text,
                html: parseMarkdown(text),
                vizConfig: metadata.viz
            };
        } catch (err) {
            console.error(`ContentLoader: Failed to load content for ${lessonKey}`, err);
            if (window.location.protocol === 'file:') {
                throw new Error("Local File Security Blocked: Your browser blocks loading content via 'file://'.\n\nTo see your content, please REFRESH the page (I just deployed a fix to bundle the content).");
            }
            throw err;
        }
    }

    /**
     * Simple Markdown-to-HTML hybrid parser.
     * Since our MD files contain a mix of MD and HTML, we need to be careful.
     */
    function parseMarkdown(text) {
        // For now, our MD files are basically:
        // # Title
        // ## Subtitle
        // Content (HTML/LaTeX)

        let lines = text.split('\n');
        let html = "";
        let contentStarted = false;

        for (let line of lines) {
            if (line.startsWith('# ')) {
                // Skip main title as it's handled by the UI
                continue;
            } else if (line.startsWith('## ')) {
                // Skip subtitle as it's handled by the UI
                continue;
            } else {
                html += line + '\n';
            }
        }

        return html;
    }

    return {
        load: loadLessonContent
    };
})();
