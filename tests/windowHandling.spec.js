import { test, expect } from '@playwright/test';

test('child window handling',async ({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    //returns new page and save it in the variable page2
    //there are three state of promise which listen for any new page
    //pending, fulfilled, rejected
    //where you want two step should go parallely you can give promise.all()
    //page2 is the new page which is opened in the background
    //page2 is not the same as page
    const [newpage] = await Promise.all([context.waitForEvent('page'),documentLink.click(),])
    const text = await newpage.locator(".red").textContent();
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    //console.log(domain);
    await userName.fill(domain);
    //to grab the text value of a locator when you fill it on run time then you need to use the function inputValue()
    //textContent() will return the text value of the locator when it initially opened the page
    //inputValue() will return the value which is filled on the page
    console.log(await userName.inputValue());
    
    console.log(text);
});
    