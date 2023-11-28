var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_60_0012_step_43 from "../Child/Fj_TestScheme_60_0012_step_43";
import Fj_TestScheme_60_0012_step_44 from "../Child/Fj_TestScheme_60_0012_step_44";
import Fj_TestScheme_60_0012_step_45 from "../Child/Fj_TestScheme_60_0012_step_45";

export default async function suite() {
  describe("Fj_TestScheme_60_0012-3: My page execution result check (マイページ実行結果確認) and Execution Result Check (実行結果確認)", () => {
    // Query Salesforce record
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_60_0012_step_43
    Fj_TestScheme_60_0012_step_43();

    // Execute Fj_TestScheme_60_0012_step_44
    Fj_TestScheme_60_0012_step_44();

    // Execute Fj_TestScheme_60_0012_step_45
    Fj_TestScheme_60_0012_step_45();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce records", async () => {
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
            test_data.testData.loan_completion_text ==
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt1_name = record.Name;
            test_data.testData.mnt1_id = record.Id;
            test_data.testData.mail_completion_time = record.CreatedDate;
          }
        }
      });

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
            test_data.testData.loan_completion_text ==
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt1_name = record.Name;
            test_data.testData.wnt1_id = record.Id;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_To_MyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
}
