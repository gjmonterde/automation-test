var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0006_step_16 from "../Child/Fj_TestScheme_50_0006_step_16.js";
import Fj_TestScheme_50_0006_step_16_data from "../Child/Fj_TestScheme_50_0006_step_16_data.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0006-3: Scoring Result Check (スコアリング結果確認)", () => {
    // Query Salesforce records via JSForce
    Query_Salesforce_Records();

    // Comment out if you will execute only step_16_data
    // Login as shinsa1
    Login_As_Shinsa1();

    // Open APP record detail page
    Open_Salesforce_APP_Record();

    // Execute Fj_TestScheme_50_0006_step_16
    Fj_TestScheme_50_0006_step_16();

    // Comment out if you will execute only step 16
    // Login as admin user
    Login_As_Admin_User();

    // Execute Fj_TestScheme_50_0006_step_16_data
    Fj_TestScheme_50_0006_step_16_data();
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

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini_record_type3,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini_id3 = record.Id;
          test_data.testData.ini_name3 = record.Name;
        }
      });
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

async function Login_As_Admin_User() {
  it("Login as admin user", async () => {
    // Login as admin user
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await Change_App();
  });
}

async function Login_As_Shinsa1() {
  it("Login as shinsa1 user", async () => {
    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await Change_App();
  });
}

async function Open_Salesforce_APP_Record() {
  it("Open APP record", async () => {
    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );
  });
}
