var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0011_step_100 from "../Child/Fj_TestScheme_40_0011_step_100.js";
import Fj_TestScheme_40_0011_step_101 from "../Child/Fj_TestScheme_40_0011_step_101.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0011-21: Final Approval (最終承認)", () => {
    // Execute Login to Salesforce as auditor
    // NOTE: ALWAYS Execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0011_step_100
    Fj_TestScheme_40_0011_step_100();

    // Execute Fj_TestScheme_40_0011_step_101
    Fj_TestScheme_40_0011_step_101();
  });
}

async function Login_to_Salesforce() {
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
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.contract_agreement_rectype ===
            record.RecordType.Name
          ) {
            test_data.testData.agr_name = record.Name;
            test_data.testData.agr_id = record.Id;
          }
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.agr_id);

    // Get BA records
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_Verification_Status__c: test_data.testData.ba_status_code,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          test_data.testData.ba_name_arr.push(records[i].Name);
          test_data.testData.ba_id_arr.push(records[i].Id);
        }
      });

    // Login to org - shinsa1
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Get_WebNotif() {
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
          test_data.testData.contract_conclusion_rectype ===
          record.fj_WebNotificationType__c
        ) {
          test_data.testData.wnt_id = record.Id;
          test_data.testData.wnt_name = record.Name;
        }
      }
    });

  // Record check
  await util.Record_check(1, test_data.testData.wnt_id);
}

export async function Click_Notification() {
  // Cick Notification button
  await $(".//*[@class='unsNotificationsCounter']").click();
  await browser.pause(5000);

  // Click Notification record
  await $(".//a[@class='notification-link']")
    .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
    .waitForClickable({ timeout: 10000 });
  await $(".//a[@class='notification-link']")
    .$(".//span[contains(text(), '" + test_data.testData.agr_name + "')]")
    .click();
  await browser.pause(5000);
}
