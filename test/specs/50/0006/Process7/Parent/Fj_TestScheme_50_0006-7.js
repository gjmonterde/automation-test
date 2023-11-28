var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0006_step_33 from "../Child/Fj_TestScheme_50_0006_step_33.js";
import Fj_TestScheme_50_0006_step_36 from "../Child/Fj_TestScheme_50_0006_step_36.js";
import Fj_TestScheme_50_0006_step_39 from "../Child/Fj_TestScheme_50_0006_step_39.js";
import Fj_TestScheme_50_0006_step_40 from "../Child/Fj_TestScheme_50_0006_step_40.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0006-7: Examination Approval Confirmation (審査決裁確定)", () => {
    // Query Salesforce records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_50_0006_step_33
    Fj_TestScheme_50_0006_step_33();

    // Execute Fj_TestScheme_50_0006_step_36
    Fj_TestScheme_50_0006_step_36();

    // Execute Fj_TestScheme_50_0006_step_39
    Fj_TestScheme_50_0006_step_39();

    // Execute Fj_TestScheme_50_0006_step_40
    Fj_TestScheme_50_0006_step_40();
  });
}

async function Query_Salesforce_Records() {
  it("Query Salesforce records", async () => {
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
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.clProd_name = record.genesis__CL_Product_Name__c;
        }
      });

    // Get EXS record
    await conn
      .sobject("FJ_ExternalScoring__c")
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
          test_data.testData.exs_id = record.Id;
          test_data.testData.exs_name = record.Name;
        }
      });

    // Get CL商品 record ID
    await conn
      .sobject("clcommon__CL_Product__c")
      .select("Id, Name")
      .where({
        clcommon__Product_Name__c: test_data.testData.clProd_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.clProd_id = record.Id;
        }
      });

    // Login as shinsa1
    await Login_As_Shinsa1_User();
  });
}

export async function Login_As_Shinsa1_User() {
  // Login as shinsa1 user
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);

  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}

export async function Login_As_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
