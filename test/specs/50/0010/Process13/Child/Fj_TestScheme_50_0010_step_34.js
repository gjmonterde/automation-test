const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0010_step_34: 実行方法 field value should be 伝票出力", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    const app_headerBar = await $(".//header[@id='oneHeader']");
    const app_tabheader = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [app_headerBar, app_tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
