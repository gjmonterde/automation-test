var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_30_0009_step_14 from "../Child/Fj_TestScheme_30_0009_step_14";
import Fj_TestScheme_30_0009_step_15 from "../Child/Fj_TestScheme_30_0009_step_15";
import Fj_TestScheme_30_0009_step_16 from "../Child/Fj_TestScheme_30_0009_step_16";

export default async function suite() {
  describe("Fj_TestScheme_30_0009-4: Check My Page (マイページ確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_30_0009_step_14
    Fj_TestScheme_30_0009_step_14();

    // Execute Fj_TestScheme_30_0009_step_15
    Fj_TestScheme_30_0009_step_15();

    // Execute Fj_TestScheme_30_0009_step_16
    Fj_TestScheme_30_0009_step_16();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
    // JSforce connection
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

    // Get Application Id
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

    // Get WNT record ID
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name, CreatedDate, toLabel(fj_WebNotificationType__c)")
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
            test_data.testData.exam_result_compliance_rectype ===
            record.fj_WebNotificationType__c
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
            test_data.testData.exam_result_compliance_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

    // Maximize window
    await browser.maximizeWindow();
  });
}

export async function Login_As_Admin() {
  // Login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
  test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation
}

export async function Login_As_User_In_Charge() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_To_MyPage() {
  // Login to MyPage
  await util.Login_to_MyPage(
    test_data.testData.mypage_url,
    user_info.userInformation.var_sf_comminuty_loginuser,
    user_info.userInformation.var_sf_comminuty_loginpwd
  );
  test_data.testData.logged_status = "mypage"; // ★ 新環境適用' New Env Implementation

  await browser.pause(10000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to 審査 detail page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
