var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0011_step_43 from "../Child/Fj_TestScheme_30_0011_step_43.js";
import Fj_TestScheme_30_0011_step_45 from "../Child/Fj_TestScheme_30_0011_step_45.js";
import Fj_TestScheme_30_0011_step_46 from "../Child/Fj_TestScheme_30_0011_step_46.js";
import Fj_TestScheme_30_0011_step_47 from "../Child/Fj_TestScheme_30_0011_step_47.js";
import Fj_TestScheme_30_0011_step_48 from "../Child/Fj_TestScheme_30_0011_step_48.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0011-8: Loan Adjustment (お借入内容調整)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_30_0011_step_43
    Fj_TestScheme_30_0011_step_43();

    // Execute Fj_TestScheme_30_0011_step_45
    Fj_TestScheme_30_0011_step_45();

    // Execute Fj_TestScheme_30_0011_step_46
    Fj_TestScheme_30_0011_step_46();

    // Execute Fj_TestScheme_30_0011_step_47
    Fj_TestScheme_30_0011_step_47();

    // Execute Fj_TestScheme_30_0011_step_48
    Fj_TestScheme_30_0011_step_48();
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

    // ★ 新環境適用' New Env Implementation
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cre_id);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_to_MyPage() {
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
  test_data.testData.logged_status = "mypage"; // ★ 新環境適用' New Env Implementation

  await browser.pause(10000);
}

export async function Go_to_Loan_Adjustment() {
  // Click the 「お借入れ内容調整」 "Loan details adjustment" button.
  await $("button=" + test_data.testData.mypage_borrowing_details_btn).click();
  await browser.pause(10000);
}

export async function Login_As_UIC() {
  // ★ 新環境適用' New Env Implementation
  if (test_data.testData.logged_status != "uic") {
    // Login to salesforce
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  }
}
