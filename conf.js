'use strict';

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

	directConnect: true,
	
	specs: ['specs/*.js'],
	framework: 'jasmine2',

	onPrepare: function(){
		browser.manage().timeouts().implicitlyWait(5000);
		browser.ignoreSynchronization = true;
		browser.manage().window().setSize(1600, 1000);

		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath: 'Report_HTML/'
		}));

		jasmine.getEnv().addReporter(new SpecReporter({
			displayFailuresSummary: true,
			displayFailedSpec: true,
			displayPendingSpec: true,
			displaySuiteNumber: true,
			displaySpecDuration: true,
			colors: {
				success: 'green',
				failure: 'red',
				pending: 'yellow'
			},
			prefixes: {
				success: '✓ ',
				failure: '✗ ',
				pending: '* '
			}
		}));
	},

	jasmineNodeOpts: {
		onComplete: null,
		isVerbose: true,
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 999999,
		print: function () { }
	},

	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'--disable-infobars',
				'--privileged',
				'--load-extension=' + './metamask'
			],
			prefs: {
				// disable chrome's annoying password manager
				'profile.password_manager_enabled': false,
				'credentials_enable_service': false,
				'password_manager_enabled': false
			}
		}
	},

	params: {
		metamaskExtension: 'chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html',
		ethlendApp: 'https://app.ethlend.io/'
	}
};
