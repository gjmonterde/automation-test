const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-16");

export default function suite() {
  it('Fj_TestScheme_00_0011_step_76: The お申込みステータス application status of My Page is 「ご融資準備中」"Preparing for Loan"', async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "76";

    if (test_data.testData.logged_status != "mypage") {
      // login to mypage
      await parent.Login_to_MyPage();
    }
    // Go to APP
    await parent.Go_to_App(); // ★ 新環境適用' New Env Implementation

    // Go to contract
    await parent.Go_to_Contract();

    // Switch frame
    const form_frame = await browser.$(".//iframe[@data-id='childVf']");
    await browser.pause(3000);
    await browser.switchToFrame(form_frame);

    // Scroll to view
    const agree_btn = await $(
      ".//input[@value='" + test_data.testData.mypage_accept_contract_btn + "']"
    );
    await agree_btn.scrollIntoView();
    await agree_btn.click();
    await browser.pause(10000);
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 50000,
    });

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
