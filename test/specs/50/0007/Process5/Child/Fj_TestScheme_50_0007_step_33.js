const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0007_step_33: The 適用利率 applicable interest rate must display the correct value depending on the" +
      "change in the 融資額 loan amount",
    async () => {
      const stepNum = "33"; // ★ 新環境適用' New Env Implementation

      // Go to its related 保証審査 Detail Screen
      await util.Open_SF_Record_URL(
        1,
        user_info.object.gua_obj,
        test_data.testData.gua_id
      );

      // Take screenshot 保証審査 detail page
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );

      // Go to 申込 detail page
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      // Go to 1st tab
      await util.Application_Record_Scrolling(1);

      // Take screenshot
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
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 6000,
        }
      );

      // Go to CL product
      await util.Open_SF_Record_URL(
        1,
        user_info.object.pro_obj,
        test_data.testData.clProd_id
      );

      // Scroll down to スコアリング・返済比率計算情報 (2nd section)
      await $("//records-record-layout-section[2]").$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await browser.pause(3000);

      // Scroll down to 金利優遇対象下限額(超) field
      await $(
        "//span[contains(., '" +
          test_data.testData.min_amount_eligible_pref_interest_rates +
          "')]"
      ).$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await browser.pause(3000);

      // Take screenshot of CL products
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-3"
      );
    }
  );
}
