var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0003_step_13_data from "../Child/Fj_TestScheme_63-2_0003_step_13_data.js";
import Fj_TestScheme_63_2_0003_step_13 from "../Child/Fj_TestScheme_63-2_0003_step_13.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0003-4: Same person Inquiry result check (同一人照会結果確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0003_step_13_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_2_0003_step_13_data();

    // Execute Fj_TestScheme_63-2_0003_step_13
    Fj_TestScheme_63_2_0003_step_13();
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
      .select("Id, Name, genesis__CL_Product__c")
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

    // Get 2nd DDP record
    await conn
      .sobject("FJ_Examination__c")
      .select("Id")
      .include("FJ_NameDeduplication_Examination__r")
      .select("Id, Name, RecordType.*")
      .end()
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.FJ_NameDeduplication_Examination__r.records.length > 0) {
            for (
              var j = 0;
              j < record.FJ_NameDeduplication_Examination__r.records.length;
              j++
            ) {
              var child_obj =
                record.FJ_NameDeduplication_Examination__r.records[j];
              if (
                child_obj.RecordType.Name ===
                test_data.testData.ddp2_record_type
              ) {
                test_data.testData.ddp2_id = child_obj.Id;
                test_data.testData.ddp2_name = child_obj.Name;
              }
            }
          }
        }
      });
  });
}

export async function Login_As_Tantou1() {
  // Login as tantou1 user
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await App_Launcher();
}

export async function Login_As_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await App_Launcher();
}

async function App_Launcher() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Open_Record_URL(object, id) {
  // Open URL record
  await util.Open_SF_Record_URL(1, object, id);
}
