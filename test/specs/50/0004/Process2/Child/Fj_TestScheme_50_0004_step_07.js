const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");

export default async function suite() {
  it("Fj_TestScheme_50_0004_step_07: Theクレジットカード情報連携 credit card information linkage status becomes 「連携済み」 Linked", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

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

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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