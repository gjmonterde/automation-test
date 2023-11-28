const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0010-13");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_62_0010_step_38: The 確認 confirmation status changes to 「実施済OK」 Performed OK", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "38";

    // Go to VER record detail screen
    await parent.Go_to_VER();

    // Click 確認 button
    const ver_approve_btn = await $(
      "//button[@name='" + test_data.testData.api_ver_accept_btn + "']"
    );
    await ver_approve_btn.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await ver_approve_btn.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
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
    await ver_approve_confirm_btn.waitForClickable({ timeout: 30000 });
    await ver_approve_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.pause(1000);
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );

    // Go to VER
    await parent.Go_to_VER();

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
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
