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
	this.amount = element.all(by.css('.rangeslider__fill')).get(0);
	this.monthlyInterestLabel = element.all(by.css('.rangeslider__fill')).get(1);
	this.setDataButton = element(by.css('.setdata-btn'));

	this.acceptTerms = function(passwordObj) {
		this.termsCheckbox.click();
		this.launchButton.click();
		basePage.isVisible(this.borrowButton), basePage.timeout.xxl;
	};
};

module.exports = EthlendPage;
