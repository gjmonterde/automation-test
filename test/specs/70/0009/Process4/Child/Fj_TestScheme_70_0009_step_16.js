const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0009-4");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0009_step_16: The 申込 application status displayed on My Page is " +
      "「審査完了/各種書類ご提出」Review completed/Submission of various documents",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "16";

      if (test_data.testData.logged_status != "mypage") {
        // Login to MyPage
        await parent.Login_to_MyPage();
      }

      // Go to My Page Application record screen
      await parent.Go_To_APP(); // ★ 新環境適用' New Env Implementation

      // Screenshot - MyPage APP record
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-1"
      );

      // Login to Salesforce as tantou
      await parent.Login_as_tantou();

      // Go to App Record
      await parent.Go_to_SF_APP(); // ★ 新環境適用' New Env Implementation

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
          "-2",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Logout
      await parent.Logout();

      // Login to Salesforce as admin
      await parent.Login_as_admin();

      // Open dev console
      // ★ 新環境適用' New Env Implementation
      await util.Developer_Console(
        test_data.testData.query_0009_16 +
          "'" +
          test_data.testData.app_name +
          "'"
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
          "-3"
      );

      // Logout
      await parent.Logout();
    }
  );
}
