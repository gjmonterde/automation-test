var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0011_step_118 from "../Child/Fj_TestScheme_63-1_0011_step_118.js";
import Fj_TestScheme_63_1_0011_step_119 from "../Child/Fj_TestScheme_63-1_0011_step_119.js";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0011-25.09: Complete condition check (After re-conditon check) (条件確認完了(再条件確認後))", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0011_step_118
    Fj_TestScheme_63_1_0011_step_118();

    // Execute Fj_TestScheme_63-1_0011_step_119
    Fj_TestScheme_63_1_0011_step_119();
  });
}

async function Query_Salesforce_Records() {
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

    // Get CNT record
    await conn
      .sobject("FJ_Contracting__c")
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
          test_data.testData.cnt_id = record.Id;
          test_data.testData.cnt_name = record.Name;
        }
      });

    // Get AGR record
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.agr1_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.agr1_id = record.Id;
          test_data.testData.agr1_name = record.Name;
        }
      });

    // Get WNT record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_WebNotificationType__c: test_data.testData.wnt5_type,
      })
      .sort({ Name: -1 })
      .limit(1)
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.wnt1_id = record.Id;
          test_data.testData.wnt1_name = record.Name;
        }
      });

    // Get MNT record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name")
      .sort({ Name: -1 })
      .limit(1)
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_MailNotificationType__c: test_data.testData.mnt5_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.mnt1_id = record.Id;
          test_data.testData.mnt1_name = record.Name;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Login_as_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
