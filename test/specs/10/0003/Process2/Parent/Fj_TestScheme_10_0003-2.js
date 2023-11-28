var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0003_step_02 from "../Child/Fj_TestScheme_10_0003_step_02.js";
import Fj_TestScheme_10_0003_step_04 from "../Child/Fj_TestScheme_10_0003_step_04.js";
import Fj_TestScheme_10_0003_step_05 from "../Child/Fj_TestScheme_10_0003_step_05.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0003-2: Initial process check (初期処理確認)", () => {
    //Execute Login
    Login();

    // Execute Fj_TestScheme_10_0003_step_02
    Fj_TestScheme_10_0003_step_02();

    // Execute Fj_TestScheme_10_0003_step_04
    Fj_TestScheme_10_0003_step_04();

    // Execute Fj_TestScheme_10_0003_step_05
    Fj_TestScheme_10_0003_step_05();
  });
}

async function Login() {
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

    // Application
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // Examination
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_name = record.Name;
          test_data.testData.exm_id = record.Id;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

export async function EXM_Scroll() {
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );
  
  await util.Scroll_to_related_list(test_data.testData.exm_scroll);
}
