const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0009-4");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0009_step_15: Click the link for お知らせ(審査結果(応諾)) notification", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "15";

    // Login to MyPage
    await parent.Go_to_MyPage();

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );

    // Login button click
    await util.Login_to_MyPage(
      test_data.testData.mypage_url,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );

    // Click View All notification link
    await $(
      "//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    ).click();
    await browser.pause(3000);

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

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3"
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
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-4"
    );

    // Check for unread status
    await $(
      "//div[@title='" + test_data.testData.mark_as_read_btn + "']"
    ).click();
    await browser.pause(5000);

    // Take Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-5"
    );

    await $(
      "//button[contains(.,'" + test_data.testData.completion_btn + "')]"
    ).click();
    await browser.pause(10000);

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-6"
    );
  });
}
