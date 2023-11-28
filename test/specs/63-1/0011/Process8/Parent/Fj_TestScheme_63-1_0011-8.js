var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import Fj_TestScheme_63_1_0011_step_30 from "../Child/Fj_TestScheme_63-1_0011_step_30.js";
import Fj_TestScheme_63_1_0011_step_33 from "../Child/Fj_TestScheme_63-1_0011_step_33.js";
import Fj_TestScheme_63_1_0011_step_34 from "../Child/Fj_TestScheme_63-1_0011_step_34.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0011-8: Loan Adjustment (お借入内容調整)", () => {
    // Login to MyPage
    Login_MyPage();

    // Execute Fj_TestScheme_63-1_0011_step_30
    // ***NOTE: date format will be affected by client locale settings***
    // Please check the mypage_loan_date_value in test_info before executing step_30
    Fj_TestScheme_63_1_0011_step_30();

    // Execute Fj_TestScheme_63-1_0011_step_33
    Fj_TestScheme_63_1_0011_step_33();

    // Execute Fj_TestScheme_63-1_0011_step_34
    Fj_TestScheme_63_1_0011_step_34();
  });
}

async function Login_MyPage() {
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
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}

export async function MyPage_App_Record() {
  // Go to My Page APP record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}
