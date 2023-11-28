const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0001-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0001_step_39: You must be able to log in with the email address and password entered on the application form", async () => {
    const stepNum = "39"; // ★ 新環境適用' New Env Implementation

    // Go to MyPage login screen and fill out username and password
    await util.Go_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );

    // Screenshot - My Page Login Screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Login to MyPage
    await parent.Go_to_MyPage();

    await browser.pause(10000);

    // Screenshot - My Page Home page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Go to notifications list
    // Click View All Notifications
    const view_notif = await $(
      ".//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    );
    await view_notif.scrollIntoView();
    await view_notif.click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $(
      ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
    );
    var tablesort = await tablelabel.nextElement().getText();
    while (tablesort != "" + test_data.testData.sort_app + "") {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
      )
        .nextElement()
        .getText();
    }
    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Screenshot - Notifications list
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Go to My Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Click View Applications
    const view_app = await $(
      ".//a[@title='" + test_data.testData.see_app + "']/parent::*"
    );
    await view_app.scrollIntoView();
    await view_app.click();
    await browser.pause(10000);

    // Screenshot - Applications list
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot - Application record
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
