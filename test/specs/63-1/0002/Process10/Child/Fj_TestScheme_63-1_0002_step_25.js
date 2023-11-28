const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0002_step_25: The 確認 confirmation status changes to「実施済OK」", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    // Go to VER1 record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver1_id
    );

    // Click 確認 button
    const ver_approve_btn = await $(
      "//button[@name='" + test_data.testData.ver_approve_btn_api + "']"
    );

    // ★ 新環境適用' New Env Implementation
    await ver_approve_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await ver_approve_btn.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const accept_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.accept_confirm_btn +
        "')]"
    );
    await accept_confirm_btn.waitForClickable({ timeout: 10000 });
    await accept_confirm_btn.click();
    await browser.pause(2000);

    // To determine if the toast shows up
    await util.Toast_Message();

    // Screenshot - with toast message
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
    await browser.refresh();
    await browser.pause(10000);

    // ★ 新環境適用' New Env Implementation
    // Scroll to RDC related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const headerBar_ver = await $(".//header[@id='oneHeader']");
    const tabheader_ver = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_ver = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar_ver, tabheader_ver, highlights_ver],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
