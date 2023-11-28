var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0007_step_36 from "../Child/Fj_TestScheme_30_0007_step_36";

export default async function suite() {
  describe("Fj_TestScheme_30_0007-1: Initial process check (初期処理確認)", () => {
    //Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_30_0007_step_36
    Fj_TestScheme_30_0007_step_36();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
    // JSForce connection
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

    // Get Application Id
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

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      //Login as as tantou1
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(15000);
      test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }

    // Go to APP record screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.app_obj,
      test_data.testData.app_id
    );
  });
}
