var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0004-3");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0004_step_28_data: Create CABI, CABF, BLA, CLA Records manually (Data Linkage)", async () => {
    const stepNum = "28"; // ★ 新環境適用' New Env Implementation

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

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
        test_data.testData.spec63_1 +
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
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_EA_Deposit__c: test_data.testData.ea_deposit,
        fj_EA_DepositSubtotal__c: test_data.testData.ea_deposit_subtotal,
        fj_EA_TotalDeposit__c: test_data.testData.ea_total_deposit,
        fj_EA_DomesticStock__c: test_data.testData.ea_domestic_stock,
        fj_EA_DomesticBond__c: test_data.testData.ea_domestic_bond,
        fj_EA_OtherDomesticInvestmentTrust__c:
          test_data.testData.ea_other_domestic_investment_trust,
        fj_EA_MRF__c: test_data.testData.ea_mrf,
        fj_EA_FundWrap__c: test_data.testData.ea_fund_wrap,
        fj_EA_ForeignStocks__c: test_data.testData.ea_foreign_stocks,
        fj_EA_ForeignBond__c: test_data.testData.ea_foreign_bond,
        fj_EA_OtherFIT__c: test_data.testData.ea_other_fit,
        fj_EA_ForeignCurrencyMMF__c: test_data.testData.ea_foreign_currency_mmf,
        fj_EA_Other__c: test_data.testData.ea_other,
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
        test_data.testData.spec63_1 +
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
        test_data.testData.spec63_1 +
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
    await browser.pause(2000);

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

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
        test_data.testData.spec63_1 +
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

    // [CABF] Record Manual Creation
    await conn.sobject("FJ_CAB_FCD__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ProductName__c: test_data.testData.product_name,
        fj_CurrencyCode__c: test_data.testData.currency_code,
        fj_MarketPrice__c: test_data.testData.market_price,
        fj_InitialDepositAmount__c: test_data.testData.initial_deposit_amount,
        fj_YenAmount__c: test_data.testData.yen_amount,
        fj_ForeignCurrencyAmount__c: test_data.testData.foreign_currency_amount,
        fj_AutomaticRenewalType__c: test_data.testData.automatic_renewal_type,
        fj_AccountStoreName__c: test_data.testData.account_store_name,
        fj_ForeignCurrencyDepositAccountNo__c:
          test_data.testData.foreign_currency_deposit_account_no,
        fj_InterestRate1__c: test_data.testData.interest_rate_1,
        fj_InitialDepositDate__c: test_data.testData.initial_deposit_date,
        fj_DepositDate__c: test_data.testData.deposit_date,
        fj_MaturityDate__c: test_data.testData.maturity_date,
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
        test_data.testData.spec63_1 +
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
        test_data.testData.spec63_1 +
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
    await browser.pause(2000);

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

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
        test_data.testData.spec63_1 +
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

    // [BLA] Record Manual Creation
    await conn.sobject("FJ_BasicLoanAccount__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_loan_account_no,
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
        test_data.testData.spec63_1 +
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
        test_data.testData.spec63_1 +
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
    await browser.pause(2000);

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

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
        test_data.testData.spec63_1 +
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

    // [CLA] Record Manual Creation
    await conn.sobject("FJ_CardLoanAccountInfo__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingCardLoan_CreditLimit__c:
          test_data.testData.existing_card_loan_credit_limit,
        fj_ExistingCardLoan_InterestRateCode__c:
          test_data.testData.existing_card_loan_interest_rate_code,
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
        test_data.testData.spec63_1 +
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
        test_data.testData.spec63_1 +
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
    await browser.pause(2000);
  });
}
