var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0007_step_19 from "../Child/Fj_TestScheme_20_0007_step_19";
import Fj_TestScheme_20_0007_step_30 from "../Child/Fj_TestScheme_20_0007_step_30";
import Fj_TestScheme_20_0007_step_34 from "../Child/Fj_TestScheme_20_0007_step_34";
import Fj_TestScheme_20_0007_step_35 from "../Child/Fj_TestScheme_20_0007_step_35";

export default async function suite() {
  describe("Fj_TestScheme_20_0007-5: Warranty Examination②Complete (保証審査②完了)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_20_0007_step_19
    Fj_TestScheme_20_0007_step_19();

    // Execute Fj_TestScheme_20_0007_step_30
    Fj_TestScheme_20_0007_step_30();

    // Execute Fj_TestScheme_20_0007_step_34
    Fj_TestScheme_20_0007_step_34();

    // Execute Fj_TestScheme_20_0007_step_35
    Fj_TestScheme_20_0007_step_35();
  });
}

async function Login_To_Salesforce() {
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

    // Get GUA record ID and name
    await conn
      .sobject("FJ_GuaranteeChk__c")
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
          test_data.testData.gua_id = record.Id;
          test_data.testData.gua_name = record.Name;
        }
      });

    // Record check
    await util.Record_check(1, test_data.testData.gua_id);

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Go_to_GUA() {
  // Go to its related 保証審査 Detail Screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}
