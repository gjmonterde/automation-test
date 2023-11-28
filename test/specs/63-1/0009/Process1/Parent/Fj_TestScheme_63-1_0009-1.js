var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0009_step_01 from "../Child/Fj_TestScheme_63-1_0009_step_01.js";
import Fj_TestScheme_63_1_0009_step_03 from "../Child/Fj_TestScheme_63-1_0009_step_03.js";
import Fj_TestScheme_63_1_0009_step_04 from "../Child/Fj_TestScheme_63-1_0009_step_04.js";
import Fj_TestScheme_63_1_0009_step_05 from "../Child/Fj_TestScheme_63-1_0009_step_05.js";
import Fj_TestScheme_63_1_0009_step_06 from "../Child/Fj_TestScheme_63-1_0009_step_06.js";
import Fj_TestScheme_63_1_0009_step_09 from "../Child/Fj_TestScheme_63-1_0009_step_09.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0009-1: Initial process check (初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as Tantou1
    // Comment out if step_03 is the only step needed to be executed
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0009_step_01
    Fj_TestScheme_63_1_0009_step_01();

    // Execute Fj_TestScheme_63-1_0009_step_03
    Fj_TestScheme_63_1_0009_step_03();

    // Execute Fj_TestScheme_63-1_0009_step_04
    Fj_TestScheme_63_1_0009_step_04();

    // Login as Tantou1
    // Comment out if step_03 is the only step needed to be executed
    // Comment out also if step_03 doesn't need to be executed
    Login_as_Tantou1();

    // // Execute Fj_TestScheme_63-1_0009_step_05
    Fj_TestScheme_63_1_0009_step_05();

    // // Execute Fj_TestScheme_63-1_0009_step_06
    Fj_TestScheme_63_1_0009_step_06();

    // Execute Fj_TestScheme_63-1_0009_step_09
    Fj_TestScheme_63_1_0009_step_09();
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
      .select("Id, Name, genesis__CL_Product__c")
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
          test_data.testData.pro_id = record.genesis__CL_Product__c;
        }
      });

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

    // Get CRE record
    await conn
      .sobject("FJ_CreditApproval__c")
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
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
        }
      });

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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  await util.Application_Record_Scrolling(2);
}

export async function Open_CNT_Record() {
  // Go to CNT record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

export async function Open_CRE_Record() {
  // Go to CRE record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

export async function Open_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Open_GUA_Record() {
  // Go to GUA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}
