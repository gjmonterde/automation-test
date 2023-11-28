const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0011-5");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0011_step_14: From the 「新規」New button of the 銀行口座関連リスト bank account " +
      "related list, new registration is possible by setting the following in the 銀行口座 bank account",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "14";

      // Go to App record
      await parent.Go_to_APP();

      // Scroll to view - 銀行口座 related list
      await util.Scroll_to_related_list(test_data.testData.ba_header);

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

      // BA Modal - full screen
      await util.modal_fullpage();

      // Dialog box
      const dialog = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );

      // Set 取引先 field
      // ★ 新環境適用' New Env Implementation
      const acct_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_acct_label +
            "']"
        )

        .$(".//label[contains(.,'" + test_data.testData.ba_acct_label + "')]");
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

      // Set 振込先フラグ field to checked
      // ★ 新環境適用' New Env Implementation
      const payee_flag = await dialog.$(
        ".//*[contains(text(), '" +
          test_data.testData.ba_payee_flag_label +
          "')]"
      );
      await payee_flag.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      await payee_flag.waitForClickable({ timeout: 30000 });
      await payee_flag.click();
      await browser.pause(1000);

      // Set 確認ステータス field
      // ★ 新環境適用' New Env Implementation
      const status_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_confirmation_status_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_confirmation_status_label +
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
      await $(
        "span=" + test_data.testData.ba_confirmation_status_value
      ).click();
      await browser.pause(1000);

      // Set 預金種類 field
      // ★ 新環境適用' New Env Implementation
      const deposittype_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_deposit_type_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_deposit_type_label +
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
      await $("span=" + test_data.testData.ba_deposit_type_value).click();
      await browser.pause(1000);

      // Set お受取人お名前 field
      // ★ 新環境適用' New Env Implementation
      const recipientnamelbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_recipient_name_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_recipient_name_label +
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
        test_data.testData.ba_recipient_name_value
      );
      await browser.pause(1000);

      // Set 金融機関名(選択) field
      // ★ 新環境適用' New Env Implementation
      const institutionname_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_institution_name_opt_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_institution_name_opt_label +
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
      await $(
        "span=" + test_data.testData.ba_institution_name_opt_value
      ).click();
      await browser.pause(1000);

      // Set お受取人カタカナ field
      // ★ 新環境適用' New Env Implementation
      const recipientkana_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_recipient_kana_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_recipient_kana_label +
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
        test_data.testData.ba_recipient_kana_value
      );
      await browser.pause(1000);

      // Set 金融機関名 field
      // ★ 新環境適用' New Env Implementation
      const fininstname_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_fin_institution_name_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_fin_institution_name_label +
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
        test_data.testData.ba_fin_institution_name_value
      );
      await browser.pause(1000);

      // Set 支店コード field
      // ★ 新環境適用' New Env Implementation
      const branchcode = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_branch_code_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_branch_code_label +
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
        test_data.testData.ba_branch_code_value
      );
      await browser.pause(1000);

      // Set 支店名 field
      // ★ 新環境適用' New Env Implementation
      const branchname = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_branch_name_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_branch_name_label +
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
        test_data.testData.ba_branch_name_value
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 口座番号 field
      const accountno_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_account_number_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_account_number_label +
            "')]"
        );
      await accountno_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const accountno1id = await accountno_lbl.getAttribute("for");
      await $(".//input[@id='" + accountno1id + "']").setValue(
        test_data.testData.ba_account_number_value1
      );

      // Set 振込金額(円) field
      // ★ 新環境適用' New Env Implementation
      const transferamount_lbl = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_transfer_amount_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_transfer_amount_label +
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
        test_data.testData.ba_transfer_amount_value1
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
        test_data.testData.ba_fee_amount_value1
      );
      await browser.pause(500);
      await bafee_lbl.click();
      await browser.pause(1000);

      // BA Modal - full screen
      await util.modal_fullpage();

      // Screenshot - 新規銀行口座 Screen
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
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
        .$(".//button[@name='" + test_data.testData.sf_saveedit_btn + "']")
        .click();

      // To determine if the toast shows up
      await util.Toast_Message();
      await browser.pause(1000);
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

      // Get Bank Info
      await parent.Get_BankAccount();

      // Go to New BA record
      await parent.Go_to_BA(test_data.testData.ba_id);

      // Click Clone button
      await $(
        ".//button[@name='" + test_data.testData.sf_clone_btn + "']"
      ).click();
      await browser.pause(2000);

      // Dialog box
      const dialog_clone = await $(
        "//div[@data-aura-class='oneRecordActionWrapper']"
      );
      await dialog_clone.click();
      await browser.pause(2000);

      // BA Modal - full screen
      await util.modal_fullpage();

      // ★ 新環境適用' New Env Implementation
      // Set 口座番号 field
      const acctno2 = await dialog_clone
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_account_number_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_account_number_label +
            "')]"
        );
      await acctno2.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const accountno2id = await acctno2.getAttribute("for");
      await $(".//input[@id='" + accountno2id + "']").setValue(
        test_data.testData.ba_account_number_value2
      );

      // Set 振込金額(円) field
      // ★ 新環境適用' New Env Implementation
      const transferamount_lbl2 = await dialog_clone
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_transfer_amount_label +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_transfer_amount_label +
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
        test_data.testData.ba_transfer_amount_value2
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 手数料額(円)
      const bafee_lbl2 = await dialog_clone
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_fee_amount_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" + test_data.testData.ba_fee_amount_lbl + "')]"
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
      await browser.pause(1000);

      // BA Modal - full screen
      await util.modal_fullpage();

      // Screenshot - 新規銀行口座 Screen
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-3",
        {
          hideAfterFirstScroll: [highlights2, headerBar2, tabheader2],
        }
      );

      // Save record
      await dialog_clone
        .$(".//button[@name='" + test_data.testData.sf_saveedit_btn + "']")
        .click();

      // To determine if the toast shows up
      await util.Toast_Message();
      await browser.pause(1000);
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-4"
      );

      // Refresh page
      await browser.refresh();
      await browser.pause(10000);

      // Go to App record
      await parent.Go_to_APP();

      // Screenshot - 申込 Screen
      const headerBar3 = await $(".//header[@id='oneHeader']");
      const tabheader3 = await $(
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
          test_data.testData.spec62 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-5",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Get Bank Info
      await parent.Get_BankAccount();

      let ssno = 5;
      for (var i = 0; i < test_data.testData.ba_id_arr.length; i++) {
        // Go to New BA record
        await parent.Go_to_BA(test_data.testData.ba_id_arr[i]);

        // Screenshot - 銀行口座 Screen
        const highlights4 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar4 = await $(".//header[@id='oneHeader']");
        const tabheader4 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        ssno = ssno + 1;
        await browser.saveFullPageScreen(
          user_info.userInformation.screenshot +
            test_data.testData.spec62 +
            "_" +
            test_data.testData.tab0011 +
            "_" +
            stepNum +
            "-" +
            ssno,
          {
            hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
          }
        );
      }
    }
  );
}
