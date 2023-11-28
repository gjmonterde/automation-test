var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_25_data: Create LCD Record manually (Data Linkage)", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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
        fj_ExistingLoanCollectionFlg__c:
          test_data.testData.has_existing_loan_collection,
        fj_IncludeSumFlg__c: test_data.testData.has_include_sum,
        fj_HasOverdue__c: test_data.testData.has_over_due,

        fj_SubjectCode__c: test_data.testData.subject_code_1,
        fj_CollateralClassification__c:
          test_data.testData.collateral_classification_1,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_account_1,
        fj_LoanName__c: test_data.testData.loan_name_1,
        fj_CurrentBalance__c: test_data.testData.current_balance_1,
        fj_BraNo__c: test_data.testData.bra_no_1,
        fj_InitialLendingDate__c: test_data.testData.initial_lending_date_1,
        fj_LastRepaymentDate__c: test_data.testData.last_repayment_date_1,
        fj_HandlingNo__c: test_data.testData.handling_no_1,
        fj_InterestRate__c: test_data.testData.interest_rate_1,
        fj_GuaranteeNo__c: test_data.testData.guarantee_no_1,
        fj_CreditLimit__c: test_data.testData.credit_limit1,
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
        fj_ExistingLoanCollectionFlg__c:
          test_data.testData.has_existing_loan_collection,
        fj_IncludeSumFlg__c: test_data.testData.has_include_sum,
        fj_HasOverdue__c: test_data.testData.has_over_due,

        fj_SubjectCode__c: test_data.testData.subject_code_1,
        fj_CollateralClassification__c:
          test_data.testData.collateral_classification_1,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_account_2,
        fj_LoanName__c: test_data.testData.loan_name_2,
        fj_CurrentBalance__c: test_data.testData.current_balance_2,
        fj_BraNo__c: test_data.testData.bra_no_2,
        fj_InitialLendingDate__c: test_data.testData.initial_lending_date_2,
        fj_LastRepaymentDate__c: test_data.testData.last_repayment_date_2,
        fj_HandlingNo__c: test_data.testData.handling_no_2,
        fj_InterestRate__c: test_data.testData.interest_rate_2,
        fj_GuaranteeNo__c: test_data.testData.guarantee_no_2,
        fj_CreditLimit__c: test_data.testData.credit_limit2,
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
        fj_ExistingLoanCollectionFlg__c:
          test_data.testData.has_existing_loan_collection,
        fj_IncludeSumFlg__c: test_data.testData.has_include_sum,
        fj_HasOverdue__c: test_data.testData.has_over_due,

        fj_SubjectCode__c: test_data.testData.subject_code_2,
        fj_CollateralClassification__c:
          test_data.testData.collateral_classification_2,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_account_3,
        fj_LoanName__c: test_data.testData.loan_name_3,
        fj_CurrentBalance__c: test_data.testData.current_balance_3,
        fj_BraNo__c: test_data.testData.bra_no_3,
        fj_InitialLendingDate__c: test_data.testData.initial_lending_date_3,
        fj_LastRepaymentDate__c: test_data.testData.last_repayment_date_3,
        fj_HandlingNo__c: test_data.testData.handling_no_3,
        fj_InterestRate__c: test_data.testData.interest_rate_3,
        fj_GuaranteeNo__c: test_data.testData.guarantee_no_3,
        fj_CreditLimit__c: test_data.testData.credit_limit3,
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
        fj_ExistingLoanCollectionFlg__c:
          test_data.testData.has_existing_loan_collection,
        fj_IncludeSumFlg__c: test_data.testData.has_include_sum,
        fj_HasOverdue__c: test_data.testData.has_over_due,

        fj_SubjectCode__c: test_data.testData.subject_code_2,
        fj_CollateralClassification__c:
          test_data.testData.collateral_classification_2,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_account_4,
        fj_LoanName__c: test_data.testData.loan_name_4,
        fj_CurrentBalance__c: test_data.testData.current_balance_4,
        fj_BraNo__c: test_data.testData.bra_no_4,
        fj_InitialLendingDate__c: test_data.testData.initial_lending_date_4,
        fj_LastRepaymentDate__c: test_data.testData.last_repayment_date_4,
        fj_HandlingNo__c: test_data.testData.handling_no_4,
        fj_InterestRate__c: test_data.testData.interest_rate_4,
        fj_GuaranteeNo__c: test_data.testData.guarantee_no_4,
        fj_CreditLimit__c: test_data.testData.credit_limit4,
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
        fj_ExistingLoanCollectionFlg__c:
          test_data.testData.has_existing_loan_collection,
        fj_IncludeSumFlg__c: test_data.testData.has_include_sum,
        fj_HasOverdue__c: test_data.testData.has_over_due,

        fj_SubjectCode__c: test_data.testData.subject_code_3,
        fj_CollateralClassification__c:
          test_data.testData.collateral_classification_3,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_account_5,
        fj_LoanName__c: test_data.testData.loan_name_5,
        fj_CurrentBalance__c: test_data.testData.current_balance_5,
        fj_BraNo__c: test_data.testData.bra_no_5,
        fj_InitialLendingDate__c: test_data.testData.initial_lending_date_5,
        fj_LastRepaymentDate__c: test_data.testData.last_repayment_date_5,
        fj_HandlingNo__c: test_data.testData.handling_no_5,
        fj_InterestRate__c: test_data.testData.interest_rate_5,
        fj_GuaranteeNo__c: test_data.testData.guarantee_no_5,
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
        fj_ExistingLoanCollectionFlg__c:
          test_data.testData.has_existing_loan_collection,
        fj_IncludeSumFlg__c: test_data.testData.has_include_sum,
        fj_HasOverdue__c: test_data.testData.has_over_due,

        fj_SubjectCode__c: test_data.testData.subject_code_3,
        fj_CollateralClassification__c:
          test_data.testData.collateral_classification_3,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_account_6,
        fj_LoanName__c: test_data.testData.loan_name_6,
        fj_CurrentBalance__c: test_data.testData.current_balance_6,
        fj_BraNo__c: test_data.testData.bra_no_6,
        fj_InitialLendingDate__c: test_data.testData.initial_lending_date_6,
        fj_LastRepaymentDate__c: test_data.testData.last_repayment_date_6,
        fj_HandlingNo__c: test_data.testData.handling_no_6,
        fj_InterestRate__c: test_data.testData.interest_rate_6,
        fj_GuaranteeNo__c: test_data.testData.guarantee_no_6,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // Refresh browser
    browser.refresh();
    await browser.pause(5000);

    // Get LCD Record
    await parent.Get_LCD_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.lcd_array1 = test_data.testData.lcd_array1.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.Id === thing.Id && t.Name === thing.Name)
    );

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
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
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

    // Loop through the array to determine LCD records
    for (var lcd = 0; lcd < test_data.testData.lcd_array1.length; lcd++) {
      var record = test_data.testData.lcd_array1[lcd];

      // Go to LCD record
      await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, record.Id);

      var screenshotCountLCD = 3 + lcd;

      const headerBar_lcd = await $(".//header[@id='oneHeader']");
      const tabheader_lcd = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_lcd = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New records
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec63_1 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          screenshotCountLCD +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar_lcd, tabheader_lcd, highlights_lcd],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
