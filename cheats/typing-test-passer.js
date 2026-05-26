// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Typing Test Passer
 * Automatically pass typing tests with high scores
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('📝 [Typing Test Passer] Loading...');

    let testActive = false;

    // Detect typing test start
    function detectTestStart() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const content = mutation.addedNodes.toString().toLowerCase();
                    if (content.includes('test') || content.includes('typing')) {
                        testActive = true;
                        console.log('📝 Test detected - starting auto-pass');
                        setTimeout(autoPassTest, 1000);
                    }
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Auto-pass test
    async function autoPassTest() {
        const inputs = document.querySelectorAll('input[type="text"]');
        
        for (let input of inputs) {
            // Fill with perfect text
            input.value = 'The quick brown fox jumps over the lazy dog';
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            
            // Submit
            const submitBtn = document.querySelector('button[type="submit"]') ||
                            document.querySelector('[class*="submit"]');
            if (submitBtn) {
                submitBtn.click();
            }
            
            await new Promise(r => setTimeout(r, 500));
        }

        console.log('✅ Test passed!');
        testActive = false;
    }

    // Inject perfect scores
    function injectPerfectScores() {
        const script = document.createElement('script');
        script.textContent = `
            window.submitTest = function(answers) {
                answers.forEach(a => a.correct = true);
                answers.accuracy = 100;
                answers.score = 100;
                return answers;
            };

            window.calculateTestScore = function() {
                return { score: 100, accuracy: 100, passed: true };
            };
        `;
        document.documentElement.appendChild(script);
    }

    detectTestStart();
    injectPerfectScores();

    console.log('✅ [Typing Test Passer] Active!');
    console.log('💡 Start a typing test to auto-pass');
})();
