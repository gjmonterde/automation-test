const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
const parent = require("../Parent/Fj_TestScheme_30_0010-13");

export default function suite() {
  it("Fj_TestScheme_30_0010_step_38: 確認ステータス field value should be 実施済OK upon clicking 確認 button", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "38";

    // ★ 新環境適用' New Env Implementation
    // Go to VER record detail screen
    await parent.Go_to_VER();

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
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
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const accept_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.accept_confirm_btn +
        "')]"
    );
    await accept_confirm_btn.waitForClickable({ timeout: 5000 });
    await accept_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
  });
}
