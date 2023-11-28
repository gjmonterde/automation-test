const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0011_step_20: The お借入内容調整画面loan adjustment screen must " +
      "be displayed in the 返済シミュレーションRepayment Simulation section",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "20";

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
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 7000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
