const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0005-2");
const util = require("../../../../../pageobjects/utility");
// ★ 新環境適用' New Env Implementation
const stepNum = "5";

export default function suite() {
  it("Fj_TestScheme_30_0005_step_05_data: JICC照会明細 and JICC照会明細(他機関) Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // JICC照会明細 JID Record Creation
    await JID_Record_Creation();

    // JICC照会明細(他機関) JIO Record Creation
    await JIO_Record_Creation();

    // Edit JICC照会明細(他機関) JIO Record
    await Edit_JIO_Record();

    // Edit JICC Status in SEC-1 Record
    await Edit_JICC_Status();
  });
}

async function JID_Record_Creation() {
  // Go to SEC record detail
  await parent.Open_Salesforce_EXM_SEC1_Record();

  const headerBar_sec = await $(".//header[@id='oneHeader']");
  const tabheader_sec = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
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
  await util.Highlight_panel_scroll();

  // Click JICC照会明細 (JID) record -- arrow
  const jid_arrow = await $(
    ".//*[@data-target-reveals='" + test_data.testData.jid_create + "']"
  );
  await jid_arrow.waitForClickable({ timeout: 10000 });
  await jid_arrow.click();
  await browser.pause(5000);

  // Take screenshot
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-2" +
      test_data.testData.data
  );

  // JICC照会明細 (JID) Creation -- click New
  const create_new_jid_btn = await $(
    ".//*[@data-target-selection-name='" + test_data.testData.jid_create + "']"
  );
  await create_new_jid_btn.waitForClickable({ timeout: 10000 });
  await create_new_jid_btn.click();
  await browser.pause(5000);

  // Call util.modal_fullpage function
  await util.modal_fullpage();

  // ★ 新環境適用' New Env Implementation
  // Set カナ氏名 field
  const name_kana = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.jid_kana_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.jid_kana_lbl + "')]");
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
  // Set 借入明細情報一覧 field
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
  await util.Deselect_fields(1);

  const headerBar_edit = await $(".//header[@id='oneHeader']");
  const tabheader_edit = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_edit = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot -- During Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
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

  // Save changes for JICC照会明細 (JID) record
  const save_edit_btn_jid = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await save_edit_btn_jid.waitForClickable({ timeout: 10000 });
  await save_edit_btn_jid.click();
  await browser.pause(5000);

  // Get JICC照会明細 (JID) records
  await parent.JID_New_Record();

  // Refresh the SEC page
  await browser.refresh();
  await browser.pause(7000);

  const headerBar_sec2 = await $(".//header[@id='oneHeader']");
  const tabheader_sec2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec2 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot -- After Data(1)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
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

  // Scroll up to the highlight panel
  await util.Highlight_panel_scroll();

  // Go to JICC照会明細 (JID) record detail screen
  await parent.Open_Salesforce_JID_Record();

  const headerBar_jid = await $(".//header[@id='oneHeader']");
  const tabheader_jid = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_jid = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot -- After Data(2)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
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
}

async function JIO_Record_Creation() {
  // Go to TRR record detail screen
  await parent.Open_Salesforce_TRR_Record();
  await browser.pause(1000);

  const headerBar_trr = await $(".//header[@id='oneHeader']");
  const tabheader_trr = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_trr = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-6" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_trr, tabheader_trr, highlights_trr],
    }
  );

  // Scroll up to highlights panel
  await util.Highlight_panel_scroll();

  // Go to JICC照会明細(他機関) (JIO) related list
  await $(
    ".//span[contains(.,'" + test_data.testData.jio_rel_list_name + "')]"
  ).scrollIntoView();
  await $(".//span[contains(.,'当行')]").$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await browser.pause(3000);

  // Click JICC照会明細(他機関) (JIO) record -- arrow
  const jio_arrow = await $(
    ".//*[@data-target-reveals='" + test_data.testData.jio_other_create + "']"
  );
  await jio_arrow.waitForClickable({ timeout: 10000 });
  await jio_arrow.click();
  await browser.pause(5000);

  // Take screenshot
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-7" +
      test_data.testData.data
  );

  // JICC照会明細(他機関) (JIO) Creation -- click New
  const create_new_jio_btn = await $(
    ".//*[@data-target-selection-name='" +
      test_data.testData.jio_other_create +
      "']"
  );
  await create_new_jio_btn.waitForClickable({ timeout: 10000 });
  await create_new_jio_btn.click();
  await browser.pause(5000);

  // ★ 新環境適用' New Env Implementation
  // Set 支払遅延の有無（CIC交流）field -- NONE
  const cic = await $(
    ".//label[contains(.,'" + test_data.testData.jio_overdue_label + "')]"
  );
  await cic.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await cic.click();
  await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.jio_overdue_value +
      "')]"
  ).click();
  await browser.pause(1000);

  // Change to None
  await cic.click();
  await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.jio_overdue_value_none +
      "')]"
  ).click();
  await browser.pause(1000);

  // Deselect the hover/selected fields
  await util.Deselect_fields(1);

  // Take screenshot -- During Data
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-8" +
      test_data.testData.data
  );

  // Save changes for JICC照会明細(他機関) (JIO) record
  const jio_save_edit_btn = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await jio_save_edit_btn.waitForClickable({ timeout: 10000 });
  await jio_save_edit_btn.click();
  await browser.pause(5000);

  // Get JIO & JID record
  await parent.JID_New_Record();
  await parent.JIO_New_Record();

  // Refresh the page
  await browser.refresh();
  await browser.pause(7000);

  const highlights_trr2 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );
  const headerBar_trr2 = await $(".//header[@id='oneHeader']");
  const tabheader_trr2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );

  // Take screenshot -- After Data(1)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-9" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_trr2, tabheader_trr2, highlights_trr2],
    }
  );

  // Scroll up to the highlight panel
  await util.Highlight_panel_scroll();

  // Go to JIO record detail screen
  await parent.Open_JIO();

  const highlights_jio = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );
  const headerBar_jio = await $(".//header[@id='oneHeader']");
  const tabheader_jio = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );

  // Take screenshot -- After Data(2)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-10" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [tabheader_jio, headerBar_jio, highlights_jio],
    }
  );
}

