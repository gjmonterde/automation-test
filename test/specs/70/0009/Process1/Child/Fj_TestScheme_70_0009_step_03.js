const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0009-1");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0009_step_03: The 処理 processing status of the application must be「結果通知確認待ち」 " +
      "Awaiting notification of results",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "3";

      if (test_data.testData.logged_status != "uic") {
        // login as tantou
        await parent.Login_as_tantou();
      }
      // Go to App Record
      await parent.Go_To_APP(); // ★ 新環境適用' New Env Implementation

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
    }
  );
}
