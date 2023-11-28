var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0004_step_01 from "../Child/Fj_TestScheme_60_0004_step_01";
import Fj_TestScheme_60_0004_step_03 from "../Child/Fj_TestScheme_60_0004_step_03";
import Fj_TestScheme_60_0004_step_04 from "../Child/Fj_TestScheme_60_0004_step_04";
import Fj_TestScheme_60_0004_step_12 from "../Child/Fj_TestScheme_60_0004_step_12";

export default async function suite() {
  describe("Fj_TestScheme_60_0004-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce
    Login_To_Salesforce();

    // Execute Fj_TestScheme_60_0004_step_01
    Fj_TestScheme_60_0004_step_01();

    // Execute Fj_TestScheme_60_0004_step_03
    Fj_TestScheme_60_0004_step_03();

    // Execute Fj_TestScheme_60_0004_step_04
    Fj_TestScheme_60_0004_step_04();

    // Execute Fj_TestScheme_60_0004_step_12
    Fj_TestScheme_60_0004_step_12();
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
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
        }
      });

    // Get EXM name and record ID
    await conn
      .sobject("FJ_Examination__c")
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
          test_data.testData.exm_id = record.Id;
          test_data.testData.exm_name = record.Name;
        }
      });

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);

    // Go to 審査 detail page
    await util.Open_SF_Record_URL(
      1,
      user_info.object.exm_obj,
      test_data.testData.exm_id
    );

    // Scroll to view - SEC related list
    await util.Scroll_to_related_list(test_data.testData.sec_header);
  });
}
