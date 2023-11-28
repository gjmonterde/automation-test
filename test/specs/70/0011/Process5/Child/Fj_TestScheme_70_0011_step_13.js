const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_70_0011-5"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0011_step_13: From the 「新規」New button of the 銀行口座関連リストbank account related list, " +
      "new registration is possible by setting the following in the 銀行口座 bank account",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "13";

      // Go to App Record
      await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

      // Scroll to view - 銀行口座 related list
      await util.Scroll_to_related_list(test_data.testData.ba_header); // ★ 新環境適用' New Env Implementation

      // Create New BA record
      const ba_new_link = await $(
        ".//*[@data-target-reveals='" + test_data.testData.api_ba_new_btn + "']"
      );
      await ba_new_link.scrollIntoView();
      await ba_new_link.waitForClickable({ timeout: 30000 });
      await ba_new_link.click();
      await browser.pause(5000);

      // Screenshot - new BA
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );

      const create_new_ba_btn = await $(
        ".//*[@data-target-selection-name='" +
          test_data.testData.api_ba_new_btn +
          "']"
      );
      await create_new_ba_btn.click();
      await browser.pause(5000);

      // BA Modal - full screen
      await util.modal_fullpage();

      // Dialog box
      const dialog = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );

      // ★ 新環境適用' New Env Implementation
      // 取引先＝申込.取引先
      const acct_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_acct_lbl +
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

      // Set 口座振替登録完了予定日 field
      // ★ 新環境適用' New Env Implementation
      const transferdatelbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_transfer_date_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_transfer_date_lbl +
            "')]"
        );
      await transferdatelbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const transferdateid = await transferdatelbl.getAttribute("for");
      await $(".//input[@id='" + transferdateid + "']").setValue(
        test_data.testData.ba_transferdate_val
      );
      await browser.pause(1000);

      // 振込先フラグ＝TRUE
      // ★ 新環境適用' New Env Implementation
      const payee = await dialog.$(
        ".//*[contains(text(),'" + test_data.testData.ba_payee_flag_lbl + "')]"
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
      await browser.pause(1000);

      // 確認ステータス＝「確認済」
      // ★ 新環境適用' New Env Implementation
      const status_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_confirmation_status_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_confirmation_status_lbl +
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
      await $("span=" + test_data.testData.ba_confirmation_status_val).click();
      await browser.pause(1000);

      // 預金種類＝ * Any value
      // ★ 新環境適用' New Env Implementation
      const deposittype_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_deposit_type_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_deposit_type_lbl +
            "')]"
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
      await browser.pause(1000);

      // お受取人おなまえ＝ * Any value
      // ★ 新環境適用' New Env Implementation
      const recipientnamelbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_recipient_name_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_recipient_name_lbl +
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
      await browser.pause(1000);

      // 金融機関名(選択)＝ *Any value
      // ★ 新環境適用' New Env Implementation
      const institutionname_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_financial_inst_name_optional_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_financial_inst_name_optional_lbl +
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
      await browser.pause(1000);

      // お受取人カタカナ＝ * Any value
      // ★ 新環境適用' New Env Implementation
      const recipientkana_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_recipient_name_kana_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_recipient_name_kana_lbl +
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
        test_data.testData.ba_recipient_name_kana_val
      );
      await browser.pause(1000);

      // 金融機関種類
      // ★ 新環境適用' New Env Implementation
      const fininsttype = await dialog.$(
        ".//label[contains(.,'" +
          test_data.testData.ba_new_financial_inst_type_lbl +
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
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_financial_inst_type_lbl +
            "']"
        )
        .$(
          ".//lightning-base-combobox-item[contains(.,'" +
            test_data.testData.ba_new_financial_inst_type_val +
            "')]"
        )
        .click();
      await browser.pause(1000);

      // 金融機関コード
      // ★ 新環境適用' New Env Implementation
      const fininstcode = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_financial_inst_code_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_financial_inst_code_lbl +
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
        test_data.testData.ba_bank_code_val
      );
      await browser.pause(1000);

      // 金融機関名
      // ★ 新環境適用' New Env Implementation
      const fininstname_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_financial_inst_name_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_financial_inst_name_lbl +
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
        test_data.testData.ba_fin_inst_name_val
      );
      await browser.pause(1000);

      // 支店コード = * Any number 3 digits
      // ★ 新環境適用' New Env Implementation
      const branchcode = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_branch_code_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_branch_code_lbl +
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
        test_data.testData.ba_branch_code_val
      );
      await browser.pause(1000);

      // 支店名
      // ★ 新環境適用' New Env Implementation
      const branchname = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_branch_name_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_branch_name_lbl +
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
        test_data.testData.ba_branch_name_val1
      );
      await browser.pause(1000);

      // 口座番号
      // ★ 新環境適用' New Env Implementation
      const acctno = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_account_number1_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_account_number1_lbl +
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
        test_data.testData.ba_account_no_val
      );
      await browser.pause(1000);

      // 振込金額(円)
      // ★ 新環境適用' New Env Implementation
      const transferamount_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_amount_lbl +
            "']"
        )
        .$(".//label[contains(.,'" + test_data.testData.ba_amount_lbl + "')]");
      await transferamount_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const transfermount_id = await transferamount_lbl.getAttribute("for");
      await $(".//input[@id='" + transfermount_id + "']").setValue(
        test_data.testData.ba_amount_val
      );
      await browser.pause(1000);

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
        test_data.testData.ba_fee_amount_val
      );
      await browser.pause(500);
      await bafee_lbl.click();
      await browser.pause(1000);

      // BA Modal - full screen
      await util.modal_fullpage();

      // Screenshot - 新規銀行口座 Screen
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar, tabheader],
        }
      );

      // Save record
      await dialog
        .$(".//button[@name='" + test_data.testData.sf_saveedit_btn + "']")
        .click();
      // To determine if the toast shows up
      await util.Toast_Message(); // ★ 新環境適用' New Env Implementation
      await browser.pause(2000);

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

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
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1],
          fullPageScrollTimeout: 2000,
          disableCSSAnimation: true,
        }
      );
    }
  );
}
