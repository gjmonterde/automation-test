const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0006-2");

export default function suite() {
  it("Fj_TestScheme_30_0006_step_10: The number of 'JICC' category in the 借入明細情報一覧 is the equal to the number of JICC照会明細.JICC結果(ファイルM)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "10";

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
        test_data.testData.spec30 +
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
  });
}