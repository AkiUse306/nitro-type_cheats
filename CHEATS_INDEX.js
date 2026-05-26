// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * CHEAT INDEX - Complete list of all available cheats
 * 
 * Copy and paste any of these names into the browser console
 * to load the cheat directly from the repository
 */

// ============================================
// QUICK LOAD SCRIPT - Use in Console
// ============================================
// To load a cheat directly:
//   fetch('https://raw.githubusercontent.com/AkiUse306/nitro-type_cheats/main/cheats/CHEAT-NAME.js')
//     .then(r => r.text())
//     .then(code => eval(code))
// 
// Replace CHEAT-NAME with any from the list below
// ============================================

const CHEATS = {
    // CORE CHEATS
    'auto-typer': {
        name: 'Auto Typer',
        description: 'Automatically types all words during races',
        file: 'auto-typer.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    'money-adder': {
        name: 'Money Adder',
        description: 'Add unlimited coins instantly (999,999,999)',
        file: 'money-adder.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    'xp-booster': {
        name: 'XP Booster',
        description: 'Multiplies XP gained from races (10x default)',
        file: 'xp-booster.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'speed-multiplier': {
        name: 'Speed Multiplier',
        description: 'Increases typing speed multiplier (3x default)',
        file: 'speed-multiplier.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'perfect-typing': {
        name: 'Perfect Typing',
        description: 'Achieve 100% accuracy automatically',
        file: 'perfect-typing.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    'premium-unlock': {
        name: 'Premium Unlock',
        description: 'Unlock all premium cars, themes, and features',
        file: 'premium-unlock.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐'
    },

    'disable-ads': {
        name: 'Disable Ads',
        description: 'Remove all advertisements',
        file: 'disable-ads.js',
        riskLevel: 'LOW',
        effectiveness: '⭐⭐'
    },

    'inventory-manager': {
        name: 'Inventory Manager',
        description: 'Manage, duplicate, and backup inventory items',
        file: 'inventory-manager.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    // ACHIEVEMENT & LEVEL CHEATS
    'achievement-unlocker': {
        name: 'Achievement Unlocker',
        description: 'Unlock all achievements and badges instantly',
        file: 'achievement-unlocker.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'level-booster': {
        name: 'Level Booster',
        description: 'Instantly level up to maximum (999)',
        file: 'level-booster.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    // RACING CHEATS
    'race-dominator': {
        name: 'Race Dominator',
        description: 'Win every race - always finish first',
        file: 'race-dominator.js',
        riskLevel: 'VERY HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    'typing-test-passer': {
        name: 'Typing Test Passer',
        description: 'Automatically pass typing tests with 100 score',
        file: 'typing-test-passer.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    // RESOURCE CHEATS
    'energy-restorer': {
        name: 'Energy Restorer',
        description: 'Restore unlimited energy/stamina',
        file: 'energy-restorer.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'daily-bonus-multiplier': {
        name: 'Daily Bonus Multiplier',
        description: 'Multiply daily bonus rewards (10x)',
        file: 'daily-bonus-multiplier.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'streak-extender': {
        name: 'Streak Extender',
        description: 'Extend and maintain typing streaks to 9999',
        file: 'streak-extender.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'car-parts-generator': {
        name: 'Car Parts Generator',
        description: 'Generate unlimited car parts for upgrades',
        file: 'car-parts-generator.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    // PROGRESSION CHEATS
    'season-pass-completer': {
        name: 'Season Pass Completer',
        description: 'Instantly complete season pass (tier 100)',
        file: 'season-pass-completer.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐'
    },

    'cup-challenge-beater': {
        name: 'Cup Challenge Beater',
        description: 'Auto-complete all cup challenges (Bronze-Legendary)',
        file: 'cup-challenge-beater.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐'
    },

    'class-challenge-completer': {
        name: 'Class Challenge Completer',
        description: 'Complete all 50 class challenges instantly',
        file: 'class-challenge-completer.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'powerup-spam': {
        name: 'Power-up Spam',
        description: 'Get unlimited power-ups and auto-use in races',
        file: 'powerup-spam.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    // COMPETITION CHEATS
    'competition-dominator': {
        name: 'Competition Mode Dominator',
        description: 'Dominate competition mode - rank #1',
        file: 'competition-dominator.js',
        riskLevel: 'VERY HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    'friend-rival-beater': {
        name: 'Friend Rival Beater',
        description: 'Always win against friend rivals (9999 wins)',
        file: 'friend-rival-beater.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐'
    },

    'school-leaderboard-dominator': {
        name: 'School Leaderboard Dominator',
        description: 'Dominate your school leaderboard - rank #1',
        file: 'school-leaderboard-dominator.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐'
    },

    'duo-match-dominator': {
        name: 'Duo Match Dominator',
        description: 'Always win duo matches (9999 wins)',
        file: 'duo-match-dominator.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐'
    },

    // BONUS & REWARD CHEATS
    'login-bonus-claimer': {
        name: 'Login Bonus Claimer',
        description: 'Claim all login bonuses - 365-day streak',
        file: 'login-bonus-claimer.js',
        riskLevel: 'LOW',
        effectiveness: '⭐⭐⭐'
    },

    'birthday-bonus-multiplier': {
        name: 'Birthday Bonus Multiplier',
        description: 'Activate birthday bonus rewards anytime (10x)',
        file: 'birthday-bonus-multiplier.js',
        riskLevel: 'LOW',
        effectiveness: '⭐⭐⭐'
    },

    'weekend-multiplier': {
        name: 'Weekend Multiplier',
        description: 'Activate weekend multiplier anytime (5x)',
        file: 'weekend-multiplier.js',
        riskLevel: 'LOW',
        effectiveness: '⭐⭐⭐'
    },

    'prestige-multiplier': {
        name: 'Prestige Multiplier',
        description: 'Multiply prestige gains (100x)',
        file: 'prestige-multiplier.js',
        riskLevel: 'MEDIUM',
        effectiveness: '⭐⭐⭐⭐'
    },

    'refund-generator': {
        name: 'Refund Generator',
        description: 'Generate unlimited refund credits',
        file: 'refund-generator.js',
        riskLevel: 'HIGH',
        effectiveness: '⭐⭐⭐⭐'
    },

    // UTILITY CHEATS
    'night-mode-injector': {
        name: 'Night Mode Injector',
        description: 'Enable dark/night mode everywhere',
        file: 'night-mode-injector.js',
        riskLevel: 'NONE',
        effectiveness: '⭐⭐⭐'
    },

    'sound-disabler': {
        name: 'Sound Disabler',
        description: 'Mute all game sounds and notifications',
        file: 'sound-disabler.js',
        riskLevel: 'NONE',
        effectiveness: '⭐⭐'
    },

    'performance-booster': {
        name: 'Performance Booster',
        description: 'Optimize game performance and FPS',
        file: 'performance-booster.js',
        riskLevel: 'NONE',
        effectiveness: '⭐⭐⭐'
    },

    'profile-customizer': {
        name: 'Profile Customizer',
        description: 'Customize profile with premium cosmetics',
        file: 'profile-customizer.js',
        riskLevel: 'LOW',
        effectiveness: '⭐⭐⭐'
    },

    'time-freeze': {
        name: 'Time Freeze',
        description: 'Freeze time during races (press T to toggle)',
        file: 'time-freeze.js',
        riskLevel: 'VERY HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    // DATA CHEATS
    'cache-cleaner': {
        name: 'Cache Cleaner',
        description: 'Clear cache and optimize storage',
        file: 'cache-cleaner.js',
        riskLevel: 'NONE',
        effectiveness: '⭐⭐⭐'
    },

    'data-exporter': {
        name: 'Data Exporter',
        description: 'Export game data as JSON for backup',
        file: 'data-exporter.js',
        riskLevel: 'NONE',
        effectiveness: '⭐⭐⭐'
    },

    // COMBINED CHEATS
    'combined-cheat': {
        name: 'Combined Cheat',
        description: 'All major cheats in one script (⚠️ EXTREME RISK)',
        file: 'combined-cheat.js',
        riskLevel: 'VERY HIGH',
        effectiveness: '⭐⭐⭐⭐⭐'
    },

    'ultimate-cheat': {
        name: 'Ultimate Cheat',
        description: 'EVERYTHING maxed - Ultimate power mode (⚠️ MAXIMUM RISK)',
        file: 'ultimate-cheat.js',
        riskLevel: 'EXTREME',
        effectiveness: '⭐⭐⭐⭐⭐'
    }
};

// ============================================
// CHEAT STATS
// ============================================
console.log('%c📋 NITRO TYPE CHEATS - Complete Index', 'color: #00ff00; font-size: 16px; font-weight: bold;');
console.log('%cTotal Cheats Available: ' + Object.keys(CHEATS).length, 'color: #ffff00; font-size: 12px;');
console.log('%cCopyright © Akinchit Sahoo', 'color: #888888; font-size: 10px;');
console.log('%cStar the repo: https://github.com/AkiUse306/nitro-type_cheats', 'color: #888888; font-size: 10px;');

// Print all cheats
console.log('%c\n═══ ALL AVAILABLE CHEATS ═══', 'color: #00ff00; font-size: 12px; font-weight: bold;');
Object.entries(CHEATS).forEach(([key, cheat], i) => {
    console.log(`${i + 1}. ${cheat.name} (${cheat.file})`);
    console.log(`   ${cheat.description}`);
    console.log(`   Risk: ${cheat.riskLevel} | Power: ${cheat.effectiveness}\n`);
});
