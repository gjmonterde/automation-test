var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0011_step_09 from "../Child/Fj_TestScheme_63-1_0011_step_09.js";
import Fj_TestScheme_63_1_0011_step_10 from "../Child/Fj_TestScheme_63-1_0011_step_10.js";
import Fj_TestScheme_63_1_0011_step_11 from "../Child/Fj_TestScheme_63-1_0011_step_11.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0011-4: My page payee's account registration (マイページ振込先口座登録)", () => {
    // Login to MyPage
    Login_to_MyPage();

    // Execute Fj_TestScheme_63-1_0011_step_09
    Fj_TestScheme_63_1_0011_step_09();

    // // Execute Fj_TestScheme_63-1_0011_step_10
    Fj_TestScheme_63_1_0011_step_10();

    // Execute Fj_TestScheme_63-1_0011_step_11
    Fj_TestScheme_63_1_0011_step_11();
  });
}

async function Login_to_MyPage() {
  it("Login to MyPage", async () => {
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
      .select("Id, Name, fj_BankDisplayFlg__c")
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
          test_data.testData.has_bank_display_flag =
            record.fj_BankDisplayFlg__c;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login to MyPage
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}

export async function AppPage_MyPage() {
  // Go to My Page APP record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
