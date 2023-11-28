var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_30_0003_step_14_data from "../Child/Fj_TestScheme_30_0003_step_14_data.js";
import Fj_TestScheme_30_0003_step_14 from "../Child/Fj_TestScheme_30_0003_step_14.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0003-4: Same person Inquiry result check (同一人照会結果確認)", () => {
    // Query
    Query();

    // Execute Fj_TestScheme_30_0003_step_14_data
    Fj_TestScheme_30_0003_step_14_data();

    // Execute Fj_TestScheme_30_0003_step_14
    Fj_TestScheme_30_0003_step_14();
  });
}

async function Query() {
  it("Query", async () => {
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
                child_obj.RecordType.Name === test_data.testData.ddp_rectype
              ) {
                test_data.testData.ddp_id = child_obj.Id;
                test_data.testData.ddp_name = child_obj.Name;
              }
            }
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ddp_id);
  });
}

export async function Login_as_Tantou1() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // Change App
  await Change_App();
}

export async function Login_as_Admin() {
  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_DDP() {
  // Go to 2nd DDP related record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ddp_obj,
    test_data.testData.ddp_id
  );
}
