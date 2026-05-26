// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Cup Challenge Beater
 * Auto-complete all cup challenges and earn rewards
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🏆 [Cup Challenge Beater] Loading...');

    function beatAllCupChallenges() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        if (!userdata.cups) {
            userdata.cups = [];
        }

        // Complete all cup tiers
        const cupTiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Legendary'];
        userdata.cups = cupTiers.map((tier, index) => ({
            id: index,
            name: `${tier} Cup`,
            tier: tier,
            completed: true,
            won: true,
            position: 1,
            reward_coins: 100000,
            reward_xp: 50000,
            reward_car: true,
            completedAt: Date.now()
        }));

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ All cup challenges completed!');
    }

    // Inject cup completion
    function injectCupCompletion() {
        const script = document.createElement('script');
        script.textContent = `
            window.completeCupChallenge = function(cupId) {
                return { success: true, reward: 100000, completed: true };
            };

            window.getAllCups = function() {
                return Array.from({length: 6}, (_, i) => ({
                    id: i,
                    completed: true,
                    won: true,
                    position: 1
                }));
            };

            window.isCupCompleted = function() {
                return true;
            };

            setInterval(() => {
                const cupElements = document.querySelectorAll('[class*="cup"]');
                cupElements.forEach(el => {
                    el.classList.remove('locked');
                    el.classList.add('completed');
                    el.style.opacity = '1';
                    el.style.filter = 'none';
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Update UI
    function updateCupDisplay() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="cup"] {
                opacity: 1 !important;
                filter: none !important;
            }

            [class*="cup"].locked {
                display: none !important;
            }

            [class*="cup"].completed {
                background: gold !important;
                border: 3px solid #FFD700 !important;
            }

            .cup-reward {
                color: #00ff00 !important;
                font-weight: bold !important;
            }
        `;
        document.head.appendChild(style);
    }

    beatAllCupChallenges();
    injectCupCompletion();
    updateCupDisplay();

    console.log('✅ [Cup Challenge Beater] Active!');
    console.log('🏆 All cup challenges beaten - Rewards claimed!');
})();
