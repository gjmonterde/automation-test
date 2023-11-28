var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0011_step_18 from "../Child/Fj_TestScheme_20_0011_step_18.js";
import Fj_TestScheme_20_0011_step_21 from "../Child/Fj_TestScheme_20_0011_step_21.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0011-6: Confirm loan adjustment default check (お借入内容調整デフォルト確認)", () => {
    // Execute Login
    Login();

    // Execute Fj_TestScheme_20_0011_step_18
    Fj_TestScheme_20_0011_step_18();

    // Execute Fj_TestScheme_20_0011_step_21
    Fj_TestScheme_20_0011_step_21();
  });
}

async function Login() {
  it("Login", async () => {
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
      .select("Id, Name, genesis__Account__c")
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
    await util.Record_check(1, test_data.testData.app_id);

    // Get CRE record
    await conn
      .sobject("FJ_CreditApproval__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cre_name = record.Name;
          test_data.testData.cre_id = record.Id;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.cre_id);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_to_MyPage() {
  // Login to My Page
  // ★ 新環境適用' New Env Implementation
  await util.Login_to_MyPage(
    "",
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );

  // Go to My Page Application record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}

export async function Login_to_Salesforce() {
  if (test_data.testData.logged_status != "uic") {
    // Login to org - tantou
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);
    test_data.testData.logged_status = "uic";

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
