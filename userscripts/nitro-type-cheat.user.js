// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

// ==============================================================================
// Nitro Type Cheats - Tampermonkey Userscript
// ==============================================================================
// @name         Nitro Type Mega Cheat Suite
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Complete cheats for Nitro Type - Auto typer, Money, XP, Speed
// @author       Akinchit Sahoo
// @match        https://www.nitrotype.com/*
// @icon         https://www.nitrotype.com/favicon.ico
// @grant        none
// @run-at       document-start
// ==============================================================================

(function() {
    'use strict';

    // Configuration
    const CHEATS_CONFIG = {
        autoTyper: true,
        moneyAdder: true,
        xpBooster: true,
        speedMultiplier: true,
        perfectTyping: true,
        premiumUnlock: true,
        disableAds: true
    };

    console.log('%c🚀 Nitro Type Mega Cheat Suite Loaded', 'color: #ff6b6b; font-size: 16px; font-weight: bold;');

    // ============ AUTO TYPER ============
    if (CHEATS_CONFIG.autoTyper) {
        (function() {
            console.log('[Auto Typer] Initializing...');
            
            async function typeWord(word) {
                return new Promise(resolve => {
                    let index = 0;
                    const input = document.querySelector('input[type="text"]') || document.activeElement;
                    if (!input) { resolve(); return; }

                    const typeInterval = setInterval(() => {
                        if (index >= word.length) {
                            clearInterval(typeInterval);
                            setTimeout(() => {
                                input.value = '';
                                const spaceEvent = new KeyboardEvent('keydown', {
                                    key: ' ', code: 'Space', keyCode: 32, bubbles: true
                                });
                                input.dispatchEvent(spaceEvent);
                                input.dispatchEvent(new Event('input', { bubbles: true }));
                                resolve();
                            }, 100);
                            return;
                        }
                        input.value += word[index];
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        index++;
                    }, 50);
                });
            }

            async function startAutoTyping() {
                await new Promise(resolve => setTimeout(resolve, 2000));
                while (document.querySelectorAll('[class*="race"]').length > 0) {
                    const wordElement = document.querySelector('[class*="word"]');
                    if (wordElement) {
                        const word = wordElement.textContent || wordElement.innerText;
                        if (word && word.trim()) {
                            await typeWord(word.trim());
                            await new Promise(resolve => setTimeout(resolve, 100));
                        }
                    }
                }
            }

            const originalOpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url) {
                if (url.includes('race')) setTimeout(startAutoTyping, 1000);
                return originalOpen.apply(this, arguments);
            };
        })();
    }

    // ============ MONEY ADDER ============
    if (CHEATS_CONFIG.moneyAdder) {
        (function() {
            console.log('[Money Adder] Initializing...');
            
            setTimeout(() => {
                const data = JSON.parse(localStorage.getItem('userdata') || '{}');
                if (data && data.coins !== undefined) {
                    data.coins += 999999999;
                    localStorage.setItem('userdata', JSON.stringify(data));
                    console.log('✅ Added 999,999,999 coins');
                }
            }, 1000);
        })();
    }

    // ============ XP BOOSTER ============
    if (CHEATS_CONFIG.xpBooster) {
        (function() {
            console.log('[XP Booster] Initializing...');
            
            window._xpMultiplier = 10;
            setInterval(() => {
                const xpElements = document.querySelectorAll('[class*="xp"], [class*="experience"]');
                xpElements.forEach(el => {
                    const match = el.textContent.match(/(\d+)\s*(?:xp|exp)/i);
                    if (match) {
                        el.textContent = el.textContent.replace(match[1], Math.floor(match[1] * 10));
                    }
                });
            }, 500);
        })();
    }

    // ============ SPEED MULTIPLIER ============
    if (CHEATS_CONFIG.speedMultiplier) {
        (function() {
            console.log('[Speed Multiplier] Initializing...');
            
            setInterval(() => {
                const wpmElements = document.querySelectorAll('[class*="wpm"], [class*="speed"]');
                wpmElements.forEach(el => {
                    const match = el.textContent.match(/(\d+)\s*(?:wpm|speed)/i);
                    if (match && parseInt(match[1]) < 300) {
                        el.textContent = el.textContent.replace(match[1], Math.floor(match[1] * 3));
                    }
                });
            }, 500);
        })();
    }

    // ============ PERFECT TYPING ============
    if (CHEATS_CONFIG.perfectTyping) {
        (function() {
            console.log('[Perfect Typing] Initializing...');
            
            const style = document.createElement('style');
            style.textContent = `
                .error, .wrong, .incorrect { color: #00ff00 !important; }
                .correct, .success { color: #00ff00 !important; }
            `;
            document.head.appendChild(style);

            window.validateWord = () => true;
            setInterval(() => {
                const accuracyElements = document.querySelectorAll('[class*="accuracy"]');
                accuracyElements.forEach(el => { el.textContent = '100%'; });
            }, 100);
        })();
    }

    // ============ PREMIUM UNLOCK ============
    if (CHEATS_CONFIG.premiumUnlock) {
        (function() {
            console.log('[Premium Unlock] Initializing...');
            
            const data = JSON.parse(localStorage.getItem('userdata') || '{}');
            data.premium = true;
            data.isPremium = true;
            data.cars = Array.from({length: 150}, (_, i) => ({ id: i, owned: true }));
            localStorage.setItem('userdata', JSON.stringify(data));

            const style = document.createElement('style');
            style.textContent = '.premium-lock, .paywall, .locked { display: none !important; }';
            document.head.appendChild(style);

            window.isPremium = true;
        })();
    }

    // ============ DISABLE ADS ============
    if (CHEATS_CONFIG.disableAds) {
        (function() {
            console.log('[Disable Ads] Initializing...');
            
            const originalFetch = window.fetch;
            window.fetch = async function(url) {
                if (typeof url === 'string' && (url.includes('google') || url.includes('ads'))) {
                    return new Response('{}', { status: 204 });
                }
                return originalFetch.apply(this, arguments);
            };

            const style = document.createElement('style');
            style.textContent = `
                iframe[src*="google"], iframe[src*="ads"], 
                [class*="ad-container"], [class*="advertisement"], 
                .ad, .ads { display: none !important; }
            `;
            document.head.appendChild(style);
        })();
    }

    console.log('%c✅ All Cheats Initialized', 'color: #51cf66; font-size: 14px; font-weight: bold;');
})();
