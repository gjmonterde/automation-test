const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0007-5");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0007_step_35: Check values for Application's 融資額＝保証審査.最終承認金額," +
      "期間＝保証審査.最終融資期間, Application's 利率＝保証審査.適用利率",
    async () => {
      const stepNum = "35"; // ★ 新環境適用' New Env Implementation

      // Go to its related 保証審査 Detail Screen
      await util.Open_SF_Record_URL(
        1,
        user_info.object.gua_obj,
        test_data.testData.gua_id
      );

      // Take screenshot 保証審査 detail page
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
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );

      // Go to 申込 detail page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      // Go to 1st tab
      await util.Application_Record_Scrolling(1);

      // Save App Record Page Full Screen - Q2 Origination
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

      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
        }
      );

      // Login as admin
      await parent.Login_Admin();

      // Go to Salesforce Developer Console
      await util.Developer_Console(
        test_data.testData.query_0007_35 +
          "'" +
          test_data.testData.app_name +
          "'"
      );

      // Take screenshot
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-3"
      );
    }
  );
}
