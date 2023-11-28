const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_40_0010_step_37: An error message is displayed and cannot be checked", async () => {
    const stepNum = "37"; // ★ 新環境適用' New Env Implementation

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver_id
    );

    // Click 確認 button
    const ver_approve_btn = await $(
      "//button[@name='" + test_data.testData.api_ver_accept_btn + "']"
    );
    await ver_approve_btn.$(
      // ★ 新環境適用' New Env Implementation
      function () {
        this.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    );

    await ver_approve_btn.click();
    await browser.pause(5000);

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const ver_approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await ver_approve_confirm_btn.waitForClickable({ timeout: 10000 });
    await ver_approve_confirm_btn.click();

    // To determine if the error toast shows up
    await util.Toast_Message();
    await browser.pause(1000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
