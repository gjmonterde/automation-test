const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0001-3");

export default function suite() {
  it("Fj_TestScheme_60_0001_step_42:「お知らせ内容」The details of the notice can be viewed on the notice detail screen", async () => {
    const stepNum = "42"; // ★ 新環境適用' New Env Implementation

    // Login to MyPage
    await parent.Go_to_MyPage();

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
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // When the 「既読にする」“Mark as Read ” button is pressed, it is updated to the read state.
    // Click Mark as Read
    await $("div=" + test_data.testData.mark_read + "").click();
    await browser.pause(10000);

    // Screenshot - My Page Notification record Mark As Read Confirmation screen
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.mark_comp + "')]"
    ).click();
    await browser.pause(5000);

    // Screenshot - My Page Notification record screen marked as read
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
