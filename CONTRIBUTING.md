# Contributing Guide

Contributions are welcome! Here's how to add new cheats or improve existing ones.

## Adding a New Cheat

### File Structure:
Create a new file in the `/cheats` folder following this naming convention:
- Lowercase with hyphens: `cheat-name.js`
- Example: `auto-prestige.js`

### Template:
```javascript
/**
 * Nitro Type [Cheat Name]
 * [Description of what it does]
 * Usage: Paste into browser console
 */

(function() {
    'use strict';

    const CONFIG = {
        // Your config here
    };

    console.log('[Cheat Name] Loading...');

    // Your cheat code here

    console.log('[Cheat Name] Complete!');
})();
```

## Standards

### Code Quality:
- Use `'use strict'`
- Wrap in IIFE (self-executing function)
- Add descriptive console logs
- Handle errors gracefully
- Comment complex logic

### Naming:
- Use clear, descriptive names
- Follow camelCase for variables
- Use SCREAMING_SNAKE_CASE for constants

### Testing:
- Test on latest Nitro Type version
- Test in multiple browsers (Chrome, Firefox)
- Verify console for errors
- Document any issues

## Pull Request Process

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/new-cheat`
3. **Make your changes** and commit with clear messages
4. **Test thoroughly** before submitting
5. **Push to your fork:** `git push origin feature/new-cheat`
6. **Create a Pull Request** with detailed description

## Documentation

For each new cheat, update:
1. `README.md` - Add to features list
2. `config.json` - Add cheat metadata
3. Create help text in the cheat code

## Ideas for New Cheats

- Prestige system cheats
- Race reward multipliers
- Unlock competition mode
- Season pass unlocks
- Custom car customization
- Friend ranking boosts
- Badge/achievement unlocks

## Issues & Bugs

- Open an issue with clear title and description
- Include browser and version info
- Attach screenshots/console errors
- Test with single cheat (not combined)

## Questions?

- Check existing issues first
- Ask in pull request comments
- Review similar cheat code

---

**Thank you for contributing!** 🚀
