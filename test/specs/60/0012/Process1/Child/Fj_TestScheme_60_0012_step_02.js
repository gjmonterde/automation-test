const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_60_0012-1");

export default function suite() {
  it(
    "Fj_TestScheme_60_0012_step_02: One 実行結果データ execution result data linked to the application has been created・" +
      "The コールアウトタイプ callout type of the 実行結果データ execution result data must be「カードローン実行処理」Card Loan Execution Process",
    async () => {
      const stepNum = "2"; // ★ 新環境適用' New Env Implementation

      // Go to App Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      await util.Application_Record_Scrolling(2);

      // Save App Record Page Full Screen - Q2 Origination
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 5000,
        }
      );
      await browser.pause(5000);

      // Go to Exec Result Record
      await parent.Open_EXEC_Record();

      // Screenshot - 実行結果データ record
      const exec_highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const exec_headerBar = await $(".//header[@id='oneHeader']");
      const exec_tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [
            exec_headerBar,
            exec_tabheader,
            exec_highlights,
          ],
        }
      );
      await browser.pause(5000);
    }
  );
}
