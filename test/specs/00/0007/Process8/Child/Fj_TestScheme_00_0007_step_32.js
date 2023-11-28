const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-8");

export default async function suite() {
  it(
    "Fj_TestScheme_00_0007_step_32: The 適用利率 applicable interest rate must display the correct value depending on the" +
      "change in the 融資額 loan amount",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "32";

      // Go to its related 保証審査 Detail Screen
      await parent.Open_GUA_Record();

      // Take screenshot 保証審査 detail page
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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
      await parent.Open_APP_Record(1); // ★ 新環境適用' New Env Implementation

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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
      await parent.Open_PRO_Record(); // ★ 新環境適用' New Env Implementation

      // Scroll down to スコアリング・返済比率計算情報 (2nd section)
      await $("//records-record-layout-section[2]").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(5000);

      // Scroll down to 適格性・金利優遇設定 (3rd section)
      await $("//records-record-layout-section[3]").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(5000);

      // Scroll down to 主婦/主夫申込可能フラグ field
      await $(
        "//span[contains(., '" +
          test_data.testData.pro_housewife_husband_app_flg +
          "')]"
      ).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });

      await browser.pause(5000);

      // Scroll down to 優遇利率(他ローン取引) field
      await $(
        "//span[contains(., '" +
          test_data.testData.pro_pref_interest_rates_other +
          "')]"
      ).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });

      await browser.pause(5000);

      // Scroll down to ベースレート field
      await $(
        "//span[contains(., '" + test_data.testData.pro_base_rate + "')]"
      ).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(5000);

      // Scroll down to 金利優遇対象下限額(超) field
      await $(
        "//span[contains(., '" +
          test_data.testData.pro_min_amount_eligible_pref_interest_rates +
          "')]"
      ).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      await browser.pause(5000);
      // ★ 新環境適用' New Env Implementation
      // Take screenshot of CL products
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0007 +
          "_" +
          stepNum +
          "-3"
      );
    }
  );
}
