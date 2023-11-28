var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_30_0009_step_13 from "../Child/Fj_TestScheme_30_0009_step_13";

export default async function suite() {
  describe("Fj_TestScheme_30_0009-3: Result Notification Confirmation (結果通知確定)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_30_0009_step_13
    Fj_TestScheme_30_0009_step_13();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
    // JSforce connection
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

    // Get Application Id
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

    // Get CRE record ID and name
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

    // Record check
    let cre_status = test_data.testData.isFalse;
    if (
      test_data.testData.cre_id != test_data.testData.isUndefined &&
      test_data.testData.cre_id != ""
    ) {
      cre_status = test_data.testData.isTrue;
    }
    expect(cre_status).toEqual(test_data.testData.isTrue);

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login to org as tantou1
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(15000);
      test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }
  });
}

export async function Query_Notification_Records() {
  // JSforce connection
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

  // Get WNT record ID
  await conn
    .sobject("FJ_WebNotification__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_WebNotificationType__c: test_data.testData.wnt_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.wnt_id = record.Id;
        test_data.testData.wnt_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.wnt_id);

  // Get MNT record ID
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      fj_MailNotificationType__c: test_data.testData.mnt_type,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.mnt_id = record.Id;
        test_data.testData.mnt_name = record.Name;
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.mnt_id);
}

// ★ 新環境適用' New Env Implementation
// Links
export async function Go_to_CRE() {
  // Go to 契約手続き Detail Screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}

export async function Go_to_WNT_RelList() {
  // Go to [WNT ]お知らせ items page
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_wnt_rel
  );
}

export async function Go_to_WNT() {
  // Go to WNT Detail Page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt_id
  );
}

export async function Go_to_MNT_RelList() {
  // Go to [MNT] メール通知 items page
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_mnt_rel
  );
}

export async function Go_to_MNT() {
  // Go to MNT Detail Page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}
