const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-13");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it(
    "Fj_TestScheme_00_0010_step_36: You can set up and save a newly created " +
      "銀行口座 bank account (返済用フラグ flag is set to TRUE) to 返済用銀行口座",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "36";

      // ★ 新環境適用' New Env Implementation
      // Go to APP
      await parent.Open_APP_Record(4);

      // Scroll to section
      await $(
        ".//span[contains(., '" +
          test_data.testData.app_fourth_tab_edit_section +
          "')]"
      ).scrollIntoView();

      // Click pencil icon beside 返済用銀行口座 field
      await $(
        "//button[@title='" +
          test_data.testData.app_repayment_bank_account_edit_btn +
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
          test_data.testData.app_repayment_bank_account_edit_btn +
          "']"
      ).click();
      await browser.pause(5000);

      // ★ 新環境適用' New Env Implementation
      // Click BA
      const ba_lbl = await $(
        "label=" + test_data.testData.app_repayment_bank_account_label
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
          test_data.testData.spec00 +
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
      await util.modal_fullpage2();

      // Dialog box
      const dialog = await $(
        "//div[@class='modal-container slds-modal__container']"
      );

      // ★ 新環境適用' New Env Implementation
      // 取引先＝申込.取引先
      // Set 取引先 field
      const account_id = await dialog
        .$("label=" + test_data.testData.ba_acct_lbl)
        .getAttribute("for");
      await $("//input[@id='" + account_id + "']").setValue(
        test_data.testData.account_name
      );
      await browser.pause(5000);
      const acct_name = await dialog.$(
        ".//a[contains(.,'" + test_data.testData.account_name + "')]"
      );
      await acct_name.waitForClickable({ timeout: 30000 });
      await acct_name.click();
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 申込 field
      const app_id = await dialog
        .$("label=" + test_data.testData.rdc_app_label)
        .getAttribute("for");
      await $("//input[@id='" + app_id + "']").setValue(
        test_data.testData.app_name
      );
      await browser.pause(5000);
      const app_name = await dialog.$(
        ".//a[contains(.,'" + test_data.testData.app_name + "')]"
      );
      await app_name.waitForClickable({ timeout: 30000 });
      await app_name.click();
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 確認ステータス＝確認済
      const confirmation = await $(
        "span=" + test_data.testData.ba_status_lbl
      ).$("../../div");
      await confirmation.click();
      await browser.pause(3000);

      await $("a=" + test_data.testData.ba_confirmation_status_value).click();
      await browser.pause(5000);

      // ★ 新環境適用' New Env Implementation
      // 返済用フラグ＝TRUE
      // Set 返済用フラグ field to checked
      const repayment = await dialog.$(
        "span=" + test_data.testData.ba_repayment_flag_label
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
      const deposittype = await $(
        "span=" + test_data.testData.ba_deposit_type_lbl
      ).$("../../div");
      await deposittype.click();
      await browser.pause(3000);

      await $("a=" + test_data.testData.ba_deposit_type_value).click();
      await browser.pause(5000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関名(選択)＝ * Any value
      // Set 金融機関名(選択) field
      const fininstnameopt = await $(
        "span=" + test_data.testData.ba_input_fin_inst_lbl
      ).$("../../div");
      await fininstnameopt.click();
      await browser.pause(3000);

      await $(
        "a=" + test_data.testData.ba_financial_inst_name_optional_value
      ).click();
      await browser.pause(5000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関コード＝* Any number 4 digits
      // Set 金融機関コード field
      const fininstcode = await dialog
        .$("span=" + test_data.testData.ba_financial_inst_code_label)
        .$("../../label");
      await fininstcode.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const fininstcode_id = await fininstcode.getAttribute("for");
      await $(".//input[@id='" + fininstcode_id + "']").setValue(
        test_data.testData.ba_financial_inst_code_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関種類＝ * Any value
      // Set 金融機関種類 field
      const fininsttype = await $(
        "span=" + test_data.testData.ba_institution_type_label
      ).$("../../div");
      await fininsttype.click();
      await browser.pause(3000);

      await $("a=" + test_data.testData.ba_financial_inst_type_value).click();
      await browser.pause(5000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関名＝* Any value
      // Set 金融機関名 field
      const fininstname_lbl = await dialog
        .$("span=" + test_data.testData.ba_fin_institution_name_lbl)
        .$("../../label");
      await fininstname_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const fininstname_id = await fininstname_lbl.getAttribute("for");
      await $(".//input[@id='" + fininstname_id + "']").setValue(
        test_data.testData.ba_financial_inst_name_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店コード＝* Any number 3 digits
      // Set 支店コード field
      const branchcode = await dialog
        .$("span=" + test_data.testData.ba_branch_code_lbl)
        .$("../../label");
      await branchcode.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const branchcodeid = await branchcode.getAttribute("for");
      await $(".//input[@id='" + branchcodeid + "']").setValue(
        test_data.testData.ba_branch_code_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店名＝* Any value
      // Set 支店名 field
      const branchname = await dialog
        .$("span=" + test_data.testData.ba_input_branch_name_lbl)
        .$("../../label");
      await branchname.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const branchnameid = await branchname.getAttribute("for");
      await $(".//input[@id='" + branchnameid + "']").setValue(
        test_data.testData.ba_branch_name_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 口座番号 field
      const acctno = await dialog
        .$("span=" + test_data.testData.ba_input_acct_no_lbl)
        .$("../../label");
      await acctno.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const accountno1id = await acctno.getAttribute("for");
      await $(".//input[@id='" + accountno1id + "']").setValue(
        test_data.testData.ba_account_number1_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 預金種類（普通銀行） field
      const deposittype2 = await dialog.$(
        ".//div[@class[contains(.,'uiInputSelect')]][contains(.,'" +
          test_data.testData.ba_deposit_type_ordinary_bank_label +
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
      const deposittype2_next = await deposittype2
        .$(".//div/div")
        .getAttribute("id");
      await browser.pause(1000);
      const deptype2val = await $(
        ".//div[@aria-labelledby='" + deposittype2_next + "']"
      ).$(
        ".//a[@title='" +
          test_data.testData.ba_deposit_type_ordinary_bank_value +
          "']"
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

      // ★ 新環境適用' New Env Implementation
      // 金融機関コード(普通銀行)＝* Any number 4 digits
      // Set 金融機関コード(普通銀行) field
      const fininstcodeord = await dialog
        .$(
          "span=" +
            test_data.testData.ba_financial_inst_code_ordinary_bank_label
        )
        .$("../../label");
      await fininstcodeord.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const fininstcodeord_id = await fininstcodeord.getAttribute("for");
      await $(".//input[@id='" + fininstcodeord_id + "']").setValue(
        test_data.testData.ba_financial_inst_code_ordinary_bank_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関名(普通銀行)＝* Any value
      // Set 金融機関名(普通銀行) field
      const fininstnameord = await dialog
        .$(
          "span=" +
            test_data.testData.ba_financial_inst_name_ordinary_bank_label
        )
        .$("../../label");
      await fininstnameord.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const fininstnameord_id = await fininstnameord.getAttribute("for");
      await $(".//input[@id='" + fininstnameord_id + "']").setValue(
        test_data.testData.ba_financial_inst_name_ordinary_bank_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店コード(普通銀行)＝* Any number 3 digits
      // Set 支店コード(普通銀行) field
      const branchcodeord = await dialog
        .$("span=" + test_data.testData.ba_branch_code_ordinary_label)
        .$("../../label");
      await branchcodeord.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const branchcodeord_id = await branchcodeord.getAttribute("for");
      await $(".//input[@id='" + branchcodeord_id + "']").setValue(
        test_data.testData.ba_branch_code_ordinary_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店名(普通銀行)＝* Any value
      // Set 支店名(普通銀行) field
      const branchnameord = await dialog
        .$("span=" + test_data.testData.ba_branch_name_ordinary_bank_label)
        .$("../../label");
      await branchnameord.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const branchnameord_id = await branchnameord.getAttribute("for");
      await $(".//input[@id='" + branchnameord_id + "']").setValue(
        test_data.testData.ba_branch_name_ordinary_bank_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 口座番号(普通銀行) field
      const acctno2 = await dialog
        .$("span=" + test_data.testData.ba_account_number2_label)
        .$("../../label");
      await acctno2.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const acctno2_id = await acctno2.getAttribute("for");
      await $(".//input[@id='" + acctno2_id + "']").setValue(
        test_data.testData.ba_account_number2_value
      );
      await browser.pause(1000);
      await acctno2.click();
      await browser.pause(3000);

      // Screenshot
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
        }
      );

      // Save record
      await dialog
        .$(".//button[@title='" + test_data.testData.save_btn + "']")
        .click();

      // Toast screenshot
      await util.Toast_Message();
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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
      await browser.pause(15000);

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
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: test_data.testData.isTrue,
        }
      );

      // Get BA record
      await parent.Get_BA(); // ★ 新環境適用' New Env Implementation

      // Go to BA record
      await parent.Open_BA_Record(); // ★ 新環境適用' New Env Implementation

      // ★ 新環境適用' New Env Implementation
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-5",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
      await browser.pause(2000);
    }
  );
}
