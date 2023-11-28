const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-7");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_36: 審査決済 Examination Approval Status is changed to「承認済OK」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "36";

    // Login as shinsa
    await parent.Login_as_Shinsa1();

    // Go to EXS record detail screen
    await parent.Open_EXS_Record();

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Click 謝絶 button
    const external_scoring_reject_btn = await $(
      "//button[@name='" +
        test_data.testData.external_scoring_reject_btn_api +
        "']"
    );
    await external_scoring_reject_btn.waitForClickable({ timeout: 10000 });
    await external_scoring_reject_btn.click();
    await browser.pause(5000);

    // Input rejection comment
    // ★ 新環境適用' New Env Implementation
    await $(
      "//textarea[@id=//label[normalize-space(.)='" +
        test_data.testData.exs_approval_comment_input_label +
        "']/@for]"
    ).setValue(test_data.testData.exs_rejection_comment_value);
    await browser.pause(5000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(2);

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );

    // Click 謝絶button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const reject_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.reject_confirm + "')]"
    );
    await reject_confirm_btn.waitForClickable({ timeout: 10000 });
    await reject_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(3000);
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
