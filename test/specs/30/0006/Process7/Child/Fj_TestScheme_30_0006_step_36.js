const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0006-7");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0006_step_36: 申込.融資額 must have the 審査決裁.申込金額（単位：万円）*1000", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "36";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "admin") {
      // Login as shinsa
      await parent.Login_as_admin();
    }

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0006_36 + "'" + test_data.testData.exs_name + "'"
    );

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // Relogin as Shinsa1
    await parent.Login_as_Shinsa1();

    // Go to APP record detail screen
    await parent.Open_Salesforce_APP_Record();

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

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
