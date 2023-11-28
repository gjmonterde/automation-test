const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0012_step_20: The 実行依頼データ execution submission data " +
      "for the record types other than those identified above has not been created",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "20";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "uic") {
        // Login to org - tantou1
        await parent.Login_as_tantou();
      }

      // Go to App Record
      await parent.Open_APP_Record();

      // Open 案件詳細 tab
      await parent.Switch_App_Tab(2);

      // Screenshot
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
