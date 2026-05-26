// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Cache Cleaner
 * Clear cache and optimize storage
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🗑️ [Cache Cleaner] Loading...');

    function cleanCache() {
        // Clear old cache data
        const keysToKeep = ['userdata', 'nightModeEnabled', 'soundEnabled'];
        
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (!keysToKeep.includes(key) && !key.startsWith('inventory_backup')) {
                localStorage.removeItem(key);
            }
        }

        // Clear session storage
        sessionStorage.clear();

        console.log('✅ Cache cleared!');
    }

    // Optimize storage
    function optimizeStorage() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Remove duplicate/old data
        delete userdata.oldStats;
        delete userdata.tempData;
        delete userdata.debugInfo;

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Storage optimized!');
    }

    // Monitor and cleanup regularly
    function regularCleanup() {
        setInterval(() => {
            const storageSize = new Blob(Object.values(localStorage)).size;
            if (storageSize > 5000000) { // 5MB
                console.log('Storage getting large, cleaning...');
                cleanCache();
            }
        }, 60000); // Every minute
    }

    cleanCache();
    optimizeStorage();
    regularCleanup();

    console.log('✅ [Cache Cleaner] Active!');
    console.log('🗑️ Cache cleaned and storage optimized');
    console.log('📊 Will monitor and auto-clean if size exceeds 5MB');
})();
