const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0009-4");

export default async function suite() {
  it("Fj_TestScheme_60_0009_step_15: お知らせ内容を The お知らせ内容 details of the notice  can be viewed on the お知らせ詳細画面 notice detail screen.", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_To_MyPage();
    }

    await $(
      "//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    ).click();
    await browser.pause(5000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    await $(`//a[@title='${test_data.testData.wnt_name}']`).click();
    await browser.pause(10000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(10000);

    // Check for unread status
    await $("//div[@title='" + test_data.testData.mark_read + "']").click();
    await browser.pause(10000);

    // Take Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    await $(
      "//button[contains(.,'" + test_data.testData.mark_comp + "')]"
    ).click();
    await browser.pause(20000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(3000);
  });
}
