const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0006-2");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0006_step_14: The result of the check (the check method is " +
      "shown in parentheses) is indicated by the traffic light icon",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "14";

      // Go to EXS record detail screen
      await parent.Go_To_EXS();

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
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // logout
      await parent.Logout();

      // Login as admin
      await parent.Login_as_admin();

      // Open dev console
      await util.Developer_Console(
        test_data.testData.query_0006_14 +
          "'" +
          test_data.testData.exs_name +
          "'"
      );

      // Screenshot - developer console
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-2"
      );

      // Go to object manager - ネガ判定フラグ
      await browser.url(
        user_info.userInformation.var_sf_sfurl + test_data.testData.httpurl08
      );
      await browser.pause(20000);

      // Screenshot - object manager
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-3"
      );

      // logout
      await parent.Logout();
    }
  );
}
