'use strict';

const BasePage = require('./basePage.js');

const MetamaskPage = function () {

	const basePage = new BasePage();

	this.acceptButton = element(by.buttonText('Accept'));
	this.noticeBox = element(by.className('notice-box'));
	this.newPasswordField = element(by.id('password-box'));
	this.confirmPasswordField = element(by.id('password-box-confirm'));
	this.okButton = element(by.buttonText('OK'));
	this.secretPhraseTextarea = element(by.css('textarea.twelve-word-phrase'));
	this.atrLink = element(by.css('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-center.flex-grow > div > div > p:nth-child(89) > strong > a'));
	this.copyWordsButton = element(by.buttonText('I\'ve copied it somewhere safe'));
	this.importExistingDenButton = element(by.css('p[class="pointer"]'));
	this.networkMenu = element(by.className('network-name'));
	this.networkList = element.all(by.className('dropdown-menu-item'));
	this.transactionOption = element(by.className('tx-list'));
	this.submitButton = element(by.css('.btn-green'));
	this.copyIcon = element.all(by.css('.fa')).first();

	this.fillPasswordForm = function(passwordObj) {
		this.newPasswordField.sendKeys(passwordObj.passwordValue);
		this.confirmPasswordField.sendKeys(passwordObj.passwordValue);
		this.okButton.click();
		basePage.isVisible(this.networkMenu), basePage.timeout.XXL;
	};
};

module.exports = MetamaskPage;
