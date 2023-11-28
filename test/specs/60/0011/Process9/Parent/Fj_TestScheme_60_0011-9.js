var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_60_0011_step_38 from "../Child/Fj_TestScheme_60_0011_step_38.js";
import Fj_TestScheme_60_0011_step_39 from "../Child/Fj_TestScheme_60_0011_step_39.js";
import Fj_TestScheme_60_0011_step_42 from "../Child/Fj_TestScheme_60_0011_step_42.js";
import Fj_TestScheme_60_0011_step_68 from "../Child/Fj_TestScheme_60_0011_step_68.js";

export default async function suite() {
  describe("Fj_TestScheme_60_0011-9: Complete condition check (条件確認完了)", () => {
    // Execute Login to Salesforce
    // NOTE: ALWAYS execute before steps
    Login_to_Salesforce();

    // Execute Fj_TestScheme_60_0011_step_38
    Fj_TestScheme_60_0011_step_38();

    // Execute Fj_TestScheme_60_0011_step_39
    Fj_TestScheme_60_0011_step_39();

    // Execute Fj_TestScheme_60_0011_step_42
    Fj_TestScheme_60_0011_step_42();

    // Execute Fj_TestScheme_60_0011_step_68
    Fj_TestScheme_60_0011_step_68();
  });
}

async function Login_to_Salesforce() {
  it("Login to Salesforce", async () => {
    // Connect to salesforce
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
    // FJ_Contracting__c
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

    // FJ_AgreementProcess__c
    await conn
      .sobject("FJ_AgreementProcess__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefContracting__c: test_data.testData.cnt_id,
        "RecordType.Name": test_data.testData.agr1_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.agr1_name = record.Name;
          test_data.testData.agr1_id = record.Id;
        }
      });

    // Get BA1 record ID
    await conn
      .sobject("clcommon__Bank_Account__c")
      .select("Id, Name, fj_RefApplication__c, fj_BranchName__c")
      .where({
        fj_RefApplication__c: test_data.testData.app_id,
        fj_BranchName__c: test_data.testData.branch_name1,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.ba1_id = record.Id;
          test_data.testData.ba1_name = record.Name;
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

export async function Open_SF_App_Record() {
  // Go to App record
  await util.Open_SF_Record_URL(
    1,
    user_info.object.app_obj,
    test_data.testData.app_id
  );
}
