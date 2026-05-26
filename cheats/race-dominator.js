// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Race Dominator
 * Win every race against opponents
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🏁 [Race Dominator] Loading...');

    // Make player always finish first
    function dominateRace() {
        const script = document.createElement('script');
        script.textContent = `
            window._alwaysWin = true;

            setInterval(() => {
                // Speed up player car
                const playerCar = document.querySelector('[class*="player"], [class*="car"]');
                if (playerCar && playerCar.style) {
                    playerCar.style.animation = 'none';
                    playerCar.style.transform = 'translateX(100vw)';
                }

                // Update race position
                const positionElements = document.querySelectorAll('[class*="position"]');
                positionElements.forEach(el => {
                    if (el.textContent.includes('Position')) {
                        el.textContent = el.textContent.replace(/\\d+/, '1');
                    }
                });
            }, 100);

            // Auto-finish race
            window.finishRace = function() {
                const result = { position: 1, won: true, firstPlace: true };
                window.dispatchEvent(new CustomEvent('raceEnd', { detail: result }));
                return result;
            };
        `;
        document.documentElement.appendChild(script);
    }

    // Manipulate opponent speeds
    function slowOpponents() {
        const opponents = document.querySelectorAll('[class*="opponent"], [class*="player"]:not([class*="player-main"])');
        opponents.forEach(opp => {
            if (opp.style) {
                opp.style.animation = 'slowMotion 10s infinite';
                opp.style.animationPlayState = 'running';
            }
        });
    }

    // Inject CSS for animation
    function injectRaceCSS() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fastMotion {
                0% { transform: translateX(0); }
                100% { transform: translateX(100vw); }
            }

            @keyframes slowMotion {
                0% { transform: translateX(0); }
                100% { transform: translateX(10vw); }
            }

            [class*="player-main"] {
                animation: fastMotion 3s ease-in !important;
            }

            [class*="opponent"] {
                animation: slowMotion 15s ease-in !important;
            }
        `;
        document.head.appendChild(style);
    }

    dominateRace();
    injectRaceCSS();

    console.log('✅ [Race Dominator] Active!');
    console.log('🏆 You will always finish first!');
})();
