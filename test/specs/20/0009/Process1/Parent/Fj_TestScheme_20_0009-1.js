var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0009_step_01 from "../Child/Fj_TestScheme_20_0009_step_01";
import Fj_TestScheme_20_0009_step_03 from "../Child/Fj_TestScheme_20_0009_step_03";
import Fj_TestScheme_20_0009_step_04 from "../Child/Fj_TestScheme_20_0009_step_04";
import Fj_TestScheme_20_0009_step_05 from "../Child/Fj_TestScheme_20_0009_step_05";
import Fj_TestScheme_20_0009_step_06 from "../Child/Fj_TestScheme_20_0009_step_06";
import Fj_TestScheme_20_0009_step_09 from "../Child/Fj_TestScheme_20_0009_step_09";

export default async function suite() {
  describe("Fj_TestScheme_20_0009-1: Initial Process Check (初期処理確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_20_0009_step_01
    Fj_TestScheme_20_0009_step_01();

    // Execute Fj_TestScheme_20_0009_step_03
    Fj_TestScheme_20_0009_step_03();

    // Execute Fj_TestScheme_20_0009_step_04
    Fj_TestScheme_20_0009_step_04();

    // Execute Fj_TestScheme_20_0009_step_05
    Fj_TestScheme_20_0009_step_05();

    // Execute Fj_TestScheme_20_0009_step_06
    Fj_TestScheme_20_0009_step_06();

    // Execute Fj_TestScheme_20_0009_step_09
    Fj_TestScheme_20_0009_step_09();
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

    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.cre_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.exs_id);
  });
}

export async function Login_as_tantou() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin";
}

export async function Logout() {
  // logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

export async function Go_to_CNT() {
  // Go to CNT detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

export async function Go_to_APP() {
  // Go to APP detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 案件詳細 tab
  await util.Application_Record_Scrolling(2);
}

export async function Go_to_CRE() {
  // Go to CRE Detail Screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

export async function Go_to_EXS() {
  // Go to EXS Detail Screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}
