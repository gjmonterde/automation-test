var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import Fj_TestScheme_70_0011_step_81 from "../Child/Fj_TestScheme_70_0011_step_81.js";
import Fj_TestScheme_70_0011_step_82 from "../Child/Fj_TestScheme_70_0011_step_82.js";
import Fj_TestScheme_70_0011_step_83 from "../Child/Fj_TestScheme_70_0011_step_83.js";
import Fj_TestScheme_70_0011_step_84 from "../Child/Fj_TestScheme_70_0011_step_84.js";
import Fj_TestScheme_70_0011_step_86 from "../Child/Fj_TestScheme_70_0011_step_86.js";
import Fj_TestScheme_70_0011_step_87 from "../Child/Fj_TestScheme_70_0011_step_87.js";
import Fj_TestScheme_70_0011_step_88 from "../Child/Fj_TestScheme_70_0011_step_88.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0011-17: My page re-condition check (Before agreement) (マイページ再条件確認(同意前))", () => {
    // Execute Fetch data
    // NOTE: Always execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_70_0011_step_81
    Fj_TestScheme_70_0011_step_81();

    // Execute Fj_TestScheme_70_0011_step_82
    Fj_TestScheme_70_0011_step_82();

    // Execute Fj_TestScheme_70_0011_step_83
    Fj_TestScheme_70_0011_step_83();

    // Execute Fj_TestScheme_70_0011_step_84
    Fj_TestScheme_70_0011_step_84();

    // Execute Fj_TestScheme_70_0011_step_86
    Fj_TestScheme_70_0011_step_86();

    // Execute Fj_TestScheme_70_0011_step_87
    Fj_TestScheme_70_0011_step_87();

    // Execute Fj_TestScheme_70_0011_step_88
    Fj_TestScheme_70_0011_step_88();
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
            test_data.testData.reconfirmation_txt ===
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
            test_data.testData.reconfirmation_txt ===
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

    // ★ 新環境適用' New Env Implementation
    // Make sure that mypage_url variable is blank
    test_data.testData.mypage_url = "";
  });
}

export async function Login_to_MyPage() {
  // Login to My Page
  await util.Login_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  ); // ★ 新環境適用' New Env Implementation
  test_data.testData.logged_status = "mypage";

  await browser.pause(10000);
}

export async function Go_to_App_record() {
  // Go to My Page Application record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await $("span=" + test_data.testData.app_name).waitForExist({
    timeout: 50000,
  });
}

export async function Go_to_Loan_Adjustment() {
  // Click the 「お借入内容調整」 "Loan details adjustment" button.
  await $("button=" + test_data.testData.mypage_borrowing_details_btn).click();
  await browser.pause(10000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT() {
  // Go to WNT Record
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/fj-webnotification/" +
      test_data.testData.wnt_id
  );
  await $("span=" + test_data.testData.wnt_name).waitForExist({
    timeout: 30000,
  });
}
