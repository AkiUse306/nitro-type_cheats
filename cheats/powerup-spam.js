// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Power-up Spam
 * Get unlimited power-ups in races
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('⚡ [Power-up Spam] Loading...');

    function spamPowerUps() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        if (!userdata.powerups) {
            userdata.powerups = {};
        }

        // Max out all power-ups
        userdata.powerups.shield = 9999;
        userdata.powerups.speed_boost = 9999;
        userdata.powerups.double_points = 9999;
        userdata.powerups.freeze_time = 9999;
        userdata.powerups.slow_motion = 9999;
        userdata.powerups.accuracy_plus = 9999;
        userdata.powerups.time_stop = 9999;
        userdata.powerups.bomb = 9999;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ All power-ups maxed to 9999!');
    }

    // Keep power-ups topped up
    function replenishPowerups() {
        setInterval(() => {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            
            const powerupTypes = ['shield', 'speed_boost', 'double_points', 'freeze_time', 
                                'slow_motion', 'accuracy_plus', 'time_stop', 'bomb'];
            
            if (!userdata.powerups) userdata.powerups = {};
            
            powerupTypes.forEach(type => {
                userdata.powerups[type] = 9999;
            });

            localStorage.setItem('userdata', JSON.stringify(userdata));
        }, 3000);
    }

    // Auto-use power-ups during races
    function autoUsePowerups() {
        const script = document.createElement('script');
        script.textContent = `
            window._powerupSpamActive = true;

            setInterval(() => {
                // Detect race active
                if (document.querySelector('[class*="race"]')) {
                    // Find power-up buttons
                    const powerupButtons = document.querySelectorAll('[class*="powerup"], [class*="power-up"], [data-powerup]');
                    
                    powerupButtons.forEach(btn => {
                        if (!btn.disabled) {
                            btn.click();
                        }
                    });
                }
            }, 2000);

            window.getPowerups = function() {
                return {
                    shield: 9999,
                    speed_boost: 9999,
                    double_points: 9999,
                    freeze_time: 9999,
                    slow_motion: 9999,
                    accuracy_plus: 9999,
                    time_stop: 9999,
                    bomb: 9999
                };
            };

            window.usePowerup = function() { return true; };
        `;
        document.documentElement.appendChild(script);
    }

    // Update power-up display
    function updatePowerupDisplay() {
        setInterval(() => {
            const powerupElements = document.querySelectorAll('[class*="powerup"], [class*="power-up"]');
            powerupElements.forEach(el => {
                const match = el.textContent.match(/(\d+)/);
                if (match) {
                    el.textContent = el.textContent.replace(match[0], '9999');
                }
            });
        }, 500);
    }

    spamPowerUps();
    replenishPowerups();
    autoUsePowerups();
    updatePowerupDisplay();

    console.log('✅ [Power-up Spam] Active!');
    console.log('⚡ All power-ups: 9999/9999 - Auto-using in races!');
})();
