// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Streak Extender
 * Extend and maintain typing streaks
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🔥 [Streak Extender] Loading...');

    function extendStreak() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set huge streak
        userdata.streak = 9999;
        userdata.maxStreak = 9999;
        userdata.currentStreak = 9999;
        userdata.streakActive = true;
        userdata.lastRaceTime = Date.now();

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Streak set to 9999!');
    }

    // Maintain streak
    function maintainStreak() {
        setInterval(() => {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            
            if (userdata.streak < 9999) {
                userdata.streak = 9999;
                userdata.currentStreak = 9999;
                userdata.lastRaceTime = Date.now();
                localStorage.setItem('userdata', JSON.stringify(userdata));
            }
        }, 3000);
    }

    // Prevent streak loss
    function preventStreakLoss() {
        const script = document.createElement('script');
        script.textContent = `
            window.breakStreak = function() { return false; };
            window.loseStreak = function() { return true; };
            window.resetStreak = function() { return true; };

            setInterval(() => {
                const streakElements = document.querySelectorAll('[class*="streak"]');
                streakElements.forEach(el => {
                    if (el.textContent.match(/\\d+/)) {
                        el.textContent = el.textContent.replace(/\\d+/, '9999');
                    }
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Add visual indicator
    function addStreakIndicator() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="streak"] {
                color: #ff6b00 !important;
                font-weight: bold !important;
                font-size: 1.2em !important;
                text-shadow: 0 0 10px #ff6b00 !important;
            }
        `;
        document.head.appendChild(style);
    }

    extendStreak();
    maintainStreak();
    preventStreakLoss();
    addStreakIndicator();

    console.log('✅ [Streak Extender] Active!');
    console.log('🔥 Your 9999-race streak is maintained!');
})();
