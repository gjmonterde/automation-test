const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");

export default function suite() {
  it("Fj_TestScheme_20_0010_step_26: ご提出 button will be disabled", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "26";

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
