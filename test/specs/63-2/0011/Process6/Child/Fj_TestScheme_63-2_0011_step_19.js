const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0011-6");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_19: The お借入内容調整画面 loan adjustment screen must be displayed in 返済シミュレーション Repayment Simulation section", async () => {
    const stepNum = "19"; // ★ 新環境適用' New Env Implementation

    // Go to APP record
    await parent.Open_Record_URL();

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

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        disableCSSAnimation: true,
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
