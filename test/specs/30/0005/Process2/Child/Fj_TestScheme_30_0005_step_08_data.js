const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0005-2");
const util = require("../../../../../pageobjects/utility");
var ssno = 0;
// ★ 新環境適用' New Env Implementation
const stepNum = "8";

export default function suite() {
  it("Fj_TestScheme_30_0005_step_08_data: KSC結果(CIC), KSC結果(JICC), KSC結果(取引情報), KSC結果(本人申告) Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // KSC結果(取引情報) (KIT) Record(1) Creation
    await KIT_Record_Creation();

    // KSC結果(JICC) (KIJ) Record Creation
    await KIJ_Record_Creation();

    // KSC結果(CIC) (KIC) Record Creation
    await KIC_Record_Creation();

    // KSC結果(本人申告) (KIL) Record Creation
    await KIL_Record_Creation();

    // KSC結果(官報個人) (KIO) Record Creation
    await KIO_Record_Creation();
  });
}

async function KIT_Record_Creation() {
  // Get KSC照会明細 (KID) records
  await parent.KID_New_Record();

  // ★ 新環境適用' New Env Implementation
  // 3 new KIT records will be created
  for (var i = 0; i < test_data.testData.three_no_of_records; i++) {
    // Go to KID record detail
    await parent.Open_Salesforce_KID_Record();

    const headerBar_kid = await $(".//header[@id='oneHeader']");
    const tabheader_kid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Take screenshot -- Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll();

    // Click KSC結果(取引情報) (KIT) record -- arrow
    const kit_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.kit_create + "']"
    );
    await kit_arrow.waitForClickable({ timeout: 10000 });
    await kit_arrow.click();
    await browser.pause(5000);

    ssno = ssno + 1;
    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data
    );

    // KSC結果(取引情報) (KIT) Creation -- click New
    const create_new_kit_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.kit_create +
        "']"
    );
    await create_new_kit_btn.waitForClickable({ timeout: 10000 });
    await create_new_kit_btn.click();
    await browser.pause(5000);

    // Call util.modal_fullpage function
    await util.modal_fullpage();

    // ★ 新環境適用' New Env Implementation
    // Set 氏名（カナ）field
    const name_kana = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kit_kana_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.kit_kana_lbl + "')]");
    await name_kana.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const name_kana_id = await name_kana.getAttribute("for");
    await $(".//input[@id='" + name_kana_id + "']").setValue(
      test_data.testData.name_kana_value
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 取引種類 field
    const type_transact = await $(
      ".//label[contains(.,'" + test_data.testData.transaction_type_lbl + "')]"
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
        eval("test_data.testData.kit_transaction_type_val" + (i + 1)) +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 担保有無 field
    const guaranteeflg = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.guaranteeflg_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.guaranteeflg_lbl + "')]");
    await guaranteeflg.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const guaranteeflg_id = await guaranteeflg.getAttribute("for");
    await $(".//input[@id='" + guaranteeflg_id + "']").setValue(
      eval("test_data.testData.kit_guaranteeflg_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 残債額 field
    const balance = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kit_balance_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.kit_balance_lbl + "')]");
    await balance.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const balance_id = await balance.getAttribute("for");
    await $(".//input[@id='" + balance_id + "']").setValue(
      eval("test_data.testData.kit_bal_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 限度額/当初貸出額 field
    const loanamt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kit_loanamt_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.kit_loanamt_lbl + "')]");
    await loanamt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const loanamt_id = await loanamt.getAttribute("for");
    await $(".//input[@id='" + loanamt_id + "']").setValue(
      eval("test_data.testData.kit_loanamt_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 成約日/実行日 field
    const contract_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kit_contractdate_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.kit_contractdate_lbl + "')]"
    );
    await contract_date.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const contract_date_id = await contract_date.getAttribute("for");
    await $(".//input[@id='" + contract_date_id + "']").setValue(
      eval("test_data.testData.kit_contractdate_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 最終返済日 field
    const last_repayment_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kit_last_repayment_date_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.kit_last_repayment_date_lbl +
        "')]"
    );
    await last_repayment_date.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const last_repayment_date_id = await last_repayment_date.getAttribute(
      "for"
    );
    await $(".//input[@id='" + last_repayment_date_id + "']").setValue(
      eval("test_data.testData.kit_last_repayment_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 完了区分 field
    const completion = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kit_completion_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.kit_completion_lbl + "')]"
    );
    await completion.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const completion_id = await completion.getAttribute("for");
    await $(".//input[@id='" + completion_id + "']").setValue(
      eval("test_data.testData.kit_completiontype_val" + (i + 1))
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    if (i == 0) {
      // Set 内カードローン限度額 field
      const loan_amount_card = await $(
        ".//records-record-layout-item[@field-label='" +
          test_data.testData.kit_loanamtcard_lbl +
          "']"
      ).$(
        ".//label[contains(.,'" + test_data.testData.kit_loanamtcard_lbl + "')]"
      );
      await loan_amount_card.$(function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      });
      const loan_amount_card_id = await loan_amount_card.getAttribute("for");
      await $(".//input[@id='" + loan_amount_card_id + "']").setValue(
        test_data.testData.kit_loanamt_card_val1
      );
      await browser.pause(1000);
    }

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
    // Take screenshot -- During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
        fullPageScrollTimeout: 3000,
      }
    );

    // Save changes for KSC結果(取引情報) (KIT) record
    const kit_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.save_edit_btn + "']"
    );
    await kit_save_edit_btn.waitForClickable({ timeout: 10000 });
    await kit_save_edit_btn.click();
    await browser.pause(7000);

    await browser.refresh();
    await browser.pause(10000);

    const headerBar_kid2 = await $(".//header[@id='oneHeader']");
    const tabheader_kid2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kid2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Take screenshot -- After Data(1)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_kid2, tabheader_kid2, highlights_kid2],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Get KSC結果(取引情報) (KIT) records
    await parent.KIT_New_Record();

    // Go to KIT(1) record detail screen
    await parent.Open_KIT(test_data.testData.kit_id_arr[i]);

    const headerBar_kit = await $(".//header[@id='oneHeader']");
    const tabheader_kit = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kit = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1;
    // Take screenshot -- After Data(2)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_kit, tabheader_kit, highlights_kit],
        fullPageScrollTimeout: 3000,
      }
    );
  }
}

