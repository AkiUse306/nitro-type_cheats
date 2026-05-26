// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Night Mode Injector
 * Enable night/dark mode everywhere
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🌙 [Night Mode Injector] Loading...');

    function injectNightMode() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                background-color: #1a1a1a !important;
                color: #e0e0e0 !important;
            }

            body {
                background-color: #0d0d0d !important;
                color: #ffffff !important;
            }

            a {
                color: #66b3ff !important;
            }

            button, input, textarea, select {
                background-color: #2a2a2a !important;
                color: #e0e0e0 !important;
                border-color: #444444 !important;
            }

            button:hover, input:hover {
                background-color: #3a3a3a !important;
            }

            img {
                opacity: 0.9 !important;
                filter: brightness(0.8) !important;
            }

            .modal, .dialog, [class*="popup"] {
                background-color: #1a1a1a !important;
                color: #e0e0e0 !important;
            }

            [class*="card"], [class*="panel"] {
                background-color: #222222 !important;
                border-color: #444444 !important;
            }

            input::placeholder {
                color: #888888 !important;
            }

            ::-webkit-scrollbar {
                background-color: #1a1a1a !important;
            }

            ::-webkit-scrollbar-track {
                background-color: #0d0d0d !important;
            }

            ::-webkit-scrollbar-thumb {
                background-color: #444444 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Store preference
    function saveNightModePreference() {
        localStorage.setItem('nightModeEnabled', 'true');
        console.log('✅ Night mode preference saved');
    }

    // Re-apply on page changes
    function monitorPageChanges() {
        const observer = new MutationObserver(() => {
            injectNightMode();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    injectNightMode();
    saveNightModePreference();
    monitorPageChanges();

    console.log('✅ [Night Mode Injector] Active!');
    console.log('🌙 Dark mode enabled globally');
})();
