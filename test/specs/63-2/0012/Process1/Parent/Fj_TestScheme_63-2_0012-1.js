var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0012_step_03 from "../Child/Fj_TestScheme_63-2_0012_step_03.js";
import Fj_TestScheme_63_2_0012_step_04 from "../Child/Fj_TestScheme_63-2_0012_step_04.js";
import Fj_TestScheme_63_2_0012_step_07 from "../Child/Fj_TestScheme_63-2_0012_step_07.js";
import Fj_TestScheme_63_2_0012_step_11 from "../Child/Fj_TestScheme_63-2_0012_step_11.js";
import Fj_TestScheme_63_2_0012_step_20 from "../Child/Fj_TestScheme_63-2_0012_step_20.js";

export default async function suite() {
  describe("Fj_TestScheme_63-2_0012-1: Initial process check (初期処理確認)", () => {
    // Login to Salesforce org
    Login_To_Salesforce();

    // Execute Fj_TestScheme_63-2_0012_step_03
    Fj_TestScheme_63_2_0012_step_03();

    // Execute Fj_TestScheme_63-2_0012_step_04
    Fj_TestScheme_63_2_0012_step_04();

    // Execute Fj_TestScheme_63-2_0012_step_07
    Fj_TestScheme_63_2_0012_step_07();

    // Execute Fj_TestScheme_63-2_0012_step_11
    Fj_TestScheme_63_2_0012_step_11();

    // Execute Fj_TestScheme_63-2_0012_step_20
    Fj_TestScheme_63_2_0012_step_20();
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

    // Get Exec Result record
    await conn
      .sobject("FJ_ExecutionResult__c")
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
          test_data.testData.exec_result_name = record.Name;
          test_data.testData.exec_result_id = record.Id;
        }
      });

    // Get ER transfer slip records
    await conn
      .sobject("FJ_ExecutionRequest__c")
      .select("Id, Name, RecordTypeId, RecordType.Name")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (test_data.testData.er4_record_type == record.RecordType.Name) {
            test_data.testData.er4_id = record.Id;
            test_data.testData.er4_name = record.Name;
          }

          if (test_data.testData.er13_record_type == record.RecordType.Name) {
            test_data.testData.er13_id = record.Id;
            test_data.testData.er13_name = record.Name;
          }
        }
      });

    // Login to org as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Record_URL(url_type, object, id, object_r) {
  switch (url_type) {
    case 1:
      // Open URL record
      await util.Open_SF_Record_URL(1, object, id);
      break;

    case 2:
      // Open URL record related list
      await util.Open_SF_Record_URL(2, object, id, object_r);
      break;
  }
}
