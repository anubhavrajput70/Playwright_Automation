import { test, expect } from '@playwright/test';

test('Calendar Handling Test', async ({ page }) => {
    const monthNumber="6";
    const date="15";
    const year="2027"
    const expectedList = [monthNumber, date, year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(parseInt(monthNumber)-1).click();
    await page.locator("//abbr[text()='" + parseInt(date) + "']").click();
    const input = await page.locator(".react-date-picker__inputGroup__input");
    for(let i=0;i<expectedList.length;i++)
        {
            await expect(input.nth(i)).toHaveValue(expectedList[i]);
        }
});