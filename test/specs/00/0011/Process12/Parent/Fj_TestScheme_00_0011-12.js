var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import Fj_TestScheme_00_0011_step_57 from "../Child/Fj_TestScheme_00_0011_step_57.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-12: Complete My page conditon check (マイページ条件確認完了)", () => {
    // Execute Login_to_MyPage
    // NOTE: ALWAYS execute
    Login_to_MyPage();

    // Execute Fj_TestScheme_00_0011_step_57
    Fj_TestScheme_00_0011_step_57();
  });
}

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Maximize browser
    await browser.maximizeWindow();

    var uname, pword;
    if (test_data.testData.user_status == 0) {
      // if existing user
      uname = user_info.userInformation.var_sf_comminuty_loginuser;
      pword = user_info.userInformation.var_sf_comminuty_loginpwd;
    } else if (test_data.testData.user_status == 1) {
      // if new user
      uname = user_info.userInformation.var_sf_comminuty_loginuser2;
      pword = user_info.userInformation.var_sf_comminuty_loginpwd2;
    }
    // Login to My Page
    // ★ 新環境適用' New Env Implementation
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      uname,
      pword
    );

    // Go to App record
    // ★ 新環境適用' New Env Implementation
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 30000,
    });
  });
}
