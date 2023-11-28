var jsforce = require("jsforce");
const util = require("../../../../../pageobjects/utility");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_2_0007_step_28 from "../Child/Fj_TestScheme_63-2_0007_step_28.js";
import Fj_TestScheme_63_2_0007_step_31 from "../Child/Fj_TestScheme_63-2_0007_step_31.js";
import Fj_TestScheme_63_2_0007_step_34 from "../Child/Fj_TestScheme_63-2_0007_step_34.js";
import Fj_TestScheme_63_2_0007_step_35 from "../Child/Fj_TestScheme_63-2_0007_step_35.js";

export default async function suite() {
  describe(
    "Fj_TestScheme_63-2_0007-8: Warranty Examination③ Complete (保証審査③完了) and " +
      "Final Warranty Examination Check (最終保証審査確認)",
    async () => {
      // Query Salesforce Records
      Query_Salesforce_Records();

      // Execute Fj_TestScheme_63-2_0007_step_28
      Fj_TestScheme_63_2_0007_step_28();

      // Execute Fj_TestScheme_63-2_0007_step_31
      Fj_TestScheme_63_2_0007_step_31();

      // Execute Fj_TestScheme_63-2_0007_step_34
      Fj_TestScheme_63_2_0007_step_34();

      // Execute Fj_TestScheme_63-2_0007_step_35
      Fj_TestScheme_63_2_0007_step_35();
    }
  );
}

async function Query_Salesforce_Records() {
  it("Query Salesforce Records", async () => {
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
      .select("Id, Name, genesis__CL_Product__c")
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

    // Get GUA record
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

    // Get GUD record
    await conn
      .sobject("FJ_GuaranteeChkDetail__c")
      .select("Id, Name, RecordType.Name")
      .where({
        fj_RefGuaranteeChk__c: test_data.testData.gua_id,
        "RecordType.Name": test_data.testData.gud3_record_type,
      })
      .execute(function (err, records) {
        if (err) {
          return console.error(err);
        }
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          test_data.testData.gud3_id = record.Id;
          test_data.testData.gud3_name = record.Name;
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

export async function Open_Record_URL(object, id) {
  // Open URL record
  await util.Open_SF_Record_URL(1, object, id);
}

export async function Login_As_Admin() {
  // Login as admin user
  await LoginPage.open();
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
