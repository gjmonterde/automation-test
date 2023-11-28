var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0010_step_34 from "../Child/Fj_TestScheme_60_0010_step_34.js";
import Fj_TestScheme_60_0010_step_35 from "../Child/Fj_TestScheme_60_0010_step_35.js";
import Fj_TestScheme_60_0010_step_37 from "../Child/Fj_TestScheme_60_0010_step_37.js";
import Fj_TestScheme_60_0010_step_38 from "../Child/Fj_TestScheme_60_0010_step_38.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0010-13: Document check (書類確認)", () => {
    // Login as tantou1
    Login_as_Tantou1();

    // Execute Fj_TestScheme_60_0010_step_34
    Fj_TestScheme_60_0010_step_34();

    // Execute Fj_TestScheme_60_0010_step_35
    Fj_TestScheme_60_0010_step_35();

    // // Execute Fj_TestScheme_60_0010_step_37
    Fj_TestScheme_60_0010_step_37();

    // Execute Fj_TestScheme_60_0010_step_38
    Fj_TestScheme_60_0010_step_38();
  });
}

async function Login_as_Tantou1() {
  it("Login as tantou1", async () => {
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
      .select("Id, Name, genesis__Account__c, genesis__Account__r.Name")
      .where({
        Name: test_data.testData.app_name,
      })
      .execute(function (err, records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.app_id = record.Id;
          test_data.testData.account_id = record.genesis__Account__c;
          test_data.testData.account_name = record.genesis__Account__r.Name;
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

    // Get VER record where レコードタイプ = ②契約手続き前
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ver2_id = record.Id;
          test_data.testData.ver2_name = record.Name;
        }
      });

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
