const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");

export default function suite() {
  it('Fj_TestScheme_40_0011_step_90: お申込み application status of My Page is「ご融資準備中」"Preparing for Loan"', async () => {
    const stepNum = "90"; // ★ 新環境適用' New Env Implementation

    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Scroll to view
    // ★ 新環境適用' New Env Implementation
    const agree_btn = await $(
      ".//input[@value='" + test_data.testData.mypage_accept_contract_btn + "']"
    );
    await agree_btn.$(function () {
      this.scrollIntoView();
    });
    await agree_btn.click();
    await browser.pause(30000);
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 50000,
    });

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
