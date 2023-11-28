const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default async function suite() {
  it("Fj_TestScheme_10_0011_step_95: お知らせ内容 details of the notice can be viewed on the お知らせ詳細画面 notice detail screen", async () => {
    const stepNum = "95"; // ★ 新環境適用' New Env Implementation

    // Go to WNT record
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/fj-webnotification/" +
        test_data.testData.wnt1_id
    );
    await browser.pause(8000);

    // The state of being unread.
    // Screenshot - My Page Notification record screen
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // When the 「既読にする」“Mark as Read ” button is pressed, it is updated to the read state.
    // Click Mark as Read
    await $("//div[@title='" + test_data.testData.mark_read + "']").click();
    await browser.pause(10000);

    // Screenshot - My Page Notification record Mark As Read Confirmation screen
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(3000);

    // Click Confirm button
    await $(
      "//button[contains(.,'" + test_data.testData.mark_comp + "')]"
    ).click();
    await browser.pause(10000);

    // Screenshot - My Page Notification record screen marked as read
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
