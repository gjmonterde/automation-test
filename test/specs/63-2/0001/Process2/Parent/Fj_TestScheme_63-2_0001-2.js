var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0001_step_27 from "../Child/Fj_TestScheme_63-2_0001_step_27.js";
import Fj_TestScheme_63_2_0001_step_32 from "../Child/Fj_TestScheme_63-2_0001_step_32.js";
import Fj_TestScheme_63_2_0001_step_35 from "../Child/Fj_TestScheme_63-2_0001_step_35.js";
import Fj_TestScheme_63_2_0001_step_36 from "../Child/Fj_TestScheme_63-2_0001_step_36.js";
import Fj_TestScheme_63_2_0001_step_44 from "../Child/Fj_TestScheme_63-2_0001_step_44.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0001-2: Registration content check (登録内容確認)", async () => {
    // NOTE: Please put the app_name (created from Spec40 Process1) in test_info before executing this Process2
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Login as Tantou1
    // Comment out if step_44 needed to be executed
    // Comment out if step_27 is not needed to be executed
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-2_0001_step_27
    Fj_TestScheme_63_2_0001_step_27();

    // Login as Tantou1
    // Comment out if step_44 needed to be executed
    // Comment out if step_27 is the only step needed to be executed
    Login_as_Tantou1();

    // Execute Fj_TestScheme_63-2_0001_step_32
    Fj_TestScheme_63_2_0001_step_32();

    // Execute Fj_TestScheme_63-2_0001_step_35
    Fj_TestScheme_63_2_0001_step_35();

    // Execute Fj_TestScheme_63-2_0001_step_36
    Fj_TestScheme_63_2_0001_step_36();

    // Execute Fj_TestScheme_63-2_0001_step_44
    Fj_TestScheme_63_2_0001_step_44();
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
          test_data.testData.app_id = record.Id;
          test_data.testData.cl_product_id = record.genesis__CL_Product__c;
        }
      });

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
            record.fj_WebNotificationType__c ===
            test_data.testData.acceptance_text
          ) {
            test_data.testData.wnt1_id = record.Id;
            test_data.testData.wnt1_name = record.Name;
          }
        }
      });

    // Get MNT record CreationDate
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
            test_data.testData.acceptance_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt1_id = record.Id;
            test_data.testData.mnt1_name = record.Name;
          }
        }
      });
  });
}

async function Login_as_Tantou1() {
  it("Login as Tantou1", async () => {
    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Record_URL(object, id) {
  await util.Open_SF_Record_URL(1, object, id);
}

export async function Login_As_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
