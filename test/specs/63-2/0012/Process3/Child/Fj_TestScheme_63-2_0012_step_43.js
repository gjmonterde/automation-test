const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0012-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0012_step_43: The 申込 application status displayed on My Page must be「完了」", async () => {
    const stepNum = "43"; // ★ 新環境適用' New Env Implementation

    // Login to My Page
    await parent.Login_MyPage();

    // Go to home page
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(10000);

    // Go to APP list view
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
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

    // Sort APP
    const appname_col = await $(
      ".//a[contains(., '" + test_data.testData.mypage_amount_sort + "')]"
    );
    var sort_text = await appname_col.nextElement().getText();
    while (sort_text != test_data.testData.sort_app_asc) {
      await appname_col.click();
      await browser.pause(3000);
      sort_text = await appname_col.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.sort_app_asc);

    const appname_col2 = await $(
      ".//a[contains(., '" + test_data.testData.mypage_app_status_sort + "')]"
    );
    var sort_text = await appname_col2.nextElement().getText();
    while (sort_text != test_data.testData.sort_app_asc) {
      await appname_col2.click();
      await browser.pause(3000);
      sort_text = await appname_col2.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.sort_app_asc);

    // Deselect the hover/selected fields
    await util.Deselect_fields(5);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
  });
}
