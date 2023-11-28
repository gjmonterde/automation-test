const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0010-3");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0010_step_05: 徴求書類ステータス Requisition document status is 「銀行提出済」 Bank Submitted.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    let ssno = 0;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC(1) record detail screen
      await parent.Open_RDC_Record(test_data.testData.rdc_id_arr[i]); // ★ 新環境適用' New Env Implementation

      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      ); // ★ 新環境適用' New Env Implementation
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      ); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Take screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
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
      await $(
        ".//button[@class='slds-button slds-button--neutral ok uiButton--default uiButton--brand uiButton']"
      ).click();

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

      // ★ 新環境適用' New Env Implementation
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

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
          ssno,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );
    }
  });
}
