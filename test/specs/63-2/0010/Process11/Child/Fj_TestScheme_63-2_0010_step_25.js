const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0010-11");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0010_step_25: Requisition status should be「銀行確認済」", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    // Go to VER record detail screen
    await parent.Go_to_VER();

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
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [ver_headerBar, ver_tabheader, ver_highlights],
      }
    );

    // Select 確認OK radiobutton
    const rdc_confirm_radio_btn = await $(
      "//label[@for=//input[@name='" +
        test_data.testData.rdc1_id_of_ver2 +
        test_data.testData.rdc_confirm_radio_btn +
        "']/@id]"
    );
    await rdc_confirm_radio_btn.waitForClickable({ timeout: 5000 });
    await rdc_confirm_radio_btn.click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
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
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );

    // Go to VER record detail screen
    await parent.Go_to_VER();

    const ver_highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const ver_headerBar1 = await $(".//header[@id='oneHeader']");
    const ver_tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [ver_headerBar1, ver_tabheader1, ver_highlights1],
      }
    );

    // Go to RDC record detail screen
    await parent.Go_to_RDC();

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5",

      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
