var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_20_0011_step_31 from "../Child/Fj_TestScheme_20_0011_step_31.js";
import Fj_TestScheme_20_0011_step_33 from "../Child/Fj_TestScheme_20_0011_step_33.js";
import Fj_TestScheme_20_0011_step_34 from "../Child/Fj_TestScheme_20_0011_step_34.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0011-8: Loan Adjustment (お借入内容調整)", () => {
    // Execute Login to MyPage
    Login_to_MyPage();

    // Execute Fj_TestScheme_20_0011_step_31
    Fj_TestScheme_20_0011_step_31();

    // Execute Fj_TestScheme_20_0011_step_33
    Fj_TestScheme_20_0011_step_33();

    // Execute Fj_TestScheme_20_0011_step_34
    Fj_TestScheme_20_0011_step_34();
  });
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

    // Maximize browser
    await browser.maximizeWindow();

    await util.Login_to_MyPage(
      test_data.testData.mypage_url,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    test_data.testData.logged_status = "mypage";

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);
  });
}

export async function Go_to_Loan() {
  // Click the 「お借入れ内容調整」 "Loan details adjustment" button.
  await $("button=" + test_data.testData.mypage_borrowing_details_btn).click();
  await browser.pause(15000);
}
