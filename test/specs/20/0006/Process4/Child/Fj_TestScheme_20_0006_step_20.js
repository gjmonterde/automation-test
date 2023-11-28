const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0006-4");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0006_step_20: Recalculate total when some rows are unchecked", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa
      await parent.Login_As_Shinsa1_User();
    }
    // Go to TRR record detail screen
    await parent.Go_to_TRR();

    // Uncheck row 2
    const row2_flag_input = await $(
      ".//tr[@data-row-number='" +
        test_data.testData.row2_flag +
        "']/td/lightning-primitive-cell-checkbox/span/label/span"
    );
    await row2_flag_input.waitForClickable({ timeout: 5000 });
    await row2_flag_input.click();
    await browser.pause(5000);

    // Uncheck row 3
    const row3_flag_input = await $(
      ".//tr[@data-row-number='" +
        test_data.testData.row3_flag +
        "']/td/lightning-primitive-cell-checkbox/span/label/span"
    );
    await row3_flag_input.waitForClickable({ timeout: 5000 });
    await row3_flag_input.click();
    await browser.pause(5000);

    // Uncheck row 8
    const row8_flag_input = await $(
      ".//tr[@data-row-number='" +
        test_data.testData.row8_flag +
        "']/td/lightning-primitive-cell-checkbox/span/label/span"
    );
    await row8_flag_input.waitForClickable({ timeout: 5000 });
    await row8_flag_input.click();
    await browser.pause(5000);

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
        test_data.testData.spec20 +
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

    // Take screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
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
