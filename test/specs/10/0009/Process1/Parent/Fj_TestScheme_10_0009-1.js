var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_10_0009_step_01 from "../Child/Fj_TestScheme_10_0009_step_01";
import Fj_TestScheme_10_0009_step_03 from "../Child/Fj_TestScheme_10_0009_step_03";
import Fj_TestScheme_10_0009_step_04 from "../Child/Fj_TestScheme_10_0009_step_04";
import Fj_TestScheme_10_0009_step_05 from "../Child/Fj_TestScheme_10_0009_step_05";
import Fj_TestScheme_10_0009_step_06 from "../Child/Fj_TestScheme_10_0009_step_06";
import Fj_TestScheme_10_0009_step_09 from "../Child/Fj_TestScheme_10_0009_step_09";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0009-1: Initial Process check (初期処理確認)", async () => {
    // Query Salesforce records
    Query_Salesforce_Records();

    // Login as tantou1
    // **Comment out this if step_04 is the only step needed to be executed
    Login_as_Tantou1();

    // Execute Fj_TestScheme_10_0009_step_01
    Fj_TestScheme_10_0009_step_01();

    // Execute Fj_TestScheme_10_0009_step_03
    Fj_TestScheme_10_0009_step_03();

    // Execute Fj_TestScheme_10_0009_step_04
    Fj_TestScheme_10_0009_step_04();

    // Login as tantou1
    // **Comment out this if step_04 is the only step needed to be executed
    // **Can also comment out this if step_04 doesn't need to be executed
    Login_as_Tantou1();

    // Execute Fj_TestScheme_10_0009_step_05
    Fj_TestScheme_10_0009_step_05();

    // Execute Fj_TestScheme_10_0009_step_06
    Fj_TestScheme_10_0009_step_06();

    // Execute Fj_TestScheme_10_0009_step_09
    Fj_TestScheme_10_0009_step_09();
  });
}

async function Query_Salesforce_Records() {
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
      .select("Id, Name, genesis__CL_Product__c, fj_Guarantee_Company__c")
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
          test_data.testData.cl_product = record.genesis__CL_Product__c;
          test_data.testData.guarantee_company = record.fj_Guarantee_Company__c;
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

    //Get EXS record
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

    // Get ProductCode record
    await conn
      .sobject("FJ_ProductCodeMaster__c")
      .select("Id, Name, fj_RefCLProduct__c, fj_Guarantee_Company__c")
      .where({
        fj_RefCLProduct__c: test_data.testData.cl_product,
        fj_Guarantee_Company__c: test_data.testData.guarantee_company,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.pro_code_id = record.Id;
          test_data.testData.pro_code = record.Name;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1
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
