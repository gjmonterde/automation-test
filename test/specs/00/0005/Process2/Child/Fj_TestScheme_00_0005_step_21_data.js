const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_21_data: KSC照会明細 Data Linkage", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "21";

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
        hideAfterFirstScroll: [headerBar_sec, tabheader_sec, highlights_sec],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlights panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

    // Click KSC照会明細 (KID) record -- arrow
    const kid_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.kid_create + "']"
    );
    await kid_arrow.waitForClickable({ timeout: 10000 });
    await kid_arrow.click();
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
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

    // KSC照会明細 (KID) Creation -- click New
    const create_new_kid_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.kid_create +
        "']"
    );
    await create_new_kid_btn.waitForClickable({ timeout: 10000 });
    await create_new_kid_btn.click();
    await browser.pause(5000);

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
    await util.Deselect_fields(1); // ★ 新環境適用' New Env Implementation

    // Screenshot -- During Data
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
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
        hideAfterFirstScroll: [headerBar_sec2, tabheader_sec2, highlights_sec2],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Scroll up to the highlight panel
    await util.Highlight_panel_scroll(); // ★ 新環境適用' New Env Implementation

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
        hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
