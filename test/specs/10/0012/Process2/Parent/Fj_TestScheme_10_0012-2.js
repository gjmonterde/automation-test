var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_10_0012_step_24 from "../Child/Fj_TestScheme_10_0012_step_24";
import Fj_TestScheme_10_0012_step_37 from "../Child/Fj_TestScheme_10_0012_step_37";
import Fj_TestScheme_10_0012_step_38_data from "../Child/Fj_TestScheme_10_0012_step_38_data";
import Fj_TestScheme_10_0012_step_38 from "../Child/Fj_TestScheme_10_0012_step_38";
import Fj_TestScheme_10_0012_step_42 from "../Child/Fj_TestScheme_10_0012_step_42";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0012-2: Execution Result Check (実行結果確認)", () => {
    // Query records
    Query();

    // Login as tantou
    Login_as_tantou();

    // Execute Fj_TestScheme_10_0012_step_24
    Fj_TestScheme_10_0012_step_24();

    // Execute Fj_TestScheme_10_0012_step_37
    Fj_TestScheme_10_0012_step_37();

    // Execute Fj_TestScheme_10_0012_step_38_data
    Fj_TestScheme_10_0012_step_38_data();

    // Login as tantou
    Login_as_tantou();

    // Execute Fj_TestScheme_10_0012_step_38
    Fj_TestScheme_10_0012_step_38();

    // Execute Fj_TestScheme_10_0012_step_42
    Fj_TestScheme_10_0012_step_42();
  });
}

async function Query() {
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

    // Get Exec Result record
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
  });
}

export async function Get_Records() {
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

  // Get Exec Result record and fetch status value
  await conn
    .sobject("FJ_ExecutionResult__c")
    .select("Id, Name, fj_status__c")
    .where({
      fj_RefApplication__c: test_data.testData.app_id,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.expected_status_value = record.fj_status__c;
      }
    });
}

// ★ 新環境適用' New Env Implementation
async function Login_as_tantou() {
  it("Login to Org", async () => {
    // Login as tantou user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
// ★ 新環境適用' New Env Implementation
export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
export async function Logout() {
  // logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}
