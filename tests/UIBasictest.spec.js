import { test, expect } from '@playwright/test';

//browser is fixture which is provided by playwright
//fixture is a global object which is provided by playwright
test('browser context playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Google');
});

//for default context we can use page fixture
test('page playwright test', async ({ page }) => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Google');   
});