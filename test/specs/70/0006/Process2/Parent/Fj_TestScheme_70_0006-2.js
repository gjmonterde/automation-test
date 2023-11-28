var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0006_step_04 from "../Child/Fj_TestScheme_70_0006_step_04.js";
import Fj_TestScheme_70_0006_step_05 from "../Child/Fj_TestScheme_70_0006_step_05.js";
import Fj_TestScheme_70_0006_step_06 from "../Child/Fj_TestScheme_70_0006_step_06.js";
import Fj_TestScheme_70_0006_step_07 from "../Child/Fj_TestScheme_70_0006_step_07.js";
import Fj_TestScheme_70_0006_step_08 from "../Child/Fj_TestScheme_70_0006_step_08.js";
import Fj_TestScheme_70_0006_step_09 from "../Child/Fj_TestScheme_70_0006_step_09.js";
import Fj_TestScheme_70_0006_step_10 from "../Child/Fj_TestScheme_70_0006_step_10.js";
import Fj_TestScheme_70_0006_step_11 from "../Child/Fj_TestScheme_70_0006_step_11.js";
import Fj_TestScheme_70_0006_step_12 from "../Child/Fj_TestScheme_70_0006_step_12.js";
import Fj_TestScheme_70_0006_step_13 from "../Child/Fj_TestScheme_70_0006_step_13.js";
import Fj_TestScheme_70_0006_step_14 from "../Child/Fj_TestScheme_70_0006_step_14.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0006-2: Initial Process check (Auditor User) (初期処理確認(審査役))", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute
    Fetch_data();

    // Execute Fj_TestScheme_70_0006_step_04
    Fj_TestScheme_70_0006_step_04();

    // Execute Fj_TestScheme_70_0006_step_05
    Fj_TestScheme_70_0006_step_05();

    // Execute Fj_TestScheme_70_0006_step_06
    Fj_TestScheme_70_0006_step_06();

    // Execute Fj_TestScheme_70_0006_step_07
    Fj_TestScheme_70_0006_step_07();

    // Execute Fj_TestScheme_70_0006_step_08
    Fj_TestScheme_70_0006_step_08();

    // Execute Fj_TestScheme_70_0006_step_09
    Fj_TestScheme_70_0006_step_09();

    // Execute Fj_TestScheme_70_0006_step_10
    Fj_TestScheme_70_0006_step_10();

    // Execute Fj_TestScheme_70_0006_step_11
    Fj_TestScheme_70_0006_step_11();

    // Execute Fj_TestScheme_70_0006_step_12
    Fj_TestScheme_70_0006_step_12();

    // Execute Fj_TestScheme_70_0006_step_13
    Fj_TestScheme_70_0006_step_13();

    // Execute Fj_TestScheme_70_0006_step_14
    Fj_TestScheme_70_0006_step_14();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get INI 3 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini_id = record.Id;
          test_data.testData.ini_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini_id);

    // Get EXS record
    await conn
      .sobject("FJ_ExternalScoring__c")
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
          test_data.testData.exs_id = record.Id;
          test_data.testData.exs_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exs_id);

    // Get TRR record
    await conn
      .sobject("FJ_TotalRepaymentRate__c")
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
          test_data.testData.trr_id = record.Id;
          test_data.testData.trr_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.trr_id);

    // Get EXM record
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get SEC record
    await conn
      .sobject("FJ_SecondaryChk__c")
      .select("Id, Name, fj_RefExamination__c, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        "RecordType.Name": test_data.testData.sec1_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.sec_id = record.Id;
          test_data.testData.sec_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.sec_id);

    // Get KID record
    await conn
      .sobject("FJ_KSC_InquiryDetail__c")
      .select("Id, Name")
      .where({
        fj_RefSecondaryChk__c: test_data.testData.sec_id,
        fj_RefTotalRepaymentRate__c: test_data.testData.trr_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.kid_id = record.Id;
          test_data.testData.kid_name = record.Name;
        }
      });
    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.kid_id);

    // Get KIT record
    await conn
      .sobject("FJ_KSC_InquiryResult_Tran__c")
      .select("Id, Name, fj_RefInquiryDetail_KSC__c, fj_CompletionType__c")
      .where({
        fj_RefInquiryDetail_KSC__c: test_data.testData.kid_id,
        fj_CompletionType__c: test_data.testData.kit1_completiontype_val,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.kit_id_arr.push(record.Id);
          test_data.testData.kit_name_arr.push(record.Name);
        }
      });
    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(2, test_data.testData.kit_id_arr);

    // Get JID record
    await conn
      .sobject("FJ_JICC_InquiryDetail__c")
      .select("Id, Name")
      .where({
        fj_RefTotalRepaymentRate__c: test_data.testData.trr_id,
        fj_RefSecondaryChk__c: test_data.testData.sec_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.jid_id = record.Id;
          test_data.testData.jid_name = record.Name;
        }
      });
    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.jid_id);

    // Login as shinsa
    await Login_as_shinsa();
  });
}

export async function Login_as_shinsa() {
  // Login to org - shinsa1
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);
  test_data.testData.logged_status = "auditor";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";
}
export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

export async function Go_To_EXS() {
  // ★ 新環境適用' New Env Implementation
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Go_To_TRR() {
  // ★ 新環境適用' New Env Implementation
  // Go to TRR record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}

export async function Go_To_INI() {
  // ★ 新環境適用' New Env Implementation
  // Go to INI record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_LCD_Rel() {
  // Go to LCD related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini_id,
    user_info.object.ini_lcd_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_KID() {
  // Go to KID record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.kid_obj,
    test_data.testData.kid_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_KIT(id) {
  // Go to KIT record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.kit_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_To_JID() {
  // Go to JID record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.jid_obj,
    test_data.testData.jid_id
  );
}
