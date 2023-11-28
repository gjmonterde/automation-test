const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0008-1");

export default function suite() {
  it("Fj_TestScheme_20_0008_step_01: 反社照会不要 No need for anti-social inquiry is checked off", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "1";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_as_shinsa();
    }

    // Go to App Record
    await parent.Go_to_APP();

    // Look for the 反社照会不要 Antisocial inquiries not required and it should be unchecked
    // Save App Record Page Full Screen - Q2 Origination
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
