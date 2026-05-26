// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Time Freeze
 * Freeze time during races to complete at your pace
 * Usage: Paste into browser console during a race, press 'T' to toggle
 */

(function() {
    'use strict';

    let timeFrozen = false;
    let frozenTime = null;

    console.log('⏱️ [Time Freeze] Loading...');

    function freezeTime() {
        const script = document.createElement('script');
        script.textContent = `
            window._timeFrozen = false;

            // Override Date
            const originalDate = Date.now;
            window.Date.now = function() {
                if (window._timeFrozen && window._frozenTime) {
                    return window._frozenTime;
                }
                return originalDate();
            };

            // Freeze timers
            const originalSetTimeout = window.setTimeout;
            window.setTimeout = function(callback, delay) {
                if (window._timeFrozen) {
                    return originalSetTimeout(callback, 99999999);
                }
                return originalSetTimeout(callback, delay);
            };

            // Keyboard control
            document.addEventListener('keydown', (e) => {
                if (e.key.toLowerCase() === 't') {
                    window._timeFrozen = !window._timeFrozen;
                    window._frozenTime = Date.now();
                    console.log(window._timeFrozen ? '⏸️ Time FROZEN' : '▶️ Time RUNNING');
                }
            });

            setInterval(() => {
                const timerElements = document.querySelectorAll('[class*="timer"], [class*="time"]');
                if (window._timeFrozen) {
                    timerElements.forEach(el => {
                        el.style.opacity = '0.5';
                        el.style.textShadow = '0 0 10px red';
                    });
                }
            }, 100);
        `;
        document.documentElement.appendChild(script);
    }

    // Add visual indicator
    function addTimeIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'time-freeze-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 20px;
            background: rgba(0, 0, 0, 0.8);
            color: #00ff00;
            border: 2px solid #00ff00;
            border-radius: 5px;
            font-weight: bold;
            z-index: 9999;
            display: none;
        `;
        indicator.textContent = '⏱️ PRESS T TO FREEZE/UNFREEZE TIME';
        document.body.appendChild(indicator);

        // Show on race start
        const observer = new MutationObserver(() => {
            if (document.querySelector('[class*="race"]')) {
                indicator.style.display = 'block';
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    freezeTime();
    addTimeIndicator();

    console.log('✅ [Time Freeze] Active!');
    console.log('⏱️ Press "T" during a race to freeze/unfreeze time');
})();
