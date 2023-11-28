var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0012_step_02 from "../Child/Fj_TestScheme_70_0012_step_02.js";
import Fj_TestScheme_70_0012_step_05 from "../Child/Fj_TestScheme_70_0012_step_05.js";
import Fj_TestScheme_70_0012_step_07 from "../Child/Fj_TestScheme_70_0012_step_07.js";
import Fj_TestScheme_70_0012_step_10 from "../Child/Fj_TestScheme_70_0012_step_10.js";
import Fj_TestScheme_70_0012_step_13 from "../Child/Fj_TestScheme_70_0012_step_13.js";
import Fj_TestScheme_70_0012_step_14 from "../Child/Fj_TestScheme_70_0012_step_14.js";
import Fj_TestScheme_70_0012_step_15 from "../Child/Fj_TestScheme_70_0012_step_15.js";
import Fj_TestScheme_70_0012_step_16 from "../Child/Fj_TestScheme_70_0012_step_16.js";
import Fj_TestScheme_70_0012_step_20 from "../Child/Fj_TestScheme_70_0012_step_20.js";
import Fj_TestScheme_70_0012_step_38_data from "../Child/Fj_TestScheme_70_0012_step_38_data.js"; // ★ 新環境適用' New Env Implementation

export default async function suite() {
  describe("Fj_TestScheme_70_0012-1: Initial process check (初期処理確認)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS Execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_70_0012_step_02
    Fj_TestScheme_70_0012_step_02();

    // Execute Fj_TestScheme_70_0012_step_05
    Fj_TestScheme_70_0012_step_05();

    // Execute Fj_TestScheme_70_0012_step_07
    Fj_TestScheme_70_0012_step_07();

    // Execute Fj_TestScheme_70_0012_step_10
    Fj_TestScheme_70_0012_step_10();

    // Execute Fj_TestScheme_70_0012_step_13
    Fj_TestScheme_70_0012_step_13();

    // Execute Fj_TestScheme_70_0012_step_14
    Fj_TestScheme_70_0012_step_14();

    // Execute Fj_TestScheme_70_0012_step_15
    Fj_TestScheme_70_0012_step_15();

    // Execute Fj_TestScheme_70_0012_step_16
    Fj_TestScheme_70_0012_step_16();

    // Execute Fj_TestScheme_70_0012_step_20
    Fj_TestScheme_70_0012_step_20();

    // ★ 新環境適用' New Env Implementation
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_70_0012_step_38_data();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);

    // ★ 新環境適用' New Env Implementation
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
  });
}

// ★ 新環境適用' New Env Implementation
export async function Get_LCD_Record_collect() {
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

  test_data.testData.lcd_id_arr = [];
  test_data.testData.lcd_name_arr = [];
  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
      fj_SubjectCode__c: test_data.testData.lcd_subject_code_val1, // 48
      fj_ExistingLoanCollectionFlg__c: test_data.testData.isTrue, // 既貸回収フラグ
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.lcd_id_arr.push(record.Id);
        test_data.testData.lcd_name_arr.push(record.Name);
      }
    });
}

// ★ 新環境適用' New Env Implementation
export async function Get_LCD_Record_closure() {
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

  test_data.testData.lcd_id_arr = [];
  test_data.testData.lcd_name_arr = [];
  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name")
    .where({
      fj_InitialChk__c: test_data.testData.ini_id,
      fj_SubjectCode__c: test_data.testData.lcd_subject_code_val1, // 48
      fj_AccountClose_flg__c: test_data.testData.isTrue, // 口座閉鎖フラグ
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.lcd_id_arr.push(record.Id);
        test_data.testData.lcd_name_arr.push(record.Name);
      }
    });
}

export async function Go_to_ER_list() {
  // ★ 新環境適用' New Env Implementation
  // Go to ER related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_execrequest_rel
  );
}

// ★ 新環境適用' New Env Implementation
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

// ★ 新環境適用' New Env Implementation
export async function Go_to_ExecResult() {
  // Go to Exec Result record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_LCD_List() {
  // Go to LCD related list view
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini_id,
    user_info.object.ini_lcd_rel
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_LCD_Record(id) {
  // Go to LCD record
  await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Login_as_tantou() {
  if (test_data.testData.logged_status != "uic") {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic";

    // Change App
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

// ★ 新環境適用' New Env Implementation
async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

// ★ 新環境適用' New Env Implementation
export async function Logout() {
  // logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}
