var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0004_step_51 from "../Child/Fj_TestScheme_00_0004_step_51.js";
import Fj_TestScheme_00_0004_step_52 from "../Child/Fj_TestScheme_00_0004_step_52.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0004-4: Loan Common Detail Update (貸出共通明細更新)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0004_step_51
    Fj_TestScheme_00_0004_step_51();

    // Execute Fj_TestScheme_00_0004_step_52
    Fj_TestScheme_00_0004_step_52();
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

    // Get INI record where レコードタイプ = 銀行審査③（外形チェック）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name")
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);

    // Login as shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);
    test_data.testData.logged_status = "shinsa"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    // ★ 新環境適用' New Env Implementation
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Get_LCD_Record_1() {
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

  test_data.testData.lcd_id_arr = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.lcd_name_arr = []; // ★ 新環境適用' New Env Implementation
  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name, fj_SubjectCode__c")
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse, // ★ 新環境適用' New Env Implementation
      fj_AccountClose_flg__c: test_data.testData.isFalse, // ★ 新環境適用' New Env Implementation
    })
    .sort({ Name: 1 })
    .skip(1)
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (record.fj_SubjectCode__c === "48") {
          test_data.testData.lcd_id_arr.push(record.Id); // ★ 新環境適用' New Env Implementation
          test_data.testData.lcd_name_arr.push(record.Name); // ★ 新環境適用' New Env Implementation
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.lcd_id_arr);
}

export async function Get_LCD_Record_2() {
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

  test_data.testData.lcd_id_arr2 = []; // ★ 新環境適用' New Env Implementation
  test_data.testData.lcd_name_arr2 = []; // ★ 新環境適用' New Env Implementation
  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name, fj_SubjectCode__c")
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_AccountClose_flg__c: test_data.testData.isFalse, // ★ 新環境適用' New Env Implementation
      fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse, // ★ 新環境適用' New Env Implementation
    })
    .sort({ Name: 1 })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record1 = records[i];
        if (
          record1.fj_SubjectCode__c === "44" ||
          record1.fj_SubjectCode__c === "48"
        ) {
          test_data.testData.lcd_id_arr2.push(record1.Id); // ★ 新環境適用' New Env Implementation
          test_data.testData.lcd_name_arr2.push(record1.Name); // ★ 新環境適用' New Env Implementation
        }
      }
    });

  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name, fj_SubjectCode__c")
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_AccountClose_flg__c: test_data.testData.isFalse, // ★ 新環境適用' New Env Implementation
      fj_ExistingLoanCollectionFlg__c: test_data.testData.isFalse, // ★ 新環境適用' New Env Implementation
    })
    .sort({ Name: 1 })
    .skip(2)
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record2 = records[i];
        if (record2.fj_SubjectCode__c === "12") {
          test_data.testData.lcd_id_arr2.push(record2.Id); // ★ 新環境適用' New Env Implementation
          test_data.testData.lcd_name_arr2.push(record2.Name); // ★ 新環境適用' New Env Implementation
        }
      }
    });

  // ★ 新環境適用' New Env Implementation
  // Record check
  await util.Record_check(2, test_data.testData.lcd_id_arr2);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_LCD(id) {
  // Go to LCD record screen
  await util.Open_SF_Record_URL(1, user_info.object.lcd_obj, id);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_LCD_Rel() {
  // Go to LCD related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_lcd_rel
  );
}
