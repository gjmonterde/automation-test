const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0006_step_35: 申込.利率 must have the value of 審査決裁.適用利率", async () => {
    const stepNum = "35"; // ★ 新環境適用' New Env Implementation

    // Switch to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    const headerBar_app_announce = await $(".//header[@id='oneHeader']");
    const tabheader_app_announce = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_app_announce, tabheader_app_announce],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
