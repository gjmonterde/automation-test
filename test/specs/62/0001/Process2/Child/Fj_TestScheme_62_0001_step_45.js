const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0001-2");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_62_0001_step_45: Should be メール通知.送信要否＝送信しない", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "45";

    // Get records
    await parent.Query(); // ★ 新環境適用' New Env Implementation

    // Go to App Record
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Screenshot - App Record
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
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

    // Go to MNT record
    await parent.Go_to_MNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - MNT record
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to WNT record
    await parent.Go_to_WNT(); // ★ 新環境適用' New Env Implementation

    // Screenshot - WNT record
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Go to MU record
    await parent.Go_to_MU(); // ★ 新環境適用' New Env Implementation

    // Screenshot - MU record
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );

    // Go to App Record
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Go to 案件詳細 tab
    await util.Application_Record_Scrolling(2); // ★ 新環境適用' New Env Implementation

    // Screenshot
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
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
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Go to 告知画面 tab
    await util.Application_Record_Scrolling(3); // ★ 新環境適用' New Env Implementation

    // Screenshot
    const headerBar6 = await $(".//header[@id='oneHeader']");
    const tabheader6 = await $(
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
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar6, tabheader6],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4); // ★ 新環境適用' New Env Implementation

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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar7, tabheader7],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Go to BA Record
    await parent.Go_to_BA(); // ★ 新環境適用' New Env Implementation

    // Screenshot - BA record
    const highlights8 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar8 = await $(".//header[@id='oneHeader']");
    const tabheader8 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-8",
      {
        hideAfterFirstScroll: [headerBar8, tabheader8, highlights8],
      }
    );

    // Go to account page
    await parent.Go_to_Account(); // ★ 新環境適用' New Env Implementation

    // Screenshot - Account record page
    const highlights9 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar9 = await $(".//header[@id='oneHeader']");
    const tabheader9 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-9",
      {
        hideAfterFirstScroll: [headerBar9, tabheader9, highlights9],
        fullPageScrollTimeout: 5000,
      }
    );

    // Go to Contact page
    await parent.Go_to_Contact(); // ★ 新環境適用' New Env Implementation

    // Screenshot - Contact record page
    const highlights10 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar10 = await $(".//header[@id='oneHeader']");
    const tabheader10 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-10",
      {
        hideAfterFirstScroll: [headerBar10, tabheader10, highlights10],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
