const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-7");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_00_0006_step_35: 審査決裁Examination approval  status is changed to「承認済OK」and" +
      "申込.期間 Application.term value has not changed",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "35";

      // Login as shinsa
      await parent.Login_as_Shinsa1();

      // Go to EXS record detail screen
      await parent.Open_EXS_Record(); // ★ 新環境適用' New Env Implementation

      // Click 承認 button
      const external_scoring_approve_btn = await $(
        "//button[@name='" +
          test_data.testData.external_scoring_approve_btn_api +
          "']"
      );
      await external_scoring_approve_btn.waitForClickable({ timeout: 8000 });
      await external_scoring_approve_btn.click();
      await browser.pause(5000);

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1"
      );

      // Input approval comment
      // ★ 新環境適用' New Env Implementation
      await $(
        "//textarea[@id=//label[normalize-space(.)='" +
          test_data.testData.exs_approval_comment_input_label +
          "']/@for]"
      ).setValue(test_data.testData.exs_approval_comment_value);
      await browser.pause(5000);

      // Click 承認 button
      const footer_modal = await $("//footer[@class='slds-modal__footer']");
      const approve_confirm_btn = await footer_modal.$(
        ".//button[contains(text(), '" + test_data.testData.approve_btn + "')]"
      );
      await approve_confirm_btn.waitForClickable({ timeout: 5000 });
      await approve_confirm_btn.click();

      await browser.pause(10000);

      // To determine if the toast shows up
      await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

      // Screenshot - with toast message
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

      // Screenshot - updated page without toast message
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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

      // Go to APP record detail screen
      await parent.Open_APP_Record(1);

      const headerBar_app_details = await $(".//header[@id='oneHeader']");
      const tabheader_app_details = await $(
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
          hideAfterFirstScroll: [headerBar_app_details, tabheader_app_details],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  );
}
