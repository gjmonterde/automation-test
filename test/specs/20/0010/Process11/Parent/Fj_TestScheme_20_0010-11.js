var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_20_0010_step_25 from "../Child/Fj_TestScheme_20_0010_step_25.js";
import Fj_TestScheme_20_0010_step_27 from "../Child/Fj_TestScheme_20_0010_step_27.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0010-11: Requested document check (徴求書類確認)", () => {
    // Login as tantou1 user
    Login_As_Tantou1_User();

    // Execute Fj_TestScheme_20_0010_step_25
    Fj_TestScheme_20_0010_step_25();

    // Execute Fj_TestScheme_20_0010_step_27
    Fj_TestScheme_20_0010_step_27();
  });
}

async function Login_As_Tantou1_User() {
  it("Login as tantou1 user", async () => {
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

    // Record check
    await util.Record_check(1, test_data.testData.cnt_id);

    // Get VER record where レコードタイプ = ②契約手続き前
    await conn
      .sobject("FJ_Verification__c")
      .select("Id, Name,RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.ver2_rectype,
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

    // Record check
    await util.Record_check(1, test_data.testData.ver2_id);

    // Get RDC records
    test_data.testData.rdc_name_arr = [];
    test_data.testData.rdc_id_arr = [];
    await conn
      .sobject("FJ_RequiredDocument__c")
      .select("Id, Name")
      .where({
        fj_RefVerification__c: test_data.testData.ver2_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          test_data.testData.rdc_name_arr.push(records[i].Name);
          test_data.testData.rdc_id_arr.push(records[i].Id);
        }
      });

    // Record check
    await util.Record_check(2, test_data.testData.rdc_id_arr);

    // Login as tantou1 user
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(15000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}
