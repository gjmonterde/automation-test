const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0012-2");

export default async function suite() {
  it("Fj_TestScheme_20_0012_step_37: The 実行結果データexecution result data record that resulted in the error can be listed.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "37";

    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_As_Tantou1_User();
    }

    // Go to 実行結果データエラー一覧 reports
    await browser.url(
      user_info.userInformation.exec_result_data_error_list_url
    );
    await browser.pause(10000);

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
    await browser.pause(2000);

    // Go to Execution Result
    await parent.Go_to_ExecResult();

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
