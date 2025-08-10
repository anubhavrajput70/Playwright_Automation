const test = require('@playwright/test');

//browser is fixture which is provided by playwright
//fixture is a global object which is provided by playwright
test('browser context playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    await page.waitForTimeout(10000);
});

//for default context we can use page fixture
test('page playwright test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.waitForTimeout(10000);
});