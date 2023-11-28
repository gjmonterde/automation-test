var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0011_step_18 from "../Child/Fj_TestScheme_30_0011_step_18.js";
import Fj_TestScheme_30_0011_step_21 from "../Child/Fj_TestScheme_30_0011_step_21.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0011-6: Confirm loan adjustment default check (お借入内容調整デフォルト確認)", () => {
    // Execute Login to MyPage
    // NOTE: ALWAYS execute before steps
    Login_to_MyPage();

    // Execute Fj_TestScheme_30_0011_step_18
    Fj_TestScheme_30_0011_step_18();

    // Execute Fj_TestScheme_30_0011_step_21
    Fj_TestScheme_30_0011_step_21();
  });
}

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
    // Login
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
    // Get Application record ID
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

    // Go to My Page Application record
    test_data.testData.mypage_url =
      user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id;

    // Login to MyPage
    await util.Login_to_MyPage(
      test_data.testData.mypage_url,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}

export async function Login_As_UIC() {
  if (test_data.testData.logged_status != "uic") {
    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  }

  // Go to App record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Login_As_Admin() {
  // Login to org
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation
}
