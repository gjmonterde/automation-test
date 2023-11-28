const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_20: Application logs at the time of access and completion of 口座認証 account authentication must be created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

    // Go to 申込ログ list view
    // ★ 新環境適用' New Env Implementation
    await browser.url(
      user_info.userInformation.var_sf_sfurl +
        test_data.testData.httpurl04 +
        test_data.testData.listview1_id
    );
    await browser.pause(5000);

    // Sort
    const log_col = await $(
      ".//a[contains(., '" + test_data.testData.applog_no_col + "')]"
    );
    var sort = await log_col.nextElement().getText();
    while (sort != test_data.testData.app_desc) {
      await log_col.click();
      await browser.pause(1000);
      sort = await log_col.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.app_desc);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(7);

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
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
