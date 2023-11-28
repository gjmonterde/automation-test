var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_63_1_0001_step_38 from "../Child/Fj_TestScheme_63-1_0001_step_38";
import Fj_TestScheme_63_1_0001_step_39 from "../Child/Fj_TestScheme_63-1_0001_step_39";
import Fj_TestScheme_63_1_0001_step_40 from "../Child/Fj_TestScheme_63-1_0001_step_40";
import Fj_TestScheme_63_1_0001_step_42 from "../Child/Fj_TestScheme_63-1_0001_step_42";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0001-3: My page check (マイページ確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0001_step_38
    Fj_TestScheme_63_1_0001_step_38();

    // Execute Fj_TestScheme_63-1_0001_step_39
    Fj_TestScheme_63_1_0001_step_39();

    // Execute Fj_TestScheme_63-1_0001_step_40
    Fj_TestScheme_63_1_0001_step_40();

    // Execute Fj_TestScheme_63-1_0001_step_42
    Fj_TestScheme_63_1_0001_step_42();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce Records", async () => {
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
            record.fj_WebNotificationType__c ===
            test_data.testData.acceptance_text
          ) {
            test_data.testData.wnt1_id = record.Id;
            test_data.testData.wnt1_name = record.Name;
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

export async function Login_MyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    user_info.userInformation.var_sf_mypage_loginurl,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
  test_data.testData.logged_status = "mypage";
}
