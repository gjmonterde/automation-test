const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0002-5");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0002_step_18: Files uploaded to 徴求書類 record where 諾否判定 = 不備 should be deleted and placed in org's Recycle bin", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "18";

    // Go to RDC record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id
    );

    // Click ファイル削除 button
    const delete_btn = await $(
      ".//button[@name='" + test_data.testData.delete_btn_api + "']"
    );
    await delete_btn.waitForClickable({ timeout: 10000 });
    await delete_btn.click();
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

    await browser.pause(5000);
    const footer_modal = await $("//footer[@class='slds-modal__footer']");

    // Click 確認 confirmation button
    const delete_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await delete_confirm_btn.waitForClickable({ timeout: 5000 });
    await delete_confirm_btn.click();
    await browser.pause(5000);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
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

    // Take screenshot - updated page without toast message
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

    // Login as admin
    await parent.Login_as_admin();

    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );

    // Go to 組織のごみ箱 list view
    await $("span=" + test_data.testData.my_bin_listview).click();
    await $("span=" + test_data.testData.org_bin_listview).click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
  });
}
