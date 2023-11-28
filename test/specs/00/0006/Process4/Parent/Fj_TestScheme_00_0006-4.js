var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0006_step_24 from "../Child/Fj_TestScheme_00_0006_step_24.js";
import Fj_TestScheme_00_0006_step_25 from "../Child/Fj_TestScheme_00_0006_step_25.js";
import Fj_TestScheme_00_0006_step_26 from "../Child/Fj_TestScheme_00_0006_step_26.js";
import Fj_TestScheme_00_0006_step_27 from "../Child/Fj_TestScheme_00_0006_step_27.js";
import Fj_TestScheme_00_0006_step_28 from "../Child/Fj_TestScheme_00_0006_step_28.js";
import Fj_TestScheme_00_0006_step_29 from "../Child/Fj_TestScheme_00_0006_step_29.js";
import Fj_TestScheme_00_0006_step_30 from "../Child/Fj_TestScheme_00_0006_step_30.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0006-4: Re-Scoring (再スコアリング)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0006_step_24
    Fj_TestScheme_00_0006_step_24();

    // Execute Fj_TestScheme_00_0006_step_25
    Fj_TestScheme_00_0006_step_25();

    // Execute Fj_TestScheme_00_0006_step_26
    Fj_TestScheme_00_0006_step_26();

    // Execute Fj_TestScheme_00_0006_step_27
    Fj_TestScheme_00_0006_step_27();

    // Execute Fj_TestScheme_00_0006_step_28
    Fj_TestScheme_00_0006_step_28();

    // Execute Fj_TestScheme_00_0006_step_29
    Fj_TestScheme_00_0006_step_29();

    // Execute Fj_TestScheme_00_0006_step_30
    Fj_TestScheme_00_0006_step_30();
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
    // Record check
    await util.Record_check(1, test_data.testData.exs_id);

    // Login as shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);
    test_data.testData.logged_status = "shinsa"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

export async function Open_EXS_Record() {
  // Go to EXS record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}
// ★ 新環境適用' New Env Implementation
export async function Open_TRR_Record() {
  // Go to TRR record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}
