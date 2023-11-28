var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0011_step_96 from "../Child/Fj_TestScheme_10_0011_step_96.js";
import Fj_TestScheme_10_0011_step_97 from "../Child/Fj_TestScheme_10_0011_step_97.js";
import Fj_TestScheme_10_0011_step_100 from "../Child/Fj_TestScheme_10_0011_step_100.js";
import Fj_TestScheme_10_0011_step_101 from "../Child/Fj_TestScheme_10_0011_step_101.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0011-21: Final Approval (最終承認)", () => {
    // Execute Login to Salesforce
    Login_to_Salesforce();

    // Execute Fj_TestScheme_10_0011_step_96
    Fj_TestScheme_10_0011_step_96();

    // Execute Fj_TestScheme_10_0011_step_97
    Fj_TestScheme_10_0011_step_97();

    // Execute Fj_TestScheme_10_0011_step_100
    Fj_TestScheme_10_0011_step_100();

    // Execute Fj_TestScheme_10_0011_step_101
    Fj_TestScheme_10_0011_step_101();
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
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (
            test_data.testData.agr_contract_agreement_record_type ===
            record.RecordType.Name
          ) {
            test_data.testData.agr_name = record.Name;
            test_data.testData.agr_id = record.Id;
          }
        }
      });

    // Bank Account
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c,fj_FinancialInstitutionName__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_Verification_Status__c: test_data.testData.ba_status_code,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          test_data.testData.ba_nameArr.push(records[i].Name);
          test_data.testData.ba_idArr.push(records[i].Id);
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_auditor();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
