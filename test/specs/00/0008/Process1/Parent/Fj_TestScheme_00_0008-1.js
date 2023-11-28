var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_00_0008_step_01 from "../Child/Fj_TestScheme_00_0008_step_01.js";
import Fj_TestScheme_00_0008_step_02 from "../Child/Fj_TestScheme_00_0008_step_02.js";
import Fj_TestScheme_00_0008_step_03 from "../Child/Fj_TestScheme_00_0008_step_03.js";
import Fj_TestScheme_00_0008_step_13 from "../Child/Fj_TestScheme_00_0008_step_13.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0008-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_00_0008_step_01
    Fj_TestScheme_00_0008_step_01();

    // Execute Fj_TestScheme_00_0008_step_02
    Fj_TestScheme_00_0008_step_02();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0008_step_03
    Fj_TestScheme_00_0008_step_03();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0008_step_13
    Fj_TestScheme_00_0008_step_13();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce as Auditor", async () => {
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

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Login to org - shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);
    test_data.testData.logged_status = "shinsa"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Open_CNT_Record() {
  // Go to CNT record
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );

  // Scroll to view ASC related list
  await util.Scroll_to_related_list(test_data.testData.asc_header);
}
