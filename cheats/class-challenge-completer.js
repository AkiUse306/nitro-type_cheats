// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Class Challenge Completer
 * Complete all class challenges instantly
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('📚 [Class Challenge Completer] Loading...');

    function completeAllClassChallenges() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        if (!userdata.classChallenges) {
            userdata.classChallenges = [];
        }

        // Complete all challenges
        userdata.classChallenges = Array.from({length: 50}, (_, i) => ({
            id: i,
            name: `Challenge ${i + 1}`,
            completed: true,
            score: 100,
            reward: 10000,
            completedAt: Date.now()
        }));

        // Add class achievements
        if (!userdata.classAchievements) {
            userdata.classAchievements = {};
        }
        userdata.classAchievements.all_completed = true;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ All class challenges completed!');
    }

    // Inject challenge completion
    function injectChallengeCompletion() {
        const script = document.createElement('script');
        script.textContent = `
            window.completeClassChallenge = function(challengeId) {
                return { success: true, reward: 10000, completed: true };
            };

            window.getClassChallenges = function() {
                return Array.from({length: 50}, (_, i) => ({
                    id: i,
                    completed: true,
                    score: 100
                }));
            };

            window.isChallengeLocked = function() {
                return false;
            };

            setInterval(() => {
                const challengeElements = document.querySelectorAll('[class*="challenge"]');
                challengeElements.forEach(el => {
                    el.classList.remove('locked');
                    el.classList.add('completed');
                    el.style.opacity = '1';
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Update challenge display
    function updateChallengeDisplay() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="challenge"] {
                opacity: 1 !important;
                filter: none !important;
            }

            [class*="challenge"].locked {
                display: none !important;
            }

            [class*="challenge"].completed {
                background: linear-gradient(45deg, #00ff00, #00aa00) !important;
                border: 2px solid #00ff00 !important;
            }

            .challenge-reward {
                color: #ffff00 !important;
                font-weight: bold !important;
            }
        `;
        document.head.appendChild(style);
    }

    completeAllClassChallenges();
    injectChallengeCompletion();
    updateChallengeDisplay();

    console.log('✅ [Class Challenge Completer] Active!');
    console.log('📚 All 50 class challenges completed!');
})();
