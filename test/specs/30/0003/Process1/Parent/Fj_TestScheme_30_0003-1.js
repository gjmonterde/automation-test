var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_30_0003_step_01 from "../Child/Fj_TestScheme_30_0003_step_01.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0003-1: My page initial process check (マイページ初期処理確認)", () => {
    // Query
    Query();

    // Execute Fj_TestScheme_30_0003_step_01
    Fj_TestScheme_30_0003_step_01();
  });
}

async function Query() {
  it("Query", async () => {
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Maximize browser
    await browser.maximizeWindow();

    await util.Login_to_MyPage(
      test_data.testData.mypage_url,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    test_data.testData.logged_status = "mypage"; // ★ 新環境適用' New Env Implementation
  });
}

// ★ 新環境適用' New Env Implementation
// Links
export async function Go_to_APP() {
  // Go to My Page Application record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await $("span=" + test_data.testData.app_name).waitForExist({
    timeout: 50000,
  });
}
