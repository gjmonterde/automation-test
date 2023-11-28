var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0008_step_06_data from "../Child/Fj_TestScheme_20_0008_step_06_data";
import Fj_TestScheme_20_0008_step_06 from "../Child/Fj_TestScheme_20_0008_step_06";

export default async function suite() {
  describe("Fj_TestScheme_20_0008-2: Anti-Social Inquiry Application form check (反社照会申込署確認)", () => {
    // Query salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_20_0008_step_06_data data linkage manual edit of fields
    Fj_TestScheme_20_0008_step_06_data();

    // Execute Fj_TestScheme_20_0008_step_06
    Fj_TestScheme_20_0008_step_06();
  });
}

async function Query_Salesforce_Records() {
  it("Query salesforce records", async () => {
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

    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.asc_id);
  });
}

export async function Login_as_shinsa() {
  // Login to org - auditor
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(15000);
  test_data.testData.logged_status = "shinsa";

  // Change App
  await Change_App();
}

export async function Login_as_tantou() {
  // Login to org - tantou
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic";

  // Change App
  await Change_App();
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin";

  // Change App
  await Change_App();
}

export async function Logout() {
  // logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Go_to_APP() {
  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 案件詳細 tab
  await util.Application_Record_Scrolling(2);
}

export async function Go_to_ASC() {
  // Go to ASC record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.asc_obj,
    test_data.testData.asc_id
  );
}
