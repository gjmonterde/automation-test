const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_33_data: KSC結果(本人申告) Data Linkage", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "33";

    // Login as Admin
    await parent.Login_as_Admin();

    // Get KSC照会明細 (KID) records
    await parent.KID_New_Record();

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

    // Screenshot -- Before Data
    // ★ 新環境適用' New Env Implementation
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
        hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

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

    // KSC結果(本人申告) (KIL) Creation -- click New
    const create_new_kil_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.kil_create +
        "']"
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
      test_data.testData.kil_attrib_changedate_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 本人申告区分 field
    const declare_category = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kil_declarecategory_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" +
        test_data.testData.kil_declarecategory_lbl +
        "')]"
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
      test_data.testData.kil_declare_category_val
    );
    await browser.pause(1000);

    // ★ 新環境適用' New Env Implementation
    // Set 申告日 field
    const declare_date = await $(
      ".//records-record-layout-item[@field-label='" +
        test_data.testData.kil_declaredate_lbl +
        "']"
    ).$(
      ".//label[contains(.,'" + test_data.testData.kil_declaredate_lbl + "')]"
    );
    await declare_date.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    const declare_date_id = await declare_date.getAttribute("for");
    await $(".//input[@id='" + declare_date_id + "']").setValue(
      test_data.testData.kil_declare_date_val
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

    // Screenshot -- During Data
    // ★ 新環境適用' New Env Implementation
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

    // Save changes for KSC結果(本人申告) (KIL) record
    const kil_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await kil_save_edit_btn.waitForClickable({ timeout: 10000 });
    await kil_save_edit_btn.click();
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

    // Screenshot -- After Data(1)
    // ★ 新環境適用' New Env Implementation
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
        hideAfterFirstScroll: [headerBar_kid2, tabheader_kid2, highlights_kid2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Get KSC結果(本人申告) (KIL) records
    await parent.KIL_New_Record();

    // Go to KIL record detail screen
    await parent.Open_Salesforce_KIL_Record(); // ★ 新環境適用' New Env Implementation

    const headerBar_kil = await $(".//header[@id='oneHeader']");
    const tabheader_kil = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kil = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot -- After Data(2)
    // ★ 新環境適用' New Env Implementation
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
        hideAfterFirstScroll: [headerBar_kil, tabheader_kil, highlights_kil],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
