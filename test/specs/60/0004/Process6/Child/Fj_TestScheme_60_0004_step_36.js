const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0004-6");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_60_0004_step_36: 審査.銀行審査 Examination. Bank examination status should be「実施済OK」Performed OK.", async () => {
    const stepNum = "36"; // ★ 新環境適用' New Env Implementation

    // Go to 銀行審査 detail page
    await parent.Open_INI3_Record();

    // Click 承認
    await $(
      ".//button[@name='" + test_data.testData.initial_check_accept_api + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(
      ".//button[@name='" + test_data.testData.initial_check_accept_api + "']"
    ).click();
    await browser.pause(10000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Confirm
    await $(".//button[@type='" + test_data.testData.submit_btn + "']").click();

    // Toast message screenshot
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

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
    await browser.pause(20000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
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
    await browser.pause(6000);

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // Go to 審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Take 審査 screenshot
    // Scroll to view - SEC related list
    await util.Scroll_to_related_list(test_data.testData.sec_header);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights],
        fullPageScrollTimeout: 6000,
      }
    );
    await browser.pause(6000);
  });
}
