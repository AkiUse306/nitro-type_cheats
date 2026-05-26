// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Car Parts Generator
 * Generate unlimited car parts for upgrades
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🔧 [Car Parts Generator] Loading...');

    function generateCarParts() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        if (!userdata.carParts) {
            userdata.carParts = {};
        }

        // Generate unlimited parts
        const partTypes = ['engine', 'wheels', 'bumper', 'spoiler', 'paint', 'interior', 'suspension', 'exhaust'];
        partTypes.forEach(part => {
            userdata.carParts[part] = 9999;
        });

        // Set upgrade materials
        if (!userdata.materials) {
            userdata.materials = {};
        }
        userdata.materials.gold = 999999;
        userdata.materials.silver = 999999;
        userdata.materials.bronze = 999999;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Generated unlimited car parts!');
    }

    // Keep parts topped up
    function replenishParts() {
        setInterval(() => {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            
            const partTypes = ['engine', 'wheels', 'bumper', 'spoiler', 'paint', 'interior', 'suspension', 'exhaust'];
            partTypes.forEach(part => {
                if (!userdata.carParts) userdata.carParts = {};
                userdata.carParts[part] = 9999;
            });

            localStorage.setItem('userdata', JSON.stringify(userdata));
        }, 5000);
    }

    // Update parts display
    function updatePartsDisplay() {
        setInterval(() => {
            const partElements = document.querySelectorAll('[class*="part"], [class*="material"], [data-part]');
            partElements.forEach(el => {
                const match = el.textContent.match(/(\d+)/);
                if (match) {
                    el.textContent = el.textContent.replace(match[0], '9999');
                }
            });
        }, 500);
    }

    // Enable all upgrades
    function enableAllUpgrades() {
        const script = document.createElement('script');
        script.textContent = `
            window.canUpgrade = function() { return true; };
            window.hasEnoughParts = function() { return true; };
            window.getParts = function() { 
                return { engine: 9999, wheels: 9999, bumper: 9999, spoiler: 9999 };
            };
        `;
        document.documentElement.appendChild(script);
    }

    generateCarParts();
    replenishParts();
    updatePartsDisplay();
    enableAllUpgrades();

    console.log('✅ [Car Parts Generator] Active!');
    console.log('🔧 All car parts: 9999/9999');
})();
