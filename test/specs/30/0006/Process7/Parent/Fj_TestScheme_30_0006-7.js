var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0006_step_33 from "../Child/Fj_TestScheme_30_0006_step_33.js";
import Fj_TestScheme_30_0006_step_36 from "../Child/Fj_TestScheme_30_0006_step_36.js";
import Fj_TestScheme_30_0006_step_39 from "../Child/Fj_TestScheme_30_0006_step_39.js";
import Fj_TestScheme_30_0006_step_40 from "../Child/Fj_TestScheme_30_0006_step_40.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0006-7: Examination Approval Confirmation (審査決裁確定)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_30_0006_step_33
    Fj_TestScheme_30_0006_step_33();

    // Execute Fj_TestScheme_30_0006_step_36
    Fj_TestScheme_30_0006_step_36();

    // Execute Fj_TestScheme_30_0006_step_39
    Fj_TestScheme_30_0006_step_39();

    // Execute Fj_TestScheme_30_0006_step_40
    Fj_TestScheme_30_0006_step_40();
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
  });
}

export async function Login_as_Shinsa1() {
  // ★ 新環境適用' New Env Implementation
  if (test_data.testData.logged_status != "shinsa") {
    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);
    test_data.testData.logged_status = "shinsa"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  }
}
export async function Login_as_admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation
}

export async function Open_Salesforce_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Switch to 告知画面 tab
  await util.Application_Record_Scrolling(3);
}

export async function Open_Salesforce_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}
