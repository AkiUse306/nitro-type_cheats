// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Competition Mode Dominator
 * Dominate competition mode with instant wins
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🎖️ [Competition Mode Dominator] Loading...');

    function dominateCompetition() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set competition stats
        userdata.competitionRank = 1;
        userdata.competitionWins = 9999;
        userdata.competitionLosses = 0;
        userdata.competitionRating = 9999;
        userdata.competitionTitle = 'Legendary Champion';

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Competition rank set to #1');
    }

    // Auto-win competitions
    function autoWinCompetition() {
        const script = document.createElement('script');
        script.textContent = `
            window._competitionWinner = true;

            window.finishCompetition = function() {
                return {
                    position: 1,
                    wins: 1,
                    reward: 100000,
                    ratingGain: 100,
                    champion: true
                };
            };

            window.setCompetitionResult = function() {
                return { position: 1, won: true };
            };

            setInterval(() => {
                const rankElements = document.querySelectorAll('[class*="rank"]');
                rankElements.forEach(el => {
                    if (el.textContent.match(/#\\d+/)) {
                        el.textContent = el.textContent.replace(/#\\d+/, '#1');
                    }
                });

                const titleElements = document.querySelectorAll('[class*="title"]');
                titleElements.forEach(el => {
                    if (el.textContent.toLowerCase().includes('champion')) {
                        el.textContent = 'Legendary Champion';
                    }
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Boost competition rating
    function boostRating() {
        setInterval(() => {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            if (!userdata.competitionRating || userdata.competitionRating < 9999) {
                userdata.competitionRating = 9999;
                localStorage.setItem('userdata', JSON.stringify(userdata));
            }
        }, 3000);
    }

    dominateCompetition();
    autoWinCompetition();
    boostRating();

    console.log('✅ [Competition Mode Dominator] Active!');
    console.log('🎖️ Rank: #1 - Title: Legendary Champion');
})();
