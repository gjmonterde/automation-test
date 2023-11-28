var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_30_0001_step_23 from "../Child/Fj_TestScheme_30_0001_step_23.js";
import Fj_TestScheme_30_0001_step_25 from "../Child/Fj_TestScheme_30_0001_step_25.js";
import Fj_TestScheme_30_0001_step_30 from "../Child/Fj_TestScheme_30_0001_step_30.js";
import Fj_TestScheme_30_0001_step_31 from "../Child/Fj_TestScheme_30_0001_step_31.js";
import Fj_TestScheme_30_0001_step_34 from "../Child/Fj_TestScheme_30_0001_step_34.js";
import Fj_TestScheme_30_0001_step_45 from "../Child/Fj_TestScheme_30_0001_step_45.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0001-2: Registration content check (登録内容確認)", () => {
    // Execute Fetch data from salesforce
    Fetch_data();

    // Execute Fj_TestScheme_30_0001_step_23
    Fj_TestScheme_30_0001_step_23();

    // Execute Fj_TestScheme_30_0001_step_25
    Fj_TestScheme_30_0001_step_25();

    // Execute Fj_TestScheme_30_0001_step_30
    Fj_TestScheme_30_0001_step_30();

    // Execute Fj_TestScheme_30_0001_step_31
    Fj_TestScheme_30_0001_step_31();

    // Execute Fj_TestScheme_30_0001_step_34
    Fj_TestScheme_30_0001_step_34();

    // Execute Fj_TestScheme_30_0001_step_45
    Fj_TestScheme_30_0001_step_45();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
    var conn = new jsforce.Connection({
      loginUrl: user_info.userInformation.var_sf_loginurl,
    });
    // Get app record ID and Name
    await conn.login(
      user_info.userInformation.var_sf_loginuser_admin,
      user_info.userInformation.var_sf_loginpwd_admin,
      function (err, res) {
        if (err) {
          return console.log(err);
        }
      }
    );
    // Application
    await conn
      .sobject("genesis__Applications__c")
      .select(
        "Id, Name, genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name"
      )
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
          test_data.testData.account_name = record.genesis__Account__r.Name;
          test_data.testData.account_id = record.genesis__Account__c;
          test_data.testData.contact_id = record.fj_RefContact__c;
          test_data.testData.contact_name = record.fj_RefContact__r.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.account_id);
    await util.Record_check(1, test_data.testData.contact_id);

    // Get MNT record
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
            test_data.testData.acceptance_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt_id = record.Id;
            test_data.testData.mnt_name = record.Name;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
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
            test_data.testData.acceptance_text ===
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

    // Listview - Application
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "genesis__Applications__c",
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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview2_id);

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

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview3_id);
  });
}

// ★ 新環境適用' New Env Implementation
// Login
export async function Login_as_tantou() {
  if (test_data.testData.logged_status != "uic") {
    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);
    test_data.testData.logged_status = "uic"; // ★ 新環境適用' New Env Implementation

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  }
}

export async function Login_as_admin() {
  if (test_data.testData.logged_status != "admin") {
    // Login to org - admin
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);
    test_data.testData.logged_status = "admin"; // ★ 新環境適用' New Env Implementation
  }
}

// ★ 新環境適用' New Env Implementation
// Links
export async function Go_to_App_list() {
  // Go to Application list
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      test_data.testData.httpurl02 +
      test_data.testData.listview_id
  );
  await browser.pause(7000);
}

export async function Go_to_APP() {
  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Go_to_WNT() {
  // Go to WNT record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.wnt_obj,
    test_data.testData.wnt_id
  );
}

export async function Go_to_MNT() {
  // Go to MNT record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.mnt_obj,
    test_data.testData.mnt_id
  );
}

export async function Go_to_Account_list() {
  // Go to Account list view
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      test_data.testData.httpurl03 +
      test_data.testData.listview2_id
  );
  await browser.pause(7000);
}

export async function Go_to_Contact_list() {
  // Go to Contacts list view
  await browser.url(
    user_info.userInformation.var_sf_sfurl +
      test_data.testData.httpurl04 +
      test_data.testData.listview3_id
  );
  await browser.pause(7000);
}

export async function Go_to_Account() {
  // Go to Account record page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.account_obj,
    test_data.testData.account_id
  );
}

export async function Go_to_Contact() {
  // Go to Contact page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.contact_obj,
    test_data.testData.contact_id
  );
}

export async function Go_to_Account_App_list() {
  // Go to app related list
  await util.Open_SF_Record_URL(
    2,
    user_info.object.account_obj,
    test_data.testData.account_id,
    user_info.object.account_app_rel
  );
}
