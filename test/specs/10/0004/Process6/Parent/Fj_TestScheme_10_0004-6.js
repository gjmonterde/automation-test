var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_10_0004_step_32 from "../Child/Fj_TestScheme_10_0004_step_32";
import Fj_TestScheme_10_0004_step_42 from "../Child/Fj_TestScheme_10_0004_step_42";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0004-6: Bank Examination confirmed (銀行審査確定)", () => {
    // Login to salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_10_0004_step_32
    Fj_TestScheme_10_0004_step_32();

    // Execute Fj_TestScheme_10_0004_step_42
    Fj_TestScheme_10_0004_step_42();
  });
}

async function Login_To_Salesforce() {
  it("Query salesforce records", async () => {
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

    // Get APP record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // Get 3rd INI record
    await conn
      .sobject("FJ_Examination__c")
      .select("Id")
      .include("FJ_InitialChk_Examination__r")
      .select("Id, Name, RecordType.*")
      .end()
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.FJ_InitialChk_Examination__r.records.length > 0) {
            for (
              var j = 0;
              j < record.FJ_InitialChk_Examination__r.records.length;
              j++
            ) {
              var child_obj = record.FJ_InitialChk_Examination__r.records[j];
              if (
                child_obj.RecordType.Name ===
                test_data.testData.ini3_record_type
              ) {
                test_data.testData.ini3_id = child_obj.Id;
                test_data.testData.ini3_name = child_obj.Name;
              }
            }
          }
        }
      });

    // Get EXM record
    await conn
      .sobject("FJ_Examination__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });
  });
}

export async function Login_as_Tantou1() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);

  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
