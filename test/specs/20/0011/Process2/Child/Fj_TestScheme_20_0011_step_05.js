const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-2");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_05: At My Page Home, click the link for お知らせ(条件確認) notification (condition check)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to MY Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Click View All Notifications
    await $(
      ".//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    ).click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $("span=" + test_data.testData.mypage_notif_sort);
    var tablesort = await $(
      ".//a[contains(., '" + test_data.testData.mypage_notif_sort + "')]"
    )
      .nextElement()
      .getText();
    while (tablesort != test_data.testData.sort_app) {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.mypage_notif_sort + "')]"
      )
        .nextElement()
        .getText();
    }
    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Scroll to notification record
    // Find Notification (condition) record in list
    const notif_name = await $("a=" + test_data.testData.wnt_name);
    await notif_name.scrollIntoView({ block: "center" });

    // お知らせ内容 details of the notice can be viewed on the お知らせ詳細画面 notice detail screen.
    // Screenshot - My Page お知らせ screen (record) - 05
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to WNT record
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/fj-webnotification/" +
        test_data.testData.wnt_id
    );
    await browser.pause(10000);

    // The state of being unread.
    // Screenshot - My Page Notification record screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // When the 「既読にする」“Mark as Read ” button is pressed, it is updated to the read state.
    // Click Mark as Read
    await $("div=" + test_data.testData.mark_as_read_btn).click();
    await browser.pause(5000);
    const btn = await $(
      ".//button[contains(text(), '" + test_data.testData.completion_btn + "')]"
    );
    await btn.waitForClickable({ timeout: 50000 });

    // Screenshot - My Page Notification record Mark As Read Confirmation screen
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // Click Confirm button
    await btn.click();
    await browser.pause(10000);

    // Screenshot - My Page Notification record screen marked as read
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
