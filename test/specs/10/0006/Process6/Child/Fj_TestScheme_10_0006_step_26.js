const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_10_0006_step_26: Register the Pスコア限度額(修正)（単位：万円）equal or less than offered loan amount", async () => {
    const stepNum = "26"; // ★ 新環境適用' New Env Implementation

    // Scroll down to スコアリング結果 section
    await $(
      "//span[contains(., '" +
        test_data.testData.scoring_result_section +
        "')]/parent::*"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);

    // Edit Pスコア限度額(修正)（単位：万円）value
    const pscore_edit = await $(
      "//button[@title='" + test_data.testData.pscore_edit_btn + "']"
    );
    await browser.pause(5000);
    await pscore_edit.waitForClickable({
      timeout: 5000,
    });
    await pscore_edit.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.pscore_limit_credit +
        "']/@for]"
    ).setValue(test_data.testData.pscore_limit_credit_value);
    await browser.pause(5000);

    // Click 保存 button
    await browser.pause(5000);
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).waitForClickable({ timeout: 10000 });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_exs = await $(".//header[@id='oneHeader']");
    const tabheader_exs = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_exs, tabheader_exs],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 申込内容 tab
    await util.Application_Record_Scrolling(1);

    const headerBar_app = await $(".//header[@id='oneHeader']");
    const tabheader_app = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_app, tabheader_app],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to PRO record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.pro_obj,
      test_data.testData.pro_id
    );

    await $("//span[contains(.,'" + test_data.testData.pro_view + "')]").$(
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );
    await browser.pause(3000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    // Go to INI record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini3_id
    );

    const headerBar_ini = await $(".//header[@id='oneHeader']");
    const tabheader_ini = await $(
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

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_ini, tabheader_ini],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
