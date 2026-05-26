// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Prestige Multiplier
 * Multiply prestige gains
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        multiplier: 100,
        debug: true
    };

    console.log('👑 [Prestige Multiplier] Loading...');

    function multiplyPrestige() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set prestige
        userdata.prestige = 999;
        userdata.prestigeLevel = 999;
        userdata.prestigePoints = 999999;
        userdata.totalPrestige = 999999;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log(`✅ Prestige set to level 999!`);
    }

    // Intercept prestige calculations
    function interceptPrestigeAPI() {
        const originalFetch = window.fetch;
        window.fetch = async function(...args) {
            const response = await originalFetch.apply(this, arguments);

            try {
                const clone = response.clone();
                const data = await clone.json();

                if (data.prestige) {
                    data.prestige = Math.floor(data.prestige * CONFIG.multiplier);
                }
                if (data.prestigeGain) {
                    data.prestigeGain = Math.floor(data.prestigeGain * CONFIG.multiplier);
                }
            } catch (e) {}

            return response;
        };
    }

    // Update prestige display
    function updatePrestigeDisplay() {
        setInterval(() => {
            const prestigeElements = document.querySelectorAll('[class*="prestige"]');
            prestigeElements.forEach(el => {
                if (el.textContent.match(/\d+/)) {
                    el.textContent = el.textContent.replace(/\d+/, '999');
                }
            });
        }, 500);
    }

    multiplyPrestige();
    interceptPrestigeAPI();
    updatePrestigeDisplay();

    console.log('✅ [Prestige Multiplier] Active!');
    console.log(`👑 All prestige gains multiplied by ${CONFIG.multiplier}x!`);
})();
