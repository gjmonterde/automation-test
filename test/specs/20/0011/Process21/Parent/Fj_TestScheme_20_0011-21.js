var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0011_step_101 from "../Child/Fj_TestScheme_20_0011_step_101.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0011-21: Final Approval (最終承認)", () => {
    // Execute Login as auditor
    Login_As_Auditor();

    // Execute Fj_TestScheme_20_0011_step_101
    Fj_TestScheme_20_0011_step_101();
  });
}

async function Login_As_Auditor() {
  it("Login to As Auditor", async () => {
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
    // Record check
    await util.Record_check(1, test_data.testData.app_id);

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
    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get AGR record
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

          test_data.testData.agr_name = record.Name;
          test_data.testData.agr_id = record.Id;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.agr_id);

    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(15000);
    test_data.testData.logged_status = "shinsa";

    // Change App
    await Change_App();
  });
}

export async function Login_As_UIC() {
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
  // Get NEW WNT record
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
          test_data.testData.contracts_text === record.fj_WebNotificationType__c
        ) {
          test_data.testData.wnt_name = record.Name;
          test_data.testData.wnt_id = record.Id;
        }
      }
    });
  // Record check
  await util.Record_check(1, test_data.testData.wnt_id);

  // Get NEW MNT record
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
          test_data.testData.contracts_text ===
          record.fj_MailNotificationType__c
        ) {
          test_data.testData.mnt_name = record.Name;
          test_data.testData.mnt_id = record.Id;
        }
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.mnt_id);

  // Login to org
  await LoginPage.open();
  await LoginPage.login_as_user_in_charge();
  await browser.pause(15000);
  test_data.testData.logged_status = "uic";

  // Change App
  await Change_App();
}

async function Change_App() {
  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
