const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-2");
var util = require("../../../../../pageobjects/utility");
const stepNum = "3"; // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_70_0005_step_03_data: Manual JID record creation (data linkage)", async () => {
    if (test_data.testData.logged_status != "admin") {
      // login as admin
      await parent.Login_as_admin();
    }

    // JICC照会明細 JID Record Creation
    await JID_Record_Creation();

    // JICC照会明細(他機関) JIO Record Creation
    await JIO_Record_Creation();

    // Edit JICC Status in SEC-1 Record
    await Edit_JICC_Status();

    // logout
    await parent.Logout();
  });
}

async function JID_Record_Creation() {
  // open SEC
  await parent.Open_SEC();

  const headerBar_sec = await $(".//header[@id='oneHeader']");
  const tabheader_sec = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Take screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-1" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec, tabheader_sec, highlights_sec],
      fullPageScrollTimeout: 1000,
    }
  );

  // Click JICC照会明細 (JID) record -- arrow
  const jid_arrow = await $(
    ".//*[@data-target-reveals='" +
      test_data.testData.api_jid_inquiry_detail_new_btn +
      "']"
  );
  await jid_arrow.waitForClickable({ timeout: 10000 });
  await jid_arrow.click();
  await browser.pause(5000);

  // Screenshot
  await browser.saveScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
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
      test_data.testData.api_jid_inquiry_detail_new_btn +
      "']"
  );
  await create_new_jid_btn.waitForClickable({ timeout: 10000 });
  await create_new_jid_btn.click();
  await browser.pause(5000);

  // Call util.modal_fullpage function
  await util.modal_fullpage();

  // Set カナ氏名 field
  const name_kana = await $(
    ".//records-record-layout-item[@field-label='" +
      test_data.testData.jid_name_kana_field_lbl +
      "']"
  ).$(
    ".//label[contains(.,'" + test_data.testData.jid_name_kana_field_lbl + "')]"
  );
  await name_kana.$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  const name_kana_id = await name_kana.getAttribute("for");
  await $(".//input[@id='" + name_kana_id + "']").setValue(
    test_data.testData.cdd_kana_name_val
  );
  await browser.pause(1000);

  // Set 借入明細情報一覧 field
  const trr = await $(
    ".//label[contains(.,'" + test_data.testData.trr_record_lbl + "')]"
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

  const headerBar_edit = await $(".//header[@id='oneHeader']");
  const tabheader_edit = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_edit = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-3" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_edit, tabheader_edit, highlights_edit],
      fullPageScrollTimeout: 1000,
    }
  );

  // Save changes for JICC照会明細 (JID) record
  const sf_saveedit_btn_jid = await $(
    ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
  );
  await sf_saveedit_btn_jid.waitForClickable({ timeout: 10000 });
  await sf_saveedit_btn_jid.click();
  await browser.pause(10000);

  // Get JICC照会明細 (JID) records
  await parent.Get_JID();

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
  // Screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-5" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec2, tabheader_sec2, highlights_sec2],
      fullPageScrollTimeout: 1000,
    }
  );

  // open JID
  await parent.Open_JID();

  const headerBar_jid = await $(".//header[@id='oneHeader']");
  const tabheader_jid = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_jid = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-4" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_jid, tabheader_jid, highlights_jid],
      fullPageScrollTimeout: 1000,
    }
  );
}

async function JIO_Record_Creation() {
  // Go to TRR record detail screen
  await parent.Open_Salesforce_TRR_Record();

  const headerBar_trr = await $(".//header[@id='oneHeader']");
  const tabheader_trr = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_trr = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );

  // Screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
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
  await browser.pause(5000);

  // Click JICC照会明細(他機関) (JIO) record -- arrow
  const jio_arrow = await $(
    ".//*[@data-target-reveals='" +
      test_data.testData.api_jio_other_create_btn +
      "']"
  );
  await jio_arrow.waitForClickable({ timeout: 10000 });
  await jio_arrow.click();
  await browser.pause(5000);

  // Screenshot
  await browser.saveScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
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
      test_data.testData.api_jio_other_create_btn +
      "']"
  );
  await create_new_jio_btn.waitForClickable({ timeout: 10000 });
  await create_new_jio_btn.click();
  await browser.pause(5000);

  // Set 支払遅延の有無（CIC交流）field
  const cic_field = await $(
    ".//label[contains(.,'" + test_data.testData.jio_overdue_lbl + "')]"
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
  await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.jio_overdue_val +
      "')]"
  ).click();

  await browser.pause(3000);

  // Deselect the hover/selected fields
  await util.Deselect_fields(1);

  // Screenshot
  await browser.saveScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-8" +
      test_data.testData.data
  );

  // Save changes for JICC照会明細(他機関) (JIO) record
  const jio_sf_saveedit_btn = await $(
    ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
  );
  await jio_sf_saveedit_btn.waitForClickable({ timeout: 50000 });
  await jio_sf_saveedit_btn.click();
  await browser.pause(10000);

  // Get JIO & JID record
  await parent.Get_JID();
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

  // Screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
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
  await parent.Open_SF_JIO_Record();

  const highlights_jio = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );
  const headerBar_jio = await $(".//header[@id='oneHeader']");
  const tabheader_jio = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );

  // screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
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

async function Edit_JICC_Status() {
  // open SEC
  await parent.Open_SEC();

  const headerBar_sec3 = await $(".//header[@id='oneHeader']");
  const tabheader_sec3 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec3 = await $(
    ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
  );
  // Take screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-11" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec3, tabheader_sec3, highlights_sec3],
      fullPageScrollTimeout: 1000,
    }
  );

  // Go to JICC照会ステータス
  await $(
    ".//span[contains(.,'" + test_data.testData.jicc_status_lbl + "')]"
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
  await edit_jicc_status.waitForClickable({ timeout: 50000 });
  await edit_jicc_status.click();
  await browser.pause(5000);

  const edit_jicc_status_label = await $(
    ".//label[contains(.,'" + test_data.testData.jicc_status_lbl + "')]"
  );
  await edit_jicc_status_label.waitForClickable({ timeout: 50000 });
  await edit_jicc_status_label.click();
  await browser.pause(2000);

  const edit_jicc_status_value = await $(
    ".//lightning-base-combobox-item[contains(.,'" +
      test_data.testData.jicc_status_val +
      "')]"
  );
  await edit_jicc_status_value.scrollIntoView();
  await edit_jicc_status_value.click();
  await browser.pause(2000);

  // Take screenshot
  await browser.saveScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-12" +
      test_data.testData.data
  );

  // Save changes for updated SEC record
  const sf_saveedit_btn_sec = await $(
    ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
  );
  await sf_saveedit_btn_sec.waitForClickable({ timeout: 10000 });
  await sf_saveedit_btn_sec.click();
  await browser.pause(10000);

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
  // Take screenshot
  await browser.saveFullPageScreen(
    // ★ 新環境適用' New Env Implementation
    user_info.userInformation.screenshot +
      test_data.testData.spec70 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-13" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec4, tabheader_sec4, highlights_sec4],
      fullPageScrollTimeout: 1000,
    }
  );
}
