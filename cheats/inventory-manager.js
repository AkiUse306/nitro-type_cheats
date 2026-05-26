// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Inventory Manager
 * Manage, duplicate, and unlock inventory items
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        duplicateAllCars: true,
        duplicatePowerups: 999,
        unlockAllItems: true,
        debug: true
    };

    console.log('📦 [Inventory Manager] Loading...');

    // Get user inventory
    function getInventory() {
        try {
            return JSON.parse(localStorage.getItem('userdata') || '{}');
        } catch (e) {
            console.error('Failed to read inventory:', e);
            return {};
        }
    }

    // Save inventory
    function saveInventory(data) {
        try {
            localStorage.setItem('userdata', JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Failed to save inventory:', e);
            return false;
        }
    }

    // Duplicate all cars
    function duplicateAllCars() {
        const inventory = getInventory();
        
        if (!inventory.cars) {
            inventory.cars = [];
        }

        // Create array of all possible cars (0-150)
        const allCars = Array.from({length: 150}, (_, i) => ({
            id: i,
            name: `Car ${i}`,
            owned: true,
            unlocked: true,
            level: 10
        }));

        inventory.cars = allCars;
        
        if (saveInventory(inventory)) {
            console.log(`✅ Duplicated all ${allCars.length} cars`);
            return true;
        }
        return false;
    }

    // Max out powerups
    function maxPowerups() {
        const inventory = getInventory();
        
        if (!inventory.powerups) {
            inventory.powerups = {};
        }

        const powerupTypes = [
            'shield', 'speed_boost', 'double_points', 'freeze_time',
            'slow_motion', 'accuracy_plus', 'time_stop', 'bomb'
        ];

        powerupTypes.forEach(type => {
            inventory.powerups[type] = CONFIG.duplicatePowerups;
        });

        if (saveInventory(inventory)) {
            console.log(`✅ Set all powerups to ${CONFIG.duplicatePowerups}`);
            return true;
        }
        return false;
    }

    // Unlock all cosmetics
    function unlockAllCosmetics() {
        const inventory = getInventory();
        
        // Unlock themes
        if (!inventory.themes) {
            inventory.themes = [];
        }
        inventory.themes = Array.from({length: 50}, (_, i) => ({
            id: i,
            name: `Theme ${i}`,
            unlocked: true,
            owned: true
        }));

        // Unlock decals/skins
        if (!inventory.decals) {
            inventory.decals = [];
        }
        inventory.decals = Array.from({length: 100}, (_, i) => ({
            id: i,
            name: `Decal ${i}`,
            unlocked: true,
            owned: true
        }));

        // Unlock achievements/badges
        if (!inventory.badges) {
            inventory.badges = [];
        }
        inventory.badges = Array.from({length: 100}, (_, i) => ({
            id: i,
            name: `Badge ${i}`,
            unlocked: true,
            earned: true
        }));

        if (saveInventory(inventory)) {
            console.log('✅ Unlocked all cosmetics (themes, decals, badges)');
            return true;
        }
        return false;
    }

    // Get inventory stats
    function getInventoryStats() {
        const inventory = getInventory();
        
        const stats = {
            totalCoins: inventory.coins || 0,
            totalCars: (inventory.cars || []).length,
            totalThemes: (inventory.themes || []).length,
            totalDecals: (inventory.decals || []).length,
            totalBadges: (inventory.badges || []).length,
            powerups: inventory.powerups || {}
        };

        console.log('📊 Current Inventory Stats:');
        console.log(`  💰 Coins: ${stats.totalCoins.toLocaleString()}`);
        console.log(`  🚗 Cars: ${stats.totalCars}`);
        console.log(`  🎨 Themes: ${stats.totalThemes}`);
        console.log(`  ✨ Decals: ${stats.totalDecals}`);
        console.log(`  🏅 Badges: ${stats.totalBadges}`);
        console.log(`  ⚡ Powerups:`, stats.powerups);

        return stats;
    }

    // Export inventory as JSON
    function exportInventory() {
        const inventory = getInventory();
        const json = JSON.stringify(inventory, null, 2);
        console.log('📤 Inventory Export (JSON):');
        console.log(json);
        return json;
    }

    // Import inventory from JSON
    function importInventory(jsonData) {
        try {
            const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
            if (saveInventory(data)) {
                console.log('✅ Inventory imported successfully');
                return true;
            }
        } catch (e) {
            console.error('Failed to import inventory:', e);
        }
        return false;
    }

    // Create inventory backup
    function backupInventory() {
        const inventory = getInventory();
        const backup = {
            timestamp: new Date().toISOString(),
            data: inventory
        };
        
        console.log('💾 Backup created:');
        console.log(JSON.stringify(backup, null, 2));
        
        // Also save to localStorage as backup
        localStorage.setItem('inventory_backup_' + Date.now(), JSON.stringify(backup));
        console.log('✅ Backup saved to localStorage');
        
        return backup;
    }

    // Restore from backup
    function restoreBackup(backupKey) {
        try {
            const backup = JSON.parse(localStorage.getItem(backupKey));
            if (backup && backup.data) {
                if (saveInventory(backup.data)) {
                    console.log(`✅ Restored backup from ${backup.timestamp}`);
                    return true;
                }
            }
        } catch (e) {
            console.error('Failed to restore backup:', e);
        }
        return false;
    }

    // List all backups
    function listBackups() {
        console.log('💾 Available Backups:');
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('inventory_backup_')) {
                const backup = JSON.parse(localStorage.getItem(key));
                console.log(`  - ${backup.timestamp} (Key: ${key})`);
            }
        }
    }

    // Main manager interface
    window.InventoryManager = {
        duplicateAllCars,
        maxPowerups,
        unlockAllCosmetics,
        getStats: getInventoryStats,
        export: exportInventory,
        import: importInventory,
        backup: backupInventory,
        restore: restoreBackup,
        listBackups,
        
        // Run all cheats
        runAll: function() {
            console.log('🚀 Running all inventory cheats...');
            duplicateAllCars();
            maxPowerups();
            unlockAllCosmetics();
            setTimeout(() => {
                getInventoryStats();
                console.log('✅ All inventory cheats applied!');
                console.log('💡 Refresh page to see changes');
            }, 500);
        }
    };

    console.log('✅ [Inventory Manager] Loaded!');
    console.log('📖 Usage:');
    console.log('  - InventoryManager.duplicateAllCars()');
    console.log('  - InventoryManager.maxPowerups()');
    console.log('  - InventoryManager.unlockAllCosmetics()');
    console.log('  - InventoryManager.getStats()');
    console.log('  - InventoryManager.runAll()');
    console.log('  - InventoryManager.backup()');
    console.log('  - InventoryManager.export()');
})();
