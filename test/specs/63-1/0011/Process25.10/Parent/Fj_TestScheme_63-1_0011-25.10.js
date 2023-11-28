var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import Fj_TestScheme_63_1_0011_step_120 from "../Child/Fj_TestScheme_63-1_0011_step_120.js";
import Fj_TestScheme_63_1_0011_step_121 from "../Child/Fj_TestScheme_63-1_0011_step_121.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0011-25.10: Complete My page condition check (After re-condition check) (マイページ条件確認完了(再条件確認後))", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0011_step_120
    Fj_TestScheme_63_1_0011_step_120();

    // Execute Fj_TestScheme_63-1_0011_step_121
    Fj_TestScheme_63_1_0011_step_121();
  });
}

async function Query_Salesforce_Records() {
  it("Login to Salesforce", async () => {
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

    // Get WNT record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name")
      .sort({ Name: -1 })
      .limit(1)
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_WebNotificationType__c: test_data.testData.wnt5_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.wnt1_id = record.Id;
          test_data.testData.wnt1_name = record.Name;
        }
      });

    // Get MNT record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, CreatedDate")
      .sort({ Name: -1 })
      .limit(1)
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_MailNotificationType__c: test_data.testData.mnt5_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.mnt1_id = record.Id;
          test_data.testData.mnt1_name = record.Name;
          test_data.testData.mail_time = record.CreatedDate;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_MyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    user_info.userInformation.var_sf_mypage_loginurl,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
  await browser.pause(10000);
}
