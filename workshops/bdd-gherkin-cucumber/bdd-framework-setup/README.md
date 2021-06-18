## Jumpstart with WebdriverIO and Cucumber - simple framework set up

Intro of the project/ technology stack >> frameworks used

Pre-requisites:
1. NodeJS
2. `npm`(node package manager) or `yarn` >> both pre-installed in our vagrant set up

More information on yarn installation: https://classic.yarnpkg.com/en/docs/install/#mac-stable

3. Code Editor(VS Code, WebStorm, etc.)
4. Terminal

Installation guides:
- download and install NodeJS through the official website: https://nodejs.org/en/download
- ``yarn`` installation guide https://classic.yarnpkg.com/en/docs/install/#mac-stable

After installation check that NodeJS and npm were really installed

!!! Run the following commands in your iTerm(for Mac)/CMD(for Win) one by one:

`yarn -v`

`node -v`

Let's stick to using ``yarn`` in our project.

Link to the documentation: https://classic.yarnpkg.com/en/docs/

**Initializing the project with `yarn`**

1. Check that you're in correct directory: `workshops/bdd-gherkin-cucumber/bdd-framework-setup`
   To open the directory in Terminal  you can use the command: ``cd workshops/bdd-gherkin-cucumber/bdd-framework-setup``
2. In CMD, write ``yarn init`` and enter the project data

``package.json`` supposed to be created;

If you take a look inside the file you will see something similar to this:

```json
{
  "name": "bdd-framework-setup",
  "version": "1.0.0",
  "main": "index.js",
  "author": "kzhuzha",
  "license": "MIT"
}
```
3. Let's add Cucumber as development dependency with the command:

``yarn add --dev @cucumber/cucumber``
``yarn add --dev --no-bin-links @cucumber/cucumber`` - for Win users because of Vagrant bug

More about the command: https://cucumber.io/docs/installation/javascript/

A file `yarn.lock` was automatically created by `yarn`. Important to mention that
if you have your own project and use yarn as package manager, it is important to add
this file to source control system to have consistency in your dependencies.

4. Check your "./package.json" file. As a dependencie you're supposed to see Cucumber:
```json
  "dependencies": {
    "@cucumber/cucumber": "^7.2.1"
  }
```
5. Right now we're going to try to run a project without any tests to make sure that we installed everything correctly.
Fot that we need to create a file ``cucumber.js`` in the root folder of our project: ``workshops/bdd-gherkin-cucumber/bdd-framework-setup``

After the empty ``cucumber.js`` file was created add the following content to it:

```
module.exports = {
default: `--format-options '{"snippetInterface": "synchronous"}'`
}
```
To be able to run tests we must have a script in our project.

We will add it to the ``workshops/bdd-gherkin-cucumber/bdd-framework-setup/package.json``

Let's create a ``scripts`` section that will contain original script.

```json
   "scripts": {
      "test": "cucumber-js"
   }
```
Try to run our script in the terminal/cmd: ``yarn test``

At this point your ``package.json`` file should look like:
```json
{
  "name": "bdd-framework-setup",
  "version": "1.0.0",
  "main": "index.js",
  "author": "kzhuzha",
  "license": "MIT",
  "dependencies": {
    "@cucumber/cucumber": "^7.2.1"
  },
  "scripts": {
    "test": "cucumber-js"
  }
}
```

6. The next step is to install test runner. For our project we will use WebdriverIO framework.
To install it in the project, run the command:

`yarn add --dev @wdio/cli @wdio/config`

Documentation links:
https://yarnpkg.com/package/@wdio/cli

7. Since we use WebdriverIO as our test runner, we need to modify the script to run the tests.
Open `./package.json` file again.

Change test script to contain `npx wdio run ./wdio.conf.js`
Your scripts should look like this:

```
  "scripts": {
    "test": "npx wdio run ./wdio.conf.js"
  },
```
8. Run ``yarn test`` after updating the script.

This will prompt a set questions that guides you through the setup. Almost for all of them we can use default answers. But here is the example of answers to satify our workshop needs:

```
Where is your automation backend located? on my local
Which framework do you want to use? cucumber
Do you want to use a compilier? Typescript || No!
Where are your feature files located? ./features/**/*.feature (default one)
Where are your step definitions located? ./features/step-definitions/steps.js (default one)
Do you want WebdriverIO to autogenerate some test files? Yes
Which reported do you want to use? allure
Do you want add a service to your test setup? chromedriver
What is base url? http://localhost (default one)

```
9. We will need to add aditional config for chromedriver to make the tests running in `wdio.conf.js` file. Please open `workshops/bdd-gherkin-cucumber/bdd-framework-setup/wdio.conf.js` and cheeck whether you capabilities sections looks like below => copy the following section and change capabilities configuration

```
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 1 instances get started at a time.
      maxInstances: 1,
      //
      browserName: "chrome",
      "goog:chromeOptions": {
        // to run chrome headless the following flags are required
        // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
        args: [
          "--no-sandbox",  // Disables the sandbox for all process types that are normally sandboxed. Meant to be used as a browser-level switch for testing purposes only.
          "--headless",  // Run in headless mode, i.e., without a UI or display server dependencies.
          "--disable-gpu",  // Disables GPU hardware acceleration. If software renderer is not in place, then the GPU process won't launch.
          "--disable-dev-shm-usage",  // The /dev/shm partition is too small in certain VM environments, causing Chrome to fail or crash (see http://crbug.com/715363). Use this flag to work-around this issue (a temporary directory will always be used to create anonymous shared memory files).
          "--window-size=1920,1080",  // Sets the initial window size. Provided as string in the format "800,600".
        ],
      },
    }
  ],
```

10. Let's run ``yarn test`` and check if everything works fine.

11. Let's also install a plugin which allows us to run WebdriverIO commands synchronously.

`yarn add --dev @wdio/sync`

Additional info to read: https://webdriver.io/docs/sync-vs-async/

12. Try to run test again with ``yarn test`` and let's discuss the difference between running the tests synchronously and asynchronously.

Congrats! Set up is done!


### Cucumber extension configuration:

You will need to have Cucumber extension for VS Code. It will make life much easier with a possibility to drill inside of the steps implementation from the feature files.

Find a link to the documentation:
https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete

In the root of the project (`/qa-auto-bootcamp`) create (if absent) `.vscode` folder with settings.json file or just run:

`` mkdir .vscode && touch .vscode/settings.json``

And the following content to it

```
{
"cucumberautocomplete.steps": [
"workshops/bdd-gherkin-cucumber/bdd-framework-setup/features/step-definitions/*.ts"
],
"cucumberautocomplete.strictGherkinCompletion": true,
"compile-hero.disable-compile-files-on-did-save-code": false
}
```
