const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0006-4");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_30_0006_step_20: Unchecked rows are grayed out", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    // Uncheck row 7 and 8
    let row = 0;
    for (var i = 0; i < test_data.testData.two_no_of_records; i++) {
      row = row + 1;
      const row_flag_input = await $(
        ".//tr[@data-row-number='" +
          eval("test_data.testData.row_flag_" + row) +
          "']/td/lightning-primitive-cell-checkbox/span/label/span"
      );
      await row_flag_input.waitForClickable({ timeout: 10000 });
      await row_flag_input.click();
      await browser.pause(3000);
    }

    // Deselect the hover/selected fields
    await util.Deselect_fields(3);

    const headerBar_trr = await $(".//header[@id='oneHeader']");
    const tabheader_trr = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_trr = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_trr, tabheader_trr, highlights_trr],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to button
    const highlight_panel = await $(
      ".//li[@class='slds-tabs_default__item slds-is-active']"
    );
    await highlight_panel.scrollIntoView();
    await browser.pause(10000);

    // Click 再計算 button to recalculate total
    const recalculateBtn = $(
      ".//button[contains(., '" +
        test_data.testData.recalculate_btn_label +
        "')]"
    );
    await recalculateBtn.waitForClickable({ timeout: 5000 });
    await recalculateBtn.click();

    // Deselect 再計算 button
    const table_click = await $(".//div[@class='slds-p-around_small']");
    await table_click.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    const trr_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const trr_headerBar = await $(".//header[@id='oneHeader']");
    const trr_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [trr_headerBar, trr_tabheader, trr_highlights],
      }
    );
  });
}
