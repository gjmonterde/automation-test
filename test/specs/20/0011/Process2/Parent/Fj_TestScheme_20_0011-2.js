var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_20_0011_step_03 from "../Child/Fj_TestScheme_20_0011_step_03.js";
import Fj_TestScheme_20_0011_step_05 from "../Child/Fj_TestScheme_20_0011_step_05.js";
import Fj_TestScheme_20_0011_step_06 from "../Child/Fj_TestScheme_20_0011_step_06.js";
import Fj_TestScheme_20_0011_step_07 from "../Child/Fj_TestScheme_20_0011_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0011-2: My page initial process check (マイページ初期処理確認)", () => {
    // Execute Fetch_data
    Fetch_data();

    // Execute Fj_TestScheme_20_0011_step_03
    Fj_TestScheme_20_0011_step_03();

    // Execute Fj_TestScheme_20_0011_step_06
    // NOTE: Since step 05 and 06 have the same first screenshot but step 05 have screenshots after the first screenshot,
    //       while step 06 does not, step 06 is executed first
    Fj_TestScheme_20_0011_step_06();

    // Execute Fj_TestScheme_20_0011_step_05
    Fj_TestScheme_20_0011_step_05();

    // Execute Fj_TestScheme_20_0011_step_07
    Fj_TestScheme_20_0011_step_07();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
    // Connect to salesforce
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
            test_data.testData.wnt_name = record.Name;
            test_data.testData.wnt_id = record.Id;
          }
        }
      });
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
            test_data.testData.condition_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

    // Maximize browser
    await browser.maximizeWindow();
  });
}
export async function Login_to_MyPage() {
  // Go to My Page
  await util.Login_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );

  test_data.testData.logged_status = "mypage";

  await browser.pause(10000);
}
