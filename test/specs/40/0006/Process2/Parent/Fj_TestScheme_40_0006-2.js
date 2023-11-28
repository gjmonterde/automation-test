var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_40_0006_step_04 from "../Child/Fj_TestScheme_40_0006_step_04";
import Fj_TestScheme_40_0006_step_05 from "../Child/Fj_TestScheme_40_0006_step_05";
import Fj_TestScheme_40_0006_step_06 from "../Child/Fj_TestScheme_40_0006_step_06";
import Fj_TestScheme_40_0006_step_11 from "../Child/Fj_TestScheme_40_0006_step_11";
import Fj_TestScheme_40_0006_step_12 from "../Child/Fj_TestScheme_40_0006_step_12";
import Fj_TestScheme_40_0006_step_13 from "../Child/Fj_TestScheme_40_0006_step_13";
import Fj_TestScheme_40_0006_step_14 from "../Child/Fj_TestScheme_40_0006_step_14";

export default async function suite() {
  describe("Fj_TestScheme_40_0006-2: Initial Process check (Auditor User) (初期処理確認(審査役))", () => {
    // Login to Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0006_step_04
    Fj_TestScheme_40_0006_step_04();

    // Execute Fj_TestScheme_40_0006_step_05
    Fj_TestScheme_40_0006_step_05();

    // Execute Fj_TestScheme_40_0006_step_06
    Fj_TestScheme_40_0006_step_06();

    // Execute Fj_TestScheme_40_0006_step_11
    Fj_TestScheme_40_0006_step_11();

    // Execute Fj_TestScheme_40_0006_step_12
    Fj_TestScheme_40_0006_step_12();

    // Execute Fj_TestScheme_40_0006_step_13
    Fj_TestScheme_40_0006_step_13();

    // Execute Fj_TestScheme_40_0006_step_14
    Fj_TestScheme_40_0006_step_14();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
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

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get INI 3 record
    await conn
      .sobject("FJ_InitialChk__c")
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
          if (record.RecordType.Name === test_data.testData.ini3_rectype) {
            test_data.testData.ini_id3 = record.Id;
            test_data.testData.ini_name3 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id3);

    // Get EXS record
    await conn
      .sobject("FJ_ExternalScoring__c")
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
          test_data.testData.exs_id = record.Id;
          test_data.testData.exs_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.exs_id);

    // Get TRR record
    await conn
      .sobject("FJ_TotalRepaymentRate__c")
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
          test_data.testData.trr_id = record.Id;
          test_data.testData.trr_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.trr_id);

    // Login to org - shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
