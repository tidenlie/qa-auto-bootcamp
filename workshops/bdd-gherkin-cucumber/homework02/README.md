## Homework 02

Pre-requisetes:

1. Install NodeJS on your machine locally.

You can do it by following the steps in https://nodejs.org/en/download/

To check that NodeJs was installed, try to run in your iTerm(for Mac)/CMD(for Win):

`node -v`

You supposed to receive Node version in an answer the if everything was installed appropriately:

2. Install `yarn` package manager by running in the terminal:

`npm install --global yarn`

Check that `yarn` is installed by running:

`yarn --version`

Link to the documentation: https://classic.yarnpkg.com/en/docs/install/#mac-stable 

### Task description

The second homework is directly connected to your Homework 01. You will need to implement the steps for your Gherkins.
You will use the same training examples to exercise steps implementation:

https://the-internet.herokuapp.com/add_remove_elements/
https://the-internet.herokuapp.com/checkboxes
https://the-internet.herokuapp.com/key_presses
https://the-internet.herokuapp.com/status_codes

### Homework requirements

1. You will need to repeat the steps of the framework set up that we did during the Workshop. Make it locally on your laptop, without using Vagrant.
2. Create separate feature files for the each of mentioned examples above. You can use scenarios that you've prepared in Homework 01 => you can update them or add even more tests.
3. Implement the steps for your features. You can use tests used during the workshop as a reference.
4. Add possibility to run different specs(feature files).

### Homework will be considered as done:

- framework setup is done
- all four training examples are covered with features files
- steps used in the feature files implemented
- MR prepared and posted in the Slack channel for the review
- your tests pass
- tests needs to have a proper Gherkin syntax with `Given-When-Then` structure
- Deadline for the Homework 02 is the 5th of July 2021

If you have any questions or will encounter any problems, do not hesitate ask mentors for help.

Good luck!