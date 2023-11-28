var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0002_step_01 from "../Child/Fj_TestScheme_00_0002_step_01.js";
import Fj_TestScheme_00_0002_step_02 from "../Child/Fj_TestScheme_00_0002_step_02.js";
import Fj_TestScheme_00_0002_step_03 from "../Child/Fj_TestScheme_00_0002_step_03.js";
import Fj_TestScheme_00_0002_step_04 from "../Child/Fj_TestScheme_00_0002_step_04.js";
import Fj_TestScheme_00_0002_step_05 from "../Child/Fj_TestScheme_00_0002_step_05.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0002-1: Initial process check (初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0002_step_01
    Fj_TestScheme_00_0002_step_01();

    // Execute Fj_TestScheme_00_0002_step_02
    Fj_TestScheme_00_0002_step_02();

    // Execute Fj_TestScheme_00_0002_step_03
    Fj_TestScheme_00_0002_step_03();

    // Execute Fj_TestScheme_00_0002_step_04
    Fj_TestScheme_00_0002_step_04();

    // Execute Fj_TestScheme_00_0002_step_05
    Fj_TestScheme_00_0002_step_05();
  });
}

async function Query_Salesforce_Records() {
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

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get VER record where レコードタイプ = 書類確認①（本人確認書類）
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver1_record_type, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ver1_id = record.Id;
          test_data.testData.ver1_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ver1_id);

    // Get RDC record where 書類確認 = 書類確認①（本人確認書類）
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefVerification__c: test_data.testData.ver1_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc1_id_of_ver1 = record.Id;
          test_data.testData.rdc1_name_of_ver1 = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.rdc1_id_of_ver1);

    // Get VER record where レコードタイプ = 書類確認②（その他確認書類）
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_record_type, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ver2_id = record.Id;
          test_data.testData.ver2_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ver2_id);

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    // ★ 新環境適用' New Env Implementation
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Go_to_APP() {
  // Go to APP record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Go_to_VER(id) {
  // Go to VER record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(1, user_info.object.ver_obj, id);

  // Scroll to RDC rel list
  await util.Scroll_to_related_list(test_data.testData.rdc_header); // ★ 新環境適用' New Env Implementation
}

export async function Go_to_CNT() {
  // Go to CNT record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

export async function Go_to_RDC() {
  // Go to RDC of VER1 page record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.rdc_obj,
    test_data.testData.rdc1_id_of_ver1
  );
}
