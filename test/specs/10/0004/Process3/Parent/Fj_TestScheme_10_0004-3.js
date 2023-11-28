var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_10_0004_step_13_data from "../Child/Fj_TestScheme_10_0004_step_13_data";
import Fj_TestScheme_10_0004_step_13 from "../Child/Fj_TestScheme_10_0004_step_13";
import Fj_TestScheme_10_0004_step_14 from "../Child/Fj_TestScheme_10_0004_step_14";
import Fj_TestScheme_10_0004_step_17 from "../Child/Fj_TestScheme_10_0004_step_17";
import Fj_TestScheme_10_0004_step_25 from "../Child/Fj_TestScheme_10_0004_step_25";
import Fj_TestScheme_10_0004_step_26 from "../Child/Fj_TestScheme_10_0004_step_26";
import Fj_TestScheme_10_0004_step_27 from "../Child/Fj_TestScheme_10_0004_step_27";
import Fj_TestScheme_10_0004_step_28 from "../Child/Fj_TestScheme_10_0004_step_28";
import Fj_TestScheme_10_0004_step_29 from "../Child/Fj_TestScheme_10_0004_step_29";
import Fj_TestScheme_10_0004_step_30 from "../Child/Fj_TestScheme_10_0004_step_30";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0004-3: External form check result confirmation (外形チェック結果確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_10_0004_step_13_data
    Fj_TestScheme_10_0004_step_13_data();

    // Login as Tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_10_0004_step_13
    Fj_TestScheme_10_0004_step_13();

    // Execute Fj_TestScheme_10_0004_step_14
    Fj_TestScheme_10_0004_step_14();

    // Execute Fj_TestScheme_10_0004_step_17
    Fj_TestScheme_10_0004_step_17();

    // Execute Fj_TestScheme_10_0004_step_25
    Fj_TestScheme_10_0004_step_25();

    // Execute Fj_TestScheme_10_0004_step_26
    Fj_TestScheme_10_0004_step_26();

    // Execute Fj_TestScheme_10_0004_step_27
    Fj_TestScheme_10_0004_step_27();

    // Login as Tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_10_0004_step_28
    Fj_TestScheme_10_0004_step_28();

    // Execute Fj_TestScheme_10_0004_step_29
    Fj_TestScheme_10_0004_step_29();

    // Execute Fj_TestScheme_10_0004_step_30
    Fj_TestScheme_10_0004_step_30();
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

    // Get APP record and PRO record
    await conn
      .sobject("genesis__Applications__c")
      .select(
        "Id, Name, genesis__CL_Product__r.Id, genesis__CL_Product__r.Name"
      )
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
          test_data.testData.pro_id = record.genesis__CL_Product__r.Id;
          test_data.testData.pro_name = record.genesis__CL_Product__r.Name;
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

    // Get 2nd DDP record
    await conn
      .sobject("FJ_Examination__c")
      .select("Id")
      .include("FJ_NameDeduplication_Examination__r")
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
          if (record.FJ_NameDeduplication_Examination__r.records.length > 0) {
            for (
              var j = 0;
              j < record.FJ_NameDeduplication_Examination__r.records.length;
              j++
            ) {
              var child_obj =
                record.FJ_NameDeduplication_Examination__r.records[j];
              if (
                child_obj.RecordType.Name === test_data.testData.cif_record_type
              ) {
                test_data.testData.ddp_id = child_obj.Id;
                test_data.testData.ddp_name = child_obj.Name;
              }
            }
          }
        }
      });
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

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher
  await Change_App();
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

export async function Open_3rd_INI_Record() {
  // Go to 3rd INI related record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
  );
}
