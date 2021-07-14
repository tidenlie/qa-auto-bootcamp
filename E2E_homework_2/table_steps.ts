Given("Dynamic table page is opened", () => {
    browser.url(`http://www.uitestingplayground.com/dynamictable`);
});


Then("Chrome CPU value in table is equal with orange one", () => {
    //=> get CPU column: //span[contains(text(), 'CPU')]
    //=> get all columns(nodes) before it: preceding-siblings::*
    //=> count them with length
    const columns_before_CPU = $$(`//span[contains(text(), 'CPU')]//preceding-sibling::*`).length;
    
    //get Chrome row: //span[contains(text(), 'Chrome')]
    //go level up and to the parent: /..
    //chose all children of it: /*
    //from them chose the right child or column: [columns_before_CPU + 1]
    //get text from it with getText()
    const CPU_from_table = $(`//span[contains(text(), 'Chrome')]/../*[${columns_before_CPU + 1}]`).getText();
    expect ($('p.bg-warning')).toHaveText(`Chrome CPU: ${CPU_from_table}`);
});

//In short
//1) Get the CPU column and understand which it is (1st, 2nd, 3rd, 4th)
//2) Get the Chrome row
//3) Think!
//4) Row is right, I need just right column with CPU value => And I know right column from 1st step
//5) Select Chrome's parent or get all columns from Chrome in one list
//6) Select needed column
