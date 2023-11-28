var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_10_0011_step_102 from "../Child/Fj_TestScheme_10_0011_step_102.js";
import Fj_TestScheme_10_0011_step_103 from "../Child/Fj_TestScheme_10_0011_step_103.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0011-23: My page effected contract confirmation (マイページ契約成立確認)", () => {
    // Execute fetch data
    Fetch_data();

    // Execute Fj_TestScheme_10_0011_step_102
    Fj_TestScheme_10_0011_step_102();

    // Execute Go_to_MyPage
    // Note: Can be skipped if executing Fj_TestScheme_10_0011_step_102 only
    Login_to_MyPage();

    // Execute Fj_TestScheme_10_0011_step_103
    Fj_TestScheme_10_0011_step_103();
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
    // Application
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
            test_data.testData.conclusion_text ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt1_name = record.Name;
            test_data.testData.wnt1_id = record.Id;
          }
        }
      });
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
            test_data.testData.conclusion_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
            test_data.testData.mnt1_id = record.Id;
            test_data.testData.mnt1_name = record.Name;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      if (test_data.testData.user_status == 0) {
        // Email and password - Existing user (to be used for PG)
        await util.Login_to_MyPage(
          user_info.userInformation.var_sf_mypage_loginurl,
          user_info.userInformation.var_sf_comminuty_loginuser,
          user_info.userInformation.var_sf_comminuty_loginpwd
        );
      } else if (test_data.testData.user_status == 1) {
        // Email and password - New user (to be used for testing)
        await util.Login_to_MyPage(
          user_info.userInformation.var_sf_mypage_loginurl,
          user_info.userInformation.var_sf_comminuty_loginuser2,
          user_info.userInformation.var_sf_comminuty_loginpwd2
        );
      }
      test_data.testData.logged_status = "mypage";
    }

    // Go to MY Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(10000);
  });
}
