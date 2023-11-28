const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0002-8");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0002_step_22: 徴求書類 Requisition status should be「銀行確認済」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

    // Go to VER record detail screen
    await parent.Go_to_VER();

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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [ver_headerBar, ver_tabheader, ver_highlights],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to RDC of VER1 page
    await parent.Go_to_RDC();

    const rdc_highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const rdc_headerBar1 = await $(".//header[@id='oneHeader']");
    const rdc_tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [rdc_headerBar1, rdc_tabheader1, rdc_highlights1],
      }
    );

    // Go to VER record detail screen
    await parent.Go_to_VER();

    // Select 確認OK radiobutton
    const rdc_confirm_radio_btn = await $(
      "//label[@for=//input[@name='" +
        test_data.testData.rdc1_id_of_ver1 +
        test_data.testData.rdc_confirm_radio_btn +
        "']/@id]"
    );
    await rdc_confirm_radio_btn.waitForClickable({ timeout: 5000 });
    await rdc_confirm_radio_btn.click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [ver_headerBar, ver_tabheader, ver_highlights],
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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
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
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [ver_headerBar3, ver_tabheader3, ver_highlights3],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Go to RDC of VER1 page
    await parent.Go_to_RDC();

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-6",
      {
        hideAfterFirstScroll: [rdc_headerBar1, rdc_tabheader1, rdc_highlights1],
      }
    );
  });
}
