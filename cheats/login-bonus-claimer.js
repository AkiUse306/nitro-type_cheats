// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Login Bonus Claimer
 * Claim all login bonuses instantly
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('✅ [Login Bonus Claimer] Loading...');

    function claimLoginBonuses() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set login streaks
        userdata.loginStreak = 365;
        userdata.consecutiveLogins = 365;
        userdata.lastLoginBonus = Date.now();
        userdata.totalLoginBonuses = 365;

        // Add bonus rewards
        userdata.loginBonusCoins = 500000;
        userdata.loginBonusXP = 250000;

        // Mark all daily bonuses as claimed
        if (!userdata.dailyBonuses) {
            userdata.dailyBonuses = [];
        }

        userdata.dailyBonuses = Array.from({length: 365}, (_, i) => ({
            day: i + 1,
            claimed: true,
            reward: 1000 + (i * 100)
        }));

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ All login bonuses claimed!');
    }

    // Auto-claim new bonuses
    function autoClaimBonuses() {
        const script = document.createElement('script');
        script.textContent = `
            window.claimLoginBonus = function() {
                return { success: true, coins: 500000, xp: 250000 };
            };

            window.canClaimBonus = function() {
                return true;
            };

            window.getLoginStreak = function() {
                return 365;
            };

            setInterval(() => {
                const bonusButtons = document.querySelectorAll('[class*="claim"], [class*="bonus"]');
                bonusButtons.forEach(btn => {
                    if (btn.textContent.toLowerCase().includes('claim')) {
                        btn.click();
                    }
                });
            }, 5000);
        `;
        document.documentElement.appendChild(script);
    }

    // Update bonus display
    function updateBonusDisplay() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="bonus"], [class*="claim"] {
                background: linear-gradient(45deg, #00ff00, #00aa00) !important;
                color: white !important;
                font-weight: bold !important;
            }

            [class*="login-streak"] {
                color: #ffff00 !important;
                text-shadow: 0 0 10px #ffff00 !important;
            }

            .streak-number {
                font-size: 2em !important;
                font-weight: bold !important;
            }
        `;
        document.head.appendChild(style);
    }

    claimLoginBonuses();
    autoClaimBonuses();
    updateBonusDisplay();

    console.log('✅ [Login Bonus Claimer] Active!');
    console.log('✅ 365-day login streak - All bonuses claimed!');
})();
