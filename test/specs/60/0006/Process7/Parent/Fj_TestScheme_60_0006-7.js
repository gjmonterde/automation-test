var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0006_step_33 from "../Child/Fj_TestScheme_60_0006_step_33.js";
import Fj_TestScheme_60_0006_step_35 from "../Child/Fj_TestScheme_60_0006_step_35.js";
import Fj_TestScheme_60_0006_step_38 from "../Child/Fj_TestScheme_60_0006_step_38.js";
import Fj_TestScheme_60_0006_step_40 from "../Child/Fj_TestScheme_60_0006_step_40.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0006-7: Examination Approval Confirmation (審査決裁確定)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as Shinsa1
    Login_as_Shinsa1();

    // Execute Fj_TestScheme_60_0006_step_33
    Fj_TestScheme_60_0006_step_33();

    // Execute Fj_TestScheme_60_0006_step_35
    Fj_TestScheme_60_0006_step_35();

    // Execute Fj_TestScheme_60_0006_step_38
    Fj_TestScheme_60_0006_step_38();

    // Execute Fj_TestScheme_60_0006_step_40
    Fj_TestScheme_60_0006_step_40();
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
      .sobject("genesis__Applications__c")
      .select("Id, Name, genesis__CL_Product__c")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.cl_prod_id = record.genesis__CL_Product__c;
        }
      });
  });
}

async function Login_as_Shinsa1() {
  it("Login as Shinsa1", async () => {
    // Login as shinsa1 user
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Salesforce_APP_Record() {
  // Go to APP record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );

  // Switch to 告知画面 tab
  await util.Application_Record_Scrolling(3);
}

export async function Open_Salesforce_EXS_Record() {
  // Go to EXS record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.exs_obj,
    test_data.testData.exs_id
  );
}

export async function Open_Salesforce_CL_Product() {
  // Go to CL Product detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.pro_obj,
    test_data.testData.cl_prod_id
  );
}
