const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0012-1");

export default async function suite() {
  it("Fj_TestScheme_30_0012_step_20: the 実行依頼データsubmission data for the record types other than those identified above has not been created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }

    // ★ 新環境適用' New Env Implementation
    // Direct link 実行依頼データ (Submission Data)
    await parent.Go_to_ER_list();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
