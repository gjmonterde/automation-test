const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0004-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0004_step_11: Bank examination (3) is prepared", async () => {
    const stepNum = "11"; // ★ 新環境適用' New Env Implementation

    // Go to EXM record
    await parent.Open_Record_URL(
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Scroll to view
    await util.Scroll_to_related_list(test_data.testData.sec_header);

    await browser.execute("document.body.style.zoom='80%'");

    const headerBar_exm = await $(".//header[@id='oneHeader']");
    const tabheader_exm = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_exm = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_exm, tabheader_exm, highlights_exm],
      }
    );

    // Go to INI(3) record
    await parent.Open_Record_URL(
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    const headerBar_ini = await $(".//header[@id='oneHeader']");
    const tabheader_ini = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_ini, tabheader_ini],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Login to org as Admin for querying
    await parent.Login_As_Admin();

    // Go to Salesforce Developer Console
    // Make sure to login as admin
    await util.Developer_Console(
      test_data.testData.query_0004_11 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);
  });
}
