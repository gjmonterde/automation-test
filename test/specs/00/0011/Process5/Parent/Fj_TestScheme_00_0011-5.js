var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0011_step_17 from "../Child/Fj_TestScheme_00_0011_step_17.js";
import Fj_TestScheme_00_0011_step_18 from "../Child/Fj_TestScheme_00_0011_step_18.js";
import Fj_TestScheme_00_0011_step_19 from "../Child/Fj_TestScheme_00_0011_step_19.js";
import Fj_TestScheme_00_0011_step_20 from "../Child/Fj_TestScheme_00_0011_step_20.js";
import Fj_TestScheme_00_0011_step_21 from "../Child/Fj_TestScheme_00_0011_step_21.js";
import Fj_TestScheme_00_0011_step_22 from "../Child/Fj_TestScheme_00_0011_step_22.js";
import Fj_TestScheme_00_0011_step_23 from "../Child/Fj_TestScheme_00_0011_step_23.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-5: Confirm loan adjustment default check (お借入内容調整デフォルト確認)", () => {
    // Execute Fetch_data
    // Please update ご融資希望日 value in test_info file before running the test
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_00_0011_step_17
    Fj_TestScheme_00_0011_step_17();

    // Execute Fj_TestScheme_00_0011_step_18
    Fj_TestScheme_00_0011_step_18();

    // Execute Fj_TestScheme_00_0011_step_19
    Fj_TestScheme_00_0011_step_19();

    // Execute Fj_TestScheme_00_0011_step_20
    Fj_TestScheme_00_0011_step_20();

    // Execute Fj_TestScheme_00_0011_step_21
    Fj_TestScheme_00_0011_step_21();

    // Execute Fj_TestScheme_00_0011_step_22
    Fj_TestScheme_00_0011_step_22();

    // Execute Fj_TestScheme_00_0011_step_23
    Fj_TestScheme_00_0011_step_23();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
  });
}
export async function Login_to_MyPage() {
  var uname, pword;
  if (test_data.testData.user_status == 0) {
    // if existing user
    uname = user_info.userInformation.var_sf_comminuty_loginuser;
    pword = user_info.userInformation.var_sf_comminuty_loginpwd;
  } else if (test_data.testData.user_status == 1) {
    // if new user
    uname = user_info.userInformation.var_sf_comminuty_loginuser2;
    pword = user_info.userInformation.var_sf_comminuty_loginpwd2;
  }

  // Login to My Page
  await util.Login_to_MyPage(var_sf_mypage_loginurl, uname, pword); // ★ 新環境適用' New Env Implementation
  test_data.testData.logged_status = "mypage";
}

export async function Go_to_Loan_Adjustment() {
  // Click the 「お借入内容調整」 "Loan details adjustment" button.
  await $("button=" + test_data.testData.mypage_borrowing_details_btn).click();
  await browser.pause(10000);
}

export async function Login_to_Salesforce() {
  if (test_data.testData.logged_status != "uic") {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic";

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
  }
}

export async function Go_to_App3() {
  // Go to App Record
  // ★ 新環境適用' New Env Implementation
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 告知画面 tab
  // ★ 新環境適用' New Env Implementation
  await util.Application_Record_Scrolling(3);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_MyPage_APP() {
  // Go to My Page Application record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}
