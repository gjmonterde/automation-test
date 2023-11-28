var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import Fj_TestScheme_70_0011_step_101 from "../Child/Fj_TestScheme_70_0011_step_101.js";
import Fj_TestScheme_70_0011_step_102 from "../Child/Fj_TestScheme_70_0011_step_102.js";

export default async function suite() {
  describe(
    "Fj_TestScheme_70_0011-18:  Contract agreement default confirmation (After Re-condition check) " +
      "a契約同意 Contract agreement (契約同意デフォルト確認(再条件確認後))",
    () => {
      // Execute Login to MyPage
      // NOTE: ALWAYS execute before steps
      Login_to_MyPage();

      // Execute Fj_TestScheme_70_0011_step_101
      Fj_TestScheme_70_0011_step_101();

      // Execute Fj_TestScheme_70_0011_step_102
      Fj_TestScheme_70_0011_step_102();
    }
  );
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

    // Login to My Page
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    ); // ★ 新環境適用' New Env Implementation
    test_data.testData.logged_status = "mypage"; // ★ 新環境適用' New Env Implementation

    await browser.pause(10000);
  });
}

export async function Go_to_Contract() {
  // Click the 「ご契約内容確認」"Confirm contract" button.
  await $("button=" + test_data.testData.mypage_contract_details_btn).click();
  await browser.pause(10000);
}

// ★ 新環境適用' New Env Implementation
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
