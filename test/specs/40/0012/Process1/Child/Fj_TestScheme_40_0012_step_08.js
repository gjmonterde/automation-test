const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_40_0012_step_08: One 実行依頼データ submission data item of record type「6_証書貸付_返済条件登録」" +
      '"6 _ Loan _ Repayment condition registration" has been created',
    async () => {
      const stepNum = "8"; // ★ 新環境適用' New Env Implementation

      // Go to Exec Request Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.execrequest_obj,
        test_data.testData.er_6_id
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
          test_data.testData.tab0012 +
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
