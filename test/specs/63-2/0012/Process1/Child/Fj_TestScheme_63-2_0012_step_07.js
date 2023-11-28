const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0012-1");

export default async function suite() {
  it("Fj_TestScheme_63-2_0012_step_07: One 実行依頼データ execution submission data item of record type「4_顧客属性データ設定変更」", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Go to ER record list
    await parent.Open_Record_URL(
      2,
      user_info.object.app_obj,
      test_data.testData.app_id,
      user_info.object.app_execrequest_rel
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Go to ER record
    await parent.Open_Record_URL(
      1,
      user_info.object.execrequest_obj,
      test_data.testData.er4_id
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
