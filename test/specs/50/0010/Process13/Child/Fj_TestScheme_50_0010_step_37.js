const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_50_0010_step_37: 顧客番号再取得連携ステータス field value should be edited to 手動照会済み" +
      "while any values can be set to both 全店顧客番号 and 融資基本口座番号 fields",
    async () => {
      const stepNum = "37"; // ★ 新環境適用' New Env Implementation

      // Go to APP record detail screen
      await util.Open_SF_Record_URL(
        1,
        user_info.object.app_obj,
        test_data.testData.app_id
      );

      // Switch to 実行画面 tab
      await util.Application_Record_Scrolling(4);

      // ★ 新環境適用' New Env Implementation
      await $("span=" + test_data.testData.submission_data_section).$(
        function () {
          this.scrollIntoView();
        }
      );
      await browser.pause(5000);
      await $("span=" + test_data.testData.run_registration_section).$(
        function () {
          this.scrollIntoView();
        }
      );
      await browser.pause(5000);

      // Click pencil icon beside 全店顧客番号 field
      await $(
        "//button[@title='" +
          test_data.testData.store_wide_customer_number_edit_btn +
          "']"
      ).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });

      await $(
        "//button[@title='" +
          test_data.testData.store_wide_customer_number_edit_btn +
          "']"
      ).click();
      await browser.pause(5000);

      // Input 全店顧客番号 value
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" + test_data.testData.cif_no_label + "')]"
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
          test_data.testData.cif_no_label +
          "']/@for]"
      ).setValue(test_data.testData.cif_no_value);
      await browser.pause(3000);

      // Input 融資基本口座番号 value
      // ★ 新環境適用' New Env Implementation
      await $(
        "//label[contains(.,'" +
          test_data.testData.basic_loan_acc_no_label +
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
          test_data.testData.basic_loan_acc_no_label +
          "']/@for]"
      ).setValue(test_data.testData.basic_loan_acc_no_value);
      await browser.pause(3000);

      // Click 顧客番号再取得連携ステータス label
      const status_lbl = await $(
        ".//div[@data-target-selection-name='" +
          test_data.testData.api_app_customeledgerstatus_field +
          "']"
      ).$("label=" + test_data.testData.cust_num_reacq_linkage_status_lbl);
      await status_lbl.scrollIntoView();
      await status_lbl.waitForClickable({ timeout: 10000 });
      await status_lbl.click();

      // Select 顧客番号再取得連携ステータス picklist field value
      const cust_num_reacq_linkage_status_value = await $(
        "//span[@title='" +
          test_data.testData.cust_num_reacq_linkage_status_value +
          "']"
      );
      await cust_num_reacq_linkage_status_value.waitForClickable({
        timeout: 10000,
      });
      await cust_num_reacq_linkage_status_value.click();
      await browser.pause(5000);

      const footer2 = $(
        "//records-form-footer[@class='slds-docked-form-footer']"
      );
      await footer2.$(function () {
        this.style.position = "static";
      });

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
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-1",
        {
          hideElements: [footer2],
          hideAfterFirstScroll: [headerBar, tabheader],
          fullPageScrollTimeout: 3000,
        }
      );

      // Click 保存 button
      const save_edit_btn = await $(
        ".//button[@name='" + test_data.testData.save_btn + "']"
      );
      await save_edit_btn.waitForClickable({ timeout: 10000 });
      await save_edit_btn.click();
      await browser.pause(30000);

      await browser.refresh();
      await browser.pause(10000);

      await util.Application_Record_Scrolling(4);

      const app_headerBar = await $(".//header[@id='oneHeader']");
      const app_tabheader = await $(
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
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [app_headerBar, app_tabheader],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  );
}
