const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0006-7");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0006_step_36: 申込.利率 Application.interest rate must have the following values: 審査決裁.適用利率", async () => {
    const stepNum = "36"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_As_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_36 + "'" + test_data.testData.exs_name + "'"
    );

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // Login as shinsa1 user
    await parent.Login_As_Shinsa1_User();

    // Go to 1st tab
    await util.Application_Record_Scrolling(1);

    // Take screenshot
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
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
    // ★ 新環境適用' New Env Implementation
    await $("//records-record-layout-section[2]").$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(5000);

    // Take screenshot of CL products
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
