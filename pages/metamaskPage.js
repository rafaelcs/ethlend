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

	this.fillPasswordForm = function(passwordObj) {
		this.newPasswordField.sendKeys(passwordObj.passwordValue);
		this.confirmPasswordField.sendKeys(passwordObj.passwordValue);
		this.createButton.click();
	};
};

module.exports = MetamaskPage;
