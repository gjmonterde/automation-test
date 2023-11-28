var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_36_data: Manually create CABF records (data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "36";

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

    // [CABF] Record Manual Creation
    await conn.sobject("FJ_CAB_FCD__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ProductName__c: test_data.testData.cabf_product_name,
        fj_CurrencyCode__c: test_data.testData.cabf_currency_code,
        fj_MarketPrice__c: test_data.testData.cabf_market_price,
        fj_InitialDepositAmount__c:
          test_data.testData.cabf_initial_deposit_amount,
        fj_YenAmount__c: test_data.testData.cabf_yen_amount,
        fj_ForeignCurrencyAmount__c:
          test_data.testData.cabf_foreign_currency_amount,
        fj_AutomaticRenewalType__c:
          test_data.testData.cabf_automatic_renewal_type,
        fj_AccountStoreName__c: test_data.testData.cabf_account_store_name,
        fj_ForeignCurrencyDepositAccountNo__c:
          test_data.testData.cabf_foreign_currency_deposit_account_no,
        fj_InterestRate1__c: test_data.testData.cabf_interest_rate_1,
        fj_InitialDepositDate__c: test_data.testData.cabf_initial_deposit_date,
        fj_DepositDate__c: test_data.testData.cabf_deposit_date,
        fj_MaturityDate__c: test_data.testData.cabf_maturity_date,
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
    if (test_data.testData.cabf_id_arr.length > 0) {
      let ssno = 2;
      for (var i = 0; i < test_data.testData.cabf_id_arr.length; i++) {
        // Go to CABF record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_CABF(test_data.testData.cabf_id_arr[i]);

        // Screenshot
        const highlights3 = await $(
          ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
        );
        const headerBar3 = await $(".//header[@id='oneHeader']");
        const tabheader3 = await $(
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
            hideAfterFirstScroll: [headerBar3, tabheader3, highlights3],
          }
        );
      }
    }
  });
}
