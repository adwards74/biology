/**
 * Genius Math Portal - Unified Router
 * Handles view switching and lesson navigation in a data-driven way.
 */

window.AppRouter = (function () {
    const views = ['subjects', 'tree', 'drill', 'profile'];

    function switchView(viewId) {
        console.log("ROUTING TO:", viewId);

        // Hide all views
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Show target view
        const targetView = document.getElementById(`${viewId}-view`);
        if (targetView) targetView.style.display = 'block';

        // Update sidebar state
        document.querySelectorAll('.nav-links .nav-item').forEach(li => {
            li.classList.remove('active');
        });
        const activeNav = document.querySelector(`.nav-links .nav-item[data-view="${viewId}"]`);
        if (activeNav) activeNav.classList.add('active');

        // Special initialization
        if (viewId === 'knowledge' && window.showKnowledgeTree) window.showKnowledgeTree();
        if (viewId === 'dashboard' && window.showDashboard) window.showDashboard();
        if (viewId === 'subjects' && window.showSubjects) window.showSubjects();
        if (viewId === 'strategy' && window.showStrategy) window.showStrategy();
        if (viewId === 'resources' && window.showResources) window.showResources();
        if (viewId === 'review' && window.showReviewHub) window.showReviewHub();
    }

    // Expose switchView to window for legacy compatibility
    window.switchView = switchView;

    return {
        switchView: switchView,
        initialize: () => {
            // Initial view
            switchView('dashboard');
        }
    };
})();
