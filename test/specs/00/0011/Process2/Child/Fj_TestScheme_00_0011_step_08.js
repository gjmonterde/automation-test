const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_08: The お知らせ内容 details of the notice can be viewed on the お知らせ詳細画面 notice detail screen", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    // Go to WNT Record
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/fj-webnotification/" +
        test_data.testData.wnt_id
    );
    await $("span=" + test_data.testData.wnt_name).waitForExist({
      timeout: 30000,
    });

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Click Mark as Read
    const mark_as_read_btn = await $(
      "div=" + test_data.testData.mark_as_read_btn
    );
    await mark_as_read_btn.scrollIntoView({ block: "center" });
    await mark_as_read_btn.click();
    await browser.pause(5000);

    // Screenshot
    await $(
      ".//button[contains(text(), '" + test_data.testData.completion_btn + "')]"
    ).waitForExist({
      timeout: 20000,
    });
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );

    // Click Confirm button
    await $(
      ".//button[contains(text(), '" + test_data.testData.completion_btn + "')]"
    ).click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-3"
    );
  });
}
