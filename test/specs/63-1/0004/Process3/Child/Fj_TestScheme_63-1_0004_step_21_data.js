var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_21_data: Create SCI Record manually (Data Linkage)", async () => {
    const stepNum = "21"; // ★ 新環境適用' New Env Implementation

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

    // [SCI] スコアリングに必要な情報 Record Manual Creation(1)
    await conn.sobject("FJ_ScoringInfo__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_AccountOpenDate__c: test_data.testData.account_open_date1,
        fj_CIF_CardLoan__c: test_data.testData.has_cif_card_loan1,
        fj_CIF_PayrollTransfer__c: test_data.testData.has_cif_payroll_transfer,
        fj_CIF_HousingLoan__c: test_data.testData.has_cif_housing_loan,
        fj_CIF_JCB__c: test_data.testData.has_cif_jcb,
        fj_CIF_NHK__c: test_data.testData.has_cif_nhk,
        fj_CIF_CardLoanExtremeAmount__c:
          test_data.testData.cif_card_extreme_amount1,
        fj_CIF_LIBHousingLoanBorrowCnt__c:
          test_data.testData.cif_libhousing_borrow_cnt1,
        fj_CIF_CardLoanBalance__c: test_data.testData.cif_cardloan_balance1,
        fj_CIF_LIBUnsecuredBorrowCnt__c:
          test_data.testData.cif_libunsecured_borrow_cnt1,
        fj_CIF_FixedDepositBalance__c:
          test_data.testData.cif_fixed_deposit_balance1,
        fj_CIF_LIBHousingLoanBorrowTB__c:
          test_data.testData.cif_libhousing_borrow_tb1,
        fj_CIF_LiquidDepositAverage__c:
          test_data.testData.cif_liquid_deposit_average1,
        fj_CIF_LIBUnsecuredBorrowTB__c:
          test_data.testData.cif_libunsecured_borrow_tb1,
        fj_CIF_MEBalance__c: test_data.testData.cif_mebalance1,
        fj_CIF_LIBHousingLoanTMRA__c:
          test_data.testData.cif_libhousing_loan_tmra1,
        fj_CIF_RemainDepositDeposit__c: test_data.testData.cif_remaindeposit1,
        fj_CIF_LIBUnsecuredBorrowTBRA__c:
          test_data.testData.cif_libunsecured_borrow_tbra1,
        fj_CIF_ConsumerLoanMEBalance__c:
          test_data.testData.cif_consumer_loan_mebalance1,
        fj_CIF_LIBUnsecuredBorrowTMRA__c:
          test_data.testData.cif_libunsecured_borrow_tmra1,
        fj_CIF_METotalLoanBalance__c: test_data.testData.cif_me_total_balance1,
        fj_CIF_LIBHousingLoanTBRA__c:
          test_data.testData.cif_libhousing_loan_tbra1,
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
        fj_AccountOpenDate__c: test_data.testData.account_open_date2,
        fj_CIF_CardLoan__c: test_data.testData.has_cif_card_loan2,
        fj_CIF_PropertyAccumulation__c:
          test_data.testData.has_cif_property_accum,
        fj_CIF_HousingLoanJFC__c: test_data.testData.has_cif_housingloan_jfc,
        fj_CIF_PensionLoan__c: test_data.testData.has_cif_pensionloan,
        fj_CIF_EducateEliteLoan__c: test_data.testData.has_educate_eliteloan,
        fj_CIF_CardLoanExtremeAmount__c:
          test_data.testData.cif_card_extreme_amount2,
        fj_CIF_LIBHousingLoanBorrowCnt__c:
          test_data.testData.cif_libhousing_borrow_cnt2,
        fj_CIF_CardLoanBalance__c: test_data.testData.cif_cardloan_balance2,
        fj_CIF_LIBUnsecuredBorrowCnt__c:
          test_data.testData.cif_libunsecured_borrow_cnt2,
        fj_CIF_FixedDepositBalance__c:
          test_data.testData.cif_fixed_deposit_balance2,
        fj_CIF_LIBHousingLoanBorrowTB__c:
          test_data.testData.cif_libhousing_borrow_tb2,
        fj_CIF_LiquidDepositAverage__c:
          test_data.testData.cif_liquid_deposit_average2,
        fj_CIF_LIBUnsecuredBorrowTB__c:
          test_data.testData.cif_libunsecured_borrow_tb2,
        fj_CIF_MEBalance__c: test_data.testData.cif_mebalance2,
        fj_CIF_LIBHousingLoanTMRA__c:
          test_data.testData.cif_libhousing_loan_tmra2,
        fj_CIF_RemainDepositDeposit__c: test_data.testData.cif_remaindeposit2,
        fj_CIF_LIBUnsecuredBorrowTBRA__c:
          test_data.testData.cif_libunsecured_borrow_tbra2,
        fj_CIF_ConsumerLoanMEBalance__c:
          test_data.testData.cif_consumer_loan_mebalance2,
        fj_CIF_LIBUnsecuredBorrowTMRA__c:
          test_data.testData.cif_libunsecured_borrow_tmra2,
        fj_CIF_METotalLoanBalance__c: test_data.testData.cif_me_total_balance2,
        fj_CIF_LIBHousingLoanTBRA__c:
          test_data.testData.cif_libhousing_loan_tbra2,
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

    // Get SCI Record
    await parent.Get_SCI_Record();

    // Remove possible duplicates due to calling again of the records
    test_data.testData.sci_array = test_data.testData.sci_array.filter(
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

    // Loop through the array to determine SCI records
    for (var sci = 0; sci < test_data.testData.sci_array.length; sci++) {
      var record = test_data.testData.sci_array[sci];

      // Go to SCI record
      await util.Open_SF_Record_URL(1, user_info.object.sci_obj, record.Id);

      var screenshotCountSCI = 3 + sci;

      const headerBar_sci = await $(".//header[@id='oneHeader']");
      const tabheader_sci = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      const highlights_sci = await $(
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
          screenshotCountSCI +
          test_data.testData.data,
        {
          hideAfterFirstScroll: [headerBar_sci, tabheader_sci, highlights_sci],
          fullPageScrollTimeout: 3000,
        }
      );
      await browser.pause(2000);
    }
  });
}
