// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Duo Match Dominator
 * Always win duo matches
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('👫 [Duo Match Dominator] Loading...');

    function dominateDuoMatches() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set duo stats
        userdata.duoWins = 9999;
        userdata.duoLosses = 0;
        userdata.duoRank = 1;
        userdata.duoMMR = 9999;
        userdata.duoStreak = 9999;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Duo wins set to 9999!');
    }

    // Auto-win duo matches
    function autoWinDuoMatch() {
        const script = document.createElement('script');
        script.textContent = `
            window._duoWinner = true;

            window.finishDuoMatch = function(matchData) {
                matchData.position = 1;
                matchData.won = true;
                matchData.reward = 50000;
                matchData.xp = 25000;
                return matchData;
            };

            window.getDuoStats = function() {
                return { wins: 9999, losses: 0, rank: 1, mmr: 9999 };
            };

            setInterval(() => {
                const duoElements = document.querySelectorAll('[class*="duo"], [class*="partner"]');
                duoElements.forEach(el => {
                    if (el.textContent.match(/\\d+/)) {
                        el.textContent = el.textContent.replace(/\\d+/, '9999');
                    }
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Boost partner stats
    function boostPartnerStats() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="duo"], [class*="partner"] {
                border: 2px solid #00ff00 !important;
                box-shadow: 0 0 10px #00ff00 !important;
            }

            [class*="duo-rank"], [class*="duo-stats"] {
                color: #00ff00 !important;
                font-weight: bold !important;
            }

            .duo-win {
                background: linear-gradient(45deg, #00ff00, #00aa00) !important;
            }
        `;
        document.head.appendChild(style);
    }

    dominateDuoMatches();
    autoWinDuoMatch();
    boostPartnerStats();

    console.log('✅ [Duo Match Dominator] Active!');
    console.log('👫 Duo wins: 9999 - You always win matches!');
})();
