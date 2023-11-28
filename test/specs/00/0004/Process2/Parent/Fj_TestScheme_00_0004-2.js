var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0004_step_05 from "../Child/Fj_TestScheme_00_0004_step_05.js";
import Fj_TestScheme_00_0004_step_06 from "../Child/Fj_TestScheme_00_0004_step_06.js";
import Fj_TestScheme_00_0004_step_07 from "../Child/Fj_TestScheme_00_0004_step_07.js";
import Fj_TestScheme_00_0004_step_09 from "../Child/Fj_TestScheme_00_0004_step_09.js";
import Fj_TestScheme_00_0004_step_10 from "../Child/Fj_TestScheme_00_0004_step_10.js";
import Fj_TestScheme_00_0004_step_11 from "../Child/Fj_TestScheme_00_0004_step_11.js";
import Fj_TestScheme_00_0004_step_09_data from "../Child/Fj_TestScheme_00_0004_step_09_data.js";
import Fj_TestScheme_00_0004_step_10_data from "../Child/Fj_TestScheme_00_0004_step_10_data.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0004-2: Credit card information check (クレジットカード情報確認)", () => {
    // Execute Fetch_data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    //**LINKAGE DISABLED, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0004_step_05
    Fj_TestScheme_00_0004_step_05();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_00_0004_step_09_data();

    // Execute Fj_TestScheme_00_0004_step_09
    Fj_TestScheme_00_0004_step_09();

    // Execute Fj_TestScheme_00_0004_step_10_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_00_0004_step_10_data();

    // Execute Fj_TestScheme_00_0004_step_10
    Fj_TestScheme_00_0004_step_10();

    // Execute Fj_TestScheme_00_0004_step_11
    Fj_TestScheme_00_0004_step_11();

    //**LINKAGE POSSIBLE, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0004_step_06
    Fj_TestScheme_00_0004_step_06();

    // Execute Fj_TestScheme_00_0004_step_07
    Fj_TestScheme_00_0004_step_07();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get INI 2 record
    await conn
      .sobject("FJ_InitialChk__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        "RecordType.Name": test_data.testData.ini2_rectype,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ini_id = record.Id;
          test_data.testData.ini_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.ini_id);
  });
}
export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // Change app
  await Change_App();
}
export async function Login_as_admin() {
  //Login as as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // Change app
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Logout() {
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_EXM() {
  // Go to EXM record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );

  // Scroll to view SEC related list
  await util.Scroll_to_related_list(test_data.testData.foreigninq_header);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_INI2(type) {
  // Go to INI record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.ini_obj,
    test_data.testData.ini_id
  );

  if (type != "" && type == 1) {
    // Scroll INI2 record (admin)
    await util.Second_INI_Record_Scrolling();
  }
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to APP record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
