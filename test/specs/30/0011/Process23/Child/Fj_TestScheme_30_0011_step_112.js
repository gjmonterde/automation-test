const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-23");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_112: When the 「既読にする」 “Mark as Read ” button is pressed, it is updated to the read state", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "112";

    // Go to my page
    await parent.Login_to_MyPage();

    // Go to notifications list - Click View All Notifications
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);
    const view_notif = await $(
      ".//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    );
    await view_notif.scrollIntoView();
    await view_notif.click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $(
      ".//a[contains(., '" + test_data.testData.mypage_notif_sort + "')]"
    );
    var tablesort = await tablelabel.nextElement().getText();
    while (tablesort != test_data.testData.sort_app) {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" + test_data.testData.mypage_notif_sort + "')]"
      )
        .nextElement()
        .getText();
    }

    await expect(tablesort).toBe(test_data.testData.sort_app);

    // Screenshot - Notifications list
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
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
        test_data.testData.wnt_id
    );
    await browser.pause(10000);

    // The state of being unread.
    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Mark as Read
    await $("div=" + test_data.testData.mark_as_read_btn).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
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
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
