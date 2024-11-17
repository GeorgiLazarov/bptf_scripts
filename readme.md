# Backpack.tf Listings Stats Opener

A userscript that adds a button to backpack.tf classifieds pages to open all unusual item stats pages in new tabs.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. **[Click here to install script](https://raw.githubusercontent.com/GeorgiLazarov/bptf_scripts/master/Backpack.tf_Listings_Stats_Opener.user.js)**
3. Click "Install" when Tampermonkey opens the installation page.

> **Warning**
> To use this in Chromium-based browsers (Google Chrome, Opera, Edge), you need to navigate to Manage Extensions page (chrome://extensions/) and enable Developer Mode.

## Features

- Adds an "Open All Stats" button at the top of listings
- Opens backpack.tf stats pages for each unusual item
- Works on all backpack.tf classifieds pages
- Automatically handles URL encoding for item names
- Implements delay between opening tabs to prevent browser blocking

## Usage

1. Navigate to any backpack.tf classifieds page
2. Click the "Open All Stats" button at the top of the listings
3. Each item's stats page will open in a new tab
4. Be sure to allow pop-ups for backpack.tf if prompted by your browser

## Images

[Add screenshots of your script in action here]

## Technical Details

The script:
- Targets backpack.tf classifieds pages
- Extracts item names and effect IDs from listings
- Generates stats page URLs in the format: `https://backpack.tf/stats/Unusual/[ItemName]/Tradable/Craftable/[EffectID]`