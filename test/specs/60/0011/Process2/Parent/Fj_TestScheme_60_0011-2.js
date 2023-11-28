var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_60_0011_step_03 from "../Child/Fj_TestScheme_60_0011_step_03.js";
import Fj_TestScheme_60_0011_step_05 from "../Child/Fj_TestScheme_60_0011_step_05.js";
import Fj_TestScheme_60_0011_step_07 from "../Child/Fj_TestScheme_60_0011_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-2: My page initial process check (マイページ初期処理確認)", () => {
    // Execute fetch data
    // NOTE: ALWAYS execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_60_0011_step_03
    Fj_TestScheme_60_0011_step_03();

    // Execute Go to My Page
    // NOTE: Execute before step 05 and step 07
    Go_to_MyPage();

    // Execute Fj_TestScheme_60_0011_step_05
    Fj_TestScheme_60_0011_step_05();

    // Execute Fj_TestScheme_60_0011_step_07
    Fj_TestScheme_60_0011_step_07();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
            test_data.testData.condition_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time_0011 = record.CreatedDate;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mail_time_0011);

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
            test_data.testData.condition_text ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt1_id = record.Id;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.wnt1_id);

    // Maximize browser
    await browser.maximizeWindow();
  });
}
async function Go_to_MyPage() {
  it("Go to My Page", async () => {
    // Login to MyPage
    await util.Login_to_MyPage(
      user_info.userInformation.var_sf_mypage_loginurl,
      user_info.userInformation.var_sf_comminuty_loginuser,
      user_info.userInformation.var_sf_comminuty_loginpwd
    );
    await browser.pause(10000);
  });
}
