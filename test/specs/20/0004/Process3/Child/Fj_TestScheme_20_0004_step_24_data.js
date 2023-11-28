var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0004-3");

export default async function suite() {
  it("Fj_TestScheme_20_0004_step_24_data: Query results are created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "24";

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

    // 預かり資産残高（仲介) Record Manual Creation
    await conn.sobject("FJ_CAB_Intermediary__c").create(
      {
        fj_InitialChk__c: update_fj_InitialChk__c_id3,
        fj_EA_Deposit__c: test_data.testData.ea_deposit,
        fj_EA_DepositSubtotal__c: test_data.testData.ea_deposit_sub,
        fj_EA_TotalDeposit__c: test_data.testData.ea_total_deposit,
        fj_EA_DomesticStock__c: test_data.testData.ea_domestic_stock,
        fj_EA_ForeignStocks__c: test_data.testData.ea_foreign_stock,
        fj_EA_DomesticBond__c: test_data.testData.ea_domestic_bond,
        fj_EA_ForeignBond__c: test_data.testData.ea_foreign_bond,
        fj_EA_OtherDomesticInvestmentTrust__c: test_data.testData.ea_other_dit,
        fj_EA_OtherFIT__c: test_data.testData.ea_other_fit,
        fj_EA_MRF__c: test_data.testData.ea_mrf,
        fj_EA_ForeignCurrencyMMF__c: test_data.testData.ea_mmf,
        fj_EA_FundWrap__c: test_data.testData.ea_fundwrap,
        fj_EA_Other__c: test_data.testData.ea_other,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // 預かり資産残高（外貨預金）Record Manual Creation
    await conn.sobject("FJ_CAB_FCD__c").create(
      {
        fj_InitialChk__c: update_fj_InitialChk__c_id3,
        fj_ProductName__c: test_data.testData.prod_name,
        fj_AccountStoreName__c: test_data.testData.acc_store_name,
        fj_CurrencyCode__c: test_data.testData.currency_code,
        fj_ForeignCurrencyDepositAccountNo__c:
          test_data.testData.foreign_deposit,
        fj_MarketPrice__c: test_data.testData.market_price,
        fj_InterestRate1__c: test_data.testData.interest_rate1,
        fj_InitialDepositAmount__c: test_data.testData.init_deposit_amount,
        fj_InitialDepositDate__c: test_data.testData.init_deposit_date,
        fj_YenAmount__c: test_data.testData.yen_amount,
        fj_ForeignCurrencyAmount__c: test_data.testData.foreign_amount,
        fj_MaturityDate__c: test_data.testData.maturity_date,
        fj_AutomaticRenewalType__c: test_data.testData.renewal_type,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // 融資基本口座 Record Manual Creation
    await conn.sobject("FJ_BasicLoanAccount__c").create(
      {
        fj_InitialChk__c: update_fj_InitialChk__c_id3,
        fj_BasicLoanAccountNo__c: test_data.testData.basic_acc_no,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // カードローン口座情報 Record Manual Creation
    await conn.sobject("FJ_CardLoanAccountInfo__c").create(
      {
        fj_InitialChk__c: update_fj_InitialChk__c_id3,
        fj_ExistingCardLoan_CreditLimit__c: test_data.testData.ecl_credit_limit,
        fj_ExistingCardLoan_InterestRateCode__c: test_data.testData.ecl_code,
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
