var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_30_0012_step_24 from "../Child/Fj_TestScheme_30_0012_step_24";
import Fj_TestScheme_30_0012_step_38_data from "../Child/Fj_TestScheme_30_0012_step_38_data";
import Fj_TestScheme_30_0012_step_38 from "../Child/Fj_TestScheme_30_0012_step_38";
import Fj_TestScheme_30_0012_step_42 from "../Child/Fj_TestScheme_30_0012_step_42";

export default async function suite() {
  describe("Fj_TestScheme_30_0012-2: Execution Result Check (実行結果確認)", () => {
    // Login to salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_30_0012_step_24
    Fj_TestScheme_30_0012_step_24();

    // Execute Fj_TestScheme_30_0012_step_38_data
    Fj_TestScheme_30_0012_step_38_data();

    // Execute Fj_TestScheme_30_0012_step_38
    Fj_TestScheme_30_0012_step_38();

    // Execute Fj_TestScheme_30_0012_step_42
    Fj_TestScheme_30_0012_step_42();
  });
}

async function Login_To_Salesforce() {
  it("Login to salesforce", async () => {
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

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_tantou() {
  // Login to org - tantou
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Get_ER_Status() {
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

// ★ 新環境適用' New Env Implementation
export async function Get_Notif() {
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
        if (test_data.testData.loan_type == record.fj_WebNotificationType__c) {
          test_data.testData.wnt_name = record.Name;
          test_data.testData.wnt_id = record.Id;
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.wnt_id);

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
        if (test_data.testData.loan_type == record.fj_MailNotificationType__c) {
          test_data.testData.mnt_name = record.Name;
          test_data.testData.mnt_id = record.Id;
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.mnt_id);
}
// ★ 新環境適用' New Env Implementation
// Links
export async function Go_to_ExecResult() {
  // Go to Exec Result Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

export async function Go_to_APP() {
  // Go to App record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Go_to_WNT_list() {
  // Go to WNT related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_wnt_rel
  );
}

export async function Go_to_WNT() {
  // Go to WNT record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt_id
  );
}

export async function Go_to_MNT_list() {
  // Go to MNT related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_mnt_rel
  );
}

export async function Go_to_MNT() {
  // Go to MNT record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}
