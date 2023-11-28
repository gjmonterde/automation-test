const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0001-2");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_31: A 取引先 new customer is created and linked to the offer.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "31";

    // Relogin as Tantou1
    await parent.Relogin_as_Tantou1();

    // Go to APP record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_Salesforce_App_Record();

    // Switch to 申込内容 tab
    // ★ 新環境適用' New Env Implementation
    await util.Application_Record_Scrolling(1);

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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // Open dev console
    // ★ 新環境適用' New Env Implementation
    await util.Developer_Console(
      test_data.testData.query_0001_31 +
        "'" +
        test_data.testData.account_name +
        "'"
    );

    // Screenshot - developer console
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Login to org - tantou1
    await parent.Relogin_as_Tantou1();

    // Go to Contact page
    // ★ 新環境適用' New Env Implementation
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // Go to user page
    // ★ 新環境適用' New Env Implementation
    await util.Users_Page();
    await $("a=" + test_data.testData.account_name).click();
    await browser.pause(5000);
    await browser.switchToParentFrame();
    await browser.pause(5000);

    await browser.execute("document.body.style.zoom='40%'");
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
