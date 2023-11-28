var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page";
import Fj_TestScheme_60_0009_step_10 from "../Child/Fj_TestScheme_60_0009_step_10";
import Fj_TestScheme_60_0009_step_11 from "../Child/Fj_TestScheme_60_0009_step_11";

export default async function suite() {
  describe("Fj_TestScheme_60_0009-2: Examination Condition Registration (審査条件登録)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_60_0009_step_10
    Fj_TestScheme_60_0009_step_10();

    // Execute Fj_TestScheme_60_0009_step_11
    Fj_TestScheme_60_0009_step_11();
  });
}

async function Login_To_Salesforce() {
  it("Login to Salesforce", async () => {
    // JSforce connection
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

    // Get Application Id
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

    // Get CRE record ID and name
    await conn
      .sobject("FJ_CreditApproval__c")
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
          test_data.testData.cre_id = record.Id;
          test_data.testData.cre_name = record.Name;
        }
      });

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to 契約手続き Detail Screen
    await util.Open_SF_Record_URL(
      1,
      user_info.object.cre_obj,
      test_data.testData.cre_id
    );
  });
}
