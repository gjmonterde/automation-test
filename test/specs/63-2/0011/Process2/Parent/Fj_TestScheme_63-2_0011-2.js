var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import Fj_TestScheme_63_2_0011_step_03 from "../Child/Fj_TestScheme_63-2_0011_step_03.js";
import Fj_TestScheme_63_2_0011_step_05 from "../Child/Fj_TestScheme_63-2_0011_step_05.js";
import Fj_TestScheme_63_2_0011_step_07 from "../Child/Fj_TestScheme_63-2_0011_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0011-2: My page initial process checkcution Result Check (マイページ初期処理確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0011_step_03
    Fj_TestScheme_63_2_0011_step_03();

    // Login to MyPage
    Login_MyPage();

    // Execute Fj_TestScheme_63-2_0011_step_05
    Fj_TestScheme_63_2_0011_step_05();

    // Execute Fj_TestScheme_63-2_0011_step_07
    Fj_TestScheme_63_2_0011_step_07();
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
      .select("Id")
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
      .select("Id, Name, CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_WebNotificationType__c: test_data.testData.wnt3_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.wnt3_id = record.Id;
          test_data.testData.wnt3_name = record.Name;
          test_data.testData.mail_time = record.CreatedDate;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_MyPage() {
  it("MyPage Sign-in", async () => {
    // Go to MyPage
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
    await browser.pause(10000);
  });
}
