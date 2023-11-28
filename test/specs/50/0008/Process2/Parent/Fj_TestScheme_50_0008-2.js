var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0008_step_09_data from "../Child/Fj_TestScheme_50_0008_step_09_data";
import Fj_TestScheme_50_0008_step_09 from "../Child/Fj_TestScheme_50_0008_step_09";
import Fj_TestScheme_50_0008_step_10 from "../Child/Fj_TestScheme_50_0008_step_10";

export default async function suite() {
  describe("Fj_TestScheme_50_0008-2: Anti-Social Inquiry Result Check (反社照会結果確認)", () => {
    // Query salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_50_0008_step_09_data
    Fj_TestScheme_50_0008_step_09_data();

    // Execute Fj_TestScheme_50_0008_step_09
    Fj_TestScheme_50_0008_step_09();

    // Execute Fj_TestScheme_50_0008_step_10
    Fj_TestScheme_50_0008_step_10();
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

    // Get ASC record
    await conn
      .sobject("FJ_AntiSocial__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.asc_id = record.Id;
          test_data.testData.asc_name = record.Name;
        }
      });
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();

  // Go to APP detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Login_As_Shinsa1_User() {
  // Login as shinsa1 user
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();

  // Go to APP detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
