var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0009_step_03 from "../Child/Fj_TestScheme_63-2_0009_step_03.js";
import Fj_TestScheme_63_2_0009_step_04 from "../Child/Fj_TestScheme_63-2_0009_step_04.js";
import Fj_TestScheme_63_2_0009_step_05 from "../Child/Fj_TestScheme_63-2_0009_step_05.js";
import Fj_TestScheme_63_2_0009_step_06 from "../Child/Fj_TestScheme_63-2_0009_step_06.js";
import Fj_TestScheme_63_2_0009_step_09 from "../Child/Fj_TestScheme_63-2_0009_step_09.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0009-1: Initial process check (初期処理確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as tantou1
    Login_As_Tantou1();

    // Execute Fj_TestScheme_63-2_0009_step_03
    Fj_TestScheme_63_2_0009_step_03();

    // Execute Fj_TestScheme_63-2_0009_step_04
    Fj_TestScheme_63_2_0009_step_04();

    // Login as tantou1
    Login_As_Tantou1();

    // Execute Fj_TestScheme_63-2_0009_step_05
    Fj_TestScheme_63_2_0009_step_05();

    // Execute Fj_TestScheme_63-2_0009_step_06
    Fj_TestScheme_63_2_0009_step_06();

    // Execute Fj_TestScheme_63-2_0009_step_09
    Fj_TestScheme_63_2_0009_step_09();
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

    // Get APP record and PRO record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name, genesis__CL_Product_Name__c, genesis__CL_Product__c")
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
          test_data.testData.cl_product_id = record.genesis__CL_Product__c;
          test_data.testData.pro_name = record.genesis__CL_Product_Name__c;
        }
      });

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
          test_data.testData.product18_code = record.fj_ProductCode__c;
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

    // Get PC record
    await conn
      .sobject("FJ_ProductCodeMaster__c")
      .select("Id, Name")
      .where({
        fj_RefCLProduct__c: test_data.testData.cl_product_id,
        fj_ProductCode__c: test_data.testData.product18_code,
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
  });
}

async function Login_As_Tantou1() {
  it("Login as tantou1", async () => {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_As_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

export async function Open_Record_URL(object, id) {
  // Open URL record
  await util.Open_SF_Record_URL(1, object, id);
}
