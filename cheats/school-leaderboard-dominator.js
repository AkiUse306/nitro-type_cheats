// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type School Leaderboard Dominator
 * Dominate your school leaderboard
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🏫 [School Leaderboard Dominator] Loading...');

    function dominateSchoolLeaderboard() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set school stats
        userdata.schoolRank = 1;
        userdata.schoolWins = 9999;
        userdata.schoolCoinsEarned = 999999999;
        userdata.schoolXPEarned = 999999999;
        userdata.schoolPosition = 'Top 1';

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ School rank set to #1');
    }

    // Boost school stats
    function boostSchoolStats() {
        setInterval(() => {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            userdata.schoolRank = 1;
            userdata.schoolWins = 9999;
            localStorage.setItem('userdata', JSON.stringify(userdata));
        }, 5000);
    }

    // Update leaderboard display
    function updateLeaderboardDisplay() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="leaderboard"] {
                border: 2px solid gold !important;
            }

            [class*="rank"] {
                color: gold !important;
                font-weight: bold !important;
            }

            [class*="first-place"], [class*="top-1"] {
                background: linear-gradient(45deg, #ffff00, #ff6600) !important;
            }
        `;
        document.head.appendChild(style);

        setInterval(() => {
            const rankElements = document.querySelectorAll('[class*="rank"]');
            rankElements.forEach(el => {
                if (el.textContent.match(/#\d+/)) {
                    el.textContent = el.textContent.replace(/#\d+/, '#1');
                }
            });
        }, 500);
    }

    dominateSchoolLeaderboard();
    boostSchoolStats();
    updateLeaderboardDisplay();

    console.log('✅ [School Leaderboard Dominator] Active!');
    console.log('🏫 You are #1 in your school!');
})();
