'use strict';

const BasePage = require('./basePage.js');

const EthlendPage = function () {

	const basePage = new BasePage();

	this.termsCheckbox = element(by.className('checkbox'));
	this.launchButton = element(by.css('.launchBtn'));
	this.borrowButton = element.all(by.className('borrow-btn')).first();
	this.loanCurrencyDropdown = element.all(by.css('.ui.selection.dropdown')).get(0);
	this.collateralDropdown = element.all(by.css('.ui.selection.dropdown')).get(1);
	this.loanCurrencyDropdownOptions = element.all(by.css('.menu>.item'));
	this.createButton = element(by.className('create-button'));
	
	//SET LOAN TERMS locators

	this.loanAmount = element(by.css('input[type="number"]'));
	this.amountSlider = element.all(by.className('rangeslider__handle')).first();

	this.acceptTerms = function(passwordObj) {
		this.termsCheckbox.click();
		this.launchButton.click();
		basePage.isVisible(this.borrowButton), basePage.timeout.xxl;
	};
};

module.exports = EthlendPage;
