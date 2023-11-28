const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_31: No new「取引先」business partner,「取引先責任者」business partner and「ユーザ」user is created", async () => {
    const stepNum = "31"; // ★ 新環境適用' New Env Implementation

    // Go to 取引先 list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl07 +
        test_data.testData.listview_id4
    );
    await browser.pause(5000);

    // Sort Date
    const date_col = await $(
      ".//a[contains(., '" + test_data.testData.app_date_sort + "')]"
    );
    var sort = await date_col.nextElement().getText();
    while (sort != test_data.testData.sort_latest) {
      await date_col.click();
      await browser.pause(1000);
      sort = await date_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.sort_latest);

    // Deselect the hover/selected fields
    await util.Deselect_fields(7);

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
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
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 5000,
      }
    );

    // Go to 取引先責任者 list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl08 +
        test_data.testData.listview_id5
    );
    await browser.pause(5000);

    // Sort Date
    var sort = await date_col.nextElement().getText();
    while (sort != test_data.testData.sort_latest) {
      await date_col.click();
      await browser.pause(1000);
      sort = await date_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.sort_latest);

    // Deselect the hover/selected fields
    await util.Deselect_fields(7);

    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
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
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 5000,
      }
    );

    // Go to APP record detail screen
    await parent.Open_Salesforce_App_Record();

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
        "-3",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Go to Account page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    const highlights_acc = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_acc = await $(".//header[@id='oneHeader']");
    const tabheader_acc = await $(
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
        hideAfterFirstScroll: [headerBar_acc, tabheader_acc, highlights_acc],
        fullPageScrollTimeout: 5000,
      }
    );

    // Go to Contact page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.contact_obj,
      test_data.testData.contact_id
    );

    const highlights_con = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar_con = await $(".//header[@id='oneHeader']");
    const tabheader_con = await $(
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
        "-5",
      {
        hideAfterFirstScroll: [headerBar_con, tabheader_con, highlights_con],
        fullPageScrollTimeout: 5000,
      }
    );

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Users Page
    await browser.url(user_info.userInformation.var_sf_userpage);
    await browser.pause(10000);
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tablist2 = await $(
      ".//*[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print noLeftSpacing']"
    );
    await $(".//*[@class[contains(.,'tabsetBody')]]").$(function () {
      this.style.height = this.offsetHeight * 1.5 + "px";
    });
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar3, tablist2],
        fullPageScrollTimeout: 1000,
      }
    );
    await browser.refresh();
    await browser.pause(10000);

    // Click the existing user
    await util.Users_Page();
    const existing_user = await $("a=" + test_data.testData.account_name);
    await existing_user.waitForClickable({ timeout: 10000 });
    await existing_user.click();
    await browser.pause(5000);
    await browser.switchToParentFrame();
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tablist3 = await $(
      ".//*[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print noLeftSpacing']"
    );
    await $(".//*[@class[contains(.,'tabsetBody')]]").$(function () {
      this.style.height = this.offsetHeight * 1.5 + "px";
    });
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar4, tablist3],
        fullPageScrollTimeout: 1000,
      }
    );
    await browser.pause(2000);
  });
}
