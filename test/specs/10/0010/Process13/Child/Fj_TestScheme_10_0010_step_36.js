const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_10_0010-13");

export default function suite() {
  it("Fj_TestScheme_10_0010_step_36: Create new 返済用銀行口座 record where 返済用フラグ = TRUE", async () => {
    const stepNum = "36"; // ★ 新環境適用' New Env Implementation

    await browser.refresh();
    await browser.pause(10000);

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // ★ 新環境適用' New Env Implementation
    // Scroll to BA related list
    await util.Scroll_to_related_list(test_data.testData.ba_header);

    // From the 「新規」"New" button of the 銀行口座関連リスト bank account related list, new registration is possible
    // Create New BA record
    const ba_new_link = await $(
      ".//*[@data-target-reveals='" +
        test_data.testData.new_bank_acct_btn_api +
        "']"
    );
    await ba_new_link.click();
    const create_new_ba_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.new_bank_acct_btn_api +
        "']"
    );
    await create_new_ba_btn.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // fullpage modal
    await util.modal_fullpage();

    // Dialog box
    const dialog = await $("//div[@data-aura-class='oneRecordActionWrapper']");

    // ★ 新環境適用' New Env Implementation
    // 取引先＝申込.取引先
    // Set 取引先 field
    const account_id = await dialog
      .$("label=" + test_data.testData.new_acct_label)
      .getAttribute("for");
    await $("//input[@id='" + account_id + "']").setValue(
      test_data.testData.new_acct_name_value
    );
    await browser.pause(5000);
    const acct_name = await $(
      ".//lightning-base-combobox-item[@data-value[contains(.,'" +
        test_data.testData.new_acct_id_value +
        "')]]"
    );
    await acct_name.waitForClickable({ timeout: 30000 });
    await acct_name.click();
    await browser.pause(1000);

    // 返済用フラグ＝TRUE
    // Set 返済用フラグ field to checked
    await dialog
      .$("span=" + test_data.testData.new_repayment_flag_label)
      .click();

    // ★ 新環境適用' New Env Implementation
    // 確認ステータス＝確認済み
    const new_confirmation_status_picklist = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.new_confirmation_status_label +
        "')]"
    );
    await new_confirmation_status_picklist.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await new_confirmation_status_picklist.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.new_confirmation_status_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 預金種類＝ * Any value
    // Set 預金種類 field
    const new_deposit_type_picklist = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.new_deposit_type_label +
        "')]"
    );
    await new_deposit_type_picklist.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await new_deposit_type_picklist.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.new_deposit_type_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 金融機関名(選択)＝ * Any value
    // Set 金融機関名(選択) field
    const new_financial_inst_name_optional_picklist = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.new_financial_inst_name_optional_label +
        "')]"
    );
    await new_financial_inst_name_optional_picklist.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await new_financial_inst_name_optional_picklist.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.new_financial_inst_name_optional_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // 金融機関コード＝* Any number 4 digits
    // Set 金融機関コード field
    // ★ 新環境適用' New Env Implementation
    const newfininst_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_financial_inst_code_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_financial_inst_code_label +
          "')]"
      );
    await newfininst_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const fininstname_id = await newfininst_lbl.getAttribute("for");
    await $(".//input[@id='" + fininstname_id + "']").setValue(
      test_data.testData.new_financial_inst_code_value
    );
    await browser.pause(3000);

    // 金融機関種類＝ * Any value
    // Set 金融機関種類 field
    // ★ 新環境適用' New Env Implementation
    const new_financial_inst_type_picklist = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.new_financial_inst_type_actual_label +
        "')]"
    );
    await new_financial_inst_type_picklist.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await new_financial_inst_type_picklist.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.new_financial_inst_type_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // 金融機関名＝* Any value
    // Set 金融機関名 field -- required*
    // ★ 新環境適用' New Env Implementation
    const newfinst_name_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_financial_inst_name_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_financial_inst_name_label +
          "')]"
      );
    await newfinst_name_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const newfinst_name_id = await newfinst_name_lbl.getAttribute("for");
    await $(".//input[@id='" + newfinst_name_id + "']").setValue(
      test_data.testData.new_financial_inst_name_value
    );
    await browser.pause(3000);

    // 支店コード＝* Any number 3 digits
    // Set 支店コード field
    // ★ 新環境適用' New Env Implementation
    const new_branch_code_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_branch_code_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_branch_code_label +
          "')]"
      );
    await new_branch_code_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_branch_code_id = await new_branch_code_lbl.getAttribute("for");
    await $(".//input[@id='" + new_branch_code_id + "']").setValue(
      test_data.testData.new_branch_code_value
    );
    await browser.pause(3000);

    // 支店名＝* Any value
    // Set 支店名 field -- required*
    // ★ 新環境適用' New Env Implementation
    const new_branch_name_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_branch_name_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_branch_name_label +
          "')]"
      );
    await new_branch_name_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_branch_name_id = await new_branch_name_lbl.getAttribute("for");
    await $(".//input[@id='" + new_branch_name_id + "']").setValue(
      test_data.testData.new_branch_name_value
    );
    await browser.pause(3000);

    // Set 口座番号 field -- required*
    // ★ 新環境適用' New Env Implementation
    const new_account_number1_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_account_number1_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_account_number1_label +
          "')]"
      );
    await new_account_number1_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_account_number1_id = await new_account_number1_lbl.getAttribute(
      "for"
    );
    await $(".//input[@id='" + new_account_number1_id + "']").setValue(
      test_data.testData.new_account_number1_value
    );
    await browser.pause(3000);

    // ★追加項目 手数料額(円)
    // ★ 新環境適用' New Env Implementation
    const new_account_fee_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_account_fee_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_account_fee_label +
          "')]"
      );
    await new_account_fee_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_account_fee_id = await new_account_fee_lbl.getAttribute("for");
    await $(".//input[@id='" + new_account_fee_id + "']").setValue(
      test_data.testData.new_account_fee_value
    );
    await browser.pause(3000);

    // 金融機関コード(普通銀行)＝* Any number 4 digits
    // Set 金融機関コード(普通銀行) field
    // ★ 新環境適用' New Env Implementation
    const new_financial_inst_code_ordinary_bank_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_financial_inst_code_ordinary_bank_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_financial_inst_code_ordinary_bank_label +
          "')]"
      );
    await new_financial_inst_code_ordinary_bank_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_financial_inst_code_ordinary_bank_id =
      await new_financial_inst_code_ordinary_bank_lbl.getAttribute("for");
    await $(
      ".//input[@id='" + new_financial_inst_code_ordinary_bank_id + "']"
    ).setValue(test_data.testData.new_financial_inst_code_ordinary_bank_value);
    await browser.pause(3000);

    // 金融機関名(普通銀行)＝* Any value
    // Set 金融機関名(普通銀行) field
    // ★ 新環境適用' New Env Implementation
    const new_financial_inst_name_ordinary_bank_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_financial_inst_name_ordinary_bank_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_financial_inst_name_ordinary_bank_label +
          "')]"
      );
    await new_financial_inst_name_ordinary_bank_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_financial_inst_name_ordinary_bank_id =
      await new_financial_inst_name_ordinary_bank_lbl.getAttribute("for");
    await $(
      ".//input[@id='" + new_financial_inst_name_ordinary_bank_id + "']"
    ).setValue(test_data.testData.new_financial_inst_name_ordinary_bank_value);
    await browser.pause(3000);

    // 支店コード(普通銀行)＝* Any number 3 digits
    // Set 支店コード(普通銀行) field
    // ★ 新環境適用' New Env Implementation
    const new_branch_code_ordinary_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_branch_code_ordinary_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_branch_code_ordinary_label +
          "')]"
      );
    await new_branch_code_ordinary_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_branch_code_ordinary_id =
      await new_branch_code_ordinary_lbl.getAttribute("for");
    await $(".//input[@id='" + new_branch_code_ordinary_id + "']").setValue(
      test_data.testData.new_branch_code_ordinary_value
    );
    await browser.pause(3000);

    // 支店名(普通銀行)＝* Any value
    // Set 支店名(普通銀行) field
    // ★ 新環境適用' New Env Implementation
    const new_branch_name_ordinary_bank_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_branch_name_ordinary_bank_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_branch_name_ordinary_bank_label +
          "')]"
      );
    await new_branch_name_ordinary_bank_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_branch_name_ordinary_bank_id =
      await new_branch_name_ordinary_bank_lbl.getAttribute("for");
    await $(
      ".//input[@id='" + new_branch_name_ordinary_bank_id + "']"
    ).setValue(test_data.testData.new_branch_name_ordinary_bank_value);
    await browser.pause(3000);

    // Set 口座番号(普通銀行) field
    // ★ 新環境適用' New Env Implementation
    const new_account_number2_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_account_number2_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.new_account_number2_label +
          "')]"
      );
    await new_branch_name_ordinary_bank_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const new_account_number2_id = await new_account_number2_lbl.getAttribute(
      "for"
    );
    await $(".//input[@id='" + new_account_number2_id + "']").setValue(
      test_data.testData.new_account_number2_value
    );
    await browser.pause(3000);

    // Save record
    const save_btn = await $(
      ".//button[@name='" + test_data.testData.save_btn + "']"
    );
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);
    await browser.refresh();

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Get BA record
    await parent.Get_BA_Record();

    // Go to BA record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    //Take screenshot CL Origination
    const ba_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const ba_headerBar = await $(".//header[@id='oneHeader']");
    const ba_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot CL Origination
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [ba_headerBar, ba_tabheader, ba_highlights],
      }
    );
    await browser.pause(5000);

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Click pencil icon beside 返済用銀行口座 field
    // ★ 新環境適用' New Env Implementation
    // Scroll to section
    await $(
      ".//span[contains(., '" +
        test_data.testData.submission_data_section +
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
      "//button[@title='" +
        test_data.testData.repayment_bank_account_edit_btn +
        "']"
    ).click();
    await browser.pause(5000);

    // Select newly created bank account record
    // ★ 新環境適用' New Env Implementation
    const bank_id = await $(
      "label=" + test_data.testData.repayment_bank_account_label
    ).getAttribute("for");
    await $("//input[contains(@id, '" + bank_id + "')]").setValue(
      test_data.testData.ba_name
    );

    // Select newly created bank account record
    await $(
      "//lightning-base-combobox-item[@data-value='" +
        test_data.testData.ba_id +
        "']"
    ).click();
    await browser.pause(3000);

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
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideElements: [footer2],
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save changes in APP record
    await save_btn.waitForClickable({ timeout: 10000 });
    await save_btn.click();
    await browser.pause(20000);

    await browser.refresh();
    await browser.pause(10000);

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

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
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
