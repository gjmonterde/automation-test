const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-1");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_08/11/12/14/16/18/20/21: Application Record Creation", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum8 = "8";
    const stepNum11 = "11";
    const stepNum12 = "12";
    const stepNum14 = "14";
    const stepNum16 = "16";
    const stepNum18 = "18";
    const stepNum20 = "20";
    const stepNum21 = "21";

    if (
      (await browser.getUrl) !=
      test_data.testData.httpurl02 + test_data.testData.input_key
    ) {
      // Open application form
      await parent.Open_ApplicationForm();
    }

    // Open Accordions - 同意 Step
    // 注意事項 accordion
    const acc1 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_1 + "')]"
    );
    await acc1.scrollIntoView();
    await acc1.click();
    await browser.pause(2000);
    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    const acc2 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_2 + "')]"
    );
    await acc2.scrollIntoView();
    await acc2.click();
    await browser.pause(2000);
    // 契約規定 accordion
    const acc3 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_3 + "')]"
    );
    await acc3.scrollIntoView();
    await acc3.click();
    await browser.pause(2000);
    // お手続きマイページ利用規約 accordion
    const acc4 = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_4 + "')]"
    );
    await acc4.scrollIntoView();
    await acc4.click();
    await browser.pause(2000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-1"
    );

    // Go to Step 1
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).scrollIntoView();
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();
    await browser.pause(1000);

    // STEP 1

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-2"
    );

    // 健康保険証　名義
    await $(
      ".//label[@for='loan_app_identical_person_" +
        test_data.testData.loan_app_identical_person +
        "']"
    ).click();

    // Submit - Step 1 Error
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 1 - Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-3"
    );

    // Back
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Close Accordions - 同意 Step
    // 注意事項 accordion
    const acc1_c = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_1 + "')]"
    );
    await acc1_c.scrollIntoView();
    await acc1_c.click();
    await browser.pause(2000);
    // 銀行に対する個人情報の取扱いに関する同意条項 accordion
    const acc2_c = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_2 + "')]"
    );
    await acc2_c.scrollIntoView();
    await acc2_c.click();
    await browser.pause(2000);
    // 契約規定 accordion
    const acc3_c = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_3 + "')]"
    );
    await acc3_c.scrollIntoView();
    await acc3_c.click();
    await browser.pause(2000);
    // お手続きマイページ利用規約 accordion
    const acc4_c = await $(
      ".//a[contains(., '" + test_data.testData.acc_app_0001_4 + "')]"
    );
    await acc4_c.scrollIntoView();
    await acc4_c.click();
    await browser.pause(2000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-4"
    );

    // Go to Step 1
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).scrollIntoView();
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();
    await browser.pause(1000);

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

    // Submit - Step 1
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Back
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-1"
    );

    // Submit - Step 1
    await $("#step1_submit").click();
    await browser.pause(1000);

    // STEP 2
    // Screenshot - Step 2 - Blank
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-2"
    );

    // Submit - Step 2 - Error
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 2 - Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-3"
    );

    // Back
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-4"
    );

    // Submit - Step 1
    await $("#step1_submit").click();
    await browser.pause(1000);

    // お名前 - 姓
    await $("#loan_app_child_name_last").setValue(
      test_data.testData.child_name_last
    );
    // お名前 - 名
    await $("#loan_app_child_name_first").setValue(
      test_data.testData.child_name_first
    );
    // お名前　フリガナ - セイ
    await $("#loan_app_child_name_kana_last").setValue(
      test_data.testData.child_name_kana_last
    );
    // お名前　フリガナ - メイ
    await $("#loan_app_child_name_kana_first").setValue(
      test_data.testData.child_name_kana_first
    );
    // 就学（予定）先
    await $("#loan_app_school_kind").selectByAttribute(
      "value",
      test_data.testData.school_kind
    );
    // 学校名
    await $("#loan_app_school_name").setValue(
      test_data.testData.child_name_kana_first
    );
    // 学部、学科、コース
    await $("#loan_app_school_faculty").setValue(
      test_data.testData.school_faculty
    );
    // 学年
    await $("#loan_app_grade").selectByAttribute(
      "value",
      test_data.testData.grade
    );
    // ご卒業予定　年
    await $("#loan_app_graduation_year").selectByAttribute(
      "value",
      test_data.testData.graduation_year
    );
    // ご卒業予定　月
    await $("#loan_app_graduation_month").selectByAttribute(
      "value",
      test_data.testData.graduation_month
    );

    // 暗証番号
    await $("#loan_app_card_password").setValue(
      test_data.testData.card_password
    );
    await $("#loan_app_card_password_confirmation").setValue(
      test_data.testData.card_password
    );

    // 即日貸越希望額
    await $("#loan_app_immediate_borrowing_amount").setValue(
      test_data.testData.immediate_borrowing_amount
    );

    // 当行での給与振込または年金受取指定（ご本人）
    await $(
      ".//label[@for='loan_app_has_salary_transfer_" +
        test_data.testData.has_salary_transfer +
        "']"
    ).click();
    // 当行での住宅ローンのご利用
    await $(
      ".//label[@for='loan_app_has_mortgage_" +
        test_data.testData.has_mortgage +
        "']"
    ).click();

    // 同居ご家族の有無
    await $(
      ".//label[@for='loan_app_living_together_" +
        test_data.testData.living_together +
        "']"
    ).click();
    // 配偶者の有無
    await $(
      ".//label[@for='loan_app_has_spouse_" +
        test_data.testData.has_spouse +
        "']"
    ).click();
    // お子さまの人数
    await $("#loan_app_children").selectByAttribute(
      "value",
      test_data.testData.children
    );
    // その他同居家族の人数
    await $("#loan_app_other_family").selectByAttribute(
      "value",
      test_data.testData.other_family
    );
    // 現在のお住まいの種類
    await $("#loan_app_living_type").selectByAttribute(
      "value",
      test_data.testData.living_type
    );
    // 現在のお住まいに住み始めた時期 年
    await $("#loan_app_residence_year").selectByAttribute(
      "value",
      test_data.testData.residence_year
    );
    // 現在のお住まいに住み始めた時期 月
    await $("#loan_app_residence_month").selectByAttribute(
      "value",
      test_data.testData.residence_month
    );

    // 前年個人年収(税込)
    await $("#loan_app_annual_income").setValue(
      test_data.testData.annual_income
    );
    // 収入の形態
    await $(
      ".//label[@for='loan_app_income_type_" +
        test_data.testData.income_type +
        "']"
    ).click();
    // 職業
    await $("#loan_app_working_style").selectByAttribute(
      "value",
      test_data.testData.working_style
    );
    // お勤め先の種類
    await $("#loan_app_business_type").selectByAttribute(
      "value",
      test_data.testData.business_type
    );
    // お勤め先名称
    await $("#loan_app_office_name").setValue(test_data.testData.office_name);
    // お勤め先名称フリガナ
    await $("#loan_app_office_kana").setValue(test_data.testData.office_kana);
    // お仕事の内容
    await $("#loan_app_work_contents").selectByAttribute(
      "value",
      test_data.testData.work_contents
    );
    // 入社（営業開始）年
    await $("#loan_app_enter_company_year").selectByAttribute(
      "value",
      test_data.testData.enter_company_year
    );
    // 入社（営業開始）月
    await $("#loan_app_enter_company_month").selectByAttribute(
      "value",
      test_data.testData.enter_company_month
    );
    // お勤め先住所 郵便番号
    await $("#loan_app_office_zip_code_1").setValue(
      test_data.testData.zip_code_1
    );
    await $("#loan_app_office_zip_code_2").setValue(
      test_data.testData.zip_code_2
    );
    // Click verify
    await $(
      ".//input[@type='button'][@value='" +
        test_data.testData.verify_zip_btn +
        "']"
    ).click();
    await browser.pause(1000);
    // ビル名など
    await $("#loan_app_office_address_detail").setValue(
      test_data.testData.office_address_detail
    );
    // お勤め先電話番号
    await $("#loan_app_office_phone2_1").setValue(
      test_data.testData.office_phone1
    );
    await $("#loan_app_office_phone2_2").setValue(
      test_data.testData.office_phone2
    );
    await $("#loan_app_office_phone2_3").setValue(
      test_data.testData.office_phone3
    );
    // 従業員数
    await $("#loan_app_employee_division").selectByAttribute(
      "value",
      test_data.testData.employee_division
    );
    // 資本金
    await $("#loan_app_capital").selectByAttribute(
      "value",
      test_data.testData.capital
    );
    // 事業内容（業種）
    await $("#loan_app_industry").selectByAttribute(
      "value",
      test_data.testData.industry
    );

    // Submit - Step 2
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-1"
    );

    // Submit - Step 2
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Submit - Step 3
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 3 -Error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-2"
    );

    // STEP 3
    // お使いみち
    await $("#loan_app_use_detail_etc").setValue(test_data.testData.use_detail);

    // 紹介店 有無
    await $(
      ".//label[@for='loan_app_introduction_branch_exist_" +
        test_data.testData.introduction_branch_exist +
        "']"
    ).click();

    // アンケート
    await $(
      ".//label[@for='loan_app_question_" + test_data.testData.question + "']"
    ).click();

    // Submit - Step 3
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-3"
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

    var email_err =
      user_info.userInformation.var_sf_comminuty_loginuser +
      test_data.testData.email_err;
    var pwd_err =
      user_info.userInformation.var_sf_comminuty_loginpwd +
      test_data.testData.pwd_err;

    await $("#loan_app_mail_address").scrollIntoView();
    await $("#loan_app_mail_address").setValue(email_err);
    await $("#loan_app_mail_address_confirmation").setValue(
      user_info.userInformation.var_sf_comminuty_loginuser
    );
    await $("#loan_app_mypage_password").setValue(
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    await $("#loan_app_mypage_password_confirmation").setValue(pwd_err);

    if (test_data.testData.combination == "1") {
      await $(".//label[@for='loan_app_combination_1']").click();
    }

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-1"
    );

    await $("#loan_app_mail_address").scrollIntoView();
    await $("#loan_app_mail_address").setValue(
      user_info.userInformation.var_sf_comminuty_loginuser
    );
    await $("#loan_app_mail_address_confirmation").setValue(
      user_info.userInformation.var_sf_comminuty_loginuser
    );
    await $("#loan_app_mypage_password").setValue(
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    await $("#loan_app_mypage_password_confirmation").setValue(
      user_info.userInformation.var_sf_comminuty_loginpwd
    );

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-2"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum18 +
        "-1"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-1"
    );

    // Submit - Step 4
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - 申込み確認
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-2"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-1"
    );

    // CHECK DEVELOPER CONSOLE
    test_data.testData.newWin = test_data.testData.isTrue;
    // Login to Salesforce
    await parent.Login_to_Salesforce();

    // Open dev console
    await browser.url(user_info.userInformation.var_sf_dev_console);
    // Click Query Editor
    await $(".//button[contains(., 'Query Editor')]").click();
    await browser.pause(10000);

    // Birthdate format
    var bday = test_data.testData.input_birthdate;
    bday = bday.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3");

    // Enter query
    await $(".//textarea[@id='queryEditorText-inputEl']").setValue(
      test_data.testData.query_0001_16_1 +
        "'" +
        user_info.userInformation.var_sf_comminuty_loginuser +
        "'" +
        test_data.testData.query_0001_16_2 +
        bday
    );
    await browser.pause(5000);

    await $(".//button[@id[contains(., 'queryExecuteButton-btnEl')]]").click();
    await browser.pause(10000);

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum16 +
        "-1"
    );

    // logout
    await parent.Logout();

    // Switch to loan 70 window
    await browser.switchWindow(
      test_data.testData.httpurl02 + test_data.testData.input_key
    );

    // Submit - 申込み確認 Step
    await $("#step5_submit").scrollIntoView();
    await $("#step5_submit").click();
    await $(
      ".//*[contains(text(), '" + test_data.testData.app_created_txt + "')]"
    ).waitForExist({ timeout: 50000 });

    // Screenshot - Application submitted page
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-2"
    );
  });
}