async function Edit_JIO_Record() {
  // Get JIO & JID record
  await parent.JID_New_Record();
  await parent.JIO_New_Record();

  // Go to JIO record detail screen
  await parent.Open_JIO();

  const highlights_jio = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );
  const headerBar_jio = await $(".//header[@id='oneHeader']");
  const tabheader_jio = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );

  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-11" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [tabheader_jio, headerBar_jio, highlights_jio],
    }
  );

  // Go to TRR record detail screen
  await parent.Open_Salesforce_TRR_Record();
  await browser.pause(1000);

  // Go to JICC照会明細(他機関) (JIO) related list
  await $(".//span[contains(.,'" + test_data.testData.jio_text + "')]").$(
    function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  );
  await $(
    ".//span[contains(.,'" + test_data.testData.jio_rel_list_name + "')]"
  ).scrollIntoView();
  await browser.pause(3000);

  // Click Edit in JICC照会明細(他機関) (JIO) record
  const jio = await $(
    ".//lst-template-list-item-factory[contains(., '" +
      test_data.testData.jio_name +
      "')]"
  ).$(".//*[@slot='rowLevelActions']");
  await jio.waitForClickable({ timeout: 30000 });
  await jio.click();
  await browser.pause(3000);
  await $("a[title='" + test_data.testData.edit_title + "']").waitForClickable({
    timeout: 5000,
  });
  await $("a[title='" + test_data.testData.edit_title + "']").click();
  await browser.pause(3000);

  // ★ 新環境適用' New Env Implementation
  // Change the overdue value
  const cic = await $(
    ".//label[contains(.,'" + test_data.testData.jio_overdue_label + "')]"
  );
  await cic.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await cic.click();
  await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.jio_overdue_value +
      "')]"
  ).click();
  await browser.pause(1000);

  // Deselect the hover/selected fields
  await util.Deselect_fields(1);

  // Take screenshot -- During Data
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-12" +
      test_data.testData.data
  );

  // Save changes for JICC照会明細(他機関) (JIO) record
  const jio_save_edit_btn = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await jio_save_edit_btn.waitForClickable({ timeout: 10000 });
  await jio_save_edit_btn.click();
  await browser.pause(5000);

  // Go to JIO record detail screen
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      "r/FJ_JICC_InquiryDetail_Other__c/" +
      test_data.testData.jio_id +
      "/view"
  );
  await browser.pause(5000);

  const highlights_jio2 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );
  const headerBar_jio2 = await $(".//header[@id='oneHeader']");
  const tabheader_jio2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );

  // Take screenshot -- After Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-13" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [tabheader_jio2, headerBar_jio2, highlights_jio2],
    }
  );
}

async function Edit_JICC_Status() {
  // Go to SEC record detail
  await parent.Open_Salesforce_EXM_SEC1_Record();
  await browser.pause(1000);

  const headerBar_sec3 = await $(".//header[@id='oneHeader']");
  const tabheader_sec3 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec3 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot -- Before Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-14" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec3, tabheader_sec3, highlights_sec3],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlights panel
  await util.Highlight_panel_scroll();

  // Go to JICC照会ステータス
  await $(
    ".//span[contains(.,'" + test_data.testData.jicc_status_label + "')]"
  ).$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await browser.pause(3000);

  // ★ 新環境適用' New Env Implementation
  // Edit the JICC照会ステータス
  const edit_jicc_status = await $(
    ".//button[@title='" + test_data.testData.jicc_edit_pencil + "']"
  );
  await edit_jicc_status.waitForClickable({ timeout: 10000 });
  await edit_jicc_status.click();
  await browser.pause(3000);

  const jicc_status = await $(
    ".//label[contains(.,'" + test_data.testData.jicc_status_label + "')]"
  );
  await jicc_status.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await jicc_status.click();
  await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.status_value +
      "')]"
  ).click();
  await browser.pause(1000);

  // Deselect the hover/selected fields
  await util.Deselect_fields(3);

  // Take screenshot -- During Data
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-15" +
      test_data.testData.data
  );

  // Save changes for updated SEC record
  const save_edit_btn_sec = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await save_edit_btn_sec.waitForClickable({ timeout: 10000 });
  await save_edit_btn_sec.click();
  await browser.pause(15000);

  // Refresh the page
  await browser.refresh();
  await browser.pause(7000);

  const headerBar_sec4 = await $(".//header[@id='oneHeader']");
  const tabheader_sec4 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec4 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot -- After Data
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec30 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-16" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec4, tabheader_sec4, highlights_sec4],
      fullPageScrollTimeout: 3000,
    }
  );
}
