const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0012-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_20_0012_step_43: The 申込 application status displayed on My Page must be「完了」 Completed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "43";

    // Go to My Page Application record screen
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Click View All Applications
    await browser.pause(10000);
    await $(
      ".//a[@title='" + test_data.testData.viewall_app_link + "']/parent::*"
    ).click();
    await browser.pause(10000);

    // Search
    const search_product = await $(
      "//input[@name='" + test_data.testData.search_textbox + "']"
    );
    await search_product.scrollIntoView();
    await search_product.doubleClick();
    await browser.pause(3000);
    await search_product.setValue(test_data.testData.pro_name);
    browser.keys(["Enter"]);
    await browser.pause(3000);

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

    // Deselect the hover/selected fields
    await util.Deselect_fields(5);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Find Application record in list
    const app_name = await $("div=" + test_data.testData.app_name);
    await app_name.scrollIntoView();
    await browser.pause(10000);

    // Go to Application record page
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 30000,
    });

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
  });
}
