const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0005-2");
const util = require("../../../../../pageobjects/utility");
const stepNum = "5"; // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_60_0005_step_05_data: JICC照会明細 and JICC照会明細(他機関) Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // JICC照会明細 JID Record Creation
    await JID_Record_Creation();

    // JICC照会明細(他機関) JIO Record Creation
    await JIO_Record_Creation();

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
      test_data.testData.spec60 +
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
      test_data.testData.spec60 +
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

  // Set 日付 field
  const jid_date = await $(
    ".//label[contains(.,'" + test_data.testData.jid_date_lbl + "')]"
  );
  await jid_date.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const date_id = await jid_date.getAttribute("for");
  await $(".//input[@id='" + date_id + "']").setValue(
    test_data.testData.jid_date_val
  );
  await browser.pause(1000);

  // Set カナ氏名 field
  const name_kana = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.name_kana_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.name_kana_lbl + "')]");
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

  // Set 氏名 field
  const name = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.jid_name_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.jid_name_lbl + "')]");
  await name.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const name_id = await name.getAttribute("for");
  await $(".//input[@id='" + name_id + "']").setValue(
    test_data.testData.jid_name_val
  );
  await browser.pause(1000);

  // Set 生年月日 field
  const birth_date = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.jid_birth_date_lbl +
      "']"
  ).$(".//label[contains(.,'" + test_data.testData.jid_birth_date_lbl + "')]");
  await birth_date.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const birth_date_id = await birth_date.getAttribute("for");
  await $(".//input[@id='" + birth_date_id + "']").setValue(
    test_data.testData.jid_birth_date_val
  );
  await browser.pause(1000);

  // Set 性別 field
  const sex_lbl = await $(
    "//label[contains(.,'" + test_data.testData.jid_sex_lbl + "')]"
  );
  await sex_lbl.click();
  await browser.pause(3000);
  const sex_val = await $(
    ".//span[@title='" + test_data.testData.jid_sex_val + "']"
  );
  await sex_val.waitForClickable({ timeout: 10000 });
  await sex_val.click();

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
      test_data.testData.spec60 +
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
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await save_btn_jid.waitForClickable({ timeout: 10000 });
  await save_btn_jid.click();
  await browser.pause(10000);

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

  // Take screenshot -- After Data(1)
  await browser.saveFullPageScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec60 +
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
  await util.Highlight_panel_scroll();

  // Go to JICC照会明細 (JID) record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jid_obj,
    test_data.testData.jid_id
  );

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
      test_data.testData.spec60 +
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
      test_data.testData.spec60 +
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
  await browser.pause(2000);

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
  await browser.pause(6000);

  // Take screenshot
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec60 +
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

  // Set 支払遅延の有無（CIC交流）field
  const cic_field = await $(
    ".//label[contains(.,'" + test_data.testData.jio_overdue_label + "')]"
  );
  await cic_field.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await cic_field.waitForClickable({ timeout: 10000 });
  await cic_field.click();
  await browser.pause(3000);
  const overdue_lbl_val = await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.jio_overdue_value +
      "')]"
  ).click();

  await browser.pause(3000);

  // Deselect the hover/selected fields
  await util.Deselect_fields(1);

  // Take screenshot -- During Data
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec60 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-8" +
      test_data.testData.data
  );
  await browser.pause(2000);

  // Save changes for JICC照会明細(他機関) (JIO) record
  const jio_save_btn = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await jio_save_btn.waitForClickable({ timeout: 10000 });
  await jio_save_btn.click();
  await browser.pause(10000);

  // Get JIO & JID record
  await parent.JID_New_Record();
  await parent.JIO_New_Record();

  // Refresh the page
  await browser.refresh();
  await browser.pause(10000);

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
      test_data.testData.spec60 +
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
  await browser.pause(2000);

  // Scroll up to the highlight panel
  await util.Highlight_panel_scroll();

  // Go to JIO record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jio_obj,
    test_data.testData.jio_id
  );

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
      test_data.testData.spec60 +
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
  await browser.pause(2000);
}

async function Edit_JICC_Status() {
  // Go to SEC record detail
  await parent.Open_Salesforce_EXM_SEC1_Record();

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
      test_data.testData.spec60 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-11" +
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

  // Edit the JICC照会ステータス
  const edit_jicc_status = await $(
    ".//button[@title='" + test_data.testData.jicc_edit_pencil + "']"
  );
  await edit_jicc_status.waitForClickable({ timeout: 10000 });
  await edit_jicc_status.click();
  await browser.pause(3000);

  const edit_jicc_status_label = await $(
    ".//label[contains(.,'" + test_data.testData.jicc_status_label + "')]"
  );
  await edit_jicc_status_label.waitForClickable({ timeout: 10000 });
  await edit_jicc_status_label.click();
  await browser.pause(3000);

  const edit_jicc_status_value = await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.status_value +
      "')]"
  );
  await edit_jicc_status_value.scrollIntoView();
  await edit_jicc_status_value.click();
  await browser.pause(5000);

  // Deselect the hover/selected fields
  await util.Deselect_fields(3);

  // Take screenshot -- During Data
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec60 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-12" +
      test_data.testData.data
  );
  await browser.pause(2000);

  // Save changes for updated SEC record
  const save_btn_sec = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await save_btn_sec.waitForClickable({ timeout: 10000 });
  await save_btn_sec.click();
  await browser.pause(20000);

  // Refresh the page
  await browser.refresh();
  await browser.pause(10000);

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
      test_data.testData.spec60 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-13" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec4, tabheader_sec4, highlights_sec4],
      fullPageScrollTimeout: 3000,
    }
  );
  await browser.pause(2000);
}
