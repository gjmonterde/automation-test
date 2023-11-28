const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0003-3");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0003_step_09: In the 一致チェック結果一覧list of matching check results, " +
      "the same person candidate matching the カナkana and 生年月日date of birth of the 取引先business " +
      "partner is displayed",
    async () => {
      const stepNum = "9"; // ★ 新環境適用' New Env Implementation

      if (test_data.testData.logged_status != "uic") {
        await parent.Login_as_tantou();
      }
      // Go to DDP Record
      await parent.Open_SF_DDP_Record();

      // Screenshot - DDP record
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-2",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );

      // Get CDD record
      await parent.Get_CDD();

      // Go to CDD Record
      await parent.Open_SF_CDD_Record();

      // Screenshot - CDD record
      const highlights2 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar2 = await $(".//header[@id='oneHeader']");
      const tabheader2 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0003 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        }
      );
    }
  );
}
