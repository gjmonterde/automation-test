const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");

export default function suite() {
  it("Fj_TestScheme_40_0009_step_15: When the「既読にする」“Mark as Read ” button is pressed, it is updated to the read state", async () => {
    const stepNum = "15"; // ★ 新環境適用' New Env Implementation

    if (
      (await browser.getUrl()) !=
      user_info.userInformation.var_sf_siteurl + "/s/"
    ) {
      // Go to My Page homepage
      await browser.url(user_info.userInformation.var_sf_siteurl);
      await browser.pause(10000);
    }

    // Screenshot - My Page Home page
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
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
    await browser.pause(10000);
    
    // Click Mark as Read
    await $("div=" + test_data.testData.mark_as_read_btn).waitForExist({
      timeout: 20000,
    });
    await $("div=" + test_data.testData.mark_as_read_btn).click();
    await browser.pause(5000);

    // Screenshot - My Page Notification record Mark As Read Confirmation screen
    await $(
      ".//button[contains(text(), '" + test_data.testData.completion_btn + "')]"
    ).waitForExist({
      timeout: 20000,
    });
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.completion_btn + "')]"
    ).click();
    await browser.pause(10000);

    // Go to My Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Screenshot - My Page Notification records marked as read
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
