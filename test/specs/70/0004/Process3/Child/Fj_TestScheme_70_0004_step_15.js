const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0004_step_15: The status of the 審査情報連携 cooperation of examination information in the " +
      "bank examination shall be 「連携済み」Collaborated",
    async () => {
      const stepNum = "15"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "uic") {
        // login as tantou
        await parent.Login_as_tantou();
      }
      // Go to App Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      await util.Application_Record_Scrolling(2);

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
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to INI record
      await parent.Go_to_INI();

      // Screenshot
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
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
