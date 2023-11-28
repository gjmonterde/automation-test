var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-3");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_19_data: The query results are created as 「スコアリングに必要な情報」 Information Required for Scoring records.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "19";

    if (test_data.testData.logged_status != "admin") {
      // Login as admin
      await parent.Login_Admin();
    }

    // Go to 銀行審査 detail page
    await parent.Go_to_INI();

    // Take 銀行審査 page screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
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
        hideAfterFirstScroll: [headerBar, tabheader],
        fullPageScrollTimeout: 6000,
      }
    );

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

    var update_fj_InitialChk__c_id3 = test_data.testData.ini3_id;

    // [SCI]スコアリングに必要な情報 Record Manual Creation
    await conn.sobject("FJ_ScoringInfo__c").create(
      {
        fj_InitialChk__c: update_fj_InitialChk__c_id3,
        fj_AccountOpenDate__c: test_data.testData.acc_date,
        fj_CIF_CardLoan__c: test_data.testData.isTrue,
        fj_CIF_HousingLoan__c: test_data.testData.isTrue,
        fj_CIF_NHK__c: test_data.testData.isTrue,
        fj_CIF_Electricity__c: test_data.testData.isTrue,
        fj_CIF_Gas__c: test_data.testData.isTrue,
        fj_CIF_VISA__c: test_data.testData.isTrue,
        fj_CIF_GeneralCardLoanContract__c: test_data.testData.isTrue,
        fj_CIF_CardLoanExtremeAmount__c: test_data.testData.extreme_amount,
        fj_CIF_LIBHousingLoanBorrowCnt__c: test_data.testData.cif_lib_housing,
        fj_CIF_CardLoanBalance__c: test_data.testData.card_loan_balance,
        fj_CIF_LIBUnsecuredBorrowCnt__c: test_data.testData.cif_lib_unsecured,
        fj_CIF_FixedDepositBalance__c: test_data.testData.cif_fixed,
        fj_CIF_LIBHousingLoanBorrowTB__c: test_data.testData.cif_lib_borrow,
        fj_CIF_LiquidDepositAverage__c: test_data.testData.cif_lib_deposit,
        fj_CIF_MEBalance__c: test_data.testData.cif_me_balance,
        fj_CIF_LIBHousingLoanTMRA__c: test_data.testData.cif_tmra,
        fj_CIF_RemainDepositDeposit__c: test_data.testData.cif_rdd,
        fj_CIF_LIBUnsecuredBorrowTBRA__c: test_data.testData.cif_tbra,
        fj_CIF_ConsumerLoanMEBalance__c:
          test_data.testData.cif_consumer_loan_me,
        fj_CIF_LIBUnsecuredBorrowTMRA__c: test_data.testData.cif_lib_tmra,
        fj_CIF_METotalLoanBalance__c: test_data.testData.cif_me_total,
        fj_CIF_LIBHousingLoanTBRA__c: test_data.testData.cif_lib_tbra,
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

    // Take 銀行審査 page screenshot
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
