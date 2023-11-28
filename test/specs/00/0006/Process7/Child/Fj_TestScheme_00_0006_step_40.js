const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-7");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_40: 申込.利率 Application.interest rate must have the following values: 審査決裁.適用利率", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "40";

    // Login as shinsa
    await parent.Login_as_Shinsa1();

    // Go to CL product
    await parent.Open_PRO_Record();

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

    // Scroll down to カードローン金利利用フラグ field
    await $(
      "//span[contains(., '" +
        test_data.testData.pro_cloan_interest_rate_usage_flag_lbl +
        "')]"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(5000);

    // Take screenshot of CL products
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Go to EXS record detail screen
    await parent.Open_EXS_Record();

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

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // Login as admin user
    await parent.Login_as_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_41 + "'" + test_data.testData.app_name + "'"
    );

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
