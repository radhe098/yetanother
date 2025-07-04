// For more information, see https://crawlee.dev/
import { launchOptions } from 'camoufox-js';
import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';
import { firefox } from 'playwright';

import { router } from './routes.js';

const startUrls = [
    'https://github.com/Quillhash/QuillAudit_Reports',
];

const crawler = new PlaywrightCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
    // Comment this option to scrape the full website.
    maxRequestsPerCrawl: 20,
    browserPoolOptions: {
        // Disable the default fingerprint spoofing to avoid conflicts with Camoufox.
        useFingerprints: false,
    },
    launchContext: {
        launcher: firefox,
        launchOptions: await launchOptions({
            headless: true, // Ensure browser runs in headless mode for Codespaces
            // Pass your own Camoufox parameters here...
            // block_images: true,
            // fonts: ['Times New Roman'],
            // ...
        }),
    },
});

await crawler.run(startUrls);
