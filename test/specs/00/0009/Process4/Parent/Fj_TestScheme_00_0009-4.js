var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0009_step_16 from "../Child/Fj_TestScheme_00_0009_step_16.js";
import Fj_TestScheme_00_0009_step_17 from "../Child/Fj_TestScheme_00_0009_step_17.js";
import Fj_TestScheme_00_0009_step_18 from "../Child/Fj_TestScheme_00_0009_step_18.js";
import Fj_TestScheme_00_0009_step_22 from "../Child/Fj_TestScheme_00_0009_step_22.js";
import Fj_TestScheme_00_0009_step_23 from "../Child/Fj_TestScheme_00_0009_step_23.js";
import Fj_TestScheme_00_0009_step_24 from "../Child/Fj_TestScheme_00_0009_step_24.js";
import Fj_TestScheme_00_0009_step_26 from "../Child/Fj_TestScheme_00_0009_step_26.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0009-4: My page check (マイページ確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    //**MNT メール通知種別 = 審査結果(応諾), execute this.
    // Else, comment out step_16-18  */
    // Execute Fj_TestScheme_00_0009_step_16
    Fj_TestScheme_00_0009_step_16();

    // Execute Fj_TestScheme_00_0009_step_17
    Fj_TestScheme_00_0009_step_17();

    // Execute Fj_TestScheme_00_0009_step_18
    Fj_TestScheme_00_0009_step_18();

    //**MNT メール通知種別 = 審査結果(謝絶), execute this.
    // Else, comment out step_22-24  */

    // Execute Fj_TestScheme_00_0009_step_22
    Fj_TestScheme_00_0009_step_22();

    // Execute Fj_TestScheme_00_0009_step_23
    Fj_TestScheme_00_0009_step_23();

    // Execute Fj_TestScheme_00_0009_step_24
    Fj_TestScheme_00_0009_step_24();

    //**If step_25 キャンセル is performed, execute step_26.
    // Else, comment out */
    // Execute Fj_TestScheme_00_0009_step_26
    Fj_TestScheme_00_0009_step_26();
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
      .select("Id, Name, genesis__CL_Product_Name__c")
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
          test_data.testData.pro_name = record.genesis__CL_Product_Name__c;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.pro_name);

    // Get CRE record
    await conn
      .sobject("FJ_CreditApproval__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.cre_id);

    // ★ 新環境適用' New Env Implementation
    // Get MNT record ID
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name,toLabel(fj_MailNotificationType__c), CreatedDate") // ★ 新環境適用' New Env Implementation
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          // ★ 新環境適用' New Env Implementation
          if (
            test_data.testData.exam_result_compliance_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt_id = record.Id;
            test_data.testData.mnt_name = record.Name;
            test_data.testData.mail_time = record.CreatedDate; // ★ 新環境適用' New Env Implementation
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mnt_id);

    // ★ 新環境適用' New Env Implementation
    // Get WNT record ID
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
          // ★ 新環境適用' New Env Implementation
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Login_MyPage() {
  var uname, pword;
  if (test_data.testData.user_status == 0) {
    // if existing user
    uname = user_info.userInformation.var_sf_comminuty_loginuser;
    pword = user_info.userInformation.var_sf_comminuty_loginpwd;
  } else if (test_data.testData.user_status == 1) {
    // if new user
    uname = user_info.userInformation.var_sf_comminuty_loginuser2;
    pword = user_info.userInformation.var_sf_comminuty_loginpwd2;
  }

  // Login to My Page
  await util.Login_to_MyPage(test_data.testData.mypage_url, uname, pword); // ★ 新環境適用' New Env Implementation
  test_data.testData.logged_status = "mypage"; // ★ 新環境適用' New Env Implementation
}

export async function Login_as_Tantou1() {
  // Login as tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);
  test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app); // ★ 新環境適用' New Env Implementation
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_APP() {
  // Go to My Page APP record screen
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id
  );
  await browser.pause(10000);
}

// ★ 新環境適用' New Env Implementation
export async function Go_to_WNT() {
  // Go to WNT Record
  await browser.url(
    user_info.userInformation.var_sf_siteurl +
      "/s/fj-webnotification/" +
      test_data.testData.wnt_id
  );
  await $("span=" + test_data.testData.wnt_name).waitForExist({
    timeout: 30000,
  });
}

// ★ 新環境適用' New Env Implementation
export async function Open_CRE_Record() {
  // Go to CRE record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.cre_obj,
    test_data.testData.cre_id
  );
}
