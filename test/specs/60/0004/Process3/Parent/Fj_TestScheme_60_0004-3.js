var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0004_step_14 from "../Child/Fj_TestScheme_60_0004_step_14";
import Fj_TestScheme_60_0004_step_15_data from "../Child/Fj_TestScheme_60_0004_step_15_data";
import Fj_TestScheme_60_0004_step_15 from "../Child/Fj_TestScheme_60_0004_step_15";
import Fj_TestScheme_60_0004_step_19 from "../Child/Fj_TestScheme_60_0004_step_19";
import Fj_TestScheme_60_0004_step_33 from "../Child/Fj_TestScheme_60_0004_step_33";
import Fj_TestScheme_60_0004_step_34 from "../Child/Fj_TestScheme_60_0004_step_34";

export default async function suite() {
  describe("Fj_TestScheme_60_0004-3: External form check result confirmation (外形チェック結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_60_0004_step_14
    Fj_TestScheme_60_0004_step_14();

    /* if external linkage is not available, execute Fj_TestScheme_60_0004_step_15_data to create/update data.
     if else, comment out this line. */
    Fj_TestScheme_60_0004_step_15_data();

    // Login as Tantou1
    // Only for step_15 to step_34
    Login_as_Tantou1();

    // Execute Fj_TestScheme_60_0004_step_15
    Fj_TestScheme_60_0004_step_15();

    // Execute Fj_TestScheme_60_0004_step_19
    Fj_TestScheme_60_0004_step_19();

    // Execute Fj_TestScheme_60_0004_step_33
    Fj_TestScheme_60_0004_step_33();

    // Execute Fj_TestScheme_60_0004_step_34
    Fj_TestScheme_60_0004_step_34();
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
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // Get EXM name and record ID
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

    // Get INI record ID
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, RecordType.Name")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        "RecordType.Name": test_data.testData.ini_record_type3,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini_id3 = record.Id;
        }
      });
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1
    await Login_User_In_Charge();
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Login_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Open_INI3_Record() {
  // Go to 銀行審査 detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini_id3
  );
}

export async function Open_APP_Record() {
  // Go to Application detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
