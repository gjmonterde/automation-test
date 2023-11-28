const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default function suite() {
  it("Fj_TestScheme_10_0012_step_37: The 実行結果データ execution result data record that resulted in the error can be listed", async () => {
    const stepNum = "37"; // ★ 新環境適用' New Env Implementation

    // Go to 実行結果データエラー一覧 reports
    await browser.url(
      user_info.userInformation.exec_result_data_error_list_url
    );
    await browser.pause(20000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
