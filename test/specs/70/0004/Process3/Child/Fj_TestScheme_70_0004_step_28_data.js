var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0004-3");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0004_step_28_data: Create CABI, CABF, BLA, CLA Records manually (Data Linkage)", async () => {
    const stepNum = "28"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "admin") {
      // login as admin
      await parent.Login_as_admin();
    }

    // Go to INI record
    await parent.Go_to_INI();

    const headerBar_cabi_before = await $(".//header[@id='oneHeader']");
    const tabheader_cabi_before = await $(
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
        hideAfterFirstScroll: [headerBar_cabi_before, tabheader_cabi_before],
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

    // [CABI] Record Manual Creation
    await conn.sobject("FJ_CAB_Intermediary__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini_id,
        fj_EA_Deposit__c: test_data.testData.cabi_deposit_val,
        fj_EA_DepositSubtotal__c: test_data.testData.cabi_deposit_subtotal_val,
        fj_EA_TotalDeposit__c: test_data.testData.cabi_total_deposit_val,
        fj_EA_DomesticStock__c: test_data.testData.cabi_domestic_stock_val,
        fj_EA_DomesticBond__c: test_data.testData.cabi_domestic_bond_val,
        fj_EA_OtherDomesticInvestmentTrust__c:
          test_data.testData.cabi_other_domestic_investment_trust_val,
        fj_EA_MRF__c: test_data.testData.cabi_mrf_val,
        fj_EA_FundWrap__c: test_data.testData.cabi_fund_wrap_val,
        fj_EA_ForeignStocks__c: test_data.testData.cabi_foreign_stocks_val,
        fj_EA_ForeignBond__c: test_data.testData.cabi_foreign_bond_val,
        fj_EA_OtherFIT__c: test_data.testData.cabi_other_fit_val,
        fj_EA_ForeignCurrencyMMF__c:
          test_data.testData.cabi_foreign_currency_mmf_val,
        fj_EA_Other__c: test_data.testData.cabi_other_val,
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

    // Get CABI Record
    await parent.Get_CABI_Record();

    const headerBar_cabi_after = await $(".//header[@id='oneHeader']");
    const tabheader_cabi_after = await $(
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-2" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cabi_after, tabheader_cabi_after],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to CABI record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cabi_obj,
      test_data.testData.cabi_id
    );

    const headerBar_cabi = await $(".//header[@id='oneHeader']");
    const tabheader_cabi = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_cabi = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot - After Data - New record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-3" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cabi, tabheader_cabi, highlights_cabi],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);

    // Go to INI record
    await parent.Go_to_INI();

    const headerBar_cabf_before = await $(".//header[@id='oneHeader']");
    const tabheader_cabf_before = await $(
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
        "-4" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cabf_before, tabheader_cabf_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // [CABF] Record Manual Creation
    await conn.sobject("FJ_CAB_FCD__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini_id,
        fj_ProductName__c: test_data.testData.cabf_product_name_val,
        fj_InitialDepositAmount__c:
          test_data.testData.cabf_initial_deposit_amount_val,
        fj_YenAmount__c: test_data.testData.cabf_yen_amount_val,
        fj_ForeignCurrencyAmount__c:
          test_data.testData.cabf_foreign_currency_amount_val,
        fj_ForeignCurrencyDepositAccountNo__c:
          test_data.testData.cabf_foreign_currency_deposit_account_no_val,
        fj_InitialDepositDate__c:
          test_data.testData.cabf_initial_deposit_date_val,
        fj_DepositDate__c: test_data.testData.cabf_deposit_date_val,
        fj_MaturityDate__c: test_data.testData.cabf_maturity_date_val,
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

    // Get CABF Record
    await parent.Get_CABF_Record();

    const headerBar_cabf_after = await $(".//header[@id='oneHeader']");
    const tabheader_cabf_after = await $(
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-5" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cabf_after, tabheader_cabf_after],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to CABF record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cabf_obj,
      test_data.testData.cabf_id
    );

    const headerBar_cabf = await $(".//header[@id='oneHeader']");
    const tabheader_cabf = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_cabf = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot - After Data - New record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-6" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cabf, tabheader_cabf, highlights_cabf],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);

    // Go to INI record
    await parent.Go_to_INI();

    const headerBar_bla_before = await $(".//header[@id='oneHeader']");
    const tabheader_bla_before = await $(
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
        "-7" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_bla_before, tabheader_bla_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // [BLA] Record Manual Creation
    await conn.sobject("FJ_BasicLoanAccount__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini_id,
        fj_BasicLoanAccountNo__c:
          test_data.testData.bla_basic_loan_account_no_val,
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

    // Get BLA Record
    await parent.Get_BLA_Record();

    const headerBar_bla_after = await $(".//header[@id='oneHeader']");
    const tabheader_bla_after = await $(
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-8" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_bla_after, tabheader_bla_after],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to BLA record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.bla_obj,
      test_data.testData.bla_id
    );

    const headerBar_bla = await $(".//header[@id='oneHeader']");
    const tabheader_bla = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_bla = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot - After Data - New record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-9" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_bla, tabheader_bla, highlights_bla],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(5000);

    // Go to INI record
    await parent.Go_to_INI();

    const headerBar_cla_before = await $(".//header[@id='oneHeader']");
    const tabheader_cla_before = await $(
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
        "-10" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cla_before, tabheader_cla_before],
        fullPageScrollTimeout: 3000,
      }
    );

    // Scroll up to highlight panel
    await util.Highlight_panel_scroll();

    // [CLA] Record Manual Creation
    await conn.sobject("FJ_CardLoanAccountInfo__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini_id,
        fj_ExistingCardLoan_CreditLimit__c:
          test_data.testData.cla_existing_card_loan_credit_limit_val,
        fj_ExistingCardLoan_InterestRateCode__c:
          test_data.testData.cla_existing_card_loan_interest_rate_code_val,
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

    // Get CLA Record
    await parent.Get_CLA_Record();

    const headerBar_cla_after = await $(".//header[@id='oneHeader']");
    const tabheader_cla_after = await $(
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
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-11" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cla_after, tabheader_cla_after],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to CLA record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cla_obj,
      test_data.testData.cla_id
    );

    const headerBar_cla = await $(".//header[@id='oneHeader']");
    const tabheader_cla = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_cla = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    // Screenshot - After Data - New record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-12" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar_cla, tabheader_cla, highlights_cla],
        fullPageScrollTimeout: 3000,
      }
    );

    // logout
    await parent.Logout();
  });
}
