const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-2");

export default function suite() {
  it(
    "Fj_TestScheme_00_0006_step_13: Check list of loan detail aggregate values for 今回 current, 申告 Notice," +
      "当行 our bank, JICC, KSC, and 追加 are displayed",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "13";

      if (test_data.testData.logged_status != "shinsa") {
        // Login as shinsa user
        await parent.Login_as_shinsa();
      }

      // Open TRR record
      await parent.Open_TRR_Record();

      // Screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec00 +
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
      await browser.pause(2000);
    }
  );
}
