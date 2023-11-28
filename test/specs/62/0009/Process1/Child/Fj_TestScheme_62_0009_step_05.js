const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0009-1");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0009_step_05: The value of the 審査決裁.審査決裁 " +
      "Examination approval.Examination approval  Status is copied to the審査決裁  " +
      "Examination approval  Status",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "5";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "uic") {
        // Login as tantou
        await parent.Login_as_tantou();
      }

      // Go to CRE record detail screen
      await parent.Go_to_CRE();

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
          test_data.testData.tab0009 +
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
