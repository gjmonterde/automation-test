var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0006_step_04 from "../Child/Fj_TestScheme_60_0006_step_04.js";
import Fj_TestScheme_60_0006_step_05 from "../Child/Fj_TestScheme_60_0006_step_05.js";
import Fj_TestScheme_60_0006_step_06 from "../Child/Fj_TestScheme_60_0006_step_06.js";
import Fj_TestScheme_60_0006_step_07 from "../Child/Fj_TestScheme_60_0006_step_07.js";
import Fj_TestScheme_60_0006_step_09 from "../Child/Fj_TestScheme_60_0006_step_09.js";
import Fj_TestScheme_60_0006_step_10 from "../Child/Fj_TestScheme_60_0006_step_10.js";
import Fj_TestScheme_60_0006_step_11 from "../Child/Fj_TestScheme_60_0006_step_11.js";
import Fj_TestScheme_60_0006_step_12 from "../Child/Fj_TestScheme_60_0006_step_12.js";
import Fj_TestScheme_60_0006_step_13 from "../Child/Fj_TestScheme_60_0006_step_13.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0006-2: Initial Process check (Auditor User) (初期処理確認(審査役))", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_60_0006_step_04
    Fj_TestScheme_60_0006_step_04();

    // Execute Fj_TestScheme_60_0006_step_05
    Fj_TestScheme_60_0006_step_05();

    // Execute Fj_TestScheme_60_0006_step_06
    Fj_TestScheme_60_0006_step_06();

    // Execute Fj_TestScheme_60_0006_step_07
    Fj_TestScheme_60_0006_step_07();

    // Execute Fj_TestScheme_60_0006_step_09
    Fj_TestScheme_60_0006_step_09();

    // Execute Fj_TestScheme_60_0006_step_10
    Fj_TestScheme_60_0006_step_10();

    // Execute Fj_TestScheme_60_0006_step_11
    Fj_TestScheme_60_0006_step_11();

    // Execute Fj_TestScheme_60_0006_step_12
    Fj_TestScheme_60_0006_step_12();

    // Execute Fj_TestScheme_60_0006_step_13
    Fj_TestScheme_60_0006_step_13();
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

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini_record_type3,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini3_id = record.Id;
          test_data.testData.ini3_name = record.Name;
        }
      });

    // Get KID record
    await conn
      .sobject("FJ_KSC_InquiryDetail__c")
      .select("Id, Name")
      .where({
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

    // Get JID record
    await conn
      .sobject("FJ_JICC_InquiryDetail__c")
      .select("Id, Name")
      .where({
        fj_RefTotalRepaymentRate__c: test_data.testData.trr_id,
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

    // Get KIT record
    test_data.testData.kit_id_arr = [];
    test_data.testData.kit_name_arr = [];

    await conn
      .sobject("FJ_KSC_InquiryResult_Tran__c")
      .select("Id, Name")
      .where({
        fj_RefInquiryDetail_KSC__c: test_data.testData.kid_id,
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

    // Record check
    await util.Record_check(2, test_data.testData.kit_id_arr);

    // Get JIM record
    test_data.testData.jim_id_arr = [];
    test_data.testData.jim_name_arr = [];

    await conn
      .sobject("FJ_JICC_InquiryResult_M__c")
      .select("Id, Name")
      .where({
        fj_RefInquiryDetail_JICC__c: test_data.testData.jid_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.jim_id_arr.push(record.Id);
          test_data.testData.jim_name_arr.push(record.Name);
        }
      });

    // Record check
    await util.Record_check(2, test_data.testData.jim_id_arr);

    // Get JIB record
    test_data.testData.jib_id_arr = [];
    test_data.testData.jib_name_arr = [];

    await conn
      .sobject("FJ_JICC_InquiryResult_Debt__c")
      .select("Id, Name")
      .where({
        fj_RefInquiryDetail_JICC__c: test_data.testData.jid_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.jib_id_arr.push(record.Id);
          test_data.testData.jib_name_arr.push(record.Name);
        }
      });

    // Record check
    await util.Record_check(2, test_data.testData.jib_id_arr);

    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Salesforce_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Open_Salesforce_TRR_Record() {
  // Go to TRR record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.trr_obj,
    test_data.testData.trr_id
  );
}

export async function Open_Salesforce_INI3_Record() {
  // Go to INI(3) record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
  );
}

export async function Open_KIT(id) {
  // Go to KIT record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.kit_obj, id);
}

export async function Open_JIM(id) {
  // Go to JIM record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.jim_obj, id);
}

export async function Open_JIB(id) {
  // Go to JIB record detail screen
  await util.Open_SF_Record_URL(1, user_info.object.jib_obj, id);
}
