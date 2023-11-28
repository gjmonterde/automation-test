const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0012-3");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0012_step_41: When the「既読にする」“Mark as Read ” button is pressed, it is updated to the read state", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "41";

    // Login to My Page
    await parent.Login_MyPage();

    // Go to home page
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);

    // Go to WNT list view
    const wnt_see_all = await $(
      "//a[@aria-label='" + test_data.testData.see_wnt + "']"
    );
    await wnt_see_all.scrollIntoView();
    await wnt_see_all.click();
    await browser.pause(3000);

    // Sort WNT
    const col_sort = await $(
      ".//a[contains(., '" + test_data.testData.sort_wnt_col + "')]"
    );
    var sort = await col_sort.nextElement().getText();
    while (sort != test_data.testData.app_desc) {
      await col_sort.click();
      await browser.pause(1000);
      sort = await col_sort.nextElement().getText();
    }
    await expect(sort).toBe(test_data.testData.app_desc);
    await browser.pause(3000);

    // Deselect the hover/selected fields
    await util.Deselect_fields(7); // ★ 新環境適用' New Env Implementation

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Go to notification record
    const notif_name = await $("a=" + test_data.testData.wnt_name);
    await notif_name.scrollIntoView();
    await browser.pause(7000);
    await notif_name.click();
    await browser.pause(3000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(6000);

    // Check for unread status
    await $(
      "//div[@title='" + test_data.testData.mark_as_read_btn + "']"
    ).click();
    await browser.pause(5000);

    // Scroll to top
    await $("//div[@class='themeLogo']").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    await browser.pause(1000);

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(5000);

    await $(
      "//button[contains(.,'" + test_data.testData.confirm_text + "')]"
    ).click();
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(2000);
  });
}
