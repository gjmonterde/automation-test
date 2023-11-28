var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_50_0012_step_39 from "../Child/Fj_TestScheme_50_0012_step_39";
import Fj_TestScheme_50_0012_step_41 from "../Child/Fj_TestScheme_50_0012_step_41";
import Fj_TestScheme_50_0012_step_42 from "../Child/Fj_TestScheme_50_0012_step_42";

export default async function suite() {
  describe("Fj_TestScheme_50_0012-2: Execution Result Check (実行結果確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Login as tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_50_0012_step_39
    Fj_TestScheme_50_0012_step_39();

    // Login as tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_50_0012_step_41
    Fj_TestScheme_50_0012_step_41();

    // Execute Fj_TestScheme_50_0012_step_42
    Fj_TestScheme_50_0012_step_42();
  });
}

async function Login_To_Salesforce() {
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

    // Get Exec Result record
    await conn
      .sobject("FJ_ExecutionResult__c")
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
          test_data.testData.exec_result_name = record.Name;
          test_data.testData.exec_result_id = record.Id;
        }
      });

    // Get MNT record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c), CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.loan_completion_text ==
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt1_name = record.Name;
            test_data.testData.mnt1_id = record.Id;
          }
        }
      });

    // Get WNT record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name, toLabel(fj_WebNotificationType__c)")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.loan_completion_text ==
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt1_name = record.Name;
            test_data.testData.wnt1_id = record.Id;
          }
        }
      });
  });
}

async function Login_as_Tantou1() {
  it("Login as tantou1", async () => {
    // Login to tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
