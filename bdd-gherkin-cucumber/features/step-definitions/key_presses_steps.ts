import { Given, When, Then } from '@cucumber/cucumber';


When("User presses key {string}", async (key: string) => {
    await browser.keys (key);
});

Then("User should see a message containing {string}", async (key: string) => {
    const result = $('#result'); 
    const neededText = key.toUpperCase();
    await expect(result).toHaveTextContaining(neededText);
});
