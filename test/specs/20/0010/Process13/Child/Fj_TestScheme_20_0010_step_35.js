const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0010-13");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_20_0010_step_35: Create new 返済用銀行口座 record where 返済用フラグ = TRUE", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "35";

    // Go to APP record detail screen
    await parent.Go_to_APP();

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

    // fullpage modal
    await util.modal_fullpage();

    // Dialog box
    const dialog = await $("//div[@data-aura-class='oneRecordActionWrapper']");

    // ★ 新環境適用' New Env Implementation
    // 取引先＝申込.取引先
    // Set 取引先 field
    const accountname = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.acct_label +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.acct_label + "')]");
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

    // 確認ステータス＝確認済み
    const confirmation = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.confirmation_status_label +
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
        test_data.testData.new_confirmation_status_value +
        "')]"
    ).click();
    await browser.pause(1000);

    // 預金種類＝ * Any value
    // Set 預金種類 field
    const deposittype = await dialog.$(
      ".//label[contains(.,'" + test_data.testData.deposit_type_label + "')]"
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

    // 金融機関名(選択)＝ * Any value
    // Set 金融機関名(選択) field
    const fininstnameopt = await dialog.$(
      ".//label[contains(.,'" +
        test_data.testData.institution_name_opt_label +
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
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.new_financial_inst_type_value +
        "')]"
    ).click();

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

    // 金融機関名＝* Any value
    // Set 金融機関名 field
    const fininstname_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.fin_institution_name_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.fin_institution_name_label +
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

    // 支店コード＝* Any number 3 digits
    // Set 支店コード field
    const branchcode = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.branch_code_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.branch_code_label + "')]"
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

    // 支店名＝* Any value
    // Set 支店名 field
    const branchname = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.branch_name_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.branch_name_label + "')]"
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

    // Set 口座番号 field
    const acctno = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.account_number_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.account_number_label +
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

    // Set 預金種類（普通銀行） field
    const deposittype2 = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_deposit_type_ordinary_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_deposit_type_ordinary_lbl +
          "')]"
      );
    await deposittype2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await deposittype2.click();
    await browser.pause(1000);
    const deptype2val = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_deposit_type_ordinary_lbl +
          "']"
      )
      .$(
        ".//lightning-base-combobox-item/span[contains(., '" +
          test_data.testData.new_deposit_type_value +
          "')]"
      );
    await deptype2val.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await deptype2val.waitForClickable({ timeout: 30000 });
    await deptype2val.click();
    await browser.pause(1000);

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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
      }
    );

    // Save record
    await dialog
      .$(".//button[@name='" + test_data.testData.save_edit_btn + "']")
      .click();

    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );

    // Get NEW BA record
    await parent.Get_BA();

    // Go to APP record detail screen
    await parent.Go_to_APP();

    // ★ 新環境適用' New Env Implementation
    // Scroll to section
    await $(
      ".//span[contains(., '" +
        test_data.testData.submission_data_section +
        "')]"
    ).scrollIntoView();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // Scroll to section
    await $(
      ".//span[contains(., '" +
        test_data.testData.submission_data_section +
        "')]"
    ).scrollIntoView();
    await browser.pause(3000);

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

    // Screenshot - edit page
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
        test_data.testData.save_btn +
        "')]"
    ).$(function () {
      var height = document.getElementsByClassName(
        "col main-col slds-col"
      ).offsetHeight;
      this.style.marginTop = height + this.height + "px";
      (this.style.marginBottom = "-100px"), (this.style.position = "static");
    });
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
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

    // Save changes in APP record
    const save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await save_edit_btn.waitForClickable({ timeout: 5000 });
    await save_edit_btn.click();
    await browser.pause(30000);

    await browser.refresh();

    // Go to BA record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );
  });
}
