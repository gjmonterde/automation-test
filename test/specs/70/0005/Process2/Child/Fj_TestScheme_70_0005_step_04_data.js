const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-2");
const util = require("../../../../../pageobjects/utility");
const stepNum = "4"; // ★ 新環境適用' New Env Implementation
var ssno = 0;

export default async function suite() {
  it("Fj_TestScheme_70_0005_step_04_data: JICC結果(債権情報), JICC結果(ファイルM), JICC結果(注意Ｍ) (data linkage)", async () => {
    if (test_data.testData.logged_status != "admin") {
      // login as admin
      await parent.Login_as_admin();
    }

    // JICC結果(ファイルM) (JIM) and JICC結果(注意Ｍ) (JIA) Records Creation
    await JIM_JIA_Record_Creation();

    // JICC結果(債権情報) (JIB) Record Creation
    await JIB_Record_Creation();

    // logout
    await parent.Logout();
  });
}

async function JIM_JIA_Record_Creation() {
  // Get JICC照会明細 (JID) records
  await parent.Get_JID();

  // ★ 新環境適用' New Env Implementation
  // 3 new JIM and JIA records will be created
  for (var i = 0; i < test_data.testData.three_created_records; i++) {
    // Go to JICC照会明細 (JID) record detail screen
    await parent.Open_JID();

    const headerBar_jid = await $(".//header[@id='oneHeader']");
    const tabheader_jid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jid, tabheader_jid, highlights_jid],
        fullPageScrollTimeout: 1000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Click JICC結果(ファイルM) (JIM) record -- arrow
    const jim_arrow = await $(
      ".//*[@data-target-reveals='" +
        test_data.testData.api_jim_create_btn +
        "']"
    );
    await jim_arrow.waitForClickable({ timeout: 10000 });
    await jim_arrow.click();
    await browser.pause(5000);

    ssno = ssno + 1;
    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data
    );

    // JICC結果(ファイルM) (JIM) Creation -- click New
    const create_new_jim_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.api_jim_create_btn +
        "']"
    );
    await create_new_jim_btn.waitForClickable({ timeout: 10000 });
    await create_new_jim_btn.click();
    await browser.pause(5000);

    // Call util.modal_fullpage function
    await util.modal_fullpage();

    // ★ 新環境適用' New Env Implementation
    // Set 取引形態区分 field
    const type_transact = await $(
      ".//label[contains(.,'" + test_data.testData.type_transact_lbl + "')]"
    );
    await type_transact.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await type_transact.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        test_data.testData.jim_type_transact_val +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 債権分類 field
    const debt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jim_debt_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.jim_debt_field_lbl + "')]"
    );
    await debt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const debt_id = await debt.getAttribute("for");
    await $(".//input[@id='" + debt_id + "']").setValue(
      eval("test_data.testData.jim_debt_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set トータル残高金額 field
    const total_bal = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jim_total_bal_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.jim_total_bal_field_lbl +
        "')]"
    );
    await total_bal.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const total_bal_id = await total_bal.getAttribute("for");
    await $(".//input[@id='" + total_bal_id + "']").setValue(
      eval("test_data.testData.jim_total_bal_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 契約額/極度額 field
    const loan_amt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jim_loanamt_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.jim_loanamt_field_lbl + "')]"
    );
    await loan_amt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const loan_amt_id = await loan_amt.getAttribute("for");
    await $(".//input[@id='" + loan_amt_id + "']").setValue(
      eval("test_data.testData.jim_amt_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 保証額 field
    const guarantee_amt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jim_guaranteeamt_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.jim_guaranteeamt_field_lbl +
        "')]"
    );
    await guarantee_amt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const guarantee_amt_id = await guarantee_amt.getAttribute("for");
    await $(".//input[@id='" + guarantee_amt_id + "']").setValue(
      eval("test_data.testData.jim_amt_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 利用日 field
    const used_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jim_used_date_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.jim_used_date_field_lbl +
        "')]"
    );
    await used_date.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const used_date_id = await used_date.getAttribute("for");
    await $(".//input[@id='" + used_date_id + "']").setValue(
      eval("test_data.testData.jim_used_date_val" + (i + 1))
    );
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(1);

    const headerBar_edit = await $(".//header[@id='oneHeader']");
    const tabheader_edit = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_edit = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
        fullPageScrollTimeout: 1000,
      }
    );
    await browser.pause(5000);

    // Save changes for JICC結果(ファイルM) (JIM) record
    const jim_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await jim_save_edit_btn.waitForClickable({ timeout: 10000 });
    await jim_save_edit_btn.click();
    await browser.pause(10000);

    // refresh
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_jid2 = await $(".//header[@id='oneHeader']");
    const tabheader_jid2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    ssno = ssno + 1;
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jid2, tabheader_jid2, highlights_jid2],
        fullPageScrollTimeout: 1000,
      }
    );
    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Get JICC結果(ファイルM) (JIM) records
    await parent.JIM_New_Record();

    // Go to JIM(1) record detail screen
    await parent.Open_SF_JIM_Record(test_data.testData.jim_id_arr[i]);

    const headerBar_jim = await $(".//header[@id='oneHeader']");
    const tabheader_jim = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jim = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jim, tabheader_jim, highlights_jim],
        fullPageScrollTimeout: 1000,
      }
    );

    ssno = ssno + 1;
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jim, tabheader_jim, highlights_jim],
        fullPageScrollTimeout: 1000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Click JICC結果(注意Ｍ) (JIA) record -- arrow
    const jia_arrow = await $(
      ".//*[@data-target-reveals='" +
        test_data.testData.api_jia_create_btn +
        "']"
    );
    await jia_arrow.waitForClickable({ timeout: 10000 });
    await jia_arrow.click();
    await browser.pause(5000);

    ssno = ssno + 1;
    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data
    );

    // JICC結果(注意Ｍ) (JIA) Creation -- click New
    const create_new_jia_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.api_jia_create_btn +
        "']"
    );
    await create_new_jia_btn.waitForClickable({ timeout: 10000 });
    await create_new_jia_btn.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Set 注意コード ( 新ファイルM ) field
    const jia_field = await $(
      ".//label[contains(.,'" + test_data.testData.jia_code_lbl + "')]"
    );
    await jia_field.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await jia_field.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        eval("test_data.testData.jia_code_val" + (i + 1)) +
        "')]"
    ).click();
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(1);

    ssno = ssno + 1;
    // Screenshot During Data
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data
    );

    // Save changes for JICC結果(注意Ｍ) (JIA) record
    const jia_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await jia_save_edit_btn.waitForClickable({ timeout: 10000 });
    await jia_save_edit_btn.click();
    await browser.pause(10000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_jim2 = await $(".//header[@id='oneHeader']");
    const tabheader_jim2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jim2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot After Data(1)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jim2, tabheader_jim2, highlights_jim2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Get JICC結果(注意Ｍ) (JIA) records
    await parent.JIA_New_Record(test_data.testData.jim_id_arr[i]);

    // Go to JIA record detail screen
    await parent.Open_SF_JIA_Record();

    const headerBar_jia = await $(".//header[@id='oneHeader']");
    const tabheader_jia = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jia = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    ssno = ssno + 1;
    // Screenshot -- After Data(2)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jia, tabheader_jia, highlights_jia],
        fullPageScrollTimeout: 1000,
      }
    );
  }
}

