var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0009_step_01 from "../Child/Fj_TestScheme_70_0009_step_01.js";
import Fj_TestScheme_70_0009_step_03 from "../Child/Fj_TestScheme_70_0009_step_03.js";
import Fj_TestScheme_70_0009_step_04 from "../Child/Fj_TestScheme_70_0009_step_04.js";
import Fj_TestScheme_70_0009_step_05 from "../Child/Fj_TestScheme_70_0009_step_05.js";
import Fj_TestScheme_70_0009_step_08 from "../Child/Fj_TestScheme_70_0009_step_08.js";
import Fj_TestScheme_70_0009_step_09 from "../Child/Fj_TestScheme_70_0009_step_09.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0009-1: Initial process check (初期処理確認)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute
    Fetch_data();

    // Execute Fj_TestScheme_70_0009_step_01
    Fj_TestScheme_70_0009_step_01();

    // Execute Fj_TestScheme_70_0009_step_03
    Fj_TestScheme_70_0009_step_03();

    // Execute Fj_TestScheme_70_0009_step_04
    Fj_TestScheme_70_0009_step_04();

    // Execute Fj_TestScheme_70_0009_step_05
    Fj_TestScheme_70_0009_step_05();

    // Execute Fj_TestScheme_70_0009_step_08
    Fj_TestScheme_70_0009_step_08();

    // Execute Fj_TestScheme_70_0009_step_09
    Fj_TestScheme_70_0009_step_09();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
    // Connect to salesforce
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
          test_data.testData.cre_product_code = record.fj_ProductCode__c;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cre_id);

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

    // Get PC record
    await conn
      .sobject("FJ_ProductCodeMaster__c")
      .select("Id, Name")
      .where({
        fj_RefCLProduct__c: test_data.testData.pro_id,
        fj_ProductCode__c: test_data.testData.cre_product_code,
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

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_CNT() {
  // Go to CNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  await util.Application_Record_Scrolling(2);
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_EXS() {
  // Go to EXS record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_CRE() {
  // Go to CRE record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_PCMaster() {
  // Go to PCMaster record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pc_master_obj,
    test_data.testData.pc_id
  );
}
