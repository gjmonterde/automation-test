var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_00_0001_step_20 from "../Child/Fj_TestScheme_00_0001_step_20.js";
import Fj_TestScheme_00_0001_step_21 from "../Child/Fj_TestScheme_00_0001_step_21.js";
import Fj_TestScheme_00_0001_step_22 from "../Child/Fj_TestScheme_00_0001_step_22.js";
import Fj_TestScheme_00_0001_step_23 from "../Child/Fj_TestScheme_00_0001_step_23.js";
import Fj_TestScheme_00_0001_step_24 from "../Child/Fj_TestScheme_00_0001_step_24.js";
import Fj_TestScheme_00_0001_step_25 from "../Child/Fj_TestScheme_00_0001_step_25.js";
import Fj_TestScheme_00_0001_step_26 from "../Child/Fj_TestScheme_00_0001_step_26.js";
import Fj_TestScheme_00_0001_step_27 from "../Child/Fj_TestScheme_00_0001_step_27.js";
import Fj_TestScheme_00_0001_step_28 from "../Child/Fj_TestScheme_00_0001_step_28.js";
import Fj_TestScheme_00_0001_step_29 from "../Child/Fj_TestScheme_00_0001_step_29.js";
import Fj_TestScheme_00_0001_step_30 from "../Child/Fj_TestScheme_00_0001_step_30.js";
import Fj_TestScheme_00_0001_step_31 from "../Child/Fj_TestScheme_00_0001_step_31.js";
import Fj_TestScheme_00_0001_step_32 from "../Child/Fj_TestScheme_00_0001_step_32.js";
import Fj_TestScheme_00_0001_step_33 from "../Child/Fj_TestScheme_00_0001_step_33.js";
import Fj_TestScheme_00_0001_step_34 from "../Child/Fj_TestScheme_00_0001_step_34.js";
import Fj_TestScheme_00_0001_step_35 from "../Child/Fj_TestScheme_00_0001_step_35.js";
import Fj_TestScheme_00_0001_step_41 from "../Child/Fj_TestScheme_00_0001_step_41.js";
import Fj_TestScheme_00_0001_step_44 from "../Child/Fj_TestScheme_00_0001_step_44.js";
import Fj_TestScheme_00_0001_step_45 from "../Child/Fj_TestScheme_00_0001_step_45.js";

export default async function suite() {
  describe("Fj_TestScheme_00_0001-2: Registration content check (登録内容確認)", async () => {
    // NOTE: Please put the app_name (created from Process1) in test_info before executing this Process2
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as Tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_00_0001_step_20
    Fj_TestScheme_00_0001_step_20();

    // Execute Fj_TestScheme_00_0001_step_21
    Fj_TestScheme_00_0001_step_21();

    // Execute Fj_TestScheme_00_0001_step_22
    Fj_TestScheme_00_0001_step_22();

    // Execute Fj_TestScheme_00_0001_step_23
    Fj_TestScheme_00_0001_step_23();

    // Execute Fj_TestScheme_00_0001_step_24
    Fj_TestScheme_00_0001_step_24();

    // Execute Fj_TestScheme_00_0001_step_25
    Fj_TestScheme_00_0001_step_25();

    // Execute Fj_TestScheme_00_0001_step_26
    Fj_TestScheme_00_0001_step_26();

    // Execute Fj_TestScheme_00_0001_step_27
    Fj_TestScheme_00_0001_step_27();

    //**WITH ACCOUNT AUTHENTICATION, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_28
    Fj_TestScheme_00_0001_step_28();

    //**WITHOUT ACCOUNT AUTHENTICATION, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_29
    Fj_TestScheme_00_0001_step_29();

    //**WITH EXISTING CUSTOMERS, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_30
    Fj_TestScheme_00_0001_step_30();

    //**WITHOUT EXISTING CUSTOMERS, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_31
    Fj_TestScheme_00_0001_step_31();

    //**WITH REQUIRED DOCUMENTS UPLOAD, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_32
    Fj_TestScheme_00_0001_step_32();

    //**WITHOUT REQUIRED DOCUMENTS UPLOAD, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_33
    Fj_TestScheme_00_0001_step_33();

    //**WITH SIMULTANEOUS APPLICATION FOR SET PRODUCTS, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_34
    Fj_TestScheme_00_0001_step_34();

    //**WITHOUT SIMULTANEOUS APPLICATION FOR SET PRODUCTS, EXECUTE THIS */
    // Execute Fj_TestScheme_00_0001_step_35
    Fj_TestScheme_00_0001_step_35();

    // Execute Fj_TestScheme_00_0001_step_41
    Fj_TestScheme_00_0001_step_41();

    // Execute Fj_TestScheme_00_0001_step_44
    Fj_TestScheme_00_0001_step_44();

    // Execute Fj_TestScheme_00_0001_step_45
    Fj_TestScheme_00_0001_step_45();
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
        "Id, Name, genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name," +
          "genesis__CL_Product__c,genesis__CL_Product__r.Name"
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
          // ★ 新環境適用' New Env Implementation
          test_data.testData.pro_id = record.genesis__CL_Product__c;
          test_data.testData.pro_name = record.genesis__CL_Product__r.Name;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.app_id);
    await util.Record_check(1, test_data.testData.account_id);
    await util.Record_check(1, test_data.testData.contact_id);
    await util.Record_check(1, test_data.testData.pro_id);

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
    // Record check
    await util.Record_check(1, test_data.testData.ba_id);

    // ★ 新環境適用' New Env Implementation
    // Listview - AppLogs すべて選択
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "FJ_ApplicationAccessLog__c",
        Name: test_data.testData.all_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview1_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview1_id);

    // ★ 新環境適用' New Env Implementation
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
          test_data.testData.listview2_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview2_id);

    // ★ 新環境適用' New Env Implementation
    // Listview - 店舗
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "FJ_Branch__c",
        Name: test_data.testData.all_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview3_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview3_id);

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
          test_data.testData.listview4_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview4_id);

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
            test_data.testData.listview5_id = record.Id;
          }
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview5_id);

    // ★ 新環境適用' New Env Implementation
    // Listview - MU
    await conn
      .sobject("ListView")
      .select("Id, Name, SobjectType, DeveloperName")
      .where({
        SobjectType: "FJ_MuCooperationApp__c",
        Name: test_data.testData.all_mu_listview,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.listview6_id = record.Id;
        }
      });

    // ★ 新環境適用' New Env Implementation
    // Record check
    await util.Record_check(1, test_data.testData.listview6_id);
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    // ★ 新環境適用' New Env Implementation
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Relogin_as_Tantou1() {
  // Login as tantou1 user
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  // ★ 新環境適用' New Env Implementation
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Open_Salesforce_App_Record() {
  // ★ 新環境適用' New Env Implementation
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
