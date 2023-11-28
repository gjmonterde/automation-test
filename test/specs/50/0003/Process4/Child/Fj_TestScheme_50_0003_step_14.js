const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0003-4");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0003_step_14: The 一致チェック結果一覧 Match Check Result List component is not displayed・同一人照会 Same person inquiry status is 「自動OK」Auto OK", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Login to org as tantou1
    await parent.Login_as_Tantou1();

    // Go to 2nd DDP related record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ddp_obj,
      test_data.testData.ddp_id2
    );

    // Screenshot DDP
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
