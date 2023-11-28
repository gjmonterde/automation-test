const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0004-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0004_step_01: Application review status must be「銀行審査」Bank Examination", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Go to EXM page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Scroll into view 外信照会
    await util.Scroll_to_related_list(test_data.testData.bankexam_header);

    await browser.execute("document.body.style.zoom='80%'");

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
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Logout
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);

    // Login as admin
    await parent.Login_as_Admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0004_01 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );

    // Configuration > Object Manager
    await browser.url(
      user_info.userInformation.var_sf_sfurl + test_data.testData.httpurl06
    );
    await browser.pause(20000);

    // Screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tablist2 = await $(
      ".//*[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print noLeftSpacing']"
    );
    await $(".//*[@id='brandBand_3']").$(function () {
      this.style.height = this.offsetHeight * 3 + "px";
    });
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tablist2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Logout
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);
  });
}
