var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_25_data: Create LCD Records manually (data Linkage)", async () => {
    const stepNum = "25"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "admin") {
      // login as admin
      await parent.Login_as_admin();
    }
    // Go to INI record
    await parent.Go_to_INI();

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
        test_data.testData.spec70 +
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
        fj_InitialChk__c: test_data.testData.ini_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,
        fj_SubjectCode__c: test_data.testData.lcd_subject_code_val1,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_val1,
        fj_BasicLoanAccountNo__c:
          test_data.testData.lcd_basic_loan_account_val1,
        fj_LoanName__c: test_data.testData.lcd_loan_name_val1,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_val1,
        fj_BraNo__c: test_data.testData.lcd_bra_no_val1,
        fj_InitialLendingDate__c:
          test_data.testData.lcd_initial_lending_date_val1,
        fj_LastRepaymentDate__c:
          test_data.testData.lcd_last_repayment_date_val1,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_val1,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_val1,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_val1,
        fj_CreditLimit__c: test_data.testData.lcd_credit_limit_val1,
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
        fj_InitialChk__c: test_data.testData.ini_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,
        fj_SubjectCode__c: test_data.testData.lcd_subject_code_val2,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_val2,
        fj_BasicLoanAccountNo__c:
          test_data.testData.lcd_basic_loan_account_val2,
        fj_LoanName__c: test_data.testData.lcd_loan_name_val2,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_val2,
        fj_BraNo__c: test_data.testData.lcd_bra_no_val2,
        fj_InitialLendingDate__c:
          test_data.testData.lcd_initial_lending_date_val2,
        fj_LastRepaymentDate__c:
          test_data.testData.lcd_last_repayment_date_val2,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_val2,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_val2,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_val2,
        fj_CreditLimit__c: test_data.testData.lcd_credit_limit_val2,
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
        fj_InitialChk__c: test_data.testData.ini_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse,
        fj_IncludeSumFlg__c: test_data.testData.isTrue,
        fj_HasOverdue__c: test_data.testData.isTrue,
        fj_SubjectCode__c: test_data.testData.lcd_subject_code_val3,
        fj_CollateralClassification__c:
          test_data.testData.lcd_collateral_classification_val3,
        fj_BasicLoanAccountNo__c:
          test_data.testData.lcd_basic_loan_account_val3,
        fj_LoanName__c: test_data.testData.lcd_loan_name_val3,
        fj_CurrentBalance__c: test_data.testData.lcd_current_balance_val3,
        fj_BraNo__c: test_data.testData.lcd_bra_no_val3,
        fj_InitialLendingDate__c:
          test_data.testData.lcd_initial_lending_date_val3,
        fj_LastRepaymentDate__c:
          test_data.testData.lcd_last_repayment_date_val3,
        fj_HandlingNo__c: test_data.testData.lcd_handling_no_val3,
        fj_InterestRate__c: test_data.testData.lcd_interest_rate_val3,
        fj_GuaranteeNo__c: test_data.testData.lcd_guarantee_no_val3,
        fj_CreditLimit__c: test_data.testData.lcd_credit_limit_val3,
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
    await browser.pause(5000);

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
        test_data.testData.spec70 +
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

    var ssno = 2;
    for (var i = 0; i < test_data.testData.lcd_id_arr.length; i++) {
      // Go to LCD record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.lcd_obj,
        test_data.testData.lcd_id_arr[i]
      );

      ssno = ssno + 1;
      // Screenshot
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      // Screenshot - After Data - New records
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0004 +
          "_" +
          stepNum +
          "-" +
          ssno +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
          fullPageScrollTimeout: 3000,
        }
      );
    }
    // logout
    await parent.Logout();
  });
}
