var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0011_step_38 from "../Child/Fj_TestScheme_50_0011_step_38.js";
import Fj_TestScheme_50_0011_step_39 from "../Child/Fj_TestScheme_50_0011_step_39.js";
import Fj_TestScheme_50_0011_step_42 from "../Child/Fj_TestScheme_50_0011_step_42.js";
import Fj_TestScheme_50_0011_step_68 from "../Child/Fj_TestScheme_50_0011_step_68.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0011-9: Complete condition check (条件確認完了)", () => {
    // Execute Fetch data
    Fetch_data();

    // Execute Login to Salesforce
    Login_to_Salesforce();

    // Execute Fj_TestScheme_50_0011_step_38
    Fj_TestScheme_50_0011_step_38();

    // Execute Fj_TestScheme_50_0011_step_39
    Fj_TestScheme_50_0011_step_39();

    // Execute Login to Salesforce
    // NOTE: Execute Login to Salesforce again if running step 39 before step 42
    Login_to_Salesforce();

    // Execute Fj_TestScheme_50_0011_step_42
    Fj_TestScheme_50_0011_step_42();

    // Execute Fj_TestScheme_50_0011_step_68
    Fj_TestScheme_50_0011_step_68();
  });
}

async function Fetch_data() {
  it("Fetch data from Salesforce", async () => {
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
      .select("Id, Name, genesis__Account__c")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
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
            test_data.testData.agreement_text
          ) {
            test_data.testData.wnt2_name = record.Name;
            test_data.testData.wnt2_id = record.Id;
          }
        }
      });

    // Get MNT record
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
            test_data.testData.agreement_text ===
            record.fj_MailNotificationType__c
          ) {
            test_data.testData.mnt2_name = record.Name;
            test_data.testData.mnt2_id = record.Id;
            test_data.testData.mail_time = record.CreatedDate;
          }
        }
      });

    // Bank Account
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.fj_IsForTransfer__c === true) {
            test_data.testData.ba_name = record.Name;
            test_data.testData.ba_id = record.Id;
            break;
          }
        }
      });

    // FJ_AgreementProcess__c
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name":
          test_data.testData.condition_confirmation_record_type,
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

    // Maximize browser
    await browser.maximizeWindow();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
