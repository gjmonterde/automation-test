const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0012-1");

export default function suite() {
  it("Fj_TestScheme_63-1_0012_step_20: 実行依頼データ submission data for the record types other than those identified above has not been created", async () => {
    const stepNum = "20"; // ★ 新環境適用' New Env Implementation

    // Go to Exec List Result Records
    await parent.Open_ER_List();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
