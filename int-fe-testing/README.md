# FrontEnd Testing

```text
In this section we will get the basic understanding about the FrontEnd testing.
We will see in practise the main difference between the unit and theintegration test.
```

#### Exercise 1: basic understanding between unit and integration testing

Please create a new folder within your personal folder under the project
Naming could be `fe-testing` or something similar

**Initializing the project with `yarn`**

1. Check that you're in correct directory: `workshops/your_folder/fe-testing`
   To open the directory in Terminal you can use the command: `cd workshops/your_folder/fe-testing`
2. In CMD, write `yarn init` and enter the project data

`package.json` supposed to be created;

If you take a look inside the file yoi will see something similar to this:

```json
{
  "name": "int-testing-example",
  "version": "1.0.0",
  "description": "Example of an integration test",
  "main": "index.js",
  "author": "rsledevskis",
  "license": "MIT",
  "dependencies": {}
}
```

3. Let's add Cucumber as development dependency with the command:

- Open `https://jestjs.io/docs/getting-started`
- Copy `yarn add --dev jest`

Run this command within your created package
`yarn add --dev jest`

4. Check your "./package.json" file. As a dependencie you're supposed to see Cucumber:

```json
  "devDependencies": {
    "jest": "^27.0.4"
  }
```

5. The next step is to update our "./package.json" file to create a command, which will start executing jest tests

Add this scripts section into your json file

```json
  "scripts": {
    "test": "jest"
  }
```

So, at the end you should have something like this:

```json
{
  "name": "int-testing-example",
  "version": "1.0.0",
  "description": "Example of an integration test",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "rsledevskis",
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {
    "jest": "^27.0.4"
  }
}
```

Let's make a dry run and see what will happen if we will execute this command

`yarn jest`

The command will fail simply because we don't have any tests for now, but lets move on and create a function, which will be tested.

6. Since we will have several js functions we need to create a propeer structure:
   a separate folder with the name "js". Inside this folder we need to create a file "sum.js"

Inside the file:

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

The next step will be to create another function which will be called "subtract.js". Write a subtract function using the example provided above

7. Next, let's create a test file. It has to have the same name as the function itself, but with a small addition.
   Example `sum.test.js`

Inside this file we import the function, that will be tested:
`const sum = require('./sum');`
Make sure, that the function you are going to test has an option to be called from another directory!

```javascript
module.exports = sum;
}
```

The code that tests our function:

```javascript
test('properly adds two numbers', () => {
  expect(sum(1, 3)).toBe(4);
});
```

The same code if not to use build in jest framework:

```javascript
if (sum(1, 3) === 4) {
  console.log('passed');
} else {
  throw Error;
}
```

8. Please repeat steps mentioned before for subtract function as well.

Example:

```javascript
const subtract = require('./subtract');

test('properly subtracting two numbers', () => {
  expect(subtract(5, 6)).toBe(-1);
});
```

8. Test coverage: how do we know what functions and which lines were tested if there are plenty of different functions.
   Lets check the code covergae by adding `--coverage` to out jest command

```json
{
  "name": "fe-testing-example",
  "version": "1.0.0",
  "description": "This is the basic project to try testing from the front end developer perspective",
  "main": "index.js",
  "scripts": {
    "test": "jest --coverage"
  },
  "author": "rsledevskis",
  "license": "MIT",
  "devDependencies": {
    "jest": "^27.0.6"
  }
}
```

Run `yarn test` command and check what will happen
Lets brake the covergae a bit by adding a new empty function to one of the .js files (e.g. sum.js). Once the code is added, re-run tests to observe results.

```javascript
function helper() {
  console.log('This is an ampty function!');
}
```

9. Why tests are important is because we can calculate the outcome, but at the end there could be such issues as this one: replace the `subtract` function with this code and re-run tests once again

```javascript
function subtract(a, b) {
  let localVariable = b;
  let anotherLocalvariable = a - localVariable;
  let blablabla = anotherLocalvariable.toString();
  console.log(blablabla);
  // something is happening in the code (business logic) ...
  return blablabla;
}
```

10. The next step will be to create the very first integration step.
    Fot this you will have to create another test file. Lets call it `calculations.tets.js`. Add dependencies from the previously written functions `subtract` and `sum`

```javascript
const subtract = require('./subtract');
const sum = require('./sum');
```

And the very last step is to add the test itself and run the test

```javascript
test('calculate and subtract', () => {
  expect(sum(1, 9) * subtract(10, 5)).toBe(50);
});
```
