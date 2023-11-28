const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-4"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0006_step_25: Recalculate total when some rows are unchecked", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "25";

    // Go to TRR record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_TRR_Record();

    // ★ 新環境適用' New Env Implementation
    for (var i = 0; i < test_data.testData.trr_flag_no_of_unchecked; i++) {
      // Uncheck row
      const row_flag_input = await $(
        ".//tr[@data-row-number='" +
          eval("test_data.testData.trr_row_flag_" + (i + 1)) +
          "']/td/lightning-primitive-cell-checkbox/span/label/span"
      );
      await row_flag_input.waitForClickable({ timeout: 5000 });
      await row_flag_input.click();
      await browser.pause(5000);
    }

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
    await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

    // Screenshot - with toast message
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    await browser.refresh();
    await browser.pause(10000);

    const trr_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const trr_headerBar = await $(".//header[@id='oneHeader']");
    const trr_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot - updated page without toast message
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [trr_headerBar, trr_tabheader, trr_highlights],
      }
    );
  });
}
