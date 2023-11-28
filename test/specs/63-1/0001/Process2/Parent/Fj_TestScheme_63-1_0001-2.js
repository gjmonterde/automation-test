var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0001_step_22 from "../Child/Fj_TestScheme_63-1_0001_step_22";
import Fj_TestScheme_63_1_0001_step_23 from "../Child/Fj_TestScheme_63-1_0001_step_23";
import Fj_TestScheme_63_1_0001_step_28 from "../Child/Fj_TestScheme_63-1_0001_step_28";
import Fj_TestScheme_63_1_0001_step_29 from "../Child/Fj_TestScheme_63-1_0001_step_29";
import Fj_TestScheme_63_1_0001_step_31 from "../Child/Fj_TestScheme_63-1_0001_step_31";
import Fj_TestScheme_63_1_0001_step_34 from "../Child/Fj_TestScheme_63-1_0001_step_34";
import Fj_TestScheme_63_1_0001_step_45 from "../Child/Fj_TestScheme_63-1_0001_step_45";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0001-2: Registration content check (登録内容確認)", async () => {
    // NOTE: Please put the app_name (created from Process1) in test_info before executing this Process2
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as Tantou1
    // Comment out if all/one of step_31, step_34, step_45 are needed to be executed
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-1_0001_step_22
    Fj_TestScheme_63_1_0001_step_22();

    // Execute Fj_TestScheme_63-1_0001_step_23
    Fj_TestScheme_63_1_0001_step_23();

    // Execute Fj_TestScheme_63-1_0001_step_28
    Fj_TestScheme_63_1_0001_step_28();

    // Execute Fj_TestScheme_63-1_0001_step_29
    Fj_TestScheme_63_1_0001_step_29();

    // Execute Fj_TestScheme_63-1_0001_step_31
    Fj_TestScheme_63_1_0001_step_31();

    // Execute Fj_TestScheme_63-1_0001_step_34
    Fj_TestScheme_63_1_0001_step_34();

    // Execute Fj_TestScheme_63-1_0001_step_45
    Fj_TestScheme_63_1_0001_step_45();
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
      .select(
        "Id, Name, genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c"
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
        }
      });

    // Get BA record
    await conn
      .sobject("clcommon__Bank_Account__c")
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
          test_data.testData.ba_id = record.Id;
          test_data.testData.ba_name = record.Name;
        }
      });

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

    // ★ 新環境適用' New Env Implementation
    // Listview - APP
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "genesis__Applications__c",
        Name: test_data.testData.all_apps_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview_id2 = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Listview - 店舗
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "FJ_Branch__c",
        Name: test_data.testData.all_aal_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview_id3 = record.Id;
        }
      });

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
          test_data.testData.listview_id4 = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Listview - Contact
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "Contact",
        Name: test_data.testData.all_contact_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview_id5 = record.Id;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await Relogin_as_Tantou1();
  });
}

export async function Relogin_as_Tantou1() {
  // Login as tantou1 user
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Open_Salesforce_App_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Login_as_Admin() {
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
