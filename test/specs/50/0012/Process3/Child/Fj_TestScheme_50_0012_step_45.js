const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0012-3");

export default async function suite() {
  it("Fj_TestScheme_50_0012_step_45: At My Page Home, click the link for お知らせ(融資完了) notice (Financing Complete)", async () => {
    const stepNum = "45"; // ★ 新環境適用' New Env Implementation

    // Login to My Page
    if (test_data.testData.logged_status != "mypage") {
      await parent.loginMyPage();
    }
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Click Home
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();

    // Click View All Notifications
    await browser.pause(15000);
    const view_notif = await $(
      ".//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    );
    await view_notif.scrollIntoView();
    await view_notif.click();
    await browser.pause(10000);

    let isAscending = await $(".ascending");
    let isExisting = await isAscending.isExisting();
    if (isExisting == true) {
      // Click for descending order
      await $(
        "//span[@title='" + test_data.testData.wnt_not_table + "']"
      ).click();
      await browser.pause(10000);
    }

    // Scroll to notification record
    // Find Notification (condition) record in list
    const notif_name = await $("a=" + test_data.testData.wnt1_name);
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

    // Go to notification record
    await notif_name.scrollIntoView();
    await browser.pause(10000);
    await notif_name.click();
    await browser.pause(5000);

    // The state of being unread.
    // Screenshot - My Page Notification record screen
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(10000);

    // When the 「既読にする」“Mark as Read ” button is pressed, it is updated to the read state.
    // Click Mark as Read
    await $("div=" + test_data.testData.mark_as_read_btn).click();
    await browser.pause(10000);

    // Screenshot - My Page Notification record Mark As Read Confirmation screen
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.confirm_text + "')]"
    ).click();
    await browser.pause(15000);

    // Screenshot - My Page Notification record screen marked as read
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
