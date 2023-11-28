var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0012_step_03 from "../Child/Fj_TestScheme_63-1_0012_step_03.js";
import Fj_TestScheme_63_1_0012_step_05 from "../Child/Fj_TestScheme_63-1_0012_step_05.js";
import Fj_TestScheme_63_1_0012_step_11 from "../Child/Fj_TestScheme_63-1_0012_step_11.js";
import Fj_TestScheme_63_1_0012_step_12 from "../Child/Fj_TestScheme_63-1_0012_step_12.js";
import Fj_TestScheme_63_1_0012_step_13 from "../Child/Fj_TestScheme_63-1_0012_step_13.js";
import Fj_TestScheme_63_1_0012_step_16 from "../Child/Fj_TestScheme_63-1_0012_step_16.js";
import Fj_TestScheme_63_1_0012_step_20 from "../Child/Fj_TestScheme_63-1_0012_step_20.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0012-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_63-1_0012_step_03
    Fj_TestScheme_63_1_0012_step_03();

    // Execute Fj_TestScheme_63-1_0012_step_05
    Fj_TestScheme_63_1_0012_step_05();

    // Execute Fj_TestScheme_63-1_0012_step_11
    Fj_TestScheme_63_1_0012_step_11();

    // Execute Fj_TestScheme_63-1_0012_step_12
    Fj_TestScheme_63_1_0012_step_12();

    // Execute Fj_TestScheme_63-1_0012_step_13
    Fj_TestScheme_63_1_0012_step_13();

    // Execute Fj_TestScheme_63-1_0012_step_16
    Fj_TestScheme_63_1_0012_step_16();

    // Execute Fj_TestScheme_63-1_0012_step_20
    Fj_TestScheme_63_1_0012_step_20();
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

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini3_record_type,
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

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(5000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Open_Exec_Record() {
  // Go to Exec Result Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

export async function Open_ER_List() {
  // Go to Exec List Result Records
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_execrequest_rel
  );
}

export async function Open_ER_Record(er_id) {
  // Go to ER record
  await util.Open_SF_Record_URL(1, user_info.object.execrequest_obj, er_id);
}

export async function Open_LCD_List() {
  // Go to LCD related list view
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_lcd_rel
  );
}

export async function Open_LCD_Record(lcd_id) {
  // Go to LCD record
  await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, lcd_id);
}

export async function Get_ER_Record(sortType) {
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

  // Get ER transfer slip records
  await conn
    .sobject("FJ_ExecutionRequest__c")
    .select("Id, RecordType.Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      "RecordType.Name": test_data.testData.er1_record_type,
    })
    .sort({ Name: sortType })
    .limit(1)
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.er_id = record.Id;
      }
    });
}

export async function Get_ER_Array_Record(recordTypeName) {
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

  // Get ER transfer slip records
  await conn
    .sobject("FJ_ExecutionRequest__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      "RecordType.Name": recordTypeName,
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
}

export async function Get_LCD_Record(loan_flag_type, subject_code) {
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

  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name, " + loan_flag_type)
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_SubjectCode__c: subject_code,
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (
          (loan_flag_type == "fj_ExistingLoanCollectionFlg__c"
            ? record.fj_ExistingLoanCollectionFlg__c
            : record.fj_AccountClose_flg__c) == true
        ) {
          test_data.testData.lcd_array1.push(record);
        }
      }
    });
}
