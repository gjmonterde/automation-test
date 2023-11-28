const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-6"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0010_step_14: ご提出の状況 field value should be 銀行提出済 when reuploading files considered to be defective in My Page", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "14";

    // Go to APP
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to My Page RDC record screen
    await parent.Go_to_RDC(); // ★ 新環境適用' New Env Implementation

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2"
    );

    const remoteFilePath = await browser.uploadFile(
      user_info.userInformation.var_file_Path2
    );
    await $(
      ".//input[@class='slds-file-selector__input slds-assistive-text']"
    ).addValue(remoteFilePath);

    // To determine if the upload has green check
    // ★ 新環境適用' New Env Implementation
    await util.Upload_image_green_check();

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    await $("button=" + test_data.testData.completion_btn).click();

    // Toast Screenshot
    const toast = await $(
      ".//div[@class='toastContainer slds-notify_container slds-is-relative']"
    );
    // To determine if the toast shows up
    // ★ 新環境適用' New Env Implementation
    await util.Toast_Message();

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-4",
      {
        hideAfterFirstScroll: [toast],
      }
    );
    await browser.pause(5000);

    // Take screenshot
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

    // Go to My Page APP record screen
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Take screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-6"
    );
  });
}
