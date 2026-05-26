const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    // Target the specific "download" directory you just created
    const downloadPath = path.resolve(__dirname);
    
    console.log("Cleaning out any old slide images from previous runs...");
    const existingFiles = fs.readdirSync(downloadPath);
    existingFiles.forEach(file => {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp') || file.endsWith('.crdownload')) {
            fs.unlinkSync(path.join(downloadPath, file));
        }
    });

    console.log("Launching headless browser viewport...");
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();

    // ==========================================================================
    // INTEGRATED LAYOUT MATRIX ENGINE: DYNAMIC TEXT FIT (PRESERVER)
    // ==========================================================================
    await page.evaluateOnNewDocument(() => {
        function dynamicallyMaximizeHeadline() {
            const headerContainer = document.querySelector('.main-hook-style header h1');
            if (!headerContainer) return;

            const textLines = headerContainer.querySelectorAll('span, div');
            const containerWidth = headerContainer.clientWidth;

            textLines.forEach(line => {
                line.style.fontSize = '10px';
                
                const currentWidth = line.getBoundingClientRect().width;
                if (currentWidth > 0) {
                    let optimizedSize = (containerWidth / currentWidth) * 10;
                    
                    const maxSafeFont = 165; 
                    const minSafeFont = 65;
                    
                    if (optimizedSize > maxSafeFont) optimizedSize = maxSafeFont;
                    if (optimizedSize < minSafeFont) optimizedSize = minSafeFont;

                    line.style.fontSize = `${optimizedSize}px`;
                }
            });
        }

        // Initialize engine listener cycles across early document loads
        document.addEventListener('DOMContentLoaded', dynamicallyMaximizeHeadline);
        window.addEventListener('load', dynamicallyMaximizeHeadline);
        window.addEventListener('resize', dynamicallyMaximizeHeadline);
        
        if (document.fonts) {
            document.fonts.ready.then(dynamicallyMaximizeHeadline);
        }
    });
    // ==========================================================================

    // Intercept the browser's native download behavior and force it into your 'download' folder
    const client = await page.target().createCDPSession();
    await client.send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: downloadPath
    });

    console.log("Connecting to live visual matrix page...");
    await page.goto('https://mrfahimroshansiyals-sudo.github.io/aeon-intel-feed', {
        waitUntil: 'networkidle2',
        timeout: 60000
    });

    // Forced layout calculation run right before execution click sequences
    await page.evaluate(() => {
        const headerContainer = document.querySelector('.main-hook-style header h1');
        if (headerContainer) {
            const textLines = headerContainer.querySelectorAll('span, div');
            const containerWidth = headerContainer.clientWidth;
            textLines.forEach(line => {
                line.style.fontSize = '10px';
                const currentWidth = line.getBoundingClientRect().width;
                if (currentWidth > 0) {
                    let optimizedSize = (containerWidth / currentWidth) * 10;
                    if (optimizedSize > 165) optimizedSize = 165;
                    if (optimizedSize < 65) optimizedSize = 65;
                    line.style.fontSize = `${optimizedSize}px`;
                }
            });
        }
    });

    console.log("Triggering your engine's bulk download sequence...");
    // Programmatically click your existing functional header button (#download-active)
    await page.click('#download-active');

    console.log("Awaiting engine synthesis pipeline to process all 9 slides...");
    
    // Wait until exactly 9 images have finished downloading completely
    let totalFiles = 0;
    for (let attempt = 0; attempt < 45; attempt++) {
        await new Promise(r => setTimeout(r, 1000));
        const files = fs.readdirSync(downloadPath).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
        totalFiles = files.length;
        if (totalFiles >= 9) break; 
    }

    console.log(`Discovered ${totalFiles} raw assets. Streamlining structural order labels...`);

    // Organize and sequentially rename the captured files cleanly (slide_01 to slide_09)
    const files = fs.readdirSync(downloadPath).filter(f => f.endsWith('.png') || f.endsWith('.webp'));
    files.forEach((file) => {
        const fullPath = path.join(downloadPath, file);
        let newName = "";

        if (file.includes('MAIN')) {
            newName = "slide_01.webp";
        } else if (file.includes('FOLLOW')) {
            newName = "slide_09.webp";
        } else {
            const match = file.match(/SLIDE_(\d+)/);
            if (match) {
                // Adds 1 so SLIDE_1 becomes slide_02.webp (leaving slide_01 for MAIN)
                const slideNum = parseInt(match[1]) + 1; 
                newName = `slide_${String(slideNum).padStart(2, '0')}.webp`;
            }
        }

        if (newName) {
            fs.renameSync(fullPath, path.join(downloadPath, newName));
            console.log(`Renamed: ${file} -> ${newName}`);
        }
    });

    console.log("Asset synchronization sequence completed successfully.");
    await browser.close();
})();
