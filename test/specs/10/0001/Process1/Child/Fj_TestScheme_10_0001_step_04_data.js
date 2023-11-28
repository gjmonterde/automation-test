var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default async function suite() {
  it("Fj_TestScheme_10_0001_step_04_data: Manual creation of 顧客元帳照会 Record (for data linkage)", async () => {
    // Connect to Salesforce
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

    // if input key is blank
    if (test_data.testData.input_key === "") {
      // Set the input key
      var date = new Date(Date.now());
      var yr = String(date.getFullYear());
      var month = String(
        (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1)
      );
      var day = String((date.getDate() < 10 ? "0" : "") + date.getDate());
      var hr = String((date.getHours() < 10 ? "0" : "") + date.getHours());
      var min = String((date.getMinutes() < 10 ? "0" : "") + date.getMinutes());
      var sec = String((date.getSeconds() < 10 ? "0" : "") + date.getSeconds());
      test_data.testData.input_key =
        yr + month + day + hr + min + sec + test_data.testData.input_key_suffix;
    }

    //CLI 顧客元帳照会 Record Manual Creation
    await conn.sobject("FJ_CustomerLedgerInquiry__c").create(
      {
        fj_CustNo__c: test_data.testData.cust_no,
        fj_KanaName__c: test_data.testData.kana_name,
        fj_KanjiName__c: test_data.testData.kanji_name,
        fj_Gender__c: test_data.testData.gender,
        fj_KanaAdd1__c: test_data.testData.kana_add1,
        fj_AddCode__c: test_data.testData.kana_add_code,
        fj_PostalCode__c: test_data.testData.postal_code,
        fj_KanjiAdd1__c: test_data.testData.kanji_add1,
        fj_FirstPhoneNo__c: test_data.testData.phone_no1,
        fj_AnnualIncome__c: test_data.testData.annual_income,
        fj_CurrentPrefCode__c: test_data.testData.current_pref_code,
        fj_InputKey__c: test_data.testData.input_key,
        fj_Input_KanaName__c: test_data.testData.input_kana_name,
        fj_Input_BirthDate__c: test_data.testData.input_birthdate,
        fj_Input_BraNo__c: test_data.testData.input_bra_no,
        fj_Input_AcctType__c: test_data.testData.input_acct_type,
        fj_Input_AcctNo__c: test_data.testData.input_acct_no,
        fj_Input_M_Pin__c: test_data.testData.input_m_pin,
      },
      function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
        console.log("Input Key : " + test_data.testData.input_key);
      }
    );
  });
}
