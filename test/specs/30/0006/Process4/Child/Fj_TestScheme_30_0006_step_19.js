const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0006-4");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0006_step_19: Rows added appear in the table 借入明細情報一覧", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "19";

    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    const headerBar_trr = await $(".//header[@id='oneHeader']");
    const tabheader_trr = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_trr = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_trr, tabheader_trr, highlights_trr],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Click 行追加 button to add rows
    const addRowBtn = $(
      ".//button[contains(., '" + test_data.testData.addline_btn_lbl + "')]"
    );
    await addRowBtn.waitForClickable({ timeout: 5000 });
    await addRowBtn.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // Set 種類 field
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
      test_data.testData.detail_type_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 氏名カナ field
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
      test_data.testData.kana_name_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 融資実行日 field
    const lending_date = await $(
      ".//label[contains(.,'" + test_data.testData.trr_lending_date_lbl + "')]"
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
      test_data.testData.lending_date_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 融資金額 field
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
      test_data.testData.loan_amount_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 残債額 field
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
      test_data.testData.balance_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 年間返済額 field
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
      test_data.testData.annual_repayment_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 担保区分 field
    const collateral_classify = await $(
      ".//label[contains(.,'" +
        test_data.testData.collateral_classify_lbl +
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
        test_data.testData.collateral_classify_val +
        "')]"
    ).click();
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(2);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);

    // Save button - add rows
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const addrow_save_edit_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.addrow_submit_btn +
        "')]"
    );
    await addrow_save_edit_btn.waitForClickable({ timeout: 5000 });
    await addrow_save_edit_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(3000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_trr2 = await $(".//header[@id='oneHeader']");
    const tabheader_trr2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_trr2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_trr2, tabheader_trr2, highlights_trr2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
