var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0009_step_01 from "../Child/Fj_TestScheme_00_0009_step_01.js";
import Fj_TestScheme_00_0009_step_02 from "../Child/Fj_TestScheme_00_0009_step_02.js";
import Fj_TestScheme_00_0009_step_03 from "../Child/Fj_TestScheme_00_0009_step_03.js";
import Fj_TestScheme_00_0009_step_04 from "../Child/Fj_TestScheme_00_0009_step_04.js";
import Fj_TestScheme_00_0009_step_05 from "../Child/Fj_TestScheme_00_0009_step_05.js";
import Fj_TestScheme_00_0009_step_06 from "../Child/Fj_TestScheme_00_0009_step_06.js";
import Fj_TestScheme_00_0009_step_07 from "../Child/Fj_TestScheme_00_0009_step_07.js";
import Fj_TestScheme_00_0009_step_08 from "../Child/Fj_TestScheme_00_0009_step_08.js";
import Fj_TestScheme_00_0009_step_09 from "../Child/Fj_TestScheme_00_0009_step_09.js";
import Fj_TestScheme_00_0009_step_10 from "../Child/Fj_TestScheme_00_0009_step_10.js";
import Fj_TestScheme_00_0009_step_11 from "../Child/Fj_TestScheme_00_0009_step_11.js";
import Fj_TestScheme_00_0009_step_12 from "../Child/Fj_TestScheme_00_0009_step_12.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0009-1: Initial process check (初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0009_step_01
    Fj_TestScheme_00_0009_step_01();

    // Execute Fj_TestScheme_00_0009_step_02
    Fj_TestScheme_00_0009_step_02();

    // Execute Fj_TestScheme_00_0009_step_03
    Fj_TestScheme_00_0009_step_03();

    // Execute Fj_TestScheme_00_0009_step_04
    Fj_TestScheme_00_0009_step_04();

    // Execute Fj_TestScheme_00_0009_step_05
    Fj_TestScheme_00_0009_step_05();

    // Execute Fj_TestScheme_00_0009_step_06
    Fj_TestScheme_00_0009_step_06();

    // Execute Fj_TestScheme_00_0009_step_07
    Fj_TestScheme_00_0009_step_07();

    // Execute Fj_TestScheme_00_0009_step_08
    Fj_TestScheme_00_0009_step_08();

    // Execute Fj_TestScheme_00_0009_step_09
    Fj_TestScheme_00_0009_step_09();

    // Execute Fj_TestScheme_00_0009_step_10
    Fj_TestScheme_00_0009_step_10();

    // Execute Fj_TestScheme_00_0009_step_11
    Fj_TestScheme_00_0009_step_11();

    // Execute Fj_TestScheme_00_0009_step_12
    Fj_TestScheme_00_0009_step_12();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.pro_id);

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

    // Get CRE record
    await conn
      .sobject("FJ_CreditApproval__c")
      .select("Id, Name, fj_ProductCode__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
          test_data.testData.product_code = record.fj_ProductCode__c;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cre_id);
    await util.Record_check(1, test_data.testData.product_code);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exs_id);

    // Get GUA record
    await conn
      .sobject("FJ_GuaranteeChk__c")
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
          test_data.testData.gua_id = record.Id;
          test_data.testData.gua_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Get PC record
    await conn
      .sobject("FJ_ProductCodeMaster__c")
      .select("Id, Name")
      .where({
        fj_RefCLProduct__c: test_data.testData.pro_id,
        fj_ProductCode__c: test_data.testData.product_code,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.pc_id = record.Id;
          test_data.testData.pc_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.pc_id);
  });
}

export async function Login_as_Tantou1() {
  // ★ 新環境適用' New Env Implementation
  if (test_data.testData.logged_status != "uic") {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // Change Application
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  }
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation
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

export async function Open_CNT_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to CNT record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

export async function Open_CRE_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to CRE record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_GUA_Record() {
  // Go to GUA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_PCMaster_Record() {
  // Go to PCMaster record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pc_master_obj,
    test_data.testData.pc_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_PRO_Record() {
  // Go to PRO record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pro_obj,
    test_data.testData.pro_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_PCMaster_Rel() {
  // Go to PCMaster related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.pro_obj,
    test_data.testData.pro_id,
    user_info.object.pro_pcmaster_rel
  );
}
