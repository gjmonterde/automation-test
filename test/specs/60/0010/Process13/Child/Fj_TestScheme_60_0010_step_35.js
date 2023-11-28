const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0010_step_35: Create new 返済用銀行口座 record where 返済用フラグ = TRUE", async () => {
    const stepNum = "35"; // ★ 新環境適用' New Env Implementation

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Switch to 実行画面 tab
    await util.Application_Record_Scrolling(4);

    // Scroll to section
    await $(
      ".//span[contains(., '" +
        test_data.testData.submission_data_section +
        "')]"
    ).scrollIntoView();

    // Click pencil icon beside 返済用銀行口座 field
    await $(
      "//button[@title='" +
        test_data.testData.repayment_bank_account_edit_btn +
        "']"
    ).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Click pencil icon beside 返済用銀行口座 field
    await $(
      "//button[@title='" +
        test_data.testData.repayment_bank_account_edit_btn +
        "']"
    ).click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Click BA
    const ba_lbl = await $(
      "label=" + test_data.testData.repayment_bank_account_label
    );
    await ba_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await ba_lbl.waitForClickable({ timeout: 30000 });
    await ba_lbl.click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );

    // ★ 新環境適用' New Env Implementation
    // Click New BA record option from dropdown
    await $(
      ".//lightning-base-combobox-item[@data-value='actionCreateNew'][contains(., '" +
        test_data.testData.app_new_ba_record_btn +
        "')]"
    ).click();
    await browser.pause(10000);

    // Full page modal
    await util.modal_fullpage();

    // Dialog box
    const dialog = await $(
      "//div[@class='modal-container slds-modal__container']"
    );

    // ★ 新環境適用' New Env Implementation
    // 取引先＝申込.取引先
    // Set 取引先 fields
    const accountname = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_acct_label +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.new_acct_label + "')]");
    await accountname.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const acct_id = await accountname.getAttribute("for");
    await $(".//input[@id='" + acct_id + "']").setValue(
      test_data.testData.account_name
    );
    await browser.pause(5000);
    const acct_name = await $(
      ".//lightning-base-combobox-item[@data-value[contains(.,'" +
        test_data.testData.account_id +
        "')]]"
    );
    await acct_name.waitForClickable({ timeout: 30000 });
    await acct_name.click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 申込 field
    const appname = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.new_app_label +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.new_app_label + "')]");
    await appname.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const app_id = await appname.getAttribute("for");
    await $(".//input[@id='" + app_id + "']").setValue(
      test_data.testData.app_name
    );
    await browser.pause(5000);
    const app_name = await $(
      ".//lightning-base-combobox-item[@data-value[contains(.,'" +
        test_data.testData.app_id +
        "')]]"
    );
    await browser.execute((app_name) => {
      app_name.click();
    }, app_name);
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 確認ステータス＝確認済み
    const confirmation = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.ba_confirmation_status_label +
        "')]"
    );
    await confirmation.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await confirmation.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.ba_confirmation_status_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 返済用フラグ＝TRUE
    // Set 返済用フラグ field to checked
    const repayment = await dialog.$(
      ".//*[contains(text(),'" +
        test_data.testData.new_repayment_flag_label +
        "')]"
    );
    await repayment.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await repayment.waitForClickable({ timeout: 30000 });
    await repayment.click();

    // ★ 新環境適用' New Env Implementation
    // 預金種類＝ * Any value
    // Set 預金種類 field
    const deposittype = await dialog.$(
      ".//label[contains(.,'" + test_data.testData.ba_deposit_type_label + "')]"
    );
    await deposittype.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await deposittype.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.new_deposit_type_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 金融機関名(選択)＝ * Any value
    // Set 金融機関名(選択) field
    const fininstnameopt = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.new_financial_inst_name_optional_label +
        "')]"
    );
    await fininstnameopt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await fininstnameopt.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.new_financial_inst_name_optional_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 金融機関コード＝* Any number 4 digits
    // Set 金融機関コード field
    const fininstcode = await dialog
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
    await fininstcode.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const fininstcode_id = await fininstcode.getAttribute("for");
    await $(".//input[@id='" + fininstcode_id + "']").setValue(
      test_data.testData.new_financial_inst_code_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 金融機関種類＝ * Any value
    // Set 金融機関種類 field
    const fininsttype = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.new_financial_inst_type_actual_label +
        "')]"
    );
    await fininsttype.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await browser.pause(1000);
    await fininsttype.click();
    await dialog
      .$(
        ".//lightning-base-combobox-item[contains(.,'" +
          test_data.testData.new_financial_inst_type_value +
          "')]"
      )
      .click();

    // ★ 新環境適用' New Env Implementation
    // 金融機関名＝* Any value
    // Set 金融機関名 field
    await browser.pause(1000);
    const fininstname_lbl = await dialog
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
    await fininstname_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const fininstname_id = await fininstname_lbl.getAttribute("for");
    await $(".//input[@id='" + fininstname_id + "']").setValue(
      test_data.testData.new_financial_inst_name_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 支店コード＝* Any number 3 digits
    // Set 支店コード field
    const branchcode = await dialog
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
    await branchcode.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const branchcodeid = await branchcode.getAttribute("for");
    await $(".//input[@id='" + branchcodeid + "']").setValue(
      test_data.testData.new_branch_code_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 支店名＝* Any value
    // Set 支店名 field
    const branchname = await dialog
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
    await branchname.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const branchnameid = await branchname.getAttribute("for");
    await $(".//input[@id='" + branchnameid + "']").setValue(
      test_data.testData.new_branch_name_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 口座番号 field
    const acctno = await dialog
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
    await acctno.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const accountno1id = await acctno.getAttribute("for");
    await $(".//input[@id='" + accountno1id + "']").setValue(
      test_data.testData.new_account_number1_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 金融機関コード(普通銀行)＝* Any number 4 digits
    // Set 金融機関コード(普通銀行) field
    const fininstcodeord = await dialog
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
    await fininstcodeord.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const fininstcodeord_id = await fininstcodeord.getAttribute("for");
    await $(".//input[@id='" + fininstcodeord_id + "']").setValue(
      test_data.testData.new_financial_inst_code_ordinary_bank_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 金融機関名(普通銀行)＝* Any value
    // Set 金融機関名(普通銀行) field
    const fininstnameord = await dialog
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
    await fininstnameord.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const fininstnameord_id = await fininstnameord.getAttribute("for");
    await $(".//input[@id='" + fininstnameord_id + "']").setValue(
      test_data.testData.new_financial_inst_name_ordinary_bank_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 支店コード(普通銀行)＝* Any number 3 digits
    // Set 支店コード(普通銀行) field
    const branchcodeord = await dialog
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
    await branchcodeord.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const branchcodeord_id = await branchcodeord.getAttribute("for");
    await $(".//input[@id='" + branchcodeord_id + "']").setValue(
      test_data.testData.new_branch_code_ordinary_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // 支店名(普通銀行)＝* Any value
    // Set 支店名(普通銀行) field
    const branchnameord = await dialog
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
    await branchnameord.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const branchnameord_id = await branchnameord.getAttribute("for");
    await $(".//input[@id='" + branchnameord_id + "']").setValue(
      test_data.testData.new_branch_name_ordinary_bank_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 口座番号(普通銀行) field
    const acctno2 = await dialog
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
    await acctno2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const acctno2_id = await acctno2.getAttribute("for");
    await $(".//input[@id='" + acctno2_id + "']").setValue(
      test_data.testData.new_account_number2_value
    );
    await browser.pause(1000);
    await acctno2.click();

    // fullpage modal
    await util.modal_fullpage();

    // Screenshot - 新規銀行口座 Screen
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
      }
    );

    await browser.pause(180000);

    // Save record
    await dialog
      .$(".//button[@name='" + test_data.testData.save_edit_btn + "']")
      .click();

    // Toast screenshot
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );

    // Save changes in APP record
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 5000 });
    await save_edit_btn.click();
    await browser.pause(20000);

    // Screenshot
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
