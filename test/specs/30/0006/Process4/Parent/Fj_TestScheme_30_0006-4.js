var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0006_step_19 from "../Child/Fj_TestScheme_30_0006_step_19.js";
import Fj_TestScheme_30_0006_step_20 from "../Child/Fj_TestScheme_30_0006_step_20.js";
import Fj_TestScheme_30_0006_step_21 from "../Child/Fj_TestScheme_30_0006_step_21.js";
import Fj_TestScheme_30_0006_step_22 from "../Child/Fj_TestScheme_30_0006_step_22.js";
import Fj_TestScheme_30_0006_step_23 from "../Child/Fj_TestScheme_30_0006_step_23.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0006-4: Re-Scoring (再スコアリング)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_30_0006_step_19
    Fj_TestScheme_30_0006_step_19();

    // Execute Fj_TestScheme_30_0006_step_20
    Fj_TestScheme_30_0006_step_20();

    // Execute Fj_TestScheme_30_0006_step_21
    Fj_TestScheme_30_0006_step_21();

    // Execute Fj_TestScheme_30_0006_step_22
    Fj_TestScheme_30_0006_step_22();

    // Execute Fj_TestScheme_30_0006_step_23
    Fj_TestScheme_30_0006_step_23();
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

    // Get TRR record
    await conn
      .sobject("FJ_TotalRepaymentRate__c")
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
          test_data.testData.trr_id = record.Id;
          test_data.testData.trr_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.trr_id);

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
  });
}

export async function Open_Salesforce_TRR_Record() {
  // Go to TRR record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}
export async function Open_EXS() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}
