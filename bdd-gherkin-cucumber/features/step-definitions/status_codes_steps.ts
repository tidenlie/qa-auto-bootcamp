import { Given, When, Then } from '@cucumber/cucumber';


When("User clicks on the Status code with text {int}", async (number: int) => {
    const elem = await $(`[href = "status_codes/${number}"]`);
    await(elem).click();
});

Then("User sees the Status Code text with {string}", async (code: string) => {
    const elem = await $("#content > div > p");
    await expect (elem).toBeExisting();
    const message = (`This page returned a ${code} status code.`);
    await expect (elem).toHaveTextContaining(message);
});


Then ("It is possible to go back to initial page", async() => {
    const here = await $("#content > div > p > a");
    await expect (here).toHaveHref('/status_codes');
});
