var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_62.js");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_62_0012_step_02 from "../Child/Fj_TestScheme_62_0012_step_02.js";
import Fj_TestScheme_62_0012_step_05 from "../Child/Fj_TestScheme_62_0012_step_05.js";
import Fj_TestScheme_62_0012_step_07 from "../Child/Fj_TestScheme_62_0012_step_07.js";
import Fj_TestScheme_62_0012_step_10 from "../Child/Fj_TestScheme_62_0012_step_10.js";
import Fj_TestScheme_62_0012_step_20 from "../Child/Fj_TestScheme_62_0012_step_20.js";
import Fj_TestScheme_62_0012_step_24_data from "../Child/Fj_TestScheme_62_0012_step_24_data.js";

export default async function suite() {
  describe("Fj_TestScheme_62_0012-1: Initial process check (初期処理確認)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS Execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_62_0012_step_02
    Fj_TestScheme_62_0012_step_02();

    // Execute Fj_TestScheme_62_0012_step_05
    Fj_TestScheme_62_0012_step_05();

    // Execute Fj_TestScheme_62_0012_step_07
    Fj_TestScheme_62_0012_step_07();

    // Execute Fj_TestScheme_62_0012_step_10
    Fj_TestScheme_62_0012_step_10();

    // Execute Fj_TestScheme_62_0012_step_20
    Fj_TestScheme_62_0012_step_20();

    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_62_0012_step_24_data();
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
    let csv_record_no = eval(
      "test_data.testData.csv_value" +
        test_data.testData.record_no +
        "_systemacceptno"
    );
    // Get APP Record
    await conn
      .sobject("FJ_MuCooperationApp__c")
      .select(
        "Id, Name, fj_System_Acception_No__c, fj_RefApplication__c, fj_RefApplication__r.Name"
      )
      .where({
        fj_System_Acception_No__c: csv_record_no,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.fj_RefApplication__c;
          test_data.testData.app_name = record.fj_RefApplication__r.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get ER Exec Result record
    await conn
      .sobject("FJ_ExecutionResult__c")
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
          test_data.testData.exec_result_name = record.Name;
          test_data.testData.exec_result_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);
  });
}

// ★ 新環境適用' New Env Implementation
export async function Login_as_tantou() {
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // App Launcher-CL Originate
  await Change_App();
}

// ★ 新環境適用' New Env Implementation
export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // Change App
  await Change_App();
}

// ★ 新環境適用' New Env Implementation
async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Logout() {
  // logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

export async function Open_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Switch_App_Tab(app_tab) {
  // Open APP tab
  await util.Application_Record_Scrolling(app_tab);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_Exec_Result() {
  // Go to Exec Result record screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}
