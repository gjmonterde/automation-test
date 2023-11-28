var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0002_step_01 from "../Child/Fj_TestScheme_40_0002_step_01.js";
import Fj_TestScheme_40_0002_step_02 from "../Child/Fj_TestScheme_40_0002_step_02.js";
import Fj_TestScheme_40_0002_step_03 from "../Child/Fj_TestScheme_40_0002_step_03.js";
import Fj_TestScheme_40_0002_step_05 from "../Child/Fj_TestScheme_40_0002_step_05.js";
import Fj_TestScheme_40_0002_step_06 from "../Child/Fj_TestScheme_40_0002_step_06.js";
import Fj_TestScheme_40_0002_step_08 from "../Child/Fj_TestScheme_40_0002_step_08.js";
import Fj_TestScheme_40_0002_step_09 from "../Child/Fj_TestScheme_40_0002_step_09.js";
import Fj_TestScheme_40_0002_step_10 from "../Child/Fj_TestScheme_40_0002_step_10.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0002-1: Initial process check (初期処理確認)", () => {
    // Execute Login_to_Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0002_step_01
    Fj_TestScheme_40_0002_step_01();

    // Execute Fj_TestScheme_40_0002_step_02
    Fj_TestScheme_40_0002_step_02();

    // Execute Fj_TestScheme_40_0002_step_03
    Fj_TestScheme_40_0002_step_03();

    // Execute Fj_TestScheme_40_0002_step_05
    Fj_TestScheme_40_0002_step_05();

    // Execute Fj_TestScheme_40_0002_step_06
    Fj_TestScheme_40_0002_step_06();

    // Execute Fj_TestScheme_40_0002_step_08
    Fj_TestScheme_40_0002_step_08();

    // Execute Fj_TestScheme_40_0002_step_09
    Fj_TestScheme_40_0002_step_09();

    // Execute Fj_TestScheme_40_0002_step_10
    Fj_TestScheme_40_0002_step_10();
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

    // Get APP 1 record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name, genesis__CL_Product__c, genesis__CL_Product__r.Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.pro_id = record.genesis__CL_Product__c;
          test_data.testData.pro_name = record.genesis__CL_Product__r.Name;
        }
      });
    // Get APP 2 record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app_name2,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id2 = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.app_id2);

    // Get CNT 1 record
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

    // Get CNT 2 record
    await conn
      .sobject("FJ_Contracting__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id2,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cnt_id2 = record.Id;
          test_data.testData.cnt_name2 = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.cnt_id2);

    // Get VER 1 & 2 record
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.ver_document_confirmation1_rectype ===
            record.RecordType.Name
          ) {
            // 書類確認①（本人確認書類）
            test_data.testData.ver_id = record.Id;
            test_data.testData.ver_name = record.Name;
          }
          if (
            test_data.testData.ver_document_confirmation2_rectype ===
            record.RecordType.Name
          ) {
            // 書類確認②（その他確認書類）
            test_data.testData.ver_id2 = record.Id;
            test_data.testData.ver_name2 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ver_id);
    await util.Record_check(1, test_data.testData.ver_id2);

    // Get VER 3 record
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id2,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.ver_document_confirmation1_rectype ===
            record.RecordType.Name
          ) {
            // 書類確認①（本人確認書類）
            test_data.testData.ver_id3 = record.Id;
            test_data.testData.ver_name3 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ver_id3);

    // Get RDC 1 record
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_RefVerification__c: test_data.testData.ver_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc_id = record.Id;
          test_data.testData.rdc_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.rdc_id);

    // Get RDC 2 record
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id2,
        fj_RefVerification__c: test_data.testData.ver_id3,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc_id2 = record.Id;
          test_data.testData.rdc_name2 = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.rdc_id2);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
