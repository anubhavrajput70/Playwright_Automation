import { test, expect } from '@playwright/test';

test('User registration',async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register");

});
