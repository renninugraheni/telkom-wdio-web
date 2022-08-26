# Telkom-wdio-web
Telkom-wdio-web is a project to answer the pre-test SQAE. I hope this becomes a consideration to be accepted as a SQAE at Telkom.
# Requirements
- Node version 8 or higher but lower than version 15.14.0
- A preconfigured Selenium Grid, preinstalled browser driver or cloud provider account.

This project works fine with NPM. To keep things simple we use yarn in this guide, but feel free to replace this with NPM if that is what you are using.

Also this project doesn't cover setting up a proper test environment. You need to download specific browser driver yourself and run the prior starting tests.
# Quick Start
1.  Download the latest stable release here or clone the git repo.

2. Then:

Copy the files to your project into a directory.

3. Install the dependencies (npm install).
# How to run the test
Start the local web server:

$ npm run test

# Runing single features
Sometimes it's useful to only execute a single feature file, to do so use the following command:

$ npm run test --spec ./test/features/select.feature

# Configurations
To configure your tests, checkout the wdio.conf.js file in your test directory. 
