import { Given, When, Then } from '@cucumber/cucumber';


When("User logins with {word} and {}", async (username: string, password: string) => {
    await (await $('#username')).setValue(username);
    await (await $('#password')).setValue(password);
    await (await $('button[type="submit"]')).click();
});

Then("User should see a flash message saying {string}", async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});
