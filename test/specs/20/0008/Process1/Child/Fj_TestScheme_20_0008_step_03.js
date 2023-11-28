const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0008-1");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_20_0008_step_03: 反社照会関連リスト The anti-social inquiry related list is displayed " +
      "and 反社照会 anti-social inquiry has been created",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "3";

      if (test_data.testData.logged_status != "shinsa") {
        // Login as shinsa
        await parent.Login_as_shinsa();
      }
      // Go to CNT record
      await parent.Go_to_CNT();

      // 反社照会関連リストThe anti-social inquiry related list is displayed
      // An 反社照会 anti-social inquiry has been created
      await util.Scroll_to_related_list(test_data.testData.asc_header);

      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0008 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
