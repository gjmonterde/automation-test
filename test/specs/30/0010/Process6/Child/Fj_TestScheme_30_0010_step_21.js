const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
const parent = require("../Parent/Fj_TestScheme_30_0010-6");

export default function suite() {
  it("Fj_TestScheme_30_0010_step_21: ご提出の状況 field value should be 銀行提出済 when reuploading files considered to be defective in My Page", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "21";

    // ★ 新環境適用' New Env Implementation
    // Go to APP record
    await parent.Go_to_APP();

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );

    // View RDC record
    const parent_row = await $(
      "//tr[@data-row-key-value='" + test_data.testData.rdc1_id_of_ver2 + "']"
    );

    const view_btn = await parent_row.$(
      ".//*[@title='" + test_data.testData.mypage_rdc_view_record_btn + "']"
    );

    await view_btn.click();
    await browser.pause(5000);

    await util.rdc_modal_fullpage_mypage();
    await browser.pause(2000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );

    // Upload file
    const remoteFilePath = await browser.uploadFile(
      user_info.userInformation.var_file_Path1
    );
    await $(
      ".//input[@class='slds-file-selector__input slds-assistive-text']"
    ).addValue(remoteFilePath);
    await browser.pause(5000);

    // Wait for button to be clickable
    const btn = await $("button=" + test_data.testData.completion_btn);
    await btn.waitForClickable({ timeout: 50000 });

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );

    // ★ 新環境適用' New Env Implementation
    await $(
      ".//button[@class='slds-button slds-button--neutral ok desktop uiButton--default uiButton--brand uiButton']"
    ).click();

    // To determine if the toast shows up
    await util.Toast_Message();

    // Take screenshot - with toast message
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(5000);

    // Take screenshot - updated page without toast message
    await view_btn.click();
    await browser.pause(5000);

    await util.rdc_modal_fullpage_mypage();
    await browser.pause(2000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-5"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-6"
    );
  });
}
