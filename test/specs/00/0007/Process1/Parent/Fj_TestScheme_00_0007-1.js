var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0007_step_01 from "../Child/Fj_TestScheme_00_0007_step_01";
import Fj_TestScheme_00_0007_step_02 from "../Child/Fj_TestScheme_00_0007_step_02";
import Fj_TestScheme_00_0007_step_03 from "../Child/Fj_TestScheme_00_0007_step_03";
import Fj_TestScheme_00_0007_step_35 from "../Child/Fj_TestScheme_00_0007_step_35";

export default async function suite() {
  describe("Fj_TestScheme_00_0007-1: Initial Process Check (初期処理確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_00_0007_step_01
    Fj_TestScheme_00_0007_step_01();

    // Execute Fj_TestScheme_00_0007_step_02
    Fj_TestScheme_00_0007_step_02();

    // Execute Fj_TestScheme_00_0007_step_03
    Fj_TestScheme_00_0007_step_03();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0007_step_35
    Fj_TestScheme_00_0007_step_35();
  });
}

async function Login_To_Salesforce() {
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
      .select("Id, Name, genesis__CL_Product__c") // ★ 新環境適用' New Env Implementation
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.pro_id = record.genesis__CL_Product__c; // ★ 新環境適用' New Env Implementation
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.pro_id);

    // Get GUA record ID and name
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

    // Get GUD record ID and name
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name, fj_ProductCode__c") // ★ 新環境適用' New Env Implementation
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
        "RecordType.Name": test_data.testData.gud1_rectype, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.gud_id = record.Id;
          test_data.testData.gud_name = record.Name;
          test_data.testData.product_code = record.fj_ProductCode__c; // ★ 新環境適用' New Env Implementation
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.gud_id);
    await util.Record_check(1, test_data.testData.product_code);

    // ★ 新環境適用' New Env Implementation
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

export async function Login_as_tantou1() {
  if (test_data.testData.logged_status != "uic") {
    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  }
}

// ★ 新環境適用' New Env Implementation
export async function Login_as_admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";
}

// ★ 新環境適用' New Env Implementation
export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
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
export async function Open_GUD_Record() {
  // Go to GUD record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gud_obj,
    test_data.testData.gud_id
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
export async function Open_PCMaster_Record() {
  // Go to PCMaster record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pc_master_obj,
    test_data.testData.pc_id
  );
}
