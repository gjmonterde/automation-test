var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_22_data: Create SCI Record manually (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

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
    // ★ 新環境適用' New Env Implementation
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
    // ★ 新環境適用' New Env Implementation
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

    // [SCI] スコアリングに必要な情報 Record Manual Creation(1)
    await conn.sobject("FJ_ScoringInfo__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_AccountOpenDate__c: test_data.testData.sci_account_open_date1,
        fj_CIF_CardLoan__c: test_data.testData.isTrue,
        fj_CIF_PayrollTransfer__c: test_data.testData.isTrue,
        fj_CIF_HousingLoan__c: test_data.testData.isTrue,
        fj_CIF_JCB__c: test_data.testData.isTrue,
        fj_CIF_NHK__c: test_data.testData.isTrue,
        fj_CIF_CardLoanExtremeAmount__c:
          test_data.testData.sci_cif_card_extreme_amount1,
        fj_CIF_LIBHousingLoanBorrowCnt__c:
          test_data.testData.sci_cif_libhousing_borrow_cnt1,
        fj_CIF_CardLoanBalance__c: test_data.testData.sci_cif_cardloan_balance1,
        fj_CIF_LIBUnsecuredBorrowCnt__c:
          test_data.testData.sci_cif_libunsecured_borrow_cnt1,
        fj_CIF_FixedDepositBalance__c:
          test_data.testData.sci_cif_fixed_deposit_balance1,
        fj_CIF_LIBHousingLoanBorrowTB__c:
          test_data.testData.sci_cif_libhousing_borrow_tb1,
        fj_CIF_LiquidDepositAverage__c:
          test_data.testData.sci_cif_liquid_deposit_average1,
        fj_CIF_LIBUnsecuredBorrowTB__c:
          test_data.testData.sci_cif_libunsecured_borrow_tb1,
        fj_CIF_MEBalance__c: test_data.testData.sci_cif_mebalance1,
        fj_CIF_LIBHousingLoanTMRA__c:
          test_data.testData.sci_cif_libhousing_loan_tmra1,
        fj_CIF_RemainDepositDeposit__c: test_data.testData.sci_cif_remaindeposit1,
        fj_CIF_LIBUnsecuredBorrowTBRA__c:
          test_data.testData.sci_cif_libunsecured_borrow_tbra1,
        fj_CIF_ConsumerLoanMEBalance__c:
          test_data.testData.sci_cif_consumer_loan_mebalance1,
        fj_CIF_LIBUnsecuredBorrowTMRA__c:
          test_data.testData.sci_cif_libunsecured_borrow_tmra1,
        fj_CIF_METotalLoanBalance__c: test_data.testData.sci_cif_me_total_balance1,
        fj_CIF_LIBHousingLoanTBRA__c:
          test_data.testData.sci_cif_libhousing_loan_tbra1,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [SCI] スコアリングに必要な情報 Record Manual Creation(2)
    await conn.sobject("FJ_ScoringInfo__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_AccountOpenDate__c: test_data.testData.sci_account_open_date2,
        fj_CIF_CardLoan__c: test_data.testData.isTrue,
        fj_CIF_PropertyAccumulation__c: test_data.testData.isTrue,
        fj_CIF_HousingLoanJFC__c: test_data.testData.isTrue,
        fj_CIF_PensionLoan__c: test_data.testData.isTrue,
        fj_CIF_EducateEliteLoan__c: test_data.testData.isTrue,
        fj_CIF_CardLoanExtremeAmount__c:
          test_data.testData.sci_cif_card_extreme_amount2,
        fj_CIF_LIBHousingLoanBorrowCnt__c:
          test_data.testData.sci_cif_libhousing_borrow_cnt2,
        fj_CIF_CardLoanBalance__c: test_data.testData.sci_cif_cardloan_balance2,
        fj_CIF_LIBUnsecuredBorrowCnt__c:
          test_data.testData.sci_cif_libunsecured_borrow_cnt2,
        fj_CIF_FixedDepositBalance__c:
          test_data.testData.sci_cif_fixed_deposit_balance2,
        fj_CIF_LIBHousingLoanBorrowTB__c:
          test_data.testData.sci_cif_libhousing_borrow_tb2,
        fj_CIF_LiquidDepositAverage__c:
          test_data.testData.sci_cif_liquid_deposit_average2,
        fj_CIF_LIBUnsecuredBorrowTB__c:
          test_data.testData.sci_cif_libunsecured_borrow_tb2,
        fj_CIF_MEBalance__c: test_data.testData.sci_cif_mebalance2,
        fj_CIF_LIBHousingLoanTMRA__c:
          test_data.testData.sci_cif_libhousing_loan_tmra2,
        fj_CIF_RemainDepositDeposit__c: test_data.testData.sci_cif_remaindeposit2,
        fj_CIF_LIBUnsecuredBorrowTBRA__c:
          test_data.testData.sci_cif_libunsecured_borrow_tbra2,
        fj_CIF_ConsumerLoanMEBalance__c:
          test_data.testData.sci_cif_consumer_loan_mebalance2,
        fj_CIF_LIBUnsecuredBorrowTMRA__c:
          test_data.testData.sci_cif_libunsecured_borrow_tmra2,
        fj_CIF_METotalLoanBalance__c: test_data.testData.sci_cif_me_total_balance2,
        fj_CIF_LIBHousingLoanTBRA__c:
          test_data.testData.sci_cif_libhousing_loan_tbra2,
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

    // Get SCI Record
    await parent.Get_SCI_Record();

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
    if (test_data.testData.sci_id_arr.length > 0) {
      let ssno = 2;
      for (var i = 0; i < test_data.testData.sci_id_arr.length; i++) {
        // Go to SCI record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_SCI(test_data.testData.sci_id_arr[i]);

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
