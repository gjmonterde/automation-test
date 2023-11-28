const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0003-2");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_05: The 処理 processing status of the application is 'processing inquiry for the same person'", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Go to APP record
    await parent.Open_Salesforce_App_Record();

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
