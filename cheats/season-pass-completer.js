// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Season Pass Completer
 * Instantly complete season pass and unlock all rewards
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🎯 [Season Pass Completer] Loading...');

    function completeSeasonPass() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Complete season pass
        userdata.seasonPass = {
            tier: 100,
            maxTier: 100,
            progress: 100,
            completed: true,
            rewards: Array.from({length: 100}, (_, i) => ({
                id: i,
                claimed: true,
                claimed_at: Date.now()
            }))
        };

        // Add seasonal rewards
        if (!userdata.seasonalRewards) {
            userdata.seasonalRewards = [];
        }

        userdata.seasonalRewards.push({
            name: 'Season Pass Complete',
            coins: 1000000,
            xp: 500000,
            cars: 10,
            theme: 'exclusive'
        });

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Season pass completed and all rewards claimed!');
    }

    // Inject completed status
    function injectSeasonPassUI() {
        const script = document.createElement('script');
        script.textContent = `
            window.getSeasonPassProgress = function() {
                return { tier: 100, maxTier: 100, percentage: 100, completed: true };
            };

            window.isSeasonPassCompleted = function() {
                return true;
            };

            window.claimSeasonReward = function() {
                return { success: true, reward: 'claimed' };
            };
        `;
        document.documentElement.appendChild(script);
    }

    // Update UI display
    function updateSeasonPassDisplay() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="season-pass"], [class*="battlepass"], [class*="pass"] {
                background: linear-gradient(45deg, #00ff00, #00aa00) !important;
            }

            [class*="tier"] {
                color: #00ff00 !important;
                font-weight: bold !important;
            }

            .progress-bar {
                width: 100% !important;
                background: #00ff00 !important;
            }
        `;
        document.head.appendChild(style);

        setInterval(() => {
            const tierElements = document.querySelectorAll('[class*="tier"]');
            tierElements.forEach(el => {
                if (el.textContent.match(/\\d+/)) {
                    el.textContent = el.textContent.replace(/\\d+/, '100');
                }
            });
        }, 500);
    }

    completeSeasonPass();
    injectSeasonPassUI();
    updateSeasonPassDisplay();

    console.log('✅ [Season Pass Completer] Active!');
    console.log('🎯 Season pass tier 100/100 - All rewards unlocked!');
})();
