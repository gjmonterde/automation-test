const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0005-2");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0005_step_06: KSC結果(CIC)」KSC Result (CIC), 「KSC結果(JICC)」 KSC Result (JICC), 「KSC結果(取引情報)」KSC " +
      "Result (transaction information) and 「KSC結果(本人申告)」KSC Result (self-reported) records should be created in the " +
      "関連リスト relevant list",
    async () => {
      const stepNum = "6"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "uic") {
        // login as tantou
        await parent.Login_as_tantou();
      }

      // Get KSC照会明細 (KID) records
      await parent.KID_New_Record();

      // Go to SEC record detail
      await parent.Open_SEC();

      // Go to KID record detail
      await parent.Open_Salesforce_KID_Record();

      const headerBar_kid = await $(".//header[@id='oneHeader']");
      const tabheader_kid = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_kid = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0005 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar_kid, tabheader_kid, highlights_kid],
          fullPageScrollTimeout: 1000,
        }
      );
    }
  );
}
