var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0011_step_14 from "../Child/Fj_TestScheme_62_0011_step_14.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0011-5: Confirm payee's account (振込先口座確認)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS Execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_62_0011_step_14
    Fj_TestScheme_62_0011_step_14();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
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
    let csv_record_no = eval(
      "test_data.testData.csv_value" +
        test_data.testData.record_no +
        "_systemacceptno"
    );
    // Get APP Record
    await conn
      .sobject("FJ_MuCooperationApp__c")
      .select(
        "Id, Name, fj_System_Acception_No__c, fj_RefApplication__c, fj_RefApplication__r.Name, " +
          "fj_RefApplication__r.genesis__Account__r.Name, fj_RefApplication__r.genesis__Account__c"
      )
      .where({
        fj_System_Acception_No__c: csv_record_no,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.fj_RefApplication__c;
          test_data.testData.app_name = record.fj_RefApplication__r.Name;
          // ★ 新環境適用' New Env Implementation
          test_data.testData.account_name =
            record.fj_RefApplication__r.genesis__Account__r.Name;
          test_data.testData.account_id =
            record.fj_RefApplication__r.genesis__Account__c;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    if (test_data.testData.logged_status != "uic") {
      // Login to org - tantou1
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(10000);
      test_data.testData.logged_status = "uic";

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }
  });
}

export async function Get_BankAccount() {
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

  // Get BA records
  await conn
    .sobject("clcommon__Bank_Account__c")
    .select("Id, Name, fj_IsForTransfer__c")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_IsForTransfer__c: test_data.testData.isTrue,
    })
    .execute(async function (err, records) {
      if (err) {
        return console.log(err);
      }
      if (records.length < 2) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ba_id = record.Id;
          test_data.testData.ba_name = record.Name;
          // Record check
          await util.Record_check(1, test_data.testData.ba_id);
        }
      } else {
        for (var i = 0; i < records.length; i++) {
          test_data.testData.ba_name_arr.push(records[i].Name);
          test_data.testData.ba_id_arr.push(records[i].Id);
        }
        // Record check
        await util.Record_check(2, test_data.testData.ba_id_arr);
      }
    });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  await util.Application_Record_Scrolling(2);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_BA(id) {
  // Go to New BA record
  await util.Open_SF_Record_URL(1, user_info.object.ba_obj, id);
}
