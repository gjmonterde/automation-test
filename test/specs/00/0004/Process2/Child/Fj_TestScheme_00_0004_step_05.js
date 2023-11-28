const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00.js");
const parent = require("../Parent/Fj_TestScheme_00_0004-2");

export default async function suite() {
  it("Fj_TestScheme_00_0004_step_05: The クレジットカード情報連携 credit card information linkage status becomes 「連携失敗」 Connection failed.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await parent.Login_as_tantou();
    }

    // Go to APP detail page
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_APP();

    // Go to 審査 detail page
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_EXM();

    // Go to 銀行審査 detail page
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_INI2();

    // Take 銀行審査 screenshot
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
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
