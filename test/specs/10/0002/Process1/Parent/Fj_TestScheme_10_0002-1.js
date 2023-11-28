var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0002_step_01 from "../Child/Fj_TestScheme_10_0002_step_01.js";
import Fj_TestScheme_10_0002_step_02 from "../Child/Fj_TestScheme_10_0002_step_02.js";
import Fj_TestScheme_10_0002_step_03 from "../Child/Fj_TestScheme_10_0002_step_03.js";
import Fj_TestScheme_10_0002_step_05 from "../Child/Fj_TestScheme_10_0002_step_05.js";
import Fj_TestScheme_10_0002_step_06 from "../Child/Fj_TestScheme_10_0002_step_06.js";
import Fj_TestScheme_10_0002_step_08 from "../Child/Fj_TestScheme_10_0002_step_08.js";
import Fj_TestScheme_10_0002_step_09 from "../Child/Fj_TestScheme_10_0002_step_09.js";
import Fj_TestScheme_10_0002_step_10 from "../Child/Fj_TestScheme_10_0002_step_10.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0002-1: Initial process check (初期処理確認)", () => {
    // Execute login
    Login();

    // Execute Fj_TestScheme_10_0002_step_01
    Fj_TestScheme_10_0002_step_01();

    // Execute Fj_TestScheme_10_0002_step_02
    Fj_TestScheme_10_0002_step_02();

    // Execute Fj_TestScheme_10_0002_step_03
    Fj_TestScheme_10_0002_step_03();

    // Execute Fj_TestScheme_10_0002_step_05
    Fj_TestScheme_10_0002_step_05();

    // Execute Fj_TestScheme_10_0002_step_06
    Fj_TestScheme_10_0002_step_06();

    // Execute Fj_TestScheme_10_0002_step_08
    Fj_TestScheme_10_0002_step_08();

    // Execute Fj_TestScheme_10_0002_step_09
    Fj_TestScheme_10_0002_step_09();

    // Execute Fj_TestScheme_10_0002_step_10
    Fj_TestScheme_10_0002_step_10();
  });
}

async function Login() {
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

    // Application 1
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
    // Application 2
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app2_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app2_id = record.Id;
        }
      });

    let check_status = false;
    let check_status2 = false;

    if (test_data.testData.app_id != undefined) {
      check_status = true;
    }
    expect(check_status).toEqual(true);

    if (test_data.testData.app2_id != undefined) {
      check_status2 = true;
    }
    expect(check_status2).toEqual(true);

    // FJ_Contracting__c
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
          test_data.testData.cnt1_id = record.Id;
          test_data.testData.cnt1_name = record.Name;
        }
      });
    // FJ_Contracting__c 2
    await conn
      .sobject("FJ_Contracting__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app2_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cnt2_id = record.Id;
          test_data.testData.cnt2_name = record.Name;
        }
      });
    // FJ_Verification__c 1 & 2
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name") // ★ 新環境適用' New Env Implementation
      .where({
        fj_RefContracting__c: test_data.testData.cnt1_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.document_confirmation1_record_type ===
            record.RecordType.Name // ★ 新環境適用' New Env Implementation
          ) {
            // 書類確認①（本人確認書類)
            test_data.testData.ver1_id = record.Id;
            test_data.testData.ver1_name = record.Name;
          }
          if (
            test_data.testData.document_confirmation2_record_type ===
            record.RecordType.Name // ★ 新環境適用' New Env Implementation
          ) {
            // 書類確認②（その他確認書類）
            test_data.testData.ver2_id = record.Id;
            test_data.testData.ver2_name = record.Name;
          }
        }
      });
    // FJ_Verification__c 3
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt2_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.document_confirmation1_record_type ===
            record.RecordType.Name
          ) {
            // 書類確認①（本人確認書類)
            test_data.testData.ver3_id = record.Id;
            test_data.testData.ver3_name = record.Name;
          }
        }
      });
    // FJ_RequiredDocument__c 1
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
          test_data.testData.rdc1_id = record.Id;
          test_data.testData.rdc1_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.rdc1_id);

    // FJ_RequiredDocument__c 2
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefVerification__c: test_data.testData.ver3_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc2_id = record.Id;
          test_data.testData.rdc2_name = record.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.rdc2_id);

    // Maximize browser
    await browser.maximizeWindow();

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
