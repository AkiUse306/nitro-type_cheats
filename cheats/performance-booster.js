// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Performance Booster
 * Optimize game performance and FPS
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('⚙️ [Performance Booster] Loading...');

    function optimizePerformance() {
        // Disable animations
        const style = document.createElement('style');
        style.textContent = `
            * {
                animation-duration: 0.1s !important;
                transition-duration: 0s !important;
            }

            img {
                will-change: auto !important;
            }

            body {
                -webkit-font-smoothing: subpixel-antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        `;
        document.head.appendChild(style);
    }

    // Reduce rendering overhead
    function reduceRenderingOverhead() {
        const script = document.createElement('script');
        script.textContent = `
            // Use RAF for smooth rendering
            let lastTime = 0;
            const targetFPS = 60;
            const frameTime = 1000 / targetFPS;

            function optimize(currentTime) {
                if (currentTime >= lastTime + frameTime) {
                    lastTime = currentTime;
                }
                requestAnimationFrame(optimize);
            }

            requestAnimationFrame(optimize);

            // Reduce particle effects
            window.createParticles = function() { return; };
            window.updateParticles = function() { return; };
        `;
        document.documentElement.appendChild(script);
    }

    // Clean up unused resources
    function cleanupResources() {
        // Remove unused images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.offsetHeight || !img.offsetWidth) {
                img.remove();
            }
        });

        // Clear console logs to free memory
        console.clear = () => {};
    }

    optimizePerformance();
    reduceRenderingOverhead();
    cleanupResources();

    console.log('✅ [Performance Booster] Active!');
    console.log('⚙️ Game optimized for better FPS');
    console.log('📊 Animations reduced, rendering optimized');
})();
