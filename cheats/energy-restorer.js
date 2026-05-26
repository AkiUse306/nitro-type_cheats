// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Energy Restorer
 * Restore unlimited energy/stamina
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('⚡ [Energy Restorer] Loading...');

    function restoreEnergy() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set unlimited energy
        userdata.energy = 9999;
        userdata.maxEnergy = 9999;
        userdata.lastEnergyRestore = Date.now();

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Energy set to 9999/9999');
    }

    // Keep energy topped off
    function keepEnergyFull() {
        setInterval(() => {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            if (userdata.energy !== 9999) {
                userdata.energy = 9999;
                userdata.maxEnergy = 9999;
                localStorage.setItem('userdata', JSON.stringify(userdata));
            }
        }, 2000);
    }

    // Update UI
    function updateEnergyDisplay() {
        setInterval(() => {
            const energyElements = document.querySelectorAll('[class*="energy"], [data-energy]');
            energyElements.forEach(el => {
                const match = el.textContent.match(/(\d+)\s*\/\s*(\d+)/);
                if (match) {
                    el.textContent = el.textContent.replace(/\d+\s*\/\s*\d+/, '9999/9999');
                }
            });

            // Enable disabled race buttons
            const buttons = document.querySelectorAll('button[disabled]');
            buttons.forEach(btn => {
                if (btn.textContent.toLowerCase().includes('race')) {
                    btn.disabled = false;
                }
            });
        }, 500);
    }

    // Intercept energy consumption
    function preventEnergyDepletion() {
        const script = document.createElement('script');
        script.textContent = `
            window.useEnergy = function() { return true; };
            window.consumeEnergy = function() { return true; };
            window.decreaseEnergy = function() { return true; };
        `;
        document.documentElement.appendChild(script);
    }

    restoreEnergy();
    keepEnergyFull();
    updateEnergyDisplay();
    preventEnergyDepletion();

    console.log('✅ [Energy Restorer] Active!');
    console.log('⚡ Unlimited energy enabled!');
})();
