import { test, expect } from '@playwright/test';

test('User login',async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anubhavrajput@gmail.com");
    await page.locator("#userPassword").fill("Qwerty@123");
    await page.locator("[value='Login']").click();
    //it will wait until the network comes to and idle state until all network call are made
   // await page.waitForLoadState("networkidle");

   //alternate way to wait for the page to load
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});

test('UI controls',async ({page}) =>{
    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    const dropdown = await page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await page.pause();
    await signIn.click();   
});
    
