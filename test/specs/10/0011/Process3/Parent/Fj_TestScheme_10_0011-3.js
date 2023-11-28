var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0011_step_08 from "../Child/Fj_TestScheme_10_0011_step_08.js";
import Fj_TestScheme_10_0011_step_09 from "../Child/Fj_TestScheme_10_0011_step_09.js";
import Fj_TestScheme_10_0011_step_10 from "../Child/Fj_TestScheme_10_0011_step_10.js";
import Fj_TestScheme_10_0011_step_11 from "../Child/Fj_TestScheme_10_0011_step_11.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0011-3: My page payee's account registration (マイページ振込先口座登録)", () => {
    // Execute fetch data
    Fetch_data();

    // Login to Salesforce
    // Note: Execute if running Fj_TestScheme_10_0011_step_08 only,
    //       Otherwise, comment out
    Login_to_Salesforce();

    // Execute Fj_TestScheme_10_0011_step_08
    Fj_TestScheme_10_0011_step_08();

    // Login to MyPage
    // Note: Do not execute if running step 08 only
    Login_to_MyPage();

    // Execute Fj_TestScheme_10_0011_step_09
    Fj_TestScheme_10_0011_step_09();

    // Execute Fj_TestScheme_10_0011_step_10
    Fj_TestScheme_10_0011_step_10();

    // Execute Fj_TestScheme_10_0011_step_11
    Fj_TestScheme_10_0011_step_11();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
    // Go to My Page Application record screen
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      if (test_data.testData.user_status == 0) {
        // Email and password - Existing user (to be used for PG)
        await util.Login_to_MyPage(
          user_info.userInformation.var_sf_mypage_loginurl,
          user_info.userInformation.var_sf_comminuty_loginuser,
          user_info.userInformation.var_sf_comminuty_loginpwd
        );
      } else if (test_data.testData.user_status == 1) {
        // Email and password - New user (to be used for testing)
        await util.Login_to_MyPage(
          user_info.userInformation.var_sf_mypage_loginurl,
          user_info.userInformation.var_sf_comminuty_loginuser2,
          user_info.userInformation.var_sf_comminuty_loginpwd2
        );
      }
      test_data.testData.logged_status = "mypage";
    }

    // Go to MY Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
