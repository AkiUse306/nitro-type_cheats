# Installation Guide

## Method 1: Browser Console (Easiest & Fastest) ⭐

### Requirements:
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Nitro Type account

### Steps:
1. **Open Nitro Type** → https://www.nitrotype.com
2. **Open Console:**
   - Windows/Linux: `F12` or `Ctrl+Shift+I`
   - Mac: `Cmd+Option+I`
3. **Click the Console tab**
4. **Copy any cheat code** from the `/cheats` folder
5. **Paste into console** and press Enter
6. **Done!** The cheat is now active

---

## Method 2: Bookmarklet (Fastest) ⚡

Create a bookmark that runs cheat code with one click!

### Steps:
1. **Open your browser bookmarks** (Ctrl+Shift+B)
2. **Right-click in bookmark bar** → Add Bookmark
3. **Enter a name:** `NT Money Adder` (or any cheat name)
4. **For URL, enter:**
```javascript
javascript:(function()%7Bvar%20script=document.createElement('script')%3Bscript.src='https://raw.githubusercontent.com/YourUsername/nitro_type-cheats/main/cheats/money-adder.js'%3Bdocument.head.appendChild(script)%3B%7D)()
```
5. **Click Save**
6. **Click the bookmark** whenever you want to run the cheat!

---

## Method 3: Tampermonkey Userscript (Auto-Activate) 🤖

Cheats run automatically every time you visit Nitro Type!

### Requirements:
- Tampermonkey extension installed
  - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobp/reviews)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
  - [Safari](https://apps.apple.com/app/tampermonkey/id1482490089)
  - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfohd)

### Steps:
1. **Install Tampermonkey** from your browser's extension store
2. **Click Tampermonkey icon** in browser toolbar
3. **Select "Create a new script"**
4. **Replace all code** with content from `userscripts/nitro-type-cheat.user.js`
5. **Save** (Ctrl+S or Cmd+S)
6. **Done!** Cheats activate automatically on Nitro Type

---

## Method 4: GitHub Gist (Share with Friends)

### Steps:
1. Go to https://gist.github.com
2. **Paste cheat code** into the text area
3. **Name it:** `nitro-type-cheat.js`
4. **Make it public** and create gist
5. **Copy the raw URL** (click "Raw" button)
6. **Share the link** with friends
7. Anyone can **paste the raw content** into console

---

## Advanced: Custom Installation

### Create a Local HTML File:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Nitro Type Cheats Launcher</title>
</head>
<body>
    <h1>Nitro Type Cheats</h1>
    <button onclick="loadAutoTyper()">Load Auto Typer</button>
    <button onclick="loadMoneyAdder()">Load Money Adder</button>
    <button onclick="loadXPBooster()">Load XP Booster</button>

    <script>
        function loadAutoTyper() {
            fetch('cheats/auto-typer.js')
                .then(r => r.text())
                .then(code => eval(code));
        }
        // Add more functions...
    </script>
</body>
</html>
```

---

## System Requirements

### Minimum:
- Browser: Chrome, Firefox, Safari, or Edge (any recent version)
- RAM: 2GB
- Internet: Any stable connection

### Recommended:
- Browser: Latest Chrome or Firefox
- RAM: 4GB+
- Internet: Stable broadband

### Not Compatible:
- Mobile browsers (phone/tablet apps)
- Internet Explorer
- Very old browser versions

---

## Troubleshooting Installation

### "Console won't open"
- Try: `F12`, `Ctrl+Shift+I`, or right-click → Inspect
- Make sure you're on nitrotype.com

### "Code won't paste"
- Try copying again
- Make sure console tab is selected
- Check for error messages in red

### "Cheat not working after install"
- Verify you're on https://www.nitrotype.com
- Refresh the page (F5)
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different cheat to test

### "Tampermonkey not showing"
- Make sure extension is enabled in your browser
- Check browser extensions menu
- Try reinstalling if corrupted

---

## One-Click Installation Script

### Paste this in console to see all options:
```javascript
console.log("=== Nitro Type Cheats Installer ===");
console.log("1. Auto Typer: eval(fetch('https://raw.githubusercontent.com/YourUsername/nitro_type-cheats/main/cheats/auto-typer.js').then(r=>r.text()))");
console.log("2. Money Adder: eval(fetch('https://raw.githubusercontent.com/YourUsername/nitro_type-cheats/main/cheats/money-adder.js').then(r=>r.text()))");
console.log("Copy & paste any command above");
```

---

## Updates & Maintenance

### Check for Updates:
- Regularly check this GitHub repository
- Subscribe to releases for notifications
- Re-copy cheat code if errors occur

### Update Userscript:
1. Click Tampermonkey icon
2. Select the cheat script
3. Click Edit
4. Replace old code with new code
5. Save

---

## Security Notes

### These cheats are safe to use because:
- ✅ Code is open source (you can review it)
- ✅ No malware or keyloggers
- ✅ Only modifies your local browser
- ✅ No data sent to external servers
- ✅ Works offline (except downloads)

### However:
- ⚠️ Nitro Type may detect and ban your account
- ⚠️ Use responsibly
- ⚠️ Not affiliated with official Nitro Type

---

**Need help?** Check `QUICKSTART.md` for common issues!
