// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats
/**
 * Nitro Type Combined Mega Cheat
 * ALL CHEATS IN ONE - Auto typer, Money, XP, Speed, Perfect typing, Premium, No Ads
 * Usage: Paste into browser console and it will run everything
 * WARNING: Using this might get your account flagged - use responsibly!
 */

(function() {
    'use strict';

    console.log('🚀 [MEGA CHEAT] Starting all cheats...');
    console.log('⚠️  WARNING: Using multiple cheats increases ban risk!');

    // ============ CONFIG ============
    const CONFIG = {
        autoTyper: { enabled: true, speed: 50 },
        moneyAdder: { enabled: true, amount: 999999999 },
        xpBooster: { enabled: true, multiplier: 10 },
        speedMultiplier: { enabled: true, multiplier: 3, wpmBoost: 200 },
        perfectTyping: { enabled: true },
        premiumUnlock: { enabled: true },
        disableAds: { enabled: true }
    };

    // ============ AUTO TYPER ============
    function initAutoTyper() {
        console.log('🎹 [Auto Typer] Initializing...');
        
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
                }, CONFIG.autoTyper.speed);
            });
        }

        async function startAutoTyping() {
            await new Promise(resolve => setTimeout(resolve, 2000));
            while (CONFIG.autoTyper.enabled && document.querySelectorAll('[class*="race"]').length > 0) {
                const wordElement = document.querySelector('[class*="word"]') || document.querySelector('[data-word]');
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
            if (url.includes('race') || url.includes('type')) {
                setTimeout(startAutoTyping, 1000);
            }
            return originalOpen.apply(this, arguments);
        };

        console.log('✅ Auto Typer loaded');
    }

    // ============ MONEY ADDER ============
    function initMoneyAdder() {
        console.log('💰 [Money Adder] Initializing...');
        
        const data = JSON.parse(localStorage.getItem('userdata') || '{}');
        if (data && data.coins !== undefined) {
            data.coins += CONFIG.moneyAdder.amount;
            localStorage.setItem('userdata', JSON.stringify(data));
            console.log(`✅ Added ${CONFIG.moneyAdder.amount.toLocaleString()} coins`);
        }
    }

    // ============ XP BOOSTER ============
    function initXPBooster() {
        console.log('⚡ [XP Booster] Initializing...');
        
        const script = document.createElement('script');
        script.textContent = `
            window._xpMultiplier = ${CONFIG.xpBooster.multiplier};
            setInterval(() => {
                const xpElements = document.querySelectorAll('[class*="xp"], [class*="experience"]');
                xpElements.forEach(el => {
                    const match = el.textContent.match(/(\\d+)\\s*(?:xp|exp)/i);
                    if (match) el.textContent = el.textContent.replace(match[1], Math.floor(match[1] * window._xpMultiplier));
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
        console.log(`✅ XP Booster loaded (${CONFIG.xpBooster.multiplier}x)`);
    }

    // ============ SPEED MULTIPLIER ============
    function initSpeedMultiplier() {
        console.log('🏎️ [Speed Multiplier] Initializing...');
        
        const script = document.createElement('script');
        script.textContent = `
            window._speedMultiplier = ${CONFIG.speedMultiplier.multiplier};
            window._wpmBoost = ${CONFIG.speedMultiplier.wpmBoost};
            setInterval(() => {
                const wpmElements = document.querySelectorAll('[class*="wpm"], [class*="speed"]');
                wpmElements.forEach(el => {
                    const match = el.textContent.match(/(\\d+)\\s*(?:wpm|speed)/i);
                    if (match && parseInt(match[1]) < 300) {
                        el.textContent = el.textContent.replace(match[1], Math.floor(match[1] * window._speedMultiplier));
                    }
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
        console.log(`✅ Speed Multiplier loaded (${CONFIG.speedMultiplier.multiplier}x)`);
    }

    // ============ PERFECT TYPING ============
    function initPerfectTyping() {
        console.log('✨ [Perfect Typing] Initializing...');
        
        const style = document.createElement('style');
        style.textContent = `
            .error, .wrong, .incorrect, .mistake,
            [class*="error"], [class*="wrong"],
            [class*="incorrect"], [class*="mistake"],
            .char.error, .word.error {
                background-color: transparent !important;
                color: #00ff00 !important;
            }
            .correct, .success { color: #00ff00 !important; }
        `;
        document.head.appendChild(style);

        const script = document.createElement('script');
        script.textContent = `
            window.validateWord = () => true;
            window.validateTyping = () => ({ correct: true, accuracy: 100 });
            setInterval(() => {
                const accuracyElements = document.querySelectorAll('[class*="accuracy"]');
                accuracyElements.forEach(el => { el.textContent = '100%'; });
            }, 100);
        `;
        document.documentElement.appendChild(script);
        console.log('✅ Perfect Typing loaded');
    }

    // ============ PREMIUM UNLOCK ============
    function initPremiumUnlock() {
        console.log('🎁 [Premium Unlock] Initializing...');
        
        const data = JSON.parse(localStorage.getItem('userdata') || '{}');
        data.premium = true;
        data.isPremium = true;
        data.premiumExpiry = Date.now() + (365 * 24 * 60 * 60 * 1000);
        data.cars = Array.from({length: 150}, (_, i) => ({ id: i, owned: true }));
        localStorage.setItem('userdata', JSON.stringify(data));

        const style = document.createElement('style');
        style.textContent = `
            .premium-lock, .paywall, .locked, [class*="premium-lock"],
            [class*="paywall"], [class*="locked"], .lock-icon { display: none !important; }
        `;
        document.head.appendChild(style);

        const script = document.createElement('script');
        script.textContent = `
            window.isPremium = true;
            window.hasUnlockedFeature = () => true;
        `;
        document.documentElement.appendChild(script);
        console.log('✅ Premium Unlock loaded');
    }

    // ============ DISABLE ADS ============
    function initDisableAds() {
        console.log('🚫 [Disable Ads] Initializing...');
        
        const originalFetch = window.fetch;
        window.fetch = async function(url) {
            if (typeof url === 'string' && (url.includes('google') || url.includes('ads'))) {
                return new Response('{}', { status: 204 });
            }
            return originalFetch.apply(this, arguments);
        };

        const style = document.createElement('style');
        style.textContent = `
            iframe[src*="google"], iframe[src*="ads"], script[src*="googlesyndication"],
            [class*="ad-container"], [class*="advertisement"], .ad, .ads {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        document.querySelectorAll('iframe[src*="google"], iframe[src*="ads"], [class*="ad"]').forEach(el => el.remove());
        console.log('✅ Ads disabled');
    }

    // ============ INITIALIZE ALL ============
    function initializeAllCheats() {
        if (CONFIG.autoTyper.enabled) initAutoTyper();
        if (CONFIG.moneyAdder.enabled) initMoneyAdder();
        if (CONFIG.xpBooster.enabled) initXPBooster();
        if (CONFIG.speedMultiplier.enabled) initSpeedMultiplier();
        if (CONFIG.perfectTyping.enabled) initPerfectTyping();
        if (CONFIG.premiumUnlock.enabled) initPremiumUnlock();
        if (CONFIG.disableAds.enabled) initDisableAds();

        console.log('');
        console.log('════════════════════════════════════');
        console.log('🚀 ALL CHEATS ACTIVATED!');
        console.log('════════════════════════════════════');
        console.log('✅ Auto Typer');
        console.log('✅ Money Adder');
        console.log('✅ XP Booster (10x)');
        console.log('✅ Speed Multiplier (3x)');
        console.log('✅ Perfect Typing');
        console.log('✅ Premium Unlock');
        console.log('✅ Ads Disabled');
        console.log('════════════════════════════════════');
        console.log('⚠️  DISCLAIMER: Use at your own risk!');
        console.log('════════════════════════════════════');
    }

    // Run all cheats
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAllCheats);
    } else {
        initializeAllCheats();
    }
})();
