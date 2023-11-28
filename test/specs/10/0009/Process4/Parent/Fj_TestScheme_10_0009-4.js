var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
import Fj_TestScheme_10_0009_step_15 from "../Child/Fj_TestScheme_10_0009_step_15";
import Fj_TestScheme_10_0009_step_16 from "../Child/Fj_TestScheme_10_0009_step_16";
import Fj_TestScheme_10_0009_step_17 from "../Child/Fj_TestScheme_10_0009_step_17";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0009-4: My page check (マイページ確認)", async () => {
    // Query Salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_10_0009_step_15
    Fj_TestScheme_10_0009_step_15();

    // MyPage Sign-in
    // **Comment out if step_15 is the only step needed to be executed
    MyPage_Login();

    // Execute Fj_TestScheme_10_0009_step_16
    Fj_TestScheme_10_0009_step_16();

    // Execute Fj_TestScheme_10_0009_step_17
    Fj_TestScheme_10_0009_step_17();
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
      .select("Id, Name, CreatedDate, fj_WebNotificationType__c")
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
            record.fj_WebNotificationType__c === test_data.testData.wnt_type
          ) {
            test_data.testData.wnt1_id = record.Id;
            test_data.testData.wnt1_name = record.Name;
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
  });
}
