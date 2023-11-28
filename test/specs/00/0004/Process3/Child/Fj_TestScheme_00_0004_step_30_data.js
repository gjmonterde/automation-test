var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_30_data: Create LCD Record manually (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "30";

    // ★ 新環境適用' New Env Implementation
    // Login as admin
    await parent.Login_as_admin();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    const headerBar_before = await $(".//header[@id='oneHeader']");
    const tabheader_before = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot - Before Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_before, tabheader_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // Create records
    // JSForce connection
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

    // [[LCD] 貸出共通明細] Record Manual Creation(1)
    await conn.sobject("FJ_LoanCommonDetail__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,
        fj_SubjectCode__c: test_data.testData.lcd_subject_code_1,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_1,
        fj_BasicLoanAccountNo__c: test_data.testData.lcd_basic_loan_account_1,
        fj_LoanName__c: test_data.testData.lcd_loan_name_1,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_1,
        fj_BraNo__c: test_data.testData.lcd_bra_no_1,
        fj_InitialLendingDate__c: test_data.testData.lcd_initial_lending_date_1,
        fj_LastRepaymentDate__c: test_data.testData.lcd_last_repayment_date_1,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_1,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_1,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_1,
        fj_CreditLimit__c: test_data.testData.lcd_credit_limit1,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [[LCD] 貸出共通明細] Record Manual Creation(2)
    await conn.sobject("FJ_LoanCommonDetail__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,
        fj_SubjectCode__c: test_data.testData.lcd_subject_code_1,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_1,
        fj_BasicLoanAccountNo__c: test_data.testData.lcd_basic_loan_account_2,
        fj_LoanName__c: test_data.testData.lcd_loan_name_2,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_2,
        fj_BraNo__c: test_data.testData.lcd_bra_no_2,
        fj_InitialLendingDate__c: test_data.testData.lcd_initial_lending_date_2,
        fj_LastRepaymentDate__c: test_data.testData.lcd_last_repayment_date_2,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_2,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_2,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_2,
        fj_CreditLimit__c: test_data.testData.lcd_credit_limit2,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [[LCD] 貸出共通明細] Record Manual Creation(3)
    await conn.sobject("FJ_LoanCommonDetail__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,

        fj_SubjectCode__c: test_data.testData.lcd_subject_code_2,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_2,
        fj_BasicLoanAccountNo__c: test_data.testData.lcd_basic_loan_account_3,
        fj_LoanName__c: test_data.testData.lcd_loan_name_3,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_3,
        fj_BraNo__c: test_data.testData.lcd_bra_no_3,
        fj_InitialLendingDate__c: test_data.testData.lcd_initial_lending_date_3,
        fj_LastRepaymentDate__c: test_data.testData.lcd_last_repayment_date_3,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_3,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_3,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_3,
        fj_CreditLimit__c: test_data.testData.lcd_credit_limit3,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [[LCD] 貸出共通明細] Record Manual Creation(4)
    await conn.sobject("FJ_LoanCommonDetail__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,

        fj_SubjectCode__c: test_data.testData.lcd_subject_code_2,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_2,
        fj_BasicLoanAccountNo__c: test_data.testData.lcd_basic_loan_account_4,
        fj_LoanName__c: test_data.testData.lcd_loan_name_4,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_4,
        fj_BraNo__c: test_data.testData.lcd_bra_no_4,
        fj_InitialLendingDate__c: test_data.testData.lcd_initial_lending_date_4,
        fj_LastRepaymentDate__c: test_data.testData.lcd_last_repayment_date_4,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_4,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_4,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_4,
        fj_CreditLimit__c: test_data.testData.lcd_credit_limit4,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [[LCD] 貸出共通明細] Record Manual Creation(5)
    await conn.sobject("FJ_LoanCommonDetail__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,

        fj_SubjectCode__c: test_data.testData.lcd_subject_code_3,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_3,
        fj_BasicLoanAccountNo__c: test_data.testData.lcd_basic_loan_account_5,
        fj_LoanName__c: test_data.testData.lcd_loan_name_5,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_5,
        fj_BraNo__c: test_data.testData.lcd_bra_no_5,
        fj_InitialLendingDate__c: test_data.testData.lcd_initial_lending_date_5,
        fj_LastRepaymentDate__c: test_data.testData.lcd_last_repayment_date_5,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_5,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_5,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_5,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [[LCD] 貸出共通明細] Record Manual Creation(6)
    await conn.sobject("FJ_LoanCommonDetail__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,

        fj_SubjectCode__c: test_data.testData.lcd_subject_code_3,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_3,
        fj_BasicLoanAccountNo__c: test_data.testData.lcd_basic_loan_account_6,
        fj_LoanName__c: test_data.testData.lcd_loan_name_6,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_6,
        fj_BraNo__c: test_data.testData.lcd_bra_no_6,
        fj_InitialLendingDate__c: test_data.testData.lcd_initial_lending_date_6,
        fj_LastRepaymentDate__c: test_data.testData.lcd_last_repayment_date_6,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_6,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_6,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_6,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // Refresh browser
    await browser.refresh();
    await browser.pause(10000);

    // Get LCD Record
    await parent.Get_LCD_Record();

    const headerBar_after = await $(".//header[@id='oneHeader']");
    const tabheader_after = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await $(".//*[@class='main-container slds-grid']").$(function () {
      var left = document.getElementsByClassName("col left-col slds-col"),
        middle = document.getElementsByClassName("col main-col slds-col"),
        right = document.getElementsByClassName("col right-col slds-col");
      var height = Math.max(
        left.offsetHeight,
        middle.offsetHeight,
        right.offsetHeight
      );
      this.style = "height:" + height + "px!important";
    });
    await browser.pause(10000);

    // Screenshot - After Data
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.lcd_id_arr.length > 0) {
      let ssno = 2;
      for (var i = 0; i < test_data.testData.lcd_id_arr.length; i++) {
        // Go to LCD record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_LCD(test_data.testData.lcd_id_arr[i]);

        // Screenshot
        const highlights2 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar2 = await $(".//header[@id='oneHeader']");
        const tabheader2 = await $(
          ".//div[@class='slds-no-print oneAppNavContainer']"
        );
        ssno = ssno + 1;
        // ★ 新環境適用' New Env Implementation
        await browser.saveFullPageScreen(
          user_info.userInformation.screenshot +
            test_data.testData.spec00 +
            "_" +
            test_data.testData.tab0004 +
            "_" +
            stepNum +
            "-" +
            ssno +
            test_data.testData.data,
          {
            hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
          }
        );
      }
    }
  });
}
