var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0012_step_01 from "../Child/Fj_TestScheme_20_0012_step_01.js";
import Fj_TestScheme_20_0012_step_05 from "../Child/Fj_TestScheme_20_0012_step_05.js";
import Fj_TestScheme_20_0012_step_07 from "../Child/Fj_TestScheme_20_0012_step_07.js";
import Fj_TestScheme_20_0012_step_08 from "../Child/Fj_TestScheme_20_0012_step_08.js";
import Fj_TestScheme_20_0012_step_09 from "../Child/Fj_TestScheme_20_0012_step_09.js";
import Fj_TestScheme_20_0012_step_16 from "../Child/Fj_TestScheme_20_0012_step_16.js";
import Fj_TestScheme_20_0012_step_17 from "../Child/Fj_TestScheme_20_0012_step_17.js";
import Fj_TestScheme_20_0012_step_18 from "../Child/Fj_TestScheme_20_0012_step_18.js";
import Fj_TestScheme_20_0012_step_20 from "../Child/Fj_TestScheme_20_0012_step_20.js";
import Fj_TestScheme_20_0012_step_24_data from "../Child/Fj_TestScheme_20_0012_step_24_data.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0012-1: Initial Porcess check (初期処理確認)", () => {
    // Query salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_20_0012_step_01
    Fj_TestScheme_20_0012_step_01();

    // Execute Fj_TestScheme_20_0012_step_05
    Fj_TestScheme_20_0012_step_05();

    // Execute Fj_TestScheme_20_0012_step_07
    Fj_TestScheme_20_0012_step_07();

    // Execute Fj_TestScheme_20_0012_step_08
    Fj_TestScheme_20_0012_step_08();

    // Execute Fj_TestScheme_20_0012_step_09
    Fj_TestScheme_20_0012_step_09();

    // Execute Fj_TestScheme_20_0012_step_16
    Fj_TestScheme_20_0012_step_16();

    // Execute Fj_TestScheme_20_0012_step_17
    Fj_TestScheme_20_0012_step_17();

    // Execute Fj_TestScheme_20_0012_step_18
    Fj_TestScheme_20_0012_step_18();

    // Execute Fj_TestScheme_20_0012_step_20
    Fj_TestScheme_20_0012_step_20();

    // Execute Fj_TestScheme_20_0012_step_24_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_20_0012_step_24_data();
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

    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);

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
          test_data.testData.ini3_id = record.Id;
          test_data.testData.ini3_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);

    // Get LCD records
    await conn
      .sobject("FJ_LoanCommonDetail__c")
      .select("Id, Name, fj_SubjectCode__c, fj_ExistingLoanCollectionFlg__c")
      .where({
        fj_InitialChk__c: test_data.testData.ini3_id,
        fj_ExistingLoanCollectionFlg__c: test_data.testData.isTrue,
      })
      .sort({ Name: 1 })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.fj_SubjectCode__c == test_data.testData.lcd44_code) {
            test_data.testData.lcd44_id_arr.push(record.Id);
            test_data.testData.lcd44_name_arr.push(record.Name);
          }
          if (record.fj_SubjectCode__c == test_data.testData.lcd48_code) {
            test_data.testData.lcd48_id_arr.push(record.Id);
            test_data.testData.lcd48_name_arr.push(record.Name);
          }
        }
      });

    // Get BA records
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.fj_IsForTransfer__c == test_data.testData.isTrue) {
            test_data.testData.ba_array.push(record);
          }
        }
      });

    // Get ER transfer slip records
    await conn
      .sobject("FJ_ExecutionRequest__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.er1_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.er_array.push(record);
        }
      });
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

export async function Go_to_ExecResult() {
  // Go to Execution Result record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

export async function Go_to_ExecRequest_Related() {
  // Go to Execution Result record screen
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_execrequest_rel
  );
}

export async function Go_to_LCD_Related() {
  // Go to 3rd INI Record LCD Related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_lcd_rel
  );
}

export async function Go_to_LCD(lcd_id) {
  // Go to 3rd INI Record LCD Related list
  await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, lcd_id);
}
