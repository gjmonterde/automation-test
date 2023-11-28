const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-2");
const test_data = require("../../../../../test_data/test_info_63-1");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_34: 処理 processing status must be「本人確認書類提出待ち」", async () => {
    const stepNum = "34"; // ★ 新環境適用' New Env Implementation

    // Relogin as Tantou1
    await parent.Relogin_as_Tantou1();

    // Go to APP record detail screen
    await parent.Open_Salesforce_App_Record();

    const headerBar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
