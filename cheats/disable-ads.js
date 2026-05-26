// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Disable Ads
 * Removes all advertisements from Nitro Type
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🚫 [Disable Ads] Loading...');

    // Block ad networks
    const adNetworks = [
        'googlesyndication.com',
        'doubleclick.net',
        'adServer',
        'ads.google',
        'pagead',
        'pubads',
        'googleadservices',
        'adclick',
        'advert'
    ];

    // Override XMLHttpRequest for ads
    const originalXHR = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        const urlStr = url.toLowerCase();
        
        // Block ad network requests
        if (adNetworks.some(network => urlStr.includes(network))) {
            console.log(`🚫 Blocked ad request: ${url}`);
            this.addEventListener('load', function() {
                this.status = 204;
                this.responseText = '{}';
            });
        }
        
        return originalXHR.apply(this, arguments);
    };

    // Override fetch for ads
    const originalFetch = window.fetch;
    window.fetch = async function(url, options) {
        if (typeof url === 'string') {
            const urlStr = url.toLowerCase();
            if (adNetworks.some(network => urlStr.includes(network))) {
                console.log(`🚫 Blocked ad fetch: ${url}`);
                return new Response('{}', { status: 204 });
            }
        }
        return originalFetch.apply(this, arguments);
    };

    // Remove ad elements from DOM
    function removeAdElements() {
        const selectors = [
            'iframe[src*="google"]',
            'iframe[src*="ads"]',
            'iframe[src*="doubleclick"]',
            'script[src*="googlesyndication"]',
            'script[src*="adsbygoogle"]',
            '[class*="ad-container"]',
            '[class*="advertisement"]',
            '[class*="banner-ad"]',
            '[id*="ad_"]',
            '[id*="ads"]',
            '.ad, .ads, .advert',
            '[data-ad-slot]',
            '.google-auto-placed',
            'ins.adsbygoogle',
            '[aria-label*="Advertisement"]'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                console.log(`🚫 Removed ad element: ${selector}`);
                el.remove();
            });
        });
    }

    // Monitor for new ad elements
    function monitorNewAds() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            if (node.tagName === 'IFRAME' && 
                                node.src && 
                                (node.src.includes('google') || node.src.includes('ads'))) {
                                node.remove();
                                console.log('🚫 Removed iframe ad');
                            }
                            
                            if (node.tagName === 'SCRIPT' && 
                                node.src && 
                                node.src.includes('googlesyndication')) {
                                node.remove();
                                console.log('🚫 Removed ad script');
                            }

                            if (node.classList && (
                                node.classList.contains('ad-container') ||
                                node.classList.contains('advertisement') ||
                                node.classList.contains('banner-ad')
                            )) {
                                node.remove();
                                console.log('🚫 Removed ad container');
                            }
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Hide ad spaces with CSS
    function hideAdSpaces() {
        const style = document.createElement('style');
        style.textContent = `
            /* Hide all ad-related elements */
            iframe[src*="google"],
            iframe[src*="ads"],
            iframe[src*="doubleclick"],
            script[src*="googlesyndication"],
            script[src*="adsbygoogle"],
            [class*="ad-container"],
            [class*="advertisement"],
            [class*="banner-ad"],
            [id*="ad_"],
            [id*="ads"],
            .ad, .ads, .advert,
            [data-ad-slot],
            .google-auto-placed,
            ins.adsbygoogle,
            [aria-label*="Advertisement"] {
                display: none !important;
                visibility: hidden !important;
                height: 0 !important;
                width: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                border: 0 !important;
                opacity: 0 !important;
            }

            /* Adjust layout if ads were taking space */
            body { margin: 0; }
            #content, main, .main-content { width: 100% !important; }
        `;
        document.head.appendChild(style);
    }

    // Inject ad-blocking into page context
    function injectAdBlocker() {
        const script = document.createElement('script');
        script.textContent = `
            // Block Google Ads library
            window.adsbygoogle = {
                loaded: true,
                push: function() {},
                onload: function() {}
            };

            // Disable googleadservices
            window.google = window.google || {};
            window.google.ads = { 
                load: function() {},
                pubads: function() { 
                    return { 
                        addEventListener: function() {},
                        setTargeting: function() {},
                        enableSingleRequest: function() {},
                        collapseEmptyDivs: function() {},
                        display: function() {}
                    };
                }
            };

            // Prevent ad scripts from running
            window.googletagmanager = { js: new Date() };
            window.ga = function() {};
        `;
        document.documentElement.appendChild(script);
    }

    // Initialize ad blocking
    removeAdElements();
    hideAdSpaces();
    monitorNewAds();
    injectAdBlocker();

    console.log('🚫 [Disable Ads] Active!');
    console.log('✨ All advertisements blocked');
    console.log('📺 Enjoy ad-free Nitro Type!');
})();
