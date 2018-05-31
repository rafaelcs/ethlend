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

	it('should import an existing DEN', function() {
		metamaskPage.importExistingDenButton.click();
		basePage.isVisible(metamaskPage.secretPhraseTextarea), basePage.timeout.xxl;
	});

	it('should restore account with secret phrase and set new password', function() {
		metamaskPage.secretPhraseTextarea.sendKeys(metamaskData.secretPhrase.phraseValue);
		metamaskPage.fillPasswordForm(metamaskData.newPassword);
		basePage.selectDropdownOption(metamaskPage.networkMenu, metamaskPage.networkList, metamaskData.networkMenu.networkValue);
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
		basePage.selectDropdownOption(ethlendPage.loanCurrencyDropdown, ethlendPage.loanCurrencyDropdownOptions, loanCurrencyData.currency.loanValue);
		basePage.selectDropdownOption(ethlendPage.collateralDropdown, ethlendPage.loanCurrencyDropdownOptions, loanCurrencyData.currency.collateralValue);
		ethlendPage.createButton.click();
	});

	it('should confirm transaction in metamask', function() {
		basePage.switchToTab('0');
		metamaskPage.transactionOption.click();
		metamaskPage.submitButton.click();
		basePage.isVisible(metamaskPage.copyIcon), basePage.timeout.xxl;
	});

	it('should set collateral amount in loan terms', function() {
		basePage.switchToTab('1');
		basePage.isVisible(ethlendPage.loanAmount), basePage.timeout.xxl;
		ethlendPage.loanAmount.sendKeys(loanCurrencyData.loan.loanAmountValue);
		basePage.isVisible(ethlendPage.amountSlider), basePage.timeout.xxl;
	});
});