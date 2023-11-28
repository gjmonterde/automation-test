const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0005-2");
const util = require("../../../../../pageobjects/utility");
const stepNum = "7"; // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_60_0005_step_07_data: KSC照会明細 Data Linkage", async () => {
    // Login as Admin
    await parent.Login_as_Admin();

    // KSC照会明細 (KID) Record Creation
    await KID_Record_Creation();

    // Edit KSC Status in SEC-1 Record
    await Edit_KSC_Status();
  });
}

async function KID_Record_Creation() {
  // Go to SEC record detail
  await parent.Open_Salesforce_EXM_SEC1_Record();
  await browser.pause(1000);

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

  // Click KSC照会明細 (KID) record -- arrow
  const kid_arrow = await $(
    ".//*[@data-target-reveals='" + test_data.testData.kid_create + "']"
  );
  await kid_arrow.waitForClickable({ timeout: 10000 });
  await kid_arrow.click();
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

  // KSC照会明細 (KID) Creation -- click New
  const create_new_kid_btn = await $(
    ".//*[@data-target-selection-name='" + test_data.testData.kid_create + "']"
  );
  await create_new_kid_btn.waitForClickable({ timeout: 10000 });
  await create_new_kid_btn.click();
  await browser.pause(5000);

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

  // Take screenshot -- During Data
  await browser.saveScreen(
    user_info.userInformation.screenshot +
      test_data.testData.spec60 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-3" +
      test_data.testData.data
  );
  await browser.pause(2000);

  // Save changes for KSC照会明細 (KID) record
  const save_btn_kid = await $(
    ".//button[@name='" + test_data.testData.save_edit_btn + "']"
  );
  await save_btn_kid.waitForClickable({ timeout: 10000 });
  await save_btn_kid.click();
  await browser.pause(5000);

  // Get KSC照会明細 (KID) records
  await parent.KID_New_Record();

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

  // Go to KID record detail
  await parent.Open_Salesforce_KID_Record();

  const headerBar_kid = await $(".//header[@id='oneHeader']");
  const tabheader_kid = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_kid = await $(
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
      hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
      fullPageScrollTimeout: 3000,
    }
  );
  await browser.pause(2000);
}

async function Edit_KSC_Status() {
  // Go to SEC-1 record detail
  await parent.Open_Salesforce_EXM_SEC1_Record();
  await browser.pause(1000);

  const headerBar_sec1 = await $(".//header[@id='oneHeader']");
  const tabheader_sec1 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec1 = await $(
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
      hideAfterFirstScroll: [headerBar_sec1, tabheader_sec1, highlights_sec1],
      fullPageScrollTimeout: 3000,
    }
  );

  // Scroll up to highlights panel
  await util.Highlight_panel_scroll();

  // Go to KSC照会ステータス
  await $(
    ".//span[contains(.,'" + test_data.testData.ksc_status_label + "')]"
  ).$(function () {
    this.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
  await browser.pause(3000);

  // Edit the KSC照会ステータス
  const edit_ksc_status = await $(
    ".//button[@title='" + test_data.testData.ksc_edit_pencil + "']"
  );
  await edit_ksc_status.waitForClickable({ timeout: 10000 });
  await edit_ksc_status.click();
  await browser.pause(3000);

  const edit_ksc_status_label = await $(
    ".//label[contains(.,'" + test_data.testData.ksc_status_label + "')]"
  );
  await edit_ksc_status_label.waitForClickable({ timeout: 10000 });
  await edit_ksc_status_label.click();
  await browser.pause(3000);
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
      test_data.testData.spec60 +
      "_" +
      test_data.testData.tab0005 +
      "_" +
      stepNum +
      "-7" +
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

  const headerBar_sec2 = await $(".//header[@id='oneHeader']");
  const tabheader_sec2 = await $(
    ".//div[@class='slds-no-print oneAppNavContainer']"
  );
  const highlights_sec2 = await $(
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
      "-8" +
      test_data.testData.data,
    {
      hideAfterFirstScroll: [headerBar_sec2, tabheader_sec2, highlights_sec2],
      fullPageScrollTimeout: 3000,
    }
  );
  await browser.pause(2000);
}
