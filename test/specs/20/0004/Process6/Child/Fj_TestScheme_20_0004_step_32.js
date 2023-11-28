const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it('Fj_TestScheme_20_0004_step_32: 審査.審査Examination.Examination status should be 「審査完了」"Examination Complete.".', async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "32";

    // Go to 銀行審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    // Click 承認
    await $(
      ".//button[@name='" +
        test_data.testData.api_initialcheck_accept_btn +
        "']"
    ).waitForClickable({ timeout: 5000 });
    await $(
      ".//button[@name='" +
        test_data.testData.api_initialcheck_accept_btn +
        "']"
    ).click();
    await browser.pause(6000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Confirm
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();
    await browser.pause(10000);

    // Toast message screenshot
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh browser
    browser.refresh();
    await browser.pause(5000);

    // Take screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 6000,
      }
    );

    // Go to 審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // ★ 新環境適用' New Env Implementation
    // Scroll to SEC related list
    await util.Scroll_to_related_list(test_data.testData.sec_header);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
