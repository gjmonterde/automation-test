const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_37: Able to log in with the email address and password entered on the application form", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "37";

    var uname, pword;
    if (test_data.testData.user_status == 0) {
      // if existing user
      uname = user_info.userInformation.var_sf_comminuty_loginuser;
      pword = user_info.userInformation.var_sf_comminuty_loginpwd;
    } else if (test_data.testData.user_status == 1) {
      // if new user
      uname = user_info.userInformation.var_sf_comminuty_loginuser2;
      pword = user_info.userInformation.var_sf_comminuty_loginpwd2;
    }
    // Login to My Page
    // ★ 新環境適用' New Env Implementation
    await util.Go_to_MyPage(test_data.testData.mypage_url, uname, pword, 1);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Click login
    // ★ 新環境適用' New Env Implementation
    await util.Login_to_MyPage(test_data.testData.mypage_url, uname, pword);

    // Go to MyPage list view
    const home_listview = await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    );
    await home_listview.click();
    await browser.pause(3000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);

    // Go to WNT list view
    await $("//a[@aria-label='" + test_data.testData.see_wnt + "']").click();
    await browser.pause(3000);

    // Sort WNT
    const col_sort = await $(
      ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
    );
    var sort = await col_sort.nextElement().getText();
    while (sort != test_data.testData.app_desc) {
      await col_sort.click();
      await browser.pause(1000);
      sort = await col_sort.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.app_desc);
    await browser.pause(3000);

    // Deselect the hover/selected fields
    // ★ 新環境適用' New Env Implementation
    await util.Deselect_fields(7);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);

    // Go to home list view
    await home_listview.click();

    // Go to APP list view
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(5000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
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
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(2000);
  });
}
