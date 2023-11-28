var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0006_step_03 from "../Child/Fj_TestScheme_10_0006_step_03.js";
import Fj_TestScheme_10_0006_step_04 from "../Child/Fj_TestScheme_10_0006_step_04.js";
import Fj_TestScheme_10_0006_step_05 from "../Child/Fj_TestScheme_10_0006_step_05.js";
import Fj_TestScheme_10_0006_step_06 from "../Child/Fj_TestScheme_10_0006_step_06.js";
import Fj_TestScheme_10_0006_step_11 from "../Child/Fj_TestScheme_10_0006_step_11.js";
import Fj_TestScheme_10_0006_step_12 from "../Child/Fj_TestScheme_10_0006_step_12.js";
import Fj_TestScheme_10_0006_step_13 from "../Child/Fj_TestScheme_10_0006_step_13.js";
import Fj_TestScheme_10_0006_step_14 from "../Child/Fj_TestScheme_10_0006_step_14.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0006-2: Initial Process check (Auditor User) (初期処理確認(審査役))", async () => {
    //Query Salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_10_0006_step_03
    Fj_TestScheme_10_0006_step_03();

    // Login_As_Shinsa1_User
    // **Comment out if step_03 is the only step needed to be executed
    Login_As_Shinsa1_User();

    // Execute Fj_TestScheme_10_0006_step_04
    Fj_TestScheme_10_0006_step_04();

    // Execute Fj_TestScheme_10_0006_step_05
    Fj_TestScheme_10_0006_step_05();

    // Execute Fj_TestScheme_10_0006_step_06
    Fj_TestScheme_10_0006_step_06();

    // Execute Fj_TestScheme_10_0006_step_11
    Fj_TestScheme_10_0006_step_11();

    // Execute Fj_TestScheme_10_0006_step_12
    Fj_TestScheme_10_0006_step_12();

    // Execute Fj_TestScheme_10_0006_step_13
    Fj_TestScheme_10_0006_step_13();

    // Execute Fj_TestScheme_10_0006_step_14
    Fj_TestScheme_10_0006_step_14();
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

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
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
          // ★ 新環境適用' New Env Implementation
          if (test_data.testData.ini3_record_type === record.RecordType.Name) {
            test_data.testData.ini3_id = record.Id;
            test_data.testData.ini3_name = record.Name;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_As_Shinsa1_User() {
  it("Login as Shinsa1 user", async () => {
    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
