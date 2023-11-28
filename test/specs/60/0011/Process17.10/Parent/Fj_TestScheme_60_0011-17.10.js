var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_60_0011_step_91 from "../Child/Fj_TestScheme_60_0011_step_91.js";
import Fj_TestScheme_60_0011_step_92 from "../Child/Fj_TestScheme_60_0011_step_92.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-17.10: Complete My page condition check (After re-condition check) (マイページ条件確認完了(再条件確認後) )", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Login_To_Salesforce();

    // Execute Fj_TestScheme_60_0011_step_91
    Fj_TestScheme_60_0011_step_91();

    // Only execute Login to MyPage before step 92
    Login_To_MyPage();

    // Execute Fj_TestScheme_60_0011_step_92
    Fj_TestScheme_60_0011_step_92();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
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
            test_data.testData.agreement_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time_0011 = record.CreatedDate;
            continue;
          }
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
            test_data.testData.agreement_text ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt1_id = record.Id;
            continue;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_To_MyPage() {
  it("Login to MyPage", async () => {
    // Login to MyPage
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
  });
}
