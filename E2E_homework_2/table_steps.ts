import { Given, When, Then } from '@cucumber/cucumber';

Given("Dynamic table page is opened", () => {
    browser.url(`http://www.uitestingplayground.com/dynamictable`);
});


Then("Chrome CPU value in table is equal with orange one", () => {
    const rows_before_Chrome = $$(`//span[contains(text(), 'CPU')]//preceding-sibling::*`).length;
    const CPU_from_table = $(`//span[contains(text(), 'Chrome')]/../*[${rows_before_Chrome + 1}]`).getText();
    expect ($('p.bg-warning')).toHaveText(`Chrome CPU: ${CPU_from_table}`);
});
