const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility");
var ssno_arr = []; // ★ 新環境適用' New Env Implementation
const stepNum = "14"; // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0005_step_14_data: JICC結果(ファイルM) Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // JICC結果(ファイルM) (JIM) Record Creation
    await JIM_Record_Creation();

    // ★ 新環境適用' New Env Implementation
    // Open JICC結果(ファイルM) (JIM) Record
    await Open_JIM_Record();
  });
}

async function JIM_Record_Creation() {
  // Get JICC照会明細 (JID) records
  await parent.JID_New_Record();

  var ssno = 0; // ★ 新環境適用' New Env Implementation
  for (var i = 0; i < test_data.testData.jim_new_record_no_value; i++) {
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
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Click JICC結果(ファイルM) (JIM) record -- arrow
    const jim_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.jim_create + "']"
    );
    await jim_arrow.waitForClickable({ timeout: 10000 });
    await jim_arrow.click();
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

    // JICC結果(ファイルM) (JIM) Creation -- click New
    const create_new_jim_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.jim_create +
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
      eval("test_data.testData.jim" + (i + 1) + "_debt_val")
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set トータル残高金額 field
    const total_bal = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.total_bal_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.total_bal_lbl + "')]");
    await total_bal.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const total_bal_id = await total_bal.getAttribute("for");
    await $(".//input[@id='" + total_bal_id + "']").setValue(
      eval("test_data.testData.jim" + (i + 1) + "_total_bal_value")
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 契約額/極度額 field
    const loan_amt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.loan_amt_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.loan_amt_lbl + "')]");
    await loan_amt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const loan_amt_id = await loan_amt.getAttribute("for");
    await $(".//input[@id='" + loan_amt_id + "']").setValue(
      eval("test_data.testData.jim" + (i + 1) + "_amt_val")
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 保証額 field
    const guarantee_amt = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.guarantee_amt_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.guarantee_amt_lbl + "')]");
    await guarantee_amt.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const guarantee_amt_id = await guarantee_amt.getAttribute("for");
    await $(".//input[@id='" + guarantee_amt_id + "']").setValue(
      eval("test_data.testData.jim" + (i + 1) + "_amt_val")
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 利用日 field
    const used_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.used_date_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.used_date_lbl + "')]");
    await used_date.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const used_date_id = await used_date.getAttribute("for");
    await $(".//input[@id='" + used_date_id + "']").setValue(
      eval("test_data.testData.jim" + (i + 1) + "_used_date_val")
    );
    await browser.pause(1000);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(1);

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

    // Save changes for JICC結果(ファイルM) (JIM) record
    const jim_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await jim_save_edit_btn.waitForClickable({ timeout: 10000 });
    await jim_save_edit_btn.click();
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
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // ★ 新環境適用' New Env Implementation
    ssno = ssno + 1;
    ssno_arr.push(ssno);
  }
}

// ★ 新環境適用' New Env Implementation
async function Open_JIM_Record() {
  // Get JICC結果(ファイルM) (JIM) records
  await parent.JIM_New_Records();

  for (var i = 0; i < test_data.testData.jim_new_record_no_value; i++) {
    // Go to JIM record detail screen
    await parent.Open_Salesforce_JIM_Record(test_data.testData.jim_id_arr[i]); // ★ 新環境適用' New Env Implementation

    const headerBar_jim = await $(".//header[@id='oneHeader']");
    const tabheader_jim = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jim = await $(
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
        hideAfterFirstScroll: [headerBar_jim, tabheader_jim, highlights_jim],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  }
}
