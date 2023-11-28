const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0001-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_40_0001_step_08/09/10/11/12/14/17/18/20/21: Application Record Creation", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum8 = "8";
    const stepNum9 = "9";
    const stepNum10 = "10";
    const stepNum11 = "11";
    const stepNum12 = "12";
    const stepNum14 = "14";
    const stepNum17 = "17";
    const stepNum18 = "18";
    const stepNum20 = "20";
    const stepNum21 = "21";

    if (
      (await browser.getUrl) !=
      test_data.testData.httpurl02 + test_data.testData.input_key
    ) {
      // Open applciation form
      await parent.Open_ApplicationForm();
    }

    // Go to Step 1
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).scrollIntoView();
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();
    await browser.pause(1000);

    // STEP 1
    // お借り入れ希望額
    await $("#loan_app_request_amount").setValue(
      test_data.testData.amount_noVal
    );

    // 電話番号（日中ご連絡可能な番号）
    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.contact_phone_1_noVal
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.contact_phone_2_noVal
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.contact_phone_3_noVal
    );

    // Submit - Step 1 Error
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 1 - Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation***
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum10 +
        "-2"
    );

    // Error
    // お借り入れ希望額
    await $("#loan_app_request_amount").setValue(test_data.testData.amount_err);
    // 電話番号（日中ご連絡可能な番号）
    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.contact_phone_1_err
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.contact_phone_2_err
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.contact_phone_3_err
    );
    await $("h3=お客さまについて").click();

    // Submit - Step 1 Error
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 1 - Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-2"
    );

    // No Error
    // お借り入れ希望額
    if (test_data.testData.amount_check == "1") {
      await $(".//label[@for='loan_app_amount_check_1']").click();
    }
    // 健康保険証　名義
    await $(
      ".//label[@for='loan_app_identical_person_" +
        test_data.testData.loan_app_identical_person +
        "']"
    ).click();
    // 健康保険証　種類
    await $("#loan_app_insurance_card_type").selectByAttribute(
      "value",
      test_data.testData.loan_app_insurance_card_type
    );
    // 電話番号（日中ご連絡可能な番号）
    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.contact_phone_1
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.contact_phone_2
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.contact_phone_3
    );
    // ご要望事項
    await $("#loan_app_contact_detail").setValue(
      test_data.testData.contact_detail
    );

    // Submit - Step 1 and then go Back
    await $("#step1_submit").click();
    await browser.pause(1000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-1"
    );

    // Step 1 - placeholder
    // 電話番号（日中ご連絡可能な番号）
    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.contact_phone_1_noVal
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.contact_phone_2_noVal
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.contact_phone_3_noVal
    );
    await $("h3=お客さまについて").click();

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum9 +
        "-1"
    );

    // Step 1 - error
    // 電話番号（日中ご連絡可能な番号）
    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.contact_phone_1_err2
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.contact_phone_2_err2
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.contact_phone_3_err2
    );
    await $("h3=お客さまについて").click();

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum10 +
        "-1"
    );

    // Submit - Step 1
    await $("#step1_submit").click();
    await browser.pause(1000);

    // 電話番号（日中ご連絡可能な番号）
    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.contact_phone_1
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.contact_phone_2
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.contact_phone_3
    );

    // Submit - Step 1
    await $("#step1_submit").click();
    await browser.pause(1000);

    // STEP 2
    // Submit - Step 2 - Error
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 2 - Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-2"
    );

    // 当行での給与振込または年金受取指定（ご本人）
    await $(
      ".//label[@for='loan_app_has_salary_transfer_" +
        test_data.testData.loan_app_has_salary_transfer +
        "']"
    ).click();
    // ソーラーシステム、蓄電池等の購入・設置
    await $(
      ".//label[@for='loan_app_solar_system_" +
        test_data.testData.loan_app_solar_system +
        "']"
    ).click();
    // 当行での住宅ローンまたは住宅金融支援機構のご利用
    await $(
      ".//label[@for='loan_app_has_mortgage_" +
        test_data.testData.loan_app_has_mortgage +
        "']"
    ).click();
    // ご自宅について 助成対象資材の使用
    await $(
      ".//label[@for='loan_app_has_sekisyu_" +
        test_data.testData.loan_app_has_sekisyu +
        "']"
    ).click();
    // ご自宅について 「防犯推進住宅」の認定
    await $(
      ".//label[@for='loan_app_has_security_residence_" +
        test_data.testData.loan_app_has_security_residence +
        "']"
    ).click();
    // 同居ご家族の有無
    await $(
      ".//label[@for='loan_app_living_together_" +
        test_data.testData.loan_app_living_together +
        "']"
    ).click();
    // 配偶者の有無
    await $(
      ".//label[@for='loan_app_has_spouse_" +
        test_data.testData.loan_app_has_spouse +
        "']"
    ).click();
    // お子さまの人数
    await $("#loan_app_children").selectByAttribute(
      "value",
      test_data.testData.loan_app_children
    );
    // その他同居家族の人数
    await $("#loan_app_other_family").selectByAttribute(
      "value",
      test_data.testData.loan_app_other_family
    );
    // 現在のお住まいの種類
    await $("#loan_app_living_type").selectByAttribute(
      "value",
      test_data.testData.loan_app_living_type
    );
    // 現在のお住まいに住み始めた時期 年
    await $("#loan_app_residence_year").selectByAttribute(
      "value",
      test_data.testData.loan_app_residence_year
    );
    // 現在のお住まいに住み始めた時期 月
    await $("#loan_app_residence_month").selectByAttribute(
      "value",
      test_data.testData.loan_app_residence_month
    );
    // 前年個人年収(税込)
    await $("#loan_app_annual_income").setValue(
      test_data.testData.loan_app_annual_income
    );
    // 収入の形態
    await $(
      ".//label[@for='loan_app_income_type_" +
        test_data.testData.loan_app_income_type +
        "']"
    ).click();
    // 職業
    await $("#loan_app_working_style").selectByAttribute(
      "value",
      test_data.testData.loan_app_working_style
    );

    // Submit - Step 2 and then go Back
    await $("#step2_submit").click();
    await browser.pause(1000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 2
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-1"
    );

    // Submit - Step 2
    await $("#step2_submit").click();
    await browser.pause(1000);

    // STEP 3
    // お使いみち
    await $(
      ".//label[@for='loan_app_use_detail_" +
        test_data.testData.loan_app_use_detail +
        "']"
    ).click();

    // Submit - Step 3 - Error
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 3
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-2"
    );

    // 紹介店 有無
    await $(
      ".//label[@for='loan_app_introduction_branch_exist_" +
        test_data.testData.loan_app_introduction_branch_exist +
        "']"
    ).click();
    // アンケート
    await $(
      ".//label[@for='loan_app_question_" +
        test_data.testData.loan_app_question +
        "']"
    ).click();

    // Submit - Step 3 and then go Back
    await $("#step3_submit").click();
    await browser.pause(1000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 3
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-1"
    );

    // Submit - Step 3
    await $("#step3_submit").click();
    await browser.pause(1000);

    // STEP 4
    // Step 4 - Error
    const remoteFilePath1 = await browser.uploadFile(
      user_info.userInformation.var_file_Path1
    );
    const remoteFilePath2 = await browser.uploadFile(
      user_info.userInformation.var_file_Path2
    );
    await $("#image_file_upload_file1").addValue(remoteFilePath1);
    await $("#image_file_upload_file2").addValue(remoteFilePath2);

    // Submit - Step 4 - Error
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-2"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum18 +
        "-2"
    );

    var u_email, u_pwd;
    if (test_data.testData.user_status == 0) {
      // Email and password - Existing user (to be used for PG)
      u_email = user_info.userInformation.var_sf_comminuty_loginuser;
      u_pwd = user_info.userInformation.var_sf_comminuty_loginpwd;
    } else if (test_data.testData.user_status == 1) {
      // Email and password - New user (to be used for testing)
      u_email = user_info.userInformation.var_sf_comminuty_loginuser2;
      u_pwd = user_info.userInformation.var_sf_comminuty_loginpwd2;
    }

    await $("#loan_app_mail_address").scrollIntoView();
    await $("#loan_app_mail_address").setValue(u_email);
    await $("#loan_app_mail_address_confirmation").setValue(u_email);
    await $("#loan_app_mypage_password").setValue(u_pwd);
    await $("#loan_app_mypage_password_confirmation").setValue(u_pwd);

    if (test_data.testData.combination == "1") {
      await $(".//label[@for='loan_app_combination_1']").click();
    }

    // Submit - Step 4 and then go Back
    await $("#step4_submit").click();
    await browser.pause(1000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-1"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum18 +
        "-1"
    );

    // CHECK DEVELOPER CONSOLE
    // Login to Salesforce
    await parent.Login_to_Salesforce();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0001_17 + "'" + u_email + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum17 +
        "-1"
    );

    // Switch to loan 40 window
    await browser.switchWindow(
      test_data.testData.httpurl02 + test_data.testData.input_key
    );

    // Submit - Step 4
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - 申込み確認 Step
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-1"
    );

    // Submit - 申込み確認 Step
    await $("#step5_submit").scrollIntoView();
    await $("#step5_submit").click();
    await $(
      ".//*[contains(text(), '" + test_data.testData.app_created_txt + "')]"
    ).waitForExist({ timeout: 60000 });

    // Screenshot - Application submitted page
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-1"
    );
  });
}
