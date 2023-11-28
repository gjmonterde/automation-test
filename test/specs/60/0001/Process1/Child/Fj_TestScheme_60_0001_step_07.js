const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
const parent = require("../Parent/Fj_TestScheme_60_0001-1");

export default async function suite() {
  it("Fj_TestScheme_60_0001_step_07/11/12/14/16/20/21: Application record creation", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum7 = "7",
      stepNum11 = "11",
      stepNum12 = "12",
      stepNum14 = "14",
      stepNum16 = "16",
      stepNum20 = "20",
      stepNum21 = "21";

    // Remove header
    await parent.Remove_Header_App();

    // Go to Step 1
    await $(
      ".//button[@type='" + test_data.testData.submit_btn + "']"
    ).scrollIntoView();
    await $(".//button[@type='" + test_data.testData.submit_btn + "']").click();
    await browser.pause(1000);

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
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-1"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Refresh
    await browser.refresh();
    await browser.pause(3000);
    await parent.Remove_Header_App();

    // Go to Step 1
    await $(
      ".//button[@type='" + test_data.testData.submit_btn + "']"
    ).scrollIntoView();
    await $(
      ".//button[@type='" + test_data.testData.submit_btn + "']"
    ).waitForClickable({
      timeout: 30000,
    });
    await $(".//button[@type='" + test_data.testData.submit_btn + "']").click();
    await browser.pause(1000);

    // Step 1 - Fill out - correct
    await $("h3=" + test_data.testData.h3_app).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
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
    await $(
      ".//input[@class='zip_search c-button']"
    ).click(); /*click zip search button to automatically select corresponding prefecture_code
    and address_city*/

    //await $("#loan_app_address_city").setValue(test_data.testData.address_city);
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
        test_data.testData.loan_app_contact_to_tel_1 +
        "']"
    ).click();

    await $("#loan_app_contact_detail").setValue(
      test_data.testData.contact_detail
    );

    // Screenshot - Step 1
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum7 +
        "-2"
    );

    // Submit Step 1 data
    await $("#step1_submit").scrollIntoView();
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Click Step 2 submit - Error
    await $("#step2_submit").scrollIntoView();
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 2
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-1"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Submit Step 1 data
    await $("#step1_submit").scrollIntoView();
    await $("#step1_submit").click();
    await browser.pause(1000);

    // Step 2 - Fill out
    await $("h3=" + test_data.testData.h3_app02).$(function () {
      this.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
    await $("#loan_app_card_password").setValue(
      test_data.testData.loan_app_card_password
    );
    await $("#loan_app_card_password_confirmation").setValue(
      test_data.testData.card_password_confirmation
    );
    await $("#loan_app_immediate_borrowing_amount").setValue(
      test_data.testData.loan_app_immediate_borrowing_amount
    );
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

    // Submit Step 2
    await $("#step2_submit").scrollIntoView();
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 2
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-2"
    );

    // Submit Step 2 data
    await $("#step2_submit").scrollIntoView();
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Submit Step 3 data -  Error
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 3 error
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-1"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Submit Step 2
    await $("#step2_submit").scrollIntoView();
    await $("#step2_submit").click();
    await browser.pause(1000);

    // Step 3 - Fill out
    // Add bank name
    const add_button = await $("#add_bank_name");

    for (let i = 0; i < 8; i++) {
      await add_button.scrollIntoView({ block: "center" });
      await add_button.waitForClickable({ timeout: 30000 });
      await add_button.click();
      await browser.pause(1000);
    }

    // Bank 1
    await $(
      ".//th[contains(.,'" + test_data.testData.th01 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_1").setValue(test_data.testData.bank_1);
    await $("#loan_app_borrowing_1").setValue(test_data.testData.borrowing_1);
    await $("#loan_app_repayment_1").setValue(test_data.testData.repayment_1);

    // Bank 2
    await $(
      ".//th[contains(.,'" + test_data.testData.th02 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_2").setValue(test_data.testData.bank_2);
    await $("#loan_app_borrowing_2").setValue(test_data.testData.borrowing_2);
    await $("#loan_app_repayment_2").setValue(test_data.testData.repayment_2);

    // Bank 3
    await $(
      ".//th[contains(.,'" + test_data.testData.th03 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_3").setValue(test_data.testData.bank_3);
    await $("#loan_app_borrowing_3").setValue(test_data.testData.borrowing_3);
    await $("#loan_app_repayment_3").setValue(test_data.testData.repayment_3);

    // Bank 4
    await $(
      ".//th[contains(.,'" + test_data.testData.th04 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_4").setValue(test_data.testData.bank_4);
    await $("#loan_app_borrowing_4").setValue(test_data.testData.borrowing_4);
    await $("#loan_app_repayment_4").setValue(test_data.testData.repayment_4);

    // Bank 5
    await $(
      ".//th[contains(.,'" + test_data.testData.th05 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_5").setValue(test_data.testData.bank_5);
    await $("#loan_app_borrowing_5").setValue(test_data.testData.borrowing_5);
    await $("#loan_app_repayment_5").setValue(test_data.testData.repayment_5);

    // Bank 6
    await $(
      ".//th[contains(.,'" + test_data.testData.th06 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_6").setValue(test_data.testData.bank_6);
    await $("#loan_app_borrowing_6").setValue(test_data.testData.borrowing_6);
    await $("#loan_app_repayment_6").setValue(test_data.testData.repayment_6);

    // Bank 7
    await $(
      ".//th[contains(.,'" + test_data.testData.th07 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_7").setValue(test_data.testData.bank_7);
    await $("#loan_app_borrowing_7").setValue(test_data.testData.borrowing_7);
    await $("#loan_app_repayment_7").setValue(test_data.testData.repayment_7);

    // Bank 8
    await $(
      ".//th[contains(.,'" + test_data.testData.th08 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_8").setValue(test_data.testData.bank_8);
    await $("#loan_app_borrowing_8").setValue(test_data.testData.borrowing_8);
    await $("#loan_app_repayment_8").setValue(test_data.testData.repayment_8);

    // Bank 9
    await $(
      ".//th[contains(.,'" + test_data.testData.th09 + "')]"
    ).scrollIntoView({ block: "center" });
    await $("#loan_app_bank_name_9").setValue(test_data.testData.bank_9);
    await $("#loan_app_borrowing_9").setValue(test_data.testData.borrowing_9);
    await $("#loan_app_repayment_9").setValue(test_data.testData.repayment_9);

    // Bank 10
    await $(
      ".//th[contains(.,'" + test_data.testData.th10 + "')]"
    ).scrollIntoView({
      block: "center",
    });
    await $("#loan_app_bank_name_10").setValue(test_data.testData.bank_10);
    await $("#loan_app_borrowing_10").setValue(test_data.testData.borrowing_10);
    await $("#loan_app_repayment_10").setValue(test_data.testData.repayment_10);

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

    // Submit Step 3 data -  Error
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 3
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-2"
    );

    // Submit Step 3
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Submit Step 4 - Error
    await $("#step4_submit").scrollIntoView();
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - Step 4 Error
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-1"
    );

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Submit Step 3
    await $("#step3_submit").scrollIntoView();
    await $("#step3_submit").click();
    await browser.pause(1000);

    // Step 4 - Fill out
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

    // Submit Step 4 - Error
    await $("#step4_submit").scrollIntoView();
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Click back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Screenshot - Step 4
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum14 +
        "-2"
    );

    // Submit Step 4
    await $("#step4_submit").scrollIntoView();
    await $("#step4_submit").click();
    await browser.pause(1000);

    // Screenshot - 申込み確認
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-1"
    );

    // 申込み確認 Step
    await $("#step5_submit").scrollIntoView();
    await $("#step5_submit").click();
    await $(
      ".//*[contains(text(), '" + test_data.testData.app_success + "')]"
    ).waitForExist({ timeout: 60000 });

    // Screenshot - Application submitted page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-1"
    );
    await browser.pause(5000);

    // Login as admin
    await parent.Login_as_Admin();

    // Go to Account detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Take screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum16 +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, highlights, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(3000);
  });
}
