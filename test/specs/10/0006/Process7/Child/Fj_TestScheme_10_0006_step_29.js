const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0006_step_29: 審査決裁 Examination approval status is changed to「承認済OK」", async () => {
    const stepNum = "29"; // ★ 新環境適用' New Env Implementation

    // Go to EXS record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );

    // Click 承認 button
    const external_scoring_approve_btn = await $(
      "//button[@name='" +
        test_data.testData.external_scoring_approve_btn_api +
        "']"
    );
    await external_scoring_approve_btn.waitForClickable({ timeout: 10000 });
    await external_scoring_approve_btn.click();
    await browser.pause(15000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // ★ 新環境適用' New Env Implementation
    // Input approval comment
    await $(
      "//textarea[@id=//label[normalize-space(.)='" +
        test_data.testData.approval_comment_input_label +
        "']/@for]"
    ).setValue(test_data.testData.approval_comment_value);
    await browser.pause(5000);

    // Click 承認 button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.approve_confirm +
        "')]"
    );
    await approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await approve_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
    await browser.refresh();
    await browser.pause(10000);

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
    await browser.pause(10000);

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
