// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Daily Bonus Multiplier
 * Multiply daily bonus rewards
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        multiplier: 10,
        debug: true
    };

    console.log('🎁 [Daily Bonus Multiplier] Loading...');

    function multiplyDailyBonus() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Multiply daily rewards
        if (userdata.dailyBonus) {
            userdata.dailyBonus.coins = (userdata.dailyBonus.coins || 0) * CONFIG.multiplier;
            userdata.dailyBonus.xp = (userdata.dailyBonus.xp || 0) * CONFIG.multiplier;
        }

        // Set next daily bonus to be huge
        userdata.nextDailyBonusCoins = 100000 * CONFIG.multiplier;
        userdata.nextDailyBonusXP = 50000 * CONFIG.multiplier;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log(`✅ Daily bonus multiplied by ${CONFIG.multiplier}x`);
    }

    // Intercept bonus rewards API
    function interceptBonusAPI() {
        const originalFetch = window.fetch;
        window.fetch = async function(...args) {
            const url = args[0];
            const response = await originalFetch.apply(this, arguments);

            if (typeof url === 'string' && url.includes('bonus')) {
                try {
                    const clone = response.clone();
                    const data = await clone.json();

                    if (data.coins) data.coins *= CONFIG.multiplier;
                    if (data.xp) data.xp *= CONFIG.multiplier;
                    if (data.reward) {
                        data.reward.coins = (data.reward.coins || 0) * CONFIG.multiplier;
                        data.reward.xp = (data.reward.xp || 0) * CONFIG.multiplier;
                    }
                } catch (e) {}
            }

            return response;
        };
    }

    // Update UI displays
    function updateBonusDisplay() {
        setInterval(() => {
            const bonusElements = document.querySelectorAll('[class*="bonus"], [data-bonus]');
            bonusElements.forEach(el => {
                const match = el.textContent.match(/(\d+)\s*(?:coins?|xp)/i);
                if (match) {
                    el.textContent = el.textContent.replace(match[1], Math.floor(match[1] * CONFIG.multiplier));
                }
            });
        }, 500);
    }

    multiplyDailyBonus();
    interceptBonusAPI();
    updateBonusDisplay();

    console.log('✅ [Daily Bonus Multiplier] Active!');
    console.log(`📊 All bonuses are now ${CONFIG.multiplier}x!`);
})();
