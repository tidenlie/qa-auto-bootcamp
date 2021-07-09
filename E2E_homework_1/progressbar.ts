import { Given, When, Then } from "@cucumber/cucumber";


Given("User is on the progress bar page", () => {
  browser.url(`http://www.uitestingplayground.com/progressbar`);
}
);


When("User clicks on Start button", () => {
   $("#startButton").click();
  });


When('User waits till progress bar has reached 75%', () => {
  $('[aria-valuenow="75"]').waitForDisplayed({timeout:30000, timeoutMsg: "Time is money", interval:1})
  //OR
  //   browser.waitUntil(
//     () => $('#progressBar').getText() === '75%',
//     {
//         timeout: 30000,
//         interval: 1,
//         timeoutMsg: 'Time is money. Sorry.'
//     }
// );
});


Then ("User clicks on Stop button", () => {
  $("#stopButton").click();
  expect($('#result')).toHaveTextContaining('Result: 0');
 });