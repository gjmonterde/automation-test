var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0006_step_29 from "../Child/Fj_TestScheme_10_0006_step_29.js";
import Fj_TestScheme_10_0006_step_33 from "../Child/Fj_TestScheme_10_0006_step_33.js";
import Fj_TestScheme_10_0006_step_35 from "../Child/Fj_TestScheme_10_0006_step_35.js";
import Fj_TestScheme_10_0006_step_36 from "../Child/Fj_TestScheme_10_0006_step_36.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0006-7: Examination Approval Confirmation (審査決裁確定)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_10_0006_step_29
    Fj_TestScheme_10_0006_step_29();

    // Open Salesforce App Record
    // **Comment out if step_29 is the only step needed to be executed
    Open_Salesforce_App_Record();

    // Execute Fj_TestScheme_10_0006_step_33
    Fj_TestScheme_10_0006_step_33();

    // Open Salesforce App Record
    // **Comment out if step_29 is the only step needed to be executed
    // **Comment out also if step_33 doesn't needed to be executed
    Open_Salesforce_App_Record();

    // Execute Fj_TestScheme_10_0006_step_35
    Fj_TestScheme_10_0006_step_35();

    // Open Salesforce App Record
    Open_Salesforce_App_Record();

    // Execute Fj_TestScheme_10_0006_step_36
    Fj_TestScheme_10_0006_step_36();
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

    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

async function Open_Salesforce_App_Record() {
  it("Open Salesforce App Record", async () => {
    // Go to APP record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );
  });
}
