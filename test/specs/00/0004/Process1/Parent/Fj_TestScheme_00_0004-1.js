var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0004_step_01 from "../Child/Fj_TestScheme_00_0004_step_01.js";
import Fj_TestScheme_00_0004_step_02 from "../Child/Fj_TestScheme_00_0004_step_02.js";
import Fj_TestScheme_00_0004_step_03 from "../Child/Fj_TestScheme_00_0004_step_03.js";
import Fj_TestScheme_00_0004_step_04 from "../Child/Fj_TestScheme_00_0004_step_04.js";
import Fj_TestScheme_00_0004_step_12 from "../Child/Fj_TestScheme_00_0004_step_12.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0004-1: Initial process check (初期処理確認)", () => {
    // Execute Login_to_Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_00_0004_step_01
    Fj_TestScheme_00_0004_step_01();

    // Execute Fj_TestScheme_00_0004_step_02
    Fj_TestScheme_00_0004_step_02();

    // Execute Fj_TestScheme_00_0004_step_03
    Fj_TestScheme_00_0004_step_03();

    // Execute Fj_TestScheme_00_0004_step_04
    Fj_TestScheme_00_0004_step_04();

    // Execute Fj_TestScheme_00_0004_step_12
    Fj_TestScheme_00_0004_step_12();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get INI 2 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini2_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini_id = record.Id;
          test_data.testData.ini_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini_id);

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name")
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_EXM() {
  // Go to EXM record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );

  // Scroll to view SEC related list
  await util.Scroll_to_related_list(test_data.testData.foreigninq_header);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_INI2() {
  // Go to INI record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_INI3() {
  // Go to INI record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
  );
}
