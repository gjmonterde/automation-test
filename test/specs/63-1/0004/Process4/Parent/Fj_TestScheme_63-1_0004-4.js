var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0004_step_26 from "../Child/Fj_TestScheme_63-1_0004_step_26.js";
import Fj_TestScheme_63_1_0004_step_27 from "../Child/Fj_TestScheme_63-1_0004_step_27.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0004-4: Loan Common Detail Update (貸出共通明細更新)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0004_step_26
    Fj_TestScheme_63_1_0004_step_26();

    // Execute Fj_TestScheme_63-1_0004_step_27
    Fj_TestScheme_63_1_0004_step_27();
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

    // Maximize browser
    await browser.maximizeWindow();

    // Login as shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
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

  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name, fj_SubjectCode__c")
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_ExistingLoanCollectionFlg__c: false,
      fj_AccountClose_flg__c: false,
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
          test_data.testData.lcd_array1.push(record);
        }
      }
    });
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

  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name, fj_SubjectCode__c")
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_AccountClose_flg__c: false,
      fj_ExistingLoanCollectionFlg__c: false,
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
          test_data.testData.lcd_array2.push(record1);
        }
      }
    });

  // Get LCD records
  await conn
    .sobject("FJ_LoanCommonDetail__c")
    .select("Id, Name, fj_SubjectCode__c")
    .where({
      fj_InitialChk__c: test_data.testData.ini3_id,
      fj_AccountClose_flg__c: false,
      fj_ExistingLoanCollectionFlg__c: false,
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
          test_data.testData.lcd_array2.push(record2);
        }
      }
    });
}
export async function Open_LCD_SF_Record() {
  await util.Open_SF_Record_URL(
    2,
    user_info.object.ini_obj,
    test_data.testData.ini3_id,
    user_info.object.ini_lcd_rel
  );
}