async function KIJ_Record_Creation() {
  // Get KSC照会明細 (KID) records
  await parent.KID_New_Record();

  // Go to KID record detail
  await parent.Open_Salesforce_KID_Record();

  const headerBar_kid = await $(".//header[@id='oneHeader']");
  const tabheader_kid = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlights panel
  await util.Highlight_panel_scroll();

  // Click KSC結果(JICC) (KIJ) record -- arrow
  const kij_arrow = await $(
    ".//*[@data-target-reveals='" + test_data.testData.kij_create + "']"
  );
  await kij_arrow.waitForClickable({ timeout: 10000 });
  await kij_arrow.click();
  await browser.pause(5000);

  ssno = ssno + 1;
  // Take screenshot
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data
  );

  // KSC結果(JICC) (KIJ) Creation -- click New
  const create_new_kij_btn = await $(
    ".//*[@data-target-selection-name='" + test_data.testData.kij_create + "']"
  );
  await create_new_kij_btn.waitForClickable({ timeout: 10000 });
  await create_new_kij_btn.click();
  await browser.pause(5000);

  // Call util.modal_fullpage function
  await util.modal_fullpage();

  // ★ 新環境適用' New Env Implementation
  // Set 氏名（カナ）field
  const name_kana = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.kit_kana_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.kit_kana_lbl + "')]");
  await name_kana.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const name_kana_id = await name_kana.getAttribute("for");
  await $(".//input[@id='" + name_kana_id + "']").setValue(
    test_data.testData.name_kana_value
  );
  await browser.pause(1000);

  // ★ 新環境適用' New Env Implementation
  // Set 限度額/当初貸出額 field
  const loanamt = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.kit_loanamt_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.kit_loanamt_lbl + "')]");
  await loanamt.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const loanamt_id = await loanamt.getAttribute("for");
  await $(".//input[@id='" + loanamt_id + "']").setValue(
    test_data.testData.loanamt_val
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
  // Take screenshot -- During Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
      fullPageScrollTimeout: 3000,
    }
  );

  // Save changes for KSC結果(JICC) (KIJ) record
  const kij_save_edit_btn = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await kij_save_edit_btn.waitForClickable({ timeout: 10000 });
  await kij_save_edit_btn.click();
  await browser.pause(7000);

  // Refresh
  await browser.refresh();
  await browser.pause(7000);

  const headerBar_kid2 = await $(".//header[@id='oneHeader']");
  const tabheader_kid2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid2 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(1)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid2, tabheader_kid2, highlights_kid2],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlight panel
  await util.Highlight_panel_scroll();

  // Get KSC結果(JICC) (KIJ) records
  await parent.KIJ_New_Record();

  // Go to KIJ record detail screen
  await parent.Open_KIJ();

  const headerBar_kij = await $(".//header[@id='oneHeader']");
  const tabheader_kij = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kij = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(2)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kij, tabheader_kij, highlights_kij],
      fullPageScrollTimeout: 3000,
    }
  );
}

