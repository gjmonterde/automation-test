var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0011_step_110 from "../Child/Fj_TestScheme_60_0011_step_110.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-21: Final Approval (最終承認)", () => {
    // Execute login to salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_60_0011_step_110
    Fj_TestScheme_60_0011_step_110();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
    // Login
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
    // Get Application record ID
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
    // FJ_Contracting__c
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

    // FJ_AgreementProcess__c
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordTypeId")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (test_data.testData.agr2_record_type === record.RecordTypeId) {
            test_data.testData.agr2_name = record.Name;
            test_data.testData.agr2_id = record.Id;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();
  });
}

export async function Get_Notif() {
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
  // Application
  await conn
    .sobject("genesis__Applications__c")
    .select("Id, Name")
    .where({
      Name: test_data.testData.app_name,
    })
    .execute(function (err, records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.app_id = record.Id;
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
          test_data.testData.conclusion_text
        ) {
          test_data.testData.wnt1_name = record.Name;
          test_data.testData.wnt1_id = record.Id;
        }
      }
    });
  // Get MNT record
  await conn
    .sobject("FJ_MailNotification__c")
    .select("Id, Name, toLabel(fj_MailNotificationType__c)")
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
          test_data.testData.conclusion_text ===
          record.fj_MailNotificationType__c
        ) {
          test_data.testData.mnt1_name = record.Name;
          test_data.testData.mnt1_id = record.Id;
        }
      }
    });

  // FJ_Contracting__c
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

  // FJ_AgreementProcess__c
  await conn
    .sobject("FJ_AgreementProcess__c")
    .select("Id, Name, RecordType.Name")
    .where({
      fj_RefContracting__c: test_data.testData.cnt_id,
      "RecordType.Name": test_data.testData.agreement_text,
    })
    .execute(function (err, records) {
      if (err) {
        return console.error(err);
      }
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        test_data.testData.agr2_name = record.Name;
        test_data.testData.agr2_id = record.Id;
      }
    });
}

export async function Login_as_Shinsa1() {
  // Login to org
  await LoginPage.open();
  await LoginPage.login_as_auditor();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}

export async function Login_as_Admin() {
  // Login to org
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
