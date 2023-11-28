var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_33_data: Manually create CABI records (data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "33";

    // Login as admin
    await parent.Login_as_admin();

    // Open INI-3 record detail
    await parent.Open_INI_3rd_Record();

    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
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
        hideAfterFirstScroll: [headerBar1, tabheader1],
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

    // [CABI] Record Manual Creation
    await conn.sobject("FJ_CAB_Intermediary__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_EA_Deposit__c: test_data.testData.cabi_deposit,
        fj_EA_DepositSubtotal__c: test_data.testData.cabi_deposit_subtotal,
        fj_EA_TotalDeposit__c: test_data.testData.cabi_total_deposit,
        fj_EA_DomesticStock__c: test_data.testData.cabi_domestic_stock,
        fj_EA_DomesticBond__c: test_data.testData.cabi_domestic_bond,
        fj_EA_OtherDomesticInvestmentTrust__c:
          test_data.testData.cabi_other_domestic_investment_trust,
        fj_EA_MRF__c: test_data.testData.cabi_mrf,
        fj_EA_FundWrap__c: test_data.testData.cabi_fund_wrap,
        fj_EA_ForeignStocks__c: test_data.testData.cabi_foreign_stocks,
        fj_EA_ForeignBond__c: test_data.testData.cabi_foreign_bond,
        fj_EA_OtherFIT__c: test_data.testData.cabi_other_fit,
        fj_EA_ForeignCurrencyMMF__c:
          test_data.testData.cabi_foreign_currency_mmf,
        fj_EA_Other__c: test_data.testData.cabi_other,
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
    await browser.pause(10000);

    // Screenshot - After Data
    // ★ 新環境適用' New Env Implementation
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
        hideAfterFirstScroll: [headerBar2, tabheader2],
        fullPageScrollTimeout: 3000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.cabi_id_arr.length > 0) {
      let ssno = 2;
      for (var i = 0; i < test_data.testData.cabi_id_arr.length; i++) {
        // Go to CABI record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_CABI(test_data.testData.cabi_id_arr[i]);

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
