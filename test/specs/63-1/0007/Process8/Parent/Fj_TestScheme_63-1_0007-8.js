var jsforce = require("jsforce");
const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_63_1_0007_step_28 from "../Child/Fj_TestScheme_63-1_0007_step_28";
import Fj_TestScheme_63_1_0007_step_31 from "../Child/Fj_TestScheme_63-1_0007_step_31";
import Fj_TestScheme_63_1_0007_step_33 from "../Child/Fj_TestScheme_63-1_0007_step_33";
import Fj_TestScheme_63_1_0007_step_35 from "../Child/Fj_TestScheme_63-1_0007_step_35";

export default async function suite() {
  describe("Fj_TestScheme_63-1_0007-8: Warranty Examination③ Complete (保証審査③完了) and Final Warranty Examination Check (最終保証審査確認)", () => {
    // Query Salesforce Records
    Query_Salesforce_Records();

    // Execute Fj_TestScheme_63-1_0007_step_28
    Fj_TestScheme_63_1_0007_step_28();

    // Execute Fj_TestScheme_63-1_0007_step_31
    Fj_TestScheme_63_1_0007_step_31();

    // Execute Fj_TestScheme_63-1_0007_step_33
    Fj_TestScheme_63_1_0007_step_33();

    // Execute Fj_TestScheme_63-1_0007_step_35
    Fj_TestScheme_63_1_0007_step_35();
  });
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
          test_data.testData.gud_id = record.Id;
          test_data.testData.gud_name = record.Name;
        }
      });

    // Maximize browser
    await browser.maximizeWindow();

    // Login as tantou1
    await LoginPage.open();
    await LoginPage.login_as_user_in_charge();
    await browser.pause(10000);

    // App Launcher-CL Originate
    await util.App_Launcher(test_data.testData.originate_app);
  });
}

export async function Open_Salesforce_GUA_Record() {
  // Go to GUA record detail screen
  await util.Open_SF_Record_URL(
    1,
    user_info.object.gua_obj,
    test_data.testData.gua_id
  );
}
