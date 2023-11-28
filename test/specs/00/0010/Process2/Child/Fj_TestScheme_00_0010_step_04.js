const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0010-2"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_04: The 徴求書類 requested document will be「銀行提出済」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "4";

    // Go to My Page APP record screen
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Screenshot
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

    let ssno = 1;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to My Page RDC record screen
      await parent.Go_to_RDC(test_data.testData.rdc_id_arr[i]); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
      await browser.pause(5000);

      // Upload file
      const remoteFilePath = await browser.uploadFile(
        user_info.userInformation.var_file_Path1
      );
      await $(
        ".//input[@class='slds-file-selector__input slds-assistive-text']"
      ).addValue(remoteFilePath);

      // To determine if the upload has green check
      await util.Upload_image_green_check(); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
      await browser.pause(5000);

      // Click 完了 button
      await $("button=" + test_data.testData.completion_btn).click(); // ★ 新環境適用' New Env Implementation

      // To determine if the toast shows up
      await util.Toast_Message(); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
      await browser.pause(3000);

      // Refresh the page
      await browser.refresh();
      await browser.pause(10000);

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Go to My Page APP record screen
      await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );
      await browser.pause(2000);
    }
  });
}
