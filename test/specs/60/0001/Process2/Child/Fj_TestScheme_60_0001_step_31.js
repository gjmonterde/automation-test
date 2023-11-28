const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_60_0001_step_31: No new 「取引先」business partner,「取引先責任者」business partner, or user is created", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Open_App_Record();

    // Go to 申込内容 tab
    await util.Application_Record_Scrolling(1);

    // Screenshot - Application 申込内容 tab
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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Login to org - admin
    await parent.Login_as_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query1_0001_31 +
        test_data.testData.email +
        test_data.testData.query2_0001_31 +
        test_data.testData.birth_date
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Login to org - tantou1
    await parent.Login_as_Tantou1();

    // Go to Account detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Take screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, highlights, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);

    // Go to Contact page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.contact_obj,
      test_data.testData.contact_id
    );

    // Screenshot - Contact record page
    const highlights6 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar6 = await $(".//header[@id='oneHeader']");
    const tabheader6 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
        fullPageScrollTimeout: 3000,
      }
    );

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Users page
    await util.Users_Page();
    const actions = await $("a=" + test_data.testData.account_name + "");
    await actions.click();
    await browser.switchToParentFrame();
    await browser.execute("document.body.style.zoom='25%'");
    await browser.pause(5000);

    // Screenshot - Users
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
