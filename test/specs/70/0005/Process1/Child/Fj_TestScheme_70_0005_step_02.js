const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0005_step_02: The 処理 processing status of the application must " +
      "be 「外信情報取得処理中」Processing to acquire foreign information",
    async () => {
      const stepNum = "2"; // ★ 新環境適用' New Env Implementation

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
          test_data.testData.tab0005 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Go to EXM page
      await parent.Open_EXM_SF_Record();

      // Scroll into view 外信照会
      // ★ 新環境適用' New Env Implementation
      await util.Scroll_to_related_list(test_data.testData.bankexam_header);

      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0005 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );

      // logout
      await parent.Logout();

      // Login as admin
      await parent.Login_as_admin();

      // Open dev console
      await util.Developer_Console(
        test_data.testData.query_0005_02 +
          "'" +
          test_data.testData.app_name +
          "'"
      );

      // Screenshot - developer console
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0005 +
          "_" +
          stepNum +
          "-1"
      );

      // logout
      await parent.Logout();
    }
  );
}
