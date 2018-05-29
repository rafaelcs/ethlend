'use strict';

const BasePage = require('../pages/basePage.js');
const MetamaskPage = require('../pages/metamaskPage.js');
const EthlendPage = require('../pages/ethlendPage.js');

// Getting data values
const metamaskData = require('../data/metamaskData.js');
const loanCurrencyData = require('../data/loanCurrencyData.js');

describe('Create a loan request  >', function() {

	const metamaskPage = new MetamaskPage();
	const basePage = new BasePage();
	const ethlendPage = new EthlendPage();

	beforeAll(function() {
		basePage.visit(browser.params.metamaskExtension);
		basePage.switchToTab('0');
	});

	it('should open metamask and accept terms of use', function() {
		metamaskPage.acceptButton.click();
		basePage.isVisible(metamaskPage.noticeBox), basePage.timeout.xxl;
		basePage.scrollTo(metamaskPage.atrLink);
		metamaskPage.acceptButton.click();
		basePage.isVisible(metamaskPage.newPasswordField), basePage.timeout.xxl;
	});

	it('should create a new password', function() {
		metamaskPage.fillPasswordForm(metamaskData.newPassword);
		basePage.isVisible(metamaskPage.vaulCreatedTextBox), basePage.timeout.xxl;
	});

	it('should copy words to somewhere safe', function() {
		metamaskPage.copyWordsButton.click();
	});

	it('should open ethland app and accept terms', function() {
		basePage.switchToTab('1');
		basePage.visit(browser.params.ethlendApp);
		ethlendPage.acceptTerms();
	});

	it('should choose borrow option', function() {
		ethlendPage.borrowButton.click();
		basePage.isVisible(ethlendPage.loanCurrencyDropdown), basePage.timeout.xxl;
	});

	it('should select \'Ethereum (ETH)\' and \'LEND\' options', function() {
		ethlendPage.selectDropdownOption(ethlendPage.loanCurrencyDropdown, loanCurrencyData.currency.loanValue);
		ethlendPage.selectDropdownOption(ethlendPage.collateralDropdown, loanCurrencyData.currency.collateralValue);
		ethlendPage.createButton.click();
	});

	it('should logout from metamask', function() {
		basePage.switchToTab('0');
		metamaskPage.logOut();
	});
});