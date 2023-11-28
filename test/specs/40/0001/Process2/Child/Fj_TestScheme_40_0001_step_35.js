const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0001_step_35: An additional application for a set of product is made", async () => {
    const stepNum = "35"; // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id2
    );

    // Go to 申込内容 tab
    await util.Application_Record_Scrolling(1);

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
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 案件詳細 tab
    await util.Application_Record_Scrolling(2);

    // Screenshot
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    // Screenshot
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
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
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Go to Account list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl04 +
        test_data.testData.listview2_id
    );
    await browser.pause(8000);

    // Search account
    await $(
      ".//input[@aria-label='" + test_data.testData.searchacct_lbl + "']"
    ).setValue(test_data.testData.account_name2);
    await browser.keys(["Enter"]);
    await $("span=" + test_data.testData.account_header).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-8"
    );

    // Go to Contacts list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl05 +
        test_data.testData.listview3_id
    );
    await browser.pause(10000);

    // Search contact
    await $(
      ".//input[@aria-label='" + test_data.testData.searchcontact_lbl + "']"
    ).setValue(test_data.testData.contact_name2);
    await browser.keys(["Enter"]);
    await $("span=" + test_data.testData.contact_header).click();
    await browser.pause(5000);

    // Screenshot - Contact list view
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-9"
    );

    // Go to MNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.mnt_obj,
      test_data.testData.mnt_id2
    );

    // Screenshot - MNT record
    const highlights5 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-11",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
      }
    );

    // Go to WNT record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.wnt_obj,
      test_data.testData.wnt_id2
    );

    // Screenshot - WNT record
    const highlights6 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar6 = await $(".//header[@id='oneHeader']");
    const tabheader6 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-12",
      {
        hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
      }
    );

    // Login as admin
    await parent.Login_as_admin();

    // Go to Users Page
    await util.Users_Page();

    const acct = await $("a=" + test_data.testData.account_name2);
    await acct.$(function () {
      this.scrollIntoView();
    });
    await acct.click();
    await browser.pause(5000);
    await browser.switchToParentFrame();
    await browser.pause(5000);

    // Screenshot
    const headerBar7 = await $(".//header[@id='oneHeader']");
    const tablist7 = await $(
      ".//*[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print noLeftSpacing']"
    );
    await $(".//*[@class[contains(.,'tabsetBody')]]").$(function () {
      this.style.height = this.offsetHeight * 1.5 + "px";
    });
    await browser.pause(5000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-10",
      {
        hideAfterFirstScroll: [headerBar7, tablist7],
        fullPageScrollTimeout: 1000,
      }
    );
  });
}
