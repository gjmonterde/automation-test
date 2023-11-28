var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0011_step_104 from "../Child/Fj_TestScheme_10_0011_step_104.js";
import Fj_TestScheme_10_0011_step_105 from "../Child/Fj_TestScheme_10_0011_step_105.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0011-22: Effected contruct confirmation (契約成立確認)", () => {
    // Execute login to salesforce
    Login_to_Salesforce();

    // Execute Fj_TestScheme_10_0011_step_104
    Fj_TestScheme_10_0011_step_104();

    // Execute Fj_TestScheme_10_0011_step_105
    Fj_TestScheme_10_0011_step_105();
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
    // FJ_RequiredDocument__c
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_Document_Category_Label__c: test_data.testData.rdc_doc_category1,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.rdc1_id = record.Id;
          test_data.testData.rdc1_name = record.Name;
        }
      });

    // Bank Account
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_IsForTransfer__c,fj_FinancialInstitutionName__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.fj_IsForTransfer__c === test_data.testData.isTrue) {
            test_data.testData.ba_name = record.Name;
            test_data.testData.ba_id = record.Id;
            break;
          }
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
