/**
 * NeoAtlas Rendering Engine
 * Handles interactive image-accordion components.
 */

window.NeoAtlas = (function () {

    function renderAtlas(modelId, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const data = window.ATLAS_DATA[modelId];
        if (!data) return;

        container.innerHTML = `
            <div class="neo-atlas glass fadeIn">
                <div class="atlas-header">
                    <h2><i class="fas fa-brain"></i> Neo-Neural Atlas: ${data.title}</h2>
                    <p>${data.description}</p>
                </div>
                
                <div class="atlas-content">
                    <div class="atlas-visual">
                        <div class="visual-container glass-card">
                            <img src="${data.image}" alt="${data.title}" id="atlas-main-image" onerror="this.src='https://via.placeholder.com/800x600?text=Neural+Image+Offline'">
                            <div class="visual-glow-layer"></div>
                        </div>
                    </div>
                    
                    <div class="atlas-accordion">
                        ${data.parts.map((part, idx) => `
                            <div class="atlas-item glass-card" data-id="${part.id}" onclick="NeoAtlas.focusPart('${part.id}')">
                                <div class="item-header">
                                    <div class="item-icon"><i class="${part.icon}"></i></div>
                                    <span class="item-title">${part.name}</span>
                                    <i class="fas fa-chevron-down chevron"></i>
                                </div>
                                <div class="item-body">
                                    <p>${part.description}</p>
                                    <div class="item-insight">
                                        <strong><i class="fas fa-lightbulb"></i> Elite Insight:</strong> ${part.insight}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="atlas-footer">
                    <span><i class="fas fa-shield-virus"></i> High-Fidelity Anatomical Simulation v1.0</span>
                    <button class="btn-primary" onclick="window.showDashboard()"><i class="fas fa-home"></i> Exit Atlas</button>
                </div>
            </div>
        `;

        // Inject Styles if not already present
        if (!document.getElementById('neo-atlas-styles')) {
            const style = document.createElement('style');
            style.id = 'neo-atlas-styles';
            style.textContent = `
                .neo-atlas {
                    padding: 30px;
                    border-radius: 20px;
                    background: rgba(15, 23, 42, 0.8);
                    border: 1px solid var(--glass-border);
                    margin-top: 20px;
                }
                .atlas-header { margin-bottom: 30px; }
                .atlas-header h2 { color: var(--accent-cyan); font-size: 1.8rem; margin-bottom: 10px; }
                .atlas-header p { opacity: 0.7; font-size: 0.95rem; }
                
                .atlas-content {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 30px;
                    min-height: 600px;
                }
                
                .visual-container {
                    position: sticky;
                    top: 100px;
                    padding: 20px;
                    background: #000;
                    border-radius: 15px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #atlas-main-image {
                    max-width: 100%;
                    border-radius: 10px;
                    transition: transform 0.3s ease;
                }
                
                .atlas-accordion {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    max-height: 650px;
                    overflow-y: auto;
                    padding-right: 10px;
                }
                
                .atlas-item {
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: 1px solid transparent;
                }
                .atlas-item:hover {
                    border-color: var(--accent-cyan);
                    background: rgba(0, 210, 255, 0.05);
                }
                .atlas-item.active {
                    background: rgba(0, 210, 255, 0.1);
                    border-color: var(--accent-cyan);
                    box-shadow: 0 0 20px rgba(0, 210, 255, 0.1);
                }
                
                .item-header {
                    padding: 15px 20px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .item-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: var(--glass-bg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-cyan);
                }
                .item-title { font-weight: 600; flex: 1; }
                .chevron { transition: transform 0.3s ease; opacity: 0.5; }
                .atlas-item.active .chevron { transform: rotate(180deg); opacity: 1; color: var(--accent-cyan); }
                
                .item-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-out;
                    padding: 0 20px;
                }
                .atlas-item.active .item-body {
                    max-height: 300px;
                    padding-bottom: 20px;
                }
                .item-insight {
                    margin-top: 12px;
                    padding: 10px;
                    background: rgba(249, 212, 35, 0.05);
                    border-left: 3px solid #f9d423;
                    font-size: 0.85rem;
                    border-radius: 0 8px 8px 0;
                }
                
                .atlas-footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid var(--glass-border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.8rem;
                    opacity: 0.6;
                }
                
                /* Custom Scrollbar for Accordion */
                .atlas-accordion::-webkit-scrollbar { width: 5px; }
                .atlas-accordion::-webkit-scrollbar-track { background: transparent; }
                .atlas-accordion::-webkit-scrollbar-thumb { background: var(--glass-border); border-radius: 10px; }
                
                @media (max-width: 900px) {
                    .atlas-content { grid-template-columns: 1fr; }
                    .visual-container { position: relative; top: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    function focusPart(partId) {
        document.querySelectorAll('.atlas-item').forEach(el => {
            if (el.dataset.id === partId) {
                el.classList.toggle('active');
                if (el.classList.contains('active')) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            } else {
                el.classList.remove('active');
            }
        });

        // Visual Interaction Placeholder
        const img = document.getElementById('atlas-main-image');
        if (img) {
            img.style.transform = "scale(1.05)";
            setTimeout(() => { img.style.transform = "scale(1)"; }, 300);
        }
    }

    return {
        render: renderAtlas,
        focusPart: focusPart
    };

})();
