const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0001_step_35: An additional application for a set of product is made", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "35";

    // View application list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl05 +
        test_data.testData.listview4_id
    );
    await browser.pause(15000);

    // Sort
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

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app2_id
    );

    // Go to 案件詳細 tab
    await util.Application_Record_Scrolling(2);

    // Screenshot - Application 案件詳細 tab
    const headerBar8 = await $(".//header[@id='oneHeader']");
    const tabheader8 = await $(
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
        "-2",
      {
        hideAfterFirstScroll: [headerBar8, tabheader8],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    // Screenshot - Application 告知画面 tab
    const headerBar9 = await $(".//header[@id='oneHeader']");
    const tabheader9 = await $(
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
        "-3",
      {
        hideAfterFirstScroll: [headerBar9, tabheader9],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(7000);

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot - Application 実行画面 tab
    const headerBar10 = await $(".//header[@id='oneHeader']");
    const tabheader10 = await $(
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
        "-4",
      {
        hideAfterFirstScroll: [headerBar10, tabheader10],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Go to Account record page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id2
    );

    // Go to app related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.account_id2,
      user_info.object.account_app_rel
    );

    var appid2 = await $(
      ".//a[contains(., '" + test_data.testData.app_list_sort_col + "')]"
    );
    var sort2 = await appid2.nextElement().getText();
    // Sort
    while (sort2 !== test_data.testData.sort_app) {
      await appid2.click();
      await browser.pause(5000);
      sort2 = await appid2.nextElement().getText();
    }

    await expect(sort2).toBe(test_data.testData.sort_app);

    // Go back to account page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id2
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
        "-5",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
        fullPageScrollTimeout: 5000,
      }
    );

    // Go to Contact page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.contact_obj,
      test_data.testData.contact_id2
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
        "-6",
      {
        hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
        fullPageScrollTimeout: 3000,
      }
    );

    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);
  });
}
