const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const results = {};

  // 1. Header width sweep with 7th nav item
  {
    const widths = [375, 768, 1000, 1024, 1100, 1280, 1440];
    results.headerOverflow = {};
    for (const w of widths) {
      const page = await browser.newPage({ viewport: { width: w, height: 700 } });
      await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForSelector("text=Jin's Painting");
      await page.waitForTimeout(200);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      results.headerOverflow[w] = overflow;
      await page.close();
    }
  }

  // 2. Lazy loading check: at page load (top of page), gallery images should NOT be requested yet
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    const requestedImages = [];
    page.on("request", (req) => {
      if (req.url().includes("/_next/image") && req.url().includes("project-")) {
        requestedImages.push(req.url());
      }
    });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(500);
    results.imagesRequestedBeforeScroll = requestedImages.length;

    // Now scroll to the gallery
    await page.evaluate(() => document.getElementById("our-work").scrollIntoView());
    await page.waitForTimeout(800);
    results.imagesRequestedAfterScroll = requestedImages.length;

    await page.screenshot({ path: "/tmp/gallery-slide1.png" });

    // Test next button
    await page.click('button[aria-label="Next"]');
    await page.waitForTimeout(600);
    await page.screenshot({ path: "/tmp/gallery-slide2.png" });

    const activeDotWidth = await page.evaluate(() => {
      const dots = document.querySelectorAll('section#our-work button[aria-label="2"]');
      return dots.length ? dots[0].className : null;
    });
    results.dotAfterNext = activeDotWidth;

    await page.close();
  }

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})();
