const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_70_0010-3"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_70_0010_step_05: 徴求書類 required document  is 「銀行提出済」Bank Submitted", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Loop through RDC records
    let ssno = 0;
    for (var i = 0; i < test_data.testData.rdc_id_arr.length; i++) {
      // Go to RDC page
      await parent.Go_To_RDC(test_data.testData.rdc_id_arr[i]); // ★ 新環境適用' New Env Implementation

      ssno = ssno + 1;
      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
          fullPageScrollTimeout: 3000,
        }
      );

      // Upload different files - Determine file to upload
      let r = (i + 1) % 2;
      let fileno = 0;
      if (r == 0) {
        // if even
        fileno = 1;
      } else {
        // if odd
        fileno = 2;
      }

      // Upload image
      const remoteFilePath = await browser.uploadFile(
        eval("user_info.userInformation.var_file_Path" + fileno)
      );
      await $(
        ".//input[@class='slds-file-selector__input slds-assistive-text']"
      ).addValue(remoteFilePath);
      await browser.pause(10000);

      // Wait for button to be clickable
      const btn = await $("button=" + test_data.testData.completion_btn);
      await btn.waitForClickable({ timeout: 50000 });

      ssno = ssno + 1;
      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Click button
      await btn.click();

      // Toast message screenshot
      // ★ 新環境適用' New Env Implementation
      await util.Toast_Message();
      await browser.pause(1000);
      ssno = ssno + 1;
      // ★ 新環境適用' New Env Implementation
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno
      );

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      ssno = ssno + 1;
      // Screenshot
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0010 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  });
}
