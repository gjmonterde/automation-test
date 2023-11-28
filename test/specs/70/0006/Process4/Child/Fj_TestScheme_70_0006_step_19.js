const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0006-4");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0006_step_19: The rows that you have added appear in the table at " +
      "the top of the 借入明細情報一覧 List of loan detail information as an 「追加」 Additional category",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "19";

      // Go to TRR record
      await parent.Go_To_TRR();

      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );

      // Click add row button
      const btn1 = await $("button=" + test_data.testData.trr_add_row_btn);
      await btn1.scrollIntoView({ block: "center" });
      await btn1.waitForClickable({ timeout: 30000 });
      await btn1.click();
      await browser.pause(10000);

      // Enter values
      // 種類
      // ★ 新環境適用' New Env Implementation
      const detail_type = await $(
        ".//label[contains(.,'" + test_data.testData.trr_detail_type_lbl + "')]"
      );
      await detail_type.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const detail_type_id = await detail_type.getAttribute("for");
      await $(".//input[@id='" + detail_type_id + "']").setValue(
        test_data.testData.trr_detail_type_val
      );
      await browser.pause(1000);
      // 氏名カナ
      // ★ 新環境適用' New Env Implementation
      const kana_name = await $(
        ".//label[contains(.,'" + test_data.testData.trr_kana_name_lbl + "')]"
      );
      await kana_name.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const kana_name_id = await kana_name.getAttribute("for");
      await $(".//input[@id='" + kana_name_id + "']").setValue(
        test_data.testData.trr_kana_name_val
      );
      await browser.pause(1000);
      // 融資実行日
      // ★ 新環境適用' New Env Implementation
      const lending_date = await $(
        ".//label[contains(.,'" +
          test_data.testData.trr_lending_date_lbl +
          "')]"
      );
      await lending_date.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const lending_date_id = await lending_date.getAttribute("for");
      await $(".//input[@id='" + lending_date_id + "']").setValue(
        test_data.testData.trr_lending_date_val
      );
      await browser.pause(1000);
      // 融資金額
      // ★ 新環境適用' New Env Implementation
      const loan_amount = await $(
        ".//label[contains(.,'" + test_data.testData.trr_loan_amount_lbl + "')]"
      );
      await loan_amount.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const loan_amount_id = await loan_amount.getAttribute("for");
      await $(".//input[@id='" + loan_amount_id + "']").setValue(
        test_data.testData.trr_loan_amt_val
      );
      await browser.pause(1000);
      // 残債額
      // ★ 新環境適用' New Env Implementation
      const balance = await $(
        ".//label[contains(.,'" + test_data.testData.trr_balance_lbl + "')]"
      );
      await balance.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const balance_id = await balance.getAttribute("for");
      await $(".//input[@id='" + balance_id + "']").setValue(
        test_data.testData.trr_balance_val
      );
      await browser.pause(1000);
      // 年間返済額
      // ★ 新環境適用' New Env Implementation
      const annual_repayment = await $(
        ".//label[contains(.,'" +
          test_data.testData.trr_annual_repayment_lbl +
          "')]"
      );
      await annual_repayment.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const annual_repayment_id = await annual_repayment.getAttribute("for");
      await $(".//input[@id='" + annual_repayment_id + "']").setValue(
        test_data.testData.trr_repayment_amt_val
      );
      await browser.pause(1000);
      // 担保区分
      // ★ 新環境適用' New Env Implementation
      const collateral_classify = await $(
        ".//label[contains(.,'" +
          test_data.testData.trr_collateral_classify_lbl +
          "')]"
      );
      await collateral_classify.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await collateral_classify.click();
      await $(
        ".//lightning-base-combobox-item[contains(.,'" +
          test_data.testData.trr_collateral_class_val +
          "')]"
      ).click();
      await browser.pause(1000);
      // カード
      // ★ 新環境適用' New Env Implementation
      await $("label=" + test_data.testData.trr_card_lbl).click();

      // Save
      await $(
        ".//button[@name='" + test_data.testData.submit_type_btn + "']"
      ).click();

      // Toast message screenshot
      // ★ 新環境適用' New Env Implementation
      await util.Toast_Message();
      await browser.pause(1000);
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-2"
      );

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );
    }
  );
}
