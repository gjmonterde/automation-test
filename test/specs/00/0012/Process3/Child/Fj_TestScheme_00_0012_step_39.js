const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0012-3");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0012_step_39: The 申込 application status displayed on My Page is「完了」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "39";

    // Login to My Page
    await parent.Login_MyPage();

    // Go to home page
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);

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
    while (sort_text != test_data.testData.app_asc) {
      await appname_col.click();
      await browser.pause(3000);
      sort_text = await appname_col.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.app_asc);

    const appname_col2 = await $(
      ".//a[contains(., '" + test_data.testData.mypage_app_status_sort + "')]"
    );
    var sort_text = await appname_col2.nextElement().getText();
    while (sort_text != test_data.testData.app_asc) {
      await appname_col2.click();
      await browser.pause(3000);
      sort_text = await appname_col2.nextElement().getText();
    }
    await expect(sort_text).toBe(test_data.testData.app_asc);

    // Deselect the hover/selected fields
    await util.Deselect_fields(5); // ★ 新環境適用' New Env Implementation

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Go to My Page APP record screen
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
