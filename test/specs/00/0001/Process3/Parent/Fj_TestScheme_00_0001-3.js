var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_00_0001_step_36 from "../Child/Fj_TestScheme_00_0001_step_36";
import Fj_TestScheme_00_0001_step_37 from "../Child/Fj_TestScheme_00_0001_step_37";
import Fj_TestScheme_00_0001_step_38 from "../Child/Fj_TestScheme_00_0001_step_38";
import Fj_TestScheme_00_0001_step_39 from "../Child/Fj_TestScheme_00_0001_step_39";
import Fj_TestScheme_00_0001_step_40 from "../Child/Fj_TestScheme_00_0001_step_40";

export default async function suite() {
  describe("Fj_TestScheme_00_0001-3: My page check (マイページ確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_00_0001_step_36
    Fj_TestScheme_00_0001_step_36();

    // Execute Fj_TestScheme_00_0001_step_37
    Fj_TestScheme_00_0001_step_37();

    // MyPage Login
    // Comment out if step_38, 39 are needed to be executed only
    MyPage_Login();

    //**WITH EXISTING CUSTOMERS. EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_38
    Fj_TestScheme_00_0001_step_38();

    //**WITHOUT EXISTING CUSTOMERS. EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_39
    Fj_TestScheme_00_0001_step_39();

    // Execute Fj_TestScheme_00_0001_step_40
    Fj_TestScheme_00_0001_step_40();
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
            record.fj_WebNotificationType__c ===
            test_data.testData.acceptance_text
          ) {
            test_data.testData.wnt_id = record.Id;
            test_data.testData.wnt_name = record.Name;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function MyPage_Login() {
  it("MyPage Sign-in", async () => {
    // Login to My Page
    // ★ 新環境適用' New Env Implementation
    await util.Login_to_MyPage(test_data.testData.mypage_url, uname, pword);
  });
}
