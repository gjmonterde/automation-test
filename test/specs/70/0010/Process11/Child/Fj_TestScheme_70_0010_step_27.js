const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0010-11"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_70_0010_step_27: 徴求書類 requested document  should be「銀行確認済」 Bank Confirmed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "27";

    // Go to VER record detail screen
    await parent.Go_To_VER();

    await browser.pause(173700);

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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [ver_headerBar, ver_tabheader, ver_highlights],
      }
    );

    let ssno = 0;

    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Select 確認OK radiobutton
      const rdc_confirm_radio_btn = await $(
        "//label[@for=//input[@name='" +
          test_data.testData.rdc_id_arr[i] +
          test_data.testData.rdc_confirm_radio_btn +
          "']/@id]"
      );
      await rdc_confirm_radio_btn.waitForClickable({ timeout: 5000 });
      await rdc_confirm_radio_btn.click();
      await browser.pause(5000);
      ssno = ssno + 1;
    }

    const div_container = await $("//div[@class='slds-select_container']");

    // Click 不備理由 picklist field
    const rdc_deficiency_reason_btn = await div_container.$(
      "//select[@name='" +
        test_data.testData.rdc_id_arr[0] +
        test_data.testData.rdc_deficiency_reason_btn +
        "']"
    );

    let rdc_deficiency_reason_btn_clickable =
      await rdc_deficiency_reason_btn.isClickable();
    console.log(
      "rdc_deficiency_reason_btn is clickable: " +
        rdc_deficiency_reason_btn_clickable
    );

    // Remove 不備理由 picklist field value
    const defect_reason_no_val = await $(
      "//option[@value='" + test_data.testData.defect_reason_no_val + "']"
    );
    let defect_reason_no_val_clickable =
      await defect_reason_no_val.isClickable();
    console.log(
      "defect_reason_no_val is clickable: " + defect_reason_no_val_clickable
    );
    await defect_reason_no_val.click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [ver_headerBar, ver_tabheader, ver_highlights],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Loop through RDC records

    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC record detail screen
      await parent.Go_To_RDC(test_data.testData.rdc_id_arr[i]);

      ssno = ssno + 1;

      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  });
}
