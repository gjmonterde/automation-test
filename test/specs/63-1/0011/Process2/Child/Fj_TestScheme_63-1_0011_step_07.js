const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0011_step_07: The お申込み application status displayed on My Page must be「ご融資条件ご確定」", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Go to APP list view
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(10000);
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(5000);

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

    await $("a=" + test_data.testData.app_name).$(function () {
      this.scrollIntoView();
    });

    // Deselect the hover/selected fields
    await util.Deselect_fields(5);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);
  });
}
