var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_10_0012_step_01 from "../Child/Fj_TestScheme_10_0012_step_01";
import Fj_TestScheme_10_0012_step_05 from "../Child/Fj_TestScheme_10_0012_step_05";
import Fj_TestScheme_10_0012_step_06 from "../Child/Fj_TestScheme_10_0012_step_06";
import Fj_TestScheme_10_0012_step_07 from "../Child/Fj_TestScheme_10_0012_step_07";
import Fj_TestScheme_10_0012_step_08 from "../Child/Fj_TestScheme_10_0012_step_08";
import Fj_TestScheme_10_0012_step_09 from "../Child/Fj_TestScheme_10_0012_step_09";
import Fj_TestScheme_10_0012_step_17 from "../Child/Fj_TestScheme_10_0012_step_17";
import Fj_TestScheme_10_0012_step_18 from "../Child/Fj_TestScheme_10_0012_step_18";
import Fj_TestScheme_10_0012_step_19 from "../Child/Fj_TestScheme_10_0012_step_19";
import Fj_TestScheme_10_0012_step_20 from "../Child/Fj_TestScheme_10_0012_step_20";
import Fj_TestScheme_10_0012_step_24_data from "../Child/Fj_TestScheme_10_0012_step_24_data";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0012-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_10_0012_step_01
    Fj_TestScheme_10_0012_step_01();

    // Execute Fj_TestScheme_10_0012_step_05
    Fj_TestScheme_10_0012_step_05();

    // Execute Fj_TestScheme_10_0012_step_06
    Fj_TestScheme_10_0012_step_06();

    // Execute Fj_TestScheme_10_0012_step_07
    Fj_TestScheme_10_0012_step_07();

    // Execute Fj_TestScheme_10_0012_step_08
    Fj_TestScheme_10_0012_step_08();

    // Execute Fj_TestScheme_10_0012_step_09
    Fj_TestScheme_10_0012_step_09();

    // Execute Fj_TestScheme_10_0012_step_17
    Fj_TestScheme_10_0012_step_17();

    // Execute Fj_TestScheme_10_0012_step_18
    Fj_TestScheme_10_0012_step_18();

    // Execute Fj_TestScheme_10_0012_step_19
    Fj_TestScheme_10_0012_step_19();

    // Execute Fj_TestScheme_10_0012_step_20
    Fj_TestScheme_10_0012_step_20();

    // Execute Fj_TestScheme_10_0012_step_24_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_10_0012_step_24_data();
  });
}

async function Login_To_Salesforce() {
  it("Query Salesforce Records", async () => {
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

    // Get Exec Result record
    await conn
      .sobject("FJ_ExecutionResult__c")
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
          test_data.testData.exec_result_name = record.Name;
          test_data.testData.exec_result_id = record.Id;
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

    // Get BA records
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.fj_IsForTransfer__c == true) {
            test_data.testData.ba_array.push(record);
          }
        }
      });

    // Get ER transfer slip records
    await conn
      .sobject("FJ_ExecutionRequest__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (test_data.testData.er1_record_type == record.RecordType.Name) {
            test_data.testData.er_array.push(record);
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Get LCD records
    await conn
      .sobject("FJ_LoanCommonDetail__c")
      .select("Id, Name")
      .where({
        fj_InitialChk__c: test_data.testData.ini2_id,
      })
      .sort({ Name: 1 })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.lcd_id_arr.push(record.Id);
          test_data.testData.lcd_name_arr.push(record.Name);
        }
      });
  });

  it("Login to Org", async () => {
    // Login as tantou
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
  });
}
// ★ 新環境適用' New Env Implementation
export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Logout() {
  // logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}
