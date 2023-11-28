var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0012_step_24 from "../Child/Fj_TestScheme_20_0012_step_24.js";
import Fj_TestScheme_20_0012_step_37 from "../Child/Fj_TestScheme_20_0012_step_37.js";
import Fj_TestScheme_20_0012_step_38_data from "../Child/Fj_TestScheme_20_0012_step_38_data.js";
import Fj_TestScheme_20_0012_step_38 from "../Child/Fj_TestScheme_20_0012_step_38.js";
import Fj_TestScheme_20_0012_step_42 from "../Child/Fj_TestScheme_20_0012_step_42.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0012-2: Execution Result Check (実行結果確認)", () => {
    // Query salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_20_0012_step_24
    Fj_TestScheme_20_0012_step_24();

    // Execute Fj_TestScheme_20_0012_step_37
    Fj_TestScheme_20_0012_step_37();

    // Execute Fj_TestScheme_20_0012_step_38_data
    Fj_TestScheme_20_0012_step_38_data();

    // Execute Fj_TestScheme_20_0012_step_38
    Fj_TestScheme_20_0012_step_38();

    // Execute Fj_TestScheme_20_0012_step_42
    Fj_TestScheme_20_0012_step_42();
  });
}

async function Query_Salesforce_Records() {
  it("Query salesforce records", async () => {
    // Connect to salesforce
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

    // Get Exec Result record
    await conn
      .sobject("FJ_ExecutionResult__c")
      .select("Id, Name, fj_status__c")
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
          test_data.testData.expected_status_value = record.fj_status__c;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);
  });
}

export async function Login_As_Tantou1_User() {
  // Login to org
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic";

  // Change App
  await Change_App();
}

export async function Login_as_Admin() {
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

export async function Get_Notif() {
  // Connect to salesforce
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

  // Get MNT record
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name, toLabel(fj_MailNotificationType__c)")
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
          test_data.testData.mnt_name = record.Name;
          test_data.testData.mnt_id = record.Id;
        }
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.mnt_id);

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
          test_data.testData.wnt_name = record.Name;
          test_data.testData.wnt_id = record.Id;
        }
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.wnt_id);
}

export async function Go_to_ExecResult() {
  // Go to 実行結果データ
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}
