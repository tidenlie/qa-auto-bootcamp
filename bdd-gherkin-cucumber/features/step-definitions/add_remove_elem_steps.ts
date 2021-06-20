import { Given, When, Then } from '@cucumber/cucumber';

const CSS_BUTTON_ADD_ELEMENT = '//button[text()="Add Element"]';
const CSS_BUTTON_DELETE_ELEMENT = '//button[text()="Delete"]';


//Scenario Outline: User can add <n> elements
When('User clicks on Add button {int} times', async (n: number) => {
    const elem = await $(CSS_BUTTON_ADD_ELEMENT);
    while (n > 0) {
        n--;
        await elem.click();
    }
});

Then('User should see {int} Delete buttons', async (n: number) => {
    const elem = await $("//*[@id='elements']");
    await expect(elem).toHaveChildren(n);
    if (n == 1){
        const elem_del = await $(CSS_BUTTON_DELETE_ELEMENT);
        await expect(elem_del).toBeExisting();
    }
});


//Scenario: User can remove element
When('User clicks on Add button', async () => {
    const elem = await $(CSS_BUTTON_ADD_ELEMENT);
    await elem.click();
});

When('User clicks on Delete button', async () => {
    const elem = await $(CSS_BUTTON_DELETE_ELEMENT);
    await elem.click();
});

Then("User should not see Delete button", async () => {
    const elem = await $(CSS_BUTTON_DELETE_ELEMENT);
    (await elem.isExisting()) == false;
});