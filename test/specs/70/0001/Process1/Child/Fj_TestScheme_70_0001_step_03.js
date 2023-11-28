const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-1");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_03: An error message is displayed and the completion screen is not displayed", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.auth_agree == test_data.testData.isFalse) {
      // Open Authentication page
      await parent.Open_Auth();

      // Value 2 - OK
      // 口座カナ氏名
      await $("#loan_app_account_name_last").scrollIntoView();
      await $("#loan_app_account_name_last").setValue(
        test_data.testData.auth_acct_name_last_value2
      );
      await $("#loan_app_account_name_first").setValue(
        test_data.testData.auth_acct_name_first_value2
      );

      // 生年月日
      await $("#loan_app_birth").setValue(test_data.testData.auth_birth_value2);

      //（取引店番）支店名
      await $("#loan_app_select_branch").selectByAttribute(
        "value",
        test_data.testData.auth_branch_value2
      );

      // 口座番号 賦値
      await $("#loan_app_account_number").setValue(
        test_data.testData.auth_acct_no_value2
      );
      await $("#loan_app_pinword").setValue(
        test_data.testData.auth_pinword_value2
      );
      await browser.pause(1000);

      //（確認画面へ進む）Click agree button
      const agreeButton = await $("span=" + test_data.testData.auth_agree_btn);
      await agreeButton.click();
      await browser.pause(1000);
      test_data.testData.auth_agree = test_data.testData.isTrue;
    }

    //（本人認証へ進む）Click submit button
    const confirmButton = await $("#confirm_submit");
    await confirmButton.click();
    await browser.pause(5000);

    // Screenshot -  3-1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
