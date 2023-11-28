var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0003_step_14_data from "../Child/Fj_TestScheme_60_0003_step_14_data";
import Fj_TestScheme_60_0003_step_14 from "../Child/Fj_TestScheme_60_0003_step_14";

export default async function suite() {
  describe("Fj_TestScheme_60_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    /* if external linkage is not available, execute Fj_TestScheme_60_0003_step_14_data and create/update data.
     if else, comment out this line. */
    Fj_TestScheme_60_0003_step_14_data();

    // Execute Fj_TestScheme_60_0003_step_14
    Fj_TestScheme_60_0003_step_14();
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

    // Get DDP record ID
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
          test_data.testData.ddp_id2 = record.Id;
        }
      });
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_As_Admin() {
  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Login_As_Tantou1() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Open_DDP_Record() {
  // Go to 同一人照会 detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id2
  );
}
