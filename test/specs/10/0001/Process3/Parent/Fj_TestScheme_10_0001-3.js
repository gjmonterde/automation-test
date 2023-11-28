var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import Fj_TestScheme_10_0001_step_37 from "../Child/Fj_TestScheme_10_0001_step_37.js";
import Fj_TestScheme_10_0001_step_38 from "../Child/Fj_TestScheme_10_0001_step_38.js";
import Fj_TestScheme_10_0001_step_40 from "../Child/Fj_TestScheme_10_0001_step_40.js";
import Fj_TestScheme_10_0001_step_41 from "../Child/Fj_TestScheme_10_0001_step_41.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0001-3: My page check (マイページ確認)", () => {
    // Execute fetch data
    Fetch_data();

    // Execute Fj_TestScheme_10_0001_step_37
    Fj_TestScheme_10_0001_step_37();

    // Execute Go_to_MyPage
    // Note: Can be skipped if executing Fj_TestScheme_10_0001_step_37 only
    Go_to_MyPage();

    // Execute Fj_TestScheme_10_0001_step_38
    Fj_TestScheme_10_0001_step_38();

    // Execute Fj_TestScheme_10_0001_step_40
    Fj_TestScheme_10_0001_step_40();

    // Execute Fj_TestScheme_10_0001_step_41
    Fj_TestScheme_10_0001_step_41();
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
            test_data.testData.acceptance_text ===
            record.fj_WebNotificationType__c
          ) {
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
            test_data.testData.acceptance_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Go_to_MyPage() {
  it("Login to My Page", async () => {
    // Go to MyPage
    await Go_to_MyPage_Log();
  });
}

export async function Go_to_MyPage_Log() {
  if (test_data.testData.user_status == 0) {
    // Email and password - Existing user (to be used for PG)
    await util.Go_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  } else if (test_data.testData.user_status == 1) {
    // Email and password - New user (to be used for testing)
    await util.Go_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser2,
      user_info.userInformation.var_sf_comminuty_loginpwd2
    );
  }
}

export async function Login_MyPage_Full() {
  // Login to My Page
  // ★ 新環境適用' New Env Implementation
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
}
