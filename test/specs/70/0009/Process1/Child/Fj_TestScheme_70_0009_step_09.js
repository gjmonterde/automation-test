const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0009-1");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0009_step_09: The value obtained from the 商品コードマスタproduct code master is " +
      "set in the 商品コード product code",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "9";

      if (test_data.testData.logged_status != "admin") {
        await parent.Login_as_admin();
      }

      // Open dev console
      // ★ 新環境適用' New Env Implementation
      await util.Developer_Console(
        test_data.testData.query_0009_09 + "'" + test_data.testData.pro_id + "'"
      );

      // Screenshot - developer console
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-2"
      );

      // logout
      await parent.Logout();

      // Login as tantou
      await parent.Login_as_tantou();

      // Go to CRE record detail screen
      await parent.Go_To_CRE(); // ★ 新環境適用' New Env Implementation

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to PC Record
      await parent.Go_To_PCMaster(); // ★ 新環境適用' New Env Implementation

      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );
    }
  );
}