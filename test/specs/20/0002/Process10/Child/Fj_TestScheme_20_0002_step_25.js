const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0002_step_25: 確認ステータス field value should be 実施済OK upon clicking 確認 button", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "25";

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver1_id
    );

    // Click 確認 button
    const ver_approve_btn = await $(
      "//button[@name='" + test_data.testData.ver_approve_btn_api + "']"
    );
    await ver_approve_btn.click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1"
    );

    const footer_modal = await $("//footer[@class='slds-modal__footer']");

    // Click 確認 confirmation button
    const ver_approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await ver_approve_confirm_btn.waitForClickable({ timeout: 5000 });
    await ver_approve_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    // Take screenshot - updated page without toast message
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
