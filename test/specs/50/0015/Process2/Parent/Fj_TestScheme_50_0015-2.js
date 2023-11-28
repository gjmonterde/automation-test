var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_50_0015_step_10 from "../Child/Fj_TestScheme_50_0015_step_10.js";
import Fj_TestScheme_50_0015_step_11 from "../Child/Fj_TestScheme_50_0015_step_11.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0015-2: My page message receiving (マイページメッセージ受信)", () => {
    // NOTE: Check first the comment 'credentials-0015' for the email and password in global_info before proceeding
    // Login to Salesforce org
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_50_0015_step_10
    Fj_TestScheme_50_0015_step_10();

    // Execute Fj_TestScheme_50_0015_step_11
    Fj_TestScheme_50_0015_step_11();
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

export async function Login_To_Outlook() {
  // To determine if the user is existing or new one
  var community_email, community_pwd;
  if (test_data.testData.user_status == 0) {
    // if existing user
    community_email = user_info.userInformation.var_email_testEmailAddress;
    community_pwd = user_info.userInformation.var_email_testEmailPwd;
  } else if (test_data.testData.user_status == 1) {
    // if new user
    community_email = user_info.userInformation.var_email_testEmailAddress3;
    community_pwd = user_info.userInformation.var_email_testEmailPwd3;
  }

  // Login
  await util.Login_to_Outlook(community_email, community_pwd);
}

export async function Search_Email() {
  // Convert creation date
  // ***NOTE: Change TimeZone based on mail timezone***
  await util.Search_chatter_mail_by_date();
}
