const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_10_0002_step_25: The 確認 confirmation status changes to「実施済OK」 Performed OK", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    // Go to VER1 page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver1_id
    );

    // Click 確認 button
    const verify_accept_btn = await $(
      "//button[@name='" + test_data.testData.ver_approve_btn_api + "']"
    );
    await verify_accept_btn.click();
    await browser.pause(10000);

    // Screenshot - Confirmation screen VER record
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1"
    );

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const accept_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await accept_confirm_btn.waitForClickable({ timeout: 10000 });
    await accept_confirm_btn.click();
    await browser.pause(2000);

    // Toast
    await util.Toast_Message();

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Scroll to view RDC
    await util.Scroll_to_related_list(test_data.testData.history_header);

    // Screenshot - VER record
    const highlights9 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar9 = await $(".//header[@id='oneHeader']");
    const tabheader9 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar9, tabheader9, highlights9],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
