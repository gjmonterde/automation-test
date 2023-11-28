const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0012-3");

export default async function suite() {
  it("Fj_TestScheme_20_0012_step_45: When the「既読にする」 Mark as Read button is pressed, it is updated to the read state", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "45";

    // Go to My Page Application record screen
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to MY Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Click View All Notifications
    const view_notif = await $(
      ".//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    );
    await view_notif.click();
    await browser.pause(10000);

    let isAscending = await $(".ascending");
    let isExisting = await isAscending.isExisting();
    if (isExisting == true) {
      // Click for descending order
      await $(
        "//span[@title='" + test_data.testData.mypage_notif_sort + "']"
      ).click();
      await browser.pause(10000);
    }

    // Scroll to notification record
    // Find Notification (condition) record in list
    const notif_name = await $("a=" + test_data.testData.wnt_name);
    let notif_exists = await notif_name.isExisting();
    var i = 1;
    while (
      notif_exists === false &&
      (await $("//table/tbody/tr[" + i + "]").isExisting())
    ) {
      await $("//table/tbody/tr[" + i + "]").scrollIntoView();
      i += 1;
      notif_exists = await notif_name.isExisting();
    }
    await browser.pause(10000);
    await notif_name.scrollIntoView();
    await browser.pause(10000);

    // お知らせ内容 details of the notice can be viewed on the　お知らせ詳細画面 notice detail screen.
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to WNT Record
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/fj-webnotification/" +
        test_data.testData.wnt_id
    );
    await $("span=" + test_data.testData.wnt_name).waitForExist({
      timeout: 30000,
    });

    // The state of being unread.
    // Screenshot - My Page Notification record screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0012 +
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
        test_data.testData.tab0012 +
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
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
