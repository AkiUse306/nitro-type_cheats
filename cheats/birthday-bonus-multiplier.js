// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Birthday Bonus Multiplier
 * Activate birthday bonus rewards
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🎂 [Birthday Bonus Multiplier] Loading...');

    function activateBirthdayBonus() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Set birthday bonus
        userdata.birthdayActive = true;
        userdata.birthdayMultiplier = 10;
        userdata.birthdayReward = 1000000;
        userdata.birthdayXPReward = 500000;
        userdata.birthdayBonusExpiry = Date.now() + (24 * 60 * 60 * 1000);

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Birthday bonus activated (10x)!');
    }

    // Inject birthday UI
    function injectBirthdayUI() {
        const script = document.createElement('script');
        script.textContent = `
            window.isBirthdayActive = function() { return true; };
            window.getBirthdayMultiplier = function() { return 10; };
            window.claimBirthdayReward = function() {
                return { coins: 1000000, xp: 500000, claimed: true };
            };
        `;
        document.documentElement.appendChild(script);
    }

    // Show birthday banner
    function showBirthdayBanner() {
        const banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: bold;
            z-index: 9999;
            animation: rainbow 2s linear infinite;
        `;
        banner.textContent = '🎂 HAPPY BIRTHDAY! 🎉 10x BONUS ACTIVE! 🎊';
        document.body.appendChild(banner);

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff); }
                50% { background: linear-gradient(90deg, #00ffff, #ff00ff, #00ffff); }
                100% { background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff); }
            }
        `;
        document.head.appendChild(style);
    }

    activateBirthdayBonus();
    injectBirthdayUI();
    showBirthdayBanner();

    console.log('✅ [Birthday Bonus Multiplier] Active!');
    console.log('🎂 Happy Birthday! 10x multiplier activated!');
})();
