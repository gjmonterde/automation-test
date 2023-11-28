const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0005-2");

export default function suite() {
  it("Fj_TestScheme_60_0005_step_08: KSC結果(CIC), KSC結果(JICC), KSC結果(取引情報), KSC結果(本人申告) records should be created in relevant list", async () => {
    const stepNum = "8"; // ★ 新環境適用' New Env Implementation

    // Get KSC照会明細 (KID) records
    await parent.KID_New_Record();

    // Login as Tantou1
    await parent.Login_as_Tantou1();

    // Go to KID record detail
    await parent.Open_Salesforce_KID_Record();

    const headerBar_kid = await $(".//header[@id='oneHeader']");
    const tabheader_kid = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_kid = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
