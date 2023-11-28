const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0001-2");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_44: Check the data in application record", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "44";

    // Login as admin user
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // Go to Salesforce Developer Console
    // ★ 新環境適用' New Env Implementation
    await util.Developer_Console(
      test_data.testData.query_0001_44 + "'" + test_data.testData.app_name + "'"
    );
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Relogin as Tantou1
    await parent.Relogin_as_Tantou1();

    // Go to APP record detail screen
    await parent.Open_Salesforce_App_Record();

    // Switch to 告知画面 tab
    // ★ 新環境適用' New Env Implementation
    await util.Application_Record_Scrolling(3);

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
        "-2",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
