var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0008_step_01 from "../Child/Fj_TestScheme_50_0008_step_01";
import Fj_TestScheme_50_0008_step_02 from "../Child/Fj_TestScheme_50_0008_step_02";
import Fj_TestScheme_50_0008_step_03 from "../Child/Fj_TestScheme_50_0008_step_03";
import Fj_TestScheme_50_0008_step_04 from "../Child/Fj_TestScheme_50_0008_step_04";
import Fj_TestScheme_50_0008_step_06 from "../Child/Fj_TestScheme_50_0008_step_06";

export default async function suite() {
  describe("Fj_TestScheme_50_0008-1: Initial Process check (初期処理確認)", () => {
    // Query salesforce records
    Query_Salesforce_Records();

    // Login to Salesforce
    Login_As_Shinsa1_User();

    // Execute Fj_TestScheme_50_0008_step_01
    Fj_TestScheme_50_0008_step_01();

    // Execute Fj_TestScheme_50_0008_step_02
    Fj_TestScheme_50_0008_step_02();

    // Execute Fj_TestScheme_50_0008_step_03
    Fj_TestScheme_50_0008_step_03();

    // Execute Fj_TestScheme_50_0008_step_04
    Fj_TestScheme_50_0008_step_04();

    // Execute Fj_TestScheme_50_0008_step_06
    Fj_TestScheme_50_0008_step_06();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce records", async () => {
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

    // Get CNT record
    await conn
      .sobject("FJ_Contracting__c")
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
          test_data.testData.cnt_id = record.Id;
          test_data.testData.cnt_name = record.Name;
        }
      });

    // Get ASC record
    await conn
      .sobject("FJ_AntiSocial__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.asc_id = record.Id;
          test_data.testData.asc_name = record.Name;
        }
      });

    // Get STT record
    await conn
      .sobject("FJ_Statement__c")
      .select("Id, Name, toLabel(fj_StatementType__c)")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (test_data.testData.stt_type_text == record.fj_StatementType__c) {
            test_data.testData.stt_id = record.Id;
            test_data.testData.stt_name = record.Name;
          }
        }
      });
  });
}

async function Login_As_Shinsa1_User() {
  it("Login to Salesforce", async () => {
    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );

    await util.Application_Record_Scrolling(2);
  });
}
