var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_40_0004_step_01 from "../Child/Fj_TestScheme_40_0004_step_01";
import Fj_TestScheme_40_0004_step_03 from "../Child/Fj_TestScheme_40_0004_step_03";
import Fj_TestScheme_40_0004_step_04 from "../Child/Fj_TestScheme_40_0004_step_04";
import Fj_TestScheme_40_0004_step_11 from "../Child/Fj_TestScheme_40_0004_step_11";
import Fj_TestScheme_40_0004_step_12 from "../Child/Fj_TestScheme_40_0004_step_12";

export default async function suite() {
  describe("Fj_TestScheme_40_0004-1: Initial process check (初期処理確認)", () => {
    // Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Login to Salesforce org as user in charge
    // NOTE: ALWAYS execute before steps
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0004_step_01
    Fj_TestScheme_40_0004_step_01();

    // Login to salesforce org as user in charge
    // NOTE: Reexecute if running steps after step 01
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0004_step_03
    Fj_TestScheme_40_0004_step_03();

    // Execute Fj_TestScheme_40_0004_step_04
    Fj_TestScheme_40_0004_step_04();

    // Execute Fj_TestScheme_40_0004_step_11
    Fj_TestScheme_40_0004_step_11();

    // Execute Fj_TestScheme_40_0004_step_12
    Fj_TestScheme_40_0004_step_12();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

    // Get INI 1, 2, 3 records
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_RefExamination__c: test_data.testData.exm_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.RecordType.Name === test_data.testData.ini1_rectype) {
            test_data.testData.ini_id = record.Id;
            test_data.testData.ini_name = record.Name;
          }
          if (record.RecordType.Name === test_data.testData.ini2_rectype) {
            test_data.testData.ini_id2 = record.Id;
            test_data.testData.ini_name2 = record.Name;
          }
          if (record.RecordType.Name === test_data.testData.ini3_rectype) {
            test_data.testData.ini_id3 = record.Id;
            test_data.testData.ini_name3 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id);
    await util.Record_check(1, test_data.testData.ini_id2);
    await util.Record_check(1, test_data.testData.ini_id3);
  });
}

async function Login_as_tantou() {
  it("Login as User In Charge", async () => {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
