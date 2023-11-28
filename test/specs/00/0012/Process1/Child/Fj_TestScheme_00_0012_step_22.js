const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_00_0012-1");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0012_step_22: The 実行依頼データ execution request data with レコードタイプ「19_カードローン実行」record type 19_Card Loan Execution and 実行金額 execution amount not BLANK was not created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

    // Direct link 実行依頼データ (Submission Data)
    await parent.Open_ER_List();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
