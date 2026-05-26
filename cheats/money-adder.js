// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Money Adder
 * Add unlimited coins instantly
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        amount: 999999999, // Amount to add
        debug: true
    };

    // Find and modify money in localStorage
    function addMoneyLocalStorage(amount) {
        try {
            const data = JSON.parse(localStorage.getItem('userdata'));
            if (data && data.coins !== undefined) {
                const oldBalance = data.coins;
                data.coins += amount;
                localStorage.setItem('userdata', JSON.stringify(data));
                console.log(`✅ Added ${amount.toLocaleString()} coins (${oldBalance.toLocaleString()} → ${data.coins.toLocaleString()})`);
                return true;
            }
        } catch (e) {
            console.warn('[Money Adder] LocalStorage method failed:', e);
        }
        return false;
    }

    // Try IndexedDB method
    function addMoneyIndexedDB(amount) {
        return new Promise((resolve) => {
            try {
                const request = indexedDB.open('ntrdb');
                request.onsuccess = (event) => {
                    const db = event.target.result;
                    const transaction = db.transaction(['users'], 'readwrite');
                    const store = transaction.objectStore('users');
                    const getRequest = store.getAll();

                    getRequest.onsuccess = () => {
                        const users = getRequest.result;
                        if (users.length > 0) {
                            const user = users[0];
                            const oldBalance = user.coins || 0;
                            user.coins = (user.coins || 0) + amount;
                            
                            const putRequest = store.put(user);
                            putRequest.onsuccess = () => {
                                console.log(`✅ IndexedDB: Added ${amount.toLocaleString()} coins (${oldBalance.toLocaleString()} → ${user.coins.toLocaleString()})`);
                                resolve(true);
                            };
                        }
                    };
                };
            } catch (e) {
                console.warn('[Money Adder] IndexedDB method failed:', e);
                resolve(false);
            }
        });
    }

    // Find money display element and update it
    function updateUIDisplay() {
        const selectors = [
            '[class*="balance"]',
            '[class*="coins"]',
            '[class*="money"]',
            '[data-coins]',
            '.coin-balance',
            '.user-coins'
        ];

        for (let selector of selectors) {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                console.log(`✅ Updated UI elements matching: ${selector}`);
                elements.forEach(el => {
                    if (el.textContent.match(/^\d+$/)) {
                        el.textContent = CONFIG.amount.toLocaleString();
                    }
                });
                return true;
            }
        }
        return false;
    }

    // Intercept API calls to add money
    function interceptAPIRequests(amount) {
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            const request = args[0];
            const options = args[1];

            if (typeof request === 'string' && (request.includes('api') || request.includes('data'))) {
                if (options && options.body) {
                    try {
                        const body = JSON.parse(options.body);
                        if (body.coins !== undefined) {
                            body.coins += amount;
                            options.body = JSON.stringify(body);
                        }
                    } catch (e) {}
                }
            }

            return originalFetch.apply(this, arguments);
        };
    }

    // Main execution
    async function addMoney() {
        console.log(`💰 [Money Adder] Adding ${CONFIG.amount.toLocaleString()} coins...`);

        let success = addMoneyLocalStorage(CONFIG.amount);
        
        if (!success) {
            success = await addMoneyIndexedDB(CONFIG.amount);
        }

        updateUIDisplay();
        interceptAPIRequests(CONFIG.amount);

        // Refresh page to see changes
        setTimeout(() => {
            console.log('🔄 Refreshing page to apply changes...');
            location.reload();
        }, 1500);
    }

    console.log('💰 [Money Adder] Loaded!');
    console.log(`📊 Will add: ${CONFIG.amount.toLocaleString()} coins`);
    
    addMoney();
})();
