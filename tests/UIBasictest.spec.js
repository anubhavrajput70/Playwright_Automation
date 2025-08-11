import { test, expect } from '@playwright/test';

//browser is fixture which is provided by playwright
//fixture is a global object which is provided by playwright
test('browser context playwright test invalid login', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    //css 
    //fill() is used to fill the text in the input field if you fill empty value it fill wipe out the value
    //click() is used to click the button
    //textContent() is used to get the text content of the element
    //getAttribute() is used to get the attribute of the element
    //getAttribute() is used to get the attribute of the element
    await page.locator("#username").fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});

test('browser context playwright test valid login', async ({ browser }) => {
const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator("#username");
const signIn = page.locator("#signInBtn");
const cardTitles = page.locator(".card-body a");
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const title = await page.title();
console.log(title);
await userName.fill('rahulshetty');
await page.locator("[type='password']").fill('learning');
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click();
//.nth(index) to use indexing for the element
console.log(await cardTitles.nth(0).textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles)
});

//for default context we can use page fixture
test('page playwright test', async ({ page }) => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Google');   
});