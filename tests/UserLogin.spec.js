import { test, expect } from '@playwright/test';

//await will be used only when we are doing any action in the code 
// for declartion await will not be used

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
    const documentLink = page.locator("[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userName.fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    const dropdown = await page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    await page.pause();
    await signIn.click();   
});
    