async function JIB_Record_Creation() {
  // Get JICC照会明細 (JID) records
  await parent.Get_JID();

  // 3 new JIB records will be created
  for (var i = 0; i < test_data.testData.four_created_records; i++) {
    // Go to JICC照会明細 (JID) record detail screen
    await parent.Open_JID();

    const headerBar_jid = await $(".//header[@id='oneHeader']");
    const tabheader_jid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jid, tabheader_jid, highlights_jid],
        fullPageScrollTimeout: 1000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Click JICC結果(債権情報) (JIB) record -- arrow
    const jib_arrow = await $(
      ".//*[@data-target-reveals='" +
        test_data.testData.api_jib_create_btn +
        "']"
    );
    await jib_arrow.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await jib_arrow.waitForClickable({ timeout: 10000 });
    await jib_arrow.click();
    await browser.pause(5000);

    ssno = ssno + 1;
    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data
    );
    // JICC結果(債権情報) (JIB) Creation -- click New
    const create_new_jib_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.api_jib_create_btn +
        "']"
    );
    await create_new_jib_btn.waitForClickable({ timeout: 10000 });
    await create_new_jib_btn.click();
    await browser.pause(5000);

    // Call util.modal_fullpage function
    await util.modal_fullpage();

    // ★ 新環境適用' New Env Implementation
    // Set 取引形態区分 field
    const type_transact = await $(
      ".//label[contains(.,'" + test_data.testData.type_transact_lbl + "')]"
    );
    await type_transact.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await type_transact.click();
    await $(
      ".//lightning-base-combobox-item[contains(.,'" +
        eval("test_data.testData.jib_type_transact_val" + (i + 1)) +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 債権分類 field
    const debt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jim_debt_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.jim_debt_field_lbl + "')]"
    );
    await debt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const debt_id = await debt.getAttribute("for");
    await $(".//input[@id='" + debt_id + "']").setValue(
      eval("test_data.testData.jib_debt_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 貸付金額 field
    const loan_amount = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jib_loanamt_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.jib_loanamt_lbl + "')]");
    await loan_amount.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const loan_amount_id = await loan_amount.getAttribute("for");
    await $(".//input[@id='" + loan_amount_id + "']").setValue(
      eval("test_data.testData.jib_amt_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 保証額 field
    const guarantee_amount = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jim_guaranteeamt_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.jim_guaranteeamt_field_lbl +
        "')]"
    );
    await guarantee_amount.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const guarantee_amount_id = await guarantee_amount.getAttribute("for");
    await $(".//input[@id='" + guarantee_amount_id + "']").setValue(
      eval("test_data.testData.jib_amt_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 残高 field
    const balance = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jib_balance_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.jib_balance_field_lbl + "')]"
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
      eval("test_data.testData.jib_bal_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 貸付日 field
    const lending_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jib_lending_date_field_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.jib_lending_date_field_lbl +
        "')]"
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
      eval("test_data.testData.jib_lend_date_val" + (i + 1))
    );
    await browser.pause(1000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(1);

    const headerBar_edit = await $(".//header[@id='oneHeader']");
    const tabheader_edit = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_edit = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
        fullPageScrollTimeout: 1000,
      }
    );

    // Save changes for JICC結果(債権情報) (JIB) record
    const jib_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await jib_save_edit_btn.waitForClickable({ timeout: 10000 });
    await jib_save_edit_btn.click();
    await browser.pause(10000);

    await browser.refresh();
    await browser.pause(10000);

    const headerBar_jid2 = await $(".//header[@id='oneHeader']");
    const tabheader_jid2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot After Data(1)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jid2, tabheader_jid2, highlights_jid2],
        fullPageScrollTimeout: 1000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Get JICC結果(債権情報) (JIB) records
    await parent.JIB_New_Record();

    // Go to JIB(1) record detail screen
    await parent.Open_SF_JIB_Record(test_data.testData.jib_id_arr[i]);

    const headerBar_jib = await $(".//header[@id='oneHeader']");
    const tabheader_jib = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jib = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Screenshot After Data(2)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jib, tabheader_jib, highlights_jib],
        fullPageScrollTimeout: 1000,
      }
    );
  }
}
