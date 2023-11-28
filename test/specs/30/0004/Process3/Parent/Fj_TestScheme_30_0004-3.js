var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0004_step_14 from "../Child/Fj_TestScheme_30_0004_step_14";
import Fj_TestScheme_30_0004_step_15_data from "../Child/Fj_TestScheme_30_0004_step_15_data";
import Fj_TestScheme_30_0004_step_15 from "../Child/Fj_TestScheme_30_0004_step_15";
import Fj_TestScheme_30_0004_step_33 from "../Child/Fj_TestScheme_30_0004_step_33";
import Fj_TestScheme_30_0004_step_34 from "../Child/Fj_TestScheme_30_0004_step_34";

export default async function suite() {
  describe("Fj_TestScheme_30_0004-3: External form check result confirmation (外形チェック結果確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_30_0004_step_14
    Fj_TestScheme_30_0004_step_14();

    // /* if external linkage is not available, execute these scripts to create/update data.
    // if else, comment out this line. */
    Fj_TestScheme_30_0004_step_15_data();

    // Execute Fj_TestScheme_30_0004_step_15
    Fj_TestScheme_30_0004_step_15();

    // Execute Fj_TestScheme_30_0004_step_33
    Fj_TestScheme_30_0004_step_33();

    // Execute Fj_TestScheme_30_0004_step_34
    Fj_TestScheme_30_0004_step_34();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce Records", async () => {
    // JSforce connection
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

    // Get Application record ID
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exm_id);

    // Get INI record ID
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id")
      .where({
        fj_RefExamination__c: test_data.testData.exm_id,
        "RecordType.Name": test_data.testData.ini3_rectype, // ★ 新環境適用' New Env Implementation
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini3_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini3_id);
  });
}

export async function Login_As_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // Change App
  await Change_App();
}

export async function Login_As_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_INI() {
  // Go to 銀行審査 detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini3_id
  );
}
