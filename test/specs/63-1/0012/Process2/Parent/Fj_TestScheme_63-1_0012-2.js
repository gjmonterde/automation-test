var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0012_step_24 from "../Child/Fj_TestScheme_63-1_0012_step_24.js";
import Fj_TestScheme_63_1_0012_step_38_data from "../Child/Fj_TestScheme_63-1_0012_step_38_data.js";
import Fj_TestScheme_63_1_0012_step_38 from "../Child/Fj_TestScheme_63-1_0012_step_38.js";
import Fj_TestScheme_63_1_0012_step_42 from "../Child/Fj_TestScheme_63-1_0012_step_42.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0012-2: Execution Result Check (実行結果確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_63-1_0012_step_24
    // Note: before running schedulable apex class make sure to change the
    // sched_minute, and sched_hour variables in the test info file and
    // make sure the time is advanced by 1 hour and 6 minutes (Japan time)
    Fj_TestScheme_63_1_0012_step_24();

    // Execute Fj_TestScheme_63-1_0012_step_38_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_1_0012_step_38_data();

    // Execute Fj_TestScheme_63-1_0012_step_38
    Fj_TestScheme_63_1_0012_step_38();

    // Execute Fj_TestScheme_63-1_0012_step_42
    Fj_TestScheme_63_1_0012_step_42();
  });
}

async function Login_To_Salesforce() {
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

    await Login_As_Tantou1();
  });
}

export async function Login_As_Tantou1() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
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
}

export async function Switch_App_Tab(app_tab) {
  // Open APP tab
  await util.Application_Record_Scrolling(app_tab);
}

export async function Open_Exec_Record() {
  // Go to Exec Result Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

export async function Get_Exec_Record_Status_Value() {
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

  // Get Exec Result record and fetch status value
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
        test_data.testData.expected_status_value = record.fj_status__c;
      }
    });
}

export async function Get_MNT_WNT_Record() {
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

  // Get WNT record
  await conn
    .sobject("FJ_WebNotification__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_WebNotificationType__c: test_data.testData.wnt11_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.wnt1_id = record.Id;
        test_data.testData.wnt1_name = record.Name;
      }
    });

  // Get MNT record
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_MailNotificationType__c: test_data.testData.mnt11_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.mnt1_id = record.Id;
        test_data.testData.mnt1_name = record.Name;
      }
    });
}

export async function Login_as_Admin() {
  // Login to org as Admin for querying
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
