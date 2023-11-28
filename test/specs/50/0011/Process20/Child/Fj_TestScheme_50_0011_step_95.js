const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");

export default function suite() {
  it("Fj_TestScheme_50_0011_step_95: At My Page Home, click the  link notification link お知らせ(契約同意承認待ち)(waiting for agreement approval)", async () => {
    const stepNum = "95"; // ★ 新環境適用' New Env Implementation

    // Click View All Notifications
    await $(
      ".//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    ).click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $("span=" + test_data.testData.wnt_not_table);
    var tablesort = await $(
      ".//a[contains(., '" + test_data.testData.wnt_not_table + "')]"
    )
      .nextElement()
      .getText();
    while (tablesort != test_data.testData.sort_app) {
      await tablelabel.click();
      await browser.pause(5000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.wnt_not_table + "')]"
      )
        .nextElement()
        .getText();
    }
    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Scroll to notification record
    // Find Notification (waiting for agreement approval) record in list
    const notif_name = await $("a=" + test_data.testData.wnt1_name);

    // お知らせ内容 details of the notice can be viewed on the お知らせ詳細画面 notice detail screen.
    await notif_name.scrollIntoView({ block: "center" });
    await browser.pause(10000);

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
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // When the 「既読にする」“Mark as Read ” button is pressed, it is updated to the read state.
    // Click Mark as Read
    await $("div=" + test_data.testData.mark_as_read_btn).click();
    await browser.pause(5000);

    // Screenshot - My Page Notification record Mark As Read Confirmation screen
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.confirm_text + "')]"
    ).click();
    await browser.pause(10000);

    // Screenshot - My Page Notification record screen marked as read
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
