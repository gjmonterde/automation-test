const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0001_step_07/11/12/14/17/19/20/21: Application Record Creation", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum7 = "7",
      stepNum11 = "11",
      stepNum12 = "12",
      stepNum14 = "14",
      stepNum17 = "17",
      stepNum19 = "19",
      stepNum20 = "20",
      stepNum21 = "21";

    // Screenshot of Collapsed
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-1"
    );
    await browser.pause(5000);

    // Go to Step 1
    await $(".//p[@class='c_text u_font_red']").scrollIntoView();
    await $("span=（入力画面へ進む）").click();

    // Submit Step 1 (error)
    await $("#step1_submit").click();

    // Screenshot - Step 1 screen with error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-2"
    );

    // Set values for Step 1
    await $("#loan_app_request_amount").setValue(test_data.testData.amount);
    if (test_data.testData.amount_check == "1") {
      await $(".//label[@for='loan_app_amount_check_1']").click();
    }
    await $("h3=お客さまについて").scrollIntoView();
    if (test_data.testData.user_status === 0) {
      await $("#loan_app_name_last").setValue(test_data.testData.name_last_old);
      await $("#loan_app_name_first").setValue(
        test_data.testData.name_first_old
      );
    } else if (test_data.testData.user_status === 1) {
      await $("#loan_app_name_last").setValue(test_data.testData.name_last_new);
      await $("#loan_app_name_first").setValue(
        test_data.testData.name_first_new
      );
    }
    await $("#loan_app_name_kana_first").scrollIntoView();
    await $("#loan_app_name_kana_last").setValue(
      test_data.testData.name_kana_last
    );
    await $("#loan_app_name_kana_first").setValue(
      test_data.testData.name_kana_first
    );
    await $(
      ".//label[@for='loan_app_sex_" + test_data.testData.sex + "']"
    ).click();
    if (test_data.testData.user_status === 0) {
      await $("#loan_app_birth_year").selectByAttribute(
        "value",
        test_data.testData.birth_year_old
      );
      await $("#loan_app_birth_month").selectByAttribute(
        "value",
        test_data.testData.birth_month_old
      );
      await $("#loan_app_birth_day").selectByAttribute(
        "value",
        test_data.testData.birth_day_old
      );
    } else if (test_data.testData.user_status === 1) {
      await $("#loan_app_birth_year").selectByAttribute(
        "value",
        test_data.testData.birth_year_new
      );
      await $("#loan_app_birth_month").selectByAttribute(
        "value",
        test_data.testData.birth_month_new
      );
      await $("#loan_app_birth_day").selectByAttribute(
        "value",
        test_data.testData.birth_day_new
      );
    }
    await $("#loan_app_zip_code_1").setValue(test_data.testData.zip_code_1);
    await $("#loan_app_zip_code_2").setValue(test_data.testData.zip_code_2);
    await $("#loan_app_prefecture_code").selectByAttribute(
      "value",
      test_data.testData.prefecture_code2
    );
    await $("#loan_app_address_city").setValue(test_data.testData.address_city);
    await $("#loan_app_address_detail").setValue(
      test_data.testData.address_detail
    );
    await $("#loan_app_contact_home_1").setValue(
      test_data.testData.contact_home_1
    );
    await $("#loan_app_contact_home_2").setValue(
      test_data.testData.contact_home_2
    );
    await $("#loan_app_contact_home_3").setValue(
      test_data.testData.contact_home_3
    );
    await $("#loan_app_contact_mobile_1").setValue(
      test_data.testData.contact_mobile_1
    );
    await $("#loan_app_contact_mobile_2").setValue(
      test_data.testData.contact_mobile_2
    );
    await $("#loan_app_contact_mobile_3").setValue(
      test_data.testData.contact_mobile_3
    );
    await $("#loan_app_office_phone_1").setValue(
      test_data.testData.contact_phone_1
    );
    await $("#loan_app_office_phone_2").setValue(
      test_data.testData.contact_phone_2
    );
    await $("#loan_app_office_phone_3").setValue(
      test_data.testData.contact_phone_3
    );

    await $(
      ".//label[@for='loan_app_identical_person_" +
        test_data.testData.loan_app_identical_person +
        "']"
    ).click();

    await $("#loan_app_insurance_card_type").selectByAttribute(
      "value",
      test_data.testData.loan_app_insurance_card_type
    );
    await $(
      ".//label[@for='loan_app_contact_to_tel_" +
        test_data.testData.loan_app_contact_to_tel_ +
        "']"
    ).click();
    await $("#loan_app_contact_detail").setValue(
      test_data.testData.contact_detail
    );

    // Screenshot - Step 1 (no error)
    await $("#step1_submit").click();
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).scrollIntoView();
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).click();
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-3"
    );
    await browser.pause(3000);

    await $("#step1_submit").click();
    await browser.pause(3000);

    // Submit Step 2 screen (error)
    await $("#step2_submit").click();

    // Screenshot - Step 2 (error)
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-1"
    );
    await $("h3=当行とのお取引状況等（お得な金利について）").scrollIntoView();
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

    // Submit Step 2
    await $("#step2_submit").click();
    await browser.pause(2000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).scrollIntoView();
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).click();

    // Screenshot - Step 2 (OK)
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-2"
    );
    await browser.pause(3000);

    // Go to Step 3
    await $("#step2_submit").click();
    await browser.pause(2000);

    // Step 3
    await $("h3=お借り入れ希望について").scrollIntoView();
    await browser.pause(3000);

    // Step 3 error
    await $("#step3_submit").click();

    // Screenshot - Step 3 (Error)
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-1"
    );

    if (test_data.testData.amount_check != "1") {
      await $("#loan_app_repayment_year").selectByAttribute(
        "value",
        test_data.testData.repayment_year
      );
      await $("#loan_app_repayment_month").selectByAttribute(
        "value",
        test_data.testData.repayment_month
      );
      await $(
        ".//label[@for='loan_app_use_detail_" +
          test_data.testData.use_detail +
          "']"
      ).click();
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
      if (test_data.testData.introduction_branch_exist == "1") {
        await $("#loan_app_select_introduction_branch").selectByAttribute(
          "value",
          test_data.testData.select_introduction_branch
        );
      }

      await $("#loan_app_bonus_ratio").selectByAttribute(
        "value",
        test_data.testData.bonus_ratio
      );
    }

    await $("#loan_app_bonus_ratio").scrollIntoView();
    var amount = parseInt(test_data.testData.amount);
    if (amount < 50) {
      if (test_data.testData.corona_checkbox == "1") {
        await $(".//label[@for='loan_app_corona_checkbox_1']").click();
      }
    }
    await $(
      ".//label[@for='loan_app_use_detail_" +
        test_data.testData.use_detail +
        "']"
    ).click();
    await browser.pause(3000);

    await $("h3=紹介店").scrollIntoView();
    await browser.pause(3000);

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

    await $("#step3_submit").click();
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).scrollIntoView();
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).click();

    // Screenshot - Step 3 (OK)
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-2"
    );

    // Go to Step 4
    await $("#step3_submit").click();
    await browser.pause(3000);

    // Step 4 (error)
    await $("#step4_submit").click();

    // Screenshot- Step 4 error
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-1"
    );
    await browser.pause(3000);

    // CHECK DEVELOPER CONSOLE
    // Open link in new window
    await browser.newWindow(user_info.userInformation.var_sf_loginurl);
    await browser.pause(5000);

    // Login to org
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    var user_birth, u_email, u_pwd;
    if (test_data.testData.user_status == 0) {
      // Email and password - Existing user (to be used for PG)
      u_email = user_info.userInformation.var_sf_comminuty_loginuser;
      u_pwd = user_info.userInformation.var_sf_comminuty_loginpwd;
    } else if (test_data.testData.user_status == 1) {
      // Email and password - New user (to be used for testing)
      u_email = user_info.userInformation.var_sf_comminuty_loginuser2;
      u_pwd = user_info.userInformation.var_sf_comminuty_loginpwd2;
    }

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.user_status == 1) {
      user_birth =
        test_data.testData.birth_year_new +
        "-0" +
        test_data.testData.birth_month_new +
        "-0" +
        test_data.testData.birth_day_new;
    } else if (test_data.testData.user_status == 0) {
      user_birth =
        test_data.testData.birth_year_old +
        "-0" +
        test_data.testData.birth_month_old +
        "-0" +
        test_data.testData.birth_day_old;
    }

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0001_17 +
        test_data.testData.birthdate_api +
        "=" +
        user_birth +
        " " +
        "and" +
        " " +
        test_data.testData.email_api +
        "=" +
        "'" +
        u_email +
        "'"
    );

    await browser.pause(10000);

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum17 +
        "-1"
    );

    // Switch to loan 50 window
    await browser.switchWindow(test_data.testData.httpurl03);

    const remoteFilePath1 = await browser.uploadFile(
      user_info.userInformation.var_file_Path1
    );
    const remoteFilePath2 = await browser.uploadFile(
      user_info.userInformation.var_file_Path2
    );
    await $("#image_file_upload_file1").addValue(remoteFilePath1);
    await $("#image_file_upload_file2").addValue(remoteFilePath2);

    await $("#loan_app_mail_address").scrollIntoView();
    await $("#loan_app_mail_address").setValue(u_email);
    await $("#loan_app_mail_address_confirmation").setValue(u_email);
    await $("#loan_app_mypage_password").setValue(u_pwd);
    await $("#loan_app_mypage_password_confirmation").setValue(u_pwd);

    // Screenshot - Step 4 (OK)
    await $("#step4_submit").click();
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).scrollIntoView();
    await $(
      ".//input[@value='" + test_data.testData.back_btn_appform + "']"
    ).click();
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-2"
    );

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum19 +
        "-1"
    );

    // Go to 申込み確認 Step
    await $("#step4_submit").click();

    // Screenshot - 申込み確認 Step
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-1"
    );

    // 申込み確認 Step
    await $("#step5_submit").scrollIntoView();
    await $("#step5_submit").click();
    await browser.pause(30000);
    await $(
      ".//*[contains(text(), '" + test_data.testData.app_success + "')]"
    ).waitForExist({ timeout: 60000 });

    // Screenshot - Application submitted page
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-1"
    );
  });
}
