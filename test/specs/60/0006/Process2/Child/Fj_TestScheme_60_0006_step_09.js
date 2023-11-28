const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0006-2");

export default function suite() {
  it("Fj_TestScheme_60_0006_step_09: The number of 'KSC' category in the 借入明細情報一覧 is the equal to the number of KSC照会明細.KSC結果(取引情報)", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Go to KIT record detail screen
    let ssno = 0;
    for (var i = 0; i < test_data.testData.kit_id_arr.length; i++) {
      // Open KIT Records
      await parent.Open_KIT(test_data.testData.kit_id_arr[i]);

      const headerBar_kit = await $(".//header[@id='oneHeader']");
      const tabheader_kit = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_kit = await $(
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
          hideAfterFirstScroll: [headerBar_kit, tabheader_kit, highlights_kit],
          fullPageScrollTimeout: 3000,
        }
      );
    }

    // Go to TRR record detail page
    await parent.Open_Salesforce_TRR_Record();

    const headerBar4 = await $(".//header[@id='oneHeader']");
    const tabheader4 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights4 = await $(
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
        hideAfterFirstScroll: [headerBar4, tabheader4, highlights4],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
