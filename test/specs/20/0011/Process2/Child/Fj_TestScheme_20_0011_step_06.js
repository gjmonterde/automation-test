const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-2");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_06: Make sure the link for お知らせ(振込先口座登録) notification (bank account registration) does not appear in the お知らせ一覧 announcements list", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to MY Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Click View All Notifications
    await $(
      ".//a[@aria-label='" + test_data.testData.viewall_notif_link + "']"
    ).click();
    await browser.pause(10000);

    // Sort Table
    const tablelabel = await $("span=" + test_data.testData.mypage_notif_sort);
    var tablesort = await $(
      ".//a[contains(., '" + test_data.testData.mypage_notif_sort + "')]"
    )
      .nextElement()
      .getText();
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

    // As a current implementation, make sure it does not appear in the お知らせ一覧 announcements list.
    // Screenshot - My Page お知らせ screen
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
