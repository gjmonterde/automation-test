var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0004_step_01 from "../Child/Fj_TestScheme_70_0004_step_01.js";
import Fj_TestScheme_70_0004_step_03 from "../Child/Fj_TestScheme_70_0004_step_03.js";
import Fj_TestScheme_70_0004_step_04 from "../Child/Fj_TestScheme_70_0004_step_04.js";
import Fj_TestScheme_70_0004_step_12 from "../Child/Fj_TestScheme_70_0004_step_12.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0004-1: Initial process check (初期処理確認)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute
    Fetch_data();

    // Execute Fj_TestScheme_70_0004_step_01
    Fj_TestScheme_70_0004_step_01();

    // Execute Fj_TestScheme_70_0004_step_03
    Fj_TestScheme_70_0004_step_03();

    // Execute Fj_TestScheme_70_0004_step_04
    Fj_TestScheme_70_0004_step_04();

    // Execute Fj_TestScheme_70_0004_step_12
    Fj_TestScheme_70_0004_step_12();
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
      .select(
        "Id, Name,genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name"
      )
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
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__c;
          test_data.testData.contact_id = record.fj_RefContact__c;
          test_data.testData.contact_name = record.fj_RefContact__r.Name;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.app_id);

    // Get EXM record
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(3, test_data.testData.exm_id);
  });
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
  test_data.testData.logged_status = "admin";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

// Go to EXM Record
export async function Open_SF_EXM_Record() {
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exm_obj,
    test_data.testData.exm_id
  );
}
