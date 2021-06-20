import { Given, When, Then } from '@cucumber/cucumber';

const CSS_CHECKBOXES = '//*[@id="checkboxes"]/input';

Given("Checkbox 1 is unchecked and 2 - checked", async () => {
    const first_elem = await $(`${CSS_CHECKBOXES}[1]`);
    const second_elem = await $(`${CSS_CHECKBOXES}[2]`);
    await first_elem.isSelected() == false;
    await second_elem.isSelected() == true;
});


When("User clicks on checkbox {string}", async (checked_ch: string) => {
    const elem = await $(`${CSS_CHECKBOXES}[${checked_ch}]`);
    await(elem).click();
});

Then("Checked Attribute of both checkboxes is {string}", async (checked_attribute: string) => {
    const first_elem = await $(`${CSS_CHECKBOXES}[1]`);
    const second_elem = await $(`${CSS_CHECKBOXES}[2]`);
    await first_elem.isSelected() == checked_attribute;
    await second_elem.isSelected() == checked_attribute;
});
