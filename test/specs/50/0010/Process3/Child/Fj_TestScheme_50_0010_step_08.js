const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0010-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0010_step_08: Files uploaded to 徴求書類 record where 諾否判定 = 不備 should be deleted and placed in org's Recycle bin", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Login as tantou1
    await parent.Login_as_Tantou1();

    // Go to VER record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver2_id
    );

    // Go to RDC record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id_of_ver2
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
    const delete_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" + test_data.testData.confirm_btn + "')]"
    );
    await delete_confirm_btn.waitForClickable({ timeout: 10000 });
    await delete_confirm_btn.click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot
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
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

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

    // Login as admin user
    await parent.Login_as_Admin();

    const bin_headerBar = await $(".//header[@id='oneHeader']");
    const bin_tabheader = await $(
      ".//div[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print']"
    );
    const bin_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
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
        "-4",
      {
        hideAfterFirstScroll: [bin_headerBar, bin_tabheader, bin_highlights],
      }
    );

    // Go to 組織のごみ箱 list view
    await $("span=" + test_data.testData.my_bin_listview).click();
    await $("span=" + test_data.testData.org_bin_listview).click();
    await browser.pause(5000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5",
      {
        hideAfterFirstScroll: [bin_headerBar, bin_tabheader, bin_highlights],
      }
    );
  });
}
