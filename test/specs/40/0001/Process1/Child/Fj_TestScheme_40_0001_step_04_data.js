var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");

export default async function suite() {
  it("Fj_TestScheme_40_0001_step_04_data: Manual creation of 顧客元帳照会 Record (for data linkage)", async () => {
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

    // CLI 顧客元帳照会 Record Manual Creation
    var kanji_name, bdate;
    if (test_data.testData.user_status == 0) {
      // Old user (user_status = 0)
      kanji_name = test_data.testData.kanji_name_old;
      bdate = test_data.testData.input_birthdate_old;
    } else if (test_data.testData.user_status == 1) {
      // New user (user_status = 1)
      kanji_name = test_data.testData.kanji_name_new;
      bdate = test_data.testData.input_birthdate_new;
    }

    // NOTE: Please change input key value if re-running 0001-1 within 30 mins
    await conn.sobject("FJ_CustomerLedgerInquiry__c").create(
      {
        fj_CustNo__c: test_data.testData.cust_no,
        fj_KanaName__c: test_data.testData.kana_name,
        fj_KanjiName__c: kanji_name,
        fj_Gender__c: test_data.testData.gender,
        fj_KanaAdd1__c: test_data.testData.kana_add1,
        fj_AddCode__c: test_data.testData.kana_add_code,
        fj_PostalCode__c: test_data.testData.postal_code,
        fj_KanjiAdd1__c: test_data.testData.kanji_add1,
        fj_FirstPhoneNo__c: test_data.testData.phone_no1,
        fj_SecondPhoneNo__c: test_data.testData.phone_no2,
        fj_ThirdPhoneNo__c: test_data.testData.phone_no3,
        fj_AnnualIncome__c: test_data.testData.annual_income,
        fj_CurrentPrefCode__c: test_data.testData.current_pref_code,
        fj_InputKey__c: test_data.testData.input_key,
        fj_Input_KanaName__c: test_data.testData.input_kana_name,
        fj_Input_BirthDate__c: bdate,
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
      }
    );
  });
}
