var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0006_step_04 from "../Child/Fj_TestScheme_50_0006_step_04.js";
import Fj_TestScheme_50_0006_step_05 from "../Child/Fj_TestScheme_50_0006_step_05.js";
import Fj_TestScheme_50_0006_step_06 from "../Child/Fj_TestScheme_50_0006_step_06.js";
import Fj_TestScheme_50_0006_step_11 from "../Child/Fj_TestScheme_50_0006_step_11.js";
import Fj_TestScheme_50_0006_step_12 from "../Child/Fj_TestScheme_50_0006_step_12.js";
import Fj_TestScheme_50_0006_step_13 from "../Child/Fj_TestScheme_50_0006_step_13.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0006-2: Initial Process check (Auditor User) (初期処理確認(審査役))", async () => {
    // Login_As_Shinsa1_User
    Login_As_Shinsa1_User();

    // Execute Fj_TestScheme_50_0006_step_04
    Fj_TestScheme_50_0006_step_04();

    // Execute Fj_TestScheme_50_0006_step_05
    Fj_TestScheme_50_0006_step_05();

    // // Execute Fj_TestScheme_50_0006_step_06
    Fj_TestScheme_50_0006_step_06();

    // Execute Fj_TestScheme_50_0006_step_11
    Fj_TestScheme_50_0006_step_11();

    // Execute Fj_TestScheme_50_0006_step_12
    Fj_TestScheme_50_0006_step_12();

    // Execute Fj_TestScheme_50_0006_step_13
    Fj_TestScheme_50_0006_step_13();
  });
}

async function Login_As_Shinsa1_User() {
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

    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );
  });
}

export async function Open_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Open_INI_Record() {
  // Go to 銀行審査 detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini_id3
  );
}

export async function Open_TRR_Record() {
  // Go to TRR record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}
