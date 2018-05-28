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

	this.acceptTerms = function(passwordObj) {
		this.termsCheckbox.click();
		this.launchButton.click();
		basePage.isVisible(this.borrowButton), basePage.timeout.xxl;
	};

	this.selectDropdownOption = function(dropdownOption, optionObj) {
		dropdownOption.click();
		this.loanCurrencyDropdownOptions.filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text === optionObj;
			});
		}).first().click();
	};
};

module.exports = EthlendPage;
