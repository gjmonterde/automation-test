var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0003_step_13_data from "../Child/Fj_TestScheme_20_0003_step_13_data";
import Fj_TestScheme_20_0003_step_13 from "../Child/Fj_TestScheme_20_0003_step_13";

export default async function suite() {
  describe("Fj_TestScheme_20_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    /* if external linkage is not available, execute Fj_TestScheme_20_0003_step_13_data and create/update data.
     if else, comment out this line. */
    Fj_TestScheme_20_0003_step_13_data();

    // Execute Fj_TestScheme_20_0003_step_13
    Fj_TestScheme_20_0003_step_13();
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
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get EXM name and record ID
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get DDP name and record ID
    await conn
      .sobject("FJ_NameDeduplication__c")
      .select("Id")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        fj_NameDeduplication_Status__c: test_data.testData.ddp_status,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ddp_id = record.Id;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.ddp_id);
  });
}

export async function Login_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin";

  // Change app
  await Change_App();
}

export async function Login_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic";

  // Change app
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
