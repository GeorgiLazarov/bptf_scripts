// ==UserScript==
// @name         Backpack.tf Listings Stats & Mannco Store Opener
// @namespace    https://github.com/GeorgiLazarov
// @version      1.3
// @description  Adds buttons to open all listing stats on backpack.tf and mannco.store in new tabs
// @author       GeorgiLazarov
// @match        https://backpack.tf/classifieds*
// @grant        none
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/GeorgiLazarov/bptf_scripts/master/Backpack.tf_Listings_Stats_Opener.user.js
// @downloadURL  https://raw.githubusercontent.com/GeorgiLazarov/bptf_scripts/master/Backpack.tf_Listings_Stats_Opener.user.js
// @supportURL   https://github.com/GeorgiLazarov/bptf_scripts/issues
// @homepageURL  https://github.com/GeorgiLazarov/bptf_scripts
// @icon         https://backpack.tf/favicon-32x32.png
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', function() {
        // Create container for buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.style.margin = '10px';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';

        // Create the backpack.tf stats button
        const openStatsButton = document.createElement('button');
        openStatsButton.textContent = 'Open All Stats';
        openStatsButton.className = 'btn btn-primary';

        // Create the mannco.store button
        const openManncoButton = document.createElement('button');
        openManncoButton.textContent = 'Open All Mannco';
        openManncoButton.className = 'btn btn-primary';

        // Add buttons to container
        buttonContainer.appendChild(openStatsButton);
        buttonContainer.appendChild(openManncoButton);

        // Find the media-list that contains the listings
        const listingsContainer = document.querySelector('.media-list');

        // Insert the button container before the first listing
        if (listingsContainer) {
            listingsContainer.insertBefore(buttonContainer, listingsContainer.firstChild);
        }

        // Add click event for backpack.tf stats
        openStatsButton.addEventListener('click', () => {
            const items = document.querySelectorAll('.listing-item .item[title]');
            
            items.forEach(item => {
                if (!item.getAttribute('data-base_name') || !item.getAttribute('data-effect_id')) return;
                
                const baseName = item.getAttribute('data-base_name');
                const effectId = item.getAttribute('data-effect_id');
                if (baseName && effectId) {
                    const url = `https://backpack.tf/stats/Unusual/${encodeURIComponent(baseName)}/Tradable/Craftable/${effectId}`;
                    window.open(url, '_blank');
                }
            });
        });

        // Add click event for mannco.store
        openManncoButton.addEventListener('click', () => {
            const items = document.querySelectorAll('.listing-item .item[title]');
            
            items.forEach(item => {
                if (!item.getAttribute('data-base_name') || !item.getAttribute('data-effect_name')) return;
                
                const baseName = item.getAttribute('data-base_name');
                const effectName = item.getAttribute('data-effect_name');
                if (baseName && effectName) {
                    // Format: lowercase, replace spaces with hyphens, remove apostrophes
                    const formattedName = baseName.toLowerCase()
                        .replace(/'/g, '') // Remove apostrophes
                        .replace(/\s+/g, '-'); // Replace spaces with hyphens
                    const formattedEffect = effectName.toLowerCase()
                        .replace(/'/g, '')
                        .replace(/\s+/g, '-');
                    const url = `https://mannco.store/item/440-${formattedEffect}-unusual-${formattedName}`;
                    window.open(url, '_blank');
                }
            });
        });
    });
})();