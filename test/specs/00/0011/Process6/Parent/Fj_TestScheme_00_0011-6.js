var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0011_step_24 from "../Child/Fj_TestScheme_00_0011_step_24.js";
import Fj_TestScheme_00_0011_step_25 from "../Child/Fj_TestScheme_00_0011_step_25.js";
import Fj_TestScheme_00_0011_step_26 from "../Child/Fj_TestScheme_00_0011_step_26.js";
import Fj_TestScheme_00_0011_step_27 from "../Child/Fj_TestScheme_00_0011_step_27.js";
import Fj_TestScheme_00_0011_step_28 from "../Child/Fj_TestScheme_00_0011_step_28.js";
import Fj_TestScheme_00_0011_step_29 from "../Child/Fj_TestScheme_00_0011_step_29.js";
import Fj_TestScheme_00_0011_step_30 from "../Child/Fj_TestScheme_00_0011_step_30.js";
import Fj_TestScheme_00_0011_step_31 from "../Child/Fj_TestScheme_00_0011_step_31.js";
import Fj_TestScheme_00_0011_step_32 from "../Child/Fj_TestScheme_00_0011_step_32.js";
import Fj_TestScheme_00_0011_step_39 from "../Child/Fj_TestScheme_00_0011_step_39.js";
import Fj_TestScheme_00_0011_step_40 from "../Child/Fj_TestScheme_00_0011_step_40.js";
import Fj_TestScheme_00_0011_step_41 from "../Child/Fj_TestScheme_00_0011_step_41.js";
import Fj_TestScheme_00_0011_step_42 from "../Child/Fj_TestScheme_00_0011_step_42.js";
import Fj_TestScheme_00_0011_step_43 from "../Child/Fj_TestScheme_00_0011_step_43.js";
import Fj_TestScheme_00_0011_step_44 from "../Child/Fj_TestScheme_00_0011_step_44.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-6: Loan Adjustment (お借入内容調整)", () => {
    // Execute Fetch_data
    // Please update ご融資希望日 value in test_info file before running the test
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_00_0011_step_24
    Fj_TestScheme_00_0011_step_24();

    // Execute Fj_TestScheme_00_0011_step_25
    Fj_TestScheme_00_0011_step_25();

    // Execute Fj_TestScheme_00_0011_step_26
    Fj_TestScheme_00_0011_step_26();

    // Execute Fj_TestScheme_00_0011_step_27
    Fj_TestScheme_00_0011_step_27();

    // Execute Fj_TestScheme_00_0011_step_28
    Fj_TestScheme_00_0011_step_28();

    // Execute Fj_TestScheme_00_0011_step_29
    Fj_TestScheme_00_0011_step_29();

    // Execute Fj_TestScheme_00_0011_step_30
    Fj_TestScheme_00_0011_step_30();

    // Execute Fj_TestScheme_00_0011_step_31
    Fj_TestScheme_00_0011_step_31();

    // Execute Fj_TestScheme_00_0011_step_32
    Fj_TestScheme_00_0011_step_32();

    // Execute Fj_TestScheme_00_0011_step_39
    Fj_TestScheme_00_0011_step_39();

    // Execute Fj_TestScheme_00_0011_step_40
    Fj_TestScheme_00_0011_step_40();

    // Execute Fj_TestScheme_00_0011_step_41
    Fj_TestScheme_00_0011_step_41();

    // Execute Fj_TestScheme_00_0011_step_42
    Fj_TestScheme_00_0011_step_42();

    // Execute Fj_TestScheme_00_0011_step_43
    Fj_TestScheme_00_0011_step_43();

    // Execute Fj_TestScheme_00_0011_step_44
    Fj_TestScheme_00_0011_step_44();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
  if (test_data.testData.logged_status != "mypage") {
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
    // ★ 新環境適用' New Env Implementation
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      uname,
      pword
    );
    test_data.testData.logged_status = "mypage";
  }

  // Go to My Page Application record screen
  test_data.testData.mypage_url =
    user_info.userInformation.var_sf_siteurl +
    "/s/application-detail?id=" +
    test_data.testData.app_id;
  await browser.url(test_data.testData.mypage_url);
  // Wait for app page to load
  // ★ 新環境適用' New Env Implementation
  await $("span=" + test_data.testData.app_name).waitForExist({
    timeout: 50000,
  });
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

  // Open application
  await Open_App();
}

export async function Open_App() {
  // ★ 新環境適用' New Env Implementation
  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 告知画面 tab
  await util.Application_Record_Scrolling(3); // ★ 新環境適用' New Env Implementation
}
