var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_50_0015_step_08 from "../Child/Fj_TestScheme_50_0015_step_08.js";
import Fj_TestScheme_50_0015_step_09 from "../Child/Fj_TestScheme_50_0015_step_09.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0015-1: Login・Home (ログイン・ホーム)", () => {
    // NOTE: Check first the comment 'credentials-0015' for the email and password in global_info before proceeding
    // Login to Salesforce org
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_50_0015_step_08
    Fj_TestScheme_50_0015_step_08();

    // Execute Fj_TestScheme_50_0015_step_09
    Fj_TestScheme_50_0015_step_09();
  });
}

async function Query_Salesforce_Records() {
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
      .select("Id, Name, genesis__Account__c, genesis__Account__r.Name")
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
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_MyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    user_info.userInformation.var_sf_mypage_loginurl,
    user_info.userInformation.var_sf_comminuty_loginuser3,
    user_info.userInformation.var_sf_comminuty_loginpwd3
  );
}

export async function Login_as_Tantou1() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
