const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0010-13");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it(
    "Fj_TestScheme_70_0010_step_37: You can set newly created　銀行口座 (the 返済用 repayment flag is set to TRUE)" +
      "to 返済用銀行口座 repayment bank account and can save it",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "37";

      // Go to App Record
      await parent.Go_to_App(4); // ★ 新環境適用' New Env Implementation

      // Scroll to section
      await $(
        ".//span[contains(., '" +
          test_data.testData.app_submission_data_section +
          "')]"
      ).scrollIntoView();

      // Scroll to 返済用銀行口座 field
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

      // Scroll field into view
      const ba_lbl = await $("label=" + test_data.testData.app_ba_field_lbl);
      await ba_lbl.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }); // ★ 新環境適用' New Env Implementation;

      // Clear field
      const ba_old_val = await ba_lbl.getAttribute("for");
      const clr_btn = await $(
        ".//input[@id='" + ba_old_val + "']//following::div[1]/button"
      );

      await clr_btn.waitForClickable({ timeout: 30000 });
      await clr_btn.click();
      await browser.pause(5000);

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
            test_data.testData.account_lbl +
            "']"
        )
        .$(".//label[contains(.,'" + test_data.testData.account_lbl + "')]");
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
            test_data.testData.ba_app_lbl +
            "']"
        )
        .$(".//label[contains(.,'" + test_data.testData.ba_app_lbl + "')]");
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
          test_data.testData.ba_confirmation_status_lbl +
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
          test_data.testData.ba_new_confirmation_status_val +
          "')]"
      ).click();
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 返済用フラグ＝TRUE
      // Set 返済用フラグ field to checked
      const repayment = await dialog.$(
        ".//*[contains(text(),'" +
          test_data.testData.ba_new_repayment_flag_lbl +
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
        ".//label[contains(.,'" +
          test_data.testData.ba_new_deposit_type_lbl +
          "')]"
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
          test_data.testData.ba_new_deposit_type_val +
          "')]"
      ).click();
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関名(選択)＝ * Any value
      // Set 金融機関名(選択) field
      const fininstnameopt = await dialog.$(
        ".//label[contains(.,'" +
          test_data.testData.ba_new_financial_inst_name_optional_lbl +
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
          test_data.testData.ba_new_financial_inst_name_optional_val +
          "')]"
      ).click();
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関コード＝* Any number 4 digits
      // Set 金融機関コード field
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
        test_data.testData.ba_new_financial_inst_code_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関種類＝ * Any value
      // Set 金融機関種類 field
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
          ".//lightning-base-combobox-item[contains(.,'" +
            test_data.testData.ba_new_financial_inst_type_val +
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
        test_data.testData.ba_new_financial_inst_name_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店コード＝* Any number 3 digits
      // Set 支店コード field
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
        test_data.testData.ba_new_branch_code_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店名＝* Any value
      // Set 支店名 field
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
        test_data.testData.ba_new_branch_name_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 口座番号 field
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
        test_data.testData.ba_new_account_number1_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 預金種類（普通銀行） field
      const deposittype2 = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_deposit_type_ordinary_bank_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_deposit_type_ordinary_bank_lbl +
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
            test_data.testData.ba_deposit_type_ordinary_bank_lbl +
            "']"
        )
        .$(
          ".//lightning-base-combobox-item/span[contains(., '" +
            test_data.testData.ba_new_deposit_type_ordinary_bank_val +
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

      // ★ 新環境適用' New Env Implementation
      // 金融機関コード(普通銀行)＝* Any number 4 digits
      // Set 金融機関コード(普通銀行) field
      const fininstcodeord = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_financial_inst_code_ordinary_bank_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_financial_inst_code_ordinary_bank_lbl +
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
        test_data.testData.ba_new_financial_inst_code_ordinary_bank_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 金融機関名(普通銀行)＝* Any value
      // Set 金融機関名(普通銀行) field
      const fininstnameord = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_financial_inst_name_ordinary_bank_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_financial_inst_name_ordinary_bank_lbl +
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
        test_data.testData.ba_new_financial_inst_name_ordinary_bank_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店コード(普通銀行)＝* Any number 3 digits
      // Set 支店コード(普通銀行) field
      const branchcodeord = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_branch_code_ordinary_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_branch_code_ordinary_lbl +
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
        test_data.testData.ba_new_branch_code_ordinary_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // 支店名(普通銀行)＝* Any value
      // Set 支店名(普通銀行) field
      const branchnameord = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_branch_name_ordinary_bank_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_branch_name_ordinary_bank_lbl +
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
        test_data.testData.ba_new_branch_name_ordinary_bank_val
      );
      await browser.pause(1000);

      // ★ 新環境適用' New Env Implementation
      // Set 口座番号(普通銀行) field
      const acctno2 = await dialog
        .$(
          ".//records-record-layout-item[@field-label='" +
            test_data.testData.ba_new_account_number2_lbl +
            "']"
        )
        .$(
          ".//label[contains(.,'" +
            test_data.testData.ba_new_account_number2_lbl +
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
        test_data.testData.ba_new_account_number2_val
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
          test_data.testData.spec70 +
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
        .$(".//button[@name='" + test_data.testData.sf_saveedit_btn + "']")
        .click();

      await browser.pause(1000);
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-2"
      );
      await browser.pause(20000);

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
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
        ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
      );
      await save_edit_btn.waitForClickable({ timeout: 5000 });
      await save_edit_btn.click();
      await browser.pause(30000);

      // Screenshot
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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-4",
        {
          hideAfterFirstScroll: [headerBar3, tabheader3],
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        }
      );

      // Get BA record
      await parent.Get_BA();

      // Go to BA Record
      await parent.Go_to_BA(test_data.testData.ba_id); // ★ 新環境適用' New Env Implementation

      // Screenshot - BA record
      const highlights4 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar4 = await $(".//header[@id='oneHeader']");
      const tabheader4 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-5",
        {
          hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        }
      );

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.ba_name_arr.length > 0) {
        let ssno = 4;
        for (var i = 0; i < test_data.testData.ba_name_arr.length; i++) {
          // Go to BA Page
          await parent.Go_to_BA(test_data.testData.ba_id_arr[i]);

          ssno = ssno + 1;
          // Screenshot
          const highlights5 = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar5 = await $(".//header[@id='oneHeader']");
          const tabheader5 = await $(
            ".//div[@class='slds-no-print oneAppNavContainer']"
          );
          await browser.saveFullPageScreen(
            user_info.userInformation.screenshot +
              test_data.testData.spec70 +
              "_" +
              test_data.testData.tab0010 +
              "_" +
              stepNum +
              "-" +
              ssno,
            {
              hideAfterFirstScroll: [headerBar5, tabheader5, highlights5],
              fullPageScrollTimeout: 1000,
            }
          );

          // Edit
          const ba_status_edit = await $(
            ".//button[@title='" + test_data.testData.ba_status_edit_btn + "']"
          );
          await ba_status_edit.$(function () {
            this.scrollIntoView({
              block: "center",
            });
          });
          await ba_status_edit.waitForClickable({ timeout: 10000 });
          await ba_status_edit.click();
          await browser.pause(3000);

          await $(
            ".//records-form-footer[contains(., '" +
              test_data.testData.save_btn +
              "')]"
          ).$(function () {
            var height = document.getElementsByClassName(
              "record-body-container"
            ).offsetheight;
            this.style.marginTop = height - this.offsetHeight + "px";
            this.style.position = "static";
          });

          // 確認ステータス
          const status = await $(
            "label=" + test_data.testData.ba_confirmation_status_lbl
          );
          await status.$(function () {
            this.scrollIntoView({
              block: "center",
            });
          });
          const status_id = await status.getAttribute("for");
          const status_btn = await $(".//button[@id='" + status_id + "']");
          await status_btn.waitForClickable({ timeout: 10000 });
          await status_btn.click();
          const val = await $(
            "span=" + test_data.testData.ba_confirmation_status_val
          );
          await val.waitForClickable({ timeout: 10000 });
          await val.click();
          await browser.pause(2000);
          await browser.keys(["Escape"]);
          await browser.pause(3000);

          ssno = ssno + 1;
          // Screenshot
          const highlights6 = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar6 = await $(".//header[@id='oneHeader']");
          const tabheader6 = await $(
            ".//div[@class='slds-no-print oneAppNavContainer']"
          );
          await browser.saveFullPageScreen(
            user_info.userInformation.screenshot +
              test_data.testData.spec70 +
              "_" +
              test_data.testData.tab0010 +
              "_" +
              stepNum +
              "-" +
              ssno,
            {
              hideAfterFirstScroll: [headerBar6, tabheader6, highlights6],
              fullPageScrollTimeout: 1000,
            }
          );

          // Save
          await $(
            ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
          ).click();
          await browser.pause(20000);

          ssno = ssno + 1;
          // Screenshot
          const highlights7 = await $(
            ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
          );
          const headerBar7 = await $(".//header[@id='oneHeader']");
          const tabheader7 = await $(
            ".//div[@class='slds-no-print oneAppNavContainer']"
          );
          await browser.saveFullPageScreen(
            user_info.userInformation.screenshot +
              test_data.testData.spec70 +
              "_" +
              test_data.testData.tab0010 +
              "_" +
              stepNum +
              "-" +
              ssno,
            {
              hideAfterFirstScroll: [headerBar7, tabheader7, highlights7],
              fullPageScrollTimeout: 1000,
            }
          );
        }
      }
    }
  );
}
