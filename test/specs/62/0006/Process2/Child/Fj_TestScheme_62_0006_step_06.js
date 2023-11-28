const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0006-2");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0006_step_06: There must be one row in the 「今回」 " +
      "Current category in the table at the top of 借入明細情報一覧詳細画面　Loan details Information List",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "6";

      // Go to TRR record detail screen
      await parent.Go_to_TRR();

      // Screenshot
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
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