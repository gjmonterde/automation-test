var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_60_0012_step_39 from "../Child/Fj_TestScheme_60_0012_step_39";
import Fj_TestScheme_60_0012_step_40 from "../Child/Fj_TestScheme_60_0012_step_40";
import Fj_TestScheme_60_0012_step_41 from "../Child/Fj_TestScheme_60_0012_step_41";
import Fj_TestScheme_60_0012_step_42 from "../Child/Fj_TestScheme_60_0012_step_42";

export default async function suite() {
  describe("Fj_TestScheme_60_0012-2: Execution Result Check (実行結果確認)", () => {
    // Login to Salesforce org
    Fetch_Data();

    // Execute Fj_TestScheme_60_0012_step_39
    Fj_TestScheme_60_0012_step_39();

    // Execute Fj_TestScheme_60_0012_step_40
    Fj_TestScheme_60_0012_step_40();

    // Execute Fj_TestScheme_60_0012_step_41
    Fj_TestScheme_60_0012_step_41();

    // Execute Fj_TestScheme_60_0012_step_42
    Fj_TestScheme_60_0012_step_42();
  });
}

async function Fetch_Data() {
  it("Login to Salesforce", async () => {
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

export async function Login_as_Tantou1() {
  // Login to org as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login to org as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

export async function Open_SF_App_Record_URL(){
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}