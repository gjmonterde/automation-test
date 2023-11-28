var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0006_step_16 from "../Child/Fj_TestScheme_30_0006_step_16.js";
import Fj_TestScheme_30_0006_step_16_data from "../Child/Fj_TestScheme_30_0006_step_16_data.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0006-3: Scoring Result Check (スコアリング結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_30_0006_step_16
    Fj_TestScheme_30_0006_step_16();

    // Execute Fj_TestScheme_30_0006_step_16_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_30_0006_step_16_data();
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
  // Login as shinsa1 user
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);
  test_data.testData.logged_status = "shinsa"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await Change_App();
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);

  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}
