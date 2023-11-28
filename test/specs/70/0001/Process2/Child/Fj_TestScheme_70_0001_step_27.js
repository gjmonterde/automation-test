const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_70_0001-2"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_27: The application's 融資額 loan amount ＝ value inputed in Application form", async () => {
    const stepNum = "27"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Open_SF_App_Record();

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
