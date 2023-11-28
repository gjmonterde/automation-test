var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0001_step_37 from "../Child/Fj_TestScheme_20_0001_step_37.js";
import Fj_TestScheme_20_0001_step_38 from "../Child/Fj_TestScheme_20_0001_step_38.js";
import Fj_TestScheme_20_0001_step_39 from "../Child/Fj_TestScheme_20_0001_step_39.js";
import Fj_TestScheme_20_0001_step_41 from "../Child/Fj_TestScheme_20_0001_step_41.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0001-3: My page check (マイページ確認)", () => {
    // Execute Fetch data
    Fetch_data();

    // Execute Fj_TestScheme_20_0001_step_37
    Fj_TestScheme_20_0001_step_37();

    // Execute Fj_TestScheme_20_0001_step_38
    Fj_TestScheme_20_0001_step_38();

    // Execute Fj_TestScheme_20_0001_step_39
    Fj_TestScheme_20_0001_step_39();

    // Execute Fj_TestScheme_20_0001_step_41
    Fj_TestScheme_20_0001_step_41();
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
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Get Application record ID 2
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app2_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app2_id = record.Id;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.app2_id);

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

    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

    // Get MNT record CreationDate 2
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c), CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app2_id,
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
            test_data.testData.mail_time2 = record.CreatedDate;
          }
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.mail_time2);

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
            test_data.testData.acceptance_text ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);

    // Maximize browser
    await browser.maximizeWindow();
  });
}
export async function Go_to_MyPage() {
  // Go to My Page
  await util.Go_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd,
    1
  );
}

export async function Login_to_MyPage() {
  await util.Login_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
  test_data.testData.logged_status = "mypage";

  await browser.pause(10000);
}

export async function Login_To_Salesforce() {
  // Go to Salesforce
  await browser.newWindow(user_info.userInformation.var_sf_loginurl);
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
