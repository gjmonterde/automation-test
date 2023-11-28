var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_00.js");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation
import Fj_TestScheme_00_0011_step_87 from "../Child/Fj_TestScheme_00_0011_step_87.js";
import Fj_TestScheme_00_0011_step_88 from "../Child/Fj_TestScheme_00_0011_step_88.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0011-21: My page effected contract confirmation (マイページ契約成立確認)", () => {
    // Execute Fetch data
    // NOTE: Always execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_00_0011_step_87
    Fj_TestScheme_00_0011_step_87();

    // Execute Fj_TestScheme_00_0011_step_88
    Fj_TestScheme_00_0011_step_88();
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

    // ★ 新環境適用' New Env Implementation
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
            test_data.testData.contract_conclusion_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
            test_data.testData.mnt_id = record.Id;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.mail_time);

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
            test_data.testData.contract_conclusion_rectype ===
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

export async function Login_to_MyPage() {
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
}

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
