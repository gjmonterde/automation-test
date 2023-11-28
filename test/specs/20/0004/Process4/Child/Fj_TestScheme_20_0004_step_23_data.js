var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-4");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_23_data: The inquiry result is created as 「貸出共通明細」 Lending Common Line record.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "23";

    // Jsforce connection
    var conn = new jsforce.Connection({
      loginUrl: user_info.userInformation.var_sf_loginurl,
    });

    await conn.login(
      user_info.userInformation.var_sf_loginuser_admin,
      user_info.userInformation.var_sf_loginpwd_admin,
      function (err, res) {
        if (err) {
          return console.log(err);
        }
      }
    );

    // Login as admin
    await parent.Login_Admin();

    // Go to 貸出共通明細 related list
    await util.Open_SF_Record_URL(
      2,
      user_info.object.ini_obj,
      test_data.testData.ini3_id,
      user_info.object.ini_lcd_rel
    );

    // Take 銀行審査 page screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 6000,
      }
    );
    await browser.pause(3000);

    var update_fj_InitialChk__c_id3 = test_data.testData.ini3_id;

    // 貸出共通明細 Record Manual Creation
    await conn.sobject("FJ_LoanCommonDetail__c").create(
      [
        {
          // LCD(1)
          fj_InitialChk__c: update_fj_InitialChk__c_id3,
          fj_ProductCode__c: test_data.testData.product_code1,
          fj_SubjectCode__c: test_data.testData.subject_code1,
          fj_CollateralClassification__c: test_data.testData.col_class1,
          fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_acc_no1,
          fj_LoanName__c: test_data.testData.loan_name1,
          fj_DealerName__c: test_data.testData.dealer_name1,
          fj_CurrentBalance__c: test_data.testData.current_balance1,
          fj_BraNo__c: test_data.testData.bra_no1,
          fj_InitialLendingDate__c: test_data.testData.init_lending_date1,
          fj_HandlingNo__c: test_data.testData.handling_no1,
          fj_LastRepaymentDate__c: test_data.testData.last_repayment_date1,
          fj_InitialLoanAmount__c: test_data.testData.init_loan_amount1,
          fj_GuaranteeOrganCode__c: test_data.testData.gua_organ_code1,
          fj_InterestRate__c: test_data.testData.int_rate1,
          fj_GuaranteeNo__c: test_data.testData.gua_no1,
          fj_CreditLimit__c: test_data.testData.credit_limit1,
        },
        {
          // LCD(2)
          fj_InitialChk__c: update_fj_InitialChk__c_id3,
          fj_IncludeSumFlg__c: test_data.testData.isTrue,
          fj_SubjectCode__c: test_data.testData.subject_code2,
          fj_CollateralClassification__c: test_data.testData.col_class2,
          fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_acc_no2,
          fj_LoanName__c: test_data.testData.loan_name2,
          fj_DealerName__c: test_data.testData.dealer_name2,
          fj_CurrentBalance__c: test_data.testData.current_balance2,
          fj_BraNo__c: test_data.testData.bra_no2,
          fj_InitialLendingDate__c: test_data.testData.init_lending_date2,
          fj_HandlingNo__c: test_data.testData.handling_no2,
          fj_LastRepaymentDate__c: test_data.testData.last_repayment_date2,
          fj_InitialLoanAmount__c: test_data.testData.init_loan_amount2,
          fj_InterestRate__c: test_data.testData.int_rate2,
          fj_GuaranteeNo__c: test_data.testData.gua_no2,
          fj_CreditLimit__c: test_data.testData.credit_limit2,
        },
        {
          // LCD(3)
          fj_InitialChk__c: update_fj_InitialChk__c_id3,
          fj_SubjectCode__c: test_data.testData.subject_code3,
          fj_CollateralClassification__c: test_data.testData.col_class3,
          fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_acc_no3,
          fj_LoanName__c: test_data.testData.loan_name3,
          fj_DealerName__c: test_data.testData.dealer_name3,
          fj_CurrentBalance__c: test_data.testData.current_balance3,
          fj_BraNo__c: test_data.testData.bra_no3,
          fj_InitialLendingDate__c: test_data.testData.init_lending_date3,
          fj_HandlingNo__c: test_data.testData.handling_no3,
          fj_InitialLoanAmount__c: test_data.testData.init_loan_amount3,
          fj_InterestRate__c: test_data.testData.int_rate3,
          fj_GuaranteeNo__c: test_data.testData.gua_no3,
          fj_CreditLimit__c: test_data.testData.credit_limit3,
        },
        {
          // LCD(4)
          fj_InitialChk__c: update_fj_InitialChk__c_id3,
          fj_IncludeSumFlg__c: test_data.testData.isTrue,
          fj_SubjectCode__c: test_data.testData.subject_code4,
          fj_CollateralClassification__c: test_data.testData.col_class4,
          fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_acc_no4,
          fj_LoanName__c: test_data.testData.loan_name4,
          fj_DealerName__c: test_data.testData.dealer_name4,
          fj_CurrentBalance__c: test_data.testData.current_balance4,
          fj_BraNo__c: test_data.testData.bra_no4,
          fj_InitialLendingDate__c: test_data.testData.init_lending_date4,
          fj_HandlingNo__c: test_data.testData.handling_no4,
          fj_LastRepaymentDate__c: test_data.testData.last_repayment_date4,
          fj_InitialLoanAmount__c: test_data.testData.init_loan_amount4,
          fj_InterestRate__c: test_data.testData.int_rate4,
          fj_GuaranteeNo__c: test_data.testData.gua_no4,
          fj_CreditLimit__c: test_data.testData.credit_limit4,
        },
        {
          // LCD(5)
          fj_InitialChk__c: update_fj_InitialChk__c_id3,
          fj_SubjectCode__c: test_data.testData.subject_code5,
          fj_CollateralClassification__c: test_data.testData.col_class5,
          fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_acc_no5,
          fj_LoanName__c: test_data.testData.loan_name5,
          fj_DealerName__c: test_data.testData.dealer_name5,
          fj_CurrentBalance__c: test_data.testData.current_balance5,
          fj_BraNo__c: test_data.testData.bra_no5,
          fj_InitialLendingDate__c: test_data.testData.init_lending_date5,
          fj_HandlingNo__c: test_data.testData.handling_no5,
          fj_InitialLoanAmount__c: test_data.testData.init_loan_amount5,
          fj_InterestRate__c: test_data.testData.int_rate5,
          fj_GuaranteeNo__c: test_data.testData.gua_no5,
          fj_CreditLimit__c: test_data.testData.credit_limit5,
        },
        {
          // LCD(6)
          fj_InitialChk__c: update_fj_InitialChk__c_id3,
          fj_IncludeSumFlg__c: test_data.testData.isTrue,
          fj_SubjectCode__c: test_data.testData.subject_code6,
          fj_CollateralClassification__c: test_data.testData.col_class6,
          fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_acc_no6,
          fj_LoanName__c: test_data.testData.loan_name6,
          fj_DealerName__c: test_data.testData.dealer_name6,
          fj_CurrentBalance__c: test_data.testData.current_balance6,
          fj_BraNo__c: test_data.testData.bra_no6,
          fj_InitialLendingDate__c: test_data.testData.init_lending_date6,
          fj_HandlingNo__c: test_data.testData.handling_no6,
          fj_LastRepaymentDate__c: test_data.testData.last_repayment_date6,
          fj_InitialLoanAmount__c: test_data.testData.init_loan_amount6,
          fj_GuaranteeOrganCode__c: test_data.testData.gua_organ_code6,
          fj_InterestRate__c: test_data.testData.int_rate6,
          fj_GuaranteeNo__c: test_data.testData.gua_no6,
        },
      ],
      function (err, rets) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < rets.length; i++) {
          if (rets[i].success) {
            console.log("Created record id : " + rets[i].id);
          }
        }
      }
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(5000);

    // Take 銀行審査 page screenshot
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
