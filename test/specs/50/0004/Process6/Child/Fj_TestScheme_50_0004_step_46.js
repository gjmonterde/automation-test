const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0004-6");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0004_step_46: 申込Application's 利率interest rate＝is 銀行審査.適用利率 bank examination.applicable interest rate.", async () => {
    const stepNum = "46"; // ★ 新環境適用' New Env Implementation

    // Login to org as tantou1
    await parent.Login_User_In_Charge();

    // Go to 1st tab
    await util.Application_Record_Scrolling(1);

    // Take screenshot
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

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0004_46 + "'" + test_data.testData.app_name + "'"
    );

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );

    // Login to org as tantou1
    await parent.Login_User_In_Charge();

    // Go to 審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Go to 銀行審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini_id3
    );

    // Take screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
