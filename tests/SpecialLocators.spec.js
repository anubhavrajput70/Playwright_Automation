import { test, expect } from '@playwright/test';

test('playwright special locators', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    //if you want to use selectOption then it should be in select tag
    await page.getByLabel("Gender").selectOption("Male");
    //use npx playwright test --ui to open test runner command to use for debugging purpose
    await page.getByPlaceholder("Password").fill("Qwerty@123");
    await page.getByRole("button", { name: "Submit" }).click();
    const bool = await page.getByText("Success! The form has been submitted successfully!.").isVisible();
    expect(bool).toBeTruthy();
    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole("button").click();
});