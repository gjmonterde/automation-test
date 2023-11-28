const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0009_step_13: メール通知 E-mail notification and お知らせ(審査結果(応諾))notification (review result (acceptance)) are created for the application. " +
      "are created for the application.",
    async () => {
      const stepNum = "13"; // ★ 新環境適用' New Env Implementation

      // Go to 契約手続き Detail Screen
      await util.Open_SF_Record_URL(
        1,
        user_info.object.cre_obj,
        test_data.testData.cre_id
      );

      // Click 確認
      await $(
        ".//button[@name='" + test_data.testData.credit_approval_btn_api + "']"
      ).click();
      await browser.pause(5000);

      // Take screenshot of CRE approval
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-1"
      );
      await browser.pause(5000);

      await $(
        ".//button[@type='" + test_data.testData.submit_btn + "']"
      ).click();

      // Toast message screenshot
      await util.Toast_Message();
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-2"
      );

      // Refresh browser
      await browser.refresh();
      await browser.pause(10000);

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
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0009 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 3000,
        }
      );

      // Go to 申込 detail page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      await util.Application_Record_Scrolling(2);

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
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
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
    }
  );
}
