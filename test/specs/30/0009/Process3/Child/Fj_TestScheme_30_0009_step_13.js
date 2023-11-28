const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0009-3");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it(
    "Fj_TestScheme_30_0009_step_13: メール通知 E-mail notification and お知らせ(審査結果(応諾))notification (review result (acceptance)) are created for the application. " +
      "are created for the application.",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "13";

      // ★ 新環境適用' New Env Implementation
      // Go to 契約手続き Detail Screen
      await parent.Go_to_CRE();

      // Take screenshot CL Origination
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
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
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 6000,
        }
      );

      // Click 確認
      const btn = await $(
        ".//button[@name='" +
          test_data.testData.api_creditapproval_accept_btn +
          "']"
      );
      await btn.waitForClickable({ timeout: 5000 });
      await btn.click();
      await browser.pause(3000);

      // Take screenshot CL Origination
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-2"
      );

      // Click submit
      await $(
        ".//button[@type='" + test_data.testData.submit_type_btn + "']"
      ).click();

      // Toast message screenshot
      await util.Toast_Message();
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-3"
      );

      // Refresh browser
      await browser.refresh();
      await browser.pause(10000);

      // Take screenshot CL Origination
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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar4, tabheader4],
          fullPageScrollTimeout: 6000,
        }
      );

      // Get WNT and MNT record Id.
      await parent.Query_Notification_Records();

      // ★ 新環境適用' New Env Implementation
      // Go to [WNT ]お知らせ items page
      await parent.Go_to_WNT_RelList();

      // Take お知らせ items page screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-5"
      );
      await browser.pause(3000);

      // ★ 新環境適用' New Env Implementation
      // Go to WNT Detail Page
      await parent.Go_to_WNT();

      // Take screenshot of 申込 Detail Screen
      const highlights6 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar6 = await $(".//header[@id='oneHeader']");
      const tabheader6 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-6",
        {
          hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
        }
      );

      // ★ 新環境適用' New Env Implementation
      // Go to [MNT] メール通知 items page
      await parent.Go_to_MNT_RelList();

      // Take メール通知 items page screenshot
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-7"
      );

      // ★ 新環境適用' New Env Implementation
      // Go to MNT Detail Page
      await parent.Go_to_MNT();

      // Take screenshot of 申込 Detail Screen
      const highlights8 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar8 = await $(".//header[@id='oneHeader']");
      const tabheader8 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-8",
        {
          hideAfterFirstScroll: [headerBar8, tabheader8, highlights8],
        }
      );
    }
  );
}
