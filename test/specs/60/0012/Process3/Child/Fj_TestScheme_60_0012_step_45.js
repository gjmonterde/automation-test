const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0012-3");

export default async function suite() {
  it("Fj_TestScheme_60_0012_step_45: At My Page Home, click the link for お知らせ(融資完了) notice (Financing Complete)", async () => {
    const stepNum = "45"; // ★ 新環境適用' New Env Implementation

    // Go to My Page Application record screen
    await browser.url(user_info.userInformation.var_sf_mypage_loginurl);
    await browser.pause(5000);

    // Login to My Page
    await parent.Login_To_MyPage();

    // Go to notifications list - Click View All Notifications
    const view_notif = await $(
      ".//a[@aria-label='" + test_data.testData.see_wnt + "']"
    );
    await view_notif.scrollIntoView();
    await view_notif.click();
    await browser.pause(10000);

    // Sort Table
    //お知らせ番号
    const tablelabel = await $(
      ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
    );
    var tablesort = await tablelabel.nextElement().getText();
    while (tablesort != test_data.testData.sort_app) {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
      )
        .nextElement()
        .getText();
    }
    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Go to WNT record
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/fj-webnotification/" +
        test_data.testData.wnt1_id
    );
    await browser.pause(10000);

    // The state of being unread.
    // Screenshot - My Page Notification record screen
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(10000);

    // When the 「既読にする」“Mark as Read ” button is pressed, it is updated to the read state.
    // Click Mark as Read
    await $("div=" + test_data.testData.mark_read).click();
    await browser.pause(10000);

    // Screenshot - My Page Notification record Mark As Read Confirmation screen
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.mark_comp + "')]"
    ).click();
    await browser.pause(15000);

    // Screenshot - My Page Notification record screen marked as read
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
