var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0001_step_22 from "../Child/Fj_TestScheme_70_0001_step_22.js";
import Fj_TestScheme_70_0001_step_23 from "../Child/Fj_TestScheme_70_0001_step_23.js";
import Fj_TestScheme_70_0001_step_27 from "../Child/Fj_TestScheme_70_0001_step_27.js";
import Fj_TestScheme_70_0001_step_29 from "../Child/Fj_TestScheme_70_0001_step_29.js";
import Fj_TestScheme_70_0001_step_31 from "../Child/Fj_TestScheme_70_0001_step_31.js";
import Fj_TestScheme_70_0001_step_33 from "../Child/Fj_TestScheme_70_0001_step_33.js";
import Fj_TestScheme_70_0001_step_36 from "../Child/Fj_TestScheme_70_0001_step_36.js";
import Fj_TestScheme_70_0001_step_37 from "../Child/Fj_TestScheme_70_0001_step_37.js";
import Fj_TestScheme_70_0001_step_45 from "../Child/Fj_TestScheme_70_0001_step_45.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0001-2: Registration content check (登録内容確認)", () => {
    // Execute login to salesforce
    // Please update Application names based on App records created on 70_0001-1
    // NOTE: Always execute except when running step 45 only
    Login_to_Salesforce();

    // Execute Fj_TestScheme_70_0001_step_22
    Fj_TestScheme_70_0001_step_22();

    // Execute Fj_TestScheme_70_0001_step_23
    Fj_TestScheme_70_0001_step_23();

    // Execute Fj_TestScheme_70_0001_step_27
    Fj_TestScheme_70_0001_step_27();

    // Execute Fj_TestScheme_70_0001_step_29
    Fj_TestScheme_70_0001_step_29();

    // Execute Fj_TestScheme_70_0001_step_31
    Fj_TestScheme_70_0001_step_31();

    // Execute Fj_TestScheme_70_0001_step_33
    Fj_TestScheme_70_0001_step_33();

    // Execute Fj_TestScheme_70_0001_step_36
    Fj_TestScheme_70_0001_step_36();

    // Execute Fj_TestScheme_70_0001_step_37
    Fj_TestScheme_70_0001_step_37();

    // Execute Fj_TestScheme_70_0001_step_45
    Fj_TestScheme_70_0001_step_45();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
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
    await Get_APP1();

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
    await util.Record_check(3, test_data.testData.ba_id);

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
    await util.Record_check(3, test_data.testData.app_id2);

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
    await util.Record_check(3, test_data.testData.ba_id2);

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
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_admin() {
  // Get APP record
  await Get_APP1();

  // login as admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}

async function Get_APP1() {
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
  await util.Record_check(3, test_data.testData.app_id);
}

export async function Open_SF_App_Record() {
  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Open_SF_Account_Record() {
  // Go to Account record page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.account_obj,
    test_data.testData.account_id
  );
}

export async function Ope_SF_Account_Two_Record() {
  // Go to Account record page
  await util.Open_SF_Record_URL(
    1,
    user_info.object.account_obj,
    test_data.testData.account_id2
  );
}
