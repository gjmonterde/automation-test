const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0002_step_17: 徴求書類ステータスRequisition status should be 「銀行確認済」Bank Confirmed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "17";

    // Go to RDC1 page
    // ★ 新環境適用' New Env Implementation
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id_of_ver1
    );

    // Click 確認 button
    const rdc_approve_btn = await $(
      "//button[@name='" + test_data.testData.api_rdc_accept_btn + "']"
    );
    await rdc_approve_btn.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await rdc_approve_btn.click();
    await browser.pause(5000);

    // Screenshot - Confirmation screen RDC record
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1"
    );

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const rdc_approve_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await rdc_approve_confirm_btn.waitForClickable({ timeout: 5000 });
    await rdc_approve_confirm_btn.click();

    // Toast
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();
    await browser.pause(2000);
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - RDC record
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );

    // Go to VER1 page
    // ★ 新環境適用' New Env Implementation
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver1_id
    );

    // Scroll to view RDC
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    // Screenshot - VER
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
