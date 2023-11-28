var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_00_0008_step_04 from "../Child/Fj_TestScheme_00_0008_step_04.js";
import Fj_TestScheme_00_0008_step_05 from "../Child/Fj_TestScheme_00_0008_step_05.js";
import Fj_TestScheme_00_0008_step_06 from "../Child/Fj_TestScheme_00_0008_step_06.js";
import Fj_TestScheme_00_0008_step_07 from "../Child/Fj_TestScheme_00_0008_step_07.js";
import Fj_TestScheme_00_0008_step_08 from "../Child/Fj_TestScheme_00_0008_step_08.js";
import Fj_TestScheme_00_0008_step_09 from "../Child/Fj_TestScheme_00_0008_step_09.js";
import Fj_TestScheme_00_0008_step_10 from "../Child/Fj_TestScheme_00_0008_step_10.js";
import Fj_TestScheme_00_0008_step_11 from "../Child/Fj_TestScheme_00_0008_step_11.js";
import Fj_TestScheme_00_0008_step_12 from "../Child/Fj_TestScheme_00_0008_step_12.js";
import Fj_TestScheme_00_0008_step_05_data from "../Child/Fj_TestScheme_00_0008_step_05_data.js";
import Fj_TestScheme_00_0008_step_07_data from "../Child/Fj_TestScheme_00_0008_step_07_data.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0008-2: Anti-Social Inquiry Result Check (反社照会結果確認)", () => {
    // Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_00_0008_step_04
    Fj_TestScheme_00_0008_step_04();

    // Execute Fj_TestScheme_00_0008_step_05_data
    Fj_TestScheme_00_0008_step_05_data();

    // Execute Fj_TestScheme_00_0008_step_07
    Fj_TestScheme_00_0008_step_05();

    // Execute Fj_TestScheme_00_0008_step_06
    Fj_TestScheme_00_0008_step_06();

    // Execute Fj_TestScheme_00_0008_step_07_data
    Fj_TestScheme_00_0008_step_07_data();

    // Execute Fj_TestScheme_00_0008_step_07
    Fj_TestScheme_00_0008_step_07();

    // Execute Fj_TestScheme_00_0008_step_08
    Fj_TestScheme_00_0008_step_08();

    // Execute Fj_TestScheme_00_0008_step_09
    Fj_TestScheme_00_0008_step_09();

    // Execute Fj_TestScheme_00_0008_step_10
    Fj_TestScheme_00_0008_step_10();

    // Execute Fj_TestScheme_00_0008_step_11
    Fj_TestScheme_00_0008_step_11();

    // Execute Fj_TestScheme_00_0008_step_12
    Fj_TestScheme_00_0008_step_12();
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get CNT record
    await conn
      .sobject("FJ_Contracting__c")
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
          test_data.testData.cnt_id = record.Id;
          test_data.testData.cnt_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get ASC record
    await conn
      .sobject("FJ_AntiSocial__c")
      .select("Id, Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.asc_id = record.Id;
          test_data.testData.asc_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.asc_id);
  });
}

export async function Login_as_shinsa1() {
  // ★ 新環境適用' New Env Implementation
  if (test_data.testData.logged_status != "shinsa") {
    // Login to org - shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);
    test_data.testData.logged_status = "shinsa"; // ★ 新環境適用' New Env Implementation

    // Change Application
    await Change_App();
  }
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // Change Application
  await Change_App();
}

// ★ 新環境適用' New Env Implementation
export async function Login_as_tantou() {
  if (test_data.testData.logged_status != "tantou") {
    // Login to org - tantou
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "tantou"; // ★ 新環境適用' New Env Implementation

    // Change Application
    await Change_App();
  }
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(2000);
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_ASC_Record() {
  // Go to ASC record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.asc_obj,
    test_data.testData.asc_id
  );
}

// ★ 新環境適用' New Env Implementation
export async function Open_CNT_Record() {
  // Go to CNT record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cnt_obj,
    test_data.testData.cnt_id
  );

  // Scroll to view ASC related list
  await util.Scroll_to_related_list(test_data.testData.asc_header);
}
