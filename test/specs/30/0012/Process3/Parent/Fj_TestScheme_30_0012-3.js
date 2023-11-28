var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_30_0012_step_43 from "../Child/Fj_TestScheme_30_0012_step_43";
import Fj_TestScheme_30_0012_step_44 from "../Child/Fj_TestScheme_30_0012_step_44";
import Fj_TestScheme_30_0012_step_45 from "../Child/Fj_TestScheme_30_0012_step_45";

export default async function suite() {
  describe("Fj_TestScheme_30_0012-3: My page execution result check (マイページ実行結果確認)", () => {
    // Login to salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_30_0012_step_44
    Fj_TestScheme_30_0012_step_44();

    // Execute Fj_TestScheme_30_0012_step_43
    Fj_TestScheme_30_0012_step_43();

    // Execute Fj_TestScheme_30_0012_step_45
    Fj_TestScheme_30_0012_step_45();
  });
}

async function Login_To_Salesforce() {
  it("Login to salesforce", async () => {
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
            test_data.testData.loan_type == record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_name = record.Name;
            test_data.testData.wnt_id = record.Id;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);

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
            test_data.testData.loan_type == record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt_name = record.Name;
            test_data.testData.mnt_id = record.Id;
            test_data.testData.mail_time = record.CreatedDate;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function loginMyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
  test_data.testData.logged_status = "mypage"; // ★ 新環境適用' New Env Implementation

  await browser.pause(10000);
}
