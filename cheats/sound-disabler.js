// Copyright © Akinchit Sahoo
// Star the repo at https://github.com/AkiUse306/nitro-type_cheats

/**
 * Nitro Type Sound Disabler
 * Mute all game sounds and notifications
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    console.log('🔇 [Sound Disabler] Loading...');

    function disableAllSounds() {
        // Mute all audio elements
        const audioElements = document.querySelectorAll('audio');
        audioElements.forEach(audio => {
            audio.muted = true;
            audio.volume = 0;
        });

        // Override audio context
        if (window.AudioContext || window.webkitAudioContext) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.suspend();
        }
    }

    // Prevent sound creation
    function preventSoundCreation() {
        const script = document.createElement('script');
        script.textContent = `
            window.Audio = function() {
                return { play: () => {}, pause: () => {}, muted: true };
            };

            window.playSound = function() { return; };
            window.playAudio = function() { return; };
            window.playSFX = function() { return; };
            window.playMusic = function() { return; };

            // Mute existing audio
            setInterval(() => {
                const audios = document.querySelectorAll('audio');
                audios.forEach(a => { a.volume = 0; a.muted = true; });
            }, 100);
        `;
        document.documentElement.appendChild(script);
    }

    // Store preference
    function saveSoundPreference() {
        localStorage.setItem('soundEnabled', 'false');
        localStorage.setItem('musicEnabled', 'false');
        localStorage.setItem('sfxEnabled', 'false');
    }

    disableAllSounds();
    preventSoundCreation();
    saveSoundPreference();

    console.log('✅ [Sound Disabler] Active!');
    console.log('🔇 All sounds muted');
})();
