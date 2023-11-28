const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0006-7");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0006_step_36: 申込.融資額 Application. Loan amount must have the following values: " +
      "審査決裁.申込金額（単位：万円）* 1000",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "36";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "shinsa") {
        // Login as shinsa
        await parent.Login_as_shinsa();
      }

      // Go to App Record
      await parent.Go_to_APP();

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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Logout
      await parent.Logout();

      // Login as admin
      await parent.Login_as_Admin();

      // Open dev console
      await util.Developer_Console(
        test_data.testData.query_0006_36 +
          "'" +
          test_data.testData.exs_name +
          "'"
      );

      // Screenshot - developer console
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1"
      );

      // Logout
      await parent.Logout();
    }
  );
}
