var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_30_0012_step_01 from "../Child/Fj_TestScheme_30_0012_step_01";
import Fj_TestScheme_30_0012_step_05 from "../Child/Fj_TestScheme_30_0012_step_05";
import Fj_TestScheme_30_0012_step_07 from "../Child/Fj_TestScheme_30_0012_step_07";
import Fj_TestScheme_30_0012_step_08 from "../Child/Fj_TestScheme_30_0012_step_08";
import Fj_TestScheme_30_0012_step_09 from "../Child/Fj_TestScheme_30_0012_step_09";
import Fj_TestScheme_30_0012_step_18 from "../Child/Fj_TestScheme_30_0012_step_18";
import Fj_TestScheme_30_0012_step_20 from "../Child/Fj_TestScheme_30_0012_step_20";
import Fj_TestScheme_30_0012_step_24_data from "../Child/Fj_TestScheme_30_0012_step_24_data";

export default async function suite() {
  describe("Fj_TestScheme_30_0012-1: Initial process check (初期処理確認)", () => {
    // Login to salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_30_0012_step_01
    Fj_TestScheme_30_0012_step_01();

    // Execute Fj_TestScheme_30_0012_step_05
    Fj_TestScheme_30_0012_step_05();

    // Execute Fj_TestScheme_30_0012_step_07
    Fj_TestScheme_30_0012_step_07();

    // Execute Fj_TestScheme_30_0012_step_08
    Fj_TestScheme_30_0012_step_08();

    // Execute Fj_TestScheme_30_0012_step_09
    Fj_TestScheme_30_0012_step_09();

    // Execute Fj_TestScheme_30_0012_step_18
    Fj_TestScheme_30_0012_step_18();

    // Execute Fj_TestScheme_30_0012_step_20
    Fj_TestScheme_30_0012_step_20();

    // Execute Fj_TestScheme_30_0012_step_24_data
    // NOTE: If external linkage is not available, execute this script to update data.
    //       Else, comment out this line.
    Fj_TestScheme_30_0012_step_24_data();
  });
}

async function Login_To_Salesforce() {
  it("Login to salesforce", async () => {
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.exec_result_id);
  });
}

export async function Login_as_tantou() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_admin() {
  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

// ★ 新環境適用' New Env Implementation
// Links
export async function Go_to_APP() {
  // Go to App record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Go_to_ExecResult() {
  // Go to Exec Result Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.execresult_obj,
    test_data.testData.exec_result_id
  );
}

export async function Go_to_ER_list() {
  // Direct link Exec Request list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_execrequest_rel
  );
}

export async function Go_to_BA_list() {
  // Go to BA related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_ba_rel
  );
}
