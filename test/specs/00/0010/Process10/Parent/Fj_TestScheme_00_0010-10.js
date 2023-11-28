var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0010_step_24 from "../Child/Fj_TestScheme_00_0010_step_24.js";
import Fj_TestScheme_00_0010_step_25 from "../Child/Fj_TestScheme_00_0010_step_25.js";
import Fj_TestScheme_00_0010_step_26 from "../Child/Fj_TestScheme_00_0010_step_26.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0010-10: Re-Upload content check (再アップロード内容確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0010_step_24
    Fj_TestScheme_00_0010_step_24();

    // Execute Fj_TestScheme_00_0010_step_25
    Fj_TestScheme_00_0010_step_25();

    // Execute Fj_TestScheme_00_0010_step_26
    Fj_TestScheme_00_0010_step_26();
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

    // Get VER record where レコードタイプ = 書類確認②（その他確認書類）
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_record_type,
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

    // Get RDC records
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name, fj_DocumentName__c")
      .where({
        fj_RefVerification__c: test_data.testData.ver2_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // ★ 新環境適用' New Env Implementation
          if (record.fj_DocumentName__c == test_data.testData.rdc1_rectype) {
            test_data.testData.rdc1_id_of_ver2 = record.Id;
            test_data.testData.rdc1_name_of_ver2 = record.Name;
          }
          // ★ 新環境適用' New Env Implementation
          if (record.fj_DocumentName__c == test_data.testData.rdc3_rectype) {
            test_data.testData.rdc3_id_of_ver2 = record.Id;
            test_data.testData.rdc3_name_of_ver2 = record.Name;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.rdc1_id_of_ver2);
    await util.Record_check(1, test_data.testData.rdc3_id_of_ver2);

    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

export async function Open_APP_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Open_RDC2_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to RDC record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.rdc_obj,
    test_data.testData.rdc1_id_of_ver2
  );
}

export async function Open_RDC3_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to RDC record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.rdc_obj,
    test_data.testData.rdc3_id_of_ver2
  );
}
