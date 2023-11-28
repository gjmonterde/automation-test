var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0012_step_01 from "../Child/Fj_TestScheme_40_0012_step_01.js";
import Fj_TestScheme_40_0012_step_05 from "../Child/Fj_TestScheme_40_0012_step_05.js";
import Fj_TestScheme_40_0012_step_06 from "../Child/Fj_TestScheme_40_0012_step_06.js";
import Fj_TestScheme_40_0012_step_07 from "../Child/Fj_TestScheme_40_0012_step_07.js";
import Fj_TestScheme_40_0012_step_08 from "../Child/Fj_TestScheme_40_0012_step_08.js";
import Fj_TestScheme_40_0012_step_09 from "../Child/Fj_TestScheme_40_0012_step_09.js";
import Fj_TestScheme_40_0012_step_17 from "../Child/Fj_TestScheme_40_0012_step_17.js";
import Fj_TestScheme_40_0012_step_18 from "../Child/Fj_TestScheme_40_0012_step_18.js";
import Fj_TestScheme_40_0012_step_20 from "../Child/Fj_TestScheme_40_0012_step_20.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0012-1: Initial process check (初期処理確認)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS Execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0012_step_01
    Fj_TestScheme_40_0012_step_01();

    // Execute Fj_TestScheme_40_0012_step_05
    Fj_TestScheme_40_0012_step_05();

    // Execute Fj_TestScheme_40_0012_step_06
    Fj_TestScheme_40_0012_step_06();

    // Execute Fj_TestScheme_40_0012_step_07
    Fj_TestScheme_40_0012_step_07();

    // Execute Fj_TestScheme_40_0012_step_08
    Fj_TestScheme_40_0012_step_08();

    // Execute Fj_TestScheme_40_0012_step_09
    Fj_TestScheme_40_0012_step_09();

    // Execute Fj_TestScheme_40_0012_step_17
    Fj_TestScheme_40_0012_step_17();

    // Execute Fj_TestScheme_40_0012_step_18
    Fj_TestScheme_40_0012_step_18();

    // Execute Fj_TestScheme_40_0012_step_20
    Fj_TestScheme_40_0012_step_20();
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

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get ER Exec Result record
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

    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);

    // Get INI 3 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.RecordType.Name === test_data.testData.ini3_rectype) {
            test_data.testData.ini_id3 = record.Id;
            test_data.testData.ini_name3 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id3);

    // Get LCD record count
    await conn
      .sobject("FJ_LoanCommonDetail__c")
      .select("Id, Name")
      .where({
        fj_InitialChk__c: test_data.testData.ini_id3,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isTrue,
        fj_SubjectCode__c: test_data.testData.lcd_subject_code,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          test_data.testData.lcd_subjcode44_count = test_data.testData
            .lcd_subjcode44_count++;
        }
      });

    // Get BA record count
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_IsForTransfer__c: test_data.testData.isTrue,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          test_data.testData.ba_fortransfer_count = test_data.testData
            .ba_fortransfer_count++;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.ba_id);

    // Get Exec Request records
    await conn
      .sobject("FJ_ExecutionRequest__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (test_data.testData.er_2_rectype == record.RecordType.Name) {
            test_data.testData.er_2_id = record.Id;
            test_data.testData.er_2_name = record.Name;
          }
          if (test_data.testData.er_4_rectype == record.RecordType.Name) {
            test_data.testData.er_4_id = record.Id;
            test_data.testData.er_4_name = record.Name;
          }
          if (test_data.testData.er_6_rectype == record.RecordType.Name) {
            test_data.testData.er_6_id = record.Id;
            test_data.testData.er_6_name = record.Name;
          }
          if (test_data.testData.er_7_rectype == record.RecordType.Name) {
            test_data.testData.er_7_id = record.Id;
            test_data.testData.er_7_name = record.Name;
          }
          if (test_data.testData.er_22_rectype == record.RecordType.Name) {
            test_data.testData.er_22_count = test_data.testData.er_22_count++;
          }
          if (test_data.testData.er_23_rectype == record.RecordType.Name) {
            test_data.testData.er_23_count = test_data.testData.er_23_count++;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.er_2_id);
    await util.Record_check(1, test_data.testData.er_4_id);
    await util.Record_check(1, test_data.testData.er_6_id);
    await util.Record_check(1, test_data.testData.er_7_id);
    await util.Record_counter_check(
      test_data.testData.er_22_count,
      test_data.testData.lcd_subjcode44_count
    );
    await util.Record_counter_check(
      test_data.testData.er_23_count,
      test_data.testData.ba_fortransfer_count
    );

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
