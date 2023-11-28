const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0009-4");

export default async function suite() {
  it("Fj_TestScheme_70_0009_step_15: When the 「既読にする」“Mark as Read ” button is pressed, it is updated to the read state", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "15";

    // Login to MyPage
    await parent.Login_to_MyPage();

    const home = user_info.userInformation.var_sf_siteurl + "/s/";
    if ((await browser.getUrl()) != home) {
      // Go to Home Page
      await browser.url(home);
      await browser.pause(10000);
    }

    // Click View All Notifications
    await $(
      ".//a[@aria-label='" + test_data.testData.mypage_viewall_notif_link + "']"
    ).click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $("span=" + test_data.testData.notif_sort);
    var tablesort = await $(
      ".//a[contains(., '" + test_data.testData.notif_sort + "')]"
    )
      .nextElement()
      .getText();
    while (tablesort != test_data.testData.sort_app) {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.notif_sort + "')]"
      )
        .nextElement()
        .getText();
    }

    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );

    // Go to WNT Record
    await parent.Go_To_WNT();

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Mark as Read
    const mark_as_read_btn = await $(
      "div=" + test_data.testData.mark_as_read_btn
    );
    await mark_as_read_btn.scrollIntoView({ block: "center" });
    await mark_as_read_btn.click();
    await browser.pause(10000);

    // Screenshot
    await $(
      ".//button[contains(text(), '" + test_data.testData.completion_btn + "')]"
    ).waitForExist({
      timeout: 20000,
    });
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3"
    );

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.completion_btn + "')]"
    ).click();
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
