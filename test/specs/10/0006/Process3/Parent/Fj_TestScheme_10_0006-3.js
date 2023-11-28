var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0006_step_15_data from "../Child/Fj_TestScheme_10_0006_step_15_data.js";
import Fj_TestScheme_10_0006_step_15 from "../Child/Fj_TestScheme_10_0006_step_15.js";
import Fj_TestScheme_10_0006_step_16 from "../Child/Fj_TestScheme_10_0006_step_16.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0006-3: Scoring Result Check (スコアリング結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_10_0006_step_15_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_10_0006_step_15_data();

    // Login as shinsa1
    Login_As_Shinsa1_User();

    // Execute Fj_TestScheme_10_0006_step_15
    Fj_TestScheme_10_0006_step_15();

    // Execute Fj_TestScheme_10_0006_step_16
    Fj_TestScheme_10_0006_step_16();
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_As_Shinsa1_User() {
  it("Login as Shinsa1 user", async () => {
    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // Change App
    await Change_App();
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // Change App
  await Change_App();
}
