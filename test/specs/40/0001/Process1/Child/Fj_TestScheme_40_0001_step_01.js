const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0001-1");

export default async function suite() {
  it("Fj_TestScheme_40_0001_step_01: Switch to identity authentication service", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Open Authentication page
    await parent.Open_Auth();

    // Screenshot -  1-1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // Open 注意事項 accordion
    const acc = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_1 + "')]"
    );
    await acc.scrollIntoView();
    await acc.click();
    await browser.pause(2000);

    // Screenshot -  1-2
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
    // Open Authentication page
    await parent.Open_Auth();

    // Value 1
    // 口座カナ氏名
    await $("#loan_app_account_name_last").setValue(
      test_data.testData.auth_acct_name_last_value1
    );
    await $("#loan_app_account_name_first").setValue(
      test_data.testData.auth_acct_name_first_value1
    );

    // 生年月日
    await $("#loan_app_birth").setValue(test_data.testData.auth_birth_value1);

    // （取引店番）支店名
    const selectBranch = await $("#loan_app_select_branch");
    await selectBranch.selectByAttribute(
      "value",
      test_data.testData.auth_branch_value1
    );

    // 口座番号 賦値
    await $("#loan_app_account_number").setValue(
      test_data.testData.auth_acct_no_value1
    );
    await $("#loan_app_pinword").setValue(
      test_data.testData.auth_pinword_value1
    );
    await browser.pause(1000);

    // Screenshot -  1-3
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Value 2
    // 口座カナ氏名
    await $("#loan_app_account_name_last").setValue(
      test_data.testData.auth_acct_name_last_value2
    );
    await $("#loan_app_account_name_first").setValue(
      test_data.testData.auth_acct_name_first_value2
    );

    // 生年月日
    await $("#loan_app_birth").setValue(test_data.testData.auth_birth_value2);

    // （取引店番）支店名
    await selectBranch.selectByAttribute(
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

    // Screenshot -  1-4
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );

    // Value 3 - Error
    // 口座カナ氏名
    await $("#loan_app_account_name_last").setValue(
      test_data.testData.auth_acct_name_last_value3
    );
    await $("#loan_app_account_name_first").setValue(
      test_data.testData.auth_acct_name_first_value3
    );

    // 生年月日
    await $("#loan_app_birth").setValue(test_data.testData.auth_birth_value3);

    // （取引店番）支店名
    await selectBranch.selectByAttribute(
      "value",
      test_data.testData.auth_branch_value3
    );

    // 口座番号 賦値
    await $("#loan_app_account_number").setValue(
      test_data.testData.auth_acct_no_value3
    );
    await $("#loan_app_pinword").setValue(
      test_data.testData.auth_pinword_value3
    );
    await browser.pause(1000);

    //（確認画面へ進む）Click agree button
    const agreeButton = await $("span=" + test_data.testData.auth_agree_btn);
    await agreeButton.click();
    await browser.pause(1000);

    // Screenshot -  1-5
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
