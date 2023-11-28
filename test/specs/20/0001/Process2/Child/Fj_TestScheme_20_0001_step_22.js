const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");

export default async function suite() {
  it("Fj_TestScheme_20_0001_step_22: 申込ログ  application log at the time of access and completion of the application form is created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

    // Go to Application logs
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl02 +
        test_data.testData.listview_id
    );
    await browser.pause(10000);

    // Sort
    var log_col = await $(
      ".//a[contains(., '" + test_data.testData.applog_sort_col + "')]"
    );
    var sort = await log_col.nextElement().getText();
    while (sort != test_data.testData.sort_app) {
      await log_col.click();
      await browser.pause(1000);
      sort = await log_col.nextElement().getText();
    }

    await expect(sort).toBe(test_data.testData.sort_app);

    // Application logs screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader],
      }
    );
  });
}
