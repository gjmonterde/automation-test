var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_40_0009_step_01 from "../Child/Fj_TestScheme_40_0009_step_01";
import Fj_TestScheme_40_0009_step_03 from "../Child/Fj_TestScheme_40_0009_step_03";
import Fj_TestScheme_40_0009_step_04 from "../Child/Fj_TestScheme_40_0009_step_04";
import Fj_TestScheme_40_0009_step_05 from "../Child/Fj_TestScheme_40_0009_step_05";
import Fj_TestScheme_40_0009_step_06 from "../Child/Fj_TestScheme_40_0009_step_06";
import Fj_TestScheme_40_0009_step_09 from "../Child/Fj_TestScheme_40_0009_step_09";

export default async function suite() {
  describe("Fj_TestScheme_40_0009-1: Initial process check (初期処理確認)", () => {
    // Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Login to Salesforce as tantou1
    // NOTE: ALWAYS execute before steps (except step 04)
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0009_step_01
    Fj_TestScheme_40_0009_step_01();

    // Execute Fj_TestScheme_40_0009_step_03
    Fj_TestScheme_40_0009_step_03();

    // Execute Fj_TestScheme_40_0009_step_04
    Fj_TestScheme_40_0009_step_04();

    // Login to salesforce as tantou1
    // NOTE: Re-execute if running steps after step 04
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0009_step_05
    Fj_TestScheme_40_0009_step_05();

    // Execute Fj_TestScheme_40_0009_step_06
    Fj_TestScheme_40_0009_step_06();

    // Execute Fj_TestScheme_40_0009_step_09
    Fj_TestScheme_40_0009_step_09();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.cre_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.pc_id);
  });
}

async function Login_as_tantou() {
  it("Login to Salesforce as User in Charge", async () => {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
