var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_50_0011_step_08 from "../Child/Fj_TestScheme_50_0011_step_08.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0011-3: Confirm payee's account (振込先口座登録)", () => {
    // Execute Login to Salesforce
    Login_to_Salesforce();

    // Execute Fj_TestScheme_50_0011_step_08
    Fj_TestScheme_50_0011_step_08();
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

    // Maximize browser
    await browser.maximizeWindow();

    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Get_BankAccount() {
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
        if (record.fj_IsForTransfer__c === test_data.testData.isTrue) {
          test_data.testData.ba_name = record.Name;
          test_data.testData.ba_id = record.Id;
          break;
        }
      }
    });
}
