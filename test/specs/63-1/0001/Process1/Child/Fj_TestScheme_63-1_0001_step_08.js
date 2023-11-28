const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_08/09/10/11/12/15/16/20/21: Application record creation", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum8 = "8";
    const stepNum9 = "9";
    const stepNum10 = "10";
    const stepNum11 = "11";
    const stepNum12 = "12";
    const stepNum15 = "15";
    const stepNum16 = "16";
    const stepNum20 = "20";
    const stepNum21 = "21";

    //**STEP1 Application Record (Step_08,09,10) */
    // Go to Loan 63 application form
    await parent.Open_Application_Form();

    // Click 同意する button
    const button_submit_step1 = await $(
      ".//button[@type='" + test_data.testData.submit_btn + "']"
    );
    await button_submit_step1.scrollIntoView();
    await button_submit_step1.waitForClickable({
      timeout: 30000,
    });
    await button_submit_step1.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum8 +
        "-1"
    );

    //************************************************ */
    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum9 +
        "-1"
    );

    //*********************************************** */
    // Click 次へ button for error checking blank values
    const step1_submit_blank = await $("#step1_submit");
    await step1_submit_blank.scrollIntoView();
    await step1_submit_blank.waitForClickable({
      timeout: 30000,
    });
    await step1_submit_blank.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum10 +
        "-1"
    );

    // Populate fields with error values
    await $(".//label[@for='loan_app_identical_person_01']").click();
    await $("#loan_app_insurance_card_type").selectByAttribute(
      "value",
      test_data.testData.loan_app_insurance_card_type
    );
    await $("#loan_app_contact_phone_1").setValue(
      test_data.testData.error_loan_app_contact_phone_1
    );
    await $("#loan_app_contact_phone_2").setValue(
      test_data.testData.error_loan_app_contact_phone_2
    );
    await $("#loan_app_contact_phone_3").setValue(
      test_data.testData.error_loan_app_contact_phone_3
    );
    await $("#loan_app_contact_detail").setValue(
      test_data.testData.contact_detail
    );
    await browser.pause(1000);

    // Press back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Click 同意する button
    const button_submit_step1_error = await $(
      ".//button[@type='" + test_data.testData.submit_btn + "']"
    );
    await button_submit_step1_error.scrollIntoView();
    await button_submit_step1_error.waitForClickable({
      timeout: 30000,
    });
    await button_submit_step1_error.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum10 +
        "-2"
    );

    // Populate fields with valid values
    await $(
      ".//label[@for='loan_app_identical_person_" +
        test_data.testData.loan_app_identical_person +
        "']"
    ).click();
    await browser.pause(1000);
    await $("#loan_app_insurance_card_type").selectByAttribute(
      "value",
      test_data.testData.loan_app_insurance_card_type
    );
    await browser.pause(1000);
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
    await browser.pause(1000);

    // Submit Step 1 and back
    const step1_submit_step1_ok = await $("#step1_submit");
    await step1_submit_step1_ok.scrollIntoView();
    await step1_submit_step1_ok.waitForClickable({
      timeout: 30000,
    });
    await step1_submit_step1_ok.click();
    await browser.pause(1000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum10 +
        "-3"
    );
    await browser.pause(1000);

    //**STEP2 Application Record (Step_11) */
    // Click 次へ button
    await step1_submit_step1_ok.scrollIntoView();
    await step1_submit_step1_ok.waitForClickable({
      timeout: 30000,
    });
    await step1_submit_step1_ok.click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-1"
    );
    await browser.pause(2000);

    // Click 次へ button for error checking blank values
    const step2_submit_blank = await $("#step2_submit");
    await step2_submit_blank.scrollIntoView();
    await step2_submit_blank.waitForClickable({
      timeout: 30000,
    });
    await step2_submit_blank.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-2"
    );
    await browser.pause(2000);

    // Step 2 - Fill out valid values
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

    // Submit - Step 2 and then go Back
    const step2_submit_valid = await $("#step2_submit");
    await step2_submit_valid.waitForClickable({
      timeout: 30000,
    });
    await step2_submit_valid.click();
    await browser.pause(1000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum11 +
        "-3"
    );

    //**STEP3 Application Record (Step_12) */
    // Click 次へ button
    await step2_submit_valid.scrollIntoView();
    await step2_submit_valid.waitForClickable({
      timeout: 30000,
    });
    await step2_submit_valid.click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-1"
    );
    await browser.pause(2000);

    // Click 次へ button for error checking blank values
    const step3_submit_blank = await $("#step3_submit");
    await step3_submit_blank.scrollIntoView();
    await step3_submit_blank.waitForClickable({
      timeout: 30000,
    });
    await step3_submit_blank.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-2"
    );
    await browser.pause(2000);

    // Step 3 fill out valid values
    await $("h3=お借り入れ希望について").scrollIntoView();
    await $("#loan_app_use_detail_etc").setValue(test_data.testData.use_detail);
    await $(".//label[@for='loan_app_introduction_branch_exist_2']").click();
    await $(".//label[@for='loan_app_question_99']").click();
    await $("#loan_app_question_etc").setValue(test_data.testData.app_question);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum12 +
        "-3"
    );

    //**STEP4 Application Record (Step_15,16) */
    // Click 次へ button
    const step3_submit_valid = await $("#step3_submit");
    await step3_submit_valid.scrollIntoView();
    await step3_submit_valid.waitForClickable({
      timeout: 30000,
    });
    await step3_submit_valid.click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum15 +
        "-1"
    );
    await browser.pause(2000);

    // Click 次へ button for error checking blank values
    const step4_submit_blank = await $("#step4_submit");
    await step4_submit_blank.scrollIntoView();
    await step4_submit_blank.waitForClickable({
      timeout: 30000,
    });
    await step4_submit_blank.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum15 +
        "-2"
    );
    await browser.pause(2000);

    //*********************************************** */
    // Fill out step 4 valid values
    await $("h3=顔写真付き本人確認資料").scrollIntoView();
    await $(".//label[@for='loan_app_attached_skip_1']").click();
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

    // Submit - Step 4 and then go Back
    const step4_submit_valid = await $("#step4_submit");
    await step4_submit_valid.waitForClickable({
      timeout: 30000,
    });
    await step4_submit_valid.click();
    await browser.pause(1000);
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum16 +
        "-1"
    );
    await browser.pause(2000);

    // Go to salesforce org for checking existing user with the same birth date and email
    await browser.newWindow(user_info.userInformation.var_sf_loginurl);
    await browser.pause(5000);

    // Login as Tantou1
    await parent.Login_as_Tantou1();

    // Get Account record
    await parent.Get_Account_Record();

    // Go to account record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.account_obj,
      test_data.testData.account_id
    );

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum16 +
        "-2",

      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );

    // Switch to application form page
    await browser.switchWindow(
      test_data.testData.httpurl02 + "&cli=" + test_data.testData.input_key
    );
    await browser.pause(2000);

    //**CONFIRMATION SCREEN Application Record (Step_15,20) */
    // Click 次へ button
    await step4_submit_valid.scrollIntoView();
    await step4_submit_valid.waitForClickable({
      timeout: 30000,
    });
    await step4_submit_valid.click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-1"
    );
    await browser.pause(2000);

    // Press back button go step 4
    const back_btn = await $(".//input[@class='c_btn c_btn_sub']");
    await back_btn.scrollIntoView();
    await back_btn.waitForClickable({
      timeout: 30000,
    });
    await back_btn.click();
    await browser.pause(1000);

    // Press back button go step 3
    await back_btn.scrollIntoView();
    await back_btn.waitForClickable({
      timeout: 30000,
    });
    await back_btn.click();
    await browser.pause(1000);

    // Set value 資金使途です修正 for Step 3
    await $("#loan_app_use_detail_etc").setValue("");
    await $("#loan_app_use_detail_etc").setValue(
      test_data.testData.use_detail_append
    );
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-2"
    );

    // Click 次へ button go to step 4
    const step3_submit_update = await $("#step3_submit");
    await step3_submit_update.scrollIntoView();
    await step3_submit_update.waitForClickable({
      timeout: 30000,
    });
    await step3_submit_update.click();
    await browser.pause(2000);

    // Click 次へ button go to last step
    await step4_submit_valid.scrollIntoView();
    await step4_submit_valid.waitForClickable({
      timeout: 30000,
    });
    await step4_submit_valid.click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum20 +
        "-3"
    );

    //**COMPLETION SCREEN Application Record - step_21 */
    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-1"
    );
    await browser.pause(2000);

    // Click 上記の内容で申し込む button
    const step5_submit = await $("#step5_submit");
    await step5_submit.scrollIntoView();
    await step5_submit.waitForClickable({
      timeout: 30000,
    });
    await step5_submit.click();
    await $(
      ".//*[contains(text(), '" + test_data.testData.app_success + "')]"
    ).waitForExist({ timeout: 60000 });

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum21 +
        "-2"
    );
    await browser.pause(1000);
  });
}
