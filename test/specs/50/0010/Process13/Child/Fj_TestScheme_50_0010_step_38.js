const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0002_step_38: 確認ステータス field value should be 実施済OK upon clicking 確認 button", async () => {
    const stepNum = "38"; // ★ 新環境適用' New Env Implementation

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver2_id
    );

    // Click 確認 button
    const ver_approve_btn = await $(
      "//button[@name='" + test_data.testData.ver_approve_btn_api + "']"
    );
    await ver_approve_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await ver_approve_btn.click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );

    await browser.pause(5000);
    const footer_modal = await $("//footer[@class='slds-modal__footer']");

    // Click 確認 confirmation button
    const ver_approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await ver_approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await ver_approve_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver2_id
    );

    // Scroll
    await util.Scroll_to_related_list(test_data.testData.ver_rdc_scroll);

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
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
