var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_04_data: Manual creation of 顧客元帳照会 Record (data linkage)", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Connect to salesforce
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

    // CLI 顧客元帳照会 Record Manual Creation
    // NOTE: Please change input key value if re-running 0001-1 within 30 mins
    await conn.sobject("FJ_CustomerLedgerInquiry__c").create(
      {
        fj_CustNo__c: test_data.testData.cust_no,
        fj_KanaName__c: test_data.testData.kana_name,
        fj_KanjiName__c: test_data.testData.kanji_name1,
        fj_Gender__c: test_data.testData.gender,
        fj_KanaAdd1__c: test_data.testData.kana_add1,
        fj_AddCode__c: test_data.testData.kana_add_code,
        fj_PostalCode__c: test_data.testData.postal_code,
        fj_KanjiAdd1__c: test_data.testData.kanji_add1,
        fj_FirstPhoneNo__c: test_data.testData.phone_no1,
        fj_FirstPhoneNo__c: test_data.testData.phone_no1,
        fj_SecondPhoneNo__c: test_data.testData.phone_no2,
        fj_ThirdPhoneNo__c: test_data.testData.phone_no3,
        fj_AnnualIncome__c: test_data.testData.annual_income,
        fj_CurrentPrefCode__c: test_data.testData.current_pref_code,
        fj_InputKey__c: test_data.testData.input_key,
        fj_Input_KanaName__c: test_data.testData.input_kana_name,
        fj_Input_BirthDate__c: test_data.testData.input_birthdate,
        fj_Input_BraNo__c: test_data.testData.input_bra_no,
        fj_Input_AcctType__c: test_data.testData.input_acct_type,
        fj_Input_AcctNo__c: test_data.testData.input_acct_no,
        fj_Input_M_Pin__c: test_data.testData.input_m_pin,
        fj_KanaOfficeName__c: test_data.testData.kana_office_name,
        fj_OfficeName__c: test_data.testData.office_name,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
        console.log("Input Key : " + test_data.testData.input_key);
        test_data.testData.cli_id = ret.id;
      }
    );
    test_data.testData.newWin = test_data.testData.isFalse;
    // Login to Salesforce
    await parent.Login_to_Salesforce();

    // Go to CLI record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cli_obj,
      test_data.testData.cli_id
    );

    // Screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1" +
        test_data.testData.data,
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // logout
    await parent.Logout();
  });
}
