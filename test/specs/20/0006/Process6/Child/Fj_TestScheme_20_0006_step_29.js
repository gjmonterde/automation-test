const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0006_step_29: Approval via 承認 button", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "29";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_As_Shinsa1_User();

      // Go to EXS record
      await parent.Open_Salesforce_EXS_Record();
    }

    // Click 承認 button
    const external_scoring_approve_btn = await $(
      "//button[@name='" +
        test_data.testData.external_scoring_approve_btn_api +
        "']"
    );
    await external_scoring_approve_btn.waitForClickable({ timeout: 8000 });
    await external_scoring_approve_btn.click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // Input approval comment
    await $(
      "//textarea[@id=//label[normalize-space(.)='" +
        test_data.testData.approval_comment_input_label +
        "']/@for]"
    ).setValue(test_data.testData.approval_comment_value);
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );

    await browser.pause(5000);
    const footer_modal = await $("//footer[@class='slds-modal__footer']");

    // Click 承認 button
    const approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.approve_btn + "')]"
    );
    await approve_confirm_btn.waitForClickable({ timeout: 5000 });
    await approve_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );

    // Refresh
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
    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
