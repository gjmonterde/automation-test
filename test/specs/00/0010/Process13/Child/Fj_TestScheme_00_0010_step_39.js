const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-13");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_39: The 確認 confirmation status changes to「実施済OK」Performed OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "39";

    // Go to VER record detail screen
    // ★ 新環境適用' New Env Implementation
    await parent.Open_VER_Record();

    // Click 確認 button
    const ver_approve_btn = await $(
      "//button[@name='" + test_data.testData.confirm_btn + "']"
    );
    await ver_approve_btn.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await ver_approve_btn.click();
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const ver_approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await ver_approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await ver_approve_confirm_btn.click();

    // To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();
    await browser.pause(2000);
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Scroll to view RDC
    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
