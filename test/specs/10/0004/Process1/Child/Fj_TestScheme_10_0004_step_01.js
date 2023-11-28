const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0004-1");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_10_0004_step_01: 審査 examination status of application must be「銀行審査」Bank examination", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_Admin();

    // Screenshot variables
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const tablist = await $(
      ".//*[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print noLeftSpacing']"
    );

    // Go to Object Manager
    await browser.url(test_data.testData.examination_objectManager_url);
    await browser.pause(20000);

    // Object manager style height modification
    await $(".//*[@id='brandBand_3']").$(function () {
      this.style.height = this.offsetHeight * 2 + "px";
    });
    await browser.pause(5000);

    // Screenshot Object Manager
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tablist],
        fullPageScrollTimeout: 1000,
      }
    );
    await browser.pause(5000);

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0004_01 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Relogin as tantou1
    await parent.Relogin_as_tantou1();

    // Go to EXM related record
    await parent.Open_EXM_Record();

    await browser.execute("document.body.style.zoom='80%'");

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