async function KIC_Record_Creation() {
  // Get KSC照会明細 (KID) records
  await parent.KID_New_Record();

  // Go to KID record detail
  await parent.Open_Salesforce_KID_Record();
  await browser.pause(1000);

  const headerBar_kid = await $(".//header[@id='oneHeader']");
  const tabheader_kid = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlights panel
  await util.Highlight_panel_scroll();

  // Scroll to list
  await $(
    ".//span[contains(.,'" + test_data.testData.scroll_header + "')]"
  ).scrollIntoView();

  // Click KSC結果(CIC) (KIC) record -- arrow
  const kic_arrow = await $(
    ".//*[@data-target-reveals='" + test_data.testData.kic_create + "']"
  );
  await kic_arrow.waitForClickable({ timeout: 10000 });
  await kic_arrow.click();
  await browser.pause(5000);

  ssno = ssno + 1;
  // Take screenshot
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data
  );

  // KSC結果(CIC) (KIC) Creation -- click New
  const create_new_kic_btn = await $(
    ".//*[@data-target-selection-name='" + test_data.testData.kic_create + "']"
  );
  await create_new_kic_btn.waitForClickable({ timeout: 10000 });
  await create_new_kic_btn.click();
  await browser.pause(5000);

  // Call util.modal_fullpage function
  await util.modal_fullpage();

  // ★ 新環境適用' New Env Implementation
  // Set 氏名（カナ）field
  const name_kana = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.kit_kana_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.kit_kana_lbl + "')]");
  await name_kana.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const name_kana_id = await name_kana.getAttribute("for");
  await $(".//input[@id='" + name_kana_id + "']").setValue(
    test_data.testData.name_kana_value
  );
  await browser.pause(1000);

  // ★ 新環境適用' New Env Implementation
  // Set 限度額/当初貸出額 field
  const loanamt = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.kit_loanamt_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.kit_loanamt_lbl + "')]");
  await loanamt.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const loanamt_id = await loanamt.getAttribute("for");
  await $(".//input[@id='" + loanamt_id + "']").setValue(
    test_data.testData.loanamt_val
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
  // Take screenshot -- During Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
      fullPageScrollTimeout: 3000,
    }
  );

  // Save changes for KSC結果(CIC) (KIC) record
  const kic_save_edit_btn = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await kic_save_edit_btn.waitForClickable({ timeout: 10000 });
  await kic_save_edit_btn.click();
  await browser.pause(7000);

  await browser.refresh();
  await browser.pause(7000);

  const headerBar_kid2 = await $(".//header[@id='oneHeader']");
  const tabheader_kid2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid2 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(1)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid2, tabheader_kid2, highlights_kid2],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlight panel
  await util.Highlight_panel_scroll();

  // Get KSC結果(CIC) (KIC) records
  await parent.KIC_New_Record();

  // Go to KIC record detail screen
  await parent.Open_KIC();

  const headerBar_kic = await $(".//header[@id='oneHeader']");
  const tabheader_kic = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kic = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(2)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kic, tabheader_kic, highlights_kic],
      fullPageScrollTimeout: 3000,
    }
  );
}

