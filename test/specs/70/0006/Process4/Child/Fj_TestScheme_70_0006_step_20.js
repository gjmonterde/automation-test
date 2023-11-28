const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0006-4");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_70_0006_step_20: Unchecked rows are grayed out", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    // Go to TRR record
    await parent.Go_To_TRR();

    // Uncheck rows
    for (var i = 0; i < test_data.testData.trr_row_uncheck_count; i++) {
      const row2_flag_input = await $(
        ".//tr[@data-row-number='" +
          eval("test_data.testData.row_flag" + (i + 1)) +
          "']/td/lightning-primitive-cell-checkbox/span/label/span"
      );
      await row2_flag_input.waitForClickable({ timeout: 5000 });
      await row2_flag_input.click();
      await browser.pause(5000);
    }

    // Screenshot
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Click recalculate button
    const btn1 = await $("button=" + test_data.testData.trr_recalculate_btn);
    await btn1.scrollIntoView({ block: "center" });
    await btn1.waitForClickable({ timeout: 30000 });
    await btn1.click();

    // Toast message screenshot
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();
    await browser.pause(1000);
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
  });
}
