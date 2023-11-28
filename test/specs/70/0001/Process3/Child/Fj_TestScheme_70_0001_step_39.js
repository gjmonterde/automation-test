const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-3");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_39: You must be able to log in with the email address and password entered on the application form", async () => {
    const stepNum = "39"; // ★ 新環境適用' New Env Implementation

    // Enter community credentials
    await parent.Enter_credentials();

    // Screenshot - MyPage Login
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Login to MyPage
    await parent.Login_To_MyPage();

    const home = user_info.userInformation.var_sf_siteurl + "/s/";
    if ((await browser.getUrl()) != home) {
      // Go to Home Page
      await browser.url(home);
      await browser.pause(10000);
    }

    // Screenshot - MyPage Home
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Click View All Notifications
    await $(
      ".//a[@aria-label='" + test_data.testData.mypage_viewall_notif_link + "']"
    ).click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $("span=" + test_data.testData.notif_sort);
    var tablesort = await $(
      ".//a[contains(., '" + test_data.testData.notif_sort + "')]"
    )
      .nextElement()
      .getText();
    while (tablesort != test_data.testData.sort_app) {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.notif_sort + "')]"
      )
        .nextElement()
        .getText();
    }

    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Screenshot - MyPage WNT list
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Go to Home Page
    await browser.url(home);
    await browser.pause(10000);

    // Click View All Apps
    await $(
      ".//a[@title='" + test_data.testData.see_app + "']/parent::*"
    ).click();
    await browser.pause(10000);

    // Screenshot - MyPage APP
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
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
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 50000,
    });

    // Screenshot - MyPage APP record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
