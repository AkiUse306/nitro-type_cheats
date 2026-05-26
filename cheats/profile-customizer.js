// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Profile Customizer
 * Customize profile appearance and stats display
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🎨 [Profile Customizer] Loading...');

    function customizeProfile() {
        const userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

        // Customize profile display
        userdata.profile = {
            theme: 'premium_dark',
            banner: 'legendary',
            profileFrame: 'gold',
            title: 'Pro Typer',
            bio: 'Nitro Type Cheater - Speed Demon 🚗💨'
        };

        // Set premium cosmetics
        userdata.profileBadges = Array.from({length: 20}, (_, i) => ({
            id: i,
            name: `Badge ${i}`,
            rarity: 'legendary'
        }));

        localStorage.setItem('userdata', JSON.stringify(userdata));
        console.log('✅ Profile customized!');
    }

    // Inject profile customization
    function injectProfileUI() {
        const script = document.createElement('script');
        script.textContent = `
            window.getProfileTheme = function() {
                return 'premium_dark';
            };

            window.getProfileBanner = function() {
                return 'legendary';
            };

            setInterval(() => {
                const profileElements = document.querySelectorAll('[class*="profile"]');
                profileElements.forEach(el => {
                    el.style.background = 'linear-gradient(135deg, #1a1a1a, #2a2a2a)';
                    el.style.borderRadius = '10px';
                });

                const titleElements = document.querySelectorAll('[class*="title"]');
                titleElements.forEach(el => {
                    if (el.textContent.length > 0 && el.textContent.length < 50) {
                        el.style.color = '#00ff00';
                        el.style.textShadow = '0 0 10px #00ff00';
                    }
                });
            }, 500);
        `;
        document.documentElement.appendChild(script);
    }

    // Add profile styling
    function addProfileStyling() {
        const style = document.createElement('style');
        style.textContent = `
            [class*="profile"] {
                background: linear-gradient(135deg, #1a1a1a, #2a2a2a) !important;
                border: 2px solid #00ff00 !important;
                border-radius: 10px !important;
            }

            [class*="profile-banner"] {
                background: linear-gradient(45deg, #ffff00, #ff6600) !important;
                opacity: 0.9 !important;
            }

            [class*="profile-frame"] {
                border: 3px solid gold !important;
            }

            [class*="profile-badge"] {
                background: gold !important;
                border: 2px solid #ffff00 !important;
            }

            .profile-title {
                color: #00ff00 !important;
                font-weight: bold !important;
                text-shadow: 0 0 10px #00ff00 !important;
            }
        `;
        document.head.appendChild(style);
    }

    customizeProfile();
    injectProfileUI();
    addProfileStyling();

    console.log('✅ [Profile Customizer] Active!');
    console.log('🎨 Profile customized with premium theme');
})();
