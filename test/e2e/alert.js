var config = require('../../nightwatch.conf.js');

module.exports = {
  'Assert if alert is visible': function(browser) {
      return browser
      .url('localhost:3000')
      .waitForElementVisible('body')
      .assert.title('Traffic Hourly Distribution')
      .click('input[id="enable_1"]')
      .setValue('#trafficValue_1', '10')
      .click('input[id="disable_1"]')
      .verify.visible(".alert-danger")
      .saveScreenshot(config.imgpath(browser) + 'errorShown.png')
      .end();
  }
};
