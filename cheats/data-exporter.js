// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Data Exporter
 * Export your game data as JSON for backup
 * Usage: Paste into browser console, then use DataExporter.export()
 */

(function() {
    'use strict';

    console.log('📤 [Data Exporter] Loading...');

    function exportData() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
        
        const exportObj = {
            timestamp: new Date().toISOString(),
            version: '1.0',
            data: userdata,
            dataSize: new Blob([JSON.stringify(userdata)]).size
        };

        const json = JSON.stringify(exportObj, null, 2);
        
        console.log('%c📤 DATA EXPORT', 'color: #00ff00; font-size: 14px; font-weight: bold;');
        console.log(json);

        return json;
    }

    function downloadExport() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
        
        const exportObj = {
            timestamp: new Date().toISOString(),
            version: '1.0',
            data: userdata
        };

        const dataStr = JSON.stringify(exportObj, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `nitro-type-backup-${Date.now()}.json`;
        link.click();

        console.log('✅ Data downloaded!');
    }

    function importData(jsonData) {
        try {
            const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
            const userdata = data.data || data;
            
            localStorage.setItem('userdata', JSON.stringify(userdata));
            console.log('✅ Data imported successfully!');
            return true;
        } catch (e) {
            console.error('❌ Failed to import data:', e);
            return false;
        }
    }

    // Expose functions globally
    window.DataExporter = {
        export: exportData,
        download: downloadExport,
        import: importData,
        
        // Get specific data
        getCoins: () => {
            const data = JSON.parse(localStorage.getItem('userdata') || '{}');
            return data.coins || 0;
        },
        
        getLevel: () => {
            const data = JSON.parse(localStorage.getItem('userdata') || '{}');
            return data.level || 1;
        },

        getStats: () => {
            const data = JSON.parse(localStorage.getItem('userdata') || '{}');
            return {
                coins: data.coins || 0,
                level: data.level || 1,
                xp: data.xp || 0,
                cars: (data.cars || []).length,
                friends: (data.friends || []).length,
                streak: data.streak || 0
            };
        }
    };

    console.log('✅ [Data Exporter] Loaded!');
    console.log('📖 Usage:');
    console.log('  - DataExporter.export() → Log data to console');
    console.log('  - DataExporter.download() → Download as JSON file');
    console.log('  - DataExporter.import(jsonData) → Import from JSON');
    console.log('  - DataExporter.getStats() → Get quick stats');
})();
