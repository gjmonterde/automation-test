const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0012-3");

export default async function suite() {
  it("Fj_TestScheme_50_0012_step_43: The 申込 application status displayed on My Page must be「完了」 Completed", async () => {
    const stepNum = "43"; // ★ 新環境適用' New Env Implementation

    // Login to My Page
    if (test_data.testData.logged_status != "mypage") {
      await parent.loginMyPage();
    }

    // Click View All Applications
    await browser.pause(15000);
    await $(
      ".//a[@title='" + test_data.testData.see_app + "']/parent::*"
    ).click();
    await browser.pause(10000);

    // Sort Applications List
    const appname_col = await $(
      ".//a[contains(., '" + test_data.testData.app_num + "')]"
    );
    var sort_text = await appname_col.nextElement().getText();
    while (sort_text != test_data.testData.sort_app) {
      await appname_col.click();
      await browser.pause(5000);
      sort_text = await appname_col.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.sort_app);
    await browser.pause(10000);

    await $("a=" + test_data.testData.app_name).scrollIntoView();
    await browser.pause(10000);

    // Find Application record in list
    const app_name = await $("div=" + test_data.testData.app_name);
    await app_name.scrollIntoView();
    await browser.pause(5000);

    // Go to Application record page
    await app_name.click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
