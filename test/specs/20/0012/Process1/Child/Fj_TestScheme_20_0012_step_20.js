const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0012-1");

export default async function suite() {
  it("Fj_TestScheme_20_0012_step_20: The 実行依頼データ execution submission data for the record types other than those identified has not been created.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_As_Tantou1_User();
    }

    // Go to ER record
    await parent.Go_to_ExecRequest_Related();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
