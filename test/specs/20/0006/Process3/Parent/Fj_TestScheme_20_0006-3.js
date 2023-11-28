var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0006_step_15 from "../Child/Fj_TestScheme_20_0006_step_15.js";
import Fj_TestScheme_20_0006_step_15_data from "../Child/Fj_TestScheme_20_0006_step_15_data.js";
import Fj_TestScheme_20_0006_step_16 from "../Child/Fj_TestScheme_20_0006_step_16.js";
import Fj_TestScheme_20_0006_step_18 from "../Child/Fj_TestScheme_20_0006_step_18.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0006-3: Scoring Result Check (スコアリング結果確認)", () => {
    // Query Salesforce records via jsforce
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_20_0006_step_15
    Fj_TestScheme_20_0006_step_15();

    // Execute Fj_TestScheme_20_0006_step_15_data
    Fj_TestScheme_20_0006_step_15_data();

    // Execute Fj_TestScheme_20_0006_step_16
    Fj_TestScheme_20_0006_step_16();

    // Execute Fj_TestScheme_20_0006_step_18
    Fj_TestScheme_20_0006_step_18();
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
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini3_id = record.Id;
          test_data.testData.ini3_name = record.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);

    // Get LCD record where 科目コード = 48 and ローン名 = カードのローン
    await conn
      .sobject("FJ_LoanCommonDetail__c")
      .select("Id, Name")
      .where({
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_SubjectCode__c: test_data.testData.subj_code1,
        fj_LoanName__c: test_data.testData.loan1_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.lcd1_id = record.Id;
          test_data.testData.lcd1_name = record.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.lcd1_id);
  });
}

export async function Login_As_Shinsa1_User() {
  // Login as shinsa1 user
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(15000);
  test_data.testData.logged_status = "shinsa";

  // Change App
  await Change_App();
}

export async function Login_as_admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin";

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Go_to_EXS() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Go_to_LCD() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.lcd_obj,
    test_data.testData.lcd1_id
  );
}
