const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
import { loginMyPage } from "../Parent/Fj_TestScheme_30_0012-3";

export default async function suite() {
  it("Fj_TestScheme_30_0012_step_43: The 申込 application status displayed on My Page is「完了」Completed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "43";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to My Page
      loginMyPage();
    }

    // Go to Home
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Click View All Applications
    await browser.pause(15000);
    await $(
      ".//a[@title='" + test_data.testData.see_app + "']/parent::*"
    ).click();
    await browser.pause(5000);

    // Sort Applications List
    const appname_col = await $(
      ".//a[contains(., '" + test_data.testData.mypage_app_sort + "')]"
    );
    var sort_text = await appname_col.nextElement().getText();
    while (sort_text != test_data.testData.sort_app) {
      await appname_col.click();
      await browser.pause(3000);
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
    await browser.pause(15000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
