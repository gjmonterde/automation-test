const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0005-2");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_00_0005_step_27_data: KSC結果(JICC) Data Linkage", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "27";

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

    // Click KSC結果(JICC) (KIJ) record -- arrow
    const kij_arrow = await $(
      ".//*[@data-target-reveals='" + test_data.testData.kij_create + "']"
    );
    await kij_arrow.waitForClickable({ timeout: 10000 });
    await kij_arrow.click();
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

    // KSC結果(JICC) (KIJ) Creation -- click New
    const create_new_kij_btn = await $(
      ".//*[@data-target-selection-name='" +
        test_data.testData.kij_create +
        "']"
    );
    await create_new_kij_btn.waitForClickable({ timeout: 10000 });
    await create_new_kij_btn.click();
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
      test_data.testData.loanamt_val
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

    // Save changes for KSC結果(JICC) (KIJ) record
    const kij_save_edit_btn = await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    );
    await kij_save_edit_btn.waitForClickable({ timeout: 10000 });
    await kij_save_edit_btn.click();
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

    // Get KSC結果(JICC) (KIJ) records
    await parent.KIJ_New_Record();

    // Go to KIJ record detail screen
    await parent.Open_Salesforce_KIJ_Record(); // ★ 新環境適用' New Env Implementation

    const headerBar_kij = await $(".//header[@id='oneHeader']");
    const tabheader_kij = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kij = await $(
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
        hideAfterFirstScroll: [headerBar_kij, tabheader_kij, highlights_kij],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
