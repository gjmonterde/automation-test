const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_40_0001_step_36: The 銀行口座 bank account to which the account has been verified " +
      "has been copied and registered in 返済用銀行口座 bank account for repayment of the application for the セット商品 set item",
    async () => {
      const stepNum = "36"; // ★ 新環境適用' New Env Implementation

      // Go to BA Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.ba_obj,
        test_data.testData.ba_id2
      );

      // Screenshot - BA record
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
          test_data.testData.tab0001 +
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
