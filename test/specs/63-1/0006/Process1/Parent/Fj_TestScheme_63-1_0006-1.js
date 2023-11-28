var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0006_step_01 from "../Child/Fj_TestScheme_63-1_0006_step_01.js";
import Fj_TestScheme_63_1_0006_step_02 from "../Child/Fj_TestScheme_63-1_0006_step_02.js";
import Fj_TestScheme_63_1_0006_step_03 from "../Child/Fj_TestScheme_63-1_0006_step_03.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0006-1: Initial process check (初期処理確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as Tantou1
    // Comment out if step_03 is the only step needed to be exeucted
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0006_step_01
    Fj_TestScheme_63_1_0006_step_01();

    // Execute Fj_TestScheme_63-1_0006_step_02
    Fj_TestScheme_63_1_0006_step_02();

    // Execute Fj_TestScheme_63-1_0006_step_03
    Fj_TestScheme_63_1_0006_step_03();
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Salesforce_App_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Login_as_admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
