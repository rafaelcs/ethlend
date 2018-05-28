'use strict';

const BasePage = require('./basePage.js');

const LoginPage = function () {

	const basePage = new BasePage();

	// login form locators
	this.usernameField = element(by.name('username'));
	this.passwordField = element(by.name('password'));
	this.loginButton = element(by.className('auth0-lock-submit'));
	// search bar locator (after login)
	this.searchBar = element(by.id('search-bar'));
	this.logoutButton = element(by.css('.gpwIDI > div:nth-child(2) > button:nth-child(2)'));

	this.fillLoginForm = function (loginObj) {
		this.usernameField.sendKeys(loginObj.usernameValue);
		this.passwordField.sendKeys(loginObj.passwordValue);
		this.loginButton.click();
		basePage.isVisible(this.searchBar), basePage.timeout.xxl;
	};
};

module.exports = LoginPage;
