const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_22: Check the application log record", async () => {
    const stepNum = "22"; // ★ 新環境適用' New Env Implementation

    // Go to Application logs
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl03 +
        test_data.testData.listview_id
    ); // ★ 新環境適用' New Env Implementation
    await browser.pause(10000);

    // Sort
    const log_col = await $(
      ".//a[contains(., '" + test_data.testData.applog_no_col + "')]"
    );
    var sort = await log_col.nextElement().getText();
    while (sort != test_data.testData.sort_app) {
      await log_col.click();
      await browser.pause(1000);
      sort = await log_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.sort_app);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
