var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0004_step_01 from "../Child/Fj_TestScheme_63-1_0004_step_01.js";
import Fj_TestScheme_63_1_0004_step_03 from "../Child/Fj_TestScheme_63-1_0004_step_03.js";
import Fj_TestScheme_63_1_0004_step_04 from "../Child/Fj_TestScheme_63-1_0004_step_04.js";
import Fj_TestScheme_63_1_0004_step_12 from "../Child/Fj_TestScheme_63-1_0004_step_12.js";
import Fj_TestScheme_63_1_0004_step_13 from "../Child/Fj_TestScheme_63-1_0004_step_13.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0004-1: Initial process check (初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0004_step_01
    Fj_TestScheme_63_1_0004_step_01();

    // Execute Fj_TestScheme_63-1_0004_step_03
    Fj_TestScheme_63_1_0004_step_03();

    // Execute Fj_TestScheme_63-1_0004_step_04
    Fj_TestScheme_63_1_0004_step_04();

    // Execute Fj_TestScheme_63-1_0004_step_12
    Fj_TestScheme_63_1_0004_step_12();

    // Execute Fj_TestScheme_63-1_0004_step_13
    Fj_TestScheme_63_1_0004_step_13();
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
        "RecordType.Name": test_data.testData.ini3_record_type,
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

    // Maximize browser
    await browser.maximizeWindow();

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to EXM record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // ★ 新環境適用' New Env Implementation
    await util.Scroll_to_related_list(test_data.testData.exm_scroll);
  });
}
