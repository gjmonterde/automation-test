const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility");
var ssno_arr = []; // ★ 新環境適用' New Env Implementation
const stepNum = "30"; // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0005_step_30_data: KSC結果(取引情報) Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // KSC結果(取引情報) (KIT) Record Creation
    await KIT_Record_Creation();

    // ★ 新環境適用' New Env Implementation
    // Open KSC結果(取引情報) (KIT) Records
    await Open_KIT_records();
  });
}

async function KIT_Record_Creation() {
  // Get KSC照会明細 (KID) records
  await parent.KID_New_Record();

  var ssno = 0; // ★ 新環境適用' New Env Implementation
  for (var i = 0; i < test_data.testData.kit_new_record_no_value; i++) {
    // Go to SEC record detail
    await parent.Open_Salesforce_EXM_SEC1_Record();

    // Go to KID record detail
    await parent.Open_Salesforce_KID_Record();

    const headerBar_kid = await $(".//header[@id='oneHeader']");
    const tabheader_kid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- Before Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await browser.pause(2000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Click KSC結果(取引情報) (KIT) record -- arrow
    const kit_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.kit_create + "']"
    );
    await kit_arrow.waitForClickable({ timeout: 10000 });
    await kit_arrow.click();
    await browser.pause(5000);

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
      ".//label[contains(.,'" +
        test_data.testData.kit_transaction_type_lbl +
        "')]"
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
        eval("test_data.testData.kit" + (i + 1) + "_transaction_type_val") +
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
      eval("test_data.testData.kit" + (i + 1) + "_guaranteeflg_val")
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
      eval("test_data.testData.kit" + (i + 1) + "_bal_val")
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
      eval("test_data.testData.kit" + (i + 1) + "_loanamt_val")
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
      eval("test_data.testData.kit" + (i + 1) + "_contractdate_val")
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
      eval("test_data.testData.kit" + (i + 1) + "_last_repayment_val")
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
      eval("test_data.testData.kit" + (i + 1) + "_completiontype_val")
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
        test_data.testData.kit1_loanamt_card_val
      );
      await browser.pause(1000);
    }

    // Deselect the hover/selected fields
    await util.Deselect_fields(1); // ★ 新環境適用' New Env Implementation

    const headerBar_edit = await $(".//header[@id='oneHeader']");
    const tabheader_edit = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_edit = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- During Data
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await browser.pause(2000);

    // Save changes for KSC結果(取引情報) (KIT) record
    const kit_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
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

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- After Data(1)
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
    await browser.pause(2000);

    // Scroll up to highlight panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // ★ 新環境適用' New Env Implementation
    ssno = ssno + 1;
    ssno_arr.push(ssno);
  }
}

// ★ 新環境適用' New Env Implementation
async function Open_KIT_records() {
  // Get KSC結果(取引情報) (KIT) records
  await parent.KIT_New_Records();
  for (var i = 0; i < test_data.testData.kit_new_record_no_value; i++) {
    // Go to KIT(1) record detail screen
    await parent.Open_Salesforce_KIT_Record(test_data.testData.kit_id_arr[i]);

    const headerBar_kit = await $(".//header[@id='oneHeader']");
    const tabheader_kit = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kit = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot -- After Data(2)
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-" +
        ssno_arr[i] +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_kit, tabheader_kit, highlights_kit],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  }
}
