var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0011_step_01 from "../Child/Fj_TestScheme_63-2_0011_step_01.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0011-1: Initial process check (初期処理確認)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0011_step_01
    Fj_TestScheme_63_2_0011_step_01();
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
      .select("Id")
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

    // Get MNT record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_MailNotificationType__c: test_data.testData.mnt3_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.mnt3_id = record.Id;
          test_data.testData.mnt3_name = record.Name;
          test_data.testData.mail_time = record.CreatedDate;
        }
      });

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Record_URL(url_type, object, id, object_r) {
  switch (url_type) {
    case 1:
      // Open URL record
      await util.Open_SF_Record_URL(1, object, id);
      break;

    case 2:
      // Open URL record related list
      await util.Open_SF_Record_URL(2, object, id, object_r);
      break;
  }
}
