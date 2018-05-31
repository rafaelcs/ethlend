# ETHLend automation
This project is an example of how to create loan requests in ETHLend app

## Project Description:
* Project setup with Protractor version 5.2.0.
* Makes use of Page Objects.
* Written in JavaScript
* The functions and locators for each page of the application are in `./pages`.
* Specs scripts are in the `./specs`.
* Mock data (eg usernames and pws) are in `./data` directory.

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* `npm install` to install the project dependencies
* `npm run webdriver-update` to install selenium & borwser specific drivers

## Run tests:
* `npm run tests` to run tests using Chrome browser with MetaMask.

## Followed approach:

* The approach followed here was to create a password to create a new account. From this new created account, the secret phrase and the hexadecimal number of the account were stored.

* The difficulty encountered in this approach was to maintain the same hexadecimal number for each test performed and each new install of the metamask extension, so this issue was solved by creating an account, saving the hexadecimal number in an object and using it whenever the test is performed , opening the browser and installing the extension from scratch. In this way, we can always retrieve the account using the stored secret phrase, with all received ETHs