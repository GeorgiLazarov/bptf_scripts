// ==UserScript==
// @name         Backpack.tf Listings Stats Opener
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Adds a button to open all listing stats on backpack.tf in new tabs
// @match        https://backpack.tf/classifieds*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', function() {
        // Create the button
        const openStatsButton = document.createElement('button');
        openStatsButton.textContent = 'Open All Stats';
        openStatsButton.className = 'btn btn-primary';
        openStatsButton.style.marginRight = '5px';
        openStatsButton.style.margin = '10px';

        // Find the media-list that contains the listings
        const listingsContainer = document.querySelector('.media-list');

        // Insert the button before the first listing
        if (listingsContainer) {
            listingsContainer.insertBefore(openStatsButton, listingsContainer.firstChild);
        }

        // Add the click event to open all stats in new tabs
        openStatsButton.addEventListener('click', () => {
            // Get all items with class 'item' that have the title attribute
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
    });
})();