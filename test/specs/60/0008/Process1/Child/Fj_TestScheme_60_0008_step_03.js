const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0008-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_60_0008_step_03: 反社照会関連リスト The anti-social inquiry related list is displayed " +
      "and 反社照会 anti-social inquiry has been created",
    async () => {
      const stepNum = "3"; // ★ 新環境適用' New Env Implementation

      // Go to CNT record
      await parent.Open_Salesforce_CNT_Record();

      // 反社照会関連リストThe anti-social inquiry related list is displayed
      // An 反社照会 anti-social inquiry has been created
      await util.Scroll_to_related_list(test_data.testData.asc_scroll);

      // Take screenshot of ASC record detail page
      const highlights1 = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar1 = await $(".//header[@id='oneHeader']");
      const tabheader1 = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      // Take Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec60 +
          "_" +
          test_data.testData.tab0008 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [highlights1, headerBar1, tabheader1],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  );
}
