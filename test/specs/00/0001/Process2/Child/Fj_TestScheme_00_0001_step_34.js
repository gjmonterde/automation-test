const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0001-2");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_34: An additional application for a set of product is made", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "34";

    // Go to App Record
    // ★ 新環境適用' New Env Implementation
    await parent.Open_Salesforce_App_Record();

    // Go to 申込内容 tab
    // ★ 新環境適用' New Env Implementation
    await util.Application_Record_Scrolling(1);

    // Screenshot
    const headerBar7 = await $(".//header[@id='oneHeader']");
    const tabheader7 = await $(
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
        hideAfterFirstScroll: [headerBar7, tabheader7],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 案件詳細 tab
    // ★ 新環境適用' New Env Implementation
    await util.Application_Record_Scrolling(2);

    // Screenshot
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
        hideAfterFirstScroll: [headerBar8, tabheader8],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
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
        hideAfterFirstScroll: [headerBar8, tabheader8],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3);

    // Screenshot
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar9, tabheader9],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 実行画面 tab
    // ★ 新環境適用' New Env Implementation
    await util.Application_Record_Scrolling(4);

    // Screenshot
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar10, tabheader10],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar10, tabheader10],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );
  });
}
