const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0006-2");

export default function suite() {
  it("Fj_TestScheme_60_0006_step_10: The number of 'JICC' category in the 借入明細情報一覧 is the equal to the number of JICC照会明細.JICC結果(ファイルM)", async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation
    
    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);

    // ★ 新環境適用' New Env Implementation
    // Go to JIM record detail screen
    let ssno = 1;
    for (var i = 0; i < test_data.testData.jim_id_arr.length; i++) {
      // Open JIM Records
      await parent.Open_JIM(test_data.testData.jim_id_arr[i]);

      const headerBar_jim = await $(".//header[@id='oneHeader']");
      const tabheader_jim = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_jim = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1;
      // Take screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar_jim, tabheader_jim, highlights_jim],
          fullPageScrollTimeout: 3000,
        }
      );
    }

    // Go to JIB record detail screen
    for (var i = 0; i < test_data.testData.jib_id_arr.length; i++) {
      // Open JIB Records
      await parent.Open_JIM(test_data.testData.jib_id_arr[i]);

      const headerBar_jim = await $(".//header[@id='oneHeader']");
      const tabheader_jim = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_jim = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1;
      // Take screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar_jim, tabheader_jim, highlights_jim],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  });
}
