// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Weekend Multiplier
 * Activate weekend multiplier anytime
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        multiplier: 5,
        debug: true
    };

    console.log('🎉 [Weekend Multiplier] Loading...');

    function activateWeekendMultiplier() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Activate weekend
        userdata.weekendActive = true;
        userdata.weekendMultiplier = CONFIG.multiplier;
        userdata.weekendExpiry = Date.now() + (24 * 60 * 60 * 1000); // 24 hours

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log(`✅ Weekend multiplier activated (${CONFIG.multiplier}x)!`);
    }

    // Intercept multiplier calculations
    function interceptMultiplierAPI() {
        const originalFetch = window.fetch;
        window.fetch = async function(...args) {
            const response = await originalFetch.apply(this, arguments);

            try {
                const clone = response.clone();
                const data = await clone.json();

                if (data.reward) {
                    data.reward = Math.floor((data.reward || 0) * CONFIG.multiplier);
                }
                if (data.coins) {
                    data.coins = Math.floor(data.coins * CONFIG.multiplier);
                }
                if (data.xp) {
                    data.xp = Math.floor(data.xp * CONFIG.multiplier);
                }
            } catch (e) {}

            return response;
        };
    }

    // Show weekend indicator
    function showWeekendIndicator() {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            top: 50px;
            right: 20px;
            padding: 10px 20px;
            background: linear-gradient(45deg, #ffff00, #ff6600);
            color: #000;
            border-radius: 5px;
            font-weight: bold;
            z-index: 9999;
        `;
        indicator.textContent = `🎉 WEEKEND MULTIPLIER ${CONFIG.multiplier}x ACTIVE`;
        document.body.appendChild(indicator);
    }

    activateWeekendMultiplier();
    interceptMultiplierAPI();
    showWeekendIndicator();

    console.log('✅ [Weekend Multiplier] Active!');
    console.log(`🎉 All rewards multiplied by ${CONFIG.multiplier}x!`);
})();
