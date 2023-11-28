var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0011_step_18 from "../Child/Fj_TestScheme_60_0011_step_18.js";
import Fj_TestScheme_60_0011_step_22 from "../Child/Fj_TestScheme_60_0011_step_22.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-6: Confirm loan adjustment default check (お借入内容調整デフォルト確認)", () => {
    // Execute Login to MyPage
    // NOTE: ALWAYS execute before steps
    Login_to_MyPage();

    // Execute Fj_TestScheme_60_0011_step_18
    Fj_TestScheme_60_0011_step_18();

    // Execute Fj_TestScheme_60_0011_step_22
    Fj_TestScheme_60_0011_step_22();
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

    // Get CRE record ID and name
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
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
        }
      });

    // Get CL Product
    await conn
      .sobject("genesis__Applications__c")
      .select("genesis__CL_Product__c")
      .where({
        Id: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.clProd_id = record.genesis__CL_Product__c;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login to MyPage
    await util.Login_to_MyPage(
      test_data.testData.mypage_url_0011,
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
  });
}

export async function Login_As_UIC() {
  // Login to org
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);

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
}
