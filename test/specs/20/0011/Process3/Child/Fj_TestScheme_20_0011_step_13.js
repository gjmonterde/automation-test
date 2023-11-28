const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_13: From the 「新規」New button of the 銀行口座関連リスト bank account related list, new registration is possible", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "13";

    // Go to App record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

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

    // Dialog box
    const dialog = await $("//div[@data-aura-class='oneRecordActionWrapper']");

    // ★ 新環境適用' New Env Implementation
    // fullpage modal
    await util.modal_fullpage();

    // ★ 新環境適用' New Env Implementation
    // 取引先＝申込.取引先
    // Set 取引先 field
    const acct_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.acct_label +
          "']"
      )

      .$(".//label[contains(.,'" + test_data.testData.acct_label + "')]");
    await acct_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const acct_id = await acct_lbl.getAttribute("for");
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

    // 振込先フラグ＝TRUE
    // Set 振込先フラグ field to checked
    const payee = await dialog.$(
      ".//*[contains(text(),'" + test_data.testData.payee_flag_label + "')]"
    );
    await payee.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await payee.waitForClickable({ timeout: 30000 });
    await payee.click();

    // 確認ステータス＝「確認済」
    // Set 確認ステータス field
    const status_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.confirmation_status_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.confirmation_status_label +
          "')]"
      );
    await status_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const confirmation_status_id = await status_lbl.getAttribute("for");
    await $(
      "//button[contains(@id, '" + confirmation_status_id + "')]"
    ).click();
    await $("span=" + test_data.testData.confirmation_status_value).click();

    // 預金種類＝ * Any value
    // Set 預金種類 field
    const deposittype_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.deposit_type_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.deposit_type_label + "')]"
      );
    await deposittype_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const deposit_type_id = await deposittype_lbl.getAttribute("for");
    await $("//button[contains(@id, '" + deposit_type_id + "')]").click();
    await $("span=" + test_data.testData.deposit_type_value).click();

    // お受取人おなまえ＝ * Any value
    // Set お受取人お名前 field
    const recipientnamelbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.recipient_name_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.recipient_name_label +
          "')]"
      );
    await recipientnamelbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const recipientname_id = await recipientnamelbl.getAttribute("for");
    await $(".//input[@id='" + recipientname_id + "']").setValue(
      test_data.testData.recipient_name_value
    );

    // 金融機関名(選択)＝「当行」
    // Set 金融機関名(選択) field
    const institutionname_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.institution_name_opt_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.institution_name_opt_label +
          "')]"
      );
    await institutionname_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const institution_name_opt_id = await institutionname_lbl.getAttribute(
      "for"
    );
    await $(
      "//button[contains(@id, '" + institution_name_opt_id + "')]"
    ).click();
    await $("span=" + test_data.testData.institution_name_opt_value).click();

    // お受取人カタカナ＝ * Any value
    // Set お受取人カタカナ field
    const recipientkana_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.recipient_kana_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.recipient_kana_label +
          "')]"
      );
    await recipientkana_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const recipientkana_id = await recipientkana_lbl.getAttribute("for");
    await $(".//input[@id='" + recipientkana_id + "']").setValue(
      test_data.testData.recipient_kana_value
    );

    // 金融機関名＝ * Any value
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
      test_data.testData.fin_institution_name_value
    );

    // 支店コード＝* Any number 3 digits
    // Set 支店コード field
    const branchcode_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.branch_code_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.branch_code_label + "')]"
      );
    await branchcode_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const branchcode_id = await branchcode_lbl.getAttribute("for");
    await $(".//input[@id='" + branchcode_id + "']").setValue(
      test_data.testData.branch_code_value
    );

    // 支店名＝ * Any value
    // Set 支店名 field
    const branchname_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.branch_name_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.branch_name_label + "')]"
      );
    await branchname_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const branchname_id = await branchname_lbl.getAttribute("for");
    await $(".//input[@id='" + branchname_id + "']").setValue(
      test_data.testData.branch_name_value
    );

    // Set 口座番号 field
    const accountno_lbl = await dialog
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
    await accountno_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const accountno_id = await accountno_lbl.getAttribute("for");
    await $(".//input[@id='" + accountno_id + "']").setValue(
      test_data.testData.account_number_value1
    );

    // 振込金額＝ * Any value
    // Set 振込金額(円) field
    const transferamount_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.transfer_amount_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.transfer_amount_label +
          "')]"
      );
    await transferamount_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const transfermount_id = await transferamount_lbl.getAttribute("for");
    await $(".//input[@id='" + transfermount_id + "']").setValue(
      test_data.testData.transfer_amount_value1
    );

    // ★ 新環境適用' New Env Implementation
    // 手数料額(円)
    const bafee_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_fee_amount_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.ba_fee_amount_lbl + "')]"
      );
    await bafee_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const bafee_id = await bafee_lbl.getAttribute("for");
    await $(".//input[@id='" + bafee_id + "']").setValue(
      test_data.testData.ba_fee_amount_value1
    );
    await browser.pause(500);
    await bafee_lbl.click();

    // ★ 新環境適用' New Env Implementation
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
        test_data.testData.tab0011 +
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

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Go to 案件詳細 tab
    await util.Application_Record_Scrolling(2);

    // Screenshot - 申込 Screen
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 2000,
        disableCSSAnimation: true,
      }
    );

    // Get Bank Info
    await parent.Get_BankAccount();

    // Go to New BA record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

    // Click Clone button
    await $(".//button[@name='" + test_data.testData.clone_btn + "']").click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // fullpage modal
    await util.modal_fullpage();

    // Dialog box
    const dialog_clone = await $(
      "//div[@data-aura-class='oneRecordActionWrapper']"
    );
    await dialog_clone.click();

    // Set 口座番号 field
    const accountno2_lbl = await dialog
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
    await accountno2_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const accountno2_id = await accountno2_lbl.getAttribute("for");
    await $(".//input[@id='" + accountno2_id + "']").setValue(
      test_data.testData.account_number_value2
    );

    // Set 振込金額(円) field
    const transferamount2_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.transfer_amount_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.transfer_amount_label +
          "')]"
      );
    await transferamount2_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const transfermount2_id = await transferamount_lbl.getAttribute("for");
    await $(".//input[@id='" + transfermount2_id + "']").setValue(
      test_data.testData.transfer_amount_value2
    );

    // ★ 新環境適用' New Env Implementation
    // 手数料額(円)
    const bafee2_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_fee_amount_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.ba_fee_amount_lbl + "')]"
      );
    await bafee2_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const bafee2_id = await bafee_lbl.getAttribute("for");
    await $(".//input[@id='" + bafee2_id + "']").setValue(
      test_data.testData.ba_fee_amount_value2
    );
    await browser.pause(500);
    await bafee2_lbl.click();

    // Screenshot - Edit screen
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Save record
    await dialog_clone
      .$(".//button[@name='" + test_data.testData.save_edit_btn + "']")
      .click();

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - 銀行口座 Screen
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
      }
    );

    // Go to App record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    // Go to 案件詳細 tab
    await util.Application_Record_Scrolling(2);

    // Screenshot - 申込 Screen
    const headerBar5 = await $(".//header[@id='oneHeader']");
    const tabheader5 = await $(
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-7",
      {
        hideAfterFirstScroll: [headerBar5, tabheader5],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: true,
      }
    );
  });
}
