const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-2");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_09: The number of 'KSC' category in the 借入明細情報一覧 is the equal to the number of KSC照会明細.KSC結果(取引情報)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "9";

    if (test_data.testData.logged_status != "shinsa") {
      // Login as shinsa user
      await parent.Login_as_shinsa();
    }

    var ssno = 0; // ★ 新環境適用' New Env Implementation
    // ★ 新環境適用' New Env Implementation
    for (var i = 0; i < test_data.testData.kit_id_arr.length; i++) {
      // Go to KIT record detail screen
      await parent.Open_Salesforce_KIT_Record(test_data.testData.kit_id_arr[i]); // ★ 新環境適用' New Env Implementation

      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
      // Take screenshot
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
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }

    // Go to TRR record detail page
    await parent.Open_TRR_Record();

    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights4 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    ssno = ssno + 1; // ★ 新環境適用' New Env Implementation
    // Take screenshot
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
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
