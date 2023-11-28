var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0004_step_13_data from "../Child/Fj_TestScheme_63-2_0004_step_13_data.js";
import Fj_TestScheme_63_2_0004_step_13 from "../Child/Fj_TestScheme_63-2_0004_step_13.js";
import Fj_TestScheme_63_2_0004_step_14 from "../Child/Fj_TestScheme_63-2_0004_step_14.js";
import Fj_TestScheme_63_2_0004_step_17 from "../Child/Fj_TestScheme_63-2_0004_step_17.js";
import Fj_TestScheme_63_2_0004_step_25 from "../Child/Fj_TestScheme_63-2_0004_step_25.js";
import Fj_TestScheme_63_2_0004_step_26 from "../Child/Fj_TestScheme_63-2_0004_step_26.js";
import Fj_TestScheme_63_2_0004_step_27 from "../Child/Fj_TestScheme_63-2_0004_step_27.js";
import Fj_TestScheme_63_2_0004_step_29 from "../Child/Fj_TestScheme_63-2_0004_step_29.js";
import Fj_TestScheme_63_2_0004_step_30 from "../Child/Fj_TestScheme_63-2_0004_step_30.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0004-3: External form check result confirmation (外形チェック結果確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-2_0004_step_13_data
    // **If external linkage is not available, execute this. Else, comment out this line.
    Fj_TestScheme_63_2_0004_step_13_data();

    // Execute Fj_TestScheme_63-2_0004_step_13
    Fj_TestScheme_63_2_0004_step_13();

    // Login as tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-2_0004_step_14
    Fj_TestScheme_63_2_0004_step_14();

    // Execute Fj_TestScheme_63-2_0004_step_17
    Fj_TestScheme_63_2_0004_step_17();

    // Execute Fj_TestScheme_63-2_0004_step_25
    Fj_TestScheme_63_2_0004_step_25();

    // Execute Fj_TestScheme_63-2_0004_step_26
    Fj_TestScheme_63_2_0004_step_26();

    // Execute Fj_TestScheme_63-2_0004_step_27
    Fj_TestScheme_63_2_0004_step_27();

    // Execute Fj_TestScheme_63-2_0004_step_29
    Fj_TestScheme_63_2_0004_step_29();

    // Execute Fj_TestScheme_63-2_0004_step_30
    Fj_TestScheme_63_2_0004_step_30();
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
      .select("Id, Name, genesis__CL_Product__c")
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
  });
}

export async function Open_Record_URL(object, id) {
  // Open URL record
  await util.Open_SF_Record_URL(1, object, id);
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_As_Admin() {
  // Login to org as Admin for querying
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
