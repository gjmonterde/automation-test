const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_44: ・The 申込みステータス application status of My Page is 「キャンセル」'Cancel'.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "44";

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
