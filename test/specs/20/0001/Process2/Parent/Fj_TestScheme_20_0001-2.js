var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0001_step_22 from "../Child/Fj_TestScheme_20_0001_step_22.js";
import Fj_TestScheme_20_0001_step_23 from "../Child/Fj_TestScheme_20_0001_step_23.js";
import Fj_TestScheme_20_0001_step_24 from "../Child/Fj_TestScheme_20_0001_step_24.js";
import Fj_TestScheme_20_0001_step_29 from "../Child/Fj_TestScheme_20_0001_step_29.js";
import Fj_TestScheme_20_0001_step_30 from "../Child/Fj_TestScheme_20_0001_step_30.js";
import Fj_TestScheme_20_0001_step_32 from "../Child/Fj_TestScheme_20_0001_step_32.js";
import Fj_TestScheme_20_0001_step_35 from "../Child/Fj_TestScheme_20_0001_step_35.js";
import Fj_TestScheme_20_0001_step_44 from "../Child/Fj_TestScheme_20_0001_step_44.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0001-2: Registration content check (登録内容確認)", () => {
    // Execute login to salesforce
    // NOTE: Don't run if executing Fj_TestScheme_20_0001_step_44 only
    Login_to_Salesforce();

    // Execute Fj_TestScheme_20_0001_step_22
    Fj_TestScheme_20_0001_step_22();

    // Execute Fj_TestScheme_20_0001_step_23
    Fj_TestScheme_20_0001_step_23();

    // Execute Fj_TestScheme_20_0001_step_24
    Fj_TestScheme_20_0001_step_24();

    // Execute Fj_TestScheme_20_0001_step_29
    Fj_TestScheme_20_0001_step_29();

    // Execute Fj_TestScheme_20_0001_step_30
    Fj_TestScheme_20_0001_step_30();

    // Execute Fj_TestScheme_20_0001_step_32
    Fj_TestScheme_20_0001_step_32();

    // Execute Fj_TestScheme_20_0001_step_35
    Fj_TestScheme_20_0001_step_35();

    // Execute Fj_TestScheme_20_0001_step_44
    Fj_TestScheme_20_0001_step_44();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
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
    // Application 1
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
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

    // Application 2
    await conn
      .sobject("genesis__Applications__c")
      .select(
        "Id, Name, genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name"
      )
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
          test_data.testData.account_name2 = record.genesis__Account__r.Name;
          test_data.testData.account_id2 = record.genesis__Account__c;
          test_data.testData.contact_id2 = record.fj_RefContact__c;
          test_data.testData.contact_name2 = record.fj_RefContact__r.Name;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.app2_id);

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

    // Listview - Application
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "genesis__Applications__c",
        Name: test_data.testData.all_app_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview4_id = record.Id;
        }
      });
    // Record check
    await util.Record_check(1, test_data.testData.listview4_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
}
