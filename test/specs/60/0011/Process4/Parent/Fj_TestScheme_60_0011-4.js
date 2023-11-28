var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_60_0011_step_09 from "../Child/Fj_TestScheme_60_0011_step_09.js";
import Fj_TestScheme_60_0011_step_10 from "../Child/Fj_TestScheme_60_0011_step_10.js";
import Fj_TestScheme_60_0011_step_11 from "../Child/Fj_TestScheme_60_0011_step_11.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-4: My page payee's account registration (マイページ振込先口座登録)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Go to My Page
    Go_to_MyPage();

    // Execute Fj_TestScheme_60_0011_step_09
    Fj_TestScheme_60_0011_step_09();

    // Execute Fj_TestScheme_60_0011_step_10
    Fj_TestScheme_60_0011_step_10();

    // Execute Fj_TestScheme_60_0011_step_11
    Fj_TestScheme_60_0011_step_11();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
  });
}
async function Go_to_MyPage() {
  it("Go to My Page", async () => {
    // Go to My Page
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}

export async function Open_MyPage_APP_Record() {
  // Go to My Page Application record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}
