var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import Fj_TestScheme_50_0003_step_01 from "../Child/Fj_TestScheme_50_0003_step_01.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0003-1: My page initial process check (マイページ初期処理確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_50_0003_step_01
    Fj_TestScheme_50_0003_step_01();
  });
}

async function Login_To_Salesforce() {
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

    // Login to My Page
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
  });
}
