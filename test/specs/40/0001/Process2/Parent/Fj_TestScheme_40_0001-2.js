var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0001_step_22 from "../Child/Fj_TestScheme_40_0001_step_22.js";
import Fj_TestScheme_40_0001_step_23 from "../Child/Fj_TestScheme_40_0001_step_23.js";
import Fj_TestScheme_40_0001_step_24 from "../Child/Fj_TestScheme_40_0001_step_24.js";
import Fj_TestScheme_40_0001_step_28 from "../Child/Fj_TestScheme_40_0001_step_28.js";
import Fj_TestScheme_40_0001_step_31 from "../Child/Fj_TestScheme_40_0001_step_31.js";
import Fj_TestScheme_40_0001_step_32 from "../Child/Fj_TestScheme_40_0001_step_32.js";
import Fj_TestScheme_40_0001_step_35 from "../Child/Fj_TestScheme_40_0001_step_35.js";
import Fj_TestScheme_40_0001_step_36 from "../Child/Fj_TestScheme_40_0001_step_36.js";
import Fj_TestScheme_40_0001_step_44 from "../Child/Fj_TestScheme_40_0001_step_44.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0001-2: Registration content check (登録内容確認)", () => {
    // Execute login to Salesforce
    // Please update Application names based on App records created on 40_0001-1
    // NOTE: ALways execute except when running step 44 only
    Login_to_Salesforce();

    //Execute Fj_TestScheme_40_0001_step_22
    Fj_TestScheme_40_0001_step_22();

    // Execute Fj_TestScheme_40_0001_step_23
    Fj_TestScheme_40_0001_step_23();

    // Execute Fj_TestScheme_40_0001_step_24
    Fj_TestScheme_40_0001_step_24();

    // Execute Fj_TestScheme_40_0001_step_28
    Fj_TestScheme_40_0001_step_28();

    // Execute Fj_TestScheme_40_0001_step_31
    Fj_TestScheme_40_0001_step_31();

    //  Execute login to Salesforce
    // NOTE: Re-execute login to Salesforce if running steps 32 and 35 after step 31,
    //       Do not execute if (1) running step 44 only, (2) running step 44 only after step 31
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0001_step_32
    Fj_TestScheme_40_0001_step_32();

    // Execute Fj_TestScheme_40_0001_step_35
    Fj_TestScheme_40_0001_step_35();

    //Execute login to Salesforce
    // NOTE: Re-execute login to Salesforce if running step 36 after step 35,
    //     Do not execute if (1) running step 44 only, (2) running step 44 only after step 35
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0001_step_36
    Fj_TestScheme_40_0001_step_36();

    // // Execute Fj_TestScheme_40_0001_step_44
    Fj_TestScheme_40_0001_step_44();
  });
}

async function Login_to_Salesforce() {
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

    // Get APP 1 record
    await conn
      .sobject("genesis__Applications__c")
      .select(
        "Id, Name, genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name"
      )
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__c;
          test_data.testData.contact_id = record.fj_RefContact__c;
          test_data.testData.contact_name = record.fj_RefContact__r.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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
            test_data.testData.wnt_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.wnt_id);

    // Get MNT 1 record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c)")
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
            test_data.testData.mnt_id = record.Id;
            test_data.testData.mnt_name = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.mnt_id);

    // Get BA 1 record
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ba_name = record.Name;
          test_data.testData.ba_id = record.Id;
          break;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ba_id);

    // Get APP 2 record
    await conn
      .sobject("genesis__Applications__c")
      .select(
        "Id, Name, genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name"
      )
      .where({
        Name: test_data.testData.app_name2,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id2 = record.Id;
          test_data.testData.account_name2 = record.genesis__Account__r.Name;
          test_data.testData.account_id2 = record.genesis__Account__c;
          test_data.testData.contact_id2 = record.fj_RefContact__c;
          test_data.testData.contact_name2 = record.fj_RefContact__r.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.app_id2);

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
            test_data.testData.wnt_name2 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.wnt_id2);

    // Get MNT 2 record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, toLabel(fj_MailNotificationType__c)")
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
            test_data.testData.mnt_id2 = record.Id;
            test_data.testData.mnt_name2 = record.Name;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.mnt_id2);

    // Get BA 2 record
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id2,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ba_name2 = record.Name;
          test_data.testData.ba_id2 = record.Id;
          break;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ba_id2);

    // ★ 新環境適用' New Env Implementation
    // Listview - AppLogs すべて選択
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "FJ_ApplicationAccessLog__c",
        Name: test_data.testData.all_aal_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.listview_id);

    // ★ 新環境適用' New Env Implementation
    // Listview - Account
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "Account",
        Name: test_data.testData.all_account_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview2_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.listview2_id);

    // ★ 新環境適用' New Env Implementation
    // Listview - Contact
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "Contact",
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.Name == test_data.testData.all_contact_listview) {
            test_data.testData.listview3_id = record.Id;
          }
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.listview3_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_admin() {
  // login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
