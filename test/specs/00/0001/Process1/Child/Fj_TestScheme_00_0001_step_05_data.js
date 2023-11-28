var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_05_data: Manual creation of 顧客元帳照会 Record (for data linkage)", async () => {
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
        fj_CustNo__c: test_data.testData.customer_number,
        fj_KanaName__c: test_data.testData.kana_name,
        fj_KanjiName__c: kanji_name,
        fj_Gender__c: test_data.testData.gender,
        fj_KanaAdd1__c: test_data.testData.kana_address_1,
        fj_AddCode__c: test_data.testData.address_code,
        fj_PostalCode__c: test_data.testData.kanji_address_zipcode,
        fj_KanjiAdd1__c: test_data.testData.kanji_address_1,
        fj_FirstPhoneNo__c: test_data.testData.primary_telephone_number,
        fj_SecondPhoneNo__c: test_data.testData.second_telephone_number,
        fj_ThirdPhoneNo__c: test_data.testData.third_telephone_number,
        fj_AnnualIncome__c: test_data.testData.annual_income,
        fj_CurrentPrefCode__c: test_data.testData.prefectural_code,
        fj_InputKey__c: test_data.testData.input_key,
        fj_Input_KanaName__c: test_data.testData.input_kana_name,
        fj_Input_BirthDate__c: bdate,
        fj_Input_BraNo__c: test_data.testData.input_branch_number,
        fj_Input_AcctType__c: test_data.testData.input_deposit_item,
        fj_Input_AcctNo__c: test_data.testData.entry_account_number,
        fj_Input_M_Pin__c: test_data.testData.loan_app_pinword,
        fj_KanaOfficeName__c:
          test_data.testData.kana_name_of_workplace_and_office,
        fj_OfficeName__c: test_data.testData.name_of_workplace_and_office,
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
