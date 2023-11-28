var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0004-3");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_20_data: Create CHI Record manually (Data Linkage)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "20";

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

    // [CHI] 審査情報出力結果情報 Record Manual Creation(1)
    await conn.sobject("FJ_CheckInfo__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_Credit_Rank__c: test_data.testData.chi_credit_rank_val1,
        fj_LiquidDepositBalance__c: test_data.testData.chi_liquid_deposit_val1,
        fj_FixedDepositBalance__c: test_data.testData.chi_fixed_deposit_val1,
        fj_HasExistingCardLoan__c: test_data.testData.isTrue,
        fj_ExistingCardLoan_ProductName__c:
          test_data.testData.chi_existing_card_val,
        fj_HasJointDebt__c: test_data.testData.isTrue,
        fj_JointDebtorCIF__c: test_data.testData.chi_joined_debtor_val,
        fj_HasJointGuarantee__c: test_data.testData.isTrue,
        fj_HasHousingWithdrawal__c: test_data.testData.isTrue,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      }
    );

    // [CHI] 審査情報出力結果情報 Record Manual Creation(2)
    await conn.sobject("FJ_CheckInfo__c").create(
      {
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_Credit_Rank__c: test_data.testData.chi_credit_rank_val2,
        fj_LiquidDepositBalance__c: test_data.testData.chi_liquid_deposit_val2,
        fj_FixedDepositBalance__c: test_data.testData.chi_fixed_deposit_val2,
        fj_HasPayrollTransfer__c: test_data.testData.isTrue,
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

    // Get CHI Record
    await parent.Get_CHI_Record();

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
        hideAfterFirstScroll: [headerBar_after, tabheader_after],
        fullPageScrollTimeout: 3000,
      }
    );

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.chi_id_arr.length > 0) {
      // ★ 新環境適用' New Env Implementation
      let ssno = 2;
      for (var i = 0; i < test_data.testData.chi_id_arr.length; i++) {
        // Go to CHI record
        // ★ 新環境適用' New Env Implementation
        await parent.Go_to_CHI(test_data.testData.chi_id_arr[i]);

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
