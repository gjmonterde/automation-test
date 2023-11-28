const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_40_0006_step_12: In the合計 Total Sections of the 借入明細情報一覧 Loan details " +
      "Information list , each section's aggregate values for 今回 current, 申告 Notice, 当行 our bank, " +
      "JICC, KSC, and 追加 Additional are displayed. 借入総額_合計＝Total for each section",
    async () => {
      const stepNum = "12"; // ★ 新環境適用' New Env Implementation

      // Go to TRR Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.trr_obj,
        test_data.testData.trr_id
      );

      // Screenshot
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
    }
  );
}
