var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_40_0004_step_05 from "../Child/Fj_TestScheme_40_0004_step_05";
import Fj_TestScheme_40_0004_step_06 from "../Child/Fj_TestScheme_40_0004_step_06";
import Fj_TestScheme_40_0004_step_08 from "../Child/Fj_TestScheme_40_0004_step_08";
import Fj_TestScheme_40_0004_step_10 from "../Child/Fj_TestScheme_40_0004_step_10";
import Fj_TestScheme_40_0004_step_06_data from "../Child/Fj_TestScheme_40_0004_step_06_data";

export default async function suite() {
  describe("Fj_TestScheme_40_0004-2: Credit card information check (クレジットカード情報確認)", () => {
    // Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Login to Salesforce org as tantou1
    // NOTE: ALWAYS execute before steps except if running step_06_data only
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0004_step_05
    Fj_TestScheme_40_0004_step_05();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_40_0004_step_06_data();

    // Login to salesforce org as tantou
    // NOTE: Reexecute if running steps after step 06_data
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0004_step_06
    Fj_TestScheme_40_0004_step_06();

    // Execute Fj_TestScheme_40_0004_step_08
    Fj_TestScheme_40_0004_step_08();

    // Execute Fj_TestScheme_40_0004_step_10
    Fj_TestScheme_40_0004_step_10();
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

    // Get INI 2 record
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
          if (record.RecordType.Name === test_data.testData.ini2_rectype) {
            test_data.testData.ini_id2 = record.Id;
            test_data.testData.ini_name2 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id2);
  });
}

async function Login_as_tantou() {
  it("Login as User In Charge", async () => {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // Change Application
    await Change_App();

    // Go to INI Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.ini_obj,
      test_data.testData.ini_id2
    );
  });
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);

  // Change Application
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
