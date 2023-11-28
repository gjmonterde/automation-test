const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-5");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_13: All files uploaded to the requisition have been deleted and placed in the organization's Recycle Bin", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "13";

    // Go to RDC2 Record
    await parent.Open_RDC_Record();

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
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Click 確認 confirmation button
    const footer_modal = await $("//footer[@class='slds-modal__footer']");
    const delete_confirm_btn = await footer_modal.$(
      ".//button[contains(text(), '" +
        test_data.testData.delete_confirm_btn +
        "')]"
    );
    await delete_confirm_btn.waitForClickable({ timeout: 10000 });
    await delete_confirm_btn.click();

    // To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();

    // Screenshot - toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
    await browser.refresh();
    await browser.pause(10000);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    ); // ★ 新環境適用' New Env Implementation
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    ); // ★ 新環境適用' New Env Implementation

    // Screenshot - updated page without toast message
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

    // Go to MyPage
    await parent.loginMyPage();

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(2000);

    // Login as admin user
    await parent.Login_as_Admin();

    // Go to 組織のごみ箱 list view
    await $("span=" + test_data.testData.my_bin_listview).click();
    await $("span=" + test_data.testData.org_bin_listview).click();
    await browser.pause(5000);

    // Sort
    const sort_col = await $(
      ".//a[contains(., '" + test_data.testData.recycle_date_sort + "')]"
    );
    var sort = await sort_col.nextElement().getText();
    while (sort != test_data.testData.app_desc) {
      await sort_col.click();
      await browser.pause(1000);
      sort = await sort_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.app_desc);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(2000);
  });
}
