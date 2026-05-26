// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Refund Generator
 * Generate unlimited refund credits
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('💰 [Refund Generator] Loading...');

    function generateRefunds() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Add refund credits
        userdata.refundCredits = 9999;
        userdata.refundsAvailable = 9999;
        userdata.refundTokens = 9999999;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Refund credits: 9999');
    }

    // Keep refunds topped up
    function replenishRefunds() {
        setInterval(() => {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            if (!userdata.refundCredits || userdata.refundCredits < 9999) {
                userdata.refundCredits = 9999;
                localStorage.setItem('userdata', JSON.stringify(userdata));
            }
        }, 3000);
    }

    // Enable unlimited refunds
    function enableUnlimitedRefunds() {
        const script = document.createElement('script');
        script.textContent = `
            window.canRefund = function() { return true; };
            window.hasRefundCredits = function() { return true; };
            window.processRefund = function() { return { success: true, credited: true }; };
        `;
        document.documentElement.appendChild(script);
    }

    generateRefunds();
    replenishRefunds();
    enableUnlimitedRefunds();

    console.log('✅ [Refund Generator] Active!');
    console.log('💰 Unlimited refund credits!');
})();
