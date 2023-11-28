var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_60_0009_step_02 from "../Child/Fj_TestScheme_60_0009_step_02";
import Fj_TestScheme_60_0009_step_03 from "../Child/Fj_TestScheme_60_0009_step_03";
import Fj_TestScheme_60_0009_step_04 from "../Child/Fj_TestScheme_60_0009_step_04";
import Fj_TestScheme_60_0009_step_05 from "../Child/Fj_TestScheme_60_0009_step_05";
import Fj_TestScheme_60_0009_step_08 from "../Child/Fj_TestScheme_60_0009_step_08";
import Fj_TestScheme_60_0009_step_09 from "../Child/Fj_TestScheme_60_0009_step_09";

export default async function suite() {
  describe("Fj_TestScheme_60_0009-1: Initial Process Check (初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_60_0009_step_02
    Fj_TestScheme_60_0009_step_02();

    // Execute Fj_TestScheme_60_0009_step_03
    Fj_TestScheme_60_0009_step_03();

    // Execute Fj_TestScheme_60_0009_step_04
    Fj_TestScheme_60_0009_step_04();

    // Execute Fj_TestScheme_60_0009_step_05
    Fj_TestScheme_60_0009_step_05();

    // Execute Fj_TestScheme_60_0009_step_08
    Fj_TestScheme_60_0009_step_08();

    // Execute Fj_TestScheme_60_0009_step_09
    Fj_TestScheme_60_0009_step_09();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce Records", async () => {
    // JSforce connection
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

    // Get Application Id
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

    // Get CNT record ID and name
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

    // Get CRE record ID and name
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

    // Get EXS record ID and name
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

    // Get CL Product
    await conn
      .sobject("genesis__Applications__c")
      .select("genesis__CL_Product__c")
      .where({
        Id: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.clProd_id = record.genesis__CL_Product__c;
        }
      });

    // Get Product Code Master
    await conn
      .sobject("FJ_ProductCodeMaster__c")
      .select("Id")
      .where({
        fj_DoGuaranteeChk__c: test_data.testData.isTrue,
        fj_RefCLProduct__c: test_data.testData.clProd_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.pc_master = record.Id;
        }
      });
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Login_as_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Open_SF_CRE_Record() {
  // Go to 契約手続き Detail Screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}
