const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_05_data: JICC照会明細 Data Linkage", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Login as Admin
    await parent.Login_as_Admin();

    // Go to SEC record detail
    await parent.Open_Salesforce_EXM_SEC1_Record();

    const headerBar_sec = await $(".//header[@id='oneHeader']");
    const tabheader_sec = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_sec = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot -- Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_sec, tabheader_sec, highlights_sec],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Click JICC照会明細 (JID) record -- arrow
    const jid_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.jid_create + "']"
    );
    await jid_arrow.waitForClickable({ timeout: 10000 });
    await jid_arrow.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data
    );

    // JICC照会明細 (JID) Creation -- click New
    const create_new_jid_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.jid_create +
        "']"
    );
    await create_new_jid_btn.waitForClickable({ timeout: 10000 });
    await create_new_jid_btn.click();
    await browser.pause(5000);

    // Call util.modal_fullpage function
    await util.modal_fullpage();

    // Set カナ氏名 field
    // ★ 新環境適用' New Env Implementation
    const name_kana = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kana_name_lbl +
        "']"
    ).$(".//label[contains(.,'" + test_data.testData.kana_name_lbl + "')]");
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

    // Set 借入明細情報一覧 field
    // ★ 新環境適用' New Env Implementation
    const trr = await $(
      ".//label[contains(.,'" + test_data.testData.trr_lbl + "')]"
    );
    await trr.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const trr_id = await trr.getAttribute("for");
    await $(".//input[@id='" + trr_id + "']").setValue(
      test_data.testData.trr_name
    );
    await browser.pause(3000);
    const trr_val = await $(
      "//lightning-base-combobox-item[@data-value='" +
        test_data.testData.trr_id +
        "']"
    );
    await trr_val.waitForClickable({ timeout: 10000 });
    await trr_val.click();
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

    // Screenshot -- During Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Save changes for JICC照会明細 (JID) record
    const save_btn_jid = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await save_btn_jid.waitForClickable({ timeout: 10000 });
    await save_btn_jid.click();
    await browser.pause(5000);

    // Get JICC照会明細 (JID) records
    await parent.JID_New_Record();

    // Refresh the SEC page
    await browser.refresh();
    await browser.pause(10000);

    const headerBar_sec2 = await $(".//header[@id='oneHeader']");
    const tabheader_sec2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_sec2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot -- After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-4" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_sec2, tabheader_sec2, highlights_sec2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to the highlight panel
    // ★ 新環境適用' New Env Implementation
    await util.Highlight_panel_scroll();

    // Go to JICC照会明細 (JID) record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_Salesforce_JID_Record();

    const headerBar_jid = await $(".//header[@id='oneHeader']");
    const tabheader_jid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_jid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot -- After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-5" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_jid, tabheader_jid, highlights_jid],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
