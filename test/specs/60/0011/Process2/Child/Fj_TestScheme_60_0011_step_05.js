const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_05: お知らせ内容 details of the notice can be viewed on the お知らせ詳細画面 notice detail screen", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Go to notifications list - Click View All Notifications
    const view_notif = await $(
      ".//a[@aria-label='" + test_data.testData.see_wnt + "']"
    );
    await view_notif.scrollIntoView();
    await view_notif.click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $(
      ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
    );
    var tablesort = await tablelabel.nextElement().getText();
    while (tablesort != test_data.testData.sort_app) {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
      )
        .nextElement()
        .getText();
    }
    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Screenshot - Notifications list
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
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
        test_data.testData.wnt1_id
    );
    await browser.pause(10000);

    // The state of being unread.
    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Mark as Read
    await $("//div[@title='" + test_data.testData.mark_read + "']").click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.mark_comp + "')]"
    ).click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
