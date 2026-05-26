// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Premium Unlock
 * Unlocks all premium cars, themes, and features
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        unlockAllCars: true,
        unlockAllThemes: true,
        unlockAllPowerups: true,
        debug: true
    };

    console.log('🎁 [Premium Unlock] Loading...');

    // Unlock items in localStorage
    function unlockItemsLocalStorage() {
        try {
            const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');
            
            // Unlock premium status
            userdata.premium = true;
            userdata.isPremium = true;
            userdata.premiumExpiry = Date.now() + (365 * 24 * 60 * 60 * 1000); // 1 year

            // Unlock all cars
            if (!userdata.cars) userdata.cars = [];
            userdata.cars = Array.from({length: 150}, (_, i) => ({
                id: i,
                name: `Car ${i}`,
                owned: true,
                unlocked: true,
                premium: true
            }));

            // Unlock all themes
            if (!userdata.themes) userdata.themes = [];
            userdata.themes = Array.from({length: 50}, (_, i) => ({
                id: i,
                name: `Theme ${i}`,
                owned: true,
                unlocked: true
            }));

            // Unlock all power-ups
            if (!userdata.powerups) userdata.powerups = [];
            userdata.powerups = [
                { id: 1, name: 'Shield', count: 999, unlocked: true },
                { id: 2, name: 'Speed Boost', count: 999, unlocked: true },
                { id: 3, name: 'Double Points', count: 999, unlocked: true },
                { id: 4, name: 'Freeze Time', count: 999, unlocked: true },
                { id: 5, name: 'Slow Motion', count: 999, unlocked: true },
                { id: 6, name: 'Accuracy Plus', count: 999, unlocked: true }
            ];

            // Unlock all badges
            if (!userdata.badges) userdata.badges = [];
            userdata.badges = Array.from({length: 100}, (_, i) => ({
                id: i,
                name: `Badge ${i}`,
                unlocked: true,
                earned: true
            }));

            // Set premium features
            userdata.unlockedFeatures = {
                customizeProfile: true,
                customBackground: true,
                premiumCars: true,
                premiumThemes: true,
                noAds: true,
                extraPowerups: true,
                battlePass: true,
                seasonalContent: true
            };

            localStorage.setItem('userdata', JSON.stringify(userdata));
            console.log('✅ LocalStorage items unlocked');
            return true;
        } catch (e) {
            console.warn('❌ LocalStorage unlock failed:', e);
            return false;
        }
    }

    // Unlock items in IndexedDB
    function unlockItemsIndexedDB() {
        return new Promise((resolve) => {
            try {
                const request = indexedDB.open('ntrdb');
                request.onsuccess = (event) => {
                    const db = event.target.result;
                    const transaction = db.transaction(['users', 'items', 'inventory'], 'readwrite');
                    
                    // Unlock user premium
                    const userStore = transaction.objectStore('users');
                    const userGetRequest = userStore.getAll();
                    userGetRequest.onsuccess = () => {
                        if (userGetRequest.result.length > 0) {
                            const user = userGetRequest.result[0];
                            user.premium = true;
                            user.isPremium = true;
                            userStore.put(user);
                        }
                    };

                    // Unlock items
                    const itemStore = transaction.objectStore('items');
                    const allItemsRequest = itemStore.getAll();
                    allItemsRequest.onsuccess = () => {
                        allItemsRequest.result.forEach(item => {
                            item.unlocked = true;
                            item.owned = true;
                            itemStore.put(item);
                        });
                    };

                    console.log('✅ IndexedDB items unlocked');
                    resolve(true);
                };
            } catch (e) {
                console.warn('❌ IndexedDB unlock failed:', e);
                resolve(false);
            }
        });
    }

    // Inject premium status into page
    function injectPremiumStatus() {
        const script = document.createElement('script');
        script.textContent = `
            window.isPremium = true;
            window.hasUnlockedFeature = function() { return true; };
            window.isFeatureUnlocked = function() { return true; };
            window.checkPremium = function() { return true; };
            window.getUserPremiumStatus = function() { return { premium: true, active: true }; };
        `;
        document.documentElement.appendChild(script);
    }

    // Remove premium paywalls from UI
    function removePaywalls() {
        const style = document.createElement('style');
        style.textContent = `
            /* Hide premium lock indicators */
            .premium-lock, .paywall, .locked,
            [class*="premium-lock"], [class*="paywall"],
            [class*="locked"], .lock-icon {
                display: none !important;
            }

            /* Show premium content */
            .premium-content, .premium-item,
            [class*="premium-content"], [class*="premium-item"],
            .locked-content, .restricted {
                opacity: 1 !important;
                pointer-events: auto !important;
                cursor: pointer !important;
            }

            /* Remove blur from premium items */
            .blur, .blurred, [class*="blur"] {
                filter: none !important;
                opacity: 1 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Intercept API calls for premium checks
    function interceptPremiumChecks() {
        const originalFetch = window.fetch;
        window.fetch = async function(...args) {
            const response = await originalFetch.apply(this, arguments);
            
            try {
                const clone = response.clone();
                const contentType = response.headers.get('content-type');
                
                if (contentType && contentType.includes('application/json')) {
                    const data = await clone.json();
                    
                    // Modify premium-related responses
                    if (data.isPremium !== undefined) {
                        data.isPremium = true;
                    }
                    if (data.premium !== undefined) {
                        data.premium = true;
                    }
                    if (data.locked !== undefined) {
                        data.locked = false;
                    }
                    if (data.unlocked !== undefined) {
                        data.unlocked = true;
                    }
                }
            } catch (e) {}
            
            return response;
        };
    }

    // Main execution
    async function unlockPremium() {
        console.log('🎁 Unlocking premium features...');
        
        const storage = unlockItemsLocalStorage();
        const indexdb = await unlockItemsIndexedDB();
        
        injectPremiumStatus();
        removePaywalls();
        interceptPremiumChecks();

        console.log('🎉 [Premium Unlock] Complete!');
        console.log('✨ All premium features unlocked');
        console.log('💡 Refresh page to see all changes');
    }

    unlockPremium();
})();
