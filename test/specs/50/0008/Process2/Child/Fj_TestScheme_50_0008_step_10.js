const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0008-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0008_step_10: The 反社照会 anti-company inquiry status changes to 「実施済OK」Performed OK.", async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation

    // Login as shinsa1 user
    await parent.Login_As_Shinsa1_User();

    // Go to ASC record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.asc_obj,
      test_data.testData.asc_id
    );

    // Edit 反社照会結果 field
    await $(
      ".//button[@title='" + test_data.testData.asc_results_label + " の編集']"
    ).waitForDisplayed({
      timeout: 10000,
    });
    await browser.pause(5000);
    await $(
      ".//button[@title='" + test_data.testData.asc_results_label + " の編集']"
    ).click();
    await browser.pause(5000);

    await $(
      "//div[@class='slds-clearfix detail-panel-root slds-card footer-visible']//records-form-footer[@class='slds-docked-form-footer stickyFooter']"
    ).$(function () {
      this.style.position = "static";
    });
    await browser.pause(3000);

    // Set value for 反社照会結果 field
    await $("label=" + test_data.testData.asc_results_label).click();
    await browser.pause(5000);

    const anti_social_inquiry_results_val = await $(
      "//span[@title='" + test_data.testData.asc_results_value + "']"
    );
    await anti_social_inquiry_results_val.click();
    await browser.pause(5000);

    // Screenshot
    const edit_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const edit_headerBar = await $(".//header[@id='oneHeader']");
    const edit_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const edit_footer = await $(
      "records-form-footer.slds-docked-form-footer stickyFooter"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideElements: [edit_footer],
        hideAfterFirstScroll: [edit_highlights, edit_headerBar, edit_tabheader],
      }
    );
    await browser.pause(5000);

    // Click 保存 button
    await browser.pause(5000);
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(20000);

    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot
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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    await browser.pause(5000);

    // Click 確認 button
    await $(
      "//button[@name='" + test_data.testData.anti_social_accept_btn_api + "']"
    ).click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    await $(".//button[@type='" + test_data.testData.submit_btn + "']").click();

    // Toast message screenshot
    await util.Toast_Message();
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-4"
    );

    // Refresh browser
    browser.refresh();
    await browser.pause(10000);

    // Take screenshot
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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to APP detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);

    // Take screenshot
    const app_headerBar = await $(".//header[@id='oneHeader']");
    const app_tabheader = await $(
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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [app_headerBar, app_tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
