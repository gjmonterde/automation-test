var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import Fj_TestScheme_63_2_0001_step_37 from "../Child/Fj_TestScheme_63-2_0001_step_37.js";
import Fj_TestScheme_63_2_0001_step_38 from "../Child/Fj_TestScheme_63-2_0001_step_38.js";
import Fj_TestScheme_63_2_0001_step_41 from "../Child/Fj_TestScheme_63-2_0001_step_41.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0001-3: My page check (マイページ確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0001_step_37
    Fj_TestScheme_63_2_0001_step_37();

    // MyPage Login
    // Comment out if step_37 is needed to be executed only
    MyPage_Login();

    // Execute Fj_TestScheme_63-2_0001_step_38
    Fj_TestScheme_63_2_0001_step_38();

    // Execute Fj_TestScheme_63-2_0001_step_41
    Fj_TestScheme_63_2_0001_step_41();
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

async function MyPage_Login() {
  it("MyPage Sign-in", async () => {
    // To determine if the user is existing or new one
    if (test_data.testData.user_status == 0) {
      // if existing user
      await util.Login_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser,
        user_info.userInformation.var_sf_comminuty_loginpwd
      );
    } else if (test_data.testData.user_status == 1) {
      // if new user
      await util.Login_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser2,
        user_info.userInformation.var_sf_comminuty_loginpwd2
      );
    }
  });
}
