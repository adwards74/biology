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
                            <div id="atlas-neural-fallback" class="neural-vis-fallback fadeIn">
                                <div class="core-pulse"></div>
                                <div class="orbit-layer layer-1"></div>
                                <div class="orbit-layer layer-2"></div>
                                <div class="orbit-layer layer-3"></div>
                                <div class="matrix-text">NEURAL SIMULATION ACTIVE</div>
                            </div>
                            
                            <img src="${data.image}" alt="${data.title}" id="atlas-main-image" onload="document.getElementById('atlas-neural-fallback').style.display='none'" onerror="NeoAtlas.handleImageError(this)">
                            
                            <div class="hotspot-layer" id="hotspot-mount">
                                ${data.parts.map(part => `
                                    <div class="hotspot pulse" 
                                         style="left: ${part.coords.x}%; top: ${part.coords.y}%;" 
                                         data-id="${part.id}"
                                         onclick="NeoAtlas.focusPart('${part.id}')">
                                        <div class="hotspot-inner"></div>
                                        <div class="hotspot-label">${part.name}</div>
                                    </div>
                                `).join('')}
                            </div>
                            
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
                    <span><i class="fas fa-shield-virus"></i> High-Fidelity Anatomical Simulation v1.1 Hotspot Edition</span>
                    <button class="btn-primary" onclick="window.switchView('dashboard')"><i class="fas fa-home"></i> Exit Atlas</button>
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
                    padding: 0;
                    background: radial-gradient(circle at center, #0f172a 0%, #000 100%);
                    border-radius: 15px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 500px;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                
                /* Hotspot Styling */
                .hotspot-layer {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 10;
                    pointer-events: none;
                }
                .hotspot {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    transform: translate(-50%, -50%);
                    pointer-events: auto;
                    cursor: pointer;
                    z-index: 20;
                }
                .hotspot-inner {
                    width: 100%;
                    height: 100%;
                    background: var(--accent-cyan);
                    border: 2px solid #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--accent-cyan);
                    transition: all 0.3s ease;
                }
                .hotspot-label {
                    position: absolute;
                    top: 25px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.8);
                    color: #fff;
                    padding: 4px 10px;
                    border-radius: 5px;
                    font-size: 0.7rem;
                    white-space: nowrap;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border: 1px solid var(--accent-cyan);
                    pointer-events: none;
                }
                .hotspot:hover .hotspot-label, .hotspot.active .hotspot-label {
                    opacity: 1;
                }
                .hotspot.active .hotspot-inner {
                    background: #fff;
                    transform: scale(1.3);
                    box-shadow: 0 0 20px var(--accent-cyan);
                }
                
                .pulse::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: var(--accent-cyan);
                    opacity: 0.6;
                    animation: hotspot-pulse 2s infinite;
                }
                @keyframes hotspot-pulse {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(3); opacity: 0; }
                }

                .neural-vis-fallback {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                .core-pulse {
                    width: 100px;
                    height: 100px;
                    background: var(--accent-cyan);
                    border-radius: 50%;
                    filter: blur(40px);
                    opacity: 0.3;
                    animation: pulse 4s infinite ease-in-out;
                }
                .orbit-layer {
                    position: absolute;
                    border: 1px dashed rgba(0, 210, 255, 0.2);
                    border-radius: 50%;
                    animation: rotate 20s infinite linear;
                }
                .layer-1 { width: 250px; height: 180px; }
                .layer-2 { width: 320px; height: 240px; animation-duration: 30s; animation-direction: reverse; }
                .layer-3 { width: 200px; height: 300px; animation-duration: 40s; }
                
                .matrix-text {
                    position: absolute;
                    bottom: 20px;
                    font-family: monospace;
                    font-size: 0.6rem;
                    letter-spacing: 2px;
                    opacity: 0.4;
                    color: var(--accent-cyan);
                }

                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes pulse { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 0.5; transform: scale(1.2); } }
                
                #atlas-main-image {
                    max-width: 100%;
                    border-radius: 10px;
                    transition: all 0.5s ease;
                    z-index: 5;
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
        // Toggle Accordion
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

        // Toggle Hotspots
        document.querySelectorAll('.hotspot').forEach(hs => {
            if (hs.dataset.id === partId) {
                hs.classList.toggle('active');
            } else {
                hs.classList.remove('active');
            }
        });

        // Visual Interaction
        const img = document.getElementById('atlas-main-image');
        if (img) {
            img.style.transform = "scale(1.05)";
            setTimeout(() => { img.style.transform = "scale(1)"; }, 300);
        }
    }

    function handleImageError(img) {
        console.warn("NeoAtlas: Asset sync failed. Activating Neural Fallback.");
        img.style.display = 'none';
        const fallback = document.getElementById('atlas-neural-fallback');
        if (fallback) fallback.style.display = 'flex';
        // Hide hotspots if image fails
        const hs = document.getElementById('hotspot-mount');
        if (hs) hs.style.display = 'none';
    }

    return {
        render: renderAtlas,
        focusPart: focusPart,
        handleImageError: handleImageError
    };

})();
