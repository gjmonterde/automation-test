const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0004-6");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_10_0004_step_32: On the bank examination (3) detail screen, press the 「承認」“Approve ” button", async () => {
    const stepNum = "32"; // ★ 新環境適用' New Env Implementation

    // Login as tantou1
    await parent.Login_as_Tantou1();

    // Go to 3rd INI related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    // Press approve modal button
    await browser.pause(5000);
    await $(
      ".//button[@name='" + test_data.testData.ini3_approve_api + "']"
    ).click();
    await browser.pause(5000);

    // Screenshot Approve modal screen
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Press approve button in modal
    await $(
      ".//button[@class='slds-button slds-button_brand slds-button slds-button_destructive']"
    ).click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Screenshot for toast message - 10_0004_32-2
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
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(1000);
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot
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
    await browser.pause(20000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);

    // Go to 3rd INI related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    // Save 3rd INI Record Page Full Screen
    const full_headerBar = await $(".//header[@id='oneHeader']");
    const full_tabheader = await $(
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
    await browser.pause(20000);

    // Screenshot 3rd INI related record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [full_headerBar, full_tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to EXM related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.exm_scroll);

    // Screenshot variables
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const tablist = await $(
      ".//*[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print noLeftSpacing']"
    );

    // Screenshot EXM related record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(5000);

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0004_32 + "'" + test_data.testData.app_name + "'"
    );

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-6"
    );
    await browser.pause(5000);

    // Go to Object Manager
    await browser.url(test_data.testData.examination_objectManager_url);
    await browser.pause(10000);

    // Object manager style height modification
    await $(".//*[@id='brandBand_3']").$(function () {
      this.style.height = this.offsetHeight * 2 + "px";
    });
    await browser.pause(5000);

    // Screenshot Object Manager
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar, tablist],
        fullPageScrollTimeout: 1000,
      }
    );
  });
}
