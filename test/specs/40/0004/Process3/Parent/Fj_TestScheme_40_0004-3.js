var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_40_0004_step_13 from "../Child/Fj_TestScheme_40_0004_step_13";
import Fj_TestScheme_40_0004_step_14 from "../Child/Fj_TestScheme_40_0004_step_14";
import Fj_TestScheme_40_0004_step_17 from "../Child/Fj_TestScheme_40_0004_step_17";
import Fj_TestScheme_40_0004_step_25 from "../Child/Fj_TestScheme_40_0004_step_25";
import Fj_TestScheme_40_0004_step_26 from "../Child/Fj_TestScheme_40_0004_step_26";
import Fj_TestScheme_40_0004_step_27 from "../Child/Fj_TestScheme_40_0004_step_27";
import Fj_TestScheme_40_0004_step_29 from "../Child/Fj_TestScheme_40_0004_step_29";
import Fj_TestScheme_40_0004_step_30 from "../Child/Fj_TestScheme_40_0004_step_30";
import Fj_TestScheme_40_0004_step_13_data from "../Child/Fj_TestScheme_40_0004_step_13_data";

export default async function suite() {
  describe("Fj_TestScheme_40_0004-3: External form check result confirmation (外形チェック結果確認)", () => {
    // Fetch data from Salesforce
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_40_0004_step_13_data();

    // Login as tantou1
    // NOTE: ALWAYS execute before steps (except step_13_data)
    Login_as_tantou();

    // Execute Fj_TestScheme_40_0004_step_13
    Fj_TestScheme_40_0004_step_13();

    // Execute Fj_TestScheme_40_0004_step_14
    Fj_TestScheme_40_0004_step_14();

    // Execute Fj_TestScheme_40_0004_step_17
    Fj_TestScheme_40_0004_step_17();

    // Execute Fj_TestScheme_40_0004_step_25
    Fj_TestScheme_40_0004_step_25();

    // Execute Fj_TestScheme_40_0004_step_26
    Fj_TestScheme_40_0004_step_26();

    // Execute Fj_TestScheme_40_0004_step_27
    Fj_TestScheme_40_0004_step_27();

    // Execute Fj_TestScheme_40_0004_step_29
    Fj_TestScheme_40_0004_step_29();

    // Execute Fj_TestScheme_40_0004_step_30
    Fj_TestScheme_40_0004_step_30();
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
            test_data.testData.ini_id3 = record.Id;
            test_data.testData.ini_name3 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ini_id3);
  });
}

async function Login_as_tantou() {
  it("Login to Salesforce As User in Charge", async () => {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // Change Application
    await Change_App();
  });
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // Change Application
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
