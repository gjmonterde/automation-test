const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-13"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_37: An error message with red toast is displayed and cannot be checked", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "37";

    // Go to VER record detail screen
    await parent.Open_VER_Record(); // ★ 新環境適用' New Env Implementation

    // Click 確認 button
    const ver_approve_btn = await $(
      "//button[@name='" + test_data.testData.confirm_btn + "']"
    );
    await ver_approve_btn.$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }); // ★ 新環境適用' New Env Implementation
    await ver_approve_btn.click();
    await browser.pause(5000);

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

    // To determine if the error toast shows up
    await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
