var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0006_step_28 from "../Child/Fj_TestScheme_20_0006_step_28.js";
import Fj_TestScheme_20_0006_step_29 from "../Child/Fj_TestScheme_20_0006_step_29.js";
import Fj_TestScheme_20_0006_step_32 from "../Child/Fj_TestScheme_20_0006_step_32.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0006-6: Scoring Result check (スコアリング結果確定)", () => {
    // Query Salesforce records via jsforce
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_20_0006_step_28
    Fj_TestScheme_20_0006_step_28();

    // Execute Fj_TestScheme_20_0006_step_29
    Fj_TestScheme_20_0006_step_29();

    // Execute Fj_TestScheme_20_0006_step_32
    Fj_TestScheme_20_0006_step_32();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce records", async () => {
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

    // Record check
    await util.Record_check(1, test_data.testData.exs_id);
  });
}

export async function Login_As_Shinsa1_User() {
  // Login as shinsa1 user
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(15000);
  test_data.testData.logged_status = "shinsa";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Open_Salesforce_EXS_Record() {
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}
