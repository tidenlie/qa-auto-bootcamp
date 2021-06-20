import { Given, When, Then } from '@cucumber/cucumber';


Given("User is on the {string} page", async (page: string) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});