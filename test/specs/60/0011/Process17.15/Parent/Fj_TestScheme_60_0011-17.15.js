var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_60_0011_step_94 from "../Child/Fj_TestScheme_60_0011_step_94.js";
import Fj_TestScheme_60_0011_step_95 from "../Child/Fj_TestScheme_60_0011_step_95.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-17.15: Contract agreement default confirmation (After Re-conditon check) (契約同意デフォルト確認(再条件確認後))", () => {
    // Execute login to mypage
    // NOTE: ALWAYS execute before steps
    Login_to_MyPage();

    // Execute Fj_TestScheme_60_0011_step_94
    Fj_TestScheme_60_0011_step_94();

    // Execute Fj_TestScheme_60_0011_step_95
    Fj_TestScheme_60_0011_step_95();
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

    // Maximize browser
    await browser.maximizeWindow();

    // Login to MyPage
    await util.Login_to_MyPage(
      test_data.testData.mypage_url_0011,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );

    // Go to My Page Application record screen
    test_data.testData.mypage_url_0011 =
      user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id;
  });
}
export async function Go_to_Contract() {
  // Click the 「ご契約内容確認」"Confirm contract" button.
  await $("button=" + test_data.testData.mypage_contract_details_btn).click();
  await browser.pause(10000);
}

export async function Go_to_Application() {
  // Go to My Page Application record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}
