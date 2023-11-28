var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0008_step_07_data from "../Child/Fj_TestScheme_63-1_0008_step_07_data.js";
import Fj_TestScheme_63_1_0008_step_07 from "../Child/Fj_TestScheme_63-1_0008_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0008-2: Anti-Social Inquiry Result Check (反社照会結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0008_step_07_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_1_0008_step_07_data();

    // Execute Fj_TestScheme_63-1_0008_step_07
    Fj_TestScheme_63_1_0008_step_07();
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Shinsa1() {
  // Login as shinsa1
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  await util.Application_Record_Scrolling(2);
}

export async function Open_ASC_Record() {
  // Go to ASC record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.asc_obj,
    test_data.testData.asc_id
  );
}
