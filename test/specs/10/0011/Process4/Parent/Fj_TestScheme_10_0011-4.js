var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0011_step_12 from "../Child/Fj_TestScheme_10_0011_step_12.js";
import Fj_TestScheme_10_0011_step_15 from "../Child/Fj_TestScheme_10_0011_step_15.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0011-4: Confirm payee's account (振込先口座登録)", () => {
    // Execute Login
    Login();

    // Execute Fj_TestScheme_10_0011_step_12
    Fj_TestScheme_10_0011_step_12();

    // Execute Fj_TestScheme_10_0011_step_15
    Fj_TestScheme_10_0011_step_15();
  });
}

async function Login() {
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
