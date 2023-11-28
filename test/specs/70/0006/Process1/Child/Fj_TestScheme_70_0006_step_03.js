const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0006-1");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_70_0006_step_03: The snapshot entry in the application has a value 申込.利率(銀行審査)＝利率", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    // Go to App Record
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    await util.Application_Record_Scrolling(3);

    // Screenshot
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // logout
    await parent.Logout();

    // Login as admin
    await parent.Login_as_admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0006_03 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // logout
    await parent.Logout();
  });
}
