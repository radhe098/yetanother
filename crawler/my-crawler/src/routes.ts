import { createPlaywrightRouter } from 'crawlee';
import fs from 'fs';
import path from 'path';

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ page, log, request }) => {
    log.info(`Extracting PDF links from ${request.loadedUrl}`);
    // Extract all PDF links
    const pdfLinks = await page.$$eval('a', anchors =>
        anchors
            .map(a => a.href)
            .filter(href => href.endsWith('.pdf'))
    );
    log.info(`Found ${pdfLinks.length} PDF links.`);

    // Save the list of PDF links to a JSON file
    const outputPath = path.join('storage/pdfs', 'pdf_links.json');
    fs.writeFileSync(outputPath, JSON.stringify(pdfLinks, null, 2));
    log.info(`Saved PDF links to ${outputPath}`);
});
