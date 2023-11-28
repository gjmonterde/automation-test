var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import Fj_TestScheme_00_0011_step_50 from "../Child/Fj_TestScheme_00_0011_step_50.js";
import Fj_TestScheme_00_0011_step_51 from "../Child/Fj_TestScheme_00_0011_step_51.js";
import Fj_TestScheme_00_0011_step_52 from "../Child/Fj_TestScheme_00_0011_step_52.js";
import Fj_TestScheme_00_0011_step_53 from "../Child/Fj_TestScheme_00_0011_step_53.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-10: Mypage re-condition check (Re-examination) (マイページ再条件確認(再審査要))", () => {
    // Execute Fetch data
    // NOTE: Always execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_00_0011_step_50
    Fj_TestScheme_00_0011_step_50();

    // Execute Fj_TestScheme_00_0011_step_51
    Fj_TestScheme_00_0011_step_51();

    // Execute Fj_TestScheme_00_0011_step_52
    Fj_TestScheme_00_0011_step_52();

    // Execute Fj_TestScheme_00_0011_step_53
    Fj_TestScheme_00_0011_step_53();
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

    // Get MNT record
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
            test_data.testData.recondition_confirmation ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
            test_data.testData.mnt_id = record.Id;
            continue;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

    // Get WNT record
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
            test_data.testData.recondition_confirmation ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id = record.Id;
            test_data.testData.wnt_name = record.Name;
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
  await util.Login_to_MyPage(test_data.testData.mypage_url, uname, pword); // ★ 新環境適用' New Env Implementation
  test_data.testData.logged_status = "mypage";
}

export async function Go_to_Loan_Adjustment() {
  // ★ 新環境適用' New Env Implementation
  // Click the 「お借入内容調整」 "Loan details adjustment" button.
  await $("button=" + test_data.testData.mypage_borrowing_details_btn).click();
  await browser.pause(10000);
}

export async function Go_to_MyPage_App() {
  // Go to My Page Application record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );

  // Wait for app page to load
  await $("span=" + test_data.testData.app_name).waitForExist({
    timeout: 50000,
  });
}
