// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Friend Rival Beater
 * Always win against friend rivals
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('👥 [Friend Rival Beater] Loading...');

    function beatAllRivals() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        if (!userdata.rivals) {
            userdata.rivals = [];
        }

        // Set all rivalries as won
        userdata.rivals = userdata.rivals.map(rival => ({
            ...rival,
            wins: 9999,
            losses: 0,
            winRate: 100
        }));

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ All rivalries set to 9999 wins!');
    }

    // Auto-win against friends
    function autoWinAgainstRivals() {
        const script = document.createElement('script');
        script.textContent = `
            window.finishFriendRace = function(friendId, result) {
                result.position = 1;
                result.won = true;
                result.placement = 'first';
                return result;
            };

            window.getRivalStats = function(friendId) {
                return { wins: 9999, losses: 0, winRate: 100, position: 1 };
            };

            setInterval(() => {
                const rivalElements = document.querySelectorAll('[class*="rival"], [class*="friend"]');
                rivalElements.forEach(el => {
                    const winMatch = el.textContent.match(/(\\d+)\\s*(?:wins?|w)/i);
                    if (winMatch) {
                        el.textContent = el.textContent.replace(winMatch[1], '9999');
                    }
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Update friend race display
    function updateFriendRaceDisplay() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="rival"], [class*="friend"] {
                border: 2px solid #00ff00 !important;
            }

            [class*="win-rate"] {
                color: #00ff00 !important;
                font-weight: bold !important;
            }

            .vs-info {
                background: rgba(0, 255, 0, 0.1) !important;
            }
        `;
        document.head.appendChild(style);
    }

    beatAllRivals();
    autoWinAgainstRivals();
    updateFriendRaceDisplay();

    console.log('✅ [Friend Rival Beater] Active!');
    console.log('👥 All rivals beaten - 9999 wins!');
})();
