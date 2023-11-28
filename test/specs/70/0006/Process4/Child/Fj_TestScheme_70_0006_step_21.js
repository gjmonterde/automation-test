const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_70_0006-4");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0006_step_21: In the 申告 Notice, 当行 our bank, JICC, KSC, and " +
      "追加 Additional sections of the 借入明細情報一覧 List of loan detail information , " +
      "the results of aggregate the rows for which the check box is selected are displayed",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "21";

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
    }
  );
}
