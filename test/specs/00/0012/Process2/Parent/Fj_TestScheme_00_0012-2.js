var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_00_0012_step_34_data from "../Child/Fj_TestScheme_00_0012_step_31_data.js";
import Fj_TestScheme_00_0012_step_34_data from "../Child/Fj_TestScheme_00_0012_step_34_data.js";
import Fj_TestScheme_00_0012_step_29 from "../Child/Fj_TestScheme_00_0012_step_29.js";
import Fj_TestScheme_00_0012_step_30 from "../Child/Fj_TestScheme_00_0012_step_30.js";
import Fj_TestScheme_00_0012_step_31 from "../Child/Fj_TestScheme_00_0012_step_31.js";
import Fj_TestScheme_00_0012_step_32 from "../Child/Fj_TestScheme_00_0012_step_32.js";
import Fj_TestScheme_00_0012_step_33 from "../Child/Fj_TestScheme_00_0012_step_33.js";
import Fj_TestScheme_00_0012_step_34 from "../Child/Fj_TestScheme_00_0012_step_34.js";
import Fj_TestScheme_00_0012_step_35 from "../Child/Fj_TestScheme_00_0012_step_35.js";
import Fj_TestScheme_00_0012_step_36 from "../Child/Fj_TestScheme_00_0012_step_36.js";
import Fj_TestScheme_00_0012_step_37 from "../Child/Fj_TestScheme_00_0012_step_37.js";
import Fj_TestScheme_00_0012_step_38 from "../Child/Fj_TestScheme_00_0012_step_38.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0012-2: Execution Result Check (実行結果確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    //**NO EXECUTION RESULT ERROR, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_29
    Fj_TestScheme_00_0012_step_29();

    // ★ 新環境適用' New Env Implementation
    // Execute Fj_TestScheme_00_0012_step_31_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_00_0012_step_31_data();

    // Execute Fj_TestScheme_00_0012_step_31
    // Note: before running schedulable apex class make sure to change the
    // sched_minute, and sched_hour variables in the test info file and
    // make sure the time is advanced by 1 hour and 6 minutes (Japan time)
    Fj_TestScheme_00_0012_step_31();

    // Execute Fj_TestScheme_00_0012_step_33
    Fj_TestScheme_00_0012_step_33();

    // Execute Fj_TestScheme_00_0012_step_34_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_00_0012_step_34_data();

    // Execute Fj_TestScheme_00_0012_step_34
    Fj_TestScheme_00_0012_step_34();

    //**ERROR FOUND EXECUTION RESULT, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_30
    Fj_TestScheme_00_0012_step_30();

    // Execute Fj_TestScheme_00_0012_step_32
    Fj_TestScheme_00_0012_step_32();

    //**EXECUTION METHOD SLIP OUTPUT, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_35
    Fj_TestScheme_00_0012_step_35();

    // Execute Fj_TestScheme_00_0012_step_36
    Fj_TestScheme_00_0012_step_36();

    // Execute Fj_TestScheme_00_0012_step_37
    Fj_TestScheme_00_0012_step_37();

    // Execute Fj_TestScheme_00_0012_step_38
    Fj_TestScheme_00_0012_step_38();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function Login_as_tantou1() {
  if (test_data.testData.logged_status != "uic") {
    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic";

    // CL Originate - App Launcher
    await Change_App();
  }
}

// ★ 新環境適用' New Env Implementation
export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // Change App
  await Change_App();
}

export async function Open_APP_Record(type) {
  // ★ 新環境適用' New Env Implementation
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  switch (type) {
    case 3:
      // Switch to 告知画面  tab
      await util.Application_Record_Scrolling(3);
      break;
    case 4:
      // Switch to 実行画面 tab
      await util.Application_Record_Scrolling(4);
      break;
  }
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT() {
  // Go to WNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MNT() {
  // Go to MNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MNT_Rel() {
  // Go to MNT related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_mnt_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT_Rel() {
  // Go to WNT related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_wnt_rel
  );
}

export async function Open_Exec_Record() {
  // ★ 新環境適用' New Env Implementation
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

export async function Get_WNT_MNT_Records() {
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
          test_data.testData.borrowing_rectype ===
          record.fj_MailNotificationType__c
        ) {
          test_data.testData.mnt_name = record.Name;
          test_data.testData.mnt_id = record.Id;
          continue;
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.mail_time);

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
          test_data.testData.borrowing_rectype ===
          record.fj_WebNotificationType__c
        ) {
          test_data.testData.wnt_id = record.Id;
          test_data.testData.wnt_name = record.Name;
          continue;
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.wnt_id);
}
