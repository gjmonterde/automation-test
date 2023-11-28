const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0011-4");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_10: The sub screen opens and the following item names are displayed (not「おなまえ」'Onamae').", async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation

    // Go to My Page Application record screen
    await parent.Open_MyPage_APP_Record();

    // Click 登録 button
    const new_ba_btn = await $(
      ".//button[contains(text(), '" + test_data.testData.new_btn + "')]"
    );
    await new_ba_btn.waitForClickable({ timeout: 10000 });
    await new_ba_btn.click();
    await browser.pause(5000);

    // ★ 新環境適用' New Env Implementation
    const next_btn = await $("button=" + test_data.testData.mypage_next_btn);
    await next_btn.waitForClickable({ timeout: 10000 });
    await next_btn.click();
    await browser.pause(3000);

    // Full modal screenshot - MyPage
    await util.modal_fullpage_mypage();
    await browser.pause(2000);

    // Screenshot
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
  });
}
