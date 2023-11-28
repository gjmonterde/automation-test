const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0001-1");

export default async function suite() {
  it("Fj_TestScheme_10_0001_step_03: An error message is displayed and the completion screen is not displayed", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Maximize browser
    await browser.maximizeWindow();

    // Go to loan 10 authentication form
    await browser.url(test_data.testData.httpurl01);

    // Remove header
    await parent.Remove_Header();

    // 口座カナ氏名
    await $("#loan_app_account_name_last").setValue(
      test_data.testData.acct_name_last
    );
    await $("#loan_app_account_name_first").setValue(
      test_data.testData.acct_name_first
    );
    // 生年月日
    await $("#loan_app_birth").setValue(test_data.testData.loan_app_birth);
    // （取引店番）支店名
    const selectBranch = await $("#loan_app_select_branch");
    await selectBranch.selectByAttribute(
      "value",
      test_data.testData.loan_app_select_branch
    );

    // 口座番号 賦値
    await $("#loan_app_account_number").setValue(
      test_data.testData.loan_app_acct_no
    );
    await $("#loan_app_pinword").setValue(test_data.testData.loan_app_pinword);
    await browser.pause(1000);

    //（確認画面へ進む）
    const agreeButton = await $("span=（確認画面へ進む）");
    await agreeButton.click();

    //（本人認証へ進む）
    const confirmButton = await $("#confirm_submit");
    await confirmButton.click();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
