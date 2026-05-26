// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type All-in-One Ultimate Cheat
 * The absolute best super mega cheat with EVERYTHING
 * Usage: Paste into browser console for maximum power
 * ⚠️ WARNING: EXTREME BAN RISK - Use at your own risk!
 */

(function() {
    'use strict';

    console.log('%c🚀 ULTIMATE ALL-IN-ONE CHEAT ACTIVATED 🚀', 'color: #ff0000; font-size: 18px; font-weight: bold;');
    console.log('%c⚠️  WARNING: EXTREME BAN RISK - USE AT OWN RISK! ⚠️', 'color: #ff0000; font-size: 14px; font-weight: bold;');

    const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

    // MAX EVERYTHING
    userdata.level = 9999;
    userdata.xp = 999999999;
    userdata.coins = 999999999;
    userdata.energy = 9999;
    userdata.maxEnergy = 9999;
    userdata.streak = 9999;
    userdata.prestige = 9999;
    userdata.premium = true;
    userdata.isPremium = true;

    // Leaderboards
    userdata.rank = 1;
    userdata.schoolRank = 1;
    userdata.competitionRank = 1;
    userdata.duoRank = 1;

    // Stats
    userdata.wins = 99999;
    userdata.losses = 0;
    userdata.winRate = 100;
    userdata.totalRacesWon = 99999;

    // Cars & cosmetics
    userdata.cars = Array.from({length: 200}, (_, i) => ({ id: i, owned: true }));
    userdata.themes = Array.from({length: 100}, (_, i) => ({ id: i, owned: true }));
    userdata.decals = Array.from({length: 150}, (_, i) => ({ id: i, owned: true }));

    // Power-ups (MAXED)
    userdata.powerups = {
        shield: 9999,
        speed_boost: 9999,
        double_points: 9999,
        freeze_time: 9999,
        slow_motion: 9999,
        accuracy_plus: 9999,
        time_stop: 9999,
        bomb: 9999
    };

    // Achievements
    userdata.achievements = Array.from({length: 100}, (_, i) => ({
        id: i,
        completed: true,
        earned: true
    }));

    // Season pass
    userdata.seasonPass = {
        tier: 100,
        maxTier: 100,
        completed: true,
        rewards: Array.from({length: 100}, (_, i) => ({ id: i, claimed: true }))
    };

    // Challenges
    userdata.classChallenges = Array.from({length: 50}, (_, i) => ({
        id: i,
        completed: true,
        score: 100
    }));

    // Cups
    userdata.cups = Array.from({length: 6}, (_, i) => ({
        id: i,
        completed: true,
        won: true,
        position: 1
    }));

    // Login streak
    userdata.loginStreak = 365;
    userdata.consecutiveLogins = 365;
    userdata.dailyBonuses = Array.from({length: 365}, (_, i) => ({ day: i + 1, claimed: true }));

    // Rivals
    userdata.rivals = Array.from({length: 50}, (_, i) => ({
        id: i,
        wins: 9999,
        losses: 0,
        winRate: 100
    }));

    // Save everything
    localStorage.setItem('userdata', JSON.stringify(userdata));

    // Inject ultimate cheats
    const script = document.createElement('script');
    script.textContent = `
        window._ultimateCheatsActive = true;
        window._autoTyperActive = true;
        window._moneyAdderActive = true;
        window._perfectTypingActive = true;

        // Override EVERYTHING
        window.isPremium = () => true;
        window.hasFeature = () => true;
        window.canUpgrade = () => true;
        window.validateWord = () => true;
        window.isFeatureUnlocked = () => true;
        window.canPurchase = () => true;
        window.hasEnoughCoins = () => true;

        // Auto-type
        async function autoTypeAll() {
            const inputs = document.querySelectorAll('input[type="text"]');
            for (let input of inputs) {
                input.value = 'The quick brown fox jumps over the lazy dog';
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }

        setInterval(() => {
            // Auto-submit all forms
            document.querySelectorAll('form').forEach(f => f.submit());
            
            // Click all claim buttons
            document.querySelectorAll('[class*="claim"]').forEach(b => !b.disabled && b.click());
            
            // Max all displays
            document.querySelectorAll('[class*="level"], [class*="rank"]').forEach(e => {
                e.textContent = e.textContent.replace(/\\d+/, '9999');
            });
        }, 1000);
    `;
    document.documentElement.appendChild(script);

    // Ultimate styling
    const style = document.createElement('style');
    style.textContent = `
        * {
            --cheat-color: #00ff00 !important;
        }

        [class*="level"], [class*="rank"], [class*="tier"], [class*="prestige"] {
            color: #00ff00 !important;
            text-shadow: 0 0 20px #00ff00 !important;
            font-weight: bold !important;
        }

        button { background: linear-gradient(45deg, #00ff00, #00aa00) !important; }
        button:hover { background: linear-gradient(45deg, #00ff00, #00ff00) !important; }

        .locked, [class*="locked"] { display: none !important; }
    `;
    document.head.appendChild(style);

    console.log('%c✅ ALL CHEATS ACTIVE! ✅', 'color: #00ff00; font-size: 16px; font-weight: bold;');
    console.log('%c🔓 Everything is maxed and unlocked 🔓', 'color: #00ff00; font-size: 14px;');
    console.log('%c💰 Coins: 999,999,999', 'color: #ffff00; font-size: 12px;');
    console.log('%c⚡ Level: 9999', 'color: #ffff00; font-size: 12px;');
    console.log('%c👑 Rank: #1', 'color: #ffff00; font-size: 12px;');
    console.log('%c🚗 Cars: 200/200', 'color: #ffff00; font-size: 12px;');
    console.log('%c⚠️  DISCLAIMER: BAN RISK VERY HIGH ⚠️', 'color: #ff0000; font-size: 12px; font-weight: bold;');
})();
