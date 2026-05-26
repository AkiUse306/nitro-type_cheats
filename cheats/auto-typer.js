// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Auto Typer
 * Automatically types all words during races
 * Usage: Paste into browser console while in a race
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        speed: 50, // Milliseconds between keystrokes (lower = faster)
        enabled: true,
        debug: true
    };

    // Get the input field
    function getInputField() {
        return document.querySelector('input[type="text"]') || 
               document.querySelector('.typing-input') ||
               document.activeElement;
    }

    // Simulate typing
    function typeWord(word) {
        return new Promise(resolve => {
            let index = 0;
            const input = getInputField();
            
            if (!input) {
                console.error('[Auto Typer] Input field not found');
                resolve();
                return;
            }

            const typeInterval = setInterval(() => {
                if (index >= word.length) {
                    clearInterval(typeInterval);
                    // Simulate space key press to submit word
                    setTimeout(() => {
                        input.value = '';
                        const spaceEvent = new KeyboardEvent('keydown', {
                            key: ' ',
                            code: 'Space',
                            keyCode: 32,
                            bubbles: true
                        });
                        input.dispatchEvent(spaceEvent);
                        input.dispatchEvent(new Event('input', { bubbles: true }));
                        resolve();
                    }, 100);
                    return;
                }

                const char = word[index];
                input.value += char;
                input.dispatchEvent(new Event('input', { bubbles: true }));
                index++;
            }, CONFIG.speed);
        });
    }

    // Main auto-type function
    async function startAutoTyping() {
        console.log('[Auto Typer] Starting... Get ready!');
        
        // Wait for race to start
        await new Promise(resolve => setTimeout(resolve, 2000));

        let wordIndex = 0;
        const isRacing = () => {
            const raceElements = document.querySelectorAll('[class*="race"], [class*="typing"]');
            return raceElements.length > 0;
        };

        while (CONFIG.enabled && isRacing()) {
            const input = getInputField();
            if (!input) break;

            // Look for the current word to type
            const wordElement = document.querySelector('[class*="word"]') ||
                              document.querySelector('[data-word]');
            
            if (wordElement) {
                const word = wordElement.textContent || wordElement.innerText || 'test';
                if (word && word.trim()) {
                    if (CONFIG.debug) console.log(`[Auto Typer] Typing word: ${word}`);
                    await typeWord(word.trim());
                    wordIndex++;
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            } else {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        console.log(`[Auto Typer] Race complete! Typed ${wordIndex} words.`);
    }

    // Monkey patch XMLHttpRequest to detect race start
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url.includes('race') || url.includes('type')) {
            setTimeout(startAutoTyping, 1000);
        }
        return originalOpen.apply(this, arguments);
    };

    console.log('🚗 [Auto Typer] Loaded! Starting automatic typing...');
    console.log('💡 Tip: Disable with: window.autoTyperEnabled = false');
    
    window.autoTyperEnabled = CONFIG.enabled;
    startAutoTyping();
})();
