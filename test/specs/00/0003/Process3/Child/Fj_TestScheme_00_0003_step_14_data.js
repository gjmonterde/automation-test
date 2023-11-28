const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0003-3");

export default function suite() {
  it("Fj_TestScheme_00_0003_step_14_data: Update the 同一人照会ステータス Same Person Inquiry Status to「取引有無照会完了」 Complete Transaction Inquiry.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "14";

    // Login as admin
    await parent.Login_as_Admin();

    // Go to DDP record
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_DDP();

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // Edit the 同一人照会ステータス
    const edit_ddp_status = await $(
      ".//button[@title='" + test_data.testData.ddp_status_edit_pencil + "']"
    );
    await edit_ddp_status.waitForClickable({ timeout: 10000 });
    await edit_ddp_status.click();
    await browser.pause(3000);

    const edit_ddp_status_lbl = await $(
      "label=" + test_data.testData.ddp_status
    );
    await edit_ddp_status_lbl.waitForClickable({ timeout: 10000 });
    await edit_ddp_status_lbl.click();
    await browser.pause(3000);

    const edit_ddp_status_value = await $(
      "//span[@title='" + test_data.testData.ddp_status_value + "']"
    );
    await edit_ddp_status_value.scrollIntoView();
    await edit_ddp_status_value.waitForClickable({ timeout: 10000 });
    await edit_ddp_status_value.click();
    await browser.pause(5000);

    // Take 同一人照会 screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);

    // Save changes
    await $(
      ".//button[@name='" + test_data.testData.sf_saveedit_btn + "']"
    ).click();
    await browser.pause(10000);

    // Take modified 同一人照会 screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);
  });
}
