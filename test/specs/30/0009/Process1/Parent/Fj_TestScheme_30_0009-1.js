var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_30_0009_step_02 from "../Child/Fj_TestScheme_30_0009_step_02";
import Fj_TestScheme_30_0009_step_03 from "../Child/Fj_TestScheme_30_0009_step_03";
import Fj_TestScheme_30_0009_step_04 from "../Child/Fj_TestScheme_30_0009_step_04";
import Fj_TestScheme_30_0009_step_05 from "../Child/Fj_TestScheme_30_0009_step_05";
import Fj_TestScheme_30_0009_step_08 from "../Child/Fj_TestScheme_30_0009_step_08";
import Fj_TestScheme_30_0009_step_09 from "../Child/Fj_TestScheme_30_0009_step_09";

export default async function suite() {
  describe("Fj_TestScheme_20_0009-1: Initial Process Check (初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_30_0009_step_02
    Fj_TestScheme_30_0009_step_02();

    // Execute Fj_TestScheme_30_0009_step_03
    Fj_TestScheme_30_0009_step_03();

    // Execute Fj_TestScheme_30_0009_step_04
    Fj_TestScheme_30_0009_step_04();

    // Execute Fj_TestScheme_30_0009_step_05
    Fj_TestScheme_30_0009_step_05();

    // Execute Fj_TestScheme_30_0009_step_08
    Fj_TestScheme_30_0009_step_08();

    // Execute Fj_TestScheme_30_0009_step_09
    Fj_TestScheme_30_0009_step_09();
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
      .select("Id, Name,genesis__CL_Product__c")
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
          test_data.testData.clProd_id = record.genesis__CL_Product__c;
        }
      });

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exs_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.pc_master);
  });
}

export async function Login_As_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_As_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
// Links
export async function Go_to_CNT() {
  // Go to 契約手続き detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );
}

export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Go_to_EXS() {
  // Go to EXS detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Go_to_CRE() {
  // Go to CRE detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

export async function Go_to_PCMaster() {
  // Go to PC Master detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pc_master_obj,
    test_data.testData.pc_master
  );
}
