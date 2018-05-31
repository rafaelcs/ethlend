'use strict';

const BasePage = function () {

	const EC = protractor.ExpectedConditions;

	this.visit = function (url) {
		browser.get(url);
		browser.sleep(3000);
	};

	this.isVisible = function (locator) {
		return browser.wait(EC.visibilityOf(locator));
	};

	this.isNotVisible = function (locator) {
		return browser.wait(EC.invisibilityOf(locator));
	};

	this.isClickable = function (locator) {
		return browser.wait(EC.elementToBeClickable(locator));
	};

	this.assertContain = function(locator, term) {
		expect(locator.getText()).toContain(term);
	};

	this.scrollTo = function (locator) {
		browser.executeScript('arguments[0].scrollIntoView();', locator.getWebElement());
	};

	this.timeout = {
		'xxl': 20000
	};

	this.switchToTab = function (tabIndex) {
		browser.getAllWindowHandles().then(function (handles) {
			browser.switchTo().window(handles[tabIndex]);
		});
	};

	this.selectDropdownOption = function(dropdownElem, optionsListElem, optionObj) {
		dropdownElem.click();
		browser.sleep(1000);
		optionsListElem.filter(function(elem, index) {
			return elem.getText().then(function(text) {
				return text === optionObj;
			});
		}).first().click();
	};
};

module.exports = BasePage;