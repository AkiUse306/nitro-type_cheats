// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Achievement Unlocker
 * Unlock all achievements and badges instantly
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        unlockAll: true,
        debug: true
    };

    console.log('🏅 [Achievement Unlocker] Loading...');

    function unlockAchievements() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        const achievements = {
            speed_racer: { name: 'Speed Racer', completed: true, progress: 100 },
            typing_master: { name: 'Typing Master', completed: true, progress: 100 },
            money_maker: { name: 'Money Maker', completed: true, progress: 100 },
            car_collector: { name: 'Car Collector', completed: true, progress: 100 },
            speed_demon: { name: 'Speed Demon', completed: true, progress: 100 },
            accuracy_king: { name: 'Accuracy King', completed: true, progress: 100 },
            marathon_runner: { name: 'Marathon Runner', completed: true, progress: 100 },
            racing_legend: { name: 'Racing Legend', completed: true, progress: 100 },
            power_user: { name: 'Power User', completed: true, progress: 100 },
            social_butterfly: { name: 'Social Butterfly', completed: true, progress: 100 },
            competition_champion: { name: 'Competition Champion', completed: true, progress: 100 },
            daily_diligent: { name: 'Daily Diligent', completed: true, progress: 100 }
        };

        if (!userdata.achievements) {
            userdata.achievements = {};
        }

        Object.assign(userdata.achievements, achievements);

        if (!userdata.badges) {
            userdata.badges = [];
        }

        // Create badge entries
        Object.keys(achievements).forEach((key, index) => {
            userdata.badges[index] = {
                id: index,
                name: achievements[key].name,
                achieved: true,
                unlockedAt: Date.now()
            };
        });

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log(`✅ Unlocked ${Object.keys(achievements).length} achievements!`);
        return true;
    }

    // Inject achievement display
    function injectAchievementUI() {
        const script = document.createElement('script');
        script.textContent = `
            window.getAchievements = function() {
                const data = JSON.parse(localStorage.getItem('userdata') || '{}');
                return data.achievements || {};
            };

            window.isAchievementUnlocked = function() {
                return true;
            };

            setInterval(() => {
                const achievementElements = document.querySelectorAll('[class*="achievement"], [class*="badge"]');
                achievementElements.forEach(el => {
                    el.style.opacity = '1';
                    el.style.filter = 'none';
                    el.classList.remove('locked', 'hidden');
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    unlockAchievements();
    injectAchievementUI();

    console.log('✅ [Achievement Unlocker] All achievements unlocked!');
    console.log('💡 Refresh page to see all badges');
})();
