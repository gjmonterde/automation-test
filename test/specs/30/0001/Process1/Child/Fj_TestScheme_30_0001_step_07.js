const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0001-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_30_0001_step_07/11/12/15/16/20/21: Application record creation", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum7 = "7",
      stepNum11 = "11",
      stepNum12 = "12",
      stepNum15 = "15",
      stepNum16 = "16",
      stepNum20 = "20",
      stepNum21 = "21";

    await parent.Open_ApplicationForm();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-1"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    await util.Remove_header(1);
    await browser.pause(5000);

    // Go to Step 1
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).scrollIntoView();
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();
    await browser.pause(1000);

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-2"
    );

    // Input name kana - Error
    await $("#loan_app_name_kana_first").scrollIntoView();
    await $("#loan_app_name_kana_last").setValue(
      test_data.testData.name_kana_last_err
    );
    await $("#loan_app_name_kana_first").setValue(
      test_data.testData.name_kana_first_err
    );
    await $("#loan_app_contact_home_1").setValue(
      test_data.testData.contact_home_1_err
    );
    await $("#loan_app_contact_home_2").setValue(
      test_data.testData.contact_home_2_err
    );
    await $("#loan_app_contact_home_3").setValue(
      test_data.testData.contact_home_3_err
    );
    await $("#loan_app_contact_mobile_1").setValue(
      test_data.testData.contact_mobile_1_err
    );
    await $("#loan_app_contact_mobile_2").setValue(
      test_data.testData.contact_mobile_2_err
    );
    await $("#loan_app_contact_mobile_3").setValue(
      test_data.testData.contact_mobile_3_err
    );
    await $("#loan_app_office_phone_1").setValue(
      test_data.testData.contact_phone_1_err
    );
    await $("#loan_app_office_phone_2").setValue(
      test_data.testData.contact_phone_2_err
    );
    await $("#loan_app_office_phone_3").setValue(
      test_data.testData.contact_phone_3_err
    );

    // Click submit button - Error
    await $("#step1_submit").scrollIntoView();
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 1 Error
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-3"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Refresh
    await browser.refresh();
    await browser.pause(10000);

    // Remove header
    await $("h1=" + test_data.testData.heading).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await util.Remove_header(2);
    await browser.pause(5000);

    // Screenshot - 同意
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-4"
    );

    // Refresh
    await browser.refresh();
    await browser.pause(10000);
    await util.Remove_header(1);
    await browser.pause(5000);

    // Go to Step 1
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).scrollIntoView();
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).waitForClickable({
      timeout: 30000,
    });
    await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    ).click();
    await browser.pause(1000);

    // Step 1 - Fill out - correct
    await $("#loan_app_request_amount").setValue(test_data.testData.amount);
    await $("h3=" + test_data.testData.step1_section).scrollIntoView();
    await $("#loan_app_name_last").setValue(test_data.testData.name_last);
    await $("#loan_app_name_first").setValue(test_data.testData.name_first);
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
    await $("#loan_app_birth_year").selectByAttribute(
      "value",
      test_data.testData.birth_year
    );
    await $("#loan_app_birth_month").selectByAttribute(
      "value",
      test_data.testData.birth_month
    );
    await $("#loan_app_birth_day").selectByAttribute(
      "value",
      test_data.testData.birth_day
    );
    await $("#loan_app_zip_code_1").setValue(test_data.testData.zip_code_1);
    await $("#loan_app_zip_code_2").setValue(test_data.testData.zip_code_2);
    await $("#loan_app_prefecture_code").selectByAttribute(
      "value",
      test_data.testData.prefecture_code
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
        test_data.testData.loan_app_contact_to_tel_2 +
        "']"
    ).click();
    await $(
      ".//label[@for='loan_app_contact_to_tel_" +
        test_data.testData.loan_app_contact_to_tel_3 +
        "']"
    ).click();
    await $("#loan_app_contact_detail").setValue(
      test_data.testData.contact_detail
    );

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-1"
    );
    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum16 +
        "-1"
    );

    // Submit Step 1 data
    await $("#step1_submit").scrollIntoView();
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 2
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-2"
    );

    // Click Step 2 submit - Error
    await $("#step2_submit").scrollIntoView();
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 2
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-3"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-4"
    );

    // Submit Step 1 data
    await $("#step1_submit").scrollIntoView();
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Step 2 - Fill out
    await $("h3=" + test_data.testData.step2_section).scrollIntoView();
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
    await $("#loan_app_repayment").setValue(test_data.testData.repayment);
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
      test_data.testData.office_prefecture_code
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

    // Screenshot - Step 2
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-1"
    );

    // Submit Step 2 data
    await $("#step2_submit").scrollIntoView();
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 3
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-2"
    );

    // Submit Step 3 data -  Error
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 3 error
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-3"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 2
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-4"
    );

    // Submit Step 2
    await $("#step2_submit").scrollIntoView();
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Step 3 - Fill out
    await $("#loan_app_repayment_year").selectByAttribute(
      "value",
      test_data.testData.repayment_year
    );
    await $("#loan_app_repayment_month").selectByAttribute(
      "value",
      test_data.testData.repayment_month
    );
    await $("#loan_app_bonus_ratio").scrollIntoView();
    await $("#loan_app_bonus_ratio").selectByAttribute(
      "value",
      test_data.testData.bonus_ratio
    );

    await $(
      ".//label[@for='loan_app_use_detail_" +
        test_data.testData.use_detail +
        "']"
    ).click();

    await $("#loan_app_payment_name_1").setValue(test_data.testData.payment_1);
    await $("#loan_app_payment_value_1").setValue(
      test_data.testData.payment_value
    );

    const btn_payment_destination = await $("#add_destination");
    var btn_payment_destination_exists =
      await btn_payment_destination.getAttribute("style");
    while (btn_payment_destination_exists != "display: none;") {
      await btn_payment_destination.scrollIntoView();
      await btn_payment_destination.waitForClickable({ timeout: 30000 });
      await btn_payment_destination.click();
      btn_payment_destination_exists =
        await btn_payment_destination.getAttribute("style");
    }

    await $("#loan_app_bank_name_1_2").scrollIntoView();
    await $("#loan_app_bank_name_1_2").setValue(test_data.testData.bank_1);
    await $("#loan_app_borrowing_1_2").setValue(test_data.testData.borrowing_1);
    await $("#loan_app_repayment_1_2").setValue(test_data.testData.repayment_1);

    const btn_bank_1 = await $("#add_bank_name_2");
    var btn_bank_1_exists = await btn_bank_1.getAttribute("style");
    while (btn_bank_1_exists != "display: none;") {
      await btn_bank_1.scrollIntoView();
      await btn_bank_1.waitForClickable({ timeout: 30000 });
      await btn_bank_1.click();
      btn_bank_1_exists = await btn_bank_1.getAttribute("style");
    }

    await $("#loan_app_bank_name_1").scrollIntoView();
    await $("#loan_app_bank_name_1").setValue(test_data.testData.bank_2);
    await $("#loan_app_borrowing_1").setValue(test_data.testData.borrowing_2);
    await $("#loan_app_repayment_1").setValue(test_data.testData.repayment_2);

    const btn_bank_2 = await $("#add_bank_name");
    var btn_bank_2_exists = await btn_bank_2.getAttribute("style");
    while (btn_bank_2_exists != "display: none;") {
      await btn_bank_2.scrollIntoView();
      await btn_bank_2.waitForClickable({ timeout: 30000 });
      await btn_bank_2.click();
      btn_bank_2_exists = await btn_bank_2.getAttribute("style");
    }

    await $("h3=紹介店").scrollIntoView();
    await $(
      ".//label[@for='loan_app_introduction_branch_exist_" +
        test_data.testData.introduction_branch_exist +
        "']"
    ).click();
    await $("#loan_app_reference_form_number").setValue(
      test_data.testData.reference_form_number_1
    );

    await $(
      ".//label[@for='loan_app_question_" + test_data.testData.question + "']"
    ).click();
    if (test_data.testData.question == "99") {
      await $("#loan_app_question_etc").setValue(
        test_data.testData.app_question
      );
    }

    // Screenshot - Step 3
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum15 +
        "-1"
    );

    // Submit Step 3
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum15 +
        "-2"
    );

    // Submit Step 4 - Error
    await $("#step4_submit").scrollIntoView();
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 4 Error
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum15 +
        "-3"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 3
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum15 +
        "-4"
    );

    // Submit Step 3
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Step 4 - Fill out
    await $(".//label[@for='loan_app_attached_skip_1']").click();
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

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-1"
    );
    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum16 +
        "-2"
    );

    // Submit Step 4
    await $("#step4_submit").scrollIntoView();
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - 申込み確認
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-2"
    );

    // Click back button - go to Step 3
    const edit_header = await $(
      ".//h3[contains(text(), '" + test_data.testData.qa_header + "')]/span"
    );
    await edit_header.scrollIntoView();
    await edit_header.click();
    await browser.pause(1000);

    // Change reference number value
    await $("#loan_app_reference_form_number").scrollIntoView();
    await $("#loan_app_reference_form_number").setValue(
      test_data.testData.reference_form_number_2
    );

    // Screenshot - Step 3
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-3"
    );

    // Submit Step 3
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-4"
    );

    // Submit Step 4
    await $("#step4_submit").scrollIntoView();
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - 申込み確認
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-5"
    );
    // Screenshot - 申込み確認
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-1"
    );

    // 申込み確認 Step
    await $("#step5_submit").scrollIntoView();
    await $("#step5_submit").click();
    await $(
      ".//*[contains(text(), '" + test_data.testData.app_created_txt + "')]"
    ).waitForExist({ timeout: 30000 });

    // Screenshot - Application submitted page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-2"
    );
  });
}
