var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0002_step_01 from "../Child/Fj_TestScheme_20_0002_step_01.js";
import Fj_TestScheme_20_0002_step_02 from "../Child/Fj_TestScheme_20_0002_step_02.js";
import Fj_TestScheme_20_0002_step_03 from "../Child/Fj_TestScheme_20_0002_step_03.js";
import Fj_TestScheme_20_0002_step_05 from "../Child/Fj_TestScheme_20_0002_step_05.js";
import Fj_TestScheme_20_0002_step_06 from "../Child/Fj_TestScheme_20_0002_step_06.js";
import Fj_TestScheme_20_0002_step_08 from "../Child/Fj_TestScheme_20_0002_step_08.js";
import Fj_TestScheme_20_0002_step_09 from "../Child/Fj_TestScheme_20_0002_step_09.js";
import Fj_TestScheme_20_0002_step_10 from "../Child/Fj_TestScheme_20_0002_step_10.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0002-1: Initial process check (初期処理確認)", () => {
    // Login as tantou1 user
    Login_As_Tantou1_User();

    // Execute Fj_TestScheme_20_0002_step_01
    Fj_TestScheme_20_0002_step_01();

    // Execute Fj_TestScheme_20_0002_step_02
    Fj_TestScheme_20_0002_step_02();

    // Execute Fj_TestScheme_20_0002_step_03
    Fj_TestScheme_20_0002_step_03();

    // Execute Fj_TestScheme_20_0002_step_05
    Fj_TestScheme_20_0002_step_05();

    // Execute Fj_TestScheme_20_0002_step_06
    Fj_TestScheme_20_0002_step_06();

    // Execute Fj_TestScheme_20_0002_step_08
    Fj_TestScheme_20_0002_step_08();

    // Execute Fj_TestScheme_20_0002_step_09
    Fj_TestScheme_20_0002_step_09();

    // Execute Fj_TestScheme_20_0002_step_10
    Fj_TestScheme_20_0002_step_10();
  });
}

async function Login_As_Tantou1_User() {
  it("Login as tantou1 user", async () => {
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

    // Get APP record: without simultaneous application
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

    // Get APP record: with simultaneous application
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app2_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app2_id = record.Id;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.app2_id);

    // Get CNT record: without simultaneous application
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

    // Get CNT record: with simultaneous application
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
    // Record check
    await util.Record_check(1, test_data.testData.cnt2_id);

    // Get VER record where レコードタイプ = ①申込受付後 : without simultaneous application
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name,RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver1_rectype,
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
    // Record check
    await util.Record_check(1, test_data.testData.ver1_id);

    // Get VER record where レコードタイプ = ①申込受付後 : with simultaneous application
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name,RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt2_id,
        "RecordType.Name": test_data.testData.ver1_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ver3_id = record.Id;
          test_data.testData.ver3_name = record.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.ver3_id);

    // Get VER record where レコードタイプ = ②契約手続き前 : without simultaneous application
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_rectype,
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

    // Record check
    await util.Record_check(1, test_data.testData.ver2_id);

    // Get RDC record where 書類確認 = ①申込受付後 : without simultaneous application
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

    // Get RDC record where 書類確認 = ①申込受付後 : with simultaneous application
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

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
