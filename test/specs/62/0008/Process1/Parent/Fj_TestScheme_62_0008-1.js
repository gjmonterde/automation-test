var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_62_0008_step_01 from "../Child/Fj_TestScheme_62_0008_step_01";
import Fj_TestScheme_62_0008_step_02 from "../Child/Fj_TestScheme_62_0008_step_02";
import Fj_TestScheme_62_0008_step_03 from "../Child/Fj_TestScheme_62_0008_step_03";
import Fj_TestScheme_62_0008_step_04 from "../Child/Fj_TestScheme_62_0008_step_04";
import Fj_TestScheme_62_0008_step_06 from "../Child/Fj_TestScheme_62_0008_step_06";

export default async function suite() {
  describe("Fj_TestScheme_62_0008-1: Initial process check (初期処理確認)", () => {
    // Login to salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_62_0008_step_01
    Fj_TestScheme_62_0008_step_01();

    // Execute Fj_TestScheme_62_0008_step_02
    Fj_TestScheme_62_0008_step_02();

    // Execute Fj_TestScheme_62_0008_step_03
    Fj_TestScheme_62_0008_step_03();

    // Execute Fj_TestScheme_62_0008_step_04
    Fj_TestScheme_62_0008_step_04();

    // Execute Fj_TestScheme_62_0008_step_06
    Fj_TestScheme_62_0008_step_06();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce as Auditor", async () => {
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
    let csv_record_no = eval(
      "test_data.testData.csv_value" +
        test_data.testData.record_no +
        "_systemacceptno"
    );
    // Get APP Record
    await conn
      .sobject("FJ_MuCooperationApp__c")
      .select(
        "Id, Name, fj_System_Acception_No__c, fj_RefApplication__c, fj_RefApplication__r.Name"
      )
      .where({
        fj_System_Acception_No__c: csv_record_no,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.fj_RefApplication__c;
          test_data.testData.app_name = record.fj_RefApplication__r.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.asc_id);

    // Get STT record
    await conn
      .sobject("FJ_Statement__c")
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
          test_data.testData.stt_id = record.Id;
          test_data.testData.stt_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.stt_id);

    if (test_data.testData.logged_status != "shinsa") {
      // Login to org - shinsa1
      await LoginPage.open();
      await LoginPage.login_as_auditor();
      await browser.pause(10000);
      test_data.testData.logged_status = "shinsa";

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  await util.Application_Record_Scrolling(2);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CNT() {
  // Go to CNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_STT() {
  // Go to STT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.stt_obj,
    test_data.testData.stt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_ASC() {
  // Go to ASC record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.asc_obj,
    test_data.testData.asc_id
  );
}
