const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-7");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_43: The 子画面 sub screen is displayed and you can cancel by entering the approval comment.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "43";

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

    // Click キャンセル button
    const external_scoring_cancel_btn = await $(
      "//button[@name='" +
        test_data.testData.external_scoring_cancel_btn_api +
        "']"
    );
    await external_scoring_cancel_btn.waitForClickable({ timeout: 10000 });
    await external_scoring_cancel_btn.click();
    await browser.pause(5000);

    // Select withdrawal reason
    const withdrawal_reason_lbl = await $(
      ".//label[contains(.,'" +
        test_data.testData.exs_withdrawal_reason_lbl +
        "')]"
    );
    await withdrawal_reason_lbl.waitForClickable({ timeout: 10000 });
    await withdrawal_reason_lbl.click();
    await browser.pause(5000);

    const withdrawal_val = await $(
      ".//span[@title='" + test_data.testData.exs_withdrawal_val + "']"
    );
    await withdrawal_val.waitForClickable({ timeout: 10000 });
    await withdrawal_val.click();
    await browser.pause(5000);

    // Input cancel comment
    // ★ 新環境適用' New Env Implementation
    await $(
      "//textarea[@id=//label[normalize-space(.)='" +
        test_data.testData.exs_cancel_comment_lbl +
        "']/@for]"
    ).setValue(test_data.testData.exs_cancelation_comment_value);

    // Deselect the hover/selected fields
    await util.Deselect_fields(2); // ★ 新環境適用' New Env Implementation

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

    // Click OK button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const submit_btn = await footer_modal.$(
      ".//button[@type='" + test_data.testData.submit_type_btn + "')]"
    );
    await submit_btn.waitForClickable({ timeout: 10000 });
    await submit_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

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

    // Go to APP record
    await parent.Open_APP_Record();

    const headerBar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
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
        "-5",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
