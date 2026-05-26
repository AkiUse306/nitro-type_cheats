// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type XP Booster
 * Multiplies XP gained from races
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        multiplier: 30, // 30x XP multiplier
        debug: true
    };

    console.log(`⚡ [XP Booster] Loading with ${CONFIG.multiplier}x multiplier...`);

    // Intercept XP gain events
    function interceptXPGains() {
        const originalFetch = window.fetch;
        
        window.fetch = async function(...args) {
            const request = args[0];
            let options = args[1] || {};

            // Check if this is a race completion or XP-related request
            if (typeof request === 'string' && 
                (request.includes('/races') || 
                 request.includes('/xp') || 
                 request.includes('/earn') ||
                 request.includes('/complete'))) {
                
                if (options.body) {
                    try {
                        const body = JSON.parse(options.body);
                        
                        // Multiply XP values
                        if (body.xp) {
                            const oldXP = body.xp;
                            body.xp = Math.floor(body.xp * CONFIG.multiplier);
                            if (CONFIG.debug) console.log(`⚡ XP multiplied: ${oldXP} → ${body.xp}`);
                        }
                        
                        if (body.experience) {
                            const oldExp = body.experience;
                            body.experience = Math.floor(body.experience * CONFIG.multiplier);
                            if (CONFIG.debug) console.log(`⚡ Experience multiplied: ${oldExp} → ${body.experience}`);
                        }

                        options.body = JSON.stringify(body);
                    } catch (e) {
                        // Not JSON, skip
                    }
                }
            }

            return originalFetch.apply(this, arguments);
        };
    }

    // Modify XP display/calculation
    function modifyXPCalculation() {
        const originalAdd = Array.prototype.push;
        
        // Hook into any XP addition
        window.addEventListener('storage', (e) => {
            if (e.key && (e.key.includes('xp') || e.key.includes('experience'))) {
                try {
                    let data = JSON.parse(e.newValue);
                    if (typeof data === 'number') {
                        data = Math.floor(data * CONFIG.multiplier);
                        localStorage.setItem(e.key, JSON.stringify(data));
                        if (CONFIG.debug) console.log(`⚡ Storage XP adjusted: ${e.key}`);
                    }
                } catch (e) {}
            }
        });
    }

    // Inject XP multiplier into race completion
    function injectXPMultiplier() {
        const script = document.createElement('script');
        script.textContent = `
            window._xpMultiplier = ${CONFIG.multiplier};
            
            // Hook into race completion
            if (window.completeRace) {
                const originalComplete = window.completeRace;
                window.completeRace = function(...args) {
                    if (args[0] && args[0].xp) {
                        args[0].xp = Math.floor(args[0].xp * window._xpMultiplier);
                    }
                    return originalComplete.apply(this, arguments);
                };
            }
        `;
        document.documentElement.appendChild(script);
    }

    // Monitor DOM for XP displays and modify them
    function monitorXPDisplay() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.textContent && node.textContent.match(/xp|experience|earned/i)) {
                            const xpMatch = node.textContent.match(/(\d+)\s*(?:xp|experience)/i);
                            if (xpMatch) {
                                const baseXP = parseInt(xpMatch[1]);
                                const boostedXP = Math.floor(baseXP * CONFIG.multiplier);
                                node.textContent = node.textContent.replace(
                                    xpMatch[1], 
                                    boostedXP.toString()
                                );
                                if (CONFIG.debug) console.log(`⚡ Display: ${baseXP} XP → ${boostedXP} XP`);
                            }
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: false
        });
    }

    // Initialize
    interceptXPGains();
    modifyXPCalculation();
    injectXPMultiplier();
    monitorXPDisplay();

    console.log(`⚡ [XP Booster] Active! All XP gains are multiplied by ${CONFIG.multiplier}x`);
    console.log('💡 Your races will earn much more XP now!');
})();
