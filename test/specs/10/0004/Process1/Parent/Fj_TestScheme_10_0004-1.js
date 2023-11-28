var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_10_0004_step_01 from "../Child/Fj_TestScheme_10_0004_step_01";
import Fj_TestScheme_10_0004_step_03 from "../Child/Fj_TestScheme_10_0004_step_03";
import Fj_TestScheme_10_0004_step_04 from "../Child/Fj_TestScheme_10_0004_step_04";
import Fj_TestScheme_10_0004_step_11 from "../Child/Fj_TestScheme_10_0004_step_11";
import Fj_TestScheme_10_0004_step_12 from "../Child/Fj_TestScheme_10_0004_step_12";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0004-1: Initial process check (初期処理確認)", () => {
    // Login in Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_10_0004_step_01
    Fj_TestScheme_10_0004_step_01();

    // Login as tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_10_0004_step_03
    Fj_TestScheme_10_0004_step_03();

    // Execute Fj_TestScheme_10_0004_step_04
    Fj_TestScheme_10_0004_step_04();

    // Execute Fj_TestScheme_10_0004_step_11
    Fj_TestScheme_10_0004_step_11();

    // Execute Fj_TestScheme_10_0004_step_12
    Fj_TestScheme_10_0004_step_12();
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as tantou1", async () => {
    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher
    await Change_App();
  });
}

export async function Relogin_as_tantou1() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher
  await Change_App();
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);

  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Open_EXM_Record() {
  // Go to EXM related record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );

  // Screenshot EXM related record
  await util.Scroll_to_related_list(test_data.testData.exm_scroll);
}
