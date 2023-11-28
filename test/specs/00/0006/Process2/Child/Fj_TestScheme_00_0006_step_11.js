const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-2");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_11: The number of 'JICC' category in the 借入明細情報一覧 is the equal to the number of JICC照会明細.JICC結果(ファイルM)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "11";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa user
      await parent.Login_as_shinsa();
    }

    // Go to TRR record detail screen
    await parent.Open_TRR_Record();

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
        test_data.testData.spec00 +
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

    var ssno = 0; // ★ 新環境適用' New Env Implementation
    // ★ 新環境適用' New Env Implementation
    for (var i = 0; i < test_data.testData.jim_id_arr.length; i++) {
      // Go to JIM record detail screen
      await parent.Open_Salesforce_JIM_Record(test_data.testData.jim_id_arr[i]); // ★ 新環境適用' New Env Implementation

      const headerBar_jim = await $(".//header[@id='oneHeader']");
      const tabheader_jim = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_jim = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Take screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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
      await browser.pause(2000);
    }

    // ★ 新環境適用' New Env Implementation
    for (var i = 0; i < test_data.testData.jib_id_arr.length; i++) {
      // Go to JIB record detail screen
      await parent.Open_Salesforce_JIB_Record(test_data.testData.jib_id_arr[i]); // ★ 新環境適用' New Env Implementation

      const headerBar_jib = await $(".//header[@id='oneHeader']");
      const tabheader_jib = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_jib = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Take screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-" +
          ssno,
        {
          hideAfterFirstScroll: [headerBar_jib, tabheader_jib, highlights_jib],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