async function KIL_Record_Creation() {
  // Get KSC照会明細 (KID) records
  await parent.KID_New_Record();

  // Go to KID record detail
  await parent.Open_Salesforce_KID_Record();

  const headerBar_kid = await $(".//header[@id='oneHeader']");
  const tabheader_kid = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlights panel
  await util.Highlight_panel_scroll();

  // Scroll to list
  await $(
    ".//span[contains(.,'" + test_data.testData.scroll_header + "')]"
  ).scrollIntoView();

  // Click KSC結果(本人申告) (KIL) record -- arrow
  const kil_arrow = await $(
    ".//*[@data-target-reveals='" + test_data.testData.kil_create + "']"
  );
  await kil_arrow.waitForClickable({ timeout: 10000 });
  await kil_arrow.click();
  await browser.pause(5000);

  ssno = ssno + 1;
  // Take screenshot
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data
  );

  // KSC結果(本人申告) (KIL) Creation -- click New
  const create_new_kil_btn = await $(
    ".//*[@data-target-selection-name='" + test_data.testData.kil_create + "']"
  );
  await create_new_kil_btn.waitForClickable({ timeout: 10000 });
  await create_new_kil_btn.click();
  await browser.pause(5000);

  // Call util.modal_fullpage function
  await util.modal_fullpage();

  // ★ 新環境適用' New Env Implementation
  // Set 本人属性変更日 field
  const attribchangedate = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.kil_attribchangedate_lbl +
      "']"
  ).$(
    ".//label[contains(.,'" +
      test_data.testData.kil_attribchangedate_lbl +
      "')]"
  );
  await attribchangedate.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const attribchangedate_id = await attribchangedate.getAttribute("for");
  await $(".//input[@id='" + attribchangedate_id + "']").setValue(
    test_data.testData.attrib_changedate_val
  );
  await browser.pause(1000);

  // ★ 新環境適用' New Env Implementation
  // Set 本人申告区分 field
  const declare_category = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.kil_declarecategory_lbl +
      "']"
  ).$(
    ".//label[contains(.,'" + test_data.testData.kil_declarecategory_lbl + "')]"
  );
  await declare_category.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const declare_category_id = await declare_category.getAttribute("for");
  await $(".//input[@id='" + declare_category_id + "']").setValue(
    test_data.testData.declare_category_val
  );
  await browser.pause(1000);

  // ★ 新環境適用' New Env Implementation
  // Set 申告日 field
  const declare_date = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.kil_declaredate_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.kil_declaredate_lbl + "')]");
  await declare_date.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const declare_date_id = await declare_date.getAttribute("for");
  await $(".//input[@id='" + declare_date_id + "']").setValue(
    test_data.testData.declare_date_val
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
  // Take screenshot -- During Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
      fullPageScrollTimeout: 3000,
    }
  );

  // Save changes for KSC結果(本人申告) (KIL) record
  const kil_save_edit_btn = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await kil_save_edit_btn.waitForClickable({ timeout: 10000 });
  await kil_save_edit_btn.click();
  await browser.pause(7000);

  await browser.refresh();
  await browser.pause(7000);

  const headerBar_kid2 = await $(".//header[@id='oneHeader']");
  const tabheader_kid2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid2 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(1)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid2, tabheader_kid2, highlights_kid2],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlight panel
  await util.Highlight_panel_scroll();

  // Get KSC結果(本人申告) (KIL) records
  await parent.KIL_New_Record();

  // Go to KIL record detail screen
  await parent.Open_KIL();

  const headerBar_kil = await $(".//header[@id='oneHeader']");
  const tabheader_kil = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kil = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(2)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kil, tabheader_kil, highlights_kil],
      fullPageScrollTimeout: 3000,
    }
  );
}

async function KIO_Record_Creation() {
  // Get KSC照会明細 (KID) records
  await parent.KID_New_Record();

  // Go to KID record detail
  await parent.Open_Salesforce_KID_Record();
  await browser.pause(1000);

  const headerBar_kid = await $(".//header[@id='oneHeader']");
  const tabheader_kid = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
      fullPageScrollTimeout: 3000,
    }
  );

  // Click KSC結果(官報個人) (KIO) record -- arrow
  const kio_arrow = await $(
    ".//*[@data-target-reveals='" + test_data.testData.kio_create + "']"
  );
  await kio_arrow.waitForClickable({ timeout: 10000 });
  await kio_arrow.click();
  await browser.pause(5000);

  ssno = ssno + 1;
  // Take screenshot
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data
  );

  // KSC結果(官報個人) (KIO) Creation -- click New
  const create_new_kio_btn = await $(
    ".//*[@data-target-selection-name='" + test_data.testData.kio_create + "']"
  );
  await create_new_kio_btn.waitForClickable({ timeout: 10000 });
  await create_new_kio_btn.click();
  await browser.pause(5000);

  // ★ 新環境適用' New Env Implementation
  // Set 官報公示項目 field
  const official_report = await $(
    ".//label[contains(.,'" + test_data.testData.official_report_lbl + "')]"
  );
  await official_report.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await official_report.click();
  await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.official_report_val +
      "')]"
  ).click();
  await browser.pause(1000);

  // Deselect the hover/selected fields
  await util.Deselect_fields(1);

  ssno = ssno + 1;
  // Take screenshot - During Data
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data
  );

  // Save changes for KSC結果(官報個人) (KIO) record
  const kio_save_edit_btn = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await kio_save_edit_btn.waitForClickable({ timeout: 10000 });
  await kio_save_edit_btn.click();
  await browser.pause(7000);

  await browser.refresh();
  await browser.pause(5000);

  const headerBar_kid2 = await $(".//header[@id='oneHeader']");
  const tabheader_kid2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid2 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(1)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kid2, tabheader_kid2, highlights_kid2],
      fullPageScrollTimeout: 3000,
    }
  );

  // Refresh the page
  await browser.refresh();
  await browser.pause(7000);

  // Get KSC結果(官報個人) (KIO) records
  await parent.KIO_New_Record();

  // Go to KIO record detail screen
  await parent.Open_KIO();

  const headerBar_kio = await $(".//header[@id='oneHeader']");
  const tabheader_kio = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kio = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  ssno = ssno + 1;
  // Take screenshot -- After Data(2)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-" +
      ssno +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_kio, tabheader_kio, highlights_kio],
      fullPageScrollTimeout: 3000,
    }
  );
}
