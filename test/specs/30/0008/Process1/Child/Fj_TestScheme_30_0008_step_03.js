const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0008-1");

export default function suite() {
  it(
    "Fj_TestScheme_30_0008_step_03: 反社照会関連リスト The anti-social inquiry related list is displayed " +
      "and 反社照会 anti-social inquiry has been created",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "3";

      // ★ 新環境適用' New Env Implementation
      // Go to CNT record
      await parent.Go_to_CNT();

      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );

      // Take screenshot
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0008 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 3000,
        }
      );
    }
  );
}
