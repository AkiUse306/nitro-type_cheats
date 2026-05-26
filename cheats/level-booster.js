// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Level Booster
 * Instantly level up to maximum
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('📈 [Level Booster] Loading...');

    function boostLevel() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set to max level
        userdata.level = 999;
        userdata.xp = 9999999;
        userdata.totalXP = 9999999;
        userdata.levelProgress = 100;

        // Add prestige if exists
        if (userdata.prestige !== undefined) {
            userdata.prestige = 100;
        }

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Leveled up to 999!');
        return true;
    }

    // Intercept level calculations
    function interceptLevelAPI() {
        const originalFetch = window.fetch;
        window.fetch = async function(...args) {
            const response = await originalFetch.apply(this, arguments);
            
            try {
                const clone = response.clone();
                const data = await clone.json();
                
                if (data.level) {
                    data.level = 999;
                    data.xp = 9999999;
                    data.levelProgress = 100;
                }
            } catch (e) {}
            
            return response;
        };
    }

    // Update UI
    function updateLevelDisplay() {
        setInterval(() => {
            const levelElements = document.querySelectorAll('[class*="level"]');
            levelElements.forEach(el => {
                if (el.textContent.match(/level|lvl/i)) {
                    el.textContent = el.textContent.replace(/\d+/, '999');
                }
            });
        }, 500);
    }

    boostLevel();
    interceptLevelAPI();
    updateLevelDisplay();

    console.log('✅ [Level Booster] Now level 999!');
    console.log('💡 Refresh page to see changes');
})();
