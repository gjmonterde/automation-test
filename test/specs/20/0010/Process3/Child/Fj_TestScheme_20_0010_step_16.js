const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0010-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0010_step_16: Should be able to select value from 不備理由 field for 徴求書類 record", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "16";

    // Go to VER record detail screen
    await parent.Go_to_VER2();

    // ★ 新環境適用' New Env Implementation
    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const ver_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const ver_headerBar = await $(".//header[@id='oneHeader']");
    const ver_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [ver_headerBar, ver_tabheader, ver_highlights],
      }
    );

    // Go to RDC record detail screen
    await parent.Go_to_RDC2();

    const rdc_highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const rdc_headerBar1 = await $(".//header[@id='oneHeader']");
    const rdc_tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [rdc_headerBar1, rdc_tabheader1, rdc_highlights1],
      }
    );

    // Go to VER record detail screen
    await parent.Go_to_VER2();

    // Select 確認NG radiobutton
    const rdc_reject_radio_btn = await $(
      "//label[@for=//input[@name='" +
        test_data.testData.rdc2_id +
        test_data.testData.rdc_reject_radio_btn +
        "']/@id]"
    );
    await rdc_reject_radio_btn.waitForClickable({ timeout: 5000 });
    await rdc_reject_radio_btn.click();
    await browser.pause(5000);

    const div_container = await $("//div[@class='slds-select_container']");

    // Click 不備理由 picklist field
    const rdc_deficiency_reason_btn = await div_container.$(
      "//select[@name='" +
        test_data.testData.rdc2_id +
        test_data.testData.rdc_deficiency_reason_btn +
        "']"
    );

    let rdc_deficiency_reason_btn_clickable =
      await rdc_deficiency_reason_btn.isClickable();
    console.log(
      "rdc_deficiency_reason_btn is clickable: " +
        rdc_deficiency_reason_btn_clickable
    );

    // Select 不備理由 picklist field value
    const defect_reason_val2 = await rdc_deficiency_reason_btn.$(
      ".//option[@value='" + test_data.testData.defect_reason_val2 + "']"
    );
    let defect_reason_val2_clickable = await defect_reason_val2.isClickable();
    console.log(
      "defect_reason_val2 is clickable: " + defect_reason_val2_clickable
    );
    await defect_reason_val2.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const ver_highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const ver_headerBar2 = await $(".//header[@id='oneHeader']");
    const ver_tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [ver_headerBar2, ver_tabheader2, ver_highlights2],
      }
    );

    // Scroll to view highlight panel
    await util.Highlight_panel_scroll();
    await browser.pause(5000);

    // Click 確定 button in custom RDC table inside VER record page
    await util.Click_RDC_confirm_button_in_VER_record();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const ver_highlights3 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const ver_headerBar3 = await $(".//header[@id='oneHeader']");
    const ver_tabheader3 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [ver_headerBar3, ver_tabheader3, ver_highlights3],
      }
    );

    // Go to RDC record detail screen
    await parent.Go_to_RDC2();

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [rdc_headerBar1, rdc_tabheader1, rdc_highlights1],
      }
    );
  });
}
