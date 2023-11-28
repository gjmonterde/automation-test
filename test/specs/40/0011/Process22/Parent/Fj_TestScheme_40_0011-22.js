var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0011_step_104 from "../Child/Fj_TestScheme_40_0011_step_104.js";
import Fj_TestScheme_40_0011_step_105 from "../Child/Fj_TestScheme_40_0011_step_105.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0011-22: Effected contract confirmation (契約成立確認)", () => {
    // Execute Login to Salesforce as auditor
    // NOTE: ALWAYS Execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_40_0011_step_104
    Fj_TestScheme_40_0011_step_104();

    // Execute Fj_TestScheme_40_0011_step_105
    Fj_TestScheme_40_0011_step_105();
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

    // Get RDC record
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_Document_Category_Label__c: test_data.testData.rdc1_category,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc_id = record.Id;
          test_data.testData.rdc_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.rdc_id);

    // Bank Account
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_IsForTransfer__c: test_data.testData.isTrue,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ba_name = record.Name;
          test_data.testData.ba_id = record.Id;
          break;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.ba_id);

    // Login to org - tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
