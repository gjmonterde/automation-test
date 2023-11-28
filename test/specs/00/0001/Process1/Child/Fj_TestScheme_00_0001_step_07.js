const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0001-1");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_07/08/09/10/12/18/19: Application record creation", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum7 = "7",
      stepNum8 = "8",
      stepNum9 = "9",
      stepNum10 = "10",
      stepNum12 = "12",
      stepNum18 = "18",
      stepNum19 = "19";

    // Go to application record page
    await parent.Open_Application_Form();

    // Remove header
    await parent.Remove_Header_Auth();

    // 7
    //Click Submit button
    const submitButton = await $(
      "//button[@type='" + test_data.testData.submit_type_btn + "']"
    );
    await submitButton.scrollIntoView({ block: "center" });
    await browser.pause(1000);
    await submitButton.click();
    await browser.pause(1000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-1"
    );

    // Populate fields of Step 1 - with error
    await $("#loan_app_request_amount").setValue(test_data.testData.amount);
    if (test_data.testData.amount_check == "1") {
      await $(".//label[@for='loan_app_amount_check_1']").click();
    }
    await $("h3=お客さまについて").scrollIntoView();

    await $(
      ".//label[@for='loan_app_identical_person_" +
        test_data.testData.loan_app_identical_person +
        "']"
    ).click();

    await $("#loan_app_insurance_card_type").selectByAttribute(
      "value",
      test_data.testData.loan_app_insurance_card_type
    );

    // Submit Step 1 data
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Screenshot - error
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-2"
    );

    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.contact_phone_1
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.contact_phone_2
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.contact_phone_3
    );

    await $("#loan_app_contact_detail").setValue(
      test_data.testData.contact_detail
    );

    // Submit Step 1 data
    await $("#step1_submit").click();
    await browser.pause(1000);

    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - error
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-1"
    );

    // Submit Step 1 data
    await $("#step1_submit").click();
    await browser.pause(1000);

    // 11
    // Screenshot - Step 2
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum9 +
        "-1"
    );

    // Step 2
    await $(
      ".//label[@for='loan_app_has_salary_transfer_" +
        test_data.testData.loan_app_has_salary_transfer +
        "']"
    ).click();

    await $(
      ".//label[@for='loan_app_has_mortgage_" +
        test_data.testData.loan_app_has_mortgage +
        "']"
    ).click();
    await $("h3=ご家族・お住まいについて").scrollIntoView();

    await $(
      ".//label[@for='loan_app_living_together_" +
        test_data.testData.living_together +
        "']"
    ).click();

    await $(
      ".//label[@for='loan_app_has_spouse_" +
        test_data.testData.has_spouse +
        "']"
    ).click();

    await $("#loan_app_children").selectByAttribute(
      "value",
      test_data.testData.children
    );
    await $("#loan_app_other_family").selectByAttribute(
      "value",
      test_data.testData.other_family
    );

    await $("#loan_app_living_type").selectByAttribute(
      "value",
      test_data.testData.living_type
    );
    await $("#loan_app_residence_year").selectByAttribute(
      "value",
      test_data.testData.residence_year
    );
    await $("#loan_app_residence_month").selectByAttribute(
      "value",
      test_data.testData.residence_month
    );
    if (test_data.testData.living_type == "02") {
      await $(
        ".//label[@for='loan_app_has_bonus_" +
          test_data.testData.has_bonus +
          "']"
      ).click();
      await $("#loan_app_repayment").setValue(test_data.testData.repayment);
      if (test_data.testData.has_bonus == "2") {
        await $("#loan_app_bonus_repayment").setValue(
          test_data.testData.bonus_repayment
        );
      }
    }
    if (
      test_data.testData.living_type != "01" &&
      test_data.testData.living_type != "03" &&
      test_data.testData.living_type != "02"
    ) {
      await $("#loan_app_rent").setValue(test_data.testData.rent);
    }

    await $("#loan_app_annual_income").scrollIntoView();
    await $("#loan_app_annual_income").setValue(
      test_data.testData.annual_income
    );

    await $(
      ".//label[@for='loan_app_income_type_" +
        test_data.testData.income_type +
        "']"
    ).click();

    await $("#loan_app_working_style").selectByAttribute(
      "value",
      test_data.testData.working_style
    ); // 社員（正社員）

    if (
      test_data.testData.working_style != "05" &&
      (test_data.testData.working_style != "12") &
        (test_data.testData.working_style != "13")
    ) {
      await $("#loan_app_business_type").selectByAttribute(
        "value",
        test_data.testData.business_type
      );
      await $("#loan_app_office_name").setValue(test_data.testData.office_name);
      await $("#loan_app_office_kana").setValue(test_data.testData.office_kana);
      await $("#loan_app_office_dept").setValue(test_data.testData.office_dept);
      await $("#loan_app_position").scrollIntoView();
      await $("#loan_app_position").setValue(test_data.testData.position);
      await $("#loan_app_work_contents").selectByAttribute(
        "value",
        test_data.testData.work_contents
      );
      await $("#loan_app_enter_company_year").selectByAttribute(
        "value",
        test_data.testData.enter_company_year
      );
      await $("#loan_app_enter_company_month").selectByAttribute(
        "value",
        test_data.testData.enter_company_month
      );
      await $("#loan_app_office_zip_code_1").setValue(
        test_data.testData.office_zip_code_1
      );
      await $("#loan_app_office_zip_code_2").setValue(
        test_data.testData.office_zip_code_2
      );
      await $("#loan_app_office_prefecture_code").selectByAttribute(
        "value",
        test_data.testData.prefecture_code
      ); // 島根県
      await $("#loan_app_office_address_city").setValue(
        test_data.testData.office_address_city
      );
      await $("#loan_app_office_address_detail").setValue(
        test_data.testData.office_address_detail
      );
      await $("#loan_app_office_phone2_1").scrollIntoView();
      await $("#loan_app_office_phone2_1").setValue(
        test_data.testData.office_phone2_1
      );
      await $("#loan_app_office_phone2_2").setValue(
        test_data.testData.office_phone2_2
      );
      await $("#loan_app_office_phone2_3").setValue(
        test_data.testData.office_phone2_3
      );
      await $("#loan_app_employee_division").selectByAttribute(
        "value",
        test_data.testData.employee_division
      );
      await $("#loan_app_capital").selectByAttribute(
        "value",
        test_data.testData.capital
      );
      await $("#loan_app_industry").selectByAttribute(
        "value",
        test_data.testData.industry
      );
    }
    if (test_data.testData.working_style == "12") {
      await $("#loan_app_partner_business_type").selectByAttribute(
        "value",
        test_data.testData.partner_business_type
      );
      await $("#loan_app_partner_name_last").setValue(
        test_data.testData.partner_name_last
      );
      await $("#loan_app_partner_name_first").setValue(
        test_data.testData.partner_name_first
      );
      await $("#loan_app_partner_name_kana_last").setValue(
        test_data.testData.partner_name_kana_last
      );
      await $("#loan_app_partner_name_kana_first").setValue(
        test_data.testData.partner_name_kana_first
      );
      await $("#loan_app_partner_office_name").setValue(
        test_data.testData.partner_office_name
      );
      await $("#loan_app_partner_office_kana").setValue(
        test_data.testData.partner_office_kana
      );
      await $("#loan_app_partner_office_dept").setValue(
        test_data.testData.partner_office_dept
      );
      await $("#loan_app_partner_position").scrollIntoView();
      await $("#loan_app_partner_position").setValue(
        test_data.testData.partner_position
      );
      await $("#loan_app_partner_work_contents").selectByAttribute(
        "value",
        test_data.testData.partner_work_contents
      );
      await $("#loan_app_partner_enter_company_year").selectByAttribute(
        "value",
        test_data.testData.partner_enter_company_year
      );
      await $("#loan_app_partner_enter_company_month").selectByAttribute(
        "value",
        test_data.testData.partner_enter_company_month
      );
      await $("#loan_app_partner_office_zip_code_1").setValue(
        test_data.testData.partner_office_zip_code_1
      );
      await $("#loan_app_partner_office_zip_code_2").setValue(
        test_data.testData.partner_office_zip_code_2
      );
      await $("#loan_app_partner_office_prefecture_code").selectByAttribute(
        "value",
        test_data.testData.prefecture_code
      ); // 島根県
      await $("#loan_app_partner_office_address_city").setValue(
        test_data.testData.partner_office_address_city
      );
      await $("#loan_app_partner_office_address_detail").setValue(
        test_data.testData.partner_office_address_detail
      );
      await $("#loan_app_partner_office_phone2_1").scrollIntoView();
      await $("#loan_app_partner_office_phone2_1").setValue(
        test_data.testData.partner_office_phone2_1
      );
      await $("#loan_app_partner_office_phone2_2").setValue(
        test_data.testData.partner_office_phone2_2
      );
      await $("#loan_app_partner_office_phone2_3").setValue(
        test_data.testData.partner_office_phone2_3
      );
      await $("#loan_app_partner_employee_division").selectByAttribute(
        "value",
        test_data.testData.partner_employee_division
      );
      await $("#loan_app_partner_capital").selectByAttribute(
        "value",
        test_data.testData.partner_capital
      );
      await $("#loan_app_partner_industry").selectByAttribute(
        "value",
        test_data.testData.partner_industry
      );
    }

    // Screenshot - Step 2
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum9 +
        "-2"
    );

    // Submit Step 2 data
    await $("#step2_submit").click();
    await browser.pause(1000);

    // 10
    if (test_data.testData.amount_check != "1") {
      await $("#loan_app_repayment_year").selectByAttribute(
        "value",
        test_data.testData.repayment_year
      );
      await $("#loan_app_repayment_month").selectByAttribute(
        "value",
        test_data.testData.repayment_month
      );
      await $("#loan_app_bonus_ratio").selectByAttribute(
        "value",
        test_data.testData.bonus_ratio
      );
    }
    // Save full page screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum10 +
        "-1"
    );

    await $("#loan_app_bonus_ratio").scrollIntoView();
    var amount = parseInt(test_data.testData.amount);
    if (amount < 50) {
      if (test_data.testData.corona_checkbox == "0") {
        await $(".//label[@for='loan_app_corona_checkbox_1']").click();
      }
    }
    await $(
      ".//label[@for='loan_app_use_detail_" +
        test_data.testData.use_detail +
        "']"
    ).click();
    if (test_data.testData.use_detail == "99") {
      await $("#loan_app_use_detail_etc").setValue(
        test_data.testData.use_detail_etc
      );
    }
    await $("#loan_app_payment_name_1").setValue(test_data.testData.payment1);
    await $("#loan_app_payment_value_1").setValue(
      test_data.testData.payment_value
    );
    await $("#loan_app_bank_name_1").scrollIntoView();
    await $("#loan_app_bank_name_1").setValue(test_data.testData.bank1);
    await $("#loan_app_borrowing_1").setValue(test_data.testData.borrowing_1);
    await $("#loan_app_repayment_1").setValue(test_data.testData.repayment_1);
    await $("#loan_app_bank_name_2").setValue(test_data.testData.bank2);
    await $("#loan_app_borrowing_2").setValue(test_data.testData.borrowing_2);
    await $("#loan_app_repayment_2").setValue(test_data.testData.repayment_2);
    await $("h3=紹介店").scrollIntoView();

    await $(
      ".//label[@for='loan_app_introduction_branch_exist_" +
        test_data.testData.introduction_branch_exist +
        "']"
    ).click();
    if (test_data.testData.introduction_branch_exist == "1") {
      await $("#loan_app_select_introduction_branch").selectByAttribute(
        "value",
        test_data.testData.select_introduction_branch
      );
    }
    await $("#loan_app_reference_form_number").setValue(
      test_data.testData.reference_form_number
    );

    await $(
      ".//label[@for='loan_app_question_" + test_data.testData.question + "']"
    ).click();
    if (test_data.testData.question == "99") {
      await $("#loan_app_question_etc").setValue(
        test_data.testData.app_question
      );
    }

    // Save full page screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum10 +
        "-2"
    );

    // Submit Step 3 data
    await $("#step3_submit").click();
    await browser.pause(1000);

    const remoteFilePath1 = await browser.uploadFile(
      user_info.userInformation.var_file_Path1
    );
    const remoteFilePath2 = await browser.uploadFile(
      user_info.userInformation.var_file_Path2
    );
    await $("#image_file_upload_file1").addValue(remoteFilePath1);
    await $("#image_file_upload_file2").addValue(remoteFilePath2);

    await $("#loan_app_mail_address").scrollIntoView();
    await $("#loan_app_mail_address").setValue(
      user_info.userInformation.var_sf_comminuty_loginuser
    );
    await $("#loan_app_mypage_password").setValue(
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    await $("#loan_app_mail_address_confirmation").setValue(
      user_info.userInformation.var_sf_comminuty_loginuser
    );
    await $("#loan_app_mypage_password_confirmation").setValue(
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    if (test_data.testData.combination == "1") {
      await $(".//label[@for='loan_app_combination_1']").click();
    }
    await browser.pause(5000);

    // 銀行に対する個人情報の取扱いに関する同意条項
    const acc_1 = await $(
      ".//dl[@class[contains(., 'agree_PersonalInfoConsentClause_Gogin_Onset')]]"
    );
    await acc_1.scrollIntoView();
    await browser.pause(2000);
    await acc_1.click();
    await browser.pause(2000);

    // 保証会社に対する個人情報の取扱いに関する同意条項
    const acc_2 = await $(
      ".//dl[@class[contains(., 'agree_PersonalInfoConsentClause_Company_Onset')]]"
    );
    await acc_2.scrollIntoView();
    await browser.pause(2000);
    await acc_2.click();
    await browser.pause(2000);

    // 契約規定・保証委託約款
    const acc_3 = await $(
      ".//dl[@class[contains(., 'agree_ContractTerms_Onset')]]"
    );
    await acc_3.scrollIntoView();
    await browser.pause(2000);
    await acc_3.click();
    await browser.pause(2000);

    // 12
    // Save full page screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-1"
    );

    // Submit Step 4 data
    await $("#step4_submit").scrollIntoView();
    await $("#step4_submit").click();
    await browser.pause(5000);

    // 18
    // Save full page screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum18 +
        "-1"
    );

    // Submit application
    const step5_submit = await $("#step5_submit");
    await step5_submit.scrollIntoView();
    await step5_submit.waitForClickable({
      timeout: 30000,
    });
    await step5_submit.click();
    await $(
      ".//*[contains(text(), '" + test_data.testData.app_success + "')]"
    ).waitForExist({ timeout: 50000 });

    // 19
    // Save full page screenshot of success screen
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum19 +
        "-1"
    );
  });
}
