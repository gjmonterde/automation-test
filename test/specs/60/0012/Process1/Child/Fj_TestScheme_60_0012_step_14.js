const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0012-1");

export default async function suite() {
  it("Fj_TestScheme_60_0012_step_14: One 実行依頼データsubmission data item with the record type「19_カードローン実行」'19 _ Card Loan Execution' has been created.", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Direct link 実行依頼データ (Submission Data)
    await parent.Open_EXEC_App_Related_Record();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
