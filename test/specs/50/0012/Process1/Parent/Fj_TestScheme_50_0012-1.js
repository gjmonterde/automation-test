var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_50_0012_step_01 from "../Child/Fj_TestScheme_50_0012_step_01";
import Fj_TestScheme_50_0012_step_04 from "../Child/Fj_TestScheme_50_0012_step_04";
import Fj_TestScheme_50_0012_step_07 from "../Child/Fj_TestScheme_50_0012_step_07";
import Fj_TestScheme_50_0012_step_08 from "../Child/Fj_TestScheme_50_0012_step_08";
import Fj_TestScheme_50_0012_step_09 from "../Child/Fj_TestScheme_50_0012_step_09";
import Fj_TestScheme_50_0012_step_18 from "../Child/Fj_TestScheme_50_0012_step_18";
import Fj_TestScheme_50_0012_step_20 from "../Child/Fj_TestScheme_50_0012_step_20";

export default async function suite() {
  describe("Fj_TestScheme_50_0012-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_50_0012_step_01
    Fj_TestScheme_50_0012_step_01();

    // Execute Fj_TestScheme_50_0012_step_04
    Fj_TestScheme_50_0012_step_04();

    // Execute Fj_TestScheme_50_0012_step_07
    Fj_TestScheme_50_0012_step_07();

    // Execute Fj_TestScheme_50_0012_step_08
    Fj_TestScheme_50_0012_step_08();

    // Execute Fj_TestScheme_50_0012_step_09
    Fj_TestScheme_50_0012_step_09();

    // Execute Fj_TestScheme_50_0012_step_18
    Fj_TestScheme_50_0012_step_18();

    // Execute Fj_TestScheme_50_0012_step_20
    Fj_TestScheme_50_0012_step_20();
  });
}

async function Login_To_Salesforce() {
  it("Query Salesforce records", async () => {
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

  it("Login to Org", async () => {
    // Login to tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to App Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );
  });
}

export async function Open_Exec_Rel() {
  // Direct link 実行依頼データ (Submission Data)
  await util.Open_SF_Record_URL(
    2,
    user_info.object.app_obj,
    test_data.testData.app_id,
    user_info.object.app_execrequest_rel
  );
}
