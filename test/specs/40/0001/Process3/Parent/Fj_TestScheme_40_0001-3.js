var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_40_0001_step_37 from "../Child/Fj_TestScheme_40_0001_step_37.js";
import Fj_TestScheme_40_0001_step_38 from "../Child/Fj_TestScheme_40_0001_step_38.js";
import Fj_TestScheme_40_0001_step_40 from "../Child/Fj_TestScheme_40_0001_step_40.js";
import Fj_TestScheme_40_0001_step_41 from "../Child/Fj_TestScheme_40_0001_step_41.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0001-3: My page check (マイページ確)", () => {
    // Execute Fetch data
    // NOTE: Always execute before steps
    Fetch_data();

    // Execute Fj_TestScheme_40_0001_step_37
    Fj_TestScheme_40_0001_step_37();

    // Execute Go_to_MyPage
    // Note: Can be skipped if executing step 37 only
    Go_to_MyPage();

    // Execute Fj_TestScheme_40_0001_step_38
    Fj_TestScheme_40_0001_step_38();

    // Execute Fj_TestScheme_40_0001_step_40
    Fj_TestScheme_40_0001_step_40();

    // Execute Fj_TestScheme_40_0001_step_41
    Fj_TestScheme_40_0001_step_41();
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

    // Get APP 1 record
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

    // Get MNT 1 record
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
            test_data.testData.acceptance_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time = record.CreatedDate;
            test_data.testData.mnt_id = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.mnt_id);

    // Get WNT 1 record
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
            test_data.testData.acceptance_rectype ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);

    // Get APP 2 record
    await conn
      .sobject("genesis__Applications__c")
      .select("Id, Name")
      .where({
        Name: test_data.testData.app_name2,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id2 = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id2);

    // Get MNT 2 record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c), CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id2,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.acceptance_rectype ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mail_time2 = record.CreatedDate;
            test_data.testData.mnt_id2 = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.mnt_id2);

    // Get WNT 2 record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name, toLabel(fj_WebNotificationType__c)")
      .where({
        fj_RefApplication__c: test_data.testData.app_id2,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.acceptance_rectype ===
            record.fj_WebNotificationType__c
          ) {
            test_data.testData.wnt_id2 = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.wnt_id2);

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Go_to_MyPage() {
  it("Login to My Page", async () => {
    // Go to My Page
    if (test_data.testData.user_status == 0) {
      // if existing user
      await util.Go_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser,
        user_info.userInformation.var_sf_comminuty_loginpwd
      );
    } else if (test_data.testData.user_status == 1) {
      // if new user
      await util.Go_to_MyPage(
        user_info.userInformation.var_sf_mypage_loginurl,
        user_info.userInformation.var_sf_comminuty_loginuser2,
        user_info.userInformation.var_sf_comminuty_loginpwd2
      );
    }
  });
}

export async function Login_MyPage_Full() {
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
}
