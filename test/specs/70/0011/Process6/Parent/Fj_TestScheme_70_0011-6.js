var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0011_step_18 from "../Child/Fj_TestScheme_70_0011_step_18.js";
import Fj_TestScheme_70_0011_step_24 from "../Child/Fj_TestScheme_70_0011_step_24.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0011-6: Confirm loan adjustment default check (お借入内容調整デフォルト確認)", () => {
    // Execute Fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_70_0011_step_18
    Fj_TestScheme_70_0011_step_18();

    // Execute Fj_TestScheme_70_0011_step_24
    Fj_TestScheme_70_0011_step_24();
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
  });
}

export async function Login_to_MyPage() {
  // Maximize browser
  await browser.maximizeWindow();

  // Login to My Page
  // ★ 新環境適用' New Env Implementation
  await util.Login_to_MyPage(
    user_info.userInformation.var_sf_mypage_loginurl,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
  test_data.testData.logged_status = "mypage";

  // Go to APP Page
  // ★ 新環境適用' New Env Implementation
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await $("span=" + test_data.testData.app_name).waitForExist({
    timeout: 50000,
  });
}

export async function Login_as_tantou() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic";

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation

  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  ); // ★ 新環境適用' New Env Implementation

  // Go to 告知画面 tab
  await util.Application_Record_Scrolling(3); // ★ 新環境適用' New Env Implementation
}
