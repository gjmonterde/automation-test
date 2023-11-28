const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility");
var ssno_arr = []; // ★ 新環境適用' New Env Implementation
const stepNum = "11"; // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0005_step_11_data: JICC結果(債権情報) Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // JICC結果(債権情報) (JIB) Record Creation
    await JIB_Record_Creation();

    // ★ 新環境適用' New Env Implementation
    // Open JICC結果(債権情報) (JIB) Record
    await Open_JIB_record();
  });
}

async function JIB_Record_Creation() {
  // Get JICC照会明細 (JID) records
  await parent.JID_New_Record();

  var ssno = 0; // ★ 新環境適用' New Env Implementation
  for (var i = 0; i < test_data.testData.jib_new_record_no_value; i++) {
    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    // Go to JICC照会明細 (JID) record detail screen
    await parent.Open_Salesforce_JID_Record();

    const headerBar_jid = await $(".//header[@id='oneHeader']");
    const tabheader_jid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid = await $(
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
        hideAfterFirstScroll: [headerBar_jid, tabheader_jid, highlights_jid],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Scroll to view JIB
    await util.Scroll_to_related_list(test_data.testData.jid_rel_list_jib);

    // Click JICC結果(債権情報) (JIB) record -- arrow
    const jib_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.jib_create + "']"
    );
    await jib_arrow.waitForClickable({ timeout: 10000 });
    await jib_arrow.click();
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

    // JICC結果(債権情報) (JIB) Creation -- click New
    const create_new_jib_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.jib_create +
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
        eval("test_data.testData.jib" + (i + 1) + "_type_transact_val") +
        "')]"
    ).click();
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 債権分類 field
    const debt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.debt_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.debt_lbl + "')]");
    await debt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const debt_id = await debt.getAttribute("for");
    await $(".//input[@id='" + debt_id + "']").setValue(
      eval("test_data.testData.jib" + (i + 1) + "_debt_val")
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 貸付金額 field
    const loan_amount = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.jib_loan_amt_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.jib_loan_amt_lbl + "')]");
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
        test_data.testData.guarantee_amt_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.guarantee_amt_lbl + "')]");
    await guarantee_amount.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const guarantee_amount_id = await guarantee_amount.getAttribute("for");
    await $(".//input[@id='" + guarantee_amount_id + "']").setValue(
      eval("test_data.testData.jib" + (i + 1) + "_amt_val")
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 残高 field
    const balance = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.balance_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.balance_lbl + "')]");
    await balance.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const balance_id = await balance.getAttribute("for");
    await $(".//input[@id='" + balance_id + "']").setValue(
      eval("test_data.testData.jib" + (i + 1) + "_bal_val")
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 貸付日 field
    const lending_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.lendingdate_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.lendingdate_lbl + "')]");
    await lending_date.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const lending_date_id = await lending_date.getAttribute("for");
    await $(".//input[@id='" + lending_date_id + "']").setValue(
      eval("test_data.testData.jib" + (i + 1) + "_lend_date_val")
    );
    await browser.pause(1000);

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

    // Save changes for JICC結果(債権情報) (JIB) record
    const jib_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await jib_save_edit_btn.waitForClickable({ timeout: 10000 });
    await jib_save_edit_btn.click();
    await browser.pause(7000);

    await browser.refresh();
    await browser.pause(10000);

    const headerBar_jid2 = await $(".//header[@id='oneHeader']");
    const tabheader_jid2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Screenshot -- After Data
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
        hideAfterFirstScroll: [headerBar_jid2, tabheader_jid2, highlights_jid2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    ssno = ssno + 1;
    ssno_arr.push(ssno);
  }
}

// ★ 新環境適用' New Env Implementation
async function Open_JIB_record() {
  // Get JICC結果(債権情報) (JIB) records
  await parent.JIB_New_Records();
  for (var i = 0; i < test_data.testData.jib_new_record_no_value; i++) {
    // Go to JIB record detail screen
    await parent.Open_Salesforce_JIB_Record(test_data.testData.jib_id_arr[i]);

    const headerBar_jib = await $(".//header[@id='oneHeader']");
    const tabheader_jib = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jib = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot -- After Data
    // ★ 新環境適用' New Env Implementation
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
        hideAfterFirstScroll: [headerBar_jib, tabheader_jib, highlights_jib],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  }
}
