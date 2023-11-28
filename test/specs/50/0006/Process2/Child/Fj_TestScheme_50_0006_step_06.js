const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_50_0006-2");

export default function suite() {
  it("Fj_TestScheme_50_0006_step_06: Check row details with 今回 category from 借入明細情報一覧 section", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Go to TRR record detail screen
    await parent.Open_TRR_Record();

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Click 再計算 button to recalculate total
    const recalculateBtn = $(
      ".//button[contains(., '" +
        test_data.testData.recalculate_btn_label +
        "')]"
    );
    await recalculateBtn.waitForClickable({ timeout: 10000 });
    await recalculateBtn.click();

    // Deselect 再計算 button
    const table_click = await $(".//div[@class='slds-p-around_small']");
    await table_click.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
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
