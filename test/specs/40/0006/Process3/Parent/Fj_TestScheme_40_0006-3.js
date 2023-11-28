var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_40_0006_step_15 from "../Child/Fj_TestScheme_40_0006_step_15";
import Fj_TestScheme_40_0006_step_16 from "../Child/Fj_TestScheme_40_0006_step_16";
import Fj_TestScheme_40_0006_step_15_data from "../Child/Fj_TestScheme_40_0006_step_15_data";

export default async function suite() {
  describe("Fj_TestScheme_40_0006-3: Scoring Result Check (スコアリング結果確認)", () => {
    // Fetch data from Salesforce
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_40_0006_step_15_data();

    // Login to Salesforce as auditor
    // NOTE: ALWAYS execute before steps (execept for step_15_data)
    Login_as_shinsa();

    // Execute Fj_TestScheme_40_0006_step_15
    Fj_TestScheme_40_0006_step_15();

    // Execute Fj_TestScheme_40_0006_step_16
    Fj_TestScheme_40_0006_step_16();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

async function Login_as_shinsa() {
  it("Login to Salesforce as auditor", async () => {
    // Login to org - shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // Change Application
    await Change_App();

    // Go to EXS record detail screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exs_obj,
      test_data.testData.exs_id
    );
  });
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // Change Application
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
