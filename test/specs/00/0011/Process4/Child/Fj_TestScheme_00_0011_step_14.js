const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-4");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_14: New registration is possible by setting the following in the 銀行口座 bank account", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "14";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }

    // Go to App record
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Scroll to view - 銀行口座 related list
    await util.Scroll_to_related_list(test_data.testData.ba_header);

    // From the 「新規」"New" button of the 銀行口座関連リスト bank account related list, new registration is possible
    // Create New BA record
    const ba_new_link = await $(
      ".//*[@data-target-reveals='" + test_data.testData.api_ba_new_btn + "']"
    );
    await ba_new_link.click();
    const create_new_ba_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.api_ba_new_btn +
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
    const acct_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.acct_label +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.ba_acct_lbl + "')]");
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

    // ★ 新環境適用' New Env Implementation
    // 振込先フラグ＝TRUE
    // Set 振込先フラグ field to checked
    const payee = await dialog.$(
      ".//label[contains(.,'" + test_data.testData.ba_payee_flag_lbl + "')]"
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

    // ★ 新環境適用' New Env Implementation
    // 確認ステータス＝「確認済」
    // Set 確認ステータス field
    const status_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_status_lbl +
          "']"
      )
      .$(".//label[contains(.,'" + test_data.testData.ba_status_lbl + "')]");
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
    await $("span=" + test_data.testData.ba_confirmation_status_value).click();

    // ★ 新環境適用' New Env Implementation
    // 預金種類＝ * Any value
    // Set 預金種類 field
    const deposittype_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.deposit_type_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.ba_deposit_type_lbl + "')]"
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
    await $("span=" + test_data.testData.ba_deposit_type_val).click();

    // ★ 新環境適用' New Env Implementation
    // お受取人おなまえ＝ * Any value
    // Set お受取人お名前 field
    const recipientnamelbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_input_rcp_name_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_input_rcp_name_lbl +
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
      test_data.testData.ba_recipient_name_val
    );

    // ★ 新環境適用' New Env Implementation
    // 金融機関名(選択)＝「当行」
    // Set 金融機関名(選択) field
    const institutionname_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_input_fin_inst_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_input_fin_inst_lbl +
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
    await $("span=" + test_data.testData.ba_institution_name_opt_val).click();

    // ★ 新環境適用' New Env Implementation
    // お受取人カタカナ＝ * Any value
    // Set お受取人カタカナ field
    const recipientkana_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_input_rcp_name_kana_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_input_rcp_name_kana_lbl +
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
      test_data.testData.ba_recipient_kana_val
    );

    // ★ 新環境適用' New Env Implementation
    // 金融機関名＝ * Any value
    // Set 金融機関名 field
    const fininstname_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_fin_institution_name_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_fin_institution_name_lbl +
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
      test_data.testData.ba_fin_institution_name_val
    );

    // ★ 新環境適用' New Env Implementation
    // 支店コード＝* Any number 3 digits
    // Set 支店コード field
    const branchcode_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_branch_code_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" + test_data.testData.ba_branch_code_lbl + "')]"
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
      test_data.testData.ba_branch_code_val
    );

    // ★ 新環境適用' New Env Implementation
    // 支店名＝ * Any value
    // Set 支店名 field
    const branchname_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_input_branch_name_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_input_branch_name_lbl +
          "')]"
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
      test_data.testData.ba_branch_name_val
    );

    // ★ 新環境適用' New Env Implementation
    // Set 口座番号 field
    const accountno_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_input_acct_no_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_input_acct_no_lbl +
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
      test_data.testData.ba_account_number_val1
    );

    // ★ 新環境適用' New Env Implementation
    // 振込金額＝ * Any value
    // Set 振込金額(円) field
    const transferamount_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_transfer_amount_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_transfer_amount_lbl +
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
      test_data.testData.ba_transfer_amount_val1
    );

    // ★ 新環境適用' New Env Implementation
    // 手数料額(円)
    const bafee_lbl = await dialog
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_account_fee_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_account_fee_label +
          "')]"
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
      test_data.testData.ba_fee_amount_value
    );
    await browser.pause(500);
    await bafee_lbl.click();

    // Screenshot - 新規銀行口座 Screen
    // ★ 新環境適用' New Env Implementation
    await dialog.$("label=" + test_data.testData.ba_input_acct_no_lbl).click();
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Save record
    await dialog
      .$(".//button[@name='" + test_data.testData.sf_saveedit_btn + "']")
      .click();
    await browser.pause(30000);

    // Screenshot - 申込 Screen
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1],
        fullPageScrollTimeout: 5000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Refresh page
    await browser.refresh();
    await browser.pause(10000);

    // Get Bank Info
    await parent.Get_BankAccount_CL(); // ★ 新環境適用' New Env Implementation

    // Go to New BA record
    await parent.Go_to_BA(); // ★ 新環境適用' New Env Implementation

    // Screenshot - 銀行口座 Screen
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
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Click Clone button
    await $(".//button[@name='" + test_data.testData.clone_btn + "']").click();
    await browser.pause(5000);

    // fullpage modal
    await util.modal_fullpage();

    // Dialog box
    const dialog_clone = await $(
      "//div[@data-aura-class='oneRecordActionWrapper']"
    );
    await dialog_clone.click();

    // Scroll
    await dialog_clone
      .$("label=" + test_data.testData.ba_fin_institution_name_lbl)
      .scrollIntoView(test_data.testData.isTrue,);
    await browser.pause(5000);

    // Set 口座番号 field
    // ★ 新環境適用' New Env Implementation
    // Set 口座番号 field
    const accountno_lbl2 = await dialog_clone
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_input_acct_no_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_input_acct_no_lbl +
          "')]"
      );
    await accountno_lbl.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const accountno_id2 = await accountno_lbl2.getAttribute("for");
    await $(".//input[@id='" + accountno_id2 + "']").setValue(
      test_data.testData.ba_account_number_val2
    );

    // ★ 新環境適用' New Env Implementation
    // 振込金額＝ * Any value
    // Set 振込金額(円) field
    const transferamount_lbl2 = await dialog_clone
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_transfer_amount_lbl +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_transfer_amount_lbl +
          "')]"
      );
    await transferamount_lbl2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const transfermount_id2 = await transferamount_lbl2.getAttribute("for");
    await $(".//input[@id='" + transfermount_id2 + "']").setValue(
      test_data.testData.ba_transfer_amount_val2
    );

    // ★ 新環境適用' New Env Implementation
    // 手数料額(円)
    const bafee_lbl2 = await dialog_clone
      .$(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.ba_account_fee_label +
          "']"
      )
      .$(
        ".//label[contains(.,'" +
          test_data.testData.ba_account_fee_label +
          "')]"
      );
    await bafee_lbl2.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const bafee_id2 = await bafee_lbl2.getAttribute("for");
    await $(".//input[@id='" + bafee_id2 + "']").setValue(
      test_data.testData.ba_fee_amount_value2
    );
    await browser.pause(500);
    await bafee_lbl2.click();

    // Screenshot - 新規銀行口座 Screen
    // ★ 新環境適用' New Env Implementation
    await dialog_clone
      .$("label=" + test_data.testData.ba_input_acct_no_lbl)
      .click();
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );

    // Save record
    await dialog_clone
      .$(".//button[@name='" + test_data.testData.sf_saveedit_btn + "']")
      .click();
    await browser.pause(20000);

    // Screenshot - 銀行口座 Screen
    const highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar3 = await $(".//header[@id='oneHeader']");
    const tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
      }
    );

    // Go to App record
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Screenshot - 申込 Screen
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
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [headerBar4, tabheader4],
        fullPageScrollTimeout: 3000,
        disableCSSAnimation: test_data.testData.isTrue,
      }
    );

    // Go to BA Related List Page
    await parent.Go_to_BA_Rel(); // ★ 新環境適用' New Env Implementation

    // Screenshot - BA related list screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-7"
    );
  });
}
