const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0009-3");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it(
    "Fj_TestScheme_20_0009_step_13: メール通知 E-mail notification and お知らせ(審査結果(応諾))notification (review result (acceptance)) are created for the application. " +
      "are created for the application.",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "13";

      // Go to CRE record detail screen
      await parent.Go_to_CRE();

      // Click 確認
      await $(
        ".//button[@name='" +
          test_data.testData.api_creditapproval_accept_btn +
          "']"
      ).click();
      await browser.pause(3000);

      // Take screenshot CL Origination
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-1"
      );

      await $(
        ".//button[@type='" + test_data.testData.submit_type_btn + "']"
      ).click();

      // Toast message screenshot
      await util.Toast_Message();
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-2"
      );

      // Refresh browser
      await browser.refresh();
      await browser.pause(5000);

      // Screenshot
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
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
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
      await browser.pause(3000);

      // Go to 申込 detail page
      await parent.Go_to_APP();

      // Save App Record Page Full Screen - Q2 Origination
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
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
        }
      );

      // Get Notification records
      await parent.Get_Notif();

      // Go to WNT Detail Page
      await parent.Go_to_WNT();

      // Take screenshot of 申込 Detail Screen
      const highlights3 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-5",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
        }
      );

      // Go to MNT Detail Page
      await parent.Go_to_MNT();

      // Take screenshot of 申込 Detail Screen
      const highlights4 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar4 = await $(".//header[@id='oneHeader']");
      const tabheader4 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-6",
        {
          hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        }
      );
    }
  );
}
