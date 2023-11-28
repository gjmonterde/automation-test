var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_70_0003_step_01 from "../Child/Fj_TestScheme_70_0003_step_01.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0003-1: My page initial process check (マイページ初期処理確認)", () => {
    // Execute Login_to_MyPage
    // NOTE: ALWAYS execute
    Login_to_MyPage();

    // Execute Fj_TestScheme_70_0003_step_01
    Fj_TestScheme_70_0003_step_01();
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

    // Record check
    await util.Record_check(3, test_data.testData.app_id);

    // Maximize browser
    await browser.maximizeWindow();

    // Go to My Page - App record
    const mp_app =
      user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id;

    // Login to My Page
    await util.Login_to_MyPage(
      mp_app,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}
