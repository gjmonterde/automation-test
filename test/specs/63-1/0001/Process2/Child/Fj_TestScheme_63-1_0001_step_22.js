const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_22: Application logs at the time of access and completion of 口座認証 account authentication must be created", async () => {
    const stepNum = "22"; // ★ 新環境適用' New Env Implementation

    // Go to 申込ログ list view
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl04 +
        test_data.testData.listview_id
    );
    await browser.pause(5000);

    // Sort
    const log_col = await $(
      ".//a[contains(., '" + test_data.testData.app_logs_sort + "')]"
    );
    var sort = await log_col.nextElement().getText();
    while (sort != test_data.testData.sort_latest) {
      await log_col.click();
      await browser.pause(1000);
      sort = await log_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.sort_latest);

    // Deselect the hover/selected fields
    await util.Deselect_fields(7);

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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
