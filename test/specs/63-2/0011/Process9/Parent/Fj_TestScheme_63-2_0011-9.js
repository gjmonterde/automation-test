var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0011_step_38 from "../Child/Fj_TestScheme_63-2_0011_step_38.js";
import Fj_TestScheme_63_2_0011_step_39 from "../Child/Fj_TestScheme_63-2_0011_step_39.js";
import Fj_TestScheme_63_2_0011_step_42 from "../Child/Fj_TestScheme_63-2_0011_step_42.js";
import Fj_TestScheme_63_2_0011_step_68 from "../Child/Fj_TestScheme_63-2_0011_step_68.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0011-9: Complete condition check (条件確認完了)", async () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-2_0011_step_38
    Fj_TestScheme_63_2_0011_step_38();

    // Execute Fj_TestScheme_63-2_0011_step_39
    Fj_TestScheme_63_2_0011_step_39();

    // Execute Fj_TestScheme_63-2_0011_step_42
    Fj_TestScheme_63_2_0011_step_42();

    // Execute Fj_TestScheme_63-2_0011_step_68
    Fj_TestScheme_63_2_0011_step_68();
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

    // Get WNT record
    await conn
      .sobject("FJ_WebNotification__c")
      .select("Id, Name, CreatedDate")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_WebNotificationType__c: test_data.testData.wnt5_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.wnt5_id = record.Id;
          test_data.testData.wnt5_name = record.Name;
          test_data.testData.mail_time = record.CreatedDate;
        }
      });

    // Get MNT record
    await conn
      .sobject("FJ_MailNotification__c")
      .select("Id, Name, CreatedDate")
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
          test_data.testData.mnt5_id = record.Id;
          test_data.testData.mnt5_name = record.Name;
          test_data.testData.mail_time = record.CreatedDate;
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

    // Get BA record
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .sort({ Name: 1 })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.fj_IsForTransfer__c == true) {
            test_data.testData.ba_id = record.Id;
            test_data.testData.ba_name = record.Name;
          }
        }
      });

    // Login as tantou1
    await Login_As_Tantou1();
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

    case 3:
      // Open URL edit record
      await util.Open_SF_Record_URL(3, object, id);
      break;
  }
}

export async function Login_As_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}

export async function Login_As_Tantou1() {
  // Login as tantou1 user
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
