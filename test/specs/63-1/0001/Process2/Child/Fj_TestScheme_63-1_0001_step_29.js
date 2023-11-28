const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_29: The 銀行口座 bank account is registered", async () => {
    const stepNum = "29"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await parent.Open_Salesforce_App_Record();

    // Switch to 告知画面 tab
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
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    const headerBar_app2 = await $(".//header[@id='oneHeader']");
    const tabheader_app2 = await $(
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_app2, tabheader_app2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll to highlight panel
    await util.Highlight_panel_scroll();

    // Go to BA record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    const headerBar_ba = await $(".//header[@id='oneHeader']");
    const tabheader_ba = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_ba = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar_ba, tabheader_ba, highlights_ba],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to 店舗 list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl06 +
        test_data.testData.listview_id3
    );
    await browser.pause(5000);

    // Search
    const search_num = await $(
      ".//input[@type='search'] [@class='slds-input'] [@part='input']"
    );
    await search_num.scrollIntoView();
    await search_num.doubleClick();
    await browser.pause(1000);
    await search_num.setValue(test_data.testData.branch_number_value);
    await browser.keys(["Enter"]);
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(7);

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
      }
    );
    await browser.pause(2000);
  });
}
