var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0004_step_06 from "../Child/Fj_TestScheme_63-1_0004_step_06.js";
import Fj_TestScheme_63_1_0004_step_07_data from "../Child/Fj_TestScheme_63-1_0004_step_07_data.js";
import Fj_TestScheme_63_1_0004_step_07 from "../Child/Fj_TestScheme_63-1_0004_step_07.js";
import Fj_TestScheme_63_1_0004_step_11 from "../Child/Fj_TestScheme_63-1_0004_step_11.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0004-2: Credit card information check (クレジットカード情報確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0004_step_06
    Fj_TestScheme_63_1_0004_step_06();

    // Execute Fj_TestScheme_63-1_0004_step_07_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_1_0004_step_07_data();

    // Login as Tantou1
    // Only for step_07 and step_11. Otherwise, comment out
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0004_step_07
    Fj_TestScheme_63_1_0004_step_07();

    // Execute Fj_TestScheme_63-1_0004_step_11
    Fj_TestScheme_63_1_0004_step_11();
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

    // Get INI record where レコードタイプ = 銀行審査②（取引情報取得）
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini2_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini2_id = record.Id;
          test_data.testData.ini2_name = record.Name;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await Relogin_as_Tantou1();
  });
}

export async function Relogin_as_Tantou1() {
  // Login as tantou1 user
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await Open_App_Launcher();
}

export async function Login_As_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await Open_App_Launcher();
}

export async function Open_INI_2nd_Record() {
  // Go to INI(2) record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini2_id
  );
}

async function Open_App_Launcher() {
  await util.App_Launcher(test_data.testData.originate_app);
}
