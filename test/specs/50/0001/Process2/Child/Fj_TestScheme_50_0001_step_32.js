const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0001_step_32: No new 「取引先」business partner,「取引先責任者」business partner, or user is created", async () => {
    const stepNum = "32"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Open_Salesforce_App_Record();

    // Switch to 申込内容 tab
    await util.Application_Record_Scrolling(1);

    // Take screenshot
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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

    // Login as admin
    await parent.Login_as_Admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0001_32 +
        "'" +
        test_data.testData.account_name +
        "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Login to org - tantou1
    await parent.Login_as_Tantou1();

    // Go to Contact page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.contact_obj,
      test_data.testData.contact_id
    );

    // Screenshot - Contact record page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Users Page
    await util.Users_Page();
    
    await $("a=" + test_data.testData.account_name).click();
    await browser.pause(5000);
    await browser.switchToParentFrame();
    await browser.pause(5000);

    await browser.execute("document.body.style.zoom='40%'");
    await browser.pause(5000);

    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
