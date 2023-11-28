const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0002-10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0002_step_25: The confirmation status changes to「実施済OK」", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    // Go to VER1 record
    await parent.Open_Record_URL(
      user_info.object.ver_obj,
      test_data.testData.ver1_id
    );

    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

    // Click 確認 button
    const verify_accept_btn = await $(
      "//button[@name='" + test_data.testData.verify_docu_accept_api + "']"
    );
    await verify_accept_btn.click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const accept_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await accept_confirm_btn.waitForClickable({ timeout: 10000 });
    await accept_confirm_btn.click();
    await browser.pause(2000);

    // To determine if the toast shows up
    await util.Toast_Message();

    // Screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);
    await browser.refresh();
    await browser.pause(10000);

    // Scroll to view - 徴求書類 related list
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
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar_ver, tabheader_ver, highlights_ver],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
