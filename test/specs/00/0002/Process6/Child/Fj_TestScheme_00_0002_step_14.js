const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
const parent = require("../Parent/Fj_TestScheme_00_0002-6");

export default function suite() {
  it("Fj_TestScheme_00_0002_step_14: ご提出の状況 field value should be 銀行提出済 when reuploading files considered to be defective in My Page", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "14";

    // Go to My Page APP record screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_APP();

    // Go to My Page RDC record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/required-document-detail?id=" +
        test_data.testData.rdc1_id_of_ver1
    );
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
        "-1"
    );

    await browser.refresh();
    await browser.pause(10000);

    // Upload file
    const remoteFilePath = await browser.uploadFile(
      user_info.userInformation.var_file_Path1
    );
    await $(
      ".//input[@class='slds-file-selector__input slds-assistive-text']"
    ).addValue(remoteFilePath);
    await browser.pause(5000);

    // Wait for button to be clickable
    // ★ 新環境適用' New Env Implementation
    const btn = await $("button=" + test_data.testData.completion_btn);
    await btn.waitForClickable({ timeout: 50000 });

    // Screenshot
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

    await browser.pause(5000);

    // Click 完了 button
    // ★ 新環境適用' New Env Implementation
    await btn.click();

    // To determine if the toast shows up
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
        "-3"
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
        "-4"
    );

    // Go to My Page APP record screen
    // ★ 新環境適用' New Env Implementation
    await parent.Go_to_APP();

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
