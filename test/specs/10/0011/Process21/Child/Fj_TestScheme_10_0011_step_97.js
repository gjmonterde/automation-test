const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it('Fj_TestScheme_10_0011_step_97: 実行方法 Execution method *The final save time shall be 「自動実行」"Auto Execute"', async () => {
    const stepNum = "97"; // ★ 新環境適用' New Env Implementation

    // Go to 申込 Page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Edit
    // ★ 新環境適用' New Env Implementation
    await $(
      ".//button[@title='" + test_data.testData.execution_method_edit_btn + "']"
    ).$(function () {
      this.scrollIntoView({
        block: "center",
      });
    });
    await $(
      ".//button[@title='" + test_data.testData.execution_method_edit_btn + "']"
    ).click();
    await browser.pause(1000);

    // Edit 第一電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.first_phone_field + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.first_phone_field +
        "']/@for]"
    ).setValue(test_data.testData.app_first_phone_value2);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Edit 第二電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.second_phone_field + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.second_phone_field +
        "']/@for]"
    ).setValue(test_data.testData.app_second_phone_value2);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Edit 第三電話番号_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.third_phone_field + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.third_phone_field +
        "']/@for]"
    ).setValue(test_data.testData.app_third_phone_value2);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Edit カナ勤務先_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.kana_office_field + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.kana_office_field +
        "']/@for]"
    ).setValue(test_data.testData.app_kana_office_name_value2);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Edit 年収（万円）_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.annual_income_field + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.annual_income_field +
        "']/@for]"
    ).setValue(test_data.testData.app_annual_income_value2);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Edit 漢字勤務先_登録
    // ★ 新環境適用' New Env Implementation
    await $(
      "//label[contains(.,'" + test_data.testData.office_name_field + "')]"
    ).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(3000);
    await $(
      "//input[@id=//label[normalize-space(.)='" +
        test_data.testData.office_name_field +
        "']/@for]"
    ).setValue(test_data.testData.app_office_name_value2);
    await browser.pause(1000);
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Take edit page screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await $(".//*[@class='main-container slds-grid']").$(function () {
      var middle = document.getElementsByClassName("col main-col slds-col");
      var height = middle.offsetHeight;
      this.style = "height:" + height + "px!important";
    });
    await $(
      ".//records-form-footer[contains(., '" +
        test_data.testData.cre_save +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "col main-col slds-col"
      ).offsetHeight;
      this.style.marginTop = height + this.height + "px";
      this.style.position = "static";
    });
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Click Save
    await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    ).scrollIntoView({ block: "center" });
    await $(".//button[@name='" + test_data.testData.save_btn + "']").click();
    await browser.pause(10000);

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Go to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Screenshot
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
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
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(3000);
  });
}
