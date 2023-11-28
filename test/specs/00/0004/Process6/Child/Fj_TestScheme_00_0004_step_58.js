const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-6");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_00_0004_step_58: The bank award status should be Enforced OK and" +
      "The interest rate of the application shall be the applicable interest rate",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "58";

      // Go to 3rd INI related record
      // ★ 新環境適用' New Env Implementation
      await parent.Open_INI_3rd_Record();

      // Press approve modal button
      await browser.pause(5000);
      await $(
        ".//button[@name='" +
          test_data.testData.api_initialcheck_accept_btn +
          "']"
      ).click();
      await browser.pause(5000);

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-1"
      );
      await browser.pause(5000);

      // Press approve button in modal
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//button[@type='" + test_data.testData.submit_type_btn + "']"
      ).click();

      // To determine if the toast shows up
      // ★ 新環境適用' New Env Implementation
      await util.Toast_Message();

      // Screenshot - toast message
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2"
      );
      await browser.pause(1000);
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot - updated page without toast message
      const headerBar_ini = await $(".//header[@id='oneHeader']");
      const tabheader_ini = await $(
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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar_ini, tabheader_ini],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);

      // Go to EXM related record
      // ★ 新環境適用' New Env Implementation
      await parent.Go_to_EXM();

      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      ); // ★ 新環境適用' New Env Implementation
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      ); // ★ 新環境適用' New Env Implementation

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
      await browser.pause(2000);

      // Go to APP record detail screen
      // ★ 新環境適用' New Env Implementation
      await parent.Go_to_APP();

      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
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
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-5",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  );
}
