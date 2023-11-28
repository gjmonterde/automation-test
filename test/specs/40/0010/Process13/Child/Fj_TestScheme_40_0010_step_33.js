const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_40_0010_step_33: The following item values must be updatable: 第一電話番号_登録, 第二電話番号_登録, " +
      "第三電話番号_登録, カナ勤務先_登録, 年収（万円）_登録, 漢字勤務先_登録",
    async () => {
      const stepNum = "33"; // ★ 新環境適用' New Env Implementation

      // Go to App Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      // Go to 実行画面 tab
      await util.Application_Record_Scrolling(4);

      // Screenshot
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
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Edit
      const edit_btn = await $(
        "//button[@title='" +
          test_data.testData.app_first_phone_no_edit_btn +
          "']"
      );
      await browser.pause(2000);
      await edit_btn.scrollIntoView({ block: "center" });
      await edit_btn.waitForClickable({ timeout: 10000 });
      await edit_btn.click();
      await browser.pause(3000);

      // 第一電話番号_登録
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" +
          test_data.testData.first_phone_no_field +
          "')]"
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
          test_data.testData.first_phone_no_field +
          "']/@for]"
      ).setValue(test_data.testData.app_first_phone_no_value);

      await browser.pause(3000);

      // 第二電話番号_登録
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" +
          test_data.testData.second_phone_no_field +
          "')]"
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
          test_data.testData.second_phone_no_field +
          "']/@for]"
      ).setValue(test_data.testData.app_second_phone_no_value);

      await browser.pause(3000);

      // 第三電話番号_登録
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" +
          test_data.testData.third_phone_no_field +
          "')]"
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
          test_data.testData.third_phone_no_field +
          "']/@for]"
      ).setValue(test_data.testData.app_third_phone_no_value);
      await browser.pause(3000);

      // カナ勤務先_登録
      // ★ 新環境適用' New Env Implementation
      await $(
        ".//label[contains(.,'" +
          test_data.testData.kana_office_name_field +
          "')]"
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
          test_data.testData.kana_office_name_field +
          "']/@for]"
      ).setValue(test_data.testData.app_kana_office_value);

      await browser.pause(3000);

      // 年収（万円）_登録
      await $(
        ".//label[contains(.,'" + test_data.testData.annual_income_field + "')]"
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
      ).setValue(test_data.testData.app_annual_income_value);

      await browser.pause(3000);

      // 漢字勤務先_登録
      await $(
        ".//label[contains(.,'" + test_data.testData.office_name_field + "')]"
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
      ).setValue(test_data.testData.app_kanji_office_value);
      await browser.keys(["Escape"]);
      await browser.pause(3000);

      // Screenshot - edit page
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.pause(10000);
      await $(".//*[@class='main-container slds-grid']").$(function () {
        var middle = document.getElementsByClassName("col main-col slds-col");
        var height = middle.offsetHeight;
        this.style = "height:" + height + "px!important";
      });
      await $(
        ".//records-form-footer[contains(., '" +
          test_data.testData.save_btn +
          "')]"
      ).$(function () {
        var height = document.getElementsByClassName(
          "col main-col slds-col"
        ).offsetHeight;
        this.style.marginTop = height + this.height + "px";
        (this.style.marginBottom = "-100px"), (this.style.position = "static");
      });
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
        }
      );

      // Click " + test_data.testData.save_btn + " button
      const save_edit_btn = await $(
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await save_edit_btn.waitForClickable({ timeout: 10000 });
      await save_edit_btn.click();
      await browser.pause(30000);

      // Refresh the page
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
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
