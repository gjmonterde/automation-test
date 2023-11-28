const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0004_step_32: Bank examination status should be「実施済OK」Performed OK", async () => {
    const stepNum = "32"; // ★ 新環境適用' New Env Implementation

    // Go to INI Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini_id3
    );

    // Click 承認
    const acceptbtn = await $(
      ".//button[@name='" +
        test_data.testData.api_initialcheck_accept_btn +
        "']"
    );
    await acceptbtn.waitForClickable({ timeout: 10000 });
    await acceptbtn.click();
    await browser.pause(8000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );

    // Confirm
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();

    // Toast message screenshot
    await util.Toast_Message();

    await browser.pause(2000);
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Go to EXM page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Scroll into view 外信照会
    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.bankexam_header);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

    // Screenshot
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
