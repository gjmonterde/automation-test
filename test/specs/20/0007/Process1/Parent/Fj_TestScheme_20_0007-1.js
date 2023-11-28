var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0007_step_01 from "../Child/Fj_TestScheme_20_0007_step_01";
import Fj_TestScheme_20_0007_step_02 from "../Child/Fj_TestScheme_20_0007_step_02";
import Fj_TestScheme_20_0007_step_03 from "../Child/Fj_TestScheme_20_0007_step_03";
import Fj_TestScheme_20_0007_step_04 from "../Child/Fj_TestScheme_20_0007_step_04";

export default async function suite() {
  describe("Fj_TestScheme_20_0007-1: Initial Process Check (初期処理確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_20_0007_step_01
    Fj_TestScheme_20_0007_step_01();

    // Execute Fj_TestScheme_20_0007_step_02
    Fj_TestScheme_20_0007_step_02();

    // Execute Fj_TestScheme_20_0007_step_03
    Fj_TestScheme_20_0007_step_03();

    // Execute Fj_TestScheme_20_0007_step_04
    Fj_TestScheme_20_0007_step_04();
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
      .select("Id, Name, genesis__CL_Product__c, genesis__CL_Product__r.Name ")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          if (err) {
            return console.error(err);
          }
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.pro_id = record.genesis__CL_Product__c;
          test_data.testData.pro_name = record.genesis__CL_Product__r.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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
    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Get GUD record ID and name
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.gud1_id = record.Id;
          test_data.testData.gud1_name = record.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.gud1_id);
  });
}
export async function Login_as_tantou() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic";

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

export async function Go_to_APP() {
  // Go to APP
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 案件詳細 tab
  await util.Application_Record_Scrolling(2);
}

export async function Go_to_GUA() {
  // Go to GUA
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}

export async function Go_to_GUD() {
  // Go to GUD
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gud_obj,
    test_data.testData.gud1_id
  );
}

export async function Go_to_PRO() {
  // Go to PRO
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gud_obj,
    test_data.testData.pro_id
  );
}

export async function Go_to_PCMaster() {
  // Go to PC Master related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.pro_obj,
    test_data.testData.pro_id,
    user_info.object.pro_pcmaster_rel
  );
}
