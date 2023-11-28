const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-13");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0008_step_63: Values must be set for毎月の返済額 monthly payments, 増額返済額incremental payments, " +
      "返済日due date, 第１回返済日first payment date, and 最終期限 final due date",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "63";

      if (test_data.testData.logged_status != "uic") {
        // Login to Salesforce
        await parent.Login_to_Salesforce();
      }
      // Go to AGR record
      await parent.Go_to_AGR(); // ★ 新環境適用' New Env Implementation

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );
    }
  );
}
