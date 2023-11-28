var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0011_step_55 from "../Child/Fj_TestScheme_30_0011_step_55.js";
import Fj_TestScheme_30_0011_step_56 from "../Child/Fj_TestScheme_30_0011_step_56.js";
import Fj_TestScheme_30_0011_step_57 from "../Child/Fj_TestScheme_30_0011_step_57.js";
import Fj_TestScheme_30_0011_step_58 from "../Child/Fj_TestScheme_30_0011_step_58.js";
import Fj_TestScheme_30_0011_step_59 from "../Child/Fj_TestScheme_30_0011_step_59.js";
import Fj_TestScheme_30_0011_step_60 from "../Child/Fj_TestScheme_30_0011_step_60.js";
import Fj_TestScheme_30_0011_step_61 from "../Child/Fj_TestScheme_30_0011_step_61.js";
import Fj_TestScheme_30_0011_step_62 from "../Child/Fj_TestScheme_30_0011_step_62.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0011-12: Mypage re-condition check (Re-examination) (マイページ再条件確認(再審査要))", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_30_0011_step_55
    Fj_TestScheme_30_0011_step_55();

    // Execute Fj_TestScheme_30_0011_step_56
    Fj_TestScheme_30_0011_step_56();

    // Execute Fj_TestScheme_30_0011_step_57
    Fj_TestScheme_30_0011_step_57();

    // Execute Fj_TestScheme_30_0011_step_58
    Fj_TestScheme_30_0011_step_58();

    // Execute Fj_TestScheme_30_0011_step_59
    Fj_TestScheme_30_0011_step_59();

    // Execute Fj_TestScheme_30_0011_step_60
    Fj_TestScheme_30_0011_step_60();

    // Execute Fj_TestScheme_30_0011_step_61
    Fj_TestScheme_30_0011_step_61();

    // Execute Fj_TestScheme_30_0011_step_62
    Fj_TestScheme_30_0011_step_62();
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

    // Get MNT record CreationDate
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c), CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.reconfirmation_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
            continue;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

    // Web Notification
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name, toLabel(fj_WebNotificationType__c)")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.reconfirmation_text ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id = record.Id;
            continue;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

// ★ 新環境適用' New Env Implementation
export async function Login_to_Salesforce() {
  if (test_data.testData.logged_status != "uic") {
    // Login to Salesforce
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  }

  // Go to App record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Go to 告知画面 tab
  await util.Application_Record_Scrolling(3);
}

export async function Go_to_Loan_Adjustment() {
  // Click the 「お借入内容調整」 "Loan details adjustment" button.
  await $(
    "button=" + test_data.testData.mypage_borrowing_details_btn
  ).scrollIntoView();
  await $("button=" + test_data.testData.mypage_borrowing_details_btn).click();
  await browser.pause(10000);
}

export async function Login_to_MyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );

  test_data.testData.logged_status = "mypage"; // ★ 新環境適用' New Env Implementation

  await browser.pause(10000);
}
