var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_40_0011_step_03 from "../Child/Fj_TestScheme_40_0011_step_03.js";
import Fj_TestScheme_40_0011_step_05 from "../Child/Fj_TestScheme_40_0011_step_05.js";
import Fj_TestScheme_40_0011_step_07 from "../Child/Fj_TestScheme_40_0011_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0011-2: My page initial process check (マイページ初期処理確認)", () => {
    // Execute Fetch data
    // NOTE: Always execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_40_0011_step_03
    Fj_TestScheme_40_0011_step_03();

    // Execute Login_to_MyPage
    // Note: ALWAYS execute before step 5 and 7
    //       Can be skipped if executing step 3 only
    Login_to_MyPage();

    // Execute Fj_TestScheme_40_0011_step_05
    Fj_TestScheme_40_0011_step_05();

    // Execute Fj_TestScheme_40_0011_step_07
    Fj_TestScheme_40_0011_step_07();
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

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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
            test_data.testData.condition_check_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
            test_data.testData.mnt_id = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.mnt_id);

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
            test_data.testData.condition_check_rectype ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id = record.Id;
            test_data.testData.wnt_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_to_MyPage() {
  it("Login to My Page", async () => {
    // Login to My Page
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
