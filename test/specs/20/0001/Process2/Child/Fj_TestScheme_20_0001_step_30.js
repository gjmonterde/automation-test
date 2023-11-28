const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0001_step_30: Existing 「取引先」business partners with the same date of birth and email address must be linked to the application", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "30";

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 案件詳細 tab
    await util.Application_Record_Scrolling(2);

    // Screenshot - Application 案件詳細 tab
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
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
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

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to Account list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl03 +
        test_data.testData.listview2_id
    );
    await browser.pause(10000);

    // Search account
    await $(
      ".//input[@aria-label='" + test_data.testData.search_account + "']"
    ).setValue(test_data.testData.account_name);
    await browser.keys(["Enter"]);
    await $("span=" + test_data.testData.acct_label).click();
    await browser.pause(5000);

    // Screenshot - Account list view
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Go to Contacts list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl04 +
        test_data.testData.listview3_id
    );
    await browser.pause(10000);

    // Search contact
    await $(
      ".//input[@aria-label='" + test_data.testData.search_contact + "']"
    ).setValue(test_data.testData.contact_name);
    await browser.keys(["Enter"]);
    await $("span=" + test_data.testData.contact_lbl).click();
    await browser.pause(5000);

    // Screenshot - Contact list view
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Go to Account record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Go to app related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.account_id,
      user_info.object.account_app_rel
    );

    var appid = await $(
      ".//a[contains(., '" + test_data.testData.app_list_sort_col + "')]"
    );
    var sort = await appid.nextElement().getText();
    // Sort
    while (sort !== test_data.testData.sort_app) {
      await appid.click();
      await browser.pause(5000);
      sort = await appid.nextElement().getText();
    }

    await expect(sort).toBe(test_data.testData.sort_app);

    // Go back to account page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Screenshot - Account record page
    const highlights5 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
        fullPageScrollTimeout: 5000,
      }
    );

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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
