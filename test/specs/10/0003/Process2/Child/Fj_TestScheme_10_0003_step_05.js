const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_10_0003-2");

export default async function suite() {
  it("Fj_TestScheme_10_0003_step_05: The 審査 examination status of the Application is「同一人照会」same person inquiry", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Go to EXM Record
    await parent.EXM_Scroll();

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Login as admin
    await parent.Login_as_Admin();

    // Configuration > Object Manager
    await browser.url(
      user_info.userInformation.var_sf_sfurl + test_data.testData.obj_manager
    );
    await browser.pause(10000);

    // Screenshot
    const headerBar5_1 = await $(".//header[@id='oneHeader']");
    const tablist5_1 = await $(
      ".//*[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print noLeftSpacing']"
    );
    await $(".//*[@id='brandBand_3']").$(function () {
      this.style.height = this.offsetHeight * 3 + "px";
    });
    await browser.pause(5000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar5_1, tablist5_1],
        fullPageScrollTimeout: 1000,
      }
    );

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0003_05 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
