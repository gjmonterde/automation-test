var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0001_step_22 from "../Child/Fj_TestScheme_60_0001_step_22.js";
import Fj_TestScheme_60_0001_step_23 from "../Child/Fj_TestScheme_60_0001_step_23.js";
import Fj_TestScheme_60_0001_step_26 from "../Child/Fj_TestScheme_60_0001_step_26.js";
import Fj_TestScheme_60_0001_step_30 from "../Child/Fj_TestScheme_60_0001_step_30.js";
import Fj_TestScheme_60_0001_step_31 from "../Child/Fj_TestScheme_60_0001_step_31.js";
import Fj_TestScheme_60_0001_step_33 from "../Child/Fj_TestScheme_60_0001_step_33.js";
import Fj_TestScheme_60_0001_step_45 from "../Child/Fj_TestScheme_60_0001_step_45.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0001-2: Registration content check (登録内容確認) and Application content check (申込内容確認)", () => {
    // Execute Login to Salesforce
    // NOTE: Don't run if executing Fj_TestScheme_60_0001_step_45 only
    Login_to_Salesforce();

    // Execute Fj_TestScheme_60_0001_step_22
    Fj_TestScheme_60_0001_step_22();

    // Execute Fj_TestScheme_60_0001_step_23
    Fj_TestScheme_60_0001_step_23();

    // Execute Fj_TestScheme_60_0001_step_26
    Fj_TestScheme_60_0001_step_26();

    // Execute Fj_TestScheme_60_0001_step_30
    Fj_TestScheme_60_0001_step_30();

    // Execute Fj_TestScheme_60_0001_step_31
    Fj_TestScheme_60_0001_step_31();

    // Execute Fj_TestScheme_60_0001_step_33
    Fj_TestScheme_60_0001_step_33();

    // Execute Fj_TestScheme_60_0001_step_45
    Fj_TestScheme_60_0001_step_45();
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
        "Id, Name, genesis__Account__c, genesis__Account__r.Name, fj_RefContact__c, fj_RefContact__r.Name, fj_BirthDate__c, fj_Email__c"
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
          test_data.testData.birth_date = record.fj_BirthDate__c;
          test_data.testData.email = record.fj_Email__c;
        }
      });

    // Get CL Product
    await conn
      .sobject("genesis__Applications__c")
      .select("genesis__CL_Product__c")
      .where({
        Id: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.clProd_id = record.genesis__CL_Product__c;
        }
      });

    // Listview - Application
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
    // Record check
    await util.Record_check(1, test_data.testData.listview_id);

    // Maximize browser
    await browser.maximizeWindow();

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await Change_App();
  });
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Tantou1() {
  // Login to org - tantou1
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);

  // App Launcher-CL Originate
  await Change_App();
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(15000);
}

export async function Open_App_Record() {
  // Go to App Record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
