import { test, expect } from '@playwright/test';

test('End to End Order Test', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const productName = "ZARA COAT 3";
    const email="anubhavrajput@gmail.com";
    const products = page.locator(".card-body");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("Qwerty@123");
    await page.locator("[value='Login']").click();
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count =await products.count();
    for(let i=0;i<count;i++)
    {
       const productName1 = await products.nth(i).locator("b").textContent();
        if(productName1 === productName)
        {
            //add product to cart
            //you can also use the text locator to click on the add to cart button
            //page.locator(".card-body b").first().click
            await products.nth(i).locator("text=Add to Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    //adding manual waits for the cart page to load
    await page.locator("div li").first().waitFor(); 
    const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i=0;i<optionsCount;i++)
    {
        const optionText = await dropdown.locator("button").nth(i).textContent();
        if(optionText.trim() === "India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    await page.locator(".action__submit").click();
    expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order Id is "+orderId);
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for(let i=0;i<await rows.count();i++)
    {
        const rowOrderId= await rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
    await page.pause();

});

test('End to End Order Test other way', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const productName = "ZARA COAT 3";
    const email="anubhavrajput@gmail.com";
    const products = page.locator(".card-body");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Qwerty@123");
    await page.getByRole("button", { name: "Login" }).click();
    await page.locator(".card-body b").first().waitFor();
    await page.locator(".card-body").filter({ hasText: productName }).getByRole("button", { name: "Add to Cart" }).click();
    await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
    await page.locator("div li").first().waitFor(); 
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button",{name:"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:100});
    await page.getByRole("button",{name:"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    await expect(page.getByText("Thankyou for the order. ")).toBeVisible();
    });

