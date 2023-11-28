const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0010-7");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0010_step_14: The 徴求書類 request document status will be「銀行提出済」", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Go to RDC2 Record
    await parent.Open_RDC2_Record();

    // Upload file
    const remoteFilePath = await browser.uploadFile(
      user_info.userInformation.var_file_Path2
    );
    await $(
      ".//input[@class='slds-file-selector__input slds-assistive-text']"
    ).addValue(remoteFilePath);
    await browser.pause(5000);

    // To determine if the upload has green check
    await util.Upload_image_green_check();

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Wait for button to be clickable
    const btn = await $(
      ".//button[@class='slds-button slds-button--neutral ok desktop uiButton--default uiButton--brand uiButton']" // ★クラスにdesktop追加
    );
    await btn.waitForClickable({ timeout: 50000 });

    // Click button
    await btn.click();

    // Refresh the page
    await browser.pause(5000);
    await browser.refresh();
    await browser.pause(10000);

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
      }
    );
    await browser.pause(2000);
  });
}
