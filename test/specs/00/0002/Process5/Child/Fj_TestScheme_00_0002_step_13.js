const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";

export default function suite() {
  it("Fj_TestScheme_00_0002_step_13: Files uploaded to 徴求書類 record where 諾否判定 = 不備 should be deleted and placed in org's Recycle bin", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "13";

    // Go to VER record detail screen
    // ★ 新環境適用' New Env Implementation
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ver_obj,
      test_data.testData.ver1_id
    );

    // Go to RDC record detail screen
    // ★ 新環境適用' New Env Implementation
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id_of_ver1
    );

    // Click ファイル削除 button
    const delete_btn = await $(
      ".//button[@name='" + test_data.testData.delete_btn_api + "']"
    );
    await delete_btn.waitForClickable({ timeout: 10000 });
    await delete_btn.click();
    await browser.pause(5000);

    // Screenshot
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

    await browser.pause(5000);
    const footer_modal = await $("//footer[@class='slds-modal__footer']");

    // Click 確認 confirmation button
    const delete_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.delete_confirm_btn +
        "')]"
    );
    await delete_confirm_btn.waitForClickable({ timeout: 5000 });
    await delete_confirm_btn.click();
    await browser.pause(5000);

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    ); // ★ 新環境適用' New Env Implementation

    //To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();

    // Screenshot - with toast message
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

    await browser.refresh();
    await browser.pause(10000);

    // Screenshot - updated page without toast message
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
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // Login as admin user
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // App Launcher-Recycle bin
    // ★ 新環境適用' New Env Implementation
    await util.App_Launcher(test_data.testData.recycle_bin_app);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to 組織のごみ箱 list view
    await $("span=" + test_data.testData.my_bin_listview).click();
    await $("span=" + test_data.testData.org_bin_listview).click();
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
