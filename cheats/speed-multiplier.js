// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Speed Multiplier
 * Increases typing speed multiplier in races
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        multiplier: 3, // 3x speed multiplier
        wpmBoost: 200, // Additional WPM to show
        debug: true
    };

    console.log(`⚡ [Speed Multiplier] Loading with ${CONFIG.multiplier}x multiplier...`);

    // Override speed calculations
    function overrideSpeedCalculations() {
        const script = document.createElement('script');
        script.textContent = `
            window._speedMultiplier = ${CONFIG.multiplier};
            window._wpmBoost = ${CONFIG.wpmBoost};
            
            // Store original functions
            const originalMath = {
                PI: Math.PI,
                sqrt: Math.sqrt,
                floor: Math.floor,
                ceil: Math.ceil
            };

            // Hook into any speed calculation
            const originalCalculateSpeed = window.calculateSpeed || function() {};
            window.calculateSpeed = function(chars, time) {
                const wpm = (chars / 5) / (time / 60);
                return (wpm * window._speedMultiplier) + window._wpmBoost;
            };

            // Monitor for WPM display
            setInterval(() => {
                const wpmElements = document.querySelectorAll('[class*="wpm"], [class*="speed"], [data-wpm]');
                wpmElements.forEach(el => {
                    const text = el.textContent;
                    const match = text.match(/(\\d+)\\s*(?:wpm|speed)/i);
                    if (match) {
                        const baseWPM = parseInt(match[1]);
                        if (baseWPM < 300) { // Only boost realistic speeds
                            const newWPM = Math.floor(baseWPM * window._speedMultiplier);
                            el.textContent = el.textContent.replace(match[1], newWPM);
                        }
                    }
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Intercept race data
    function interceptRaceData() {
        const originalFetch = window.fetch;
        
        window.fetch = async function(...args) {
            const response = await originalFetch.apply(this, arguments);
            
            // Clone response for processing
            const clonedResponse = response.clone();
            
            try {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await clonedResponse.json();
                    
                    // Modify speed-related fields
                    if (data.speed) {
                        data.speed = Math.floor(data.speed * CONFIG.multiplier);
                    }
                    if (data.wpm) {
                        data.wpm = Math.floor(data.wpm * CONFIG.multiplier);
                    }
                    if (data.accuracy) {
                        data.accuracy = 100; // Perfect accuracy
                    }
                    if (data.multiplier) {
                        data.multiplier = CONFIG.multiplier;
                    }
                }
            } catch (e) {}
            
            return response;
        };
    }

    // Modify the car/player speed in race
    function boostRaceSpeed() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // Look for speed display elements
                if (mutation.target.style) {
                    if (mutation.target.style.transform) {
                        // Boost movement speed
                        const original = mutation.target.style.transform;
                        const boosted = original.replace(/translate[XY]?\(([^,]+)/g, (match, value) => {
                            const num = parseFloat(value);
                            return match.replace(value, (num * CONFIG.multiplier).toString());
                        });
                        mutation.target.style.transform = boosted;
                    }
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            attributeFilter: ['style']
        });
    }

    // Initialize all modifications
    overrideSpeedCalculations();
    interceptRaceData();
    boostRaceSpeed();

    console.log(`⚡ [Speed Multiplier] Active!`);
    console.log(`📊 Speed Boost: ${CONFIG.multiplier}x`);
    console.log(`📊 WPM Boost: +${CONFIG.wpmBoost}`);
})();
