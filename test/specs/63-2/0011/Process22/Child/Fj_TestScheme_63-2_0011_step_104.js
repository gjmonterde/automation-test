const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0011-22");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0011_step_104: Press the「削除」button - an error message is displayed on the sub screen and cannot be deleted", async () => {
    const stepNum = "104"; // ★ 新環境適用' New Env Implementation

    // Go to BA record
    await parent.Open_Record_URL(
      user_info.object.ba_obj,
      test_data.testData.ba_id
    );

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
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
    await browser.pause(3000);

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    const bank_account_delete_btn = await $(
      ".//button[@name='" + test_data.testData.bank_account_delete_btn + "']"
    );
    await bank_account_delete_btn.waitForClickable({ timeout: 10000 });
    await bank_account_delete_btn.click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
  });
}
