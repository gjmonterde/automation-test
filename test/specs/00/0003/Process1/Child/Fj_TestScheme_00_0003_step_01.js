const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0003_step_01: The application status is Under Review", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "1";

    // Go to APP list view
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(3000);

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
    const col_sort_app = await $(
      ".//a[contains(., '" + test_data.testData.mypage_app_status_sort + "')]"
    );
    var sort = await col_sort_app.nextElement().getText();
    while (sort != test_data.testData.app_asc) {
      await col_sort_app.click();
      await browser.pause(1000);
      sort = await col_sort_app.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.app_asc);
    await browser.pause(3000);

    await $("a=" + test_data.testData.app_name).scrollIntoView();

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(5);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Go to My Page APP record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
