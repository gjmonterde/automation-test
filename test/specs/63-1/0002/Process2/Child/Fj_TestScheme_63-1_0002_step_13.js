const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0002_step_13: 徴求書類 Requested document status is「銀行提出済」", async () => {
    const stepNum = "13"; // ★ 新環境適用' New Env Implementation

    // Go to RDC record in VER1
    await util.Open_SF_Record_URL(
      1,
      user_info.object.rdc_obj,
      test_data.testData.rdc1_id_of_ver1
    );

    // Upload file
    const remoteFilePath = await browser.uploadFile(
      user_info.userInformation.var_file_Path1
    );
    await $(
      ".//input[@class='slds-file-selector__input slds-assistive-text']"
    ).addValue(remoteFilePath);
    await browser.pause(5000);

    // To determine if the upload has green check
    await util.Upload_image_green_check();

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Wait for button to be clickable
    const btn = await $("button=" + test_data.testData.mark_comp);
    await btn.waitForClickable({ timeout: 50000 });
    await btn.click();
    await browser.pause(1000);

    // To determine if the toast shows up
    await util.Toast_Message();

    // Screenshot - with toast message
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
    await browser.refresh();
    await browser.pause(10000);

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot - updated page without toast message
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-3",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
    await browser.pause(2000);
  });
}
