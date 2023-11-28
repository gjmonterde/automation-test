var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0009_step_14 from "../Child/Fj_TestScheme_00_0009_step_14.js";
import Fj_TestScheme_00_0009_step_15 from "../Child/Fj_TestScheme_00_0009_step_15.js";
import Fj_TestScheme_00_0009_step_19 from "../Child/Fj_TestScheme_00_0009_step_19.js";
import Fj_TestScheme_00_0009_step_20 from "../Child/Fj_TestScheme_00_0009_step_20.js";
import Fj_TestScheme_00_0009_step_21 from "../Child/Fj_TestScheme_00_0009_step_21.js";
import Fj_TestScheme_00_0009_step_25 from "../Child/Fj_TestScheme_00_0009_step_25.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0009-3: Result Notification Confirmation (結果通知確定)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0009_step_14
    Fj_TestScheme_00_0009_step_14();

    // Execute Fj_TestScheme_00_0009_step_15
    Fj_TestScheme_00_0009_step_15();

    // Execute Fj_TestScheme_00_0009_step_19
    Fj_TestScheme_00_0009_step_19();

    // Execute Fj_TestScheme_00_0009_step_20
    Fj_TestScheme_00_0009_step_20();

    // Execute Fj_TestScheme_00_0009_step_21
    Fj_TestScheme_00_0009_step_21();

    // Execute Fj_TestScheme_00_0009_step_25
    Fj_TestScheme_00_0009_step_25();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get CRE record
    await conn
      .sobject("FJ_CreditApproval__c")
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
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cre_id);

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

export async function Get_WNT_MNT_Records(mnt_type, wnt_type) {
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

  // Get MNT record ID
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name,toLabel(fj_MailNotificationType__c)") // ★ 新環境適用' New Env Implementation
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        // ★ 新環境適用' New Env Implementation
        if (
          test_data.testData.exam_result_compliance_rectype ===
          record.fj_MailNotificationType__c
        ) {
          test_data.testData.mnt_id = record.Id;
          test_data.testData.mnt_name = record.Name;
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.mnt_id);

  // Get WNT record ID
  await conn
    .sobject("FJ_WebNotification__c")
    .select("Id, Name, toLabel(fj_WebNotificationType__c)") // ★ 新環境適用' New Env Implementation
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        // ★ 新環境適用' New Env Implementation
        if (
          test_data.testData.exam_result_compliance_rectype ===
          record.fj_WebNotificationType__c
        ) {
          test_data.testData.wnt_id = record.Id;
          test_data.testData.wnt_name = record.Name;
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(1, test_data.testData.wnt_id);
}

// ★ 新環境適用' New Env Implementation
export async function Open_CRE_Record() {
  // Go to CRE record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_APP_Record(type) {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  if (type != "" && type == 3) {
    // Switch to 告知画面 tab
    await util.Application_Record_Scrolling(3);
  }
}

// ★ 新環境適用' New Env Implementation
export async function Open_WNT_Record() {
  // Go to WNT record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_MNT_Record() {
  // Go to MNT record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_MNT_Rel() {
  // Go to MNT related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_mnt_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_WNT_Rel() {
  // Go to WNT related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_wnt_rel
  );
}
