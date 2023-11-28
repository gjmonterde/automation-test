const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0008-2");

export default function suite() {
  it("Fj_TestScheme_63-1_0008_step_07: The 反社照会 anti-social inquiry status changes to「実施済OK」", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Login as Shinsa1
    await parent.Login_as_Shinsa1();

    // Go to ASC Record
    await parent.Open_ASC_Record();

    const highlights_asc = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_asc = await $(".//header[@id='oneHeader']");
    const tabheader_asc = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [highlights_asc, headerBar_asc, tabheader_asc],
      }
    );
    await browser.pause(5000);

    // Go to APP Record
    await parent.Open_APP_Record();

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
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0008 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
