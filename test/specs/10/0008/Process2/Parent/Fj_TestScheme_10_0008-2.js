var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_10_0008_step_06_data from "../Child/Fj_TestScheme_10_0008_step_06_data";
import Fj_TestScheme_10_0008_step_06 from "../Child/Fj_TestScheme_10_0008_step_06";
import Fj_TestScheme_10_0008_step_11 from "../Child/Fj_TestScheme_10_0008_step_11";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0008-2: Antisocial inquiry result check (反社照会結果確認)", async () => {
    // Query Salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_10_0008_step_06_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_10_0008_step_06_data();

    // Execute Fj_TestScheme_10_0008_step_06
    Fj_TestScheme_10_0008_step_06();

    // Execute Fj_TestScheme_10_0008_step_11
    Fj_TestScheme_10_0008_step_11();
  });
}

async function Query_Salesforce_Records() {
  it("Login to Salesforce", async () => {
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
      .select("Id, Name, fj_AutoQueryFlag__c")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        fj_AutoQueryFlag__c: true,
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // Change App
  await Change_App();
}

export async function Login_as_Shinsa1() {
  // Login as shinsa1 user
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);

  // Change App
  await Change_App();
}

export async function Login_as_Tantou1() {
  // Login as Tantou1 user
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
