const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-12.09");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_63: The 返済シミュレーション画面 repayment simulation screen is deactivated", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "63";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }
    // ★ 新環境適用' New Env Implementation
    // Go to App record
    await parent.Go_to_APP(1);

    // Screenshot - Application 告知画面 tab
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
