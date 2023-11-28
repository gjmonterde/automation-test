const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00.js"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0011-5");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0011_step_18: Theお借入内容調整画面 loan adjustment screen must be displayed in the　" +
      "返済シミュレーションセクション Repayment Simulation section",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "18";

      // Login
      await parent.Login_to_Salesforce();

      // Go to app tab 3
      await parent.Go_to_App3();

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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 5000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );
    }
  );
}
