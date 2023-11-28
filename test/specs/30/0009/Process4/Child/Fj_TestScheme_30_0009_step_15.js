const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0009-4");

export default async function suite() {
  it("Fj_TestScheme_30_0009_step_15: お知らせ内容を The お知らせ内容 details of the notice  can be viewed on the お知らせ詳細画面 notice detail screen.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "15";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_To_MyPage();
    }

    // Go to MyPage home
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    await $(
      "//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    ).click();
    await browser.pause(10000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
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

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );

    // Check for unread status
    await $(
      "//div[@title='" + test_data.testData.mark_as_read_btn + "']"
    ).click();
    await browser.pause(5000);

    // Take Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3"
    );

    await $(
      "//button[contains(.,'" + test_data.testData.completion_btn + "')]"
    ).click();
    await browser.pause(10000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
