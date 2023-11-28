var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0011_step_12 from "../Child/Fj_TestScheme_60_0011_step_12.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-5: Confirm payee's account (振込先口座確認)", () => {
    // Execute login to salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_60_0011_step_12
    Fj_TestScheme_60_0011_step_12();
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

    // Get BA record ID
    // ★ 新環境適用' New Env Implementation
    test_data.testData.ba_id_arr = [];
    test_data.testData.ba_name_arr = [];

    // Get BA records
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_RefApplication__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .skip(1)
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          test_data.testData.ba_id_arr.push(records[i].Id);
          test_data.testData.ba_name_arr.push(records[i].Name);
        }
      });

    // Login to org
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
