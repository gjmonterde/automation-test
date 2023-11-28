const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-1");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_01: Access the account authentication URL", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Open Authentication page
    await parent.Open_Auth();

    // Screenshot
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

    // Open 注意事項 accordion
    const acc = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_1 + "')]"
    );
    await acc.scrollIntoView();
    await acc.click();
    await browser.pause(2000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );

    // Open Authentication page
    await parent.Open_Auth();

    // Open 注意事項 accordion
    const acc2 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_1 + "')]"
    );
    await acc2.scrollIntoView();
    await acc2.click();
    await browser.pause(2000);

    //（確認画面へ進む）Click agree button
    const agreeButton1 = await $("span=" + test_data.testData.auth_agree_btn);
    await agreeButton1.click();
    await browser.pause(1000);

    // Screenshot -  Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );

    // Open Authentication page
    await parent.Open_Auth();

    // Value 1 - Error
    // 口座カナ氏名
    await $("#loan_app_account_name_last").setValue(
      test_data.testData.auth_acct_name_last_value1
    );
    await $("#loan_app_account_name_first").setValue(
      test_data.testData.auth_acct_name_first_value1
    );

    // 生年月日
    await $("#loan_app_birth").setValue(test_data.testData.auth_birth_value1);

    // 口座番号 賦値
    await $("#loan_app_account_number").setValue(
      test_data.testData.auth_acct_no_value1
    );
    await $("#loan_app_pinword").setValue(
      test_data.testData.auth_pinword_value1
    );
    await browser.pause(1000);

    //（確認画面へ進む）Click agree button
    const agreeButton2 = await $("span=" + test_data.testData.auth_agree_btn);
    await agreeButton2.click();
    await browser.pause(1000);

    // Screenshot - Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );
  });
}
