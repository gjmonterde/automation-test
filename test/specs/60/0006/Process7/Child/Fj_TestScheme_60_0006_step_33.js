const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0006-7");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0006_step_33: 審査決済 Examination Approval Status is changed to「承認済OK」", async () => {
    const stepNum = "33"; // ★ 新環境適用' New Env Implementation

    // Go to EXS record detail screen
    await parent.Open_Salesforce_EXS_Record();

    const headerBar_exs1 = await $(".//header[@id='oneHeader']");
    const tabheader_exs1 = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_exs1, tabheader_exs1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Click 承認 button
    const external_scoring_approve_btn = await $(
      "//button[@name='" +
        test_data.testData.external_scoring_approve_btn_api +
        "']"
    );
    await external_scoring_approve_btn.waitForClickable({ timeout: 10000 });
    await external_scoring_approve_btn.click();
    await browser.pause(5000);

    // Input approval comment
    await $(
      "//textarea[@id=//label[normalize-space(.)='" +
        test_data.testData.approval_comment_input_lbl +
        "']/@for]"
    ).setValue(test_data.testData.approval_comment_value);
    await browser.pause(5000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(2);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );

    // Click 承認 button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.approve_btn +
        "')]"
    );
    await approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await approve_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_exs = await $(".//header[@id='oneHeader']");
    const tabheader_exs = await $(
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
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_exs, tabheader_exs],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
