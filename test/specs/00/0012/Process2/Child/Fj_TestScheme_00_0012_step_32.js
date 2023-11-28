const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0012-2"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0012_step_32: The execution result data record that resulted in the error can be listed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "32";

    // Login to tantou1 user
    await parent.Login_as_tantou1();

    // Go to 実行結果データエラー一覧 reports
    await browser.url(
      user_info.userInformation.exec_result_data_error_list_url
    );
    await browser.pause(20000);

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
  });
}
