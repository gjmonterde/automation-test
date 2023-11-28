const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it('Fj_TestScheme_10_0011_step_10: The sub screen opens and the following item names are displayed (not "おなまえ") お受取人お名前', async () => {
    const stepNum = "10"; // ★ 新環境適用' New Env Implementation

    // Click New BA button
    const new_btn = await $("button=" + test_data.testData.new_btn);
    await new_btn.waitForClickable({ timeout: 5000 });
    await new_btn.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    const next_btn = await $("button=" + test_data.testData.mypage_next_btn);
    await next_btn.waitForClickable({ timeout: 5000 });
    await next_btn.click();
    await browser.pause(3000);

    // Full page modal
    await util.modal_fullpage_mypage();

    // お受取人お名前
    const rcp_name_1 = await $(
      "label=" + test_data.testData.ba_input_rcp_name_lbl
    ).getAttribute("for");
    await $(".//input[@id='" + rcp_name_1 + "']").click();
    await browser.pause(1000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // ★ 新環境適用' New Env Implementation
    const back_btn = await $("button=" + test_data.testData.mypage_back_btn);
    await back_btn.waitForClickable({ timeout: 5000 });
    await back_btn.click();
    await browser.pause(3000);

    // ★ 新環境適用' New Env Implementation
    // Cancel
    await $("button=" + test_data.testData.cancel_btn).click();
    await browser.pause(3000);
  });
}
