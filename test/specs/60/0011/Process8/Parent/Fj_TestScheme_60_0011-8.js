var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0011_step_31 from "../Child/Fj_TestScheme_60_0011_step_31.js";
import Fj_TestScheme_60_0011_step_33 from "../Child/Fj_TestScheme_60_0011_step_33.js";
import Fj_TestScheme_60_0011_step_34 from "../Child/Fj_TestScheme_60_0011_step_34.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-8: Loan Adjustment (お借入内容調整)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Login to MyPage
    Login_to_MyPage();

    // Execute Fj_TestScheme_60_0011_step_31
    Fj_TestScheme_60_0011_step_31();

    // Execute Fj_TestScheme_60_0011_step_33
    Fj_TestScheme_60_0011_step_33();

    // Execute Fj_TestScheme_60_0011_step_34
    Fj_TestScheme_60_0011_step_34();
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

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
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

export async function Go_to_Loan_Adjustment() {
  // Click the 「お借入れ内容調整」 "Loan details adjustment" button.
  await $("button=" + test_data.testData.mypage_borrowing_details_btn).click();
  await browser.pause(10000);
}

export async function Login_As_UIC() {
  var window = await browser.getWindowHandles();
  var index = window.length;
  if (index > 1) {
    await browser.switchWindow("Salesforce");
    await browser.pause(2000);
  } else {
    if (test_data.testData.sf_user == "") {
      // Login to Salesforce
      await LoginPage.open();
      await LoginPage.login_as_user_in_charge();
      await browser.pause(10000);

      // App Launcher-CL Originate
      await util.App_Launcher(test_data.testData.originate_app);
    }
  }
}
