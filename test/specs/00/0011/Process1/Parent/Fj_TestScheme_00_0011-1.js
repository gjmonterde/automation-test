var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_00_0011_step_01 from "../Child/Fj_TestScheme_00_0011_step_01";
import Fj_TestScheme_00_0011_step_02 from "../Child/Fj_TestScheme_00_0011_step_02";
import Fj_TestScheme_00_0011_step_03 from "../Child/Fj_TestScheme_00_0011_step_03";
import Fj_TestScheme_00_0011_step_04 from "../Child/Fj_TestScheme_00_0011_step_04";
import Fj_TestScheme_00_0011_step_05 from "../Child/Fj_TestScheme_00_0011_step_05";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_00_0011_step_01
    Fj_TestScheme_00_0011_step_01();

    // Execute Fj_TestScheme_00_0011_step_02
    Fj_TestScheme_00_0011_step_02();

    // Execute Fj_TestScheme_00_0011_step_03
    Fj_TestScheme_00_0011_step_03();

    // Execute Fj_TestScheme_00_0011_step_04
    Fj_TestScheme_00_0011_step_04();

    // Execute Fj_TestScheme_00_0011_step_05
    Fj_TestScheme_00_0011_step_05();
  });
}

async function Login_to_Salesforce() {
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
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get CNT record
    await conn
      .sobject("FJ_Contracting__c")
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
          test_data.testData.cnt_id = record.Id;
          test_data.testData.cnt_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get AGR record
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.condition_check_rectype ===
            record.RecordType.Name
          ) {
            test_data.testData.agr_name = record.Name;
            test_data.testData.agr_id = record.Id;
          }
          if (
            test_data.testData.contract_agreement_rectype ===
            record.RecordType.Name
          ) {
            test_data.testData.agr2_name = record.Name;
            test_data.testData.agr2_id = record.Id;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.agr_id);
    await util.Record_check(1, test_data.testData.agr2_id);

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
            test_data.testData.bank_account_registration_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt_id = record.Id;
            test_data.testData.mnt_name = record.Name;
          }
          if (
            test_data.testData.condition_check_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt2_id = record.Id;
            test_data.testData.mnt2_name = record.Name;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mnt_id);
    await util.Record_check(1, test_data.testData.mnt2_id);

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
            test_data.testData.bank_account_registration_rectype ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id = record.Id;
            test_data.testData.wnt_name = record.Name;
          }
          if (
            test_data.testData.condition_check_rectype ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt2_id = record.Id;
            test_data.testData.wnt2_name = record.Name;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);
    await util.Record_check(1, test_data.testData.wnt2_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  });
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_CNT() {
  // Go to CNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );

  // Scroll to view ASC
  await util.Scroll_to_related_list(test_data.testData.asc_header);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_AGR1() {
  // Go to AGR record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.agr_obj,
    test_data.testData.agr_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_AGR2() {
  // Go to AGR record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.agr_obj,
    test_data.testData.agr2_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT1() {
  // Go to WNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT2() {
  // Go to WNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt2_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MNT1() {
  // Go to MNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MNT2() {
  // Go to MNT record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt2_id
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

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
