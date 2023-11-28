const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0006-2");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0006_step_08: In the table at the top of the 借入明細情報一覧 List of loan detail information , " +
      "there must be the same number of lines for the 「自行」own bank category as the 申込チェック③.貸出共通明細 application " +
      "check (3).loan common detail",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "8";

      // Go to TRR record
      await parent.Go_To_TRR();

      // Screenshot
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        }
      );

      // Go to LCD related list
      await parent.Go_to_LCD_Rel(); // ★ 新環境適用' New Env Implementation

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0006 +
          "_" +
          stepNum +
          "-2"
      );
    }
  );
}
