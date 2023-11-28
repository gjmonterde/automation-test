const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_10_0008_step_03: 反社照会 anti-social inquiry related list is displayed " +
      "and anti-social inquiry has been created",
    async () => {
      const stepNum = "3"; // ★ 新環境適用' New Env Implementation

      // Go to CNT record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.cnt_obj,
        test_data.testData.cnt_id
      );

      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );

      // 反社照会関連リストThe anti-social inquiry related list is displayed
      // An 反社照会 anti-social inquiry has been created
      // Take screenshot
      await util.Scroll_to_related_list(test_data.testData.cnt_scroll);

      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec10 +
          "_" +
          test_data.testData.tab0008 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
      await browser.pause(2000);
    }
  );
}
