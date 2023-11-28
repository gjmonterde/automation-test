var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0004_step_26 from "../Child/Fj_TestScheme_70_0004_step_26.js";
import Fj_TestScheme_70_0004_step_27 from "../Child/Fj_TestScheme_70_0004_step_27.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0004-4: Loan Common Detail Update (貸出共通明細更新)", () => {
    // Execute login to Salesforce
    // NOTE: ALWAYS execute
    Login_to_Salesforce();

    // Execute Fj_TestScheme_70_0004_step_26
    Fj_TestScheme_70_0004_step_26();

    // Execute Fj_TestScheme_70_0004_step_27
    Fj_TestScheme_70_0004_step_27();
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

    // Record check
    await util.Record_check(3, test_data.testData.app_id);

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
    await util.Record_check(3, test_data.testData.exm_id);

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
            test_data.testData.ini_id = record.Id;
            test_data.testData.ini_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id);

    // Get LCD records
    await conn
      .sobject("FJ_LoanCommonDetail__c")
      .select("Id, Name, fj_SubjectCode__c")
      .where({
        fj_InitialChk__c: test_data.testData.ini_id,
      })
      .sort({ Name: 1 })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.fj_SubjectCode__c == test_data.testData.lcd12_code) {
            test_data.testData.lcd12_id_arr.push(record.Id);
            test_data.testData.lcd12_name_arr.push(record.Name);
          }
          if (record.fj_SubjectCode__c == test_data.testData.lcd48_code) {
            test_data.testData.lcd48_id_arr.push(record.Id);
            test_data.testData.lcd48_name_arr.push(record.Name);
          }
        }
      });
    // Record check
    await util.Record_check(2, test_data.testData.lcd12_id_arr);

    // Record check
    await util.Record_check(2, test_data.testData.lcd48_id_arr);

    // Login to org - shinsa
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);
    test_data.testData.logged_status = "auditor";

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
