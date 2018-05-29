'use strict';

const BasePage = require('./basePage.js');

const MetamaskPage = function () {

	const basePage = new BasePage();

	this.acceptButton = element(by.buttonText('Accept'));
	this.noticeBox = element(by.className('notice-box'));
	this.newPasswordField = element(by.id('password-box'));
	this.confirmPasswordField = element(by.id('password-box-confirm'));
	this.createButton = element(by.buttonText('Create'));
	this.vaulCreatedTextBox = element(by.className('twelve-word-phrase'));
	this.atrLink = element(by.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-center.flex-grow > div > div > p:nth-child(89) > strong > a'));
	this.copyWordsButton = element(by.buttonText('I\'ve copied it somewhere safe'));
	this.accountMenu = element(by.className('sandwich-expando'));
	this.logoutOption = element(by.css('#app-content > div > div:nth-child(3) > span > div > li:nth-child(3)'));

	this.fillPasswordForm = function(passwordObj) {
		this.newPasswordField.sendKeys(passwordObj.passwordValue);
		this.confirmPasswordField.sendKeys(passwordObj.passwordValue);
		this.createButton.click();
	};

	this.logOut = function(passwordObj) {
		this.accountMenu.click();
		basePage.isVisible(this.logoutOption), basePage.timeout.xxl;
		this.logoutOption.click();
		basePage.isVisible(this.newPasswordField), basePage.timeout.xxl;
	};
};

module.exports = MetamaskPage;
