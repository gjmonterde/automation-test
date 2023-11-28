var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_00_0012_step_01 from "../Child/Fj_TestScheme_00_0012_step_01.js";
import Fj_TestScheme_00_0012_step_02 from "../Child/Fj_TestScheme_00_0012_step_02.js";
import Fj_TestScheme_00_0012_step_03 from "../Child/Fj_TestScheme_00_0012_step_03.js";
import Fj_TestScheme_00_0012_step_04 from "../Child/Fj_TestScheme_00_0012_step_04.js";
import Fj_TestScheme_00_0012_step_05 from "../Child/Fj_TestScheme_00_0012_step_05.js";
import Fj_TestScheme_00_0012_step_06 from "../Child/Fj_TestScheme_00_0012_step_06.js";
import Fj_TestScheme_00_0012_step_07 from "../Child/Fj_TestScheme_00_0012_step_07.js";
import Fj_TestScheme_00_0012_step_08 from "../Child/Fj_TestScheme_00_0012_step_08.js";
import Fj_TestScheme_00_0012_step_09 from "../Child/Fj_TestScheme_00_0012_step_09.js";
import Fj_TestScheme_00_0012_step_10 from "../Child/Fj_TestScheme_00_0012_step_10.js";
import Fj_TestScheme_00_0012_step_11 from "../Child/Fj_TestScheme_00_0012_step_11.js";
import Fj_TestScheme_00_0012_step_12 from "../Child/Fj_TestScheme_00_0012_step_12.js";
import Fj_TestScheme_00_0012_step_13 from "../Child/Fj_TestScheme_00_0012_step_13.js";
import Fj_TestScheme_00_0012_step_14 from "../Child/Fj_TestScheme_00_0012_step_14.js";
import Fj_TestScheme_00_0012_step_15 from "../Child/Fj_TestScheme_00_0012_step_15.js";
import Fj_TestScheme_00_0012_step_16 from "../Child/Fj_TestScheme_00_0012_step_16.js";
import Fj_TestScheme_00_0012_step_17 from "../Child/Fj_TestScheme_00_0012_step_17.js";
import Fj_TestScheme_00_0012_step_18 from "../Child/Fj_TestScheme_00_0012_step_18.js";
import Fj_TestScheme_00_0012_step_19 from "../Child/Fj_TestScheme_00_0012_step_19.js";
import Fj_TestScheme_00_0012_step_20 from "../Child/Fj_TestScheme_00_0012_step_20.js";
import Fj_TestScheme_00_0012_step_21 from "../Child/Fj_TestScheme_00_0012_step_21.js";
import Fj_TestScheme_00_0012_step_22 from "../Child/Fj_TestScheme_00_0012_step_22.js";
import Fj_TestScheme_00_0012_step_23 from "../Child/Fj_TestScheme_00_0012_step_23.js";
import Fj_TestScheme_00_0012_step_24 from "../Child/Fj_TestScheme_00_0012_step_24.js";
import Fj_TestScheme_00_0012_step_25 from "../Child/Fj_TestScheme_00_0012_step_25.js";
import Fj_TestScheme_00_0012_step_26 from "../Child/Fj_TestScheme_00_0012_step_26.js";
import Fj_TestScheme_00_0012_step_27 from "../Child/Fj_TestScheme_00_0012_step_27.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0012-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    //**PRODUCT LOAN ON DEED, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_01
    Fj_TestScheme_00_0012_step_01();

    //**PRODUCT CARD, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_02
    Fj_TestScheme_00_0012_step_02();

    //**PRODUCT: GENERAL OVERDRAFT, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_03
    Fj_TestScheme_00_0012_step_03();

    //**EXECUTION METHOD SLIP OUTPUT, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_04
    Fj_TestScheme_00_0012_step_04();

    //**EXECUTION METHOD AUTOMATIC EXECUTION, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_05
    Fj_TestScheme_00_0012_step_05();

    //**RECORDS NOT CREATED, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_07
    Fj_TestScheme_00_0012_step_07();

    // Execute Fj_TestScheme_00_0012_step_09
    Fj_TestScheme_00_0012_step_09();

    // Execute Fj_TestScheme_00_0012_step_11
    Fj_TestScheme_00_0012_step_11();

    // Execute Fj_TestScheme_00_0012_step_13
    Fj_TestScheme_00_0012_step_13();

    // Execute Fj_TestScheme_00_0012_step_17
    Fj_TestScheme_00_0012_step_17();

    // Execute Fj_TestScheme_00_0012_step_19
    Fj_TestScheme_00_0012_step_19();

    // Execute Fj_TestScheme_00_0012_step_22
    Fj_TestScheme_00_0012_step_22();

    //**RECORDS CREATED, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_06
    Fj_TestScheme_00_0012_step_06();

    // Execute Fj_TestScheme_00_0012_step_08
    Fj_TestScheme_00_0012_step_08();

    // Execute Fj_TestScheme_00_0012_step_10
    Fj_TestScheme_00_0012_step_10();

    // Execute Fj_TestScheme_00_0012_step_12
    Fj_TestScheme_00_0012_step_12();

    // Execute Fj_TestScheme_00_0012_step_14
    Fj_TestScheme_00_0012_step_14();

    // Execute Fj_TestScheme_00_0012_step_15
    Fj_TestScheme_00_0012_step_15();

    // Execute Fj_TestScheme_00_0012_step_16
    Fj_TestScheme_00_0012_step_16();

    // Execute Fj_TestScheme_00_0012_step_18
    Fj_TestScheme_00_0012_step_18();

    // Execute Fj_TestScheme_00_0012_step_20
    Fj_TestScheme_00_0012_step_20();

    // Execute Fj_TestScheme_00_0012_step_21
    Fj_TestScheme_00_0012_step_21();

    // Execute Fj_TestScheme_00_0012_step_23
    Fj_TestScheme_00_0012_step_23();

    // Execute Fj_TestScheme_00_0012_step_24
    Fj_TestScheme_00_0012_step_24();

    // Execute Fj_TestScheme_00_0012_step_25
    Fj_TestScheme_00_0012_step_25();

    // Execute Fj_TestScheme_00_0012_step_26
    Fj_TestScheme_00_0012_step_26();

    //**CANCELLATION CONTRACT, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0012_step_27
    Fj_TestScheme_00_0012_step_27();
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

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        RecordTypeId: test_data.testData.ini3_record_type_id,
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

    // ★ 新環境適用' New Env Implementation
    test_data.testData.ba_id_arr = [];
    test_data.testData.ba_name_arr = [];
    // Get BA records
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
          var record = records[i];
          test_data.testData.ba_id_arr.push(record.Id);
          test_data.testData.ba_name_arr.push(record.Name);
        }
      });

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Get_ER_Record(rectype, sortType) {
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
    .select("Id")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      "RecordType.Name": rectype,
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

export async function Get_ER_Array_Record(recordType) {
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

  test_data.testData.er_array = new Array();
  // Get ER transfer slip records
  await conn
    .sobject("FJ_ExecutionRequest__c")
    .select("Id, Name")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
      "RecordType.Name": recordType,
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

// ★ 新環境適用' New Env Implementation
export async function Get_LCD_Record_collect(subj) {
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
    .select("Id, Name, " + loan_flag_type)
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_SubjectCode__c: subj, // ★ 新環境適用' New Env Implementation
      fj_ExistingLoanCollectionFlg__c: test_data.testData.isTrue, // 既貸回収フラグ //★ 新環境適用' New Env Implementation
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
export async function Get_LCD_Record_10() {
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
    .select("Id, Name, " + loan_flag_type)
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_SubjectCode__c: test_data.testData.lcd_subject_code_1, // ★ 新環境適用' New Env Implementation
      fj_AccountClose_flg__c: test_data.testData.isTrue, // ★ 新環境適用' New Env Implementation
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

export async function Open_APP_Record(type) {
  // ★ 新環境適用' New Env Implementation
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  switch (type) {
    case 4:
      // Switch to 実行画面 tab
      await util.Application_Record_Scrolling(4);
      break;
  }
}

export async function Open_ER_List() {
  // ★ 新環境適用' New Env Implementation
  // Go to Exec List Result Records
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_execrequest_rel
  );
}

export async function Open_ER_Record(er_id) {
  // ★ 新環境適用' New Env Implementation
  // Go to Execution Request record
  await util.Open_SF_Record_URL(1, user_info.object.execrequest_obj, er_id);
}

export async function Open_Exec_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to Exec Result Record
  await util.Open_SF_Record_URL(
    1,
    user_info - user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

export async function Open_LCD_List() {
  // ★ 新環境適用' New Env Implementation
  // Go to LCD related list view
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_lcd_rel
  );
}

export async function Open_LCD_Record(lcd_id) {
  // ★ 新環境適用' New Env Implementation
  // Go to LCD record
  await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, lcd_id);
}

export async function Open_BA_rel() {
  // ★ 新環境適用' New Env Implementation
  // Go to BA related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_ba_rel
  );
}

export async function Open_BA(id) {
  // ★ 新環境適用' New Env Implementation
  // Go to BA record
  await util.Open_SF_Record_URL(1, user_info.object.ba_obj, id);
}
